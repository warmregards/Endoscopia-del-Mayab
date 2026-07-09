#!/usr/bin/env python3
"""
scripts/reconcile-conversions.py

Monthly offline-conversion reconciliation → Google Ads. Emits TWO upload paths,
each to its own conversion action ("GCLID Google Ads Matching" and "ECL Google
Ads Matching") so gclid vs ECL match rates can be tracked separately; deduped by
Order ID (the appointment uuid) so a booking counted in both never double-counts:

  1. gclid Offline Conversion Import — joins the WhatsApp ref-code ledger
     (data/ref-codes.csv, from dump-ref-codes.mjs) to the booking's ref code to
     recover the gclid. Deterministic, works even when the patient wasn't signed
     into Google — but only covers the ~7% of bookings that carry a ref code.
  2. Enhanced Conversions for Leads (hashed phone) — SHA-256 of the patient's
     WhatsApp contact number (appointments.calendar_phone) in E.164. Covers
     ~every booking; Google matches the paid ones back to the ad click on its
     side (no gclid needed). Misses only patients not signed into Google.

The two are complementary: each recovers conversions the other loses. Upload all
bookings via both; Google keeps the ad-attributable ones and dedupes by Order ID.

Standalone repo tooling — NOT part of the deployed app. Python 3, stdlib only.

Two input sources feed the same join/dedup/format pipeline:

  Manual  (run locally by Sanel from a Finance-tab CSV export):
    python scripts/reconcile-conversions.py --prepsync export.csv
    python scripts/reconcile-conversions.py --prepsync export.csv \
        --value-col Total --field "Ref Ads" --out conversions.csv

  Automated (the weekly GitHub Action — reads Supabase directly):
    SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... \
        python scripts/reconcile-conversions.py --from-supabase \
        --out data/offline-conversions.csv

Flow:
    1. Load booking rows. CSV mode keeps Estado == "Enviado"; Supabase mode
       pulls appointments where prep_status != 'cancelada' and ref_ads is set,
       booked within --lookback-days (default 183 ≈ 6 months). Supabase mode
       times conversions at booked_at (the booking moment — always in the past,
       so Google Ads accepts it) and values them at cost_estimate (procedure
       price); booked_at UTC is shifted to Yucatán local (−06:00).
    2. Normalize ref codes on both sides (strip, uppercase, prepend EDM- to bare
       6-char codes), drop anything not matching ^EDM-[2-9A-HJ-NP-Z]{6}$.
    3. Inner-join the booking ref code against the ledger's `code`.
    4. Collapse shared-gclid duplicates: where multiple booked codes carry the
       same gclid, keep only the earliest-minted code (one ad click → one
       conversion). Write the Google Ads CSV (rows with a gclid only).
    5. Print a reconciliation summary.
"""

import argparse
import csv
import hashlib
import json
import os
import re
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timedelta, timezone

REF_RE = re.compile(r"^EDM-[2-9A-HJ-NP-Z]{6}$")
REF_BODY_RE = re.compile(r"^[2-9A-HJ-NP-Z]{6}$")
REF_EMBEDDED_RE = re.compile(r"EDM-[2-9A-HJ-NP-Z]{6}")

# Two distinct conversion actions, one per matching method, so gclid vs ECL match
# rates can be monitored separately in Google Ads. Each feed's sheet writes its own
# name into the "Conversion Name" column, which routes the row to the right action.
# Order ID (appointment uuid) still dedupes a booking reported in BOTH feeds.
GCLID_CONVERSION_NAME = "GCLID Google Ads Matching"
ECL_CONVERSION_NAME = "ECL Google Ads Matching"
CONVERSION_CURRENCY = "MXN"
# Yucatán is fixed UTC-6 year-round (no DST), so the offset is a constant.
# NOTE: Google Ads' scheduled Google-Sheets upload rejects a colon in the offset
# ("...-06:00" → "invalid / Missing Conversion Time"). It wants +/-HHMM with no
# colon, so this is "-0600", producing e.g. "2026-04-08 17:19:17-0600".
TZ_OFFSET = "-0600"

GADS_HEADER = [
    "Google Click ID",
    "Conversion Name",
    "Conversion Time",
    "Conversion Value",
    "Conversion Currency",
    "Order ID",  # = appointment uuid → dedup key (also dedupes vs the ECL file)
]

# Google Ads Conversion Adjustments upload (RETRACT) — removes a previously
# uploaded conversion. "Conversion Time" must match the original upload (we reuse
# booked_at, which is stable), and "Adjustment Time" is when the retraction fires.
GADS_ADJ_HEADER = [
    "Google Click ID",
    "Conversion Name",
    "Conversion Time",
    "Adjustment Type",
    "Adjustment Time",
    "Order ID",
]

# Enhanced Conversions for Leads upload (hashed phone). Keyed on the SHA-256 of
# the patient's WhatsApp contact number in E.164 — Google matches it back to the
# ad click server-side, so it needs no gclid. Order ID = appointment uuid, so a
# booking reported here AND in the gclid file above collapses to one conversion.
GADS_ECL_HEADER = [
    "Phone Number",  # SHA-256 hex of the E.164 number (already-hashed upload)
    "Conversion Name",
    "Conversion Time",
    "Conversion Value",
    "Conversion Currency",
    "Order ID",
]

# ECL retractions are keyed by Order ID (no phone needed to remove a conversion).
GADS_ECL_ADJ_HEADER = [
    "Order ID",
    "Conversion Name",
    "Adjustment Type",
    "Adjustment Time",
]

# Candidate headers for the appointment-date column (matched case-insensitively
# after stripping). Prepsync exports vary; --date-col overrides.
DATE_COL_CANDIDATES = [
    "Fecha de la cita",
    "Fecha de cita",
    "Fecha cita",
    "Fecha de atención",
    "Fecha",
    "Date",
]

# Input date formats we accept, tried in order.
DATE_FORMATS = [
    "%Y-%m-%d %H:%M:%S",
    "%Y-%m-%d %H:%M",
    "%Y-%m-%dT%H:%M:%S",
    "%Y-%m-%dT%H:%M",
    "%Y-%m-%d",
    "%d/%m/%Y %H:%M:%S",
    "%d/%m/%Y %H:%M",
    "%d/%m/%Y",
    "%d-%m-%Y %H:%M:%S",
    "%d-%m-%Y %H:%M",
    "%d-%m-%Y",
]


def normalize_ref(raw):
    """Canonicalize a ref code to EDM-XXXXXX, or None if blank/invalid."""
    if raw is None:
        return None
    s = str(raw).strip().upper()
    if not s:
        return None
    # Bare 6-char code with no prefix → prepend EDM-.
    if REF_BODY_RE.match(s):
        s = "EDM-" + s
    if REF_RE.match(s):
        return s
    # Defensive: pull an embedded code out of pasted text like "(REF: EDM-XXXXXX)".
    m = REF_EMBEDDED_RE.search(s)
    return m.group(0) if m else None


def parse_value(raw):
    """Strip currency symbols/commas/percent and parse to float, or None."""
    if raw is None:
        return None
    s = re.sub(r"[^0-9.\-]", "", str(raw))
    if s in ("", "-", ".", "-."):
        return None
    try:
        return float(s)
    except ValueError:
        return None


