import { metaFor } from "@/lib/routes-seo"
import { PRICING, displayFrom, mxn, ADDITIONAL_FEES, MARKET_BENCHMARKS } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Link from "next/link"
import {
  CheckCircle2,
  Microscope,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"
import AppointmentForm from "@/components/AppointmentForm"
import ComparisonTable from "@/components/ComparisonTable"

export const revalidate = 86400
export const metadata: import("next").Metadata = {
  ...metaFor("endoscopia"),
  other: {
    "geo.region": "MX-YUC",
    "geo.placename": "Mérida",
    "geo.position": `${CLINIC.geo.lat};${CLINIC.geo.lng}`,
    ICBM: `${CLINIC.geo.lat}, ${CLINIC.geo.lng}`,
  },
}

/* ── Data for DRY rendering ────────────────────────────────────────────── */
const trustChips = [
  "Sedación consciente",
  "Olympus 190 HD",
  "Resultados inmediatos",
  "Reporte con fotos",
]

const includedItems = [
  "Consulta pre-endoscopia",
  "Sedación con anestesiólogo",
  "Endoscopia Olympus 190 HD",
  "Fotos HD de hallazgos",
  "Reporte escrito mismo día",
]

const saludDignaDifferentiators = [
  "Endoscopista certificado por el Consejo Mexicano de Cirugía General — no técnico de laboratorio",
  "Sedación administrada por anestesiólogo certificado (no solo sedación local)",
  "Biopsias sin límite incluidas en el precio",
  "Equipo Olympus HD de última generación",
  "Hospital con sala de recuperación (no clínica ambulatoria)",
  "Reporte digital con fotos el mismo día",
]

export default function EndoscopiaPage() {
  const endoBase = PRICING.endoscopia.from ?? 0
  const consultaFee = ADDITIONAL_FEES.consultation.amount
  const biopsyFee = ADDITIONAL_FEES.biopsy.amount

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1: HERO — bg-background
          Serves: ALL personas. Price chip + WhatsApp CTA above fold (mobile).
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

            {/* ── Left: Content ── */}
            <div className="flex-1 space-y-6">
              <h1 className="font-serif font-extrabold tracking-tight text-foreground text-3xl sm:text-4xl lg:text-5xl">
                Endoscopia en Mérida — {displayFrom("endoscopia")}
              </h1>

              <p className="text-xl font-semibold text-text-accent">
                {displayFrom("endoscopia")} · Sedación incluida · Resultados el mismo día
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Diagnóstico directo de gastritis, úlceras, reflujo y
                H.&nbsp;pylori en 15–25 minutos. Cámara HD Olympus ve tu
                estómago en tiempo real — sin adivinar.
              </p>

              {/* Trust chips — hidden on mobile to keep CTA above fold */}
              <div className="hidden md:flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                {trustChips.map((chip) => (
                  <div key={chip} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>{chip}</span>
                  </div>
                ))}
              </div>

              {/* CTAs — WhatsApp FIRST per spec */}
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  service="endoscopia"
                  position="hero"
                  procedureName="Endoscopia"
                  label="Agendar por WhatsApp"
                  className="sm:px-8"
                />
                <CallButton service="endoscopia" position="hero" />
              </div>

              {/* Location signal — Persona 1 (local seeker) + NAP for SEO */}
              <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span>{CLINIC.address.display}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary shrink-0" />
                  <span>{CLINIC.hours.display}</span>
                </div>
              </div>
            </div>

            {/* ── Right: Price card — Persona 2 (price shopper) ── */}
            <div className="w-full lg:max-w-sm">
              <div className="border-2 border-accent bg-accent/5 rounded-2xl p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <Microscope className="h-8 w-8 text-accent" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {DOCTOR.name}
                  </p>
                  <p className="font-serif font-bold text-text-accent text-3xl">
                    {displayFrom("endoscopia")}
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-serif font-bold text-foreground text-center">
                    ¿Qué incluye el precio?
                  </h3>
                  {includedItems.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground/80">
                      Biopsia {mxn(ADDITIONAL_FEES.biopsy.amount)} si necesaria
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-center text-sm text-accent font-medium">
                  ✓ Mismo equipo que hospitales privados
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2: PRICING (promoted) — bg-muted
          Serves: Persona 2 (price shopper) — highest-value persona.
          Includes Salud Digna comparison (folded from removed Disambiguation §).
          ══════════════════════════════════════════════════════════════════ */}
      <section id="precio" className="scroll-mt-24 bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                Precio de endoscopia en Mérida: {displayFrom("endoscopia")} todo incluido
              </h2>
              <p className="text-muted-foreground">
                ¿Cuánto cuesta una endoscopia? Mismo equipo que hospitales
                privados — precio justo, todo incluido
              </p>
            </div>

            {/* 4-column market comparison — benchmarks sourced from lib/pricing.ts */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <div className="p-6 rounded-2xl border border-border bg-background text-center">
                <p className="text-lg font-bold text-muted-foreground mb-2">
                  {MARKET_BENCHMARKS.endoscopia.hospitalMayor.label}
                </p>
                <p className="text-2xl font-bold text-muted-foreground">
                  Desde {mxn(MARKET_BENCHMARKS.endoscopia.hospitalMayor.from)}
                </p>
                <p className="text-sm text-muted-foreground/70 mt-2">
                  Hospitales privados de mayor tamaño en Mérida
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-background text-center">
                <p className="text-lg font-bold text-muted-foreground mb-2">
                  {MARKET_BENCHMARKS.endoscopia.hospitalPrivado.label}
                </p>
                <p className="text-2xl font-bold text-muted-foreground">
                  Desde {mxn(MARKET_BENCHMARKS.endoscopia.hospitalPrivado.from)}
                </p>
                <p className="text-sm text-muted-foreground/70 mt-2">
                  + anestesia, + patología, + estudios facturados por separado
                </p>
              </div>

              <div className="p-6 rounded-2xl border-2 border-accent bg-accent/5 text-center">
                <p className="text-lg font-bold text-text-accent mb-2">
                  {DOCTOR.name}
                </p>
                <p className="font-serif font-bold text-text-accent text-3xl">
                  {displayFrom("endoscopia")}
                </p>
                <p className="text-sm text-accent/80 mt-2">Sin cargos ocultos</p>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-background text-center">
                <p className="text-lg font-bold text-muted-foreground mb-2">
                  IMSS / Sector público
                </p>
                <p className="text-2xl font-bold text-muted-foreground">
                  Sin costo directo
                </p>
                <p className="text-sm text-muted-foreground/70 mt-2">
                  Lista de espera: 3–6 meses
                </p>
              </div>
            </div>

            {/* Totales típicos por escenario — worked examples for price-intent */}
            <div className="bg-card border border-border rounded-xl p-6 max-w-3xl mx-auto">
              <p className="font-semibold text-foreground mb-4">
                Totales típicos por escenario
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-border pb-4">
                  <span className="text-sm text-foreground/80">Endoscopia base</span>
                  <span className="font-semibold text-text-accent">
                    {mxn(endoBase)}
                  </span>
                </div>
                <div className="flex justify-between items-baseline border-b border-border pb-4">
                  <span className="text-sm text-foreground/80">
                    Base + consulta de valoración
                  </span>
                  <span className="font-semibold text-text-accent">
                    {mxn(endoBase + consultaFee)}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-foreground/80">
                    Base + consulta + patología (si hay biopsias)
                  </span>
                  <span className="font-semibold text-text-accent">
                    {mxn(endoBase + consultaFee + biopsyFee)}
                  </span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                El {DOCTOR.name} te confirma el total exacto antes del
                procedimiento. Sin sorpresas.
              </p>
            </div>

            {/* Salud Digna / Chopo comparison note (consolidated from removed Disambiguation §) */}
            <div className="rounded-xl bg-background border border-border p-6 max-w-4xl mx-auto">
              <h3 className="font-serif font-semibold text-foreground mb-2">
                ¿Hacen endoscopia en Salud Digna o Chopo?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                No. Salud Digna y Chopo son laboratorios de análisis clínicos —
                no cuentan con endoscopios, quirófano ni anestesiólogo para
                realizar endoscopias. Si tu médico te indicó una endoscopia,
                necesitas un endoscopista certificado con quirófano equipado
                como{" "}
                {CLINIC.address.streetAddress.split(",")[0].trim()}. Lo que
                incluye tu endoscopia con nosotros:
              </p>
              <ul className="space-y-2">
                {saludDignaDifferentiators.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's included */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-serif font-bold text-foreground mb-6 text-center">
                ¿Qué incluye el costo de tu endoscopia?
              </h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[...includedItems, `Biopsia ${mxn(ADDITIONAL_FEES.biopsy.amount)} si necesaria`].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/precios"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
              >
                Ver todos los precios y procedimientos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2C: CERTIFIED-ENDOSCOPIST COMPARISON — bg-background
          Anchor target for /endoscopia-merida#comparacion. Shared component
          with /precios so the trust/value story stays identical everywhere.
          ══════════════════════════════════════════════════════════════════ */}
      <ComparisonTable background="background" />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2B: APPOINTMENT FORM (on-page booking) — bg-accent-light
          Placed right after pricing — price-shopper intent peak. The teal
          tint reads as a distinct conversion moment between the muted pricing
          section and the white section that follows. Additional path; the
          existing hero WhatsApp/phone CTAs are unchanged.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-accent-light">
        <div className="container-page section-padding">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              Agenda tu endoscopia en línea
            </h2>
            <p className="mt-2 text-muted-foreground">
              ¿Prefieres no escribir por WhatsApp? Déjanos tus datos y te
              contactamos para confirmar tu cita.
            </p>
          </div>
          <div className="mt-8">
            <AppointmentForm procedure="endoscopia" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3: WHAT IS + PANENDOSCOPIA DISAMBIGUATION — bg-background
          Serves: Persona 3 (procedure seeker) + Persona 5 (investigator)
          Panendoscopia disambiguation folded in (also captures EGD/gastroscopia terms).
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Qué es una endoscopia?
            </h2>

            <p className="text-foreground/80 leading-relaxed max-w-3xl">
              Cámara flexible HD que entra por la boca y muestra en tiempo real
              tu esófago, estómago y duodeno. Detecta gastritis, úlceras,
              reflujo, H.&nbsp;pylori y cáncer gástrico — y toma biopsias en
              el mismo procedimiento. 15–25 minutos bajo sedación consciente.
              Sin dolor.
            </p>

            <p className="text-sm text-muted-foreground max-w-3xl">
              A diferencia de radiografías, ultrasonido o tomografía, la
              endoscopia ve directamente la mucosa digestiva — no adivina.
            </p>

            <div className="mt-8 max-w-3xl">
              <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                ¿Panendoscopia, gastroscopia o EGD? Es el mismo procedimiento
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Panendoscopia, gastroscopia y EGD (esofagogastroduodenoscopia)
                son nombres distintos para este mismo estudio: una revisión de
                esófago, estómago y duodeno con cámara flexible bajo sedación.
                Mismo equipo, mismo precio ({displayFrom("endoscopia")}),
                mismo doctor — sin importar cómo lo solicites. Para estudios
                especializados de vías biliares y páncreas, el {DOCTOR.name}{" "}
                también realiza{" "}
                <Link
                  href="/cpre-merida"
                  className="text-primary hover:underline"
                >
                  CPRE en {DOCTOR.worksFor.hospital}
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4: QUÉ DETECTA + VS OTROS ESTUDIOS — bg-muted
          Merged from former §2B (Diagnósticos Comunes) + §2C (vs Other Studies).
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                ¿Qué encuentra la endoscopia? Diagnósticos comunes
              </h2>
              <p className="text-foreground/80 leading-relaxed max-w-3xl">
                La endoscopia permite ver directamente la mucosa de esófago,
                estómago y duodeno — no adivina como una radiografía o
                ultrasonido. Estos son los diagnósticos más frecuentes:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  Gastritis y H.&nbsp;pylori
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  La endoscopia detecta gastritis por Helicobacter pylori
                  (la causa más común de úlceras), gastritis por medicamentos
                  (como antiinflamatorios) y gastritis por estrés. Si llevas
                  meses tomando antiácidos sin mejoría, la endoscopia encuentra
                  la causa real en 15&nbsp;minutos.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  Úlceras gástricas y duodenales
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Vemos directamente la úlcera — su tamaño, profundidad y
                  riesgo de sangrado. A diferencia de estudios indirectos, la
                  endoscopia permite tomar biopsias en el momento para descartar
                  malignidad y detectar H.&nbsp;pylori.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  Reflujo y esofagitis
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  ¿Años tomando omeprazol sin mejoría? La endoscopia evalúa
                  el daño real del esófago: esofagitis (grados A a D), esófago
                  de Barrett (condición precancerosa que requiere vigilancia),
                  hernia hiatal y gastritis por reflujo biliar. El grado de daño
                  determina el tratamiento específico.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  Cáncer gástrico — detección temprana
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Muchas veces parece gastritis común. La endoscopia con
                  equipo Olympus HD detecta lesiones sospechosas en etapa
                  temprana — cuando el cáncer aún es curable. Se toman biopsias
                  inmediatas para diagnóstico definitivo.
                </p>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight">
                ¿Por qué endoscopia y no radiografía o ultrasonido?
              </h3>
              <p className="text-foreground/80 leading-relaxed max-w-3xl">
                Si tu médico te indicó una endoscopia, es porque otros estudios
                no pueden ver directamente la mucosa del estómago. Esta es la
                diferencia:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  Radiografía
                </h3>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  Solo detecta perforaciones grandes. No ve gastritis, úlceras
                  superficiales ni lesiones tempranas.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  Ultrasonido
                </h3>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  Ve vesícula y órganos sólidos, pero no ve el interior del
                  estómago ni del esófago. No detecta úlceras ni gastritis.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  Tomografía
                </h3>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  Evalúa órganos sólidos y estructuras externas. No ve la
                  mucosa digestiva ni permite tomar biopsias.
                </p>
              </div>

              <div className="rounded-xl border-2 border-accent bg-accent/5 p-6">
                <h3 className="font-serif font-semibold text-lg text-text-accent mb-4">
                  Endoscopia
                </h3>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  Ve directamente la mucosa en tiempo real. Detecta, biopsia
                  y trata en la misma sesión. Diagnóstico preciso en
                  15–25&nbsp;minutos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5: PREPARATION / PROCESS — bg-background
          Serves: Persona 5 (investigator — "preparación para endoscopia")
          Includes Hospital Amerimed safety closer folded from removed Sedation §.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Cómo prepararte para tu endoscopia?
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-4">
                  Antes
                </h3>
                <ul className="space-y-2 text-sm text-foreground/80 text-left list-disc list-inside">
                  <li>Ayuno de 8 horas</li>
                  <li>Llegar acompañado(a)</li>
                  <li>Ropa cómoda</li>
                  <li>No suspender medicamentos sin indicación</li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-4">
                  Durante el procedimiento
                </h3>
                <ul className="space-y-2 text-sm text-foreground/80 text-left list-disc list-inside">
                  <li>Sedación consciente — no hay dolor</li>
                  <li>Endoscopio por boca — 15–25 minutos</li>
                  <li>Fotos HD de hallazgos en tiempo real</li>
                  <li>Biopsias si son necesarias</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-4">
                  Después
                </h3>
                <ul className="space-y-2 text-sm text-foreground/80 text-left list-disc list-inside">
                  <li>Recuperación 30–45 minutos en clínica</li>
                  <li>Resultados con fotos el mismo día</li>
                  <li>Reporte completo entregado</li>
                  <li>Seguimiento por WhatsApp para dudas</li>
                  <li>Si biopsia: patología en 5–10 días</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-accent/10 border border-accent/20">
                <Clock className="h-4 w-4 text-accent" />
                <span className="font-semibold text-foreground">
                  Duración total:
                </span>
                <span className="text-muted-foreground">
                  15–25 min procedimiento + 30–45 min recuperación
                </span>
              </div>
            </div>

            {/* Fear-based reassurance — targets "duele la endoscopia" + "es peligrosa la endoscopia" */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-muted p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  ¿Duele la endoscopia?
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  No. Se realiza con sedación consciente administrada por un
                  anestesiólogo certificado. No sentirás dolor ni molestia. La
                  mayoría de pacientes despiertan sin recordar nada del
                  procedimiento. Después puedes tener leve molestia en la
                  garganta que desaparece en pocas horas.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-muted p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  ¿Es peligrosa la endoscopia?
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Es uno de los procedimientos más seguros en gastroenterología.
                  La tasa de complicaciones serias es menor al 0.1%. El{" "}
                  {DOCTOR.name} realiza endoscopias diariamente en{" "}
                  {DOCTOR.worksFor.hospital} con monitoreo continuo por
                  anestesiólogo certificado. Las complicaciones raras incluyen
                  reacción leve a sedación o sangrado menor tras biopsia.
                </p>
              </div>
            </div>

            {/* Results timeline */}
            <div className="rounded-xl bg-muted border border-border p-6">
              <h3 className="font-serif font-semibold text-foreground mb-4">
                ¿Cuándo recibo los resultados?
              </h3>
              <div className="grid gap-4 md:grid-cols-2 text-sm text-foreground/80">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Mismo día:</strong> Reporte con fotos HD de hallazgos</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">5–10 días:</strong> Resultado de patología (si hubo biopsias)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Seguimiento:</strong> Por WhatsApp para dudas post-procedimiento</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Consulta de control:</strong> Según hallazgos — el doctor te indica</span>
                </div>
              </div>
              <p className="text-sm text-foreground/80 mt-4">
                Si se detectan lesiones que requieren tratamiento (como esófago de Barrett con displasia o angiodisplasias), contamos con equipo ERBE propio para realizar{" "}
                <Link href="/apc-coagulacion-plasma-argon-merida" className="text-primary hover:underline">coagulación con plasma de argón (APC)</Link>
                {" "}sin necesidad de referirte a otro especialista.
              </p>
            </div>

            {/* Hospital Amerimed safety closer — folded from removed Sedation & Safety § */}
            <div className="rounded-xl bg-accent-light border border-accent/20 p-6">
              <p className="text-foreground/80 leading-relaxed">
                Todas las endoscopias se realizan en{" "}
                {DOCTOR.worksFor.hospital} con protocolo completo de seguridad:
                anestesiólogo dedicado al monitoreo continuo de signos vitales,
                sala de recuperación con personal capacitado, y respaldo
                hospitalario inmediato ante cualquier eventualidad. Es lo que
                marca la diferencia entre una endoscopia en un consultorio
                aislado y una endoscopia en un centro hospitalario completo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6: GOOGLE REVIEWS
          Component wraps itself in <section> (gradient muted → background).
          ══════════════════════════════════════════════════════════════════ */}
      <GoogleReviews />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7: FAQ — bg-muted
          Component injects faqSchema() JSON-LD automatically.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <Faq routeKey="endoscopia" service="endoscopia" />
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 8: BOTTOM CTA — bg-primary
          Final conversion. Related procedures folded as inline link line.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-primary">
        <div className="container-page section-padding">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
                ¿Listo para agendar tu endoscopia?
              </h2>
              <p className="text-white/80 mt-2">
                Consulta de valoración con el {DOCTOR.name} — evalúa si la
                endoscopia es necesaria para tu caso.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                service="endoscopia"
                position="bottom-cta"
                procedureName="Endoscopia"
                label="Agendar por WhatsApp"
                className="sm:px-10"
              />
              <CallButton
                service="endoscopia"
                position="bottom-cta"
                variant="inverse"
              />
            </div>

            <p className="text-sm text-white/70">
              ¿Necesitas también{" "}
              <Link
                href="/colonoscopia-merida"
                className="underline hover:text-white"
              >
                colonoscopia
              </Link>{" "}
              o{" "}
              <Link href="/cpre-merida" className="underline hover:text-white">
                CPRE
              </Link>
              ? Pueden combinarse en la misma sesión de sedación.
            </p>

            <address className="not-italic text-sm text-white/60">
              {CLINIC.name} · {CLINIC.phone.display} ·{" "}
              {CLINIC.address.display}
            </address>
          </div>
        </div>
      </section>

      {/* ── JSON-LD Schema ─────────────────────────────────────────────────
          Placed at end of fragment so it doesn't push the H1 further down
          the byte stream. Google docs explicitly allow JSON-LD anywhere in
          the document; crawlers parse the full response.
          ──────────────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "Endoscopia (Esofagogastroduodenoscopia)",
              path: "/endoscopia-merida",
              pricingKey: "endoscopia",
              description:
                "Estudio endoscópico del esófago, estómago y duodeno con cámara HD Olympus. Diagnóstico directo de gastritis, úlceras, reflujo y H. pylori en 15–25 minutos bajo sedación consciente.",
              procedureType: "Diagnostic",
              bodyLocation: "Esófago, estómago, duodeno",
              howPerformed:
                "Endoscopio flexible Olympus 190 HD introducido por vía oral bajo sedación consciente. Duración: 15–25 minutos.",
              preparation:
                "Ayuno de 8 horas. Acudir acompañado. Ropa cómoda. No suspender medicamentos sin indicación médica.",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", path: "/" },
              { name: "Endoscopia en Mérida", path: "/endoscopia-merida" },
            ])
          ),
        }}
      />
    </>
  )
}
