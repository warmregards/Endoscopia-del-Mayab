import { metaFor } from "@/lib/routes-seo"
import {
  PRICING,
  mxn,
  displayFrom,
  ADDITIONAL_FEES,
  INCLUDED_IN_PRICE,
} from "@/lib/pricing"
import { CLINIC, waHref } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import {
  servicesByCategory,
  pricedServices,
  quoteOnlyServices,
  SERVICES,
  type ServiceItem,
} from "@/lib/services"
import { breadcrumbSchema, pricingItemList } from "@/lib/schema"
import Link from "next/link"
import {
  CheckCircle2,
  X,
  ArrowRight,
  ArrowDown,
  MessageCircle,
  ShieldCheck,
  Stethoscope,
  Clock,
  Heart,
  Phone,
} from "lucide-react"
import Faq from "@/components/Faq"
import WhatsAppButton from "@/components/WhatsAppButton"
import CallButton from "@/components/CallButton"
import BiopsyDifferentiator from "@/components/BiopsyDifferentiator"
import ComparisonTable from "@/components/ComparisonTable"

export const revalidate = 86400
export const metadata = metaFor("precios")

/* ── Data ─────────────────────────────────────────────────────────────── */

const heroAnchors: { key: "endoscopia" | "colonoscopia" | "cpre"; label: string }[] = [
  { key: "endoscopia", label: "Endoscopia" },
  { key: "colonoscopia", label: "Colonoscopia" },
  { key: "cpre", label: "CPRE" },
]

const diagnosticServices = servicesByCategory("diagnostic")
const therapeuticServices = servicesByCategory("therapeutic")
const advancedServices = servicesByCategory("advanced")

const trustBadges = [
  "Sedación incluida",
  "Reporte el mismo día",
  "Hospital Amerimed Mérida",
]

/* Per-procedure anchored pricing cards — deep-link landing targets for the
   price-keyword ad groups (/precios#endoscopia, #colonoscopia, #cpre). */
type ProcedureDetail = {
  key: "endoscopia" | "colonoscopia" | "cpre"
  heading: string
  subhead: string
  included: string[]
  notIncluded: string
  differentiator: string
  waLabel: string
  waMessage: string
  /** Link text → the full procedure page (slug resolved from lib/services.ts). */
  pageLabel: string
}

