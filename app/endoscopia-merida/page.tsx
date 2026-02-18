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
    name: "Panendoscopia",
    desc: "Endoscopia + colonoscopia en una sola sedación.",
    slug: "/panendoscopia-merida",
    pricingKey: "panendoscopia" as const,
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
                Mismo equipo que hospitales privados — precio justo
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
                ¿Qué incluye tu endoscopia?
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
                  Gastroenterólogo y Endoscopista Certificado
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
          SECTION 7: FAQ — bg-background
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
          Cross-sell to colonoscopia, panendoscopia, CPRE.
          Matches homepage card pattern — focused, not full catalog.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif font-bold tracking-tight text-foreground text-2xl md:text-3xl mb-2">
            Otros procedimientos
          </h2>
          <p className="text-muted-foreground mb-8">
            Precios transparentes — sin sorpresas
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