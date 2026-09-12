// /components/FueraDeMeridaStrip.tsx
// One-row callout routing out-of-town patients to /pacientes-de-fuera-de-merida
// ("confirma antes de viajar"). Used inside existing sections on /precios,
// /endoscopia-merida, /colonoscopia-merida and the prep pages — it's a card, not
// a section, so it never disturbs the bg-background ↔ bg-muted alternation.
// Naming rule: "de fuera de Mérida", never the loaded local term for outsiders.

import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { CLINIC } from "@/lib/clinic"

export const FUERA_DE_MERIDA_PATH = "/pacientes-de-fuera-de-merida"

interface FueraDeMeridaStripProps {
  heading?: string
  body?: string
  linkLabel?: string
}

export default function FueraDeMeridaStrip({
  heading = "¿Vienes de otro municipio?",
  body = `${CLINIC.directions.parking}, sin entrar al centro. Confirma tu lugar por WhatsApp antes de viajar.`,
  linkLabel = "Guía para pacientes de fuera de Mérida",
}: FueraDeMeridaStripProps) {
  return (
    <div className="bg-accent-light border border-accent/20 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
      <MapPin className="h-6 w-6 text-accent flex-shrink-0" aria-hidden />
      <p className="flex-1 text-foreground/80 leading-relaxed">
        <span className="font-semibold text-foreground">{heading}</span> {body}
      </p>
      <Link
        href={FUERA_DE_MERIDA_PATH}
        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 hover:underline transition-all min-h-[44px]"
      >
        {linkLabel} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