const procedureDetails: ProcedureDetail[] = [
  {
    key: "endoscopia",
    heading: "¿Cuánto Cuesta una Endoscopia en Mérida?",
    subhead: `Precio de endoscopia en Mérida ${displayFrom(
      "endoscopia",
      "desde"
    )}. Estudio del esófago, estómago y duodeno bajo sedación.`,
    included: [
      "Sedación con anestesiólogo",
      "Toma de biopsias incluida — sin límite de muestras",
      "Sala de recuperación",
      "Valoración pre-procedimiento",
      "Reporte con fotografías HD el mismo día",
    ],
    notIncluded: `Si se toman biopsias, la interpretación del patólogo externo cuesta ${mxn(
      ADDITIONAL_FEES.biopsy.amount
    )} adicional — tarifa única, sin importar el número de muestras. Solo aplica cuando se requieren biopsias y se te informa antes del procedimiento.`,
    differentiator:
      "Costo de endoscopia transparente: reporte HD con fotografías el mismo día. Sin sorpresas ni cargos ocultos.",
    waLabel: "Cotizar Endoscopia",
    waMessage:
      "Hola Dr. Quiroz, me interesa una endoscopia. ¿Cuál es el costo y la disponibilidad?",
    pageLabel: "Ver toda la información de la endoscopia",
  },
  {
    key: "colonoscopia",
    heading: "¿Cuánto Cuesta una Colonoscopia en Mérida?",
    subhead: `Precio de colonoscopia en Mérida ${displayFrom(
      "colonoscopia",
      "desde"
    )}. Estudio completo del colon para detección y prevención.`,
    included: [
      "Sedación con anestesiólogo",
      "Toma de biopsias incluida — sin límite de muestras",
      "Extracción de pólipos pequeños en la misma sesión, sin costo adicional (pólipos grandes o lesiones que requieran intervención adicional se cotizan antes de cualquier cargo)",
      "Sala de recuperación",
      "Valoración pre-procedimiento",
      "Reporte con fotografías HD el mismo día",
    ],
    notIncluded: `La solución de preparación intestinal (laxante) se compra por separado en farmacia — el Dr. Quiroz te indica cuál adquirir y cómo tomarla al agendar. Si se toman biopsias, la interpretación del patólogo externo cuesta ${mxn(
      ADDITIONAL_FEES.biopsy.amount
    )} adicional — tarifa única, sin importar el número de muestras.`,
    differentiator:
      "Costo de colonoscopia transparente. Si se detectan pólipos pequeños, pueden extirparse en el mismo estudio — prevención de cáncer de colon sin una segunda cita.",
    waLabel: "Cotizar Colonoscopia",
    waMessage:
      "Hola Dr. Quiroz, me interesa una colonoscopia. ¿Cuál es el costo y la disponibilidad?",
    pageLabel: "Ver toda la información de la colonoscopia",
  },
  {
    key: "cpre",
    heading: "¿Cuánto Cuesta una CPRE en Mérida?",
    subhead: `Precio de CPRE en Mérida ${displayFrom(
      "cpre",
      "desde"
    )}. Tratamiento de cálculos y obstrucciones de la vía biliar.`,
    included: [
      "Sedación profunda con anestesiólogo",
      "Equipo endoscópico y fluoroscópico especializado",
      "Sala de recuperación",
      "Valoración pre-procedimiento",
      "Reporte del procedimiento el mismo día",
    ],
    notIncluded:
      "Las endoprótesis (stents biliares), cuando el caso las requiere, se cotizan por separado según el tipo y tamaño. El Dr. Quiroz te lo confirma en la valoración.",
    differentiator:
      "CPRE de alta complejidad sin salir de Mérida. El Dr. Quiroz te da una cotización exacta según tu caso, normalmente el mismo día.",
    waLabel: "Cotizar CPRE",
    waMessage:
      "Hola Dr. Quiroz, me interesa una CPRE. ¿Cuál es el costo y la disponibilidad?",
    pageLabel: "Ver toda la información de la CPRE",
  },
]

/* ══════════════════════════════════════════════════════════════════════ */