def normalize_phone_mx(raw):
    """Best-effort normalize a free-text MX phone to E.164 (+52##########), or None.

    `appointments.calendar_phone` is un-normalized free text (whatever Omar typed
    or the calendar description carried — spaces, dashes, parens, an optional +,
    with or without 52). Mirrors the app's WhatsApp-link rule (history/page.tsx):
    strip to digits, then a bare 10-digit number is assumed Mexican and prefixed
    with 52. Also accepts numbers already carrying 52 (with or without the legacy
    mobile '1'). Returns None when it can't confidently produce 10 national digits.
    """
    if raw is None:
        return None
    digits = re.sub(r"\D", "", str(raw))
    if not digits:
        return None
    if len(digits) == 10:
        national = digits
    elif len(digits) == 12 and digits.startswith("52"):
        national = digits[2:]
    elif len(digits) == 13 and digits.startswith("521"):
        national = digits[3:]  # legacy "+52 1 <10-digit mobile>"
    else:
        return None
    if len(national) != 10:
        return None
    return "+52" + national


def sha256_hex(value):
    """Lowercase hex SHA-256 of a UTF-8 string — Google's enhanced-conversions
    hashing. Input must already be normalized (trimmed, E.164)."""
    return hashlib.sha256(value.encode("utf-8")).hexdigest()


def parse_datetime(raw):
    """Parse a Prepsync date into 'yyyy-MM-dd HH:mm:ss-06:00', or None.

    If the source has no time component, default to 12:00:00.
    """
    if raw is None:
        return None
    s = str(raw).strip()
    if not s:
        return None
    has_time = ":" in s
    dt = None
    for fmt in DATE_FORMATS:
        try:
            dt = datetime.strptime(s, fmt)
            break
        except ValueError:
            continue
    if dt is None:
        return None
    if not has_time:
        dt = dt.replace(hour=12, minute=0, second=0)
    return dt.strftime("%Y-%m-%d %H:%M:%S") + TZ_OFFSET


def resolve_col(fieldnames, wanted, fallbacks=(), required=True):
    """Resolve a column header tolerant of surrounding whitespace and case."""
    by_strip = {h.strip(): h for h in fieldnames if h is not None}
    if wanted in by_strip:
        return by_strip[wanted]
    by_lower = {h.strip().lower(): h for h in fieldnames if h is not None}
    for cand in (wanted, *fallbacks):
        key = cand.strip().lower()
        if key in by_lower:
            return by_lower[key]
    if required:
        sys.exit(
            f"[reconcile] ERROR: column {wanted!r} not found. "
            f"Available: {[h for h in fieldnames]}"
        )
    return None


def load_ledger(path):
    """Return {normalized_code: ref_record} from the ref-codes ledger."""
    by_code = {}
    try:
        with open(path, "r", encoding="utf-8-sig", newline="") as f:
            reader = csv.DictReader(f)
            for row in reader:
                code = normalize_ref(row.get("code"))
                if code:
                    by_code[code] = row
    except FileNotFoundError:
        sys.exit(f"[reconcile] ERROR: ledger not found at {path}")
    return by_code


def iso_utc_to_merida_local(raw):
    """Shift a Supabase UTC timestamp to Yucatán local (fixed −06:00) and return a
    naive 'yyyy-MM-dd HH:MM:SS' string that parse_datetime accepts, or None.

    Handles fractional seconds and a trailing 'Z' (fromisoformat pre-3.11 chokes
    on Z). Naive input is assumed to already be UTC.
    """
    if raw is None:
        return None
    s = str(raw).strip()
    if not s:
        return None
    if s.endswith("Z"):
        s = s[:-1] + "+00:00"
    try:
        dt = datetime.fromisoformat(s)
    except ValueError:
        return None
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=timezone.utc)
    merida = dt.astimezone(timezone(timedelta(hours=-6)))
    return merida.strftime("%Y-%m-%d %H:%M:%S")


