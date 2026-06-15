"use client"

import { useEffect } from "react"
import { captureAttribution } from "@/lib/attribution"

/**
 * Captures gclid/fbclid/utm from the landing URL into the first-party cookie on
 * every page load, so any WhatsApp tap (the dominant conversion channel) can
 * attach the stored attribution to its ref code. Renders nothing.
 */
export default function AttributionCapture() {
  useEffect(() => {
    captureAttribution()
  }, [])
  return null
}
