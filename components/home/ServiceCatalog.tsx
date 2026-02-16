"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ArrowRight } from "lucide-react"
import { mxn } from "@/lib/pricing"
import { servicesByCategory } from "@/lib/services"

const therapeuticProcedures = servicesByCategory("therapeutic")
const advancedProcedures = servicesByCategory("advanced")

export default function ServiceCatalog() {
  const [showAllTherapeutic, setShowAllTherapeutic] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)

  const visibleTherapeutic = showAllTherapeutic
    ? therapeuticProcedures
    : therapeuticProcedures.slice(0, 4)

  return (
    <section className="bg-surface-sunken">
      <div className="container-page section-padding-sm">
        <h2 className="text-text-primary mb-1.5">Todos los Servicios</h2>
        <p className="text-[length:var(--text-body)] text-text-secondary mb-6">
          22 procedimientos endoscópicos · Atención 7 días a la semana
        </p>

        {/* Therapeutic */}
        <h3 className="text-overline text-text-primary mb-3">
          Procedimientos Terapéuticos
        </h3>
        <div className="rounded-xl overflow-hidden border border-border-default shadow-card mb-3">
          {visibleTherapeutic.map((proc, i) => (
            <Link
              key={proc.slug}
              href={`/${proc.slug}`}
              className={`flex justify-between items-center px-[var(--card-padding)] py-4 bg-surface-raised hover:bg-surface-sunken transition-all ${i > 0 ? "border-t border-border-default" : ""}`}
            >
              <span className="text-sm font-medium text-text-primary">
                {proc.displayName ?? proc.name}
              </span>
              <span className="text-sm font-semibold text-text-accent whitespace-nowrap ml-3">
                Desde {mxn(proc.priceFrom)}
              </span>
            </Link>
          ))}
        </div>

        {!showAllTherapeutic && (
          <button
            onClick={() => setShowAllTherapeutic(true)}
            className="flex items-center gap-1.5 text-sm font-semibold text-text-brand hover:text-action-secondary px-3 py-2 -ml-3 rounded-md hover:bg-surface-sunken transition-colors mb-6"
            aria-expanded={showAllTherapeutic}
          >
            Ver {therapeuticProcedures.length - 4} más
            <ChevronDown className="h-4 w-4 stroke-[2.5]" />
          </button>
        )}

        {/* Advanced */}
        <div className="mt-6">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-2 mb-3"
            aria-expanded={showAdvanced}
          >
            <h3 className="text-overline text-text-primary">
              Procedimientos Avanzados
            </h3>
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 border border-amber-500/20">
              Cotización
            </span>
            <ChevronDown className={`h-4 w-4 text-text-secondary transition-transform ${showAdvanced ? "rotate-180" : ""}`} />
          </button>

          {showAdvanced && (
            <div className="rounded-xl overflow-hidden border border-border-default shadow-card">
              {advancedProcedures.map((proc, i) => (
                <Link
                  key={proc.slug}
                  href={`/${proc.slug}`}
                  className={`flex justify-between items-center px-[var(--card-padding)] py-4 bg-surface-raised hover:bg-surface-sunken transition-all ${i > 0 ? "border-t border-border-default" : ""}`}
                >
                  <span className="text-sm font-medium text-text-primary">
                    {proc.displayName ?? proc.name}
                  </span>
                  <span className="text-[13px] text-text-secondary whitespace-nowrap ml-3">
                    Cotización →
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Link to /precios */}
        <Link
          href="/precios"
          className="mt-8 flex items-center justify-between p-[var(--card-padding)] rounded-xl bg-action-primary/5 border-2 border-action-primary/20 hover:border-action-primary/40 hover:shadow-card-hover transition-all group"
        >
          <div>
            <div className="font-bold text-text-primary mb-1 group-hover:text-text-accent transition-colors">
              Ver todos los precios
            </div>
            <div className="text-sm text-text-secondary">
              Comparativa completa · Qué incluye cada procedimiento
            </div>
          </div>
          <ArrowRight className="h-5 w-5 text-action-primary shrink-0 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
