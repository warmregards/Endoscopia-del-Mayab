# Google Ads data — how to get it into Claude

Three surfaces, three answers. Read the table first, then only the section you need.

| Surface | Live Ads MCP? | How |
|---|---|---|
| **Claude desktop app** (regular Claude) | ✅ yes | Local MCP server — §A. **This is the one for analysis chats.** |
| **Claude Code** (CLI, in this repo) | ✅ yes | `.mcp.json` is already committed — §B |
| **Cowork** (cloud sessions) | ❌ no | Cloud container can't reach a local process. Pull CSVs with `scripts/ads-pull.py` — §C |

Server: **`googleads/google-ads-mcp`**, Google's own. Read-only — `search` (GAQL),
`list_accessible_customers`, `get_resource_metadata`. It cannot change bids, budgets, or
creatives, so pointing it at the live EDM / omar.doctor accounts is safe.

---

## Setup (once) — required for all three

### 1. Developer token

Ads UI → **Tools → Setup → API Center**. Needs a **manager (MCC)** account; if EDM and
omar.doctor aren't under one, create an MCC and link both (free). Copy the 22-char token.

Access levels: *Test* → **Explorer** (2,880 ops/day on production, usually auto-granted, no
application) → *Basic* (15k/day, requires applying). Explorer is enough for reporting.
Explorer blocks Keyword Planner, so keyword-idea generation still needs the UI.

### 2. Google Cloud project

Enable **Google Ads API**, create an **OAuth 2.0 Client ID** (type: *Desktop app*), download
the JSON.

⚠️ The existing `google-credentials.json` service account (used by `seo-report.mjs` for
GSC/GA4/Sheets) **does not work for Google Ads**. The Ads API rejects plain service accounts —
it needs OAuth user credentials. This is a separate credential.

### 3. Authenticate

```bash
gcloud auth application-default login \
  --scopes https://www.googleapis.com/auth/adwords,https://www.googleapis.com/auth/cloud-platform \
  --client-id-file=/path/to/oauth-client.json
```

Sign in as the Google account with access to the Ads accounts. This writes
`~/.config/gcloud/application_default_credentials.json` — used by both the MCP server and
`ads-pull.py`.

### 4. Shell env (`~/.zshrc`)

```bash
export GOOGLE_PROJECT_ID="your-gcp-project-id"
export GOOGLE_ADS_DEVELOPER_TOKEN="your-22-char-token"
export GOOGLE_ADS_LOGIN_CUSTOMER_ID="1234567890"   # MCC id, digits only — omit if no MCC
export GOOGLE_ADS_CUSTOMER_ID="1234567890"         # default account for ads-pull.py
```

---

## §A — Claude desktop app

The desktop app runs local MCP servers, so this is the setup for "chat with Claude about the
Ads data."

Edit `~/Library/Application Support/Claude/claude_desktop_config.json` (Settings →
Developer → Edit Config creates it if missing):

```json
{
  "mcpServers": {
    "google-ads": {
      "command": "/opt/homebrew/bin/pipx",
      "args": [
        "run", "--spec",
        "git+https://github.com/googleads/google-ads-mcp.git",
        "google-ads-mcp"
      ],
      "env": {
        "GOOGLE_APPLICATION_CREDENTIALS": "/Users/sanel/.config/gcloud/application_default_credentials.json",
        "GOOGLE_PROJECT_ID": "your-gcp-project-id",
        "GOOGLE_ADS_DEVELOPER_TOKEN": "your-22-char-token",
        "GOOGLE_ADS_LOGIN_CUSTOMER_ID": "1234567890"
      }
    }
  }
}
```

**Two gotchas that cause 90% of "server won't start":**

1. **Absolute path for `command`.** The desktop app is launched by Finder, not your shell, so
   it has no `PATH`. Run `which pipx` and paste the result. (Homebrew on Apple Silicon:
   `/opt/homebrew/bin/pipx`.)
2. **Literal values in `env`.** No `${VAR}` expansion — the app can't see your `~/.zshrc`.
   Paste the real token. That file is outside the repo, so it isn't committed.

Restart the app fully (⌘Q, not just close the window). The server appears under the tools
icon. First launch takes ~30s while pipx builds; cached after.

Logs when it fails: `~/Library/Logs/Claude/mcp-server-google-ads.log`.

## §B — Claude Code

`.mcp.json` at the repo root is already committed and reads `${VAR}` from your shell, so
step 4 above is all it needs.

```bash
cd ~/dev/personal/endoscopia-del-mayab && claude
/mcp        # → google-ads, connected
```

## §C — Cowork (cloud sessions)

Cowork runs in Anthropic's cloud and can't reach a process on your Mac, so the MCP server is
out. Instead pull the reports to CSV in the repo — Cowork already has this folder mounted, so
it reads them directly.

