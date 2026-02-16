"use client"

import { useEffect, useRef } from "react"
import {
  pushScrollDepth,
  pushCtaView,
  pushPricingView,
  pushFaqExpand,
} from "@/lib/gtm"

const SCROLL_THRESHOLDS = [25, 50, 75, 90]

export default function ScrollTracker() {
  const firedDepths = useRef(new Set<number>())
  const firedCtaView = useRef(false)
  const firedPricingView = useRef(false)

  useEffect(() => {
    const pagePath = window.location.pathname

    // --- Scroll depth tracking ---
    function handleScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return
      const percent = Math.round((scrollTop / docHeight) * 100)

      for (const threshold of SCROLL_THRESHOLDS) {
        if (percent >= threshold && !firedDepths.current.has(threshold)) {
          firedDepths.current.add(threshold)
          pushScrollDepth(threshold, pagePath)
        }
      }
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
            pushCtaView("hero-ctas", pagePath)
          }
          if (entry.target.id === "pricing-anchor" && !firedPricingView.current) {
            firedPricingView.current = true
            pushPricingView(pagePath)
          }
        }
      },
      { threshold: 0.5 }
    )

    if (heroCtas) observer.observe(heroCtas)
    if (pricingAnchor) observer.observe(pricingAnchor)

    // --- FAQ expand tracking ---
    function handleToggle(e: Event) {
      const details = e.target as HTMLDetailsElement
      if (details.open) {
        const summary = details.querySelector("summary .font-semibold")
        const question = summary?.textContent?.trim() || ""
        if (question) pushFaqExpand(question, pagePath)
      }
    }

    const faqSection = document.querySelector('[aria-labelledby="faq-heading"]')
    const detailsElements = faqSection?.querySelectorAll("details") || []
    detailsElements.forEach(el => el.addEventListener("toggle", handleToggle))

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
      detailsElements.forEach(el => el.removeEventListener("toggle", handleToggle))
    }
  }, [])

  return null
}