export default function PreciosPage() {
  return (
    <>
      {/* ── JSON-LD: Breadcrumb ─────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", path: "/" },
              { name: "Precios", path: "/precios" },
            ])
          ),
        }}
      />

      {/* ── JSON-LD: ItemList of per-procedure offers (deep-linked) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            pricingItemList([
              { name: "Endoscopia en Mérida", pricingKey: "endoscopia", anchor: "endoscopia" },
              { name: "Colonoscopia en Mérida", pricingKey: "colonoscopia", anchor: "colonoscopia" },
              { name: "CPRE en Mérida", pricingKey: "cpre", anchor: "cpre" },
            ])
          ),
        }}
      />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1: HERO — bg-background
          Price anchors for top-3 searched procedures.
          ══════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif font-extrabold tracking-tight text-foreground text-3xl md:text-4xl lg:text-5xl">
                Precio de Endoscopia, Colonoscopia y CPRE en Mérida, Yucatán
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Conoce el precio de endoscopia y el precio de colonoscopia en
                Mérida con cotizaciones transparentes — sedación, sala de
                recuperación y reporte el mismo día incluidos. Sin sorpresas
                ni costos ocultos.
              </p>
            </div>

            {/* Price anchor cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {heroAnchors.map((item) => (
                <Link
                  key={item.key}
                  href={`#${item.key}`}
                  className="group border border-border bg-card rounded-xl p-6 text-center hover:shadow-md hover:border-accent/30 transition-all"
                >
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    {item.label}
                  </p>
                  <p className="font-serif font-bold text-text-accent text-2xl md:text-3xl">
                    {displayFrom(item.key)}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                    Ver detalle
                    <ArrowDown className="h-4 w-4" />
                  </p>
                </Link>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 justify-center text-sm font-medium text-foreground/80">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <WhatsAppButton
                service="precios"
                position="hero"
                label="Agendar Cita"
                className="sm:px-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2: QUÉ INCLUYE — bg-muted
          Value differentiator for Persona 2.
          ══════════════════════════════════════════════════════════════ */}
      <section id="que-incluye" className="bg-muted scroll-mt-24">
        <div className="container-page section-padding">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Qué incluye el precio?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Included */}
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <h3 className="font-serif font-semibold text-foreground text-lg flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                  Incluido en el precio
                </h3>
                <ul className="space-y-4">
                  {INCLUDED_IN_PRICE.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not included */}
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <h3 className="font-serif font-semibold text-foreground text-lg flex items-center gap-2">
                  <X className="h-6 w-6 text-muted-foreground" />
                  Costos adicionales
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="flex-shrink-0 w-4 h-4 mt-0.5 text-muted-foreground">·</span>
                    <span>
                      <span className="font-semibold">Interpretación de biopsias:</span>{" "}
                      {mxn(ADDITIONAL_FEES.biopsy.amount)} tarifa única del patólogo
                      externo — sin importar el número de muestras. Solo aplica si
                      se toman biopsias.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="flex-shrink-0 w-4 h-4 mt-0.5 text-muted-foreground">·</span>
                    <span>
                      <span className="font-semibold">Preparación intestinal (colonoscopia):</span>{" "}
                      la solución laxante se adquiere por separado en farmacia
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="flex-shrink-0 w-4 h-4 mt-0.5 text-muted-foreground">·</span>
                    <span>
                      Procedimientos de fin de semana o festivos pueden tener
                      costo adicional
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Biopsy differentiator — two-layer "tarifa única" story */}
            <BiopsyDifferentiator
              headline="Biopsias: tarifa única en ambos lados, no por muestra."
              intro="Cuando se requieren biopsias, la mayoría de clínicas cobra por cada muestra — tanto por tomarla como por interpretarla. 3 biopsias = 3 cargos en ambos lados."
            />

            <p className="text-foreground/80 leading-relaxed">
              Si necesitas endoscopia y colonoscopia, ambos estudios pueden
              realizarse en la misma sesión de sedación — contáctanos por
              WhatsApp para cotización combinada.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3: PRICING — bg-background
          Anchored per-procedure cards (#endoscopia / #colonoscopia /
          #cpre — ad-routing landing targets), then the full category
          tables for all 22 services.
          ══════════════════════════════════════════════════════════════ */}
      <section id="pricing-anchor" className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Per-procedure anchored cards */}
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              Precios por procedimiento
            </h2>

            {procedureDetails.map((detail) => (
              <ProcedureAnchorCard key={detail.key} detail={detail} />
            ))}

            {/* Full category tables */}
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              Todos los precios
            </h2>

            {/* Group A: Diagnostic */}
            <div className="space-y-4">
              <h3 className="font-serif font-semibold text-foreground text-lg">
                Procedimientos Diagnósticos
              </h3>
              <div className="border border-border rounded-xl overflow-hidden bg-card">
                {diagnosticServices.map((s, i) => (
                  <ServiceRow key={s.slug} service={s} isLast={i === diagnosticServices.length - 1} />
                ))}
              </div>
            </div>

            {/* Group B: Therapeutic */}
            <div className="space-y-4">
              <h3 className="font-serif font-semibold text-foreground text-lg">
                Procedimientos Terapéuticos
              </h3>
              <div className="border border-border rounded-xl overflow-hidden bg-card">
                {therapeuticServices.map((s, i) => (
                  <ServiceRow key={s.slug} service={s} isLast={i === therapeuticServices.length - 1} />
                ))}
              </div>
            </div>

            {/* Group C: Advanced / Quote-only */}
            <div className="space-y-4">
              <h3 className="font-serif font-semibold text-foreground text-lg">
                Procedimientos Avanzados
              </h3>

              {/* Explainer callout */}
              <div className="bg-accent-light border border-accent/20 rounded-xl p-6 space-y-4">
                <p className="font-semibold text-foreground">
                  ¿Por qué la mayoría de estos procedimientos requieren cotización?
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Son procedimientos altamente especializados donde, en la mayoría
                  de los casos, el costo depende de su situación particular:
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold flex-shrink-0">·</span>
                    <span>
                      <span className="font-semibold">Equipo especializado:</span>{" "}
                      Algunos requieren dispositivos específicos cuyo costo varía
                      según el tipo y tamaño que su caso necesite.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold flex-shrink-0">·</span>
                    <span>
                      <span className="font-semibold">Complejidad variable:</span>{" "}
                      La duración, los materiales y el equipo médico necesario
                      cambian caso por caso.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold flex-shrink-0">·</span>
                    <span>
                      <span className="font-semibold">Honestidad en el precio:</span>{" "}
                      Preferimos darle un precio exacto después de evaluar su
                      situación, en lugar de publicar un rango tan amplio que no
                      le sirva para comparar.
                    </span>
                  </li>
                </ul>
                <p className="text-foreground/80 leading-relaxed">
                  Escríbanos por WhatsApp con su diagnóstico o indicación médica
                  y el {DOCTOR.name} le dará una cotización personalizada,
                  generalmente el mismo día.
                </p>
              </div>

              <div className="border border-border rounded-xl overflow-hidden bg-card">
                {advancedServices.map((s, i) => (
                  <ServiceRow key={s.slug} service={s} isLast={i === advancedServices.length - 1} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4: COMPETITIVE COMPARISON — bg-muted
          Implicit comparison (no competitor names).
          ══════════════════════════════════════════════════════════════ */}
      <ComparisonTable />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5: INSURANCE & PAYMENT — bg-background
          ══════════════════════════════════════════════════════════════ */}
      <section id="seguros" className="bg-background scroll-mt-24">
        <div className="container-page section-padding">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight">
              Seguros y Formas de Pago
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                  <h3 className="font-serif font-semibold text-foreground text-lg">
                    Seguros médicos
                  </h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Trabajamos con todas las aseguradoras principales. Contáctanos
                  por WhatsApp con los datos de tu póliza y te orientamos sobre
                  la cobertura de tu procedimiento.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-primary" />
                  <h3 className="font-serif font-semibold text-foreground text-lg">
                    Formas de pago
                  </h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  {CLINIC.paymentAccepted}. Pregunta por opciones de pago al
                  agendar tu cita.
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              ¿Dudas sobre tu cobertura?{" "}
              <a
                href={waHref({ text: "Hola Dr. Quiroz, tengo dudas sobre la cobertura de mi seguro para un procedimiento endoscópico." })}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Escríbenos por WhatsApp
              </a>{" "}
              y te orientamos.
            </p>
          </div>
        </div>
      </section>

      {/* ── Cost-concern reassurance ── */}
      <div className="bg-background">
        <div className="container-page py-6">
          <div className="bg-accent-light border border-accent/20 rounded-xl px-6 py-5 max-w-3xl">
            <h3 className="font-serif font-semibold text-foreground text-lg mb-2">
              ¿El Precio Puede Subir?
            </h3>
            <p className="text-foreground/80 text-sm leading-relaxed">
              El precio publicado incluye todo lo listado arriba. Si durante el
              procedimiento se detecta algo que requiera atención adicional, el{" "}
              {DOCTOR.name} te lo comunica antes de cualquier cargo extra.
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6: FAQ — bg-muted
          ══════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <Faq routeKey="precios" service="precios" />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 7: BOTTOM CTA — bg-primary
          ══════════════════════════════════════════════════════════════ */}
      <section className="bg-primary">
        <div className="container-page section-padding">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
                ¿Listo para agendar?
              </h2>
              <p className="text-white/80 mt-2">
                Escríbanos por WhatsApp para agendar su procedimiento o
                solicitar una cotización personalizada.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                service="precios"
                position="bottom-cta"
                label="Agendar por WhatsApp"
                className="sm:px-10"
              />
              <CallButton
                service="precios"
                position="bottom-cta"
                variant="inverse"
              />
            </div>

            <p className="text-white/60 text-sm">
              El {DOCTOR.name} le responde personalmente
            </p>

            <address className="not-italic text-sm text-white/60">
              {CLINIC.name} · {CLINIC.phone.display} ·{" "}
              {CLINIC.address.display}
            </address>
          </div>
        </div>
      </section>
    </>
  )
}

/* ── Procedure Anchor Card ────────────────────────────────────────────── */
/* Deep-link target for /precios#{key}. scroll-mt-24 (96px) clears the
   sticky 64px SiteHeader so the heading isn't hidden on landing. */

function ProcedureAnchorCard({ detail }: { detail: ProcedureDetail }) {
  // Resolve the procedure-page slug from the canonical services data — never
  // hardcode the path here.
  const service = SERVICES.find((s) => s.pricingKey === detail.key)

  return (
    <section
      id={detail.key}
      className="scroll-mt-24 bg-card border border-border rounded-xl p-6 md:p-8 space-y-6"
    >
      <div className="space-y-2">
        <h3 className="font-serif font-bold text-foreground text-xl md:text-2xl tracking-tight">
          {detail.heading}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {detail.subhead}
        </p>
      </div>

      {/* Price + procedure-specific WhatsApp CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-accent-light border border-accent/20 rounded-xl p-6">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Precio</p>
          <p className="font-serif font-extrabold text-text-accent text-3xl md:text-4xl">
            {displayFrom(detail.key)}
          </p>
        </div>
        <WhatsAppButton
          service={detail.key}
          position="precios-anchor"
          label={detail.waLabel}
          message={detail.waMessage}
          className="w-full sm:w-auto"
        />
      </div>

      {/* What's included — procedure-specific */}
      <div className="space-y-4">
        <p className="font-semibold text-foreground">¿Qué incluye?</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
          {detail.included.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-foreground/80 text-sm"
            >
              <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {detail.notIncluded}
        </p>
      </div>

      {/* One-line value differentiator */}
      <p className="text-sm font-semibold text-foreground border-l-2 border-accent pl-4 leading-relaxed">
        {detail.differentiator}
      </p>

      {/* Link through to the full procedure page */}
      {service && (
        <Link
          href={`/${service.slug}`}
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all hover:underline"
        >
          {detail.pageLabel} <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </section>
  )
}

/* ── Service Row Component ────────────────────────────────────────────── */

function ServiceRow({ service, isLast }: { service: ServiceItem; isLast: boolean }) {
  const price = service.quoteOnly
    ? null
    : displayFrom(service.pricingKey)

  const waText = service.quoteOnly
    ? `Hola Dr. Quiroz, me interesa solicitar una cotización para ${service.name}. ¿Cuál es la disponibilidad?`
    : undefined

  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 hover:bg-muted/50 transition-colors ${
        !isLast ? "border-b border-border" : ""
      }`}
    >
      <div className="mb-2 sm:mb-0">
        <Link
          href={`/${service.slug}`}
          className="font-medium text-foreground hover:text-primary hover:underline"
        >
          {PRICING[service.pricingKey].label}
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {price ? (
          <span className="font-semibold text-text-accent whitespace-nowrap">
            {price}
          </span>
        ) : (
          <a
            href={waHref({ text: waText })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-action-primary hover:underline"
          >
            <MessageCircle className="h-4 w-4" />
            Solicitar cotización
          </a>
        )}
        <Link
          href={`/${service.slug}`}
          className="text-sm text-primary hover:underline inline-flex items-center gap-1 whitespace-nowrap"
        >
          Ver más <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