```bash
python3 scripts/ads-pull.py --list                      # find account ids
python3 scripts/ads-pull.py --report search-terms --days 30
python3 scripts/ads-pull.py --report all --days 90
python3 scripts/ads-pull.py --report campaigns --since 2026-08-01 --until 2026-08-31
python3 scripts/ads-pull.py --report all --customer-id 9876543210   # omar.doctor
```

Output lands in `data/ads/<report>-<customer>-<start>_<end>.csv`. Reports: `campaigns`,
`search-terms`, `keywords`, `ad-groups`, `conversions`, `daily`, `geo`, `devices`, or `all`.
Raw GAQL via `--gaql "..."`. Costs are converted from micros to MXN in the CSV.

This replaces the manual "Search terms report.csv" export in the monthly review, and the files
are diffable month over month — which the UI export never was.

If you later want live Ads data *inside* Cowork, deploy the same Google server to Cloud Run (it
supports HTTP/SSE + OAuth) and add it as a custom remote connector. The paid alternative is an
aggregator connector — Supermetrics, Windsor.ai, or Funnel, all in the connector directory.

---

## Google Analytics (GA4)

Same pattern, far less setup — no developer token, no MCC. Server:
**`googleanalytics/google-analytics-mcp`**, Google's own, read-only
(`run_report`, `run_realtime_report`, `run_funnel_report`, `get_account_summaries`,
`get_property_details`, `get_custom_dimensions_and_metrics`, `list_google_ads_links`).

**1.** In the same GCP project, enable **Google Analytics Data API** and **Google Analytics
Admin API**.

**2.** Re-run ADC login with all three scopes, so ONE credential serves Ads + GA4:

```bash
gcloud auth application-default login \
  --scopes https://www.googleapis.com/auth/adwords,https://www.googleapis.com/auth/analytics.readonly,https://www.googleapis.com/auth/cloud-platform \
  --client-id-file=/path/to/oauth-client.json
```

**3.** Add a second entry alongside `google-ads` in
`~/Library/Application Support/Claude/claude_desktop_config.json` — same absolute-path and
literal-env rules:

```json
"analytics": {
  "command": "/opt/homebrew/bin/pipx",
  "args": ["run", "analytics-mcp"],
  "env": {
    "GOOGLE_APPLICATION_CREDENTIALS": "/Users/sanel/.config/gcloud/application_default_credentials.json",
    "GOOGLE_PROJECT_ID": "your-gcp-project-id"
  }
}
```

**4.** For Cowork: `scripts/ga4-pull.py`, sibling of `ads-pull.py`.

```bash
export GA4_PROPERTY_ID=494008470       # EDM
python3 scripts/ga4-pull.py --list
python3 scripts/ga4-pull.py --report all --days 90
python3 scripts/ga4-pull.py --report campaigns --since 2026-08-01 --until 2026-08-31
```

Output: `data/ga4/<report>-<property>-<start>_<end>.csv`. Reports: `overview`, `daily`,
`landing-pages`, `pages`, `sources`, `campaigns`, `devices`, `cities`, `events`,
`events-by-page`, `all`. Metric names mirror `seo-report.mjs` (`sessions`, `conversions`,
`engagementRate`, `userEngagementDuration`), which are known-good on property 494008470.

Note: `seo-report.mjs` uses the `google-credentials.json` **service account** for GSC + GA4.
That file is not currently present in the repo, so that script can't run as-is. `ga4-pull.py`
deliberately uses the ADC credential instead, so there's one auth to maintain, not two.

---

## GAQL snippets

Search terms, last 30 days:

```sql
SELECT search_term_view.search_term, campaign.name, metrics.clicks, metrics.impressions,
       metrics.cost_micros, metrics.conversions
FROM search_term_view
WHERE segments.date DURING LAST_30_DAYS
ORDER BY metrics.cost_micros DESC
```

Campaign performance:

```sql
SELECT campaign.name, campaign.status, metrics.impressions, metrics.clicks,
       metrics.cost_micros, metrics.conversions, metrics.conversions_from_interactions_rate
FROM campaign
WHERE segments.date DURING LAST_30_DAYS
```

Cost is in **micros** — divide by 1,000,000 for MXN.

## Notes

- API version is pinned to `v25` in `ads-pull.py`; override with `GOOGLE_ADS_API_VERSION`.
  Google ships a major version roughly quarterly and sunsets old ones ~12 months out.
- Offline conversion imports (the GCLID/ECL pipeline in `reconcile-conversions.py`) are
  **writes** — the read-only MCP server can't do them, and they stay a manual upload.
- `.mcp.json` holds no secrets and is safe to commit. `.claude/` is gitignored.

Sources: https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server ·
https://github.com/googleads/google-ads-mcp ·
https://developers.google.com/google-ads/api/docs/access-levels ·
https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop
