// /components/BiopsyDifferentiator.tsx
// Standardized "two-layer tarifa única" biopsy framing.
//
// The actual policy this reflects:
//   - Toma de muestras (taking) → included in the procedure fee
//   - Interpretación patológica → flat extra by the external pathologist,
//     regardless of how many samples were taken
//
// Most competitors charge per-sample on BOTH layers; this callout makes
// that asymmetry explicit without overstating ("todo incluido" was the
// previous wording and is no longer accurate).
//
// Used by: /precios, /colonoscopia-merida, /esclerosis-varices-gastricas-merida,
// /ligadura-varices-esofagicas-merida.

import { CheckCircle2 } from "lucide-react"
import { ADDITIONAL_FEES, mxn } from "@/lib/pricing"

interface BiopsyDifferentiatorProps {
  /** Headline above the two-bullet structure. */
  headline?: string
  /** Optional context paragraph between headline and bullets. */
  intro?: string
}

export default function BiopsyDifferentiator({
  headline = "Si se requieren biopsias: tarifa única en ambos lados.",
  intro,
}: BiopsyDifferentiatorProps) {
  return (
    <div className="bg-accent-light border border-accent/20 rounded-xl p-6 space-y-4">
      <p className="font-semibold text-foreground">{headline}</p>
      {intro && (
        <p className="text-foreground/80 leading-relaxed">{intro}</p>
      )}
      <ul className="space-y-2 text-foreground/80">
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
          <span>
            <span className="font-semibold">Toma de muestras:</span>{" "}
            incluida en el precio del procedimiento, sin importar cuántas se
            necesiten.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
          <span>
            <span className="font-semibold">Interpretación patológica:</span>{" "}
            {mxn(ADDITIONAL_FEES.biopsy.amount)} tarifa única del patólogo
            externo, sin importar cuántas muestras se procesen.
          </span>
        </li>
      </ul>
    </div>
  )
}
