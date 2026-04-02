import { metaFor } from "@/lib/routes-seo"
import { PRICING, displayFrom, mxn, ADDITIONAL_FEES } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Link from "next/link"
import Image from "next/image"
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

/* ── Related procedures for cross-sell (matches homepage card pattern) ──── */
const relatedProcedures = [
  {
    name: "Colonoscopia",
    desc: "Prevención y detección de cáncer colorrectal.",
    slug: "/colonoscopia-merida",
    pricingKey: "colonoscopia" as const,
  },
  {
    name: "CPRE",
    desc: "Tratamiento de conductos biliares y páncreas.",
    slug: "/cpre-merida",
    pricingKey: "cpre" as const,
  },
]

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

export default function EndoscopiaPage() {
  return (
    <>
      {/* ── JSON-LD Schema ─────────────────────────────────────────────── */}
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

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1: HERO — bg-background
          Serves: ALL personas. Price + CTA above fold.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

            {/* ── Left: Content ── */}
            <div className="flex-1 space-y-6">
              <h1 className="font-serif font-extrabold tracking-tight text-foreground text-3xl sm:text-4xl lg:text-5xl">
                Endoscopia en Mérida
              </h1>

              <p className="text-xl font-semibold text-text-accent">
                {displayFrom("endoscopia")} · Sedación incluida · Resultados el mismo día
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Diagnóstico directo de gastritis, úlceras, reflujo y
                H.&nbsp;pylori en 15–25 minutos. Cámara HD Olympus ve tu
                estómago en tiempo real — sin adivinar.
              </p>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
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
                    Todo incluido
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
          SECTION 2: WHAT IS ENDOSCOPY — bg-muted
          Serves: Persona 3 (procedure seeker) + Persona 5 (investigator)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
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

            <div className="mt-8">
              <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                ¿Qué detecta la endoscopia?
              </h3>
              <div className="grid gap-3 md:grid-cols-2 max-w-3xl">
                {[
                  "Gastritis y Helicobacter pylori",
                  "Úlceras gástricas y duodenales",
                  "Reflujo gastroesofágico (ERGE)",
                  "Hernia hiatal",
                  "Pólipos gástricos",
                  "Cáncer gástrico en etapa temprana",
                  "Várices esofágicas",
                  "Estenosis (estrechamiento) del esófago",
                ].map((condition) => (
                  <div key={condition} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{condition}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 max-w-3xl">
              <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                ¿Panendoscopia o endoscopia? Es el mismo procedimiento
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                &ldquo;Panendoscopia&rdquo; — también llamada gastroscopia —
                es simplemente el nombre médico formal de la endoscopia
                digestiva alta. Si tu médico te indicó una panendoscopia, es
                exactamente este estudio: una revisión de esófago, estómago y
                duodeno con cámara flexible bajo sedación. Mismo equipo, mismo
                precio, mismo doctor. Para estudios
                especializados de vías biliares y páncreas, el Dr. Quiroz
                también realiza{" "}
                <Link
                  href="/cpre-merida"
                  className="text-primary hover:underline"
                >
                  CPRE en Hospital Amerimed
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2B: COMMON DIAGNOSES — bg-background
          Restores condition-specific keywords: gastritis, H. pylori,
          úlcera, reflujo, esofagitis, Barrett, hernia hiatal, cáncer.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Qué Encuentra la Endoscopia? Diagnósticos Comunes
            </h2>

            <p className="text-foreground/80 leading-relaxed max-w-3xl">
              La endoscopia permite ver directamente la mucosa de esófago,
              estómago y duodeno — no adivina como una radiografía o
              ultrasonido. Estos son los diagnósticos más frecuentes:
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
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

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  Úlceras Gástricas y Duodenales
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Vemos directamente la úlcera — su tamaño, profundidad y
                  riesgo de sangrado. A diferencia de estudios indirectos, la
                  endoscopia permite tomar biopsias en el momento para descartar
                  malignidad y detectar H.&nbsp;pylori.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  Reflujo y Esofagitis
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  ¿Años tomando omeprazol sin mejoría? La endoscopia evalúa
                  el daño real del esófago: esofagitis (grados A a D), esófago
                  de Barrett (condición precancerosa que requiere vigilancia),
                  hernia hiatal y gastritis por reflujo biliar. El grado de daño
                  determina el tratamiento específico.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  Cáncer Gástrico — Detección Temprana
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Muchas veces parece gastritis común. La endoscopia con
                  equipo Olympus HD detecta lesiones sospechosas en etapa
                  temprana — cuando el cáncer aún es curable. Se toman biopsias
                  inmediatas para diagnóstico definitivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2C: ENDOSCOPIA VS OTHER STUDIES — bg-muted
          Answers "¿por qué endoscopia y no otro estudio?" with
          comparison cards. Restores: radiografía, ultrasonido, tomografía.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Por Qué Endoscopia y No Radiografía o Ultrasonido?
            </h2>

            <p className="text-foreground/80 leading-relaxed max-w-3xl">
              Si tu médico te indicó una endoscopia, es porque otros estudios
              no pueden ver directamente la mucosa del estómago. Esta es la
              diferencia:
            </p>

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
          SECTION 3: PRICING COMPARISON — bg-background
          Serves: Persona 2 (price shopper) — highest-value persona
          H2 targets "endoscopia precio merida" (1,052 impressions @ pos 24)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                Precio de endoscopia en Mérida — todo incluido
              </h2>
              <p className="text-muted-foreground">
                ¿Cuánto cuesta una endoscopia? Mismo equipo que hospitales
                privados — precio justo, todo incluido
              </p>
            </div>

            {/* Three-column comparison */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 rounded-2xl border border-border text-center">
                <p className="text-lg font-bold text-muted-foreground mb-2">
                  Hospitales Mérida
                </p>
                <p className="text-2xl font-bold text-muted-foreground line-through">
                  $8,000+ MXN
                </p>
                <p className="text-sm text-muted-foreground/70 mt-2">
                  + extras + estudios
                </p>
              </div>

              <div className="p-6 rounded-2xl border-2 border-accent bg-accent/5 text-center">
                <p className="text-lg font-bold text-text-accent mb-2">
                  {DOCTOR.name}
                </p>
                <p className="font-serif font-bold text-text-accent text-3xl">
                  {displayFrom("endoscopia")}
                </p>
                <p className="text-sm text-accent/80 mt-2">Todo incluido</p>
              </div>

              <div className="p-6 rounded-2xl border border-border text-center">
                <p className="text-lg font-bold text-muted-foreground mb-2">
                  IMSS
                </p>
                <p className="text-2xl font-bold text-muted-foreground">
                  &ldquo;Gratis&rdquo;
                </p>
                <p className="text-sm text-muted-foreground/70 mt-2">
                  3–6 meses espera
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-muted border border-border p-6 mt-8 max-w-4xl mx-auto">
              <h3 className="font-serif font-semibold text-foreground mb-2">
                ¿Hacen endoscopia en Salud Digna o Chopo?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No. Salud Digna y Chopo son laboratorios de análisis clínicos —
                no cuentan con endoscopios, quirófano ni anestesiólogo para
                realizar endoscopias. Para un procedimiento endoscópico necesitas
                un endoscopista certificado en un hospital equipado como{" "}
                {CLINIC.address.streetAddress.split(",")[0].trim()}.
              </p>
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
          SECTION 4: PREPARATION — bg-muted
          Serves: Persona 5 (investigator — "preparación para endoscopia")
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
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
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent/10 border border-accent/20">
                <Clock className="h-5 w-5 text-accent" />
                <span className="font-semibold text-foreground">
                  Duración total:
                </span>
                <span className="text-muted-foreground">
                  15–25 min procedimiento + 30–45 min recuperación
                </span>
              </div>
            </div>

            {/* Fear-based reassurance — targets "duele la endoscopia" + "es peligrosa la endoscopia" (P5 Investigator) */}
            <div className="grid gap-6 md:grid-cols-2 mt-12">
              <div className="rounded-xl border border-border bg-background p-6">
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

              <div className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  ¿Es peligrosa la endoscopia?
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Es uno de los procedimientos más seguros en gastroenterología.
                  La tasa de complicaciones serias es menor al 0.1%. El{" "}
                  {DOCTOR.name} realiza más de 500 endoscopias al año en Hospital
                  Amerimed con monitoreo continuo por anestesiólogo certificado.
                  Las complicaciones raras incluyen reacción leve a sedación o
                  sangrado menor tras biopsia.
                </p>
              </div>
            </div>

            {/* Results timeline */}
            <div className="rounded-xl bg-background border border-border p-6 mt-6">
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
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5: DR. QUIROZ CREDENTIALS — bg-background
          Serves: Persona 4 (referred patient) + trust for all
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 sm:items-center mb-8">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-accent overflow-hidden shrink-0 mx-auto sm:mx-0">
                <Image
                  src="/dr-omar-quiroz.webp"
                  alt={DOCTOR.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                  Tu endoscopista: {DOCTOR.name}
                </h2>
                <p className="text-primary font-medium text-sm mt-1">
                  Endoscopista Gastrointestinal Certificado
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { value: "500+", label: "Endoscopias anuales", color: "text-accent" },
                { value: "15+", label: "Años experiencia", color: "text-primary" },
                { value: "<0.1%", label: "Complicaciones", color: "text-accent" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl border border-border bg-muted"
                >
                  <p className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Credentials + Bio */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="font-serif font-semibold text-foreground">
                  Certificaciones
                </h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {DOCTOR.credentials.map((credential, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{credential}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif font-semibold text-foreground">
                  Experiencia
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {DOCTOR.bioShort}
                </p>
                <p className="text-sm text-accent font-medium">
                  ✓ Te contesta directamente el doctor — no una recepcionista
                </p>
                <Link
                  href={DOCTOR.profileUrl}
                  className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline"
                >
                  Ver perfil completo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6: GOOGLE REVIEWS — bg-muted
          Serves: All personas — social proof with real, verifiable reviews
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <GoogleReviews />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7: SEDATION & SAFETY — bg-background
          Crawlable H2 for "duele la endoscopia" + "es peligrosa la endoscopia"
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Duele la Endoscopia? Lo Que Debes Saber Sobre la Sedación
            </h2>

            <p className="text-foreground/80 leading-relaxed max-w-3xl">
              No duele. Utilizamos sedación intravenosa administrada por
              anestesiólogo certificado — no sentirás dolor ni reflejo de náusea. La
              mayoría de pacientes no recuerdan nada del procedimiento y despiertan
              cómodamente.
            </p>

            <p className="text-foreground/80 leading-relaxed max-w-3xl">
              El anestesiólogo monitorea tus signos vitales continuamente
              durante todo el estudio. Al despertar, puedes tener leve incomodidad en
              la garganta que desaparece en horas. La recuperación toma 30–60 minutos
              en la sala del hospital antes del alta.
            </p>

            <h3 className="font-serif font-semibold text-lg text-foreground">
              ¿Es Peligrosa la Endoscopia?
            </h3>

            <p className="text-foreground/80 leading-relaxed max-w-3xl">
              Es uno de los procedimientos más seguros en gastroenterología.
              Las complicaciones graves ocurren en menos del 0.1% de los casos. El{" "}
              {DOCTOR.name} realiza endoscopias diariamente con equipo Olympus HD y protocolo
              completo de seguridad en Hospital Amerimed, que cuenta con capacidad de
              respuesta inmediata ante cualquier eventualidad.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 8: DISAMBIGUATION — bg-muted
          Captures "panendoscopia" (301 redirect) + "endoscopia salud digna"
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              Endoscopia en Mérida: Preguntas Comunes
            </h2>

            <div className="space-y-6">
              <h3 className="font-serif font-semibold text-lg text-foreground">
                ¿Panendoscopia o Endoscopia? Es el Mismo Procedimiento
              </h3>

              <p className="text-foreground/80 leading-relaxed max-w-3xl">
                &ldquo;Panendoscopia&rdquo; es simplemente el nombre médico formal de la
                endoscopia digestiva alta (también llamada EGD). Los tres términos describen
                el mismo estudio: una revisión de esófago, estómago y duodeno con cámara
                flexible bajo sedación. En Endoscopia del Mayab, el precio es{" "}
                {displayFrom("endoscopia")} sin importar cómo lo solicites.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="font-serif font-semibold text-lg text-foreground">
                ¿Por Qué Elegir Endoscopia del Mayab vs. Salud Digna o Chopo?
              </h3>

              <p className="text-foreground/80 leading-relaxed max-w-3xl">
                Salud Digna y Chopo son laboratorios de análisis clínicos — no
                realizan endoscopias. Si tu médico te indicó una endoscopia, necesitas un
                endoscopista certificado con quirófano equipado. Esto es lo que incluye tu
                endoscopia con nosotros:
              </p>

              <ul className="space-y-2 max-w-3xl">
                {[
                  `Atención directa con el ${DOCTOR.name}, endoscopista certificado por el Consejo Mexicano de Cirugía General`,
                  "Sedación administrada por anestesiólogo certificado (no solo sedación local)",
                  "Biopsias sin límite incluidas en el precio",
                  "Equipo Olympus HD de última generación",
                  "Hospital Amerimed con sala de recuperación (no clínica ambulatoria)",
                  "Reporte digital con fotos el mismo día",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              <WhatsAppButton
                service="endoscopia"
                position="disambiguation"
                procedureName="Endoscopia"
                label="Agendar por WhatsApp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 9: FAQ — bg-background
          Serves: Persona 5 (investigator — fear/question queries)
          Generates FAQPage schema for rich results
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <Faq routeKey="endoscopia" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 8: RELATED PROCEDURES — bg-muted
          Cross-sell to colonoscopia, CPRE.
          Matches homepage card pattern — focused, not full catalog.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif font-bold tracking-tight text-foreground text-2xl md:text-3xl mb-2">
            Otros procedimientos
          </h2>
          <p className="text-muted-foreground mb-8">
            ¿Necesitas endoscopia y colonoscopia? Ambos estudios pueden
            realizarse en la misma sesión de sedación. Precios transparentes
            — sin sorpresas.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedProcedures.map((proc) => (
              <Link
                key={proc.slug}
                href={proc.slug}
                className="group flex flex-col p-6 rounded-2xl border border-border bg-background hover:shadow-md hover:border-accent/30 transition-all"
              >
                <h3 className="font-serif font-bold text-foreground text-lg mb-2">
                  {proc.name}
                </h3>
                <p className="font-serif font-bold text-text-accent text-xl mb-2">
                  {displayFrom(proc.pricingKey)}
                </p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                  {proc.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Ver detalles <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
            >
              Ver todos los servicios <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 9: BOTTOM CTA — bg-background
          Final conversion opportunity
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                ¿Listo para agendar tu endoscopia?
              </h2>
              <p className="text-lg text-muted-foreground">
                Consulta de valoración con {DOCTOR.name} — evalúa si la
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
              <CallButton service="endoscopia" position="bottom-cta" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-xl bg-muted border border-border">
                <p className="font-semibold text-foreground mb-1">
                  ¿Primera endoscopia?
                </p>
                <p className="text-sm text-muted-foreground">
                  Consulta de valoración {mxn(ADDITIONAL_FEES.consultation.amount)} — el único consultorio
                  de endoscopia en Mérida, Yucatán donde te atiende directamente el especialista.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-muted border border-border">
                <p className="font-semibold text-foreground mb-1">
                  Expatriados y zonas norte
                </p>
                <p className="text-sm text-muted-foreground">
                  Atención bilingüe. A minutos de Cholul, Temozón Norte y Country Club.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}