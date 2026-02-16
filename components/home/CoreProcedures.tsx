// components/home/CoreProcedures.tsx
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PRICING, mxn } from "@/lib/pricing"

const procedures = [
  {
    name: "Endoscopia",
    desc: "Diagnóstico del tracto digestivo superior",
    price: PRICING.endoscopia.from,
    url: "/endoscopia-merida",
    tag: "Más solicitado",
  },
  {
    name: "Colonoscopia",
    desc: "Prevención de cáncer colorrectal",
    price: PRICING.colonoscopia.from,
    url: "/colonoscopia-merida",
    tag: "Prevención",
  },
  {
    name: "CPRE",
    desc: "Desobstrucción de conductos biliares",
    price: PRICING.cpre.from,
    url: "/cpre-merida",
    tag: "Especializado",
  },
]

export default function CoreProcedures() {
  return (
    <section className="bg-surface-base">
      <div className="container-page section-padding">
        <h2 className="text-text-primary mb-1.5">
          Procedimientos Principales
        </h2>
        <p className="text-[length:var(--text-body)] text-text-secondary mb-6">
          Precios transparentes — sin sorpresas, sin costos ocultos
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {procedures.map(proc => (
            <Link
              key={proc.name}
              href={proc.url}
              className="block border border-border-default rounded-xl p-[var(--card-padding)] bg-surface-raised shadow-card hover:shadow-popover transition-shadow"
            >
              {proc.tag && (
                <span className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded mb-2.5 bg-action-primary/10 text-text-accent border border-action-primary/15">
                  {proc.tag}
                </span>
              )}
              <h3 className="text-text-primary mb-1.5">{proc.name}</h3>
              <p className="text-sm text-text-secondary mb-3 leading-snug">{proc.desc}</p>
              <div className="text-price text-text-accent mb-3">
                Desde {mxn(proc.price)}{" "}
                <span className="text-[13px] font-normal text-text-secondary">MXN</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-brand">
                Ver detalles <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
