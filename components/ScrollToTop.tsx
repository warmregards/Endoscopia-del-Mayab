// components/ScrollToTop.tsx
"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import {
  pushScrollDepth,
  pushCtaView,
  pushPricingView,
} from "@/lib/gtm"

const SCROLL_THRESHOLDS = [25, 50, 75, 90]

export default function ScrollToTop() {
  const pathname = usePathname()
  const firedDepths = useRef(new Set<number>())
  const firedCtaView = useRef(false)
  const firedPricingView = useRef(false)

  const isFirstMount = useRef(true)

  useEffect(() => {
    // Honor in-page deep links (e.g. /precios#endoscopia from an ad) instead
    // of forcing the page back to the top. Defer one frame so the target
    // element and layout have settled before scrolling to it.
    const hash = window.location.hash.slice(1)
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView()
      })
    } else if (!isFirstMount.current) {
      // Only on client-side route changes: on the initial load the page is
      // already at the top, and scrolling there forced a layout during boot.
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    isFirstMount.current = false
    firedDepths.current.clear()
    firedCtaView.current = false
    firedPricingView.current = false

    // --- Scroll depth tracking (25/50/75/90%) ---
    // Layout reads (scrollHeight/innerHeight) run at most once per frame,
    // inside rAF, never synchronously in the scroll event.
    let frame = 0
    function measure() {
      frame = 0
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return
      const percent = Math.round((scrollTop / docHeight) * 100)

      for (const threshold of SCROLL_THRESHOLDS) {
        if (percent >= threshold && !firedDepths.current.has(threshold)) {
          firedDepths.current.add(threshold)
          pushScrollDepth(threshold, pathname)
        }
      }
    }
    function handleScroll() {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // --- IntersectionObserver for cta_view and pricing_view ---
    const heroCtas = document.getElementById("hero-ctas")
    const pricingAnchor = document.getElementById("pricing-anchor")

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue

          if (entry.target.id === "hero-ctas" && !firedCtaView.current) {
            firedCtaView.current = true
            pushCtaView("hero-ctas", undefined, pathname)
          }
          if (
            entry.target.id === "pricing-anchor" &&
            !firedPricingView.current
          ) {
            firedPricingView.current = true
            pushPricingView(undefined, pathname)
          }
        }
      },
      { threshold: 0.5 }
    )

    if (heroCtas) observer.observe(heroCtas)
    if (pricingAnchor) observer.observe(pricingAnchor)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (frame) cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [pathname])

  return null
}
