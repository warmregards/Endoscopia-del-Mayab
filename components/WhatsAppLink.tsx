"use client"

import { waHref } from "@/lib/clinic"
import { useWhatsAppRef } from "@/lib/useWhatsAppRef"

type WhatsAppLinkProps = {
  /** Message body pre-filled in WhatsApp (before the ref line). Omit for the clinic default. */
  message?: string
  /** Service key for the ledger + GTM (e.g. "precios", "contacto"). */
  service?: string
  /** GTM cta_id. Defaults to `cta-${service}-wa`. */
  ctaId?: string
  className?: string
  children: React.ReactNode
}

/**
 * A minting WhatsApp anchor for use inside SERVER components (precios, contacto)
 * where a raw `<a href={waHref(...)}>` can't carry the onClick that mints a ref
 * code. Styling and content are fully caller-controlled via className/children,
 * so it drops into arbitrary markup — text link, table-row CTA, button — without
 * imposing button chrome. The minting itself comes from useWhatsAppRef, keeping
 * it identical to WhatsAppButton and StickyMobileCTA.
 */
export default function WhatsAppLink({
  message,
  service = "generic",
  ctaId,
  className,
  children,
}: WhatsAppLinkProps) {
  // Base href is the no-JS / middle-click fallback; onClick rebuilds it with the
  // per-click ref line before navigation (codes must be unique per tap).
  const href = waHref(message !== undefined ? { text: message } : undefined)
  const handleClick = useWhatsAppRef({ service, ctaId, message })

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
