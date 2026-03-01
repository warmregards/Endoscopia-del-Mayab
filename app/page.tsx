import Link from "next/link"
import Image from "next/image"
import { MapPin, Star, Clock, Check, ArrowRight, Shield, ChevronDown, ShieldCheck, AlertTriangle } from "lucide-react"
import { buildMeta } from "@/lib/seo"
import { PRICING, mxn, displayFrom, ADDITIONAL_FEES } from "@/lib/pricing"
import { SERVICES, servicesByCategory } from "@/lib/services"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import Faq from "@/components/Faq"
import WhatsAppButton from "@/components/WhatsAppButton"
import CallButton from "@/components/CallButton"
import StickyMobileCTA from "@/components/home/StickyMobileCTA"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400

export const metadata = buildMeta({
  title: `Endoscopia y Colonoscopia en Mérida | Desde ${mxn(PRICING.endoscopia.from)} | Endoscopia del Mayab`,
  description: `Endoscopia desde ${mxn(PRICING.endoscopia.from)} y colonoscopia desde ${mxn(PRICING.colonoscopia.from)} en Mérida, Yucatán. Precios transparentes, sedación incluida. Hospital Amerimed. Agenda directo con el Dr. Quiroz por WhatsApp.`,
  path: "/",
})

// ⚠️ These slugs must stay in sync with SERVICES in lib/services.ts.
// TODO: Derive from SERVICES using a homepage flag.
const coreProcedures = [
  {
    name: "Endoscopia",
    desc: "Evaluación del esófago, estómago y duodeno con sedación.",
    slug: "/endoscopia-merida",
    pricingKey: "endoscopia" as const,
  },
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

const diagnosticServices = servicesByCategory("diagnostic")
const therapeuticServices = servicesByCategory("therapeutic")
const advancedServices = servicesByCategory("advanced")

export default function Page() {
  return (
    <>
      {/* ── Section 1: Hero ── */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="trust-bar">
            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="h-4 w-4 fill-feedback-warning text-feedback-warning" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">
              {CLINIC.aggregateRating.ratingValue} ({CLINIC.aggregateRating.reviewCount} reseñas)
            </span>
            <span className="text-sm text-muted-foreground">·</span>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Lun–Dom 7am–9pm</span>
            </div>
          </div>

          <h1 className="font-serif font-extrabold tracking-tight text-foreground text-3xl md:text-4xl lg:text-5xl mb-4">
            Endoscopia y Colonoscopia en Mérida, Yucatán
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground mb-8 max-w-xl">
            Diagnóstico y tratamiento de enfermedades digestivas con el{" "}
            <Link href="/dr-omar-quiroz" className="text-primary font-semibold hover:underline">
              Dr. Omar Quiroz
            </Link>
          </p>

          <div
            id="pricing-anchor"
            className="flex flex-col gap-2 bg-accent-light rounded-2xl px-6 py-5 mb-8 shadow-sm w-fit"
          >
            <span className="font-serif font-bold text-text-accent text-3xl sm:text-4xl tracking-tight">
              {displayFrom("endoscopia")}
            </span>
            <span className="text-sm text-foreground/60 leading-snug">
              Anestesia y biopsias incluidas
            </span>
          </div>

          <p className="text-sm text-muted-foreground mb-8">
            Anestesia, biopsias y sala de recuperación incluidas en todos los procedimientos.{" "}
            <Link href="/precios" className="text-primary font-medium hover:underline">
              Ver todos los precios →
            </Link>
          </p>

          <div id="hero-ctas" className="flex flex-col sm:flex-row gap-4 mb-6">
            <WhatsAppButton
              service="homepage"
              position="hero"
              label="Agendar por WhatsApp"
              className="rounded-xl min-h-[48px] sm:px-8 w-full sm:w-auto"
            />
            <CallButton
              service="homepage"
              position="hero"
              variant="ghost"
              className="rounded-xl min-h-[44px] w-full sm:w-auto text-sm sm:text-base"
            />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary shrink-0" />
            <span>{CLINIC.address.streetAddress} — {CLINIC.address.neighborhood}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            A minutos de Cholul, Temozón Norte, Altabrisa, Francisco de Montejo y el Centro Histórico de Mérida.
          </p>
        </div>
      </section>

      {/* ── Section 2: Procedure Routing — 3 Core Cards ── */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif font-bold tracking-tight text-foreground text-2xl md:text-3xl mb-1">
            Procedimientos Principales
          </h2>
          <p className="text-muted-foreground mb-8">
            Precios transparentes — sin sorpresas, sin costos ocultos
          </p>

          <div className="grid gap-6 md:gap-4 md:grid-cols-3">
            {coreProcedures.map((proc, idx) => (
              <Link key={proc.name} href={proc.slug} className="group procedure-card">
                {idx === 0 && <span className="badge-popular">Más solicitado</span>}

                <h3 className="font-serif font-bold text-foreground text-lg mb-2">
                  {proc.name}
                </h3>
                <p className="font-serif font-bold text-text-accent text-xl mb-2">
                  {displayFrom(proc.pricingKey)}
                </p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {proc.desc}
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                  <span className="inline-flex items-center gap-1">
                    <Check className="h-3 w-3 text-accent" /> Anestesia
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Check className="h-3 w-3 text-accent" /> Biopsias
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Check className="h-3 w-3 text-accent" /> Recuperación
                  </span>
                </div>

                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Ver más <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Trust Strip — Dr. Quiroz ── */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="doctor-card">
            {/* Credential strip */}
            <div className="doctor-credential-bar">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {DOCTOR.credentials.slice(0, 3).map((cred, idx) => (
                  <span
                    key={cred}
                    className={`credential-chip ${idx === 2 ? "hidden sm:inline-flex" : ""}`}
                  >
                    <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    {cred}
                  </span>
                ))}
              </div>
            </div>

            {/* Main content */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-accent overflow-hidden shrink-0 mx-auto sm:mx-0">
                  <Image
                    src={DOCTOR.photos.headshot}
                    alt={DOCTOR.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h2 className="font-serif font-bold text-foreground text-xl mb-1">
                    {DOCTOR.name}
                  </h2>
                  <p className="text-primary font-medium text-sm mb-4">
                    Endoscopista Gastrointestinal Certificado
                  </p>
                  <p className="text-muted-foreground italic text-sm mb-4 max-w-md">
                    &ldquo;Cuando nos escribes, te contesta el doctor directamente.&rdquo;
                  </p>
                  <p className="text-foreground/80 text-sm mb-6 max-w-md leading-relaxed">
                    El único endoscopista certificado en Mérida con consultorio propio
                    en Hospital Amerimed — tu procedimiento lo realiza el mismo doctor
                    que te atiende por WhatsApp.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <WhatsAppButton
                      service="homepage"
                      position="doctor-trust"
                      label="Escribir al Dr. Quiroz"
                      className="text-sm px-4 py-2 rounded-lg"
                    />
                    <Link
                      href={DOCTOR.profileUrl}
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                    >
                      Ver perfil completo <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Biopsias differentiator callout ── */}
      <div className="bg-background">
        <div className="container-page py-6">
          <div className="bg-accent-light border border-accent/20 rounded-xl px-6 py-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/15 shrink-0">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground text-lg mb-2">
                    Biopsias ilimitadas — sin cargos extra por muestra
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                    La lectura de biopsias por el patólogo tiene un costo fijo de{" "}
                    <span className="font-semibold text-foreground">
                      {mxn(ADDITIONAL_FEES.biopsy.amount)}
                    </span>{" "}
                    por sesión, sin importar cuántas muestras se tomen. En otros consultorios cobran por cada biopsia individual.
                  </p>
                </div>
              </div>
              <Link
                href="/precios"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline shrink-0 ml-16 md:ml-0"
              >
                Ver todos los precios <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Google Reviews — Social Proof ── */}
      <GoogleReviews />

      {/* ── How It Works + Sedation Reassurance ── */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif font-bold tracking-tight text-foreground text-2xl md:text-3xl mb-8">
            ¿Cómo Funciona? Tu Primera Cita en 3 Pasos
          </h2>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            {[
              {
                n: 1,
                title: "Agenda",
                desc: `Escríbenos por WhatsApp. El ${DOCTOR.name} te responde personalmente y agenda tu cita.`,
              },
              {
                n: 2,
                title: "Procedimiento",
                desc: "Llegada, sedación segura, procedimiento ambulatorio. Resultados el mismo día.",
              },
              {
                n: 3,
                title: "Seguimiento",
                desc: "Reporte con fotos HD, seguimiento por WhatsApp, y orientación completa.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="p-6 rounded-xl border border-border bg-card text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {step.n}
                </div>
                <h3 className="font-serif font-semibold text-foreground text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-accent-light border border-accent/20 rounded-xl px-6 py-5">
            <h3 className="font-serif font-semibold text-foreground text-lg mb-2">
              Sedación Segura — No Sientes Nada
            </h3>
            <p className="text-foreground/80 text-sm leading-relaxed max-w-2xl">
              Todos nuestros procedimientos se realizan con sedación consciente y
              anestesiólogo certificado. Te duermes, se realiza el estudio, y
              despiertas sin recordar nada. Es ambulatorio — regresas a casa el
              mismo día.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 5: All Services Catalog ── */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="font-serif font-bold tracking-tight text-foreground text-2xl md:text-3xl mb-6">
            Todos los Servicios
          </h2>

          {/* Diagnóstico */}
          <h3 className="font-serif font-semibold text-foreground text-lg mb-4">Diagnóstico</h3>
          <div className="rounded-xl overflow-hidden border border-border shadow-sm mb-8">
            {diagnosticServices.map((svc, i) => (
              <Link
                key={svc.slug}
                href={`/${svc.slug}`}
                className={`service-row ${i > 0 ? "border-t border-border" : ""}`}
              >
                <span className="text-sm font-medium text-primary">{svc.displayName ?? svc.name}</span>
                <span className="text-sm font-medium text-text-accent whitespace-nowrap mt-1 sm:mt-0 sm:ml-4">
                  {svc.priceFrom ? `Desde ${mxn(svc.priceFrom)}` : <em className="text-muted-foreground not-italic">Cotización</em>}
                </span>
              </Link>
            ))}
          </div>

          {/* Terapéutico */}
          <h3 className="font-serif font-semibold text-foreground text-lg mb-4">Terapéutico</h3>
          <div className="rounded-xl overflow-hidden border border-border shadow-sm mb-2">
            {therapeuticServices.slice(0, 4).map((svc, i) => (
              <Link
                key={svc.slug}
                href={`/${svc.slug}`}
                className={`service-row ${i > 0 ? "border-t border-border" : ""}`}
              >
                <span className="text-sm font-medium text-primary">{svc.displayName ?? svc.name}</span>
                <span className="text-sm font-medium text-text-accent whitespace-nowrap mt-1 sm:mt-0 sm:ml-4">
                  {svc.priceFrom ? `Desde ${mxn(svc.priceFrom)}` : <em className="text-muted-foreground not-italic">Cotización</em>}
                </span>
              </Link>
            ))}
          </div>
          {therapeuticServices.length > 4 && (
            <details className="mb-8 group">
              <summary className="flex items-center gap-2 text-sm font-semibold text-primary cursor-pointer px-3 py-2 -ml-3 rounded-md hover:bg-muted transition-colors list-none [&::-webkit-details-marker]:hidden">
                Ver {therapeuticServices.length - 4} más
                <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="rounded-xl overflow-hidden border border-border shadow-sm mt-2">
                {therapeuticServices.slice(4).map((svc, i) => (
                  <Link
                    key={svc.slug}
                    href={`/${svc.slug}`}
                    className={`service-row ${i > 0 ? "border-t border-border" : ""}`}
                  >
                    <span className="text-sm font-medium text-primary">{svc.displayName ?? svc.name}</span>
                    <span className="text-sm font-medium text-text-accent whitespace-nowrap mt-1 sm:mt-0 sm:ml-4">
                      {svc.priceFrom ? `Desde ${mxn(svc.priceFrom)}` : <em className="text-muted-foreground not-italic">Cotización</em>}
                    </span>
                  </Link>
                ))}
              </div>
            </details>
          )}

          {/* Avanzado */}
          <details className="mb-8 group">
            <summary className="flex items-center gap-2 cursor-pointer list-none [&::-webkit-details-marker]:hidden mb-4">
              <h3 className="font-serif font-semibold text-foreground text-lg">Avanzado</h3>
              <span className="badge-quote">Cotización</span>
              <ChevronDown className="h-4 w-4 text-muted-foreground group-open:rotate-180 transition-transform" />
            </summary>
            <div className="rounded-xl overflow-hidden border border-border shadow-sm">
              {advancedServices.map((svc, i) => (
                <Link
                  key={svc.slug}
                  href={`/${svc.slug}`}
                  className={`service-row ${i > 0 ? "border-t border-border" : ""}`}
                >
                  <span className="text-sm font-medium text-primary">{svc.displayName ?? svc.name}</span>
                  <span className="text-sm text-muted-foreground whitespace-nowrap mt-1 sm:mt-0 sm:ml-4">Cotización →</span>
                </Link>
              ))}
            </div>
          </details>

          {/* Consultas */}
          <h3 className="font-serif font-semibold text-foreground text-lg mb-4">Consultas</h3>
          <div className="rounded-xl overflow-hidden border border-border shadow-sm mb-8">
            <Link href="/emergencias-digestivas-merida" className="service-row">
              <span className="text-sm font-medium text-primary">Emergencias Digestivas</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </Link>
            <Link href="/consultas-digestivas-merida" className="service-row border-t border-border">
              <span className="text-sm font-medium text-primary">Consultas Digestivas</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 6: FAQ ── */}
      <div className="bg-muted">
        <Faq routeKey="home" maxVisible={6} />
      </div>

      {/* ── Emergency Banner ── */}
      <section className="emergency-banner">
        <div className="container-page py-8 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <h2 className="emergency-heading">¿Emergencia digestiva?</h2>
            </div>
            <p className="emergency-text mb-2">
              Sangrado digestivo, cuerpos extraños, obstrucciones — atención los 7 días de la semana.
            </p>
            <p className="text-red-700/70 text-xs italic mb-6">
              El {DOCTOR.name.replace("Dr. ", "Dr.\u00A0")} responde personalmente
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                service="emergencia"
                position="emergency-banner"
                label="WhatsApp de emergencia"
                message="Hola Dr. Quiroz, tengo una emergencia digestiva y necesito atención urgente."
                className="rounded-xl min-h-[48px]"
              />
              <CallButton
                service="emergencia"
                position="emergency-banner"
                variant="ghost"
                label="Llamar ahora"
                className="border-red-300 text-red-700 hover:bg-red-100 rounded-xl min-h-[48px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Bottom CTA ── */}
      <section className="cta-section">
        <div className="container-page section-padding text-center">
          <h2 className="cta-heading">¿Listo para agendar?</h2>
          <p className="cta-subtext">El Dr. Quiroz te atiende personalmente.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <WhatsAppButton
              service="homepage"
              position="bottom"
              label="Agendar por WhatsApp"
              className="rounded-xl min-h-[48px] sm:px-10"
            />
            <CallButton
              service="homepage"
              position="bottom"
              variant="inverse"
              label="Llamar ahora"
              className="rounded-xl min-h-[48px]"
            />
          </div>

          <p className="text-text-inverse/70 text-sm">
            Hospital Amerimed, Mérida · Lun–Dom 7am–9pm
          </p>
        </div>
      </section>

      {/* Clearance for sticky mobile CTA bar */}
      <div className="h-16 sm:h-0" aria-hidden="true" />
      <StickyMobileCTA />
    </>
  )
}
