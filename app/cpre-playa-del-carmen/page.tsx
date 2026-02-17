import { metaFor } from "@/lib/routes-seo"
import { displayFrom } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, MapPin, ArrowRight, Clock, Car } from "lucide-react"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"

export const revalidate = 86400
export const metadata = metaFor("cpre_playa_del_carmen")

/* ── Data ──────────────────────────────────────────────────────────────── */

const trustChips = [
  "Hospital Amerimed, Mérida",
  "Sedación incluida",
  "Dr. Quiroz responde personalmente",
]

const travelData = [
  { city: "Playa del Carmen", distance: "~320 km", time: "~3.5 horas por autopista", alt: "ADO directo" },
  { city: "Cancún", distance: "~370 km", time: "~4 horas por autopista", alt: "ADO directo / vuelo 45 min" },
  { city: "Tulum", distance: "~280 km", time: "~3 horas por autopista", alt: "ADO con conexión" },
  { city: "Felipe Carrillo Puerto", distance: "~230 km", time: "~2.5 horas", alt: "Carretera directa" },
  { city: "Cozumel", distance: "~380 km", time: "~4.5 horas (ferry + auto)", alt: "Ferry a Playa + auto/ADO" },
]

const includedItems = [
  "Sedación profunda con anestesiólogo",
  "Quirófano equipado con fluoroscopía",
  "Equipo especializado (duodenoscopio Olympus)",
  "Materiales estándar del procedimiento",
]

const relatedProcedures = [
  {
    name: "Ligadura de Hemorroides",
    slug: "/ligadura-hemorroides-internas-merida",
    pricingKey: "ligadura_hemorroides" as const,
    desc: "Tratamiento ambulatorio de hemorroides internas sin cirugía.",
  },
  {
    name: "Ligadura de Várices Esofágicas",
    slug: "/ligadura-varices-esofagicas-merida",
    pricingKey: "ligadura_varices" as const,
    desc: "Control y prevención de sangrado por várices esofágicas.",
  },
  {
    name: "Endoscopia Diagnóstica",
    slug: "/endoscopia-merida",
    pricingKey: "endoscopia" as const,
    desc: "Estudio del tracto digestivo superior para diagnóstico de gastritis, úlceras y reflujo.",
  },
]

/* ══════════════════════════════════════════════════════════════════════════ */

