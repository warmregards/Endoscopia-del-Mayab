// app/api/intake/route.ts
// Server route for the on-page appointment request form (validation test).
// Validates input, generates a folio, and notifies a Telegram group. No DB,
// no email, no offline-conversion upload — those are future work. This route
// stops at delivering the request (+ captured click IDs) to Telegram.
//
// Secrets are read server-side ONLY (no NEXT_PUBLIC_). A missing secret fails
// safe with a 500 so the patient is told to use WhatsApp — never a silent drop.

import { randomBytes } from "crypto"
import { NextResponse } from "next/server"
import { z } from "zod"
import { parsePhoneNumberFromString } from "libphonenumber-js"
import { PRICING, type ServiceKey } from "@/lib/pricing"

export const runtime = "nodejs"

// Generic Spanish error → the form shows its WhatsApp fallback. Never leak details.
const GENERIC_ERROR =
  "No pudimos procesar tu solicitud en este momento. Escríbenos por WhatsApp y te atendemos."

// ── Folio: EDM-XXXX, 4 unambiguous alphanumerics (no O/0/I/1) ───────────────
// 32-char alphabet → byte % 32 is unbiased (256 / 32 = 8 exactly).
const FOLIO_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
function generateFolio(): string {
  const bytes = randomBytes(4)
  let s = ""
  for (let i = 0; i < 4; i++) s += FOLIO_ALPHABET[bytes[i] % FOLIO_ALPHABET.length]
  return `EDM-${s}`
}

// ── Telegram HTML escaping (only &, <, > matter for parse_mode=HTML) ─────────
function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

// ── Today's date in the clinic's timezone (America/Merida), as yyyy-mm-dd ────
// ISO date strings compare correctly lexicographically, so we keep it textual.
function todayInMerida(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Merida" }).format(
    new Date()
  )
}

const CROSS_SELL: Record<"endoscopia" | "colonoscopia", ServiceKey> = {
  endoscopia: "colonoscopia",
  colonoscopia: "endoscopia",
}

const WINDOW_LABEL: Record<"manana" | "tarde", string> = {
  manana: "Mañana",
  tarde: "Tarde",
}

// ── Payload schema (server is the source of truth) ──────────────────────────
const PayloadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(1),
  preferredDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional()
    .nullable(),
  preferredWindow: z.enum(["manana", "tarde"]).optional().nullable(),
  crossSell: z.boolean().optional().default(false),
  message: z.string().max(500).optional().nullable(),
  procedure: z.enum(["endoscopia", "colonoscopia"]),
  // tracking (silent)
  gclid: z.string().max(512).optional(),
  gbraid: z.string().max(512).optional(),
  wbraid: z.string().max(512).optional(),
  utm: z
    .object({
      source: z.string().max(256).optional(),
      medium: z.string().max(256).optional(),
      campaign: z.string().max(256).optional(),
      term: z.string().max(256).optional(),
      content: z.string().max(256).optional(),
    })
    .optional(),
  sourcePage: z.string().max(256).optional().default(""),
  // anti-spam honeypot — real users never fill it
  website: z.string().optional(),
})

export async function POST(req: Request) {
  // 1. Parse JSON body.
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 400 })
  }

  // 2. Honeypot — silently accept (200) without notifying Telegram. Returning
  //    a normal-looking response avoids tipping off bots.
  if (
    typeof body === "object" &&
    body !== null &&
    typeof (body as { website?: unknown }).website === "string" &&
    (body as { website: string }).website.trim() !== ""
  ) {
    return NextResponse.json({ ok: true })
  }

  // 3. Zod validation.
  const parsed = PayloadSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 400 })
  }
  const data = parsed.data

  // 3b. preferredDate must be today or future (clinic timezone).
  if (data.preferredDate && data.preferredDate < todayInMerida()) {
    return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 400 })
  }

  // 4. Phone — authoritative MX validation via libphonenumber (handles the
  //    +52 / +521 mobile distinction; rejects landline gibberish).
  const phone = parsePhoneNumberFromString(data.phone, "MX")
  if (!phone || !phone.isValid() || phone.country !== "MX") {
    return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 400 })
  }
  const phoneE164 = phone.number // E.164, e.g. +52...

  // Secrets — server-only. Missing → fail safe (500 + WhatsApp fallback).
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) {
    console.error("[intake] Telegram env vars missing — cannot deliver request")
    return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 500 })
  }

  // 5. Folio.
  const folio = generateFolio()

  // 6. Build Telegram message (HTML). Escape all user-supplied fields.
  const crossKey = CROSS_SELL[data.procedure]
  const procedureLabel = data.crossSell
    ? `${PRICING[data.procedure].label} + ${PRICING[crossKey].label}`
    : PRICING[data.procedure].label

  const dateLine = data.preferredDate || "Sin preferencia"
  const windowLine = data.preferredWindow
    ? WINDOW_LABEL[data.preferredWindow]
    : "Sin preferencia"
  const clickId = data.gclid || data.gbraid || data.wbraid || "—"

  const text = [
    `🩺 <b>Nueva solicitud — ${escapeHtml(procedureLabel)}</b>`,
    `Folio: <code>${folio}</code>`,
    `Nombre: ${escapeHtml(data.name)}`,
    `Teléfono: ${escapeHtml(phoneE164)}`,
    `Fecha: ${escapeHtml(dateLine)} · ${windowLine}`,
    `Mensaje: ${data.message ? escapeHtml(data.message) : "—"}`,
    `Origen: ${escapeHtml(data.sourcePage || "—")}`,
    `gclid: ${escapeHtml(clickId)}`,
  ].join("\n")

  // 7. Send to Telegram (5s timeout).
  // NOTE: a per-IP rate limiter (~5/min, 20/hr via Upstash/Vercel KV) would
  // slot in here, before the network call. Deferred for the test — honeypot +
  // phone validation are the spam floor.
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 5000)
  try {
    const res = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
        signal: controller.signal,
      }
    )
    if (!res.ok) {
      console.error(`[intake] Telegram send failed (${res.status}) folio=${folio}`)
      return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 500 })
    }
  } catch (err) {
    const reason = err instanceof Error ? err.name : "unknown"
    console.error(`[intake] Telegram request errored (${reason}) folio=${folio}`)
    return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 500 })
  } finally {
    clearTimeout(timeout)
  }

  // 8. Success — log folio + outcome only (no PII).
  console.log(`[intake] delivered folio=${folio} procedure=${data.procedure}`)
  return NextResponse.json({ ok: true, folio })
}