def load_from_csv(args):
    """Read a Finance-tab export → (active, cancelled) booking-record lists.

    Active = Estado "Enviado" (prep sent) → conversions. Cancelled = Estado
    "Cancelada" → retractions. Date is the appointment date, already in Yucatán
    local time as exported.
    """
    try:
        with open(args.prepsync, "r", encoding="utf-8-sig", newline="") as f:
            reader = csv.DictReader(f)
            fieldnames = reader.fieldnames or []
            rows = list(reader)
    except FileNotFoundError:
        sys.exit(f"[reconcile] ERROR: Prepsync export not found at {args.prepsync}")

    if not fieldnames:
        sys.exit("[reconcile] ERROR: Prepsync export has no header row.")

    estado_col = resolve_col(fieldnames, "Estado")
    field_col = resolve_col(fieldnames, args.field)
    value_col = resolve_col(fieldnames, args.value_col, fallbacks=("Total", "Ganancia"))
    if args.date_col:
        date_col = resolve_col(fieldnames, args.date_col)
    else:
        date_col = resolve_col(fieldnames, DATE_COL_CANDIDATES[0],
                               fallbacks=tuple(DATE_COL_CANDIDATES[1:]))

    active, cancelled = [], []
    for r in rows:
        estado = str(r.get(estado_col, "")).strip().lower()
        # CSV mode has no id/phone → the ECL path stays empty here (Supabase only).
        rec = {
            "id": None,
            "ref": r.get(field_col),
            "phone": None,
            "value": r.get(value_col),
            "date": r.get(date_col),
        }
        if estado == "enviado":
            active.append(rec)
        elif estado == "cancelada":
            cancelled.append(rec)
    return active, cancelled


def load_from_supabase(args):
    """Query Supabase → (active, cancelled) booking-record lists.

    Booking-timed conversions: date is booked_at (always past), value is
    cost_estimate (procedure price). Pulls every ref-coded appointment booked
    within --lookback-days, splitting cancelled ones out for retraction. Uses the
    service role key (bypasses RLS).
    """
    base = os.environ.get("SUPABASE_URL", "").rstrip("/")
    key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY", "")
    if not base or not key:
        sys.exit("[reconcile] ERROR: --from-supabase needs SUPABASE_URL and "
                 "SUPABASE_SERVICE_ROLE_KEY in the environment.")

    cutoff = (datetime.now(timezone.utc) - timedelta(days=args.lookback_days)) \
        .strftime("%Y-%m-%dT%H:%M:%SZ")
    # No `ref_ads not.is.null` filter: the ECL (hashed-phone) path wants EVERY
    # booking, not just the ~7% that carry a WhatsApp ref code. The gclid path
    # still only emits rows whose ref code joins the ledger, so its output is
    # unchanged — it just no longer starves the phone path of the other 93%.
    params = {
        "select": "id,calendar_phone,ref_ads,booked_at,scheduled_at,prep_status,cost_estimate",
        "booked_at": f"gte.{cutoff}",
        "limit": "5000",
    }
    url = f"{base}/rest/v1/appointments?{urllib.parse.urlencode(params)}"
    req = urllib.request.Request(url, headers={
        "apikey": key,
        "Authorization": f"Bearer {key}",
        "Accept": "application/json",
    })
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read().decode("utf-8"))
    except Exception as e:  # noqa: BLE001 — surface any network/HTTP failure and abort
        sys.exit(f"[reconcile] ERROR: Supabase query failed: {e}")

    active, cancelled = [], []
    for row in data:
        # Fall back to scheduled_at only for pre-migration rows that predate
        # booked_at and haven't been re-synced yet.
        raw_dt = row.get("booked_at") or row.get("scheduled_at")
        rec = {
            "id": row.get("id"),
            "ref": row.get("ref_ads"),
            "phone": row.get("calendar_phone"),
            "value": row.get("cost_estimate"),
            "date": iso_utc_to_merida_local(raw_dt),
        }
        if str(row.get("prep_status") or "").strip().lower() == "cancelada":
            cancelled.append(rec)
        else:
            active.append(rec)
    return active, cancelled


