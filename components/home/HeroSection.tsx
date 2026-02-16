// components/home/HeroSection.tsx
import { MapPin, Star, Clock } from "lucide-react"
import { PRICING, mxn } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import WhatsAppButton from "@/components/WhatsAppButton"
import CallButton from "@/components/CallButton"

export default function HeroSection() {
  return (
    <section className="bg-surface-base">
      <div className="container-page section-padding">
        {/* Trust strip */}
        <div className="flex items-center gap-2 flex-wrap mb-4">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-sm font-semibold text-text-primary">
            {CLINIC.aggregateRating.reviewCount} reseñas
          </span>
          <span className="text-sm text-text-secondary">·</span>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-text-secondary" />
            <span className="text-sm text-text-secondary">7 días, 7am–9pm</span>
          </div>
        </div>

        {/* H1 */}
        <h1 className="text-text-primary mb-3">
          Endoscopia y Colonoscopia en Mérida, Yucatán
        </h1>

        {/* Subtitle */}
        <p className="text-[length:var(--text-body-lg)] leading-relaxed text-text-secondary mb-5 max-w-xl">
          Diagnóstico y tratamiento de enfermedades digestivas con precios transparentes.
          Cuando nos escribes, te contesta el Dr. Quiroz directamente.
        </p>

        {/* Price anchor */}
        <div className="flex items-baseline gap-2 mb-5">
          <span className="text-price text-text-accent">
            Desde {mxn(PRICING.endoscopia.from)}
          </span>
          <span className="text-sm text-text-secondary">· Sedación incluida</span>
        </div>

        {/* CTAs */}
        <div id="hero-ctas" className="flex flex-wrap gap-3 mb-5">
          <WhatsAppButton
            service="home"
            position="hero"
            label="Agendar por WhatsApp"
            className="!bg-[#25D366] hover:!bg-[#20BD5A] shadow-[0_4px_12px_hsl(142_60%_40%/0.3)]"
          />
          <CallButton
            service="home"
            position="hero"
          />
        </div>

        {/* Location bar */}
        <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-interactive bg-surface-sunken border border-border-default">
          <MapPin className="h-4 w-4 text-text-secondary shrink-0" />
          <span className="text-sm text-text-secondary">
            Hospital Amerimed Mérida, Consultorio 517 — Chichi Suárez
          </span>
        </div>
      </div>
    </section>
  )
}
