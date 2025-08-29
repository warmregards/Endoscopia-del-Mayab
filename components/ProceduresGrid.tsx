// components/ProceduresGrid.tsx
import Link from "next/link"
import { SERVICES, type ServiceItem } from "@/lib/services"
import { PRICING, mxn, type ServiceKey } from "@/lib/pricing"
import {
  Stethoscope, Microscope, ShieldCheck, Activity, Zap, Settings, ArrowRight,
} from "lucide-react"

// Map *slug or semantic key* to pricing key + icon
const ICON_MAP: Record<string, any> = {
  "endoscopia-merida": Microscope,
  "colonoscopia-merida": Stethoscope,
  "panendoscopia-merida": Activity,
  "cpre-merida": ShieldCheck,

  "ligadura-varices-esofagicas-merida": Zap,
  "gastrostomia-endoscopica-peg-merida": Settings,
  "extraccion-cuerpos-extranos-endoscopia-merida": Settings,
  "dilatacion-esofagica-merida": Activity,
  "esclerosis-varices-gastricas-merida": Zap,
  "dilatacion-biliar-merida": Activity,
  "dilatacion-colonica-merida": Activity,

  "endoprotesis-esofagicas-merida": Settings,
  "endoprotesis-biliares-merida": Settings,
  "endoprotesis-duodenales-merida": Settings,
  "endoprotesis-colonicas-merida": Settings,

  "cierre-fistulas-clips-endoscopicos-merida": ShieldCheck,
  "sutura-endoscopica-merida": ShieldCheck,
  "diseccion-endoscopica-submucosa-esd-merida": Microscope,
  "reseccion-endoscopica-mucosa-emr-merida": Microscope,
  "retiro-balon-gastrico-merida": Settings,
  "apc-coagulacion-plasma-argon-merida": Zap,
}

// Map slug -> PRICING key when available
const SLUG_TO_PRICING: Record<string, ServiceKey> = {
  "endoscopia-merida": "endoscopia",
  "colonoscopia-merida": "colonoscopia",
  "panendoscopia-merida": "panendoscopia",
  "cpre-merida": "cpre",

  "ligadura-varices-esofagicas-merida": "ligadura_varices",
  "gastrostomia-endoscopica-peg-merida": "gastrostomia_peg",
  "extraccion-cuerpos-extranos-endoscopia-merida": "extraccion_cuerpos_extranos",
  "dilatacion-esofagica-merida": "dilatacion_esofagica",
  "esclerosis-varices-gastricas-merida": "esclerosis_varices_gastricas",
  "dilatacion-biliar-merida": "dilatacion_biliar",
  "dilatacion-colonica-merida": "dilatacion_colonica",

  "endoprotesis-esofagicas-merida": "endoprotesis_esofagicas",
  "endoprotesis-biliares-merida": "endoprotesis_biliares",
  "endoprotesis-duodenales-merida": "endoprotesis_duodenales",
  "endoprotesis-colonicas-merida": "endoprotesis_colonicas",

  "cierre-fistulas-clips-endoscopicos-merida": "cierre_fistulas_clips",
  "sutura-endoscopica-merida": "sutura_endoscopica",
  "diseccion-endoscopica-submucosa-esd-merida": "esd",
  "reseccion-endoscopica-mucosa-emr-merida": "emr",
  "retiro-balon-gastrico-merida": "retiro_balon_gastrico",
  "apc-coagulacion-plasma-argon-merida": "apc",
}

// Category buckets by slug
const MAIN = new Set([
  "endoscopia-merida", "colonoscopia-merida", "panendoscopia-merida", "cpre-merida",
])
const STENTS = new Set([
  "endoprotesis-esofagicas-merida", "endoprotesis-biliares-merida",
  "endoprotesis-duodenales-merida", "endoprotesis-colonicas-merida",
])
const ADVANCED = new Set([
  "cierre-fistulas-clips-endoscopicos-merida", "sutura-endoscopica-merida",
  "diseccion-endoscopica-submucosa-esd-merida", // note: our slug is reseccion-endoscopica-mucosa-emr-merida
  "reseccion-endoscopica-mucosa-emr-merida", "retiro-balon-gastrico-merida", "apc-coagulacion-plasma-argon-merida",
])
const THERAPEUTIC = new Set([
  "ligadura-varices-esofagicas-merida", "gastrostomia-endoscopica-peg-merida",
  "extraccion-cuerpos-extranos-endoscopia-merida", "dilatacion-esofagica-merida",
  "esclerosis-varices-gastricas-merida", "dilatacion-biliar-merida", "dilatacion-colonica-merida",
])

function ProcedureCard({ s }: { s: ServiceItem }) {
  const Icon = ICON_MAP[s.slug] || Stethoscope
  const pricingKey = SLUG_TO_PRICING[s.slug]
  const pricing = pricingKey ? PRICING[pricingKey] : undefined
  const title = `${s.name} en Mérida`

  return (
    <Link
      href={`/${s.slug}`}
      className="group flex items-center gap-3 p-3 rounded-xl border border-border bg-background hover:border-accent-light hover:bg-muted/30 transition-all duration-200"
    >
      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-strong/10 transition-colors">
        <Icon className="h-4 w-4 text-primary group-hover:text-accent-strong transition-colors" />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold text-foreground group-hover:text-accent-strong transition-colors line-clamp-1">
          {title}
        </h3>
        {pricing?.from !== undefined && (
          <p className="text-xs text-foreground/60">{mxn(pricing.from)}</p>
        )}
      </div>

      <ArrowRight className="h-4 w-4 text-foreground/40 group-hover:text-accent-strong group-hover:translate-x-0.5 transition-all flex-shrink-0" />
    </Link>
  )
}

export default function ProceduresGrid() {
  // Partition from SERVICES
  const main = SERVICES.filter(s => MAIN.has(s.slug))
  const stents = SERVICES.filter(s => STENTS.has(s.slug))
  const advanced = SERVICES.filter(s => ADVANCED.has(s.slug))
  const therapeutic = SERVICES.filter(s => THERAPEUTIC.has(s.slug))

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Todos los Procedimientos</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Catálogo completo de procedimientos endoscópicos especializados
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Main Procedures */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold text-foreground flex items-center gap-2">
              <Microscope className="h-5 w-5 text-accent-strong" />
              Procedimientos Principales
            </h3>
            <div className="space-y-2">
              {main.map(s => <ProcedureCard key={s.slug} s={s} />)}
            </div>
          </div>

          {/* Stent Procedures */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold text-foreground flex items-center gap-2">
              <Settings className="h-5 w-5 text-accent-strong" />
              Endoprótesis (Stents)
            </h3>
            <div className="space-y-2">
              {stents.map(s => <ProcedureCard key={s.slug} s={s} />)}
            </div>
          </div>

          {/* Advanced Procedures */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold text-foreground flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-accent-strong" />
              Procedimientos Avanzados
            </h3>
            <div className="space-y-2">
              {advanced.map(s => <ProcedureCard key={s.slug} s={s} />)}
            </div>
          </div>

          {/* Therapeutic Procedures */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold text-foreground flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent-strong" />
              Procedimientos Terapéuticos
            </h3>
            <div className="space-y-2">
              {therapeutic.map(s => <ProcedureCard key={s.slug} s={s} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
