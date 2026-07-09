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
import sys

SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]


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


def parse_map(s):
    if "=" not in s:
        sys.exit(f"[push-to-sheet] ERROR: --map must be 'Tab=path.csv', got {s!r}")
    tab, path = s.split("=", 1)
    return tab.strip(), path.strip()


def a1(tab):
    """A1 range for a whole sheet — single-quote the title (it may contain spaces)."""
    return "'" + tab.replace("'", "''") + "'"


def main():
    ap = argparse.ArgumentParser(description="Mirror conversion CSVs into a Google Sheet.")
    ap.add_argument("--sheet-id", required=True, help="target spreadsheet ID")
    ap.add_argument("--map", action="append", default=[], metavar="TAB=CSV",
                    help="write CSV to tab TAB (repeatable)")
    args = ap.parse_args()
    if not args.map:
        sys.exit("[push-to-sheet] ERROR: pass at least one --map 'Tab=path.csv'.")

    from googleapiclient.discovery import build
    from googleapiclient.errors import HttpError

    creds = load_credentials()
    print(f"[push-to-sheet] Authenticating as: {creds.service_account_email}")
    print("[push-to-sheet] The Sheet must be shared (Editor) with THAT address.")
    svc = build("sheets", "v4", credentials=creds, cache_discovery=False)

    try:
        meta = svc.spreadsheets().get(spreadsheetId=args.sheet_id).execute()
    except HttpError as e:
        sys.exit(f"[push-to-sheet] ERROR: cannot open sheet {args.sheet_id} — "
                 f"is it shared with {creds.service_account_email}? {e}")
    existing = {s["properties"]["title"] for s in meta.get("sheets", [])}

    for raw in args.map:
        tab, path = parse_map(raw)
        if not os.path.exists(path):
            print(f"[push-to-sheet] skip {tab!r}: {path} not found")
            continue
        rows = read_csv(path)
        if tab not in existing:
            svc.spreadsheets().batchUpdate(
                spreadsheetId=args.sheet_id,
                body={"requests": [{"addSheet": {"properties": {"title": tab}}}]},
            ).execute()
            existing.add(tab)
        svc.spreadsheets().values().clear(spreadsheetId=args.sheet_id, range=a1(tab)).execute()
        svc.spreadsheets().values().update(
            spreadsheetId=args.sheet_id,
            range=a1(tab) + "!A1",
            valueInputOption="RAW",
            body={"values": rows or [[]]},
        ).execute()
        data_rows = max(len(rows) - 1, 0)  # minus header
        print(f"[push-to-sheet] wrote {data_rows} data row(s) → tab {tab!r}")

    print("[push-to-sheet] done.")


if __name__ == "__main__":
    main()
