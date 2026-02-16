// /lib/gtm.ts
// Centralized Google Tag Manager / GA4 event tracking.
// Consumed by: CTA buttons, scroll observers, FAQ accordions, pricing sections.
//
// Event names follow Project_Context_and_Decisions_v2.md tracking spec:
//   whatsapp_click  — click on WhatsApp CTA
//   phone_click     — click on tel: link
//   scroll_depth    — 25%, 50%, 75%, 90% thresholds
//   cta_view        — WhatsApp button enters viewport
//   pricing_view    — user scrolls to pricing section
//   faq_expand      — user clicks FAQ accordion item
//   page_view       — standard (handled by Next.js, helper here for SPA edge cases)

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface WhatsAppClickEvent {
  event: "whatsapp_click"
  cta_id: string
  cta_number: string
  service?: string
  page_path: string
}

interface PhoneClickEvent {
  event: "phone_click"
  cta_id: string
  cta_number: string
  service?: string
  page_path: string
}

interface ScrollDepthEvent {
  event: "scroll_depth"
  scroll_depth: number
  page_path: string
}

interface CtaViewEvent {
  event: "cta_view"
  cta_id: string
  service?: string
  page_path: string
}

interface PricingViewEvent {
  event: "pricing_view"
  service?: string
  page_path: string
}

interface FaqExpandEvent {
  event: "faq_expand"
  faq_question: string
  service?: string
  page_path: string
}

interface PageViewEvent {
  event: "page_view"
  page_path: string
  page_title?: string
}

type DataLayerEvent =
  | WhatsAppClickEvent
  | PhoneClickEvent
  | ScrollDepthEvent
  | CtaViewEvent
  | PricingViewEvent
  | FaqExpandEvent
  | PageViewEvent

declare global {
  interface Window {
    dataLayer: DataLayerEvent[]
  }
}

// ---------------------------------------------------------------------------
// Core push (single place for the guard + dataLayer init)
// ---------------------------------------------------------------------------

function push(data: DataLayerEvent): void {
  if (typeof window === "undefined") return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(data)
}

// ---------------------------------------------------------------------------
// Convenience: get current page path (avoids passing it from every call site)
// ---------------------------------------------------------------------------

function currentPath(): string {
  if (typeof window === "undefined") return ""
  return window.location.pathname
}

// ---------------------------------------------------------------------------
// Event Functions
// ---------------------------------------------------------------------------

/**
 * Track WhatsApp CTA click.
 * Fires as `whatsapp_click` (distinct from phone_click per GA4 spec).
 *
 * @example
 *   pushWhatsAppClick({ ctaId: "hero-wa", number: "529992360153", service: "colonoscopia" })
 */
export function pushWhatsAppClick(params: {
  ctaId: string
  number: string
  service?: string
  pagePath?: string
}): void {
  push({
    event: "whatsapp_click",
    cta_id: params.ctaId,
    cta_number: params.number,
    service: params.service,
    page_path: params.pagePath || currentPath(),
  })
}

/**
 * Track phone tel: link click.
 * Fires as `phone_click` (distinct from whatsapp_click per GA4 spec).
 *
 * @example
 *   pushPhoneClick({ ctaId: "hero-phone", number: "+529992360153", service: "cpre" })
 */
export function pushPhoneClick(params: {
  ctaId: string
  number: string
  service?: string
  pagePath?: string
}): void {
  push({
    event: "phone_click",
    cta_id: params.ctaId,
    cta_number: params.number,
    service: params.service,
    page_path: params.pagePath || currentPath(),
  })
}

/**
 * Track scroll depth milestones.
 *
 * @example
 *   pushScrollDepth(50)  // user scrolled to 50%
 */
export function pushScrollDepth(
  depth: number,
  pagePath?: string
): void {
  push({
    event: "scroll_depth",
    scroll_depth: depth,
    page_path: pagePath || currentPath(),
  })
}

/**
 * Track WhatsApp CTA entering the viewport.
 * Use with IntersectionObserver on the CTA button.
 *
 * @example
 *   pushCtaView("hero-wa", "colonoscopia")
 */
export function pushCtaView(
  ctaId: string,
  service?: string,
  pagePath?: string
): void {
  push({
    event: "cta_view",
    cta_id: ctaId,
    service,
    page_path: pagePath || currentPath(),
  })
}

/**
 * Track user scrolling to the pricing section.
 * Use with IntersectionObserver on the pricing container.
 *
 * @example
 *   pushPricingView("endoscopia")
 */
export function pushPricingView(
  service?: string,
  pagePath?: string
): void {
  push({
    event: "pricing_view",
    service,
    page_path: pagePath || currentPath(),
  })
}

/**
 * Track FAQ accordion expansion.
 *
 * @example
 *   pushFaqExpand("¿Duele la colonoscopia?", "colonoscopia")
 */
export function pushFaqExpand(
  question: string,
  service?: string,
  pagePath?: string
): void {
  push({
    event: "faq_expand",
    faq_question: question,
    service,
    page_path: pagePath || currentPath(),
  })
}

/**
 * Track page view (for SPA route transitions if Next.js automatic tracking
 * isn't sufficient). Most cases don't need this — Next.js handles it.
 *
 * @example
 *   pushPageView("/cpre-merida", "CPRE en Mérida")
 */
export function pushPageView(
  pagePath?: string,
  pageTitle?: string
): void {
  push({
    event: "page_view",
    page_path: pagePath || currentPath(),
    page_title: pageTitle,
  })
}