// /lib/useWhatsAppRef.ts
// The single source of WhatsApp CTA click behavior. Every WhatsApp CTA on the
// site must run this on click; a raw `<a href={waHref(...)}>` without it is a
// double loss — no ref code is minted (the message reaches Dr. Quiroz with
// nothing to reconcile against the ad click) AND no `whatsapp_click` fires (the
// tap is invisible to GA4 and to Google Ads, where whatsapp_click is the
// conversion action). Consumed by WhatsAppButton, StickyMobileCTA, and
// WhatsAppLink so all three stay byte-identical.

"use client"

import { useCallback } from "react"
import { CLINIC, waHref, withRefCode } from "@/lib/clinic"
import {
  captureAttribution,
  generateRefCode,
  sendRefBeacon,
  toRefPayload,
} from "@/lib/attribution"
import { pushWhatsAppClick } from "@/lib/gtm"

export interface UseWhatsAppRefOptions {
  /** Service key recorded in the ledger + GTM (e.g. "colonoscopia", "precios"). */
  service?: string
  /** GTM cta_id. Defaults to `cta-${service}-wa`. */
  ctaId?: string
  /**
   * Message body the ref line is appended to. Omit to use the clinic default
   * text — matching waHref()'s own fallback so the no-JS href and the minted
   * href carry the same copy.
   */
  message?: string
}

/**
 * Returns an onClick handler that: mints a per-click ref code, beacons it with
 * captured attribution to /api/ref, rewrites the anchor href so the ref line
 * lands in the patient's pre-filled WhatsApp message, and fires `whatsapp_click`.
 */
export function useWhatsAppRef({
  service = "generic",
  ctaId,
  message,
}: UseWhatsAppRefOptions = {}) {
  return useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const code = generateRefCode()
      const attr = captureAttribution()
      const pagePath =
        typeof window !== "undefined" ? window.location.pathname : undefined

      // Fire-and-forget the attribution; survives the tab switch to WhatsApp.
      sendRefBeacon(toRefPayload(code, attr, { service, page_path: pagePath }))

      // Rebuild the href with the ref line appended, before default navigation.
      const baseMessage = message ?? CLINIC.whatsapp.defaultText
      e.currentTarget.href = waHref({ text: withRefCode(baseMessage, code) })

      pushWhatsAppClick({
        ctaId: ctaId ?? `cta-${service}-wa`,
        number: CLINIC.whatsapp.number,
        service,
        refCode: code,
      })
    },
    [service, ctaId, message]
  )
}
