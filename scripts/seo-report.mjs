#!/usr/bin/env node
/**
 * SEO Monthly Report — Endoscopia del Mayab
 *
 * Pulls data from GSC, GA4, and PageSpeed Insights APIs,
 * compares against the previous period, and generates
 * an actionable report.
 *
 * Usage:
 *   node scripts/seo-report.mjs                    # last 30 days vs prior 30
 *   node scripts/seo-report.mjs 2026-03-01 2026-03-31  # custom range
 *
 * Outputs: scripts/reports/seo-report-YYYY-MM-DD.md
 */

import { google } from "googleapis";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// ── Config ──────────────────────────────────────────────────────────────
const CREDENTIALS_PATH = path.join(ROOT, "google-credentials.json");
const GSC_SITE_URL = "sc-domain:endoscopiadelmayab.com";
const GSC_SECONDARY_URL = "sc-domain:omar.doctor"; // Bariatric/surgery site — same doctor
const GA4_PROPERTY = "properties/494008470";
const SITE_URL = "https://www.endoscopiadelmayab.com";
const REPORTS_DIR = path.join(__dirname, "reports");

// Pages we care about most (by traffic tier)
const KEY_PAGES = [
  "/endoscopia-merida",
  "/colonoscopia-merida",
  "/cpre-merida",
  "/",
  "/dr-omar-quiroz",
  "/precios",
  "/contacto",
  "/consultas-digestivas-merida",
  "/emergencias-digestivas-merida",
  "/ligadura-hemorroides-internas-merida",
  "/cpre-playa-del-carmen",
];

// ── Helpers ─────────────────────────────────────────────────────────────
function dateFmt(d) {
  return d.toISOString().split("T")[0];
}

function pct(current, previous) {
  if (!previous) return current > 0 ? "+∞" : "0%";
  const change = ((current - previous) / previous) * 100;
  const sign = change >= 0 ? "+" : "";
  return `${sign}${change.toFixed(1)}%`;
}

function arrow(current, previous) {
  if (current > previous) return "↑";
  if (current < previous) return "↓";
  return "→";
}

function padEnd(s, n) {
  return String(s).padEnd(n);
}
function padStart(s, n) {
  return String(s).padStart(n);
}

// ── Auth ────────────────────────────────────────────────────────────────
async function getAuth() {
  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: [
      "https://www.googleapis.com/auth/webmasters.readonly",
      "https://www.googleapis.com/auth/analytics.readonly",
    ],
  });
  return auth.getClient();
}

// ── GSC Data ────────────────────────────────────────────────────────────
async function fetchGSC(auth, startDate, endDate, dimensions, rowLimit = 100, siteUrl = GSC_SITE_URL) {
  const searchconsole = google.searchconsole({ version: "v1", auth });
  const res = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate,
      endDate,
      dimensions,
      rowLimit,
      type: "web",
    },
  });
  return res.data.rows || [];
}

async function getGSCData(auth, startDate, endDate, prevStartDate, prevEndDate) {
  // Current period — by query
  const currentQueries = await fetchGSC(auth, startDate, endDate, ["query"], 200);
  const prevQueries = await fetchGSC(auth, prevStartDate, prevEndDate, ["query"], 200);

  // Current period — by page
  const currentPages = await fetchGSC(auth, startDate, endDate, ["page"], 100);
  const prevPages = await fetchGSC(auth, prevStartDate, prevEndDate, ["page"], 100);

  // Current period — by query + page (for opportunity detection)
  const queryPage = await fetchGSC(auth, startDate, endDate, ["query", "page"], 500);

  return { currentQueries, prevQueries, currentPages, prevPages, queryPage };
}

