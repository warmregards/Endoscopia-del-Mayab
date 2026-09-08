#!/usr/bin/env python3
"""
scripts/ga4-pull.py

Pull GA4 reports to CSV so they can be analyzed locally (Claude Code, Cowork, or
anything that reads a file). Sibling of ads-pull.py — same auth, same shape.

Standalone repo tooling — NOT part of the deployed app. Python 3, stdlib only.

Auth: the OAuth user credentials from `gcloud auth application-default login`.
Re-run that command with BOTH scopes so one credential serves Ads and GA4:

    gcloud auth application-default login \
      --scopes https://www.googleapis.com/auth/adwords,https://www.googleapis.com/auth/analytics.readonly,https://www.googleapis.com/auth/cloud-platform \
      --client-id-file=/path/to/oauth-client.json

Enable "Google Analytics Data API" and "Google Analytics Admin API" in the same
GCP project. Then:

    export GA4_PROPERTY_ID=494008470     # EDM (endoscopiadelmayab.com)

Usage:
    python3 scripts/ga4-pull.py --list
    python3 scripts/ga4-pull.py --report landing-pages --days 30
    python3 scripts/ga4-pull.py --report all --days 90
    python3 scripts/ga4-pull.py --report campaigns --since 2026-08-01 --until 2026-08-31
    python3 scripts/ga4-pull.py --report all --property 123456789      # omar.doctor

Output: data/ga4/<report>-<property>-<start>_<end>.csv
"""

import argparse
import csv
import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request
from datetime import date, timedelta
from pathlib import Path

DATA_API = "https://analyticsdata.googleapis.com/v1beta/properties/{pid}:runReport"
ADMIN_API = "https://analyticsadmin.googleapis.com/v1beta/accountSummaries?pageSize=200"
TOKEN_URL = "https://oauth2.googleapis.com/token"

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "data" / "ga4"

# (dimensions, metrics, limit) — metric[0] is the sort key.
REPORTS = {
    "overview":      ([], ["sessions", "activeUsers", "conversions", "engagementRate",
                           "userEngagementDuration"], 1),
    "daily":         (["date"], ["sessions", "activeUsers", "conversions"], 400),
    "landing-pages": (["landingPagePlusQueryString"],
                      ["sessions", "conversions", "engagementRate",
                       "userEngagementDuration", "bounceRate"], 200),
    "pages":         (["pagePath"], ["screenPageViews", "sessions", "conversions",
                                     "userEngagementDuration"], 200),
    "sources":       (["sessionDefaultChannelGroup", "sessionSource", "sessionMedium"],
                      ["sessions", "conversions", "engagementRate"], 100),
    "campaigns":     (["sessionCampaignName", "sessionSource", "sessionMedium"],
                      ["sessions", "conversions", "engagementRate"], 100),
    "devices":       (["deviceCategory"], ["sessions", "conversions", "engagementRate"], 10),
    "cities":        (["city", "region"], ["sessions", "conversions"], 50),
    "events":        (["eventName"], ["eventCount", "sessions"], 100),
    "events-by-page": (["eventName", "pagePath"], ["eventCount"], 300),
}


# ── Auth (identical to ads-pull.py) ─────────────────────────────────────
def adc_path() -> Path:
    env = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS")
    return Path(env).expanduser() if env else (
        Path.home() / ".config" / "gcloud" / "application_default_credentials.json")


def access_token() -> str:
    p = adc_path()
    if not p.exists():
        sys.exit(
            f"[ga4-pull] ERROR: no credentials at {p}\n"
            "  Run: gcloud auth application-default login \\\n"
            "    --scopes https://www.googleapis.com/auth/adwords,"
            "https://www.googleapis.com/auth/analytics.readonly,"
            "https://www.googleapis.com/auth/cloud-platform \\\n"
            "    --client-id-file=/path/to/oauth-client.json")
    creds = json.loads(p.read_text())
    if "refresh_token" not in creds:
        sys.exit(f"[ga4-pull] ERROR: no refresh_token in {p} — re-run the gcloud command above.")
    body = urllib.parse.urlencode({
        "client_id": creds["client_id"], "client_secret": creds["client_secret"],
        "refresh_token": creds["refresh_token"], "grant_type": "refresh_token",
    }).encode()
    req = urllib.request.Request(TOKEN_URL, data=body,
                                 headers={"Content-Type": "application/x-www-form-urlencoded"})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return json.load(r)["access_token"]
    except urllib.error.HTTPError as e:
        sys.exit(f"[ga4-pull] ERROR: token refresh failed ({e.code}): {e.read().decode()[:400]}")


