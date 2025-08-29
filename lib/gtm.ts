// /lib/gtm.ts
export type CtaEvent = {
  event: "cta_click"
  cta_type: "call" | "whatsapp"
  cta_id: string
  cta_number?: string // tel or wa number
  cta_service?: string // e.g. "endoscopia"
  page_path?: string // optional, but nice to send
}

export function pushCta(data: Omit<CtaEvent, "event">) {
  if (typeof window === "undefined") return
  ;(window as any).dataLayer = (window as any).dataLayer || []
  ;(window as any).dataLayer.push({ event: "cta_click", ...data })
}
