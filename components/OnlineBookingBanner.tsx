"use client"

// components/OnlineBookingBanner.tsx
// Thin accent banner placed right after the hero on the endoscopia/colonoscopia
// pages. Surfaces the on-page AppointmentForm (which sits below the pricing
// section, past where most users scroll) within the first viewport, then
// smooth-scrolls to it on click. The hero's WhatsApp/phone CTAs are unchanged
// and remain the primary action — this button is intentionally OUTLINE (lower
// visual weight) so it never outranks the filled WhatsApp CTA.
//
// Copy frames the form as ending in a WhatsApp confirmation, so it reads as a
// structured front door for people who'd rather not open a chat cold — not a
// competing channel.

import { CalendarDays, ArrowRight } from "lucide-react"
import { pushAppointmentCtaClick } from "@/lib/gtm"

type Procedure = "endoscopia" | "colonoscopia"

export default function OnlineBookingBanner({
  procedure,
  targetId = "agendar",
}: {
  procedure: Procedure
  targetId?: string
}) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    pushAppointmentCtaClick({ service: procedure, position: "hero-banner" })
    const target =
      typeof document !== "undefined" ? document.getElementById(targetId) : null
    if (target) {
      // Prefer JS smooth-scroll so it works regardless of CSS scroll-behavior;
      // the href="#agendar" remains the no-JS fallback.
      e.preventDefault()
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="bg-accent-light">
      <div className="container-page py-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-2 sm:items-start">
            <CalendarDays className="h-6 w-6 flex-shrink-0 text-text-accent sm:mt-0.5" />
            <div>
              <p className="font-serif text-lg font-semibold tracking-tight text-foreground">
                Agenda en línea en 1 minuto
              </p>
              <p className="text-sm text-muted-foreground">
                Elige tu fecha y te confirmamos por WhatsApp en menos de 30 min.
              </p>
            </div>
          </div>
          <a
            href={`#${targetId}`}
            onClick={handleClick}
            className="inline-flex min-h-[48px] w-full flex-shrink-0 items-center justify-center gap-2 rounded-xl border-2 border-action-primary bg-transparent px-6 font-semibold text-action-primary transition-colors hover:bg-action-primary hover:text-white sm:w-auto"
          >
            Agendar en línea
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
