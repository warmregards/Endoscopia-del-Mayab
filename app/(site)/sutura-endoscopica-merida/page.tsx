import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Link from "next/link"
import Image from "next/image"
import {
  CheckCircle2,
  MapPin,
  Clock,
  AlertTriangle,
  Award,
  Target,
  Microscope,
  Activity,
} from "lucide-react"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400
export const metadata = metaFor("sutura_endoscopica")

export default function SuturaEndoscopicaPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "Sutura Endoscópica en Mérida",
              path: "/sutura-endoscopica-merida",
              pricingKey: "sutura_endoscopica",
              description:
                "Reparación de perforaciones y defectos gastrointestinales sin cirugía abierta mediante sutura endoscópica en Mérida, Yucatán.",
              procedureType: "Therapeutic",
              howPerformed:
                "Se accede al defecto por vía endoscópica y se sutura con dispositivos especializados bajo sedación profunda.",
              bodyLocation: "Tracto gastrointestinal",
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
              { name: "Sutura Endoscópica en Mérida", path: "/sutura-endoscopica-merida" },
            ])
          ),
        }}
      />

      {/* ── Section 1: Hero ── bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
            <div className="flex-1 space-y-6">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
                Sutura Endoscópica en Mérida
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Reparación de perforaciones y defectos gastrointestinales sin cirugía abierta.
                El Dr. Omar Quiroz realiza sutura endoscópica en {CLINIC.address.streetAddress},{" "}
                {CLINIC.address.addressLocality}, con técnica mínimamente invasiva y cotización
                transparente.
              </p>

              <div className="flex flex-wrap gap-4 text-sm">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  Sedación profunda
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  Sin cirugía abierta
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  Cotización personalizada
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  service="sutura"
                  position="hero"
                  procedureName="Sutura Endoscópica"
                  className="sm:px-8"
                />
                <CallButton service="sutura" position="hero" variant="ghost" />
              </div>
            </div>

            <div className="w-full lg:w-80 space-y-4">
              {/* Price Card */}
              <div className="p-6 rounded-xl border border-border bg-card shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Precio según caso</h3>
                <p className="text-2xl font-bold text-text-accent mb-2">
                  {mxn(PRICING.sutura_endoscopica.from)}
                </p>
                <p className="text-sm text-muted-foreground">
                  Varía según tipo de defecto y dispositivo. Cotización clara antes del procedimiento.
                </p>
              </div>

              {/* Location Card */}
              <div className="p-6 rounded-xl border border-border bg-card shadow-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hospital Amerimed</h3>
                    <p className="text-sm text-muted-foreground">
                      {CLINIC.address.display}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Definition + Indications ── bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
              ¿Qué Es la Sutura Endoscópica y Cuándo Se Indica?
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                La sutura endoscópica es un procedimiento que permite reparar perforaciones, fístulas
                y defectos del tracto digestivo desde su interior, sin necesidad de incisiones externas
                ni cirugía abierta. Se utilizan dispositivos especializados que suturan el tejido de
                forma precisa bajo visión endoscópica directa.
              </p>
              <p>
                En Mérida, el Dr. Quiroz es endoscopista con formación quirúrgica, lo que le permite
                resolver complicaciones inmediatamente si la sutura endoscópica no es suficiente.
                Pacientes de Altabrisa, Temozón Norte, García Ginerés y toda la zona metropolitana
                de Yucatán confían en su experiencia para estos procedimientos avanzados.
              </p>
            </div>

            <h3 className="font-serif text-lg font-semibold text-foreground mt-8 mb-4">
              Indicaciones principales
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
              {[
                "Perforaciones post-biopsia o polipectomía",
                "Cierre de fístulas digestivas",
                "Refuerzo de suturas en anastomosis",
                "Reparación de defectos mucosos post-resección",
                "Cierre de orificios de gastrostomía",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Section 3: Pricing / Quote ── bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl">
            <h2 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-foreground mb-6">
              Costo de Sutura Endoscópica en Mérida
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              El costo varía según el tipo de defecto, su ubicación y el dispositivo de sutura
              utilizado. Te ofrecemos una cotización personalizada y transparente antes del
              procedimiento. Escríbenos por WhatsApp para recibir tu presupuesto.
            </p>

            <div className="p-6 rounded-xl border border-border bg-card shadow-sm mb-6">
              <h3 className="font-semibold text-foreground mb-4">Qué incluye el procedimiento</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Procedimiento completo de sutura",
                  "Sedación profunda con anestesiólogo",
                  "Dispositivos de sutura especializados",
                  "Quirófano de Hospital Amerimed",
                  "Observación post-procedimiento",
                  "Seguimiento incluido por 30 días",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <WhatsAppButton
                service="sutura"
                position="pricing"
                procedureName="Sutura Endoscópica"
                label="Solicitar cotización"
              />
              <Link
                href="/precios"
                className="text-sm text-primary hover:underline font-medium"
              >
                Ver todos nuestros precios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Process ── bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
              ¿Cómo Se Realiza la Sutura Endoscópica?
            </h2>

            <ol className="space-y-4 mb-8">
              {[
                {
                  title: "Evaluación",
                  desc: "Valoración endoscópica del defecto: tamaño, ubicación y profundidad.",
                },
                {
                  title: "Preparación",
                  desc: "Sedación profunda con anestesiólogo y posicionamiento del endoscopio terapéutico.",
                },
                {
                  title: "Sutura",
                  desc: "Colocación precisa del dispositivo de sutura para cerrar el defecto.",
                },
                {
                  title: "Verificación",
                  desc: "Confirmación de cierre hermético y prueba de integridad de la reparación.",
                },
                {
                  title: "Observación",
                  desc: "Monitoreo post-procedimiento en sala de recuperación según complejidad.",
                },
              ].map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-sm flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-light border border-accent/20 text-sm mb-8">
              <Clock className="h-4 w-4 text-accent" />
              <span className="font-medium text-foreground">20-45 minutos</span>
              <span className="text-muted-foreground">según complejidad del defecto</span>
            </div>

            {/* Condensed recovery */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Recuperación
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                La mayoría de pacientes reciben alta el mismo día. La recuperación incluye ayuno
                inicial con progresión gradual a dieta blanda en 24-48 horas. El regreso a
                actividades normales toma de 3 a 7 días. Incluimos seguimiento por 30 días para
                confirmar cicatrización.
              </p>

              {/* Warning signs */}
              <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                <div className="flex items-start gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <h4 className="font-semibold text-foreground">Contactar inmediatamente si presentas:</h4>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 ml-8">
                  <li>Dolor abdominal severo o persistente</li>
                  <li>Fiebre mayor a 38 C</li>
                  <li>Vómito con sangre</li>
                  <li>Distensión abdominal marcada</li>
                </ul>
                <div className="mt-4 ml-8">
                  <CallButton service="sutura" position="urgencia" variant="ghost" size="compact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Doctor Credentials ── bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
              Tu Especialista: {DOCTOR.name}
            </h2>

            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex-shrink-0">
                <Image
                  src={DOCTOR.photos.headshot}
                  alt={DOCTOR.name}
                  width={200}
                  height={200}
                  className="rounded-2xl"
                />
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {DOCTOR.bioShort}
                </p>

                <div className="flex flex-wrap gap-2">
                  {DOCTOR.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-accent-light text-xs font-medium text-foreground"
                    >
                      <Award className="h-4 w-4 text-accent" />
                      {cred}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Como cirujano y endoscopista, el Dr. Quiroz puede resolver complicaciones
                  inmediatamente durante el procedimiento sin necesidad de referir a otro
                  especialista. Esta doble formación es clave en suturas endoscópicas, donde la
                  precisión quirúrgica marca la diferencia.
                </p>

                <Link
                  href={DOCTOR.profileUrl}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Conoce más sobre el {DOCTOR.name} &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Google Reviews ── bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <GoogleReviews />
        </div>
      </section>

      {/* ── Section 7: FAQ ── bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <Faq routeKey="sutura_endoscopica" service="sutura" />
        </div>
      </section>

      {/* ── Section 8: Related Procedures ── bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-foreground mb-8">
            Procedimientos Relacionados
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Target className="h-6 w-6 text-accent" />,
                title: "Cierre de Fístulas por Clips",
                desc: "Cierre de fístulas y perforaciones con clips endoscópicos over-the-scope.",
                href: "/cierre-fistulas-clips-endoscopicos-merida",
              },
              {
                icon: <Microscope className="h-6 w-6 text-accent" />,
                title: "Resección Endoscópica Mucosa (EMR)",
                desc: "Resección de lesiones superficiales que pueden requerir cierre post-resección.",
                href: "/reseccion-endoscopica-mucosa-emr-merida",
              },
              {
                icon: <Activity className="h-6 w-6 text-accent" />,
                title: "Gastrostomía Endoscópica (PEG)",
                desc: "Colocación de sonda de alimentación con posible cierre posterior por sutura.",
                href: "/gastrostomia-endoscopica-peg-merida",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{card.desc}</p>
                <span className="text-sm font-medium text-primary group-hover:underline">
                  Ver detalles &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 9: Final CTA ── bg-background */}
      <section className="bg-primary">
        <div className="container-page section-padding text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
            ¿Necesitas Sutura Endoscópica en Mérida?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            El Dr. Quiroz evalúa cada caso y ofrece cotización transparente. Escríbenos por
            WhatsApp o llámanos para agendar tu valoración.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <WhatsAppButton
              service="sutura"
              position="final cta"
              procedureName="Sutura Endoscópica"
              className="sm:px-10"
            />
            <CallButton service="sutura" position="final cta" variant="inverse" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {CLINIC.address.display}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {CLINIC.hours.display}
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
