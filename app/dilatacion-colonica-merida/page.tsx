import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn, INCLUDED_IN_PRICE, ADDITIONAL_FEES } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, MapPin, Clock, ArrowRight } from "lucide-react"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400
export const metadata: import("next").Metadata = {
  ...metaFor("dilatacion_colonica"),
  other: {
    "geo.region": "MX-YUC",
    "geo.placename": "Mérida",
    "geo.position": `${CLINIC.geo.lat};${CLINIC.geo.lng}`,
    ICBM: `${CLINIC.geo.lat}, ${CLINIC.geo.lng}`,
  },
}

export default function DilatacionColonicaPage() {
  const jsonLd = procedureSchema({
    name: "Dilatación Colónica en Mérida",
    path: "/dilatacion-colonica-merida",
    pricingKey: "dilatacion_colonica",
    description:
      "Tratamiento endoscópico con balones de dilatación para estenosis del colon. Alternativa mínimamente invasiva a cirugía de colon abierta.",
    bodyLocation: "Colon",
    howPerformed:
      "Colonoscopia terapéutica con balones de dilatación graduales bajo sedación profunda",
    preparation:
      "Preparación intestinal completa (similar a colonoscopia), dieta líquida 24 horas antes",
    followUp:
      "Observación 2-4 horas, alta el mismo día, dieta progresiva, seguimiento incluido",
    procedureType: "Therapeutic",
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Dilatación Colónica en Mérida", path: "/dilatacion-colonica-merida" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* SECTION 1: Hero */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Dilatación Colónica en Mérida
            </h1>

            <p className="text-lg text-muted-foreground">
              Tratamiento endoscópico para abrir estrechamientos del colon sin cirugía abierta.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              Si tienes estenosis colónica — por cirugía previa, enfermedad de Crohn o colitis
              cicatricial — la dilatación con balones permite restaurar el tránsito intestinal de
              forma ambulatoria, con sedación profunda en{" "}
              {CLINIC.address.streetAddress}. Atendemos pacientes de Mérida, Yucatán y zonas
              cercanas como Altabrisa, Temozón Norte y Cholul.
            </p>

            <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
              {[
                "Alternativa a cirugía de colon",
                "Sedación incluida",
                `Desde ${mxn(PRICING.dilatacion_colonica.from)}`,
                CLINIC.address.streetAddress,
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                service="dilatación colónica"
                position="hero"
                procedureName="Dilatación Colónica"
              />
              <CallButton service="dilatación colónica" position="hero" variant="ghost" />
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" />
              <span>{CLINIC.address.display}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Definition + Comparison */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-foreground mb-6">
            ¿Qué es la Dilatación Colónica?
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                La dilatación colónica utiliza balones graduales introducidos a través de un
                colonoscopio para ensanchar segmentos del colon que se han estrechado. El
                procedimiento preserva la anatomía intestinal normal, evitando la resección de
                colon sano que requiere la cirugía abierta.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Se indica en estenosis post-quirúrgicas (la causa más frecuente), estrechamientos
                por enfermedad de Crohn y cicatrices por colitis crónica. El objetivo es restaurar
                el calibre intestinal y mejorar el tránsito de forma inmediata.
              </p>

              <div className="p-4 rounded-xl bg-accent-light border border-accent/20">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Indicaciones principales
                </h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    Estenosis post-quirúrgicas (después de cirugías de colon)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    Enfermedad inflamatoria intestinal (Crohn, colitis)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    Estrechamientos por cicatrices o inflamación crónica
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm h-fit">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                Dilatación Colónica vs Cirugía Abierta
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-accent-light/50">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Dilatación Colónica</p>
                    <p className="text-sm text-muted-foreground">
                      Ambulatoria, sin incisiones, preserva anatomía, alta el mismo día
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted">
                  <span className="h-5 w-5 shrink-0 mt-0.5 text-muted-foreground font-bold text-center">✕</span>
                  <div>
                    <p className="font-medium text-foreground">Cirugía Abierta de Colon</p>
                    <p className="text-sm text-muted-foreground">
                      Hospitalización 5-10 días, resección intestinal, 4-8 semanas de recuperación
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Pricing */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-foreground mb-6">
            Costo de Dilatación Colónica
          </h2>

          <div className="max-w-xl mx-auto rounded-xl border border-border bg-card p-8 shadow-sm text-center">
            <p className="text-sm text-muted-foreground mb-2">Desde</p>
            <p className="text-4xl font-bold text-text-accent mb-2">
              {mxn(PRICING.dilatacion_colonica.from)}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Varía según localización y complejidad de la estenosis
            </p>

            <div className="text-left space-y-2 mb-6">
              <p className="text-sm font-semibold text-foreground mb-2">Incluye:</p>
              {INCLUDED_IN_PRICE.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Lectura de patología: {mxn(ADDITIONAL_FEES.biopsy.amount)} adicional si se toman
              biopsias
            </p>

            <Link
              href="/precios"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Ver todos los precios
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: Preparation — Before / During / After */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-foreground mb-6">
            Antes, Durante y Después del Procedimiento
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Before */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Antes</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>Preparación intestinal completa</li>
                <li>Dieta líquida 24 horas antes</li>
                <li>Suspender medicamentos según indicación</li>
                <li>Venir acompañado al hospital</li>
              </ul>
            </div>

            {/* During */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Durante</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>Sedación profunda (no sientes dolor)</li>
                <li>Duración: 30-45 minutos</li>
                <li>Monitoreo continuo por anestesiólogo</li>
                <li>Dilatación gradual y controlada</li>
              </ul>
            </div>

            {/* After */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Después</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>Observación 2-4 horas</li>
                <li>Alta el mismo día</li>
                <li>Alimentación gradual (líquidos primero)</li>
                <li>Seguimiento incluido en el precio</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Doctor Credentials */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-foreground mb-6">
            Tu Especialista: <Link href="/dr-omar-quiroz" className="text-primary hover:underline">{DOCTOR.name}</Link>
          </h2>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="relative aspect-[3/4] max-w-sm rounded-2xl overflow-hidden">
              <Image
                src={DOCTOR.photos.headshot}
                alt={DOCTOR.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 384px"
              />
            </div>

            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">{DOCTOR.bioShort}</p>

              <p className="text-foreground/80 leading-relaxed">
                Como endoscopista y cirujano general, el {DOCTOR.name} puede evaluar ambas
                opciones para tu caso: si la dilatación no es suficiente, ofrece alternativas
                quirúrgicas laparoscópicas sin necesidad de referirte a otro especialista.
              </p>

              <div className="flex flex-wrap gap-2">
                {DOCTOR.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="inline-block rounded-lg bg-accent-light px-4 py-2 text-xs font-medium text-foreground"
                  >
                    {cred}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <WhatsAppButton
                  service="dilatación colónica"
                  position="doctor"
                  procedureName="Dilatación Colónica"
                  size="compact"
                />
                <Link
                  href={DOCTOR.profileUrl}
                  className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline"
                >
                  Ver perfil completo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Google Reviews */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <GoogleReviews />
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <Faq routeKey="dilatacion_colonica" service="dilatación colónica" />
        </div>
      </section>

      {/* SECTION 8a: Related Procedures */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-foreground mb-6">
            Procedimientos Relacionados
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Colonoscopia",
                slug: "/colonoscopia-merida",
                desc: "Estudio diagnóstico que detecta estenosis del colon",
                price: mxn(PRICING.colonoscopia.from),
              },
              {
                name: "Dilatación Esofágica",
                slug: "/dilatacion-esofagica-merida",
                desc: "Misma técnica para estrechamientos del esófago",
                price: mxn(PRICING.dilatacion_esofagica.from),
              },
              {
                name: "Endoprótesis Colónicas",
                slug: "/endoprotesis-colonicas-merida",
                desc: "Alternativa con stent para obstrucciones complejas",
                price: null,
              },
            ].map((proc) => (
              <Link
                key={proc.slug}
                href={proc.slug}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
              >
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {proc.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{proc.desc}</p>
                <p className="text-sm font-medium text-text-accent mb-4">
                  {proc.price ? `Desde ${proc.price}` : "Precio bajo cotización"}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-4 transition-all">
                  Ver más <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8b: Final CTA */}
      <section className="bg-primary">
        <div className="container-page section-padding text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
            Agenda tu Evaluación
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Mejora tu calidad de vida con tratamiento endoscópico especializado en{" "}
            {CLINIC.address.addressLocality}, {CLINIC.address.addressRegion}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <WhatsAppButton
              service="dilatación colónica"
              position="cta section"
              procedureName="Dilatación Colónica"
              className="sm:px-10"
            />
            <CallButton
              service="dilatación colónica"
              position="cta section"
              variant="inverse"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{CLINIC.address.streetAddress}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{CLINIC.hours.display}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
