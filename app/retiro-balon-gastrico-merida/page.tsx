import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn, ADDITIONAL_FEES } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Link from "next/link"
import Image from "next/image"
import {
  CheckCircle2,
  MapPin,
  Clock,
  ShieldCheck,
  Stethoscope,
  Award,
  ArrowRight,
} from "lucide-react"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400
export const metadata = metaFor("retiro_balon")

export default function RetiroBalonGastricoPage() {
  const jsonLdProcedure = procedureSchema({
    name: "Retiro de Balón Gástrico en Mérida",
    path: "/retiro-balon-gastrico-merida",
    pricingKey: "retiro_balon_gastrico",
    description:
      `Extracción endoscópica de balón gástrico con sedación en ${DOCTOR.worksFor.hospital}, Mérida, Yucatán.`,
    procedureType: "Therapeutic",
  })

  const jsonLdBreadcrumb = breadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Retiro de Balón Gástrico", path: "/retiro-balon-gastrico-merida" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProcedure) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* ── SECTION 1: HERO ── bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light border border-accent/20">
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-text-accent">
                Procedimiento Bariátrico Endoscópico
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-foreground tracking-tight">
              Retiro de Balón Gástrico en Mérida
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              El {DOCTOR.name} realiza la extracción endoscópica de todos los tipos
              de balón gástrico (Orbera, Reshape, Spatz) en {CLINIC.address.streetAddress},
              zona Altabrisa-{CLINIC.address.neighborhood}, {CLINIC.address.addressLocality}, {CLINIC.address.addressRegion}. Procedimiento
              ambulatorio con sedación — alta el mismo día
              desde {mxn(PRICING.retiro_balon_gastrico.from)}.
            </p>

            <div className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
              {[
                `Desde ${mxn(PRICING.retiro_balon_gastrico.from)}`,
                "Extracción sin incisiones",
                "Alta el mismo día",
                `${CLINIC.address.streetAddress.split(",")[0]} con anestesiólogo`,
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                service="retiro balon"
                position="hero"
                procedureName="Retiro de Balón Gástrico"
                className="sm:px-8"
              />
              <CallButton service="retiro balon" position="hero" variant="ghost" />
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>{CLINIC.address.display}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                <span>{CLINIC.hours.display}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: DEFINITION ── bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight mb-6">
            ¿Cuándo Se Retira el Balón Gástrico?
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
            El balón intragástrico tiene un tiempo de vida definido por el
            fabricante. Dejarlo más tiempo del indicado puede causar
            complicaciones. Existen tres escenarios principales para su retiro:
          </p>

          <div className="grid gap-4 md:grid-cols-3 mb-6">
            {[
              {
                title: "6 meses",
                desc: "Balones temporales como Orbera y Reshape",
              },
              {
                title: "12 meses",
                desc: "Balones de larga duración como Spatz",
              },
              {
                title: "Emergencia",
                desc: "Intolerancia, migración o complicaciones",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-4 rounded-xl border border-border bg-background"
              >
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground">
            Si tu médico te indicó retirar el balón, el {DOCTOR.name} puede
            evaluarte.{" "}
            <WhatsAppButton
              service="retiro balon"
              position="definition"
              procedureName="Retiro de Balón Gástrico"
              label="Escríbenos por WhatsApp"
              variant="outline"
              size="compact"
              className="inline-flex"
            />
          </p>
        </div>
      </section>

      {/* ── SECTION 3: PRICING ── bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight mb-8">
            Precio de Retiro de Balón Gástrico en Mérida
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Price card */}
            <div className="p-8 rounded-2xl border-2 border-accent bg-accent-light/30">
              <div className="text-center space-y-4">
                <p className="text-sm font-medium text-text-accent uppercase tracking-wider">
                  Retiro de Balón Gástrico Completo
                </p>
                <p className="text-4xl font-extrabold text-text-accent font-serif">
                  {mxn(PRICING.retiro_balon_gastrico.from)}
                </p>
                <p className="text-sm text-muted-foreground">
                  Precio fijo — incluye todos los componentes
                </p>
              </div>
            </div>

            {/* What's included */}
            <div className="space-y-6">
              <h3 className="text-lg font-serif font-semibold text-foreground">
                El costo incluye
              </h3>
              <ul className="space-y-4">
                {[
                  "Extracción endoscópica completa del balón",
                  "Sedación con anestesiólogo certificado",
                  `Sala de endoscopia ${CLINIC.address.streetAddress.split(",")[0]}`,
                  "Recuperación y monitoreo post-procedimiento",
                  "Consulta de seguimiento incluida",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-xl bg-muted border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Costo adicional:</strong>{" "}
                  Consulta de valoración pre-procedimiento:{" "}
                  {mxn(ADDITIONAL_FEES.consultation.amount)}
                </p>
              </div>

              <p className="text-sm text-muted-foreground">
                Aceptamos efectivo, tarjeta hasta 6 MSI, transferencia bancaria y
                seguros médicos.{" "}
                <Link
                  href="/precios"
                  className="text-primary hover:underline font-medium"
                >
                  Ver todos los precios →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: PREPARATION ── bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight mb-8">
            ¿Cómo Se Realiza el Retiro de Balón Gástrico?
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Before */}
            <div className="p-6 rounded-xl border border-border bg-background">
              <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
                Antes del Procedimiento
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Ayuno de 8 a 12 horas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Suspender anticoagulantes (si aplica)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Venir con acompañante</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Estudios de laboratorio básicos</span>
                </li>
              </ul>
            </div>

            {/* During */}
            <div className="p-6 rounded-xl border border-border bg-background">
              <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
                Durante el Procedimiento (30-45 min)
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Sedación intravenosa con monitoreo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Localización y punción del balón</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Deflación controlada</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Extracción con fórceps especializados</span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="p-6 rounded-xl border border-border bg-background">
              <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
                Después del Procedimiento
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Recuperación 2 a 4 horas en sala</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Tolerancia oral con líquidos claros</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Alta el mismo día</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Seguimiento nutricional incluido</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: DOCTOR CREDENTIALS ── bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <Image
                src={DOCTOR.photos.headshot}
                alt={DOCTOR.name}
                width={300}
                height={400}
                className="rounded-2xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                {DOCTOR.name} — Endoscopista y Cirujano
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Como endoscopista certificado, el {DOCTOR.name} tiene experiencia
                con todos los tipos de balón gástrico: Orbera, Reshape y Spatz.
                Como cirujano general, puede resolver complicaciones sin referirte
                a otro especialista. Mismo médico, mismo hospital, misma atención
                de principio a fin.
              </p>

              <div className="flex flex-wrap gap-4">
                {[
                  "Certificado en endoscopia avanzada",
                  "Cirujano General con subespecialidad",
                  `${CLINIC.address.streetAddress.split(",")[0]} — quirófano disponible`,
                ].map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light border border-accent/20 text-sm font-medium text-text-accent"
                  >
                    <Award className="h-4 w-4" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <WhatsAppButton
                  service="retiro balon"
                  position="doctor"
                  procedureName="Retiro de Balón Gástrico"
                  size="compact"
                />
                <Link
                  href={DOCTOR.profileUrl}
                  className="text-sm text-primary hover:underline font-medium"
                >
                  Ver perfil completo →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: GOOGLE REVIEWS ── bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <GoogleReviews />
        </div>
      </section>

      {/* ── SECTION 7: FAQ ── bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <Faq routeKey="retiro_balon" service="retiro balon" />
        </div>
      </section>

      {/* ── SECTION 8: RELATED + CTA ── bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding space-y-16">
          {/* Related procedures */}
          <div>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight mb-8">
              Procedimientos Endoscópicos Relacionados
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/endoscopia-merida",
                  icon: Stethoscope,
                  name: "Endoscopia Diagnóstica",
                  desc: "Evaluación completa del tracto digestivo alto con sedación",
                  price: mxn(PRICING.endoscopia.from),
                },
                {
                  href: "/extraccion-cuerpos-extranos-endoscopia-merida",
                  icon: ShieldCheck,
                  name: "Extracción de Cuerpos Extraños",
                  desc: "Remoción segura de objetos ingeridos por endoscopia",
                  price: mxn(PRICING.extraccion_cuerpos_extranos.from),
                },
                {
                  href: "/apc-coagulacion-plasma-argon-merida",
                  icon: Award,
                  name: "Coagulación con Plasma de Argón",
                  desc: "Control de sangrado y tratamiento de lesiones con APC",
                  price: mxn(PRICING.apc.from),
                },
              ].map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group p-6 rounded-xl border border-border bg-background hover:shadow-md hover:border-accent/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <card.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                    {card.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{card.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-text-accent">
                      Desde {card.price}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="rounded-2xl bg-primary p-8 md:p-12 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
              ¿Necesitas Retirar tu Balón Gástrico?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              El {DOCTOR.name} está disponible para evaluación y retiro seguro en
              {CLINIC.address.streetAddress.split(",")[0]}, cerca de Temozón Norte y Country Club, {CLINIC.address.addressLocality}.
              Disponible para casos urgentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                service="retiro balon"
                position="cta section"
                procedureName="Retiro de Balón Gástrico"
                className="sm:px-10"
              />
              <CallButton
                service="retiro balon"
                position="cta section"
                variant="inverse"
              />
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-white/70">
              <MapPin className="h-4 w-4" />
              <span>{CLINIC.address.display}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
