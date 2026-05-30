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
  utm?: Utm
}

// Strip empties so the merged object stays compact and JSON-clean.
function prune(attr: Attribution): Attribution {
  const out: Attribution = {}
  if (attr.gclid) out.gclid = attr.gclid
  if (attr.gbraid) out.gbraid = attr.gbraid
  if (attr.wbraid) out.wbraid = attr.wbraid
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

  // URL values take precedence; stored fills the gaps (first-touch retained
  // when this pageview carries nothing new).
  const merged: Attribution = prune({
    gclid: fromUrl.gclid ?? stored.gclid,
    gbraid: fromUrl.gbraid ?? stored.gbraid,
    wbraid: fromUrl.wbraid ?? stored.wbraid,
    utm: { ...stored.utm, ...fromUrl.utm },
  })

  // Only (re)persist when this URL actually carried attribution — avoids
  // pointlessly refreshing the cookie TTL on every organic pageview.
  if (Object.keys(fromUrl).length > 0) persist(merged)

  return merged
}