def collect_candidates(records, ledger):
    """Join booking records against the ledger and collapse shared-gclid dupes.

    Returns (kept, stats). Each kept candidate is {gclid, code, created, value,
    ctime}. When one gclid is stamped on several booked codes (a patient tapping
    WhatsApp more than once), only the earliest-minted code survives — one ad
    click yields at most one conversion (and at most one retraction).
    """
    candidates = []
    stats = {"matched": 0, "matched_codes": set(), "no_gclid": [],
             "unmatched": [], "collapsed": []}

    for r in records:
        raw_ref = str(r.get("ref") or "").strip()
        code = normalize_ref(r.get("ref"))
        rec = ledger.get(code) if code else None
        if not rec:
            # Only a *non-empty* ref that fails to join is a typo/miss. Blank-ref
            # rows are just non-ad bookings (the 93%) and belong to the ECL path.
            if raw_ref:
                stats["unmatched"].append(raw_ref)
            continue

        stats["matched"] += 1
        stats["matched_codes"].add(code)

        gclid = str(rec.get("gclid") or "").strip()
        if not gclid:
            stats["no_gclid"].append(code)
            continue

        ctime = parse_datetime(r.get("date"))
        if ctime is None:
            print(f"[reconcile] WARN: unparseable date for {code}: {r.get('date')!r}",
                  file=sys.stderr)
        candidates.append({
            "gclid": gclid,
            "code": code,
            "order_id": str(r.get("id") or ""),
            "created": str(rec.get("created") or ""),  # ISO 8601 → sorts chronologically
            "value": parse_value(r.get("value")),
            "ctime": ctime or "",
        })

    by_gclid = {}
    for c in candidates:
        by_gclid.setdefault(c["gclid"], []).append(c)

    kept = []
    for gclid, group in by_gclid.items():  # dict preserves first-seen order
        group.sort(key=lambda c: (c["created"], c["code"]))  # earliest first, code tiebreak
        kept.append(group[0])
        if len(group) > 1:
            stats["collapsed"].append((gclid, group[0]["code"], [c["code"] for c in group[1:]]))

    return kept, stats


def build_ecl(active, cancelled, exclude_ids=frozenset()):
    """Build Enhanced-Conversions-for-Leads rows keyed on the hashed phone.

    Every active booking whose calendar_phone normalizes to E.164 becomes one
    conversion (Order ID = appointment uuid). Cancelled bookings become
    Order-ID-keyed retractions. Unlike the gclid path there is no per-identifier
    collapse: one booking = one Order ID = one conversion. Returns (conv, retr,
    stats).

    Mutual exclusion ("gclid wins"): any Order ID in `exclude_ids` already went
    to the gclid feed and is dropped here, so each appointment uuid lands in
    exactly ONE conversion action. This is required because the two feeds now go
    to two SEPARATE actions ("GCLID/ECL Google Ads Matching"); Google's Order-ID
    dedup only works *within* one action, so it can't dedupe across them for us
    the way it did when both shared a single action.
    """
    stats = {"active": len(active), "with_phone": 0, "bad_phone": [], "no_id": 0,
             "excluded_gclid": 0}
    conv = []
    for r in active:
        oid = str(r.get("id") or "")
        if oid and oid in exclude_ids:
            stats["excluded_gclid"] += 1  # gclid feed already claimed this booking
            continue
        e164 = normalize_phone_mx(r.get("phone"))
        if not e164:
            if str(r.get("phone") or "").strip():
                stats["bad_phone"].append(str(r.get("phone")).strip())
            continue
        if not oid:
            stats["no_id"] += 1
            continue
        stats["with_phone"] += 1
        ctime = parse_datetime(r.get("date"))
        conv.append({
            "order_id": oid,
            "phone_hash": sha256_hex(e164),
            "value": parse_value(r.get("value")),
            "ctime": ctime or "",
        })

    retr = []
    seen = set()
    for r in cancelled:
        oid = str(r.get("id") or "")
        # Skip Order IDs the gclid feed owns — their retraction goes to the gclid
        # adjustments file, keeping the exclusion symmetric on the cancel side.
        if oid and oid not in seen and oid not in exclude_ids:
            seen.add(oid)
            retr.append({"order_id": oid})
    return conv, retr, stats


def main():
    ap = argparse.ArgumentParser(description="Reconcile ref codes → Google Ads offline conversions.")
    ap.add_argument("--refs", default="data/ref-codes.csv", help="ref-codes ledger CSV")
    ap.add_argument("--prepsync", help="Prepsync export CSV (manual mode)")
    ap.add_argument("--from-supabase", action="store_true",
                    help="pull booking rows from Supabase instead of a CSV export")
    ap.add_argument("--lookback-days", type=int, default=183,
                    help="Supabase mode: only bookings within N days (default 183 ≈ 6 months)")
    ap.add_argument("--field", default="Ref Ads", help="Prepsync ref-code column header (CSV mode)")
    ap.add_argument("--value-col", default="Ganancia", help='value column, CSV mode (e.g. "Ganancia" or "Total")')
    ap.add_argument("--date-col", default=None, help="appointment-date column, CSV mode (autodetected if omitted)")
    ap.add_argument("--out", default="google-ads-offline-conversions.csv", help="output gclid conversions CSV path")
    ap.add_argument("--adjustments-out", default="google-ads-conversion-adjustments.csv",
                    help="output gclid conversion-adjustments (RETRACT) CSV path")
    ap.add_argument("--ecl-out", default="google-ads-enhanced-conversions.csv",
                    help="output Enhanced-Conversions-for-Leads (hashed phone) CSV path")
    ap.add_argument("--ecl-adjustments-out", default="google-ads-enhanced-conversion-adjustments.csv",
                    help="output ECL conversion-adjustments (RETRACT) CSV path")
    args = ap.parse_args()

    if args.from_supabase == bool(args.prepsync):
        sys.exit("[reconcile] ERROR: pass exactly one of --from-supabase or --prepsync <csv>.")

    ledger = load_ledger(args.refs)
    active_rows, cancelled_rows = \
        load_from_supabase(args) if args.from_supabase else load_from_csv(args)

    conv, conv_stats = collect_candidates(active_rows, ledger)
    retr, retr_stats = collect_candidates(cancelled_rows, ledger)

    # Don't retract a gclid that also has a live booking (e.g. same patient
    # rebooked after cancelling one appointment) — the live conversion wins.
    active_gclids = {c["gclid"] for c in conv}
    retr = [c for c in retr if c["gclid"] not in active_gclids]

    # Adjustment time = now, Yucatán local. Google requires it >= the original
    # conversion time and in the past; run time satisfies both.
    adj_time = datetime.now(timezone(timedelta(hours=-6))) \
        .strftime("%Y-%m-%d %H:%M:%S") + TZ_OFFSET

    conv_out = [[c["gclid"], GCLID_CONVERSION_NAME, c["ctime"],
                 f"{c['value']:.2f}" if c["value"] is not None else "", CONVERSION_CURRENCY,
                 c["order_id"]]
                for c in conv]
    retr_out = [[c["gclid"], GCLID_CONVERSION_NAME, c["ctime"], "RETRACT", adj_time, c["order_id"]] for c in retr]

    # Enhanced Conversions for Leads (hashed phone) — every booking, not just the
    # ref-coded ones, MINUS any Order ID the gclid feed already claimed (mutual
    # exclusion, "gclid wins"). The two feeds now target two separate conversion
    # actions, so Google can't dedupe across them; we must guarantee one booking
    # lands in exactly one feed here, or a booking with both a ref code and a
    # matchable phone would double-count once both actions are Primary.
    gclid_order_ids = {c["order_id"] for c in conv if c["order_id"]} \
        | {c["order_id"] for c in retr if c["order_id"]}
    ecl_conv, ecl_retr, ecl_stats = build_ecl(active_rows, cancelled_rows,
                                              exclude_ids=gclid_order_ids)
    ecl_conv_out = [[c["phone_hash"], ECL_CONVERSION_NAME, c["ctime"],
                     f"{c['value']:.2f}" if c["value"] is not None else "", CONVERSION_CURRENCY,
                     c["order_id"]]
                    for c in ecl_conv]
    ecl_retr_out = [[c["order_id"], ECL_CONVERSION_NAME, "RETRACT", adj_time] for c in ecl_retr]

    total_value = sum(c["value"] for c in conv if c["value"] is not None)
    ecl_total_value = sum(c["value"] for c in ecl_conv if c["value"] is not None)
    # Codes that were clicked but never booked (in either bucket) = lost leads.
    matched_codes = conv_stats["matched_codes"] | retr_stats["matched_codes"]
    unmatched_codes = [c for c in ledger if c not in matched_codes]

    with open(args.out, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f)
        w.writerow(GADS_HEADER)
        w.writerows(conv_out)

    with open(args.adjustments_out, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f)
        w.writerow(GADS_ADJ_HEADER)
        w.writerows(retr_out)

    with open(args.ecl_out, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f)
        w.writerow(GADS_ECL_HEADER)
        w.writerows(ecl_conv_out)

    with open(args.ecl_adjustments_out, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f)
        w.writerow(GADS_ECL_ADJ_HEADER)
        w.writerows(ecl_retr_out)

    # Summary.
    print("─" * 60)
    print("Reconciliation summary")
    print("─" * 60)
    print(f"Booking rows considered:            {len(active_rows)}")
    print(f"Matched to a ref code:              {conv_stats['matched']}")
    print(f"  → written to conversions CSV:     {len(conv_out)}")
    print(f"  → matched but NO gclid:           {len(conv_stats['no_gclid'])}", end="")
    print(f"  {sorted(conv_stats['no_gclid'])}" if conv_stats["no_gclid"] else "")
    print(f"  → gclid duplicates collapsed:     {len(conv_stats['collapsed'])}")
    for gclid, kept, dropped in conv_stats["collapsed"]:
        print(f"      …{gclid[-12:]}  kept {kept}  dropped {dropped}")
    print(f"Unmatched booked rows (blank/typo): {len(conv_stats['unmatched'])}", end="")
    print(f"  {conv_stats['unmatched']}" if conv_stats["unmatched"] else "")
    print(f"Cancelled rows considered:          {len(cancelled_rows)}")
    print(f"  → RETRACT rows written:           {len(retr_out)}")
    print(f"Unmatched ref codes (lost leads):   {len(unmatched_codes)}", end="")
    print(f"  {sorted(unmatched_codes)}" if unmatched_codes else "")
    print(f"Total attributed value:             {total_value:.2f} {CONVERSION_CURRENCY}")
    print("─" * 60)
    print("Enhanced Conversions for Leads (hashed phone)")
    print("─" * 60)
    print(f"Active bookings considered:         {ecl_stats['active']}")
    print(f"  → excluded (already in gclid feed):{ecl_stats['excluded_gclid']}")
    print(f"  → with a usable phone (ECL rows): {ecl_stats['with_phone']}")
    print(f"  → phone present but unparseable:  {len(ecl_stats['bad_phone'])}", end="")
    print(f"  {ecl_stats['bad_phone']}" if ecl_stats["bad_phone"] else "")
    print(f"  → dropped (no Order ID/uuid):     {ecl_stats['no_id']}")
    print(f"  → RETRACT rows written:           {len(ecl_retr_out)}")
    print(f"ECL attributed value (pre-match):   {ecl_total_value:.2f} {CONVERSION_CURRENCY}")
    print("─" * 60)
    print(f"Wrote {len(conv_out)} gclid conversion(s) → {args.out}")
    print(f"Wrote {len(retr_out)} gclid retraction(s) → {args.adjustments_out}")
    print(f"Wrote {len(ecl_conv_out)} ECL conversion(s) → {args.ecl_out}")
    print(f"Wrote {len(ecl_retr_out)} ECL retraction(s) → {args.ecl_adjustments_out}")


if __name__ == "__main__":
    main()
