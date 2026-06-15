// app/api/ref/route.ts
// Receives the per-click WhatsApp ref code + first-party attribution and stores
// { code -> gclid/fbclid/utm/service/page_path } in Vercel KV. Dr. Quiroz reads
// the ref code in his first WhatsApp message; a later offline-conversion upload
// reconciles a delivered patient back to the ad click via this record.
//
// Called via navigator.sendBeacon (fire-and-forget) as the patient leaves for
// wa.me, so this handler must be fast and must never echo stored data back.
// No auth — it's a low-risk write — but rate-limited per IP via a KV counter.

import { kv } from "@vercel/kv"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

// Keep in sync with REF_CODE_RE in lib/attribution.ts.
const REF_RE = /^EDM-[2-9A-HJ-NP-Z]{6}$/
const TTL_SECONDS = 120 * 24 * 60 * 60 // 120 days
const RL_MAX = 30 // requests…
const RL_WINDOW = 60 // …per 60s per IP

function clientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for")
  if (xff) return xff.split(",")[0].trim()
  return req.headers.get("x-real-ip")?.trim() || "unknown"
}

// Coerce to a trimmed, length-capped string or undefined (mirrors intake route).
function str(v: unknown, max = 512): string | undefined {
  if (typeof v !== "string") return undefined
  const t = v.trim()
  return t ? t.slice(0, max) : undefined
}

export async function POST(req: Request) {
  // 1. Per-IP rate limit. Best-effort: a KV hiccup here must NOT drop the write,
  //    so we swallow errors and fall through.
  const ip = clientIp(req)
  try {
    const rlKey = `rl:${ip}`
    const count = await kv.incr(rlKey)
    if (count === 1) await kv.expire(rlKey, RL_WINDOW)
    if (count > RL_MAX) {
      return NextResponse.json({ ok: false }, { status: 429 })
    }
  } catch (err) {
    console.error("[ref] rate-limit KV error", err)
  }

  // 2. Parse + validate the code (the only required field).
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
  const b = body as Record<string, unknown>

  const code = typeof b.code === "string" ? b.code : ""
  if (!REF_RE.test(code)) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  // 3. Build the stored record. Unknown/empty fields normalize to null.
  const record = {
    code,
    gclid: str(b.gclid) ?? null,
    fbclid: str(b.fbclid) ?? null,
    utm_source: str(b.utm_source) ?? null,
    utm_medium: str(b.utm_medium) ?? null,
    utm_campaign: str(b.utm_campaign) ?? null,
    utm_term: str(b.utm_term) ?? null,
    service: str(b.service, 80) ?? null,
    page_path: str(b.page_path, 256) ?? null,
    created: new Date().toISOString(),
  }

  // 4. Write: `ref:${code}` (120-day TTL) + add to the `ref:index` set so a
  //    future cron can dump all codes for the offline-conversion upload.
  try {
    await kv.set(`ref:${code}`, record, { ex: TTL_SECONDS })
    await kv.sadd("ref:index", code)
  } catch (err) {
    console.error(`[ref] KV write failed code=${code}`, err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }

  // Never echo stored data back.
  return NextResponse.json({ ok: true })
}
