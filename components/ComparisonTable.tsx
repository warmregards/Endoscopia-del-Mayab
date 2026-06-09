// /components/ComparisonTable.tsx
// Qualitative "why a certified endoscopist" comparison: low-cost lab vs.
// general hospital vs. us, across the things price shoppers actually weigh
// (anesthesia, biopsies, who reads the study, equipment, who answers).
//
// This is NOT the per-procedure price benchmark (that lives inline in each
// #precio section). It's the trust/value angle, shared verbatim across pages
// so the story stays consistent.
//
// Used by: /precios, /colonoscopia-merida#comparacion, /endoscopia-merida#comparacion
// The section carries id="comparacion" + scroll-mt-24 so those anchors land cleanly.

import { mxn, ADDITIONAL_FEES } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"

interface ComparisonTableProps {
  /** Section background — alternate with the section above it. */
  background?: "muted" | "background"
  /** Heading above the table. */
  heading?: string
}

const comparisonRows = [
  {
    label: "Anestesia",
    lab: "No incluida",
    hospital: "Incluida",
    us: "Incluida",
  },
  {
    label: "Toma de biopsias",
    lab: "Por cada muestra",
    hospital: "Variable",
    us: "Incluida, sin límite",
  },
  {
    label: "Interpretación patológica",
    lab: "Por cada muestra",
    hospital: "Por cada muestra",
    us: `${mxn(ADDITIONAL_FEES.biopsy.amount)} tarifa única`,
  },
  {
    label: "Endoscopista certificado",
    lab: "No siempre",
    hospital: "Variable",
    us: `${DOCTOR.name.split(" ").slice(0, 3).join(" ")} — ${DOCTOR.yearsExperience}+ años`,
  },
  {
    label: "Equipo",
    lab: "Compartido",
    hospital: "Hospital",
    us: "Equipo propio del doctor",
  },
  {
    label: "Atención directa",
    lab: "Call center",
    hospital: "Recepcionista",
    us: "El doctor contesta",
  },
  {
    label: "Reporte del estudio",
    lab: "3–5 días",
    hospital: "2–3 días",
    us: "Mismo día",
  },
]

export default function ComparisonTable({
  background = "muted",
  heading = "¿Por qué elegir un endoscopista certificado?",
}: ComparisonTableProps) {
  return (
    <section
      id="comparacion"
      className={`scroll-mt-24 ${background === "muted" ? "bg-muted" : "bg-background"}`}
    >
      <div className="container-page section-padding">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
            {heading}
          </h2>

          {/* Desktop: 3-column comparison table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 pr-4 font-medium text-muted-foreground" />
                  <th className="text-center py-4 px-4 font-semibold text-muted-foreground">
                    Laboratorio de bajo costo
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-muted-foreground">
                    Hospital general
                  </th>
                  <th className="text-center py-4 px-4 font-bold text-text-accent border-2 border-accent/20 rounded-t-xl bg-accent-light">
                    {CLINIC.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.label} className={i < comparisonRows.length - 1 ? "border-b border-border" : ""}>
                    <td className="py-4 pr-4 font-medium text-foreground">
                      {row.label}
                    </td>
                    <td className="py-4 px-4 text-center text-muted-foreground">
                      {row.lab}
                    </td>
                    <td className="py-4 px-4 text-center text-muted-foreground">
                      {row.hospital}
                    </td>
                    <td className="py-4 px-4 text-center font-semibold text-foreground border-x-2 border-accent/20 bg-accent-light last:border-b-2 last:rounded-b-xl">
                      {row.us}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: stacked cards */}
          <div className="md:hidden space-y-4">
            {comparisonRows.map((row) => (
              <div key={row.label} className="bg-card border border-border rounded-xl p-6 space-y-4">
                <p className="font-semibold text-foreground">{row.label}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lab. bajo costo</span>
                    <span className="text-muted-foreground">{row.lab}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hospital general</span>
                    <span className="text-muted-foreground">{row.hospital}</span>
                  </div>
                  <div className="flex justify-between bg-accent-light rounded-lg px-4 py-2 -mx-2">
                    <span className="font-semibold text-text-accent">{CLINIC.name}</span>
                    <span className="font-semibold text-foreground">{row.us}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
