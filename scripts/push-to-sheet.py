#!/usr/bin/env python3
"""
scripts/push-to-sheet.py

Mirror reconcile-conversions.py CSV outputs into a Google Sheet so Google Ads
can ingest them via a *scheduled* Google Sheets upload — no manual weekly
upload. Each --map writes one CSV to one named tab (created if missing, then
cleared and fully rewritten every run, so the tab is always the current file).

Auth: the SAME service account the SEO workflow uses. Credentials come from
$GOOGLE_CREDENTIALS_JSON (raw JSON string) or a google-credentials.json file /
$GOOGLE_APPLICATION_CREDENTIALS path. It PRINTS the service-account email it
authenticates as — share the Sheet (Editor) with exactly that address; a 403 on
write means the Sheet isn't shared with it yet.

  python scripts/push-to-sheet.py --sheet-id <ID> \
      --map "gclid conversions=data/offline-conversions.csv" \
      --map "ECL conversions=data/enhanced-conversions.csv"

Deps (CI only): pip install google-api-python-client google-auth
"""

import argparse
import csv
import json
import os
import ssl
import sys
import time

SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]

# Network hardening. The Sheets calls occasionally hit a slow/hung socket on the
# GitHub runner (symptom: "TimeoutError: The read operation timed out" on
# values().clear()), which failed the whole daily job even though reconcile had
# already produced + committed the CSVs. An explicit read timeout turns a hang
# into a fast error, and the retry loop rides out transient blips. Every call
# here is idempotent (full clear + rewrite each run), so retrying is safe.
HTTP_TIMEOUT_SECONDS = 30
MAX_ATTEMPTS = 4  # 1 try + 3 retries, backing off 2s / 4s / 8s
_RETRYABLE_HTTP_STATUS = {408, 429, 500, 502, 503, 504}


def load_credentials():
    """Service-account creds from $GOOGLE_CREDENTIALS_JSON or a key file."""
    from google.oauth2 import service_account

    raw = os.environ.get("GOOGLE_CREDENTIALS_JSON")
    if raw and raw.strip():
        info = json.loads(raw)
        return service_account.Credentials.from_service_account_info(info, scopes=SCOPES)
    path = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS") or "google-credentials.json"
    if not os.path.exists(path):
        sys.exit("[push-to-sheet] ERROR: no credentials — set GOOGLE_CREDENTIALS_JSON "
                 "or provide google-credentials.json / GOOGLE_APPLICATION_CREDENTIALS.")
    return service_account.Credentials.from_service_account_file(path, scopes=SCOPES)


def read_csv(path):
    with open(path, "r", encoding="utf-8-sig", newline="") as f:
        return list(csv.reader(f))


def a1(tab):
    """A1 range for a whole sheet — single-quote the title (it may contain spaces)."""
    return "'" + tab.replace("'", "''") + "'"


def authed_http(creds):
    """httplib2 client with an explicit read timeout, wrapped so token refresh
    still works. Without a timeout a hung socket can stall the whole job."""
    import httplib2
    from google_auth_httplib2 import AuthorizedHttp

    return AuthorizedHttp(creds, http=httplib2.Http(timeout=HTTP_TIMEOUT_SECONDS))


def is_retryable(exc):
    """Transient network blips + Google 5xx/429 — safe to retry (calls idempotent)."""
    # socket.timeout is an alias of TimeoutError; ConnectionError/OSError cover resets.
    if isinstance(exc, (TimeoutError, ConnectionError, OSError, ssl.SSLError)):
        return True
    try:
        from googleapiclient.errors import HttpError

        if isinstance(exc, HttpError):
            status = exc.resp.status if exc.resp is not None else None
            return status in _RETRYABLE_HTTP_STATUS
    except Exception:
        pass
    try:
        import httplib2

        if isinstance(exc, httplib2.HttpLib2Error):
            return True
    except Exception:
        pass
    return False


def execute(request, label):
    """Run a Sheets API request, retrying transient network/5xx failures."""
    for attempt in range(1, MAX_ATTEMPTS + 1):
        try:
            return request.execute()
        except Exception as e:  # noqa: BLE001 — routed by is_retryable()
            if attempt == MAX_ATTEMPTS or not is_retryable(e):
                raise
            wait = 2 ** attempt
            print(f"[push-to-sheet] {label} failed "
                  f"({type(e).__name__}: {e}); retry {attempt}/{MAX_ATTEMPTS - 1} "
                  f"in {wait}s", file=sys.stderr)
            time.sleep(wait)


def main():
    ap = argparse.ArgumentParser(description="Write one conversion CSV to one Google Sheet tab.")
    ap.add_argument("--sheet-id", required=True, help="target spreadsheet ID")
    ap.add_argument("--csv", required=True, help="CSV file to write")
    ap.add_argument("--tab", default=None,
                    help="target tab; default = the spreadsheet's FIRST tab (what Google Ads reads)")
    args = ap.parse_args()
    if not os.path.exists(args.csv):
        sys.exit(f"[push-to-sheet] ERROR: csv not found: {args.csv}")

    from googleapiclient.discovery import build
    from googleapiclient.errors import HttpError

    creds = load_credentials()
    print(f"[push-to-sheet] Authenticating as: {creds.service_account_email}")
    print("[push-to-sheet] The Sheet must be shared (Editor) with THAT address.")
    svc = build("sheets", "v4", http=authed_http(creds), cache_discovery=False)

    try:
        meta = execute(svc.spreadsheets().get(spreadsheetId=args.sheet_id), "open sheet")
    except HttpError as e:
        sys.exit(f"[push-to-sheet] ERROR: cannot open sheet {args.sheet_id} — "
                 f"is it shared with {creds.service_account_email}? {e}")
    titles = [s["properties"]["title"] for s in meta.get("sheets", [])]
    first = titles[0] if titles else "Sheet1"
    # Default to the FIRST tab — that's the one Google Ads' scheduled upload reads.
    tab = args.tab or first
    if tab not in titles:
        execute(svc.spreadsheets().batchUpdate(
            spreadsheetId=args.sheet_id,
            body={"requests": [{"addSheet": {"properties": {"title": tab}}}]},
        ), "add tab")

    rows = read_csv(args.csv)
    execute(svc.spreadsheets().values().clear(
        spreadsheetId=args.sheet_id, range=a1(tab)), "clear tab")
    execute(svc.spreadsheets().values().update(
        spreadsheetId=args.sheet_id,
        range=a1(tab) + "!A1",
        valueInputOption="RAW",
        body={"values": rows or [[]]},
    ), "write rows")
    print(f"[push-to-sheet] wrote {max(len(rows) - 1, 0)} data row(s) from {args.csv} "
          f"→ tab {tab!r}  (first tab of this sheet: {first!r})")


if __name__ == "__main__":
    main()