export default function CprePlayaDelCarmenPage() {
  return (
    <>
      {/* JSON-LD: MedicalProcedure with areaServed for Quintana Roo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "CPRE para Pacientes de Quintana Roo",
              path: "/cpre-playa-del-carmen",
              pricingKey: "cpre",
              description:
                "Colangiopancreatografía retrógrada endoscópica disponible para pacientes de Playa del Carmen, Cancún, Tulum y Quintana Roo. Realizada en Hospital Amerimed, Mérida por el Dr. Omar Quiroz.",
              procedureType: "Therapeutic",
              bodyLocation: "Vías biliares y páncreas",
              howPerformed:
                "Endoscopia con fluoroscopía bajo sedación profunda",
              areaServed: [
                { type: "City", name: "Playa del Carmen" },
                { type: "City", name: "Cancún" },
                { type: "City", name: "Tulum" },
                { type: "City", name: "Cozumel" },
                { type: "City", name: "Felipe Carrillo Puerto" },
                { type: "State", name: "Quintana Roo" },
              ],
            })
          ),
        }}
      />

      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", path: "/" },
              { name: "CPRE en Mérida", path: "/cpre-merida" },
              {
                name: "CPRE Playa del Carmen",
                path: "/cpre-playa-del-carmen",
              },
            ])
          ),
        }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1: HERO — bg-background
          Serves: ALL personas
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-serif font-extrabold tracking-tight text-foreground text-3xl sm:text-4xl lg:text-5xl">
              CPRE en Playa del Carmen — Atención en Mérida
            </h1>

            <p className="text-muted-foreground leading-relaxed">
              Colangiopancreatografía retrógrada endoscópica para pacientes de
              Quintana Roo. {CLINIC.address.streetAddress}, Mérida.
            </p>

            {/* Price badge */}
            <div className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-accent-light border border-accent/20">
              <span className="text-2xl sm:text-3xl font-bold text-text-accent">
                {displayFrom("cpre")}
              </span>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
              {trustChips.map((chip) => (
                <div key={chip} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            {/* CTAs — WhatsApp FIRST */}
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                service="CPRE"
                position="hero"
                procedureName="CPRE"
                label="Agendar por WhatsApp"
                className="sm:px-8"
              />
              <CallButton
                service="CPRE"
                position="hero"
                variant="ghost"
              />
            </div>

            {/* Location signal */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span>{CLINIC.address.display}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2: Definition + Why Mérida — bg-muted
          Serves: P4 (procedure seeker), P1 (location seeker)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Qué Es la CPRE y Por Qué Viajar a Mérida?
            </h2>

            <p className="text-foreground/80 leading-relaxed">
              La CPRE combina endoscopia con rayos X para diagnosticar y tratar
              problemas de vías biliares y páncreas — cálculos, estenosis,
              obstrucciones. Es tanto diagnóstica como terapéutica: puede
              resolver el problema en la misma sesión.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              En Quintana Roo no hay especialistas certificados en CPRE. Los
              hospitales de Cancún y Playa del Carmen refieren estos casos a
              Mérida, donde el {DOCTOR.name} realiza CPREs semanalmente en{" "}
              {CLINIC.address.streetAddress} con equipo de última generación,
              incluyendo tecnología SpyGlass para visualización directa de los
              conductos biliares.
            </p>

            <Link
              href="/cpre-merida"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Conoce todos los detalles médicos de la CPRE
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3: Travel Logistics — bg-background
          Serves: P1 (QR location seeker)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              Cómo Llegar desde Quintana Roo
            </h2>

            {/* Travel table */}
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left px-4 py-4 font-semibold text-foreground">
                      Ciudad
                    </th>
                    <th className="text-left px-4 py-4 font-semibold text-foreground">
                      Distancia
                    </th>
                    <th className="text-left px-4 py-4 font-semibold text-foreground">
                      Tiempo en auto
                    </th>
                    <th className="text-left px-4 py-4 font-semibold text-foreground hidden sm:table-cell">
                      Alternativa
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {travelData.map((row) => (
                    <tr key={row.city} className="border-t border-border">
                      <td className="px-4 py-4 font-medium text-foreground">
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4 text-accent flex-shrink-0" />
                          {row.city}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-foreground/80">
                        {row.distance}
                      </td>
                      <td className="px-4 py-4 text-foreground/80">
                        {row.time}
                      </td>
                      <td className="px-4 py-4 text-foreground/80 hidden sm:table-cell">
                        {row.alt}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Post-procedure logistics */}
            <div className="rounded-xl bg-accent-light border border-accent/20 p-6 space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="font-semibold text-foreground">
                  Después del procedimiento
                </span>
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Después de una CPRE diagnóstica simple, el alta puede ser el
                mismo día. Si se realiza intervención terapéutica (extracción de
                cálculos, colocación de prótesis), la hospitalización es de
                12–24 horas. Para pacientes de fuera, hay hoteles a menos de 5
                minutos de {CLINIC.address.streetAddress}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4: Pricing + Value — bg-muted
          Serves: P2 (price shopper)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              Precio de CPRE — Mérida vs. Cancún
            </h2>

            {/* Price badge */}
            <div className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-background border border-border shadow-sm">
              <span className="text-2xl sm:text-3xl font-bold text-text-accent">
                {displayFrom("cpre")}
              </span>
            </div>

            {/* What's included */}
            <div className="grid gap-4 sm:grid-cols-2">
              {includedItems.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                  <span className="text-foreground/80 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              Costos adicionales posibles: esfinterotomía, extracción de
              cálculos, prótesis — cotización exacta antes del procedimiento.
            </p>

            {/* Value comparison */}
            <div className="rounded-xl bg-background border border-border p-6 space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                La misma CPRE en hospitales privados de Cancún cuesta $40,000+
                MXN. Incluso sumando el costo de transporte y una noche de
                hotel, la diferencia con Mérida supera los $10,000 MXN — con el
                mismo estándar de equipo y un especialista dedicado.
              </p>
            </div>

            {/* CTA */}
            <WhatsAppButton
              service="CPRE"
              position="pricing"
              procedureName="CPRE"
              label="Solicita tu cotización personalizada"
              className="sm:px-8"
            />

            <Link
              href="/precios"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
            >
              Ver todos nuestros precios
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5: Doctor Credentials — bg-background
          Serves: P3 (referred patient)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight mb-8">
              {DOCTOR.name} — Especialista en CPRE
            </h2>

            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <Image
                src={DOCTOR.photos.headshot}
                alt={DOCTOR.name}
                width={200}
                height={200}
                className="rounded-2xl flex-shrink-0"
              />
              <div className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  {DOCTOR.bioShort}
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Cuando nos escribes, te contesta el {DOCTOR.name}{" "}
                  directamente. Evaluamos tu caso, revisamos tus estudios y te
                  damos cotización exacta antes de que viajes a Mérida.
                </p>

                {/* Credentials */}
                <div className="flex flex-wrap gap-2">
                  {DOCTOR.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="inline-flex items-center px-4 py-2 rounded-full bg-accent-light text-sm font-medium text-foreground"
                    >
                      {cred}
                    </span>
                  ))}
                </div>

                <Link
                  href="/dr-omar-quiroz"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Ver perfil completo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6: FAQ — bg-muted
          Serves: P5 (researcher), P1 (QR location seeker)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <Faq
          routeKey="cpre_playa_del_carmen"
          service="CPRE"
          heading="Preguntas Frecuentes — CPRE para Pacientes de Quintana Roo"
        />
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7: Related Procedures — bg-background
          Serves: P4 (procedure seeker)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight mb-8">
            Otros Procedimientos Disponibles para Pacientes de Quintana Roo
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedProcedures.map((proc) => (
              <Link
                key={proc.slug}
                href={proc.slug}
                className="group block p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
              >
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {proc.name}
                </h3>
                <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                  {proc.desc}
                </p>
                <span className="text-sm font-semibold text-text-accent">
                  {displayFrom(proc.pricingKey)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 8: Bottom CTA — bg-primary
          Serves: ALL personas
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-primary">
        <div className="container-page section-padding text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
            ¿Necesitas una CPRE? Escríbenos desde Quintana Roo
          </h2>
          <p className="text-white/80 max-w-xl mx-auto leading-relaxed">
            Envía tus estudios por WhatsApp y recibe cotización personalizada
            del {DOCTOR.name}. Atendemos pacientes de Playa del Carmen, Cancún,
            Tulum y toda la Riviera Maya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              service="CPRE"
              position="bottom-cta"
              procedureName="CPRE"
              label="Agendar por WhatsApp"
              className="sm:px-10"
            />
            <CallButton
              service="CPRE"
              position="bottom-cta"
              variant="inverse"
            />
          </div>
        </div>
      </section>
    </>
  )
}