def call(url: str, token: str, payload=None):
    data = json.dumps(payload).encode() if payload is not None else None
    req = urllib.request.Request(
        url, data=data, method="POST" if data else "GET",
        headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        detail = e.read().decode()[:1200]
        if e.code == 403 and "analytics" in detail.lower():
            detail += ("\n  → Enable the Google Analytics Data API + Admin API in your GCP "
                       "project, and re-run gcloud ADC login with the analytics.readonly scope.")
        sys.exit(f"[ga4-pull] ERROR: API {e.code}\n{detail}")


def list_properties(token: str):
    data = call(ADMIN_API, token)
    summaries = data.get("accountSummaries", [])
    if not summaries:
        print("[ga4-pull] no GA4 properties visible to this login.")
        return
    for acct in summaries:
        print(f"\n{acct.get('displayName', '?')}  ({acct.get('account', '')})")
        for prop in acct.get("propertySummaries", []):
            pid = prop.get("property", "").split("/")[-1]
            print(f"  {pid:<12} {prop.get('displayName', '?')}")


# ── Report ──────────────────────────────────────────────────────────────
def run_report(pid: str, name: str, since: date, until: date, token: str, out: Path):
    dims, mets, limit = REPORTS[name]
    payload = {
        "dateRanges": [{"startDate": str(since), "endDate": str(until)}],
        "dimensions": [{"name": d} for d in dims],
        "metrics": [{"name": m} for m in mets],
        "limit": limit,
    }
    if dims:
        sort_key = "date" if "date" in dims else None
        payload["orderBys"] = ([{"dimension": {"dimensionName": "date"}}] if sort_key
                               else [{"metric": {"metricName": mets[0]}, "desc": True}])

    data = call(DATA_API.format(pid=pid), token, payload)
    rows = data.get("rows", [])
    out.parent.mkdir(parents=True, exist_ok=True)
    with out.open("w", newline="", encoding="utf-8") as fh:
        w = csv.writer(fh)
        w.writerow(dims + mets)
        for row in rows:
            dv = [d.get("value", "") for d in row.get("dimensionValues", [])]
            mv = []
            for m in row.get("metricValues", []):
                v = m.get("value", "")
                try:
                    f = float(v)
                    mv.append(int(f) if f.is_integer() else round(f, 4))
                except (TypeError, ValueError):
                    mv.append(v)
            w.writerow(dv + mv)
    rel = out.relative_to(ROOT) if out.is_relative_to(ROOT) else out
    print(f"[ga4-pull] {len(rows):>6} rows → {rel}")


def main():
    ap = argparse.ArgumentParser(description="Pull GA4 reports to CSV.")
    ap.add_argument("--report", default="landing-pages",
                    help=f"one of: {', '.join(REPORTS)}, or 'all'")
    ap.add_argument("--property", default=os.environ.get("GA4_PROPERTY_ID", ""),
                    help="GA4 property id, digits only (env: GA4_PROPERTY_ID)")
    ap.add_argument("--days", type=int, default=30, help="lookback window (default 30)")
    ap.add_argument("--since", help="start date YYYY-MM-DD (overrides --days)")
    ap.add_argument("--until", help="end date YYYY-MM-DD (default: yesterday)")
    ap.add_argument("--out", help="explicit output path (single report only)")
    ap.add_argument("--list", action="store_true", help="list GA4 properties and exit")
    args = ap.parse_args()

    token = access_token()
    if args.list:
        list_properties(token)
        return

    pid = args.property.replace("properties/", "").strip()
    if not pid:
        sys.exit("[ga4-pull] ERROR: pass --property or set GA4_PROPERTY_ID (run --list to see them)")

    until = date.fromisoformat(args.until) if args.until else date.today() - timedelta(days=1)
    since = date.fromisoformat(args.since) if args.since else until - timedelta(days=args.days - 1)

    names = list(REPORTS) if args.report == "all" else [args.report]
    for name in names:
        if name not in REPORTS:
            sys.exit(f"[ga4-pull] ERROR: unknown report '{name}'. "
                     f"Options: {', '.join(REPORTS)}, all")
        out = (Path(args.out) if args.out and args.report != "all"
               else OUT_DIR / f"{name}-{pid}-{since}_{until}.csv")
        run_report(pid, name, since, until, token, out)


if __name__ == "__main__":
    main()