// ── GA4 Data ────────────────────────────────────────────────────────────
async function getGA4Data(auth, startDate, endDate, prevStartDate, prevEndDate) {
  const analyticsdata = google.analyticsdata({ version: "v1beta", auth });

  const runReport = async (dateRange, dimensions, metrics, limit = 50) => {
    const res = await analyticsdata.properties.runReport({
      property: GA4_PROPERTY,
      requestBody: {
        dateRanges: [dateRange],
        dimensions: dimensions.map((name) => ({ name })),
        metrics: metrics.map((name) => ({ name })),
        orderBys: [{ metric: { metricName: metrics[0] }, desc: true }],
        limit,
      },
    });
    return res.data.rows || [];
  };

  // Landing page performance — current
  const currentPages = await runReport(
    { startDate, endDate },
    ["landingPagePlusQueryString"],
    ["sessions", "engagementRate", "conversions", "userEngagementDuration"],
    50
  );

  // Landing page performance — previous
  const prevPages = await runReport(
    { startDate: prevStartDate, endDate: prevEndDate },
    ["landingPagePlusQueryString"],
    ["sessions", "engagementRate", "conversions", "userEngagementDuration"],
    50
  );

  // Device breakdown
  const devices = await runReport(
    { startDate, endDate },
    ["deviceCategory"],
    ["sessions", "conversions"],
    5
  );

  // City breakdown
  const cities = await runReport(
    { startDate, endDate },
    ["city"],
    ["sessions", "conversions"],
    10
  );

  // Overall totals
  const totals = await runReport(
    { startDate, endDate },
    [],
    ["sessions", "conversions", "engagementRate", "userEngagementDuration"],
    1
  );
  const prevTotals = await runReport(
    { startDate: prevStartDate, endDate: prevEndDate },
    [],
    ["sessions", "conversions", "engagementRate", "userEngagementDuration"],
    1
  );

  return { currentPages, prevPages, devices, cities, totals, prevTotals };
}

