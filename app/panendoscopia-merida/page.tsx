import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn, ADDITIONAL_FEES, INCLUDED_IN_PRICE } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ShieldCheck } from "lucide-react"
import Faq from "@/components/Faq"
import WhatsAppButton from "@/components/WhatsAppButton"
import CallButton from "@/components/CallButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400
export const metadata: import("next").Metadata = {
  ...metaFor("panendoscopia"),
  other: {
    "geo.region": "MX-YUC",
    "geo.placename": "Mérida",
    "geo.position": `${CLINIC.geo.lat};${CLINIC.geo.lng}`,
    ICBM: `${CLINIC.geo.lat}, ${CLINIC.geo.lng}`,
  },
}

export default function PanendoscopiaPage() {
  return (
    <>
      {/* JSON-LD: MedicalProcedure */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "Panendoscopia en Mérida",
              path: "/panendoscopia-merida",
              pricingKey: "panendoscopia",
              description:
                "Evaluación completa del tracto digestivo superior e inferior (endoscopia + colonoscopia) en una sola sesión con sedación.",
              procedureType: "Diagnostic",
              bodyLocation:
                "Tracto digestivo (esófago, estómago, duodeno, colon)",
              howPerformed:
                "Endoscopia alta seguida de colonoscopia bajo una sola sedación con equipo Olympus HD",
              preparation:
                "Ayuno 8-12 horas, preparación intestinal con polietilenglicol, suspender anticoagulantes según indicación médica",
            })
          ),
        }}
      />
      {/* JSON-LD: Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", path: "/" },
              { name: "Panendoscopia en Mérida", path: "/panendoscopia-merida" },
            ])
          ),
        }}
      />

      {/* ── SECTION 1: Hero ── bg-background ─────────────────────────────── */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Panendoscopia en Mérida
            </h1>

            <p className="text-xl font-semibold text-text-accent">
              Endoscopia + colonoscopia el mismo día — desde{" "}
              {mxn(PRICING.panendoscopia.from)}
            </p>

            <p className="text-base text-foreground/80 leading-relaxed">
              ¿Síntomas digestivos arriba y abajo? ¿Anemia sin causa clara? La
              panendoscopia evalúa todo tu sistema digestivo — esófago, estómago,
              duodeno y colon — en una sola cita con sedación en Hospital
              Amerimed, Mérida, Yucatán.
            </p>

            <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
              {[
                "Equipo Olympus HD",
                "Una sola sedación",
                "Resultados mismo día",
                "Hospital Amerimed",
              ].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-text-accent" />
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                service="panendoscopia"
                position="hero"
                procedureName="Panendoscopia"
                className="sm:px-8"
              />
              <CallButton
                service="panendoscopia"
                position="hero"
                variant="ghost"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Definition ── bg-muted ────────────────────────────── */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
            ¿Qué es la panendoscopia?
          </h2>

          <div className="max-w-3xl space-y-4 text-foreground/80">
            <p>
              La panendoscopia combina una{" "}
              <strong>endoscopia alta</strong> (esófago, estómago, duodeno) con
              una <strong>colonoscopia</strong> (colon completo) en una sola
              sesión bajo sedación.
            </p>

            <p className="font-medium text-foreground">
              Se indica cuando presentas:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Anemia sin causa clara</li>
              <li>Síntomas digestivos altos y bajos simultáneos</li>
              <li>Pérdida de peso inexplicable</li>
              <li>Seguimiento de lesiones previas en tracto digestivo</li>
              <li>Tamizaje completo en pacientes de riesgo</li>
            </ul>

            <p className="font-semibold text-text-accent">
              Una preparación, una sedación, diagnóstico completo — en lugar de
              dos citas separadas.
            </p>
          </div>

          <div className="mt-6 space-y-2 text-sm text-foreground/70">
            <p>
              ¿Solo síntomas de reflujo o gastritis?{" "}
              <Link
                href="/endoscopia-merida"
                className="underline hover:text-foreground"
              >
                Endoscopia en Mérida
              </Link>
            </p>
            <p>
              ¿Solo cambio en evacuaciones o sangrado?{" "}
              <Link
                href="/colonoscopia-merida"
                className="underline hover:text-foreground"
              >
                Colonoscopia en Mérida
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Pricing & Inclusions ── bg-background ─────────────── */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
            Precio de panendoscopia: {mxn(PRICING.panendoscopia.from)}
          </h2>

          {/* 3-column comparison */}
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            {/* Hospitals */}
            <div className="rounded-xl border border-border bg-muted p-6">
              <p className="text-xs font-medium text-foreground/60 uppercase tracking-wider mb-2">
                Hospitales en Mérida
              </p>
              <p className="text-2xl font-bold text-foreground/50 mb-2">
                Desde $15,000+
              </p>
              <p className="text-sm text-foreground/60">
                Dos citas separadas + extras
              </p>
            </div>

            {/* Dr. Quiroz */}
            <div className="rounded-xl border-2 border-accent bg-background p-6 shadow-sm">
              <p className="text-xs font-medium text-text-accent uppercase tracking-wider mb-2">
                {DOCTOR.name}
              </p>
              <p className="text-2xl font-bold text-text-accent mb-2">
                Desde {mxn(PRICING.panendoscopia.from)}
              </p>
              <p className="text-sm text-foreground/80">
                Todo incluido, una sola cita
              </p>
            </div>

            {/* Separate procedures */}
            <div className="rounded-xl border border-border bg-muted p-6">
              <p className="text-xs font-medium text-foreground/60 uppercase tracking-wider mb-2">
                Por separado
              </p>
              <p className="text-2xl font-bold text-foreground/50 mb-2">
                {mxn((PRICING.endoscopia.from ?? 0) + (PRICING.colonoscopia.from ?? 0))}
              </p>
              <p className="text-sm text-foreground/60">
                Dos preparaciones, dos sedaciones
              </p>
            </div>
          </div>

          <div className="max-w-2xl space-y-8">
            {/* What's included */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                Qué incluye
              </h3>
              <ul className="space-y-2">
                {INCLUDED_IN_PRICE.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-foreground/80"
                  >
                    <CheckCircle2 className="h-4 w-4 text-text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Biopsy differentiator */}
            <div className="rounded-xl bg-accent-light p-6 border border-accent/20">
              <p className="text-sm text-foreground/80">
                <strong className="text-foreground">
                  Biopsias incluidas sin límite
                </strong>{" "}
                — un solo costo sin importar cuántas se tomen. El análisis de
                patología tiene costo adicional (
                {mxn(ADDITIONAL_FEES.biopsy.amount)}).
              </p>
            </div>

            <Link
              href="/precios"
              className="inline-block text-sm font-medium text-primary underline hover:text-primary/80"
            >
              Ver todos los precios →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Preparation & Process ── bg-muted ─────────────────── */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
            Preparación y proceso — qué esperar
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-xl border border-border bg-background p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                1
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                Antes
              </h3>
              <ul className="space-y-2 text-sm text-foreground/80 text-left">
                <li>Ayuno 8-12 horas</li>
                <li>Preparación intestinal (polietilenglicol)</li>
                <li>Suspender anticoagulantes según indicación</li>
                <li>Llegar acompañado(a)</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="rounded-xl border border-border bg-background p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-bold text-lg">
                2
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                Durante
              </h3>
              <ul className="space-y-2 text-sm text-foreground/80 text-left">
                <li>Sedación consciente con anestesiólogo</li>
                <li>Endoscopia alta primero (~15-20 min)</li>
                <li>Colonoscopia después (~25-30 min)</li>
                <li>45-60 minutos total</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="rounded-xl border border-border bg-background p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                3
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                Después
              </h3>
              <ul className="space-y-2 text-sm text-foreground/80 text-left">
                <li>Recuperación 1-2 horas en sala</li>
                <li>Dos reportes con fotos HD</li>
                <li>Seguimiento por WhatsApp</li>
                <li>Retomar actividades al día siguiente</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Doctor Credentials ── bg-background ───────────────── */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
            Tu endoscopista: {DOCTOR.name}
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <Image
              src={DOCTOR.photos.headshot}
              alt={DOCTOR.name}
              width={280}
              height={350}
              className="rounded-2xl"
            />

            <div className="space-y-6">
              <p className="text-foreground/80">{DOCTOR.bioShort}</p>

              <div className="flex flex-wrap gap-2">
                {DOCTOR.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="inline-flex items-center gap-2 rounded-lg bg-accent-light px-4 py-2 text-xs font-medium text-foreground"
                  >
                    <ShieldCheck className="h-4 w-4 text-text-accent" />
                    {cred}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <WhatsAppButton
                  service="panendoscopia"
                  position="doctor"
                  procedureName="Panendoscopia"
                  size="compact"
                />
                <Link
                  href={DOCTOR.profileUrl}
                  className="text-sm font-medium text-primary underline hover:text-primary/80"
                >
                  Ver perfil completo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Google Reviews ── bg-muted ────────────────────────── */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <GoogleReviews />
        </div>
      </section>

      {/* ── SECTION 7: FAQ ── bg-background ──────────────────────────────── */}
      <section id="faqs-panendoscopia" className="bg-background">
        <div className="container-page section-padding">
          <Faq routeKey="panendoscopia" service="panendoscopia" />
        </div>
      </section>

      {/* ── SECTION 8: Related Procedures ── bg-muted ──────────────────────── */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-foreground mb-8">
            Procedimientos relacionados
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Endoscopia",
                question: "¿Solo síntomas en la parte alta?",
                price: mxn(PRICING.endoscopia.from),
                href: "/endoscopia-merida",
              },
              {
                name: "Colonoscopia",
                question: "¿Solo síntomas en la parte baja?",
                price: mxn(PRICING.colonoscopia.from),
                href: "/colonoscopia-merida",
              },
              {
                name: "CPRE",
                question: "¿Problema biliar diagnosticado?",
                price: mxn(PRICING.cpre.from),
                href: "/cpre-merida",
              },
            ].map((proc) => (
              <Link
                key={proc.href}
                href={proc.href}
                className="group rounded-xl border border-border bg-background p-6 hover:shadow-md hover:border-accent/30 transition-all"
              >
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {proc.name}
                </h3>
                <p className="text-sm text-foreground/70 mb-4">
                  {proc.question}
                </p>
                <p className="text-sm font-semibold text-text-accent">
                  Desde {proc.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: Bottom CTA ── bg-primary ──────────────────────────── */}
      <section className="bg-primary">
        <div className="container-page section-padding text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
            ¿Listo para agendar tu panendoscopia?
          </h2>
          <p className="text-white/80 mb-8">
            El {DOCTOR.name} responde personalmente por WhatsApp
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              service="panendoscopia"
              position="bottom-cta"
              procedureName="Panendoscopia"
              className="sm:px-10"
            />
            <CallButton
              service="panendoscopia"
              position="bottom-cta"
              variant="inverse"
            />
          </div>

          <div className="mt-8 space-y-2 text-sm text-white/60">
            <p>{CLINIC.address.display}</p>
            <p>{CLINIC.hours.display}</p>
            <p>Fácil acceso desde Cholul, Temozón Norte, Altabrisa y el Centro Histórico</p>
          </div>
        </div>
      </section>
    </>
  )
}
