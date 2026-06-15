// /lib/attribution.ts
// Client-side capture + persistence of Google Ads click IDs and UTM params.
//
// Why all three click-ID types: Google uses `gbraid`/`wbraid` for iOS/app
// traffic where `gclid` is unavailable. Capturing only `gclid` silently loses
// those conversions. We persist whatever lands so a *future* offline-conversion
// upload can reconcile a delivered appointment (folio) back to the ad click.
//
// Storage: a first-party cookie (`edm_attribution`, ~90 days) with a
// localStorage mirror. The cookie survives even if localStorage is cleared,
// and we read from storage on submit — NOT from the current URL — because the
// submit pageview is often not the ad-landing pageview.
//
// Organic traffic is the empty case: nothing stored → fields sent empty. Fine.

const STORAGE_KEY = "edm_attribution"
const MAX_AGE_SECONDS = 90 * 24 * 60 * 60 // ~90 days

export interface Utm {
  source?: string
  medium?: string
  campaign?: string
  term?: string
  content?: string
}

export interface Attribution {
  gclid?: string
  gbraid?: string
  wbraid?: string
  /** Meta/Facebook click ID — captured for the WhatsApp ref-code path. */
  fbclid?: string
  utm?: Utm
}

// Strip empties so the merged object stays compact and JSON-clean.
function prune(attr: Attribution): Attribution {
  const out: Attribution = {}
  if (attr.gclid) out.gclid = attr.gclid
  if (attr.gbraid) out.gbraid = attr.gbraid
  if (attr.wbraid) out.wbraid = attr.wbraid
  if (attr.fbclid) out.fbclid = attr.fbclid
  if (attr.utm) {
    const utm: Utm = {}
    for (const k of ["source", "medium", "campaign", "term", "content"] as const) {
      const v = attr.utm[k]
      if (v) utm[k] = v
    }
    if (Object.keys(utm).length > 0) out.utm = utm
  }
  return out
}

function readFromUrl(): Attribution {
  if (typeof window === "undefined") return {}
  const p = new URLSearchParams(window.location.search)
  const val = (k: string) => p.get(k)?.trim() || undefined
  return prune({
    gclid: val("gclid"),
    gbraid: val("gbraid"),
    wbraid: val("wbraid"),
    fbclid: val("fbclid"),
    utm: {
      source: val("utm_source"),
      medium: val("utm_medium"),
      campaign: val("utm_campaign"),
      term: val("utm_term"),
      content: val("utm_content"),
    },
  })
}

function readCookie(): Attribution | null {
  if (typeof document === "undefined") return null
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${STORAGE_KEY}=`))
  if (!match) return null
  try {
    return JSON.parse(decodeURIComponent(match.split("=").slice(1).join("=")))
  } catch {
    return null
  }
}

function readLocalStorage(): Attribution | null {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Attribution) : null
  } catch {
    return null
  }
}

/** Read whatever was previously persisted (cookie preferred, localStorage mirror). */
export function getStoredAttribution(): Attribution {
  return prune(readCookie() ?? readLocalStorage() ?? {})
}

function persist(attr: Attribution): void {
  const pruned = prune(attr)
  const json = JSON.stringify(pruned)
  try {
    document.cookie = `${STORAGE_KEY}=${encodeURIComponent(
      json
    )}; Max-Age=${MAX_AGE_SECONDS}; Path=/; SameSite=Lax`
  } catch {
    /* cookies unavailable — fall through to localStorage */
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, json)
  } catch {
    /* storage unavailable (private mode) — cookie is the fallback */
  }
}

/**
 * Capture attribution from the current URL, merge it over anything already
 * stored (a fresh click ID from this URL wins), persist, and return the merged
 * result. Call once on landing/mount. Idempotent for organic visits.
 */
export function captureAttribution(): Attribution {
  const stored = getStoredAttribution()
  const fromUrl = readFromUrl()

  // URL values take precedence; stored fills the gaps. Last-touch by design: a
  // fresh click ID from this pageview overwrites the stored one (this feeds
  // Google Ads offline conversions, which credit the last paid click). The
  // stored value is retained only when this pageview carries nothing new.
  const merged: Attribution = prune({
    gclid: fromUrl.gclid ?? stored.gclid,
    gbraid: fromUrl.gbraid ?? stored.gbraid,
    wbraid: fromUrl.wbraid ?? stored.wbraid,
    fbclid: fromUrl.fbclid ?? stored.fbclid,
    utm: { ...stored.utm, ...fromUrl.utm },
  })

  // Only (re)persist when this URL actually carried attribution — avoids
  // pointlessly refreshing the cookie TTL on every organic pageview.
  if (Object.keys(fromUrl).length > 0) persist(merged)

  return merged
}

// ---------------------------------------------------------------------------
// Ref-code path (WhatsApp). WhatsApp is the dominant conversion channel; to
// recover the ad click after a patient leaves for wa.me, we mint a per-click
// ref code, ship { code -> stored attribution } to /api/ref, and append the
// code to the WhatsApp pre-fill so it lands in Dr. Quiroz's first message.
// ---------------------------------------------------------------------------

// Crockford-style base32, unambiguous (no I/O/0/1). 2^32 is divisible by 32,
// so `value % 32` is unbiased.
const REF_ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ"

/** Server- and client-side guard for ref codes. Keep in sync with /api/ref. */
export const REF_CODE_RE = /^EDM-[2-9A-HJ-NP-Z]{6}$/

/** Generate a per-click ref code: EDM-XXXXXX (6 unambiguous base32 chars). */
export function generateRefCode(): string {
  const c = (typeof globalThis !== "undefined" && globalThis.crypto) || window.crypto
  const arr = new Uint32Array(6)
  c.getRandomValues(arr)
  let s = ""
  for (let i = 0; i < 6; i++) s += REF_ALPHABET[arr[i] % REF_ALPHABET.length]
  return `EDM-${s}`
}

/** Flat payload shape posted to /api/ref. */
export interface RefBeaconPayload {
  code: string
  gclid?: string
  fbclid?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  service?: string
  page_path?: string
}

/** Flatten stored attribution into the /api/ref payload (drops empty fields). */
export function toRefPayload(
  code: string,
  attr: Attribution,
  extra: { service?: string; page_path?: string } = {}
): RefBeaconPayload {
  const payload: RefBeaconPayload = { code }
  if (attr.gclid) payload.gclid = attr.gclid
  if (attr.fbclid) payload.fbclid = attr.fbclid
  if (attr.utm?.source) payload.utm_source = attr.utm.source
  if (attr.utm?.medium) payload.utm_medium = attr.utm.medium
  if (attr.utm?.campaign) payload.utm_campaign = attr.utm.campaign
  if (attr.utm?.term) payload.utm_term = attr.utm.term
  if (extra.service) payload.service = extra.service
  if (extra.page_path) payload.page_path = extra.page_path
  return payload
}

/**
 * Fire-and-forget the ref code + attribution to /api/ref. Uses sendBeacon so
 * the request survives the tab switch to WhatsApp; falls back to fetch
 * keepalive. Never throws — a tracking failure must not block navigation.
 */
export function sendRefBeacon(payload: RefBeaconPayload): void {
  if (typeof window === "undefined") return
  try {
    const json = JSON.stringify(payload)
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      const blob = new Blob([json], { type: "application/json" })
      if (navigator.sendBeacon("/api/ref", blob)) return
    }
    void fetch("/api/ref", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: json,
      keepalive: true,
    }).catch(() => {})
  } catch {
    /* never block navigation on a tracking failure */
  }
}
