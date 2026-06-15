#!/usr/bin/env python3
"""
scripts/reconcile-conversions.py

Monthly offline-conversion reconciliation. Joins the WhatsApp ref-code ledger
(data/ref-codes.csv, produced by dump-ref-codes.mjs) against a Prepsync booking
export, and emits a Google Ads Offline Conversion Import CSV — turning "this
gclid clicked WhatsApp" + "this ref code booked & showed up" into an uploadable
conversion with a peso value.

Standalone repo tooling — NOT part of the deployed app. Run locally by Sanel.
Python 3, stdlib only.

Usage:
    python scripts/reconcile-conversions.py --prepsync export.csv
    python scripts/reconcile-conversions.py --prepsync export.csv \
        --value-col Total --field "Ref Ads" --out conversions.csv

Flow:
    1. Read Prepsync (utf-8-sig), keep rows where Estado == "Enviado".
    2. Normalize ref codes on both sides (strip, uppercase, prepend EDM- to bare
       6-char codes), drop anything not matching ^EDM-[2-9A-HJ-NP-Z]{6}$.
    3. Inner-join Prepsync[<field>] against the ledger's `code`.
    4. Write the Google Ads CSV (rows with a gclid only).
    5. Print a reconciliation summary.
"""

import argparse
import csv
import re
import sys
from datetime import datetime

REF_RE = re.compile(r"^EDM-[2-9A-HJ-NP-Z]{6}$")
REF_BODY_RE = re.compile(r"^[2-9A-HJ-NP-Z]{6}$")
REF_EMBEDDED_RE = re.compile(r"EDM-[2-9A-HJ-NP-Z]{6}")

CONVERSION_NAME = "Cita Realizada"
CONVERSION_CURRENCY = "MXN"
# Yucatán is fixed UTC-6 year-round (no DST), so the offset is a constant.
TZ_OFFSET = "-06:00"

GADS_HEADER = [
    "Google Click ID",
    "Conversion Name",
    "Conversion Time",
    "Conversion Value",
    "Conversion Currency",
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


def main():
    ap = argparse.ArgumentParser(description="Reconcile ref codes → Google Ads offline conversions.")
    ap.add_argument("--refs", default="data/ref-codes.csv", help="ref-codes ledger CSV")
    ap.add_argument("--prepsync", required=True, help="Prepsync export CSV")
    ap.add_argument("--field", default="Ref Ads", help="Prepsync ref-code column header")
    ap.add_argument("--value-col", default="Ganancia", help='value column (e.g. "Ganancia" or "Total")')
    ap.add_argument("--date-col", default=None, help="appointment-date column (autodetected if omitted)")
    ap.add_argument("--out", default="google-ads-offline-conversions.csv", help="output CSV path")
    args = ap.parse_args()

    ledger = load_ledger(args.refs)

    # Read Prepsync.
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

    # Keep only booked/sent rows.
    sent_rows = [r for r in rows if str(r.get(estado_col, "")).strip() == "Enviado"]

    output_rows = []          # rows written to Google Ads CSV (have gclid)
    matched_count = 0         # Prepsync rows matched to a ledger code
    matched_codes = set()     # normalized codes that matched something
    no_gclid = []             # (code) matched but ledger has no gclid
    unmatched_prepsync = []   # booked rows whose code is blank/typo/unknown
    total_value = 0.0

    for r in sent_rows:
        code = normalize_ref(r.get(field_col))
        rec = ledger.get(code) if code else None
        if not rec:
            unmatched_prepsync.append((str(r.get(field_col) or "").strip()))
            continue

        matched_count += 1
        matched_codes.add(code)

        gclid = str(rec.get("gclid") or "").strip()
        value = parse_value(r.get(value_col))
        ctime = parse_datetime(r.get(date_col))

        if not gclid:
            no_gclid.append(code)
            continue

        if ctime is None:
            print(f"[reconcile] WARN: unparseable date for {code}: {r.get(date_col)!r}",
                  file=sys.stderr)
        value_str = f"{value:.2f}" if value is not None else ""
        if value is not None:
            total_value += value
        output_rows.append([gclid, CONVERSION_NAME, ctime or "", value_str, CONVERSION_CURRENCY])

    # Codes that were clicked but never booked = lost leads.
    unmatched_codes = [c for c in ledger if c not in matched_codes]

    # Write Google Ads CSV.
    with open(args.out, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f)
        w.writerow(GADS_HEADER)
        w.writerows(output_rows)

    # Summary.
    print("─" * 60)
    print("Reconciliation summary")
    print("─" * 60)
    print(f"Booked rows (Estado=Enviado):       {len(sent_rows)}")
    print(f"Matched to a ref code:              {matched_count}")
    print(f"  → written to Google Ads CSV:      {len(output_rows)}")
    print(f"  → matched but NO gclid:           {len(no_gclid)}", end="")
    print(f"  {sorted(no_gclid)}" if no_gclid else "")
    print(f"Unmatched booked rows (blank/typo): {len(unmatched_prepsync)}", end="")
    print(f"  {unmatched_prepsync}" if unmatched_prepsync else "")
    print(f"Unmatched ref codes (lost leads):   {len(unmatched_codes)}", end="")
    print(f"  {sorted(unmatched_codes)}" if unmatched_codes else "")
    print(f"Total attributed value:             {total_value:.2f} {CONVERSION_CURRENCY}")
    print("─" * 60)
    print(f"Wrote {len(output_rows)} conversion(s) → {args.out}")


if __name__ == "__main__":
    main()
