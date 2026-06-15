/**
 * scripts/dump-ref-codes.mjs
 *
 * Daily KV → CSV ledger. Reads every WhatsApp ref-code record out of Vercel KV
 * (Upstash Redis) via the REST API — no Next.js runtime, no @vercel/kv import —
 * and writes data/ref-codes.csv (committed to the repo).
 *
 * The capture side (/api/ref) writes one `ref:${code}` JSON record per click and
 * adds each code to the Set `ref:index`. This script is the read side: it dumps
 * the whole index to a flat CSV that scripts/reconcile-conversions.py later joins
 * against a Prepsync export to build the Google Ads offline-conversion upload.
 *
 * Run by .github/workflows/dump-ref-codes.yml on a daily cron (06:00 UTC).
 *
 * Env (both required — present in Vercel + GitHub repo secrets):
 *   KV_REST_API_URL    e.g. https://xxxx.upstash.io
 *   KV_REST_API_TOKEN  bearer token
 *
 * Idempotent: overwrites data/ref-codes.csv every run. Rows sorted by `created`
 * descending. Missing fields render as empty strings.
 */

import { writeFileSync, mkdirSync } from "node:fs"
import { dirname, join } from "node:path"

// Column order is a contract with reconcile-conversions.py — do not reorder.
const COLUMNS = [
  "code",
  "gclid",
  "fbclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "service",
  "page_path",
  "created",
]

const KV_URL = (process.env.KV_REST_API_URL || "").replace(/\/$/, "")
const KV_TOKEN = process.env.KV_REST_API_TOKEN || ""
const OUT_PATH = join(process.cwd(), "data", "ref-codes.csv")
const MGET_BATCH = 256 // keep request bodies small

function fail(msg) {
  console.error(`[dump-ref-codes] FAILED: ${msg}`)
  process.exit(1)
}

/**
 * Run a single Redis command via the Upstash REST API (command-array form).
 * POST <base> with body ["CMD", ...args] → { result }. Avoids URL-encoding the
 * key into the path.
 */
async function kvCommand(args) {
  let res
  try {
    res = await fetch(KV_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${KV_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(args),
    })
  } catch (e) {
    return fail(`network error on ${args[0]}: ${e.message}`)
  }
  if (!res.ok) {
    const body = await res.text().catch(() => "")
    return fail(`HTTP ${res.status} on ${args[0]} — ${body.slice(0, 300)}`)
  }
  const json = await res.json()
  if (json && typeof json === "object" && "error" in json && json.error) {
    return fail(`KV error on ${args[0]}: ${json.error}`)
  }
  return json.result
}

/**
 * Values are written by @vercel/kv, which JSON-encodes everything. Raw REST
 * therefore hands back a JSON string; parse it. Be defensive: tolerate a value
 * that is already an object, or a bare string.
 */
function decodeRecord(raw) {
  if (raw == null) return null
  if (typeof raw === "object") return raw
  if (typeof raw === "string") {
    try {
      return JSON.parse(raw)
    } catch {
      return null
    }
  }
  return null
}

function csvEscape(value) {
  const s = value == null ? "" : String(value)
  if (s === "") return ""
  // Quote when the field contains a comma, quote, CR or LF; double inner quotes.
  if (/[",\r\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

function toRow(record) {
  return COLUMNS.map((col) => csvEscape(record?.[col])).join(",")
}

async function main() {
  if (!KV_URL) fail("missing KV_REST_API_URL env var")
  if (!KV_TOKEN) fail("missing KV_REST_API_TOKEN env var")

  // 1. All codes from the index Set.
  const codes = (await kvCommand(["SMEMBERS", "ref:index"])) || []
  if (!Array.isArray(codes)) fail("SMEMBERS ref:index did not return an array")

  // 2. Batch MGET the `ref:${code}` records.
  const records = []
  for (let i = 0; i < codes.length; i += MGET_BATCH) {
    const batch = codes.slice(i, i + MGET_BATCH)
    const keys = batch.map((c) => `ref:${c}`)
    const values = (await kvCommand(["MGET", ...keys])) || []
    values.forEach((raw, idx) => {
      const rec = decodeRecord(raw)
      if (!rec) {
        // Key in the index but value expired/missing — skip, keep `code` traceable.
        console.warn(`[dump-ref-codes] no record for code=${batch[idx]} (expired?)`)
        return
      }
      // Guarantee `code` is populated even if the stored record omitted it.
      if (!rec.code) rec.code = batch[idx]
      records.push(rec)
    })
  }

  // 3. Sort by `created` descending (ISO strings sort lexicographically; blanks last).
  records.sort((a, b) => {
    const av = a?.created || ""
    const bv = b?.created || ""
    if (av === bv) return 0
    if (!av) return 1
    if (!bv) return -1
    return av < bv ? 1 : -1
  })

  // 4. Write CSV (overwrite).
  const lines = [COLUMNS.join(","), ...records.map(toRow)]
  mkdirSync(dirname(OUT_PATH), { recursive: true })
  writeFileSync(OUT_PATH, lines.join("\n") + "\n", "utf8")

  console.log(
    `[dump-ref-codes] Wrote ${records.length} of ${codes.length} codes to data/ref-codes.csv`
  )
}

main()