// ── PageSpeed Data ──────────────────────────────────────────────────────
async function getPageSpeedData(pages) {
  const results = [];
  for (const pagePath of pages.slice(0, 8)) {
    // Limit to top 8 to avoid rate limits
    const url = `${SITE_URL}${pagePath}`;
    try {
      const apiKey = process.env.GOOGLE_PLACES_API_KEY || "";
      const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&category=PERFORMANCE&category=SEO${apiKey ? `&key=${apiKey}` : ""}`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      const perf = data.lighthouseResult?.categories?.performance?.score;
      const seo = data.lighthouseResult?.categories?.seo?.score;
      const lcp = data.lighthouseResult?.audits?.["largest-contentful-paint"]?.numericValue;
      const cls = data.lighthouseResult?.audits?.["cumulative-layout-shift"]?.numericValue;
      const tbt = data.lighthouseResult?.audits?.["total-blocking-time"]?.numericValue;
      results.push({
        page: pagePath,
        performance: perf ? Math.round(perf * 100) : null,
        seo: seo ? Math.round(seo * 100) : null,
        lcp: lcp ? (lcp / 1000).toFixed(1) : null,
        cls: cls?.toFixed(3) ?? null,
        tbt: tbt ? Math.round(tbt) : null,
      });
    } catch (e) {
      results.push({ page: pagePath, error: e.message });
    }
    // Delay between requests to avoid rate limiting
    await new Promise((r) => setTimeout(r, 3000));
  }
  return results;
}

// ── Analysis ────────────────────────────────────────────────────────────
function analyzeOpportunities(gscData) {
  const opportunities = [];

  // High impressions, low CTR (title/description improvements)
  for (const row of gscData.currentQueries) {
    const query = row.keys[0];
    const { clicks, impressions, ctr, position } = row;
    if (impressions > 20 && ctr < 0.03 && position < 15) {
      opportunities.push({
        type: "low_ctr",
        query,
        impressions,
        clicks,
        ctr: (ctr * 100).toFixed(1),
        position: position.toFixed(1),
        suggestion: `CTR ${(ctr * 100).toFixed(1)}% for position ${position.toFixed(0)} — rewrite meta title/description`,
      });
    }
  }

  // Position 5-15 (striking distance — content improvements could push to page 1)
  for (const row of gscData.currentQueries) {
    const query = row.keys[0];
    const { impressions, position } = row;
    if (impressions > 10 && position >= 5 && position <= 15) {
      opportunities.push({
        type: "striking_distance",
        query,
        impressions,
        position: position.toFixed(1),
        suggestion: `Position ${position.toFixed(1)} — within striking distance of top 3`,
      });
    }
  }

  // Queries losing position
  const prevMap = new Map(gscData.prevQueries.map((r) => [r.keys[0], r]));
  for (const row of gscData.currentQueries) {
    const query = row.keys[0];
    const prev = prevMap.get(query);
    if (prev && row.position - prev.position > 3 && row.impressions > 10) {
      opportunities.push({
        type: "position_drop",
        query,
        prevPosition: prev.position.toFixed(1),
        currentPosition: row.position.toFixed(1),
        drop: (row.position - prev.position).toFixed(1),
        suggestion: `Dropped ${(row.position - prev.position).toFixed(1)} positions — investigate and reinforce content`,
      });
    }
  }

  // New queries (appeared this period, not in previous)
  const prevQuerySet = new Set(gscData.prevQueries.map((r) => r.keys[0]));
  for (const row of gscData.currentQueries) {
    const query = row.keys[0];
    if (!prevQuerySet.has(query) && row.impressions > 15) {
      opportunities.push({
        type: "new_query",
        query,
        impressions: row.impressions,
        clicks: row.clicks,
        position: row.position.toFixed(1),
        suggestion: `New query with ${row.impressions} impressions — consider creating/optimizing content`,
      });
    }
  }

  return opportunities;
}

// ── Cannibalization Detection ───────────────────────────────────────────
function detectCannibalization(primaryQueries, secondaryQueries) {
  const secondaryMap = new Map(secondaryQueries.map((r) => [r.keys[0], r]));
  const overlaps = [];

  for (const row of primaryQueries) {
    const query = row.keys[0];
    const secondary = secondaryMap.get(query);
    if (secondary && row.impressions + secondary.impressions > 5) {
      overlaps.push({
        query,
        primary: { impressions: row.impressions, clicks: row.clicks, position: row.position },
        secondary: { impressions: secondary.impressions, clicks: secondary.clicks, position: secondary.position },
      });
    }
  }

  // Sort by total impressions (most impactful first)
  overlaps.sort((a, b) =>
    (b.primary.impressions + b.secondary.impressions) - (a.primary.impressions + a.secondary.impressions)
  );

  return overlaps;
}

// ── Report Generation ───────────────────────────────────────────────────
function generateReport(gscData, ga4Data, pageSpeedData, opportunities, cannibalization, startDate, endDate, prevStartDate, prevEndDate, reportMonth = "") {
  const lines = [];
  const ln = (s = "") => lines.push(s);

  ln(`# SEO Report: ${reportMonth} — Endoscopia del Mayab`);
  ln(`**Period:** ${startDate} to ${endDate}`);
  ln(`**Compared to:** ${prevStartDate} to ${prevEndDate}`);
  ln(`**Generated:** ${new Date().toISOString().split("T")[0]}`);
  ln();

  // ── Overall Summary
  ln(`## Overall Summary`);
  ln();

  const t = ga4Data.totals[0]?.metricValues;
  const pt = ga4Data.prevTotals[0]?.metricValues;
  if (t && pt) {
    const sessions = parseInt(t[0].value);
    const prevSessions = parseInt(pt[0].value);
    const conversions = parseInt(t[1].value);
    const prevConversions = parseInt(pt[1].value);
    const engagement = (parseFloat(t[2].value) * 100).toFixed(1);
    const prevEngagement = (parseFloat(pt[2].value) * 100).toFixed(1);

    ln(`| Metric | Current | Previous | Change |`);
    ln(`|--------|---------|----------|--------|`);
    ln(`| Sessions | ${sessions} | ${prevSessions} | ${pct(sessions, prevSessions)} ${arrow(sessions, prevSessions)} |`);
    ln(`| Conversions | ${conversions} | ${prevConversions} | ${pct(conversions, prevConversions)} ${arrow(conversions, prevConversions)} |`);
    ln(`| Conv. Rate | ${((conversions / sessions) * 100).toFixed(1)}% | ${((prevConversions / prevSessions) * 100).toFixed(1)}% | ${arrow(conversions / sessions, prevConversions / prevSessions)} |`);
    ln(`| Engagement | ${engagement}% | ${prevEngagement}% | ${arrow(parseFloat(engagement), parseFloat(prevEngagement))} |`);
  }
  ln();

  // GSC totals
  const gscTotals = gscData.currentQueries.reduce(
    (acc, r) => ({ clicks: acc.clicks + r.clicks, impressions: acc.impressions + r.impressions }),
    { clicks: 0, impressions: 0 }
  );
  const gscPrevTotals = gscData.prevQueries.reduce(
    (acc, r) => ({ clicks: acc.clicks + r.clicks, impressions: acc.impressions + r.impressions }),
    { clicks: 0, impressions: 0 }
  );
  ln(`| GSC Metric | Current | Previous | Change |`);
  ln(`|------------|---------|----------|--------|`);
  ln(`| Organic Clicks | ${gscTotals.clicks} | ${gscPrevTotals.clicks} | ${pct(gscTotals.clicks, gscPrevTotals.clicks)} ${arrow(gscTotals.clicks, gscPrevTotals.clicks)} |`);
  ln(`| Organic Impressions | ${gscTotals.impressions} | ${gscPrevTotals.impressions} | ${pct(gscTotals.impressions, gscPrevTotals.impressions)} ${arrow(gscTotals.impressions, gscPrevTotals.impressions)} |`);
  ln(`| Avg CTR | ${((gscTotals.clicks / gscTotals.impressions) * 100).toFixed(1)}% | ${((gscPrevTotals.clicks / gscPrevTotals.impressions) * 100).toFixed(1)}% | ${arrow(gscTotals.clicks / gscTotals.impressions, gscPrevTotals.clicks / gscPrevTotals.impressions)} |`);
  ln();

  // ── Top Queries
  ln(`## Top 20 Search Queries`);
  ln();
  ln(`| Query | Clicks | Impr | CTR | Pos | Trend |`);
  ln(`|-------|--------|------|-----|-----|-------|`);
  const prevQueryMap = new Map(gscData.prevQueries.map((r) => [r.keys[0], r]));
  for (const row of gscData.currentQueries.slice(0, 20)) {
    const q = row.keys[0];
    const prev = prevQueryMap.get(q);
    const posChange = prev ? row.position - prev.position : 0;
    const trend = posChange < -1 ? "📈" : posChange > 1 ? "📉" : "➡️";
    ln(`| ${q} | ${row.clicks} | ${row.impressions} | ${(row.ctr * 100).toFixed(1)}% | ${row.position.toFixed(1)} | ${trend} ${prev ? pct(row.clicks, prev.clicks) : "NEW"} |`);
  }
  ln();

  // ── Page Performance (GSC)
  ln(`## Page Performance (GSC)`);
  ln();
  ln(`| Page | Clicks | Impr | CTR | Pos | vs Prev |`);
  ln(`|------|--------|------|-----|-----|---------|`);
  const prevPageMap = new Map(gscData.prevPages.map((r) => [r.keys[0], r]));
  for (const row of gscData.currentPages.slice(0, 15)) {
    const page = row.keys[0].replace(SITE_URL, "");
    const prev = prevPageMap.get(row.keys[0]);
    const clickChange = prev ? pct(row.clicks, prev.clicks) : "NEW";
    ln(`| ${page} | ${row.clicks} | ${row.impressions} | ${(row.ctr * 100).toFixed(1)}% | ${row.position.toFixed(1)} | ${clickChange} |`);
  }
  ln();

  // ── Landing Page Conversions (GA4)
  ln(`## Landing Page Conversions (GA4)`);
  ln();
  ln(`| Page | Sessions | Engagement | Conversions | Conv Rate | vs Prev |`);
  ln(`|------|----------|------------|-------------|-----------|---------|`);
  const prevGA4Map = new Map(
    ga4Data.prevPages.map((r) => [r.dimensionValues[0].value, r])
  );
  for (const row of ga4Data.currentPages.slice(0, 15)) {
    const page = row.dimensionValues[0].value;
    const sessions = parseInt(row.metricValues[0].value);
    const engagement = (parseFloat(row.metricValues[1].value) * 100).toFixed(1);
    const conversions = parseInt(row.metricValues[2].value);
    const convRate = sessions > 0 ? ((conversions / sessions) * 100).toFixed(1) : "0";
    const prev = prevGA4Map.get(page);
    const prevConv = prev ? parseInt(prev.metricValues[2].value) : 0;
    ln(`| ${page} | ${sessions} | ${engagement}% | ${conversions} | ${convRate}% | ${prev ? pct(conversions, prevConv) : "NEW"} |`);
  }
  ln();

  // ── Device Breakdown
  ln(`## Device Breakdown`);
  ln();
  ln(`| Device | Sessions | Conversions | Conv Rate |`);
  ln(`|--------|----------|-------------|-----------|`);
  for (const row of ga4Data.devices) {
    const device = row.dimensionValues[0].value;
    const sessions = parseInt(row.metricValues[0].value);
    const conversions = parseInt(row.metricValues[1].value);
    ln(`| ${device} | ${sessions} | ${conversions} | ${sessions > 0 ? ((conversions / sessions) * 100).toFixed(1) : 0}% |`);
  }
  ln();

  // ── City Breakdown
  ln(`## Top Cities`);
  ln();
  ln(`| City | Sessions | Conversions |`);
  ln(`|------|----------|-------------|`);
  for (const row of ga4Data.cities.slice(0, 8)) {
    ln(`| ${row.dimensionValues[0].value} | ${row.metricValues[0].value} | ${row.metricValues[1].value} |`);
  }
  ln();

  // ── PageSpeed
  ln(`## PageSpeed Insights (Mobile)`);
  ln();
  ln(`| Page | Perf | SEO | LCP | CLS | TBT |`);
  ln(`|------|------|-----|-----|-----|-----|`);
  for (const ps of pageSpeedData) {
    if (ps.error || ps.performance == null) {
      ln(`| ${ps.page} | ⚠️ unavailable | — | — | — | — |`);
    } else {
      const perfIcon = ps.performance >= 90 ? "🟢" : ps.performance >= 50 ? "🟡" : "🔴";
      ln(`| ${ps.page} | ${perfIcon} ${ps.performance} | ${ps.seo ?? "—"} | ${ps.lcp ?? "—"}s | ${ps.cls ?? "—"} | ${ps.tbt ?? "—"}ms |`);
    }
  }
  ln();

  // ── Cannibalization
  if (cannibalization.length) {
    ln(`## Keyword Cannibalization (endoscopiadelmayab.com vs omar.doctor)`);
    ln();
    ln(`Queries where both domains compete. Consider consolidating to one site.`);
    ln();
    ln(`| Query | Endoscopia Pos | Endoscopia Impr | Omar Pos | Omar Impr | Winner |`);
    ln(`|-------|---------------|-----------------|----------|-----------|--------|`);
    for (const c of cannibalization.slice(0, 15)) {
      const winner = c.primary.position < c.secondary.position ? "endoscopia" : "omar.doctor";
      ln(`| ${c.query} | ${c.primary.position.toFixed(1)} | ${c.primary.impressions} | ${c.secondary.position.toFixed(1)} | ${c.secondary.impressions} | ${winner} |`);
    }
    ln();
  }

  // ── Opportunities
  ln(`## Opportunities & Recommendations`);
  ln();

  const lowCtr = opportunities.filter((o) => o.type === "low_ctr");
  if (lowCtr.length) {
    ln(`### Low CTR (Rewrite Meta Title/Description)`);
    ln();
    for (const o of lowCtr.slice(0, 5)) {
      ln(`- **"${o.query}"** — ${o.impressions} impr, CTR ${o.ctr}%, pos ${o.position}`);
    }
    ln();
  }

  const striking = opportunities.filter((o) => o.type === "striking_distance");
  if (striking.length) {
    ln(`### Striking Distance (Position 5-15 — Push to Top 3)`);
    ln();
    for (const o of striking.slice(0, 8)) {
      ln(`- **"${o.query}"** — ${o.impressions} impr, pos ${o.position}`);
    }
    ln();
  }

  const drops = opportunities.filter((o) => o.type === "position_drop");
  if (drops.length) {
    ln(`### Position Drops (Investigate)`);
    ln();
    for (const o of drops.slice(0, 5)) {
      ln(`- **"${o.query}"** — dropped from ${o.prevPosition} → ${o.currentPosition} (${o.drop} positions)`);
    }
    ln();
  }

  const newQueries = opportunities.filter((o) => o.type === "new_query");
  if (newQueries.length) {
    ln(`### New Emerging Queries`);
    ln();
    for (const o of newQueries.slice(0, 5)) {
      ln(`- **"${o.query}"** — ${o.impressions} impr, ${o.clicks} clicks, pos ${o.position}`);
    }
    ln();
  }

  if (!opportunities.length) {
    ln(`No significant opportunities detected this period.`);
    ln();
  }

  ln(`---`);
  ln(`*Report generated automatically by seo-report.mjs*`);

  return lines.join("\n");
}

// ── Main ────────────────────────────────────────────────────────────────
async function main() {
  console.log("🔄 Starting SEO report generation...\n");

  // Date ranges — full calendar months
  // Running on the 1st → report on the previous month
  // e.g. April 1 run → reports March 1–31, compared to Feb 1–28
  let startDate, endDate, prevStartDate, prevEndDate, reportMonth;

  if (process.argv[2] && process.argv[3]) {
    // Manual override: node seo-report.mjs 2026-03-01 2026-03-31
    startDate = process.argv[2];
    endDate = process.argv[3];
    const d = new Date(startDate);
    reportMonth = d.toLocaleDateString("es-MX", { month: "long", year: "numeric" });
  } else {
    const now = new Date();
    // Previous calendar month
    const prevMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0); // last day of prev month
    const prevMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    startDate = dateFmt(prevMonthStart);
    endDate = dateFmt(prevMonthEnd);
    reportMonth = prevMonthStart.toLocaleDateString("es-MX", { month: "long", year: "numeric" });
  }

  // Previous period = the calendar month before that
  const currentStart = new Date(startDate);
  const prevMonthEndDate = new Date(currentStart.getTime() - 86400000); // day before current start
  const prevMonthStartDate = new Date(prevMonthEndDate.getFullYear(), prevMonthEndDate.getMonth(), 1);
  prevStartDate = dateFmt(prevMonthStartDate);
  prevEndDate = dateFmt(prevMonthEndDate);

  // Capitalize first letter for display
  reportMonth = reportMonth.charAt(0).toUpperCase() + reportMonth.slice(1);

  console.log(`📅 Report: ${reportMonth}`);
  console.log(`📅 Current period: ${startDate} → ${endDate}`);
  console.log(`📅 Previous period: ${prevStartDate} → ${prevEndDate}`);
  console.log();

  // Auth
  const auth = await getAuth();
  console.log("✅ Authenticated\n");

  // Fetch data
  console.log("📊 Fetching GSC data...");
  const gscData = await getGSCData(auth, startDate, endDate, prevStartDate, prevEndDate);
  console.log(`   ${gscData.currentQueries.length} queries, ${gscData.currentPages.length} pages\n`);

  console.log("📊 Fetching GA4 data...");
  const ga4Data = await getGA4Data(auth, startDate, endDate, prevStartDate, prevEndDate);
  console.log(`   ${ga4Data.currentPages.length} landing pages\n`);

  console.log("📊 Fetching omar.doctor GSC data (cannibalization check)...");
  let secondaryQueries = [];
  try {
    secondaryQueries = await fetchGSC(auth, startDate, endDate, ["query"], 200, GSC_SECONDARY_URL);
    console.log(`   ${secondaryQueries.length} queries from omar.doctor\n`);
  } catch (e) {
    console.log(`   ⚠️ Could not fetch omar.doctor: ${e.message?.substring(0, 80)}\n`);
  }

  console.log("📊 Running PageSpeed audits (this takes ~30s)...");
  const pageSpeedData = await getPageSpeedData(KEY_PAGES.slice(0, 5));
  console.log(`   ${pageSpeedData.length} pages audited\n`);

  // Analyze
  console.log("🔍 Analyzing opportunities...");
  const opportunities = analyzeOpportunities(gscData);
  console.log(`   ${opportunities.length} opportunities found`);

  const cannibalization = detectCannibalization(gscData.currentQueries, secondaryQueries);
  console.log(`   ${cannibalization.length} cannibalized queries found\n`);

  // Generate report
  const report = generateReport(
    gscData, ga4Data, pageSpeedData, opportunities, cannibalization,
    startDate, endDate, prevStartDate, prevEndDate, reportMonth
  );

  // Save
  mkdirSync(REPORTS_DIR, { recursive: true });
  const monthSlug = reportMonth.toLowerCase().replace(/\s+/g, "-");
  const filename = `seo-report-${monthSlug}.md`;
  const filepath = path.join(REPORTS_DIR, filename);
  writeFileSync(filepath, report, "utf-8");

  console.log(`✅ Report saved: scripts/reports/${filename}`);
  console.log();

  // Print summary to stdout
  const totalOpps = opportunities.length;
  const drops = opportunities.filter((o) => o.type === "position_drop").length;
  const striking = opportunities.filter((o) => o.type === "striking_distance").length;
  console.log("━━━ Quick Summary ━━━");
  console.log(`📈 ${striking} queries in striking distance (pos 5-15)`);
  console.log(`📉 ${drops} queries lost position`);
  console.log(`💡 ${totalOpps} total opportunities`);
  console.log(`📄 Full report: ${filepath}`);

}

main().catch((e) => {
  console.error("❌ Fatal error:", e.message);
  process.exit(1);
});
