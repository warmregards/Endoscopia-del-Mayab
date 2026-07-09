#!/usr/bin/env python3
"""
scripts/diagnose-supabase.py

One-off diagnostic: why does reconcile-conversions.py pull 0 rows from the
Supabase `appointments` table? Reports counts + redacted samples so we can see
whether the table has rows, whether booked_at is populated/recent, and whether
calendar_phone/ref_ads are present. No PII printed (phone → length only, no
patient names selected). Run via the diagnose-supabase workflow (uses the
existing SUPABASE_* secrets).
"""

import json
import os
import sys
import urllib.error
import urllib.request
from datetime import datetime, timedelta, timezone

base = os.environ.get("SUPABASE_URL", "").rstrip("/")
key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY", "")
if not base or not key:
    sys.exit("[diagnose] need SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY in env")

# PROJECT-MATCH CHECK. PrepSync writes to prod project "pvmjuxwcfpzbvxrpqlxl".
# We only print a boolean (the full URL is a masked secret), so nothing leaks.
# True  → website reads PrepSync's prod → genuinely empty → PrepSync never pushed.
# False → project MISMATCH → website reads an empty sibling → repoint the secret.
PREPSYNC_PROD = "pvmjuxwcfpzbvxrpqlxl"
print(f"[diagnose] website SUPABASE_URL points at PrepSync prod "
      f"({PREPSYNC_PROD}): {PREPSYNC_PROD in base}")

# Decode the KEY's JWT claims (role + project ref) WITHOUT printing the key.
# A real service_role key bypasses RLS; an anon key is filtered by the
# authenticated-only "_own" policies → returns 0 rows even when the table is full.
import base64  # noqa: E402
try:
    _payload = key.split(".")[1]
    _payload += "=" * (-len(_payload) % 4)
    _claims = json.loads(base64.urlsafe_b64decode(_payload))
    print(f"[diagnose] key role claim: {_claims.get('role')!r}  "
          f"(need 'service_role'; 'anon' → RLS hides all rows)   "
          f"key ref: {_claims.get('ref')!r}")
except Exception as _e:  # noqa: BLE001
    print(f"[diagnose] could not decode key claims: {_e}")


def get(path):
    req = urllib.request.Request(
        f"{base}/rest/v1/{path}",
        headers={"apikey": key, "Authorization": f"Bearer {key}",
                 "Accept": "application/json", "Prefer": "count=exact"},
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.status, r.headers.get("Content-Range"), json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        return e.code, None, e.read().decode()[:400]
    except Exception as e:  # noqa: BLE001
        return None, None, str(e)


print("=" * 64)
st, cr, body = get("appointments?select=id&limit=1")
total = cr.split("/")[-1] if cr else "?"
print(f"GET appointments?select=id  ->  HTTP {st}   total rows = {total}")
if st not in (200, 206):
    print("BODY:", body)
    sys.exit("[diagnose] appointments table not reachable — wrong table name, "
             "project, or key. See body above.")

cols = "id,booked_at,scheduled_at,ref_ads,prep_status,calendar_phone,cost_estimate"
st, cr, rows = get(f"appointments?select={cols}&limit=2000")
if st not in (200, 206):
    print(f"GET appointments?select={cols}  ->  HTTP {st}")
    print("BODY:", rows)
    sys.exit("[diagnose] one of the needed columns doesn't exist — see body above.")

n = len(rows)
booked = sum(1 for r in rows if r.get("booked_at"))
sched = sum(1 for r in rows if r.get("scheduled_at"))
phone = sum(1 for r in rows if str(r.get("calendar_phone") or "").strip())
ref = sum(1 for r in rows if str(r.get("ref_ads") or "").strip())
cutoff = (datetime.now(timezone.utc) - timedelta(days=183)).strftime("%Y-%m-%dT%H:%M:%SZ")
recent = sum(1 for r in rows if (r.get("booked_at") or "") >= cutoff)

print(f"rows fetched (≤2000):              {n}")
print(f"  with booked_at set:              {booked}")
print(f"  with scheduled_at set:           {sched}")
print(f"  booked_at ≥ {cutoff[:10]} (183d):   {recent}   ← reconcile's filter")
print(f"  with calendar_phone:             {phone}")
print(f"  with ref_ads (EDM code):         {ref}")
print("sample rows (phone digits redacted):")
for r in rows[:8]:
    cp = r.get("calendar_phone")
    cp = f"<{len(str(cp))} chars>" if str(cp or '').strip() else "None"
    print(f"  id={str(r.get('id'))[:8]}… booked_at={r.get('booked_at')} "
          f"sched={r.get('scheduled_at')} ref={r.get('ref_ads')} "
          f"status={r.get('prep_status')} cost={r.get('cost_estimate')} phone={cp}")
print("=" * 64)
