#!/usr/bin/env python3
"""
scripts/ads-pull.py

Pull Google Ads reports to CSV so they can be analyzed locally (Claude Code,
Cowork, or anything that reads a file). Replaces the manual "download the
Search terms report from the Ads UI" step in the monthly review.

Standalone repo tooling — NOT part of the deployed app. Python 3, stdlib only.

Auth: reuses the OAuth user credentials that `gcloud auth application-default
login` writes to ~/.config/gcloud/application_default_credentials.json — the
same credential the Google Ads MCP server uses (see docs/google-ads-mcp.md).
NOTE: the google-credentials.json service account used by seo-report.mjs does
NOT work here. The Google Ads API rejects plain service accounts; it needs
OAuth user credentials (or a service account with Workspace domain-wide
delegation, which this project doesn't have).

Setup once:
    gcloud auth application-default login \
      --scopes https://www.googleapis.com/auth/adwords,https://www.googleapis.com/auth/cloud-platform \
      --client-id-file=/path/to/oauth-client.json
    export GOOGLE_ADS_DEVELOPER_TOKEN=...        # Ads UI → Tools → API Center
    export GOOGLE_ADS_LOGIN_CUSTOMER_ID=...      # MCC id, digits only (optional)
    export GOOGLE_ADS_CUSTOMER_ID=...            # default account to query

Usage:
    python3 scripts/ads-pull.py --list
    python3 scripts/ads-pull.py --report search-terms --days 30
    python3 scripts/ads-pull.py --report all --days 90 --customer-id 1234567890
    python3 scripts/ads-pull.py --report campaigns --since 2026-08-01 --until 2026-08-31
    python3 scripts/ads-pull.py --gaql "SELECT campaign.name FROM campaign" --out /tmp/x.csv

Output: data/ads/<report>-<customer>-<start>_<end>.csv
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

API_VERSION = os.environ.get("GOOGLE_ADS_API_VERSION", "v25")
ADS_ENDPOINT = "https://googleads.googleapis.com/{v}/customers/{cid}/googleAds:searchStream"
LIST_ENDPOINT = "https://googleads.googleapis.com/{v}/customers:listAccessibleCustomers"
TOKEN_URL = "https://oauth2.googleapis.com/token"

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "data" / "ads"

# ── Reports ─────────────────────────────────────────────────────────────
# {date_range} is replaced with a BETWEEN clause. Keep SELECT lists explicit —
# the CSV columns are derived from them, in order.

REPORTS = {
    "campaigns": """
        SELECT campaign.id, campaign.name, campaign.status,
               campaign.advertising_channel_type, metrics.impressions, metrics.clicks,
               metrics.ctr, metrics.average_cpc, metrics.cost_micros,
               metrics.conversions, metrics.cost_per_conversion,
               metrics.conversions_from_interactions_rate, metrics.search_impression_share
        FROM campaign
        WHERE {date_range} AND campaign.status != 'REMOVED'
        ORDER BY metrics.cost_micros DESC
    """,
    "search-terms": """
        SELECT search_term_view.search_term, search_term_view.status, campaign.name,
               ad_group.name, metrics.impressions, metrics.clicks, metrics.ctr,
               metrics.cost_micros, metrics.conversions, metrics.cost_per_conversion
        FROM search_term_view
        WHERE {date_range}
        ORDER BY metrics.cost_micros DESC
    """,
    "keywords": """
        SELECT ad_group_criterion.keyword.text, ad_group_criterion.keyword.match_type,
               ad_group_criterion.status, campaign.name, ad_group.name,
               ad_group_criterion.quality_info.quality_score,
               metrics.impressions, metrics.clicks, metrics.ctr, metrics.average_cpc,
               metrics.cost_micros, metrics.conversions, metrics.cost_per_conversion
        FROM keyword_view
        WHERE {date_range}
        ORDER BY metrics.cost_micros DESC
    """,
    "ad-groups": """
        SELECT campaign.name, ad_group.name, ad_group.status,
               metrics.impressions, metrics.clicks, metrics.ctr, metrics.cost_micros,
               metrics.conversions, metrics.cost_per_conversion
        FROM ad_group
        WHERE {date_range} AND ad_group.status != 'REMOVED'
        ORDER BY metrics.cost_micros DESC
    """,
    "conversions": """
        SELECT campaign.name, segments.conversion_action_name,
               segments.conversion_action_category, metrics.conversions,
               metrics.all_conversions, metrics.conversions_value
        FROM campaign
        WHERE {date_range} AND metrics.conversions > 0
        ORDER BY metrics.conversions DESC
    """,
    "daily": """
        SELECT segments.date, campaign.name, metrics.impressions, metrics.clicks,
               metrics.cost_micros, metrics.conversions
        FROM campaign
        WHERE {date_range}
        ORDER BY segments.date
    """,
    "geo": """
        SELECT campaign.name, geographic_view.country_criterion_id,
               geographic_view.location_type, metrics.impressions, metrics.clicks,
               metrics.cost_micros, metrics.conversions
        FROM geographic_view
        WHERE {date_range}
        ORDER BY metrics.cost_micros DESC
    """,
    "devices": """
        SELECT campaign.name, segments.device, metrics.impressions, metrics.clicks,
               metrics.ctr, metrics.cost_micros, metrics.conversions,
               metrics.conversions_from_interactions_rate
        FROM campaign
        WHERE {date_range}
        ORDER BY metrics.cost_micros DESC
    """,
}

# Micros → currency units. Applied to any column whose name ends in these.
MICRO_FIELDS = ("cost_micros", "average_cpc", "cost_per_conversion")


# ── Auth ────────────────────────────────────────────────────────────────
def adc_path() -> Path:
    env = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS")
    if env:
        return Path(env).expanduser()
    return Path.home() / ".config" / "gcloud" / "application_default_credentials.json"


def access_token() -> str:
    """Exchange the ADC refresh token for an access token. stdlib only."""
    p = adc_path()
    if not p.exists():
        sys.exit(
            f"[ads-pull] ERROR: no credentials at {p}\n"
            "  Run: gcloud auth application-default login \\\n"
            "    --scopes https://www.googleapis.com/auth/adwords,"
            "https://www.googleapis.com/auth/cloud-platform \\\n"
            "    --client-id-file=/path/to/oauth-client.json"
        )
    creds = json.loads(p.read_text())
    if creds.get("type") == "service_account":
        sys.exit(
            "[ads-pull] ERROR: that credential is a service account. The Google Ads "
            "API needs OAuth user credentials — re-run the gcloud command above."
        )
    if "refresh_token" not in creds:
        sys.exit(f"[ads-pull] ERROR: no refresh_token in {p}")

    body = urllib.parse.urlencode({
        "client_id": creds["client_id"],
        "client_secret": creds["client_secret"],
        "refresh_token": creds["refresh_token"],
        "grant_type": "refresh_token",
    }).encode()
    req = urllib.request.Request(TOKEN_URL, data=body,
                                 headers={"Content-Type": "application/x-www-form-urlencoded"})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return json.load(r)["access_token"]
    except urllib.error.HTTPError as e:
        sys.exit(f"[ads-pull] ERROR: token refresh failed ({e.code}): {e.read().decode()[:400]}")


def headers(token: str) -> dict:
    dev_token = os.environ.get("GOOGLE_ADS_DEVELOPER_TOKEN")
    if not dev_token:
        sys.exit("[ads-pull] ERROR: set GOOGLE_ADS_DEVELOPER_TOKEN (Ads UI → Tools → API Center)")
    h = {
        "Authorization": f"Bearer {token}",
        "developer-token": dev_token,
        "Content-Type": "application/json",
    }
    mcc = os.environ.get("GOOGLE_ADS_LOGIN_CUSTOMER_ID", "").replace("-", "").strip()
    if mcc:
        h["login-customer-id"] = mcc
    return h


# ── API ─────────────────────────────────────────────────────────────────
def post(url: str, payload: dict, token: str):
    req = urllib.request.Request(url, data=json.dumps(payload).encode(),
                                 headers=headers(token), method="POST")
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        detail = e.read().decode()[:1500]
        sys.exit(f"[ads-pull] ERROR: API {e.code}\n{detail}")


def get(url: str, token: str):
    req = urllib.request.Request(url, headers=headers(token), method="GET")
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        sys.exit(f"[ads-pull] ERROR: API {e.code}\n{e.read().decode()[:1500]}")


def list_customers(token: str):
    data = get(LIST_ENDPOINT.format(v=API_VERSION), token)
    names = data.get("resourceNames", [])
    if not names:
        print("[ads-pull] no accessible customers for this login.")
        return
    print(f"[ads-pull] {len(names)} accessible customer(s):")
    for rn in names:
        cid = rn.split("/")[-1]
        # Pretty-print the account name where we're allowed to query it.
        label = ""
        try:
            res = post(ADS_ENDPOINT.format(v=API_VERSION, cid=cid), {
                "query": "SELECT customer.descriptive_name, customer.currency_code, "
                         "customer.time_zone FROM customer LIMIT 1"
            }, token)
            for chunk in res:
                for row in chunk.get("results", []):
                    c = row.get("customer", {})
                    label = (f"  {c.get('descriptiveName', '?')} "
                             f"[{c.get('currencyCode', '?')} / {c.get('timeZone', '?')}]")
        except SystemExit:
            label = "  (no direct access — query via the MCC)"
        print(f"  {cid}{label}")


# ── Field mapping ───────────────────────────────────────────────────────
def select_fields(gaql: str) -> list:
    lowered = gaql.lower()
    start = lowered.index("select") + len("select")
    end = lowered.index(" from ", start)
    return [f.strip() for f in gaql[start:end].split(",") if f.strip()]


def camel(seg: str) -> str:
    head, *rest = seg.split("_")
    return head + "".join(w.capitalize() for w in rest)


def pluck(row: dict, field: str):
    node = row
    for seg in field.split("."):
        if not isinstance(node, dict):
            return ""
        node = node.get(camel(seg))
        if node is None:
            return ""
    return node


def header_for(field: str) -> str:
    """CSV column name. Full dotted path minus noise prefixes, so campaign.name and
    ad_group.name stay distinct and cost_micros reads as cost."""
    f = field
    for prefix in ("metrics.", "segments."):
        if f.startswith(prefix):
            f = f[len(prefix):]
    f = f.replace("ad_group_criterion.keyword.", "keyword.")
    f = f.replace("search_term_view.", "").replace("geographic_view.", "")
    f = f.replace(".", "_")
    if f.endswith("cost_micros"):
        f = f[: -len("cost_micros")] + "cost"
    return f


def normalize(field: str, value):
    if value == "" or value is None:
        return ""
    if field.split(".")[-1] in MICRO_FIELDS:
        try:
            return round(int(value) / 1_000_000, 2)
        except (TypeError, ValueError):
            return value
    if isinstance(value, float):
        return round(value, 4)
    return value


# ── Run ─────────────────────────────────────────────────────────────────
def run_query(cid: str, gaql: str, token: str, out: Path):
    res = post(ADS_ENDPOINT.format(v=API_VERSION, cid=cid), {"query": gaql}, token)
    fields = select_fields(gaql)
    out.parent.mkdir(parents=True, exist_ok=True)
    n = 0
    with out.open("w", newline="", encoding="utf-8") as fh:
        w = csv.writer(fh)
        w.writerow([header_for(f) for f in fields])
        for chunk in res:
            for row in chunk.get("results", []):
                w.writerow([normalize(f, pluck(row, f)) for f in fields])
                n += 1
    print(f"[ads-pull] {n:>6} rows → {out.relative_to(ROOT) if out.is_relative_to(ROOT) else out}")
    return n


def main():
    ap = argparse.ArgumentParser(description="Pull Google Ads reports to CSV.")
    ap.add_argument("--report", default="search-terms",
                    help=f"one of: {', '.join(REPORTS)}, or 'all'")
    ap.add_argument("--gaql", help="raw GAQL, overrides --report")
    ap.add_argument("--customer-id", default=os.environ.get("GOOGLE_ADS_CUSTOMER_ID", ""),
                    help="Ads account id, digits only (env: GOOGLE_ADS_CUSTOMER_ID)")
    ap.add_argument("--days", type=int, default=30, help="lookback window (default 30)")
    ap.add_argument("--since", help="start date YYYY-MM-DD (overrides --days)")
    ap.add_argument("--until", help="end date YYYY-MM-DD (default: yesterday)")
    ap.add_argument("--out", help="explicit output path (single report only)")
    ap.add_argument("--list", action="store_true", help="list accessible accounts and exit")
    args = ap.parse_args()

    token = access_token()

    if args.list:
        list_customers(token)
        return

    cid = args.customer_id.replace("-", "").strip()
    if not cid:
        sys.exit("[ads-pull] ERROR: pass --customer-id or set GOOGLE_ADS_CUSTOMER_ID "
                 "(run --list to see accounts)")

    until = date.fromisoformat(args.until) if args.until else date.today() - timedelta(days=1)
    since = date.fromisoformat(args.since) if args.since else until - timedelta(days=args.days - 1)
    date_range = f"segments.date BETWEEN '{since}' AND '{until}'"

    if args.gaql:
        gaql = args.gaql.replace("{date_range}", date_range)
        out = Path(args.out) if args.out else OUT_DIR / f"custom-{cid}-{since}_{until}.csv"
        run_query(cid, gaql, token, out)
        return

    names = list(REPORTS) if args.report == "all" else [args.report]
    for name in names:
        if name not in REPORTS:
            sys.exit(f"[ads-pull] ERROR: unknown report '{name}'. "
                     f"Options: {', '.join(REPORTS)}, all")
        gaql = " ".join(REPORTS[name].split()).replace("{date_range}", date_range)
        out = (Path(args.out) if args.out and args.report != "all"
               else OUT_DIR / f"{name}-{cid}-{since}_{until}.csv")
        run_query(cid, gaql, token, out)


if __name__ == "__main__":
    main()
