import { metaFor } from "@/lib/routes-seo"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Image from "next/image"
import Link from "next/link"
import {
  AlertTriangle,
  CheckCircle2,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react"
import Faq from "@/components/Faq"
import MapEmbed from "@/components/MapEmbed"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"

export const revalidate = 86400
export const metadata = {
  ...metaFor("emergencias"),
  other: {
    "geo.region": "MX-YUC",
    "geo.placename": CLINIC.address.addressLocality,
    "ICBM": `${CLINIC.geo.lat}, ${CLINIC.geo.lng}`,
  },
}

export default function EmergenciasDigestivasPage() {
  return (
    <>
      {/* ── Section 1: Hero ── bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
            {/* Left — Content */}
            <div className="flex-1 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium text-foreground">
                    Atención de Emergencia Disponible
                  </span>
                </div>

                <h1
                  className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight"
                >
                  Emergencias Digestivas en Mérida
                </h1>

                <p className="text-lg text-foreground/80 max-w-2xl">
                  ¿Sangrado digestivo, cálculo biliar atrapado o cuerpo extraño?
                  El {DOCTOR.name} atiende emergencias endoscópicas en Hospital
                  Amerimed — fines de semana y fuera de horario cuando otros
                  especialistas no están disponibles.
                </p>

                <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span>Disponible fines de semana y festivos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span>Hospital Amerimed, Mérida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span>Cirujano + endoscopista para casos complejos</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton service="urgencias" position="hero" procedureName="Emergencia Digestiva" />
                <CallButton service="urgencias" position="hero" variant="ghost" />
              </div>
            </div>

            {/* Right — Emergency Card */}
            <div className="w-full lg:max-w-md">
              <div className="bg-background rounded-2xl border border-border shadow-lg p-8">
                <div className="text-center space-y-4 mb-6">
                  <div className="text-sm font-medium text-foreground/60">
                    Emergencias 24/7
                  </div>
                  <div className="text-2xl font-bold text-red-600">
                    {CLINIC.phone.display}
                  </div>
                  <div className="text-sm text-foreground/80">
                    Llamada directa al {DOCTOR.name}
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Sangrado digestivo (vómito con sangre, evacuaciones negras)",
                    "Cálculos biliares / ictericia súbita",
                    "Cuerpo extraño atorado (hueso, moneda, alimento)",
                    "Complicaciones post-procedimiento",
                  ].map((scenario) => (
                    <div key={scenario} className="flex items-start gap-4">
                      <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0 mt-1" />
                      <span className="text-sm text-foreground/80">
                        {scenario}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: ¿Es una Emergencia? ── bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2
            className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8"
          >
            ¿Es una Emergencia Digestiva?
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Immediate */}
            <div className="rounded-2xl border border-red-200 bg-red-50/50 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <h3
                  className="font-serif text-lg font-semibold text-foreground"
                >
                  Busca Atención Inmediata
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  "Vómito con sangre roja o en \"borra de café\" (hematemesis)",
                  "Evacuaciones negras o con sangre abundante (melena)",
                  "Ictericia + fiebre + dolor abdominal",
                  "Algo atorado en la garganta — no puedes tragar",
                  "Dolor abdominal súbito severo",
                ].map((symptom) => (
                  <div key={symptom} className="flex items-start gap-4">
                    <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-sm text-foreground/80">{symptom}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm font-medium text-red-700">
                Contacta ahora: estos síntomas no pueden esperar.
              </p>
            </div>

            {/* Urgent but not immediate */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3
                  className="font-serif text-lg font-semibold text-foreground"
                >
                  Agenda lo Antes Posible
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  "Dificultad progresiva para tragar",
                  "Dolor abdominal recurrente con fiebre",
                  "Sangre en heces sin dolor agudo",
                  "Náusea persistente y vómito sin sangre",
                ].map((symptom) => (
                  <div key={symptom} className="flex items-start gap-4">
                    <Clock className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm text-foreground/80">{symptom}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm font-medium text-primary">
                Escribe por WhatsApp para coordinar atención pronto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Emergency Procedures ── bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="mb-8">
            <h2
              className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2"
            >
              Procedimientos de Emergencia Disponibles
            </h2>
            <p className="text-muted-foreground">
              Endoscopia terapéutica inmediata en Hospital Amerimed
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "CPRE de Emergencia",
                description:
                  "Para obstrucciones biliares agudas: cálculos atrapados, colangitis, ictericia súbita. Extracción de cálculos y colocación de stents.",
                href: "/cpre-merida",
                label: "Más sobre CPRE",
              },
              {
                title: "Ligadura de Várices",
                description:
                  "Control inmediato de hemorragia por várices esofágicas. Para pacientes con cirrosis o hipertensión portal.",
                href: "/ligadura-varices-esofagicas-merida",
                label: "Más sobre Ligadura",
              },
              {
                title: "Extracción de Cuerpos Extraños",
                description:
                  "Huesos, monedas, pilas y objetos atorados en esófago o estómago. Atención inmediata incluyendo niños.",
                href: "/extraccion-cuerpos-extranos-endoscopia-merida",
                label: "Más sobre Extracción",
              },
            ].map((proc) => (
              <div
                key={proc.title}
                className="rounded-2xl border border-border bg-card p-8 hover:shadow-md transition-shadow"
              >
                <h3
                  className="font-serif text-lg font-semibold text-foreground mb-4"
                >
                  {proc.title}
                </h3>
                <p className="text-sm text-foreground/80 mb-6">
                  {proc.description}
                </p>
                <Link
                  href={proc.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  {proc.label}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: How It Works ── bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2
            className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight text-center mb-8"
          >
            Cómo Funciona la Atención de Emergencia
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: 1,
                title: "Contacto Inmediato",
                text: `Llama o escribe por WhatsApp. Describe tus síntomas. El ${DOCTOR.name} evalúa y coordina tu llegada a Hospital Amerimed.`,
                bg: "bg-accent",
              },
              {
                step: 2,
                title: "Llegada y Evaluación",
                text: "Recepción directa sin esperas innecesarias. Examen presencial y determinación del procedimiento necesario.",
                bg: "bg-primary",
              },
              {
                step: 3,
                title: "Procedimiento + Seguimiento",
                text: "Endoscopia terapéutica con sedación segura. Control post-procedimiento y seguimiento por WhatsApp incluidos.",
                bg: "bg-accent",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="text-center p-8 rounded-2xl border border-border bg-background"
              >
                <div
                  className={`w-12 h-12 rounded-full ${item.bg} text-white font-bold text-xl flex items-center justify-center mx-auto mb-6`}
                >
                  {item.step}
                </div>
                <h3
                  className="font-serif text-lg font-semibold text-foreground mb-4"
                >
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Doctor Credentials ── bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2
            className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8"
          >
            Tu Emergencia en Manos Expertas
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="w-full lg:w-auto flex-shrink-0">
              <Image
                src={DOCTOR.photos.headshot}
                alt={DOCTOR.name}
                width={400}
                height={500}
                className="rounded-2xl mx-auto"
              />
            </div>

            <div className="flex-1 space-y-6">
              <h3
                className="font-serif text-lg font-semibold text-foreground"
              >
                {DOCTOR.name}
              </h3>
              <p className="text-foreground/80">{DOCTOR.bioShort}</p>

              <div className="rounded-xl bg-accent-light/10 border border-accent/20 p-6">
                <p className="text-sm text-foreground/80">
                  Cirujano Y endoscopista — puede resolver tu emergencia con
                  endoscopia y, si es necesario, pasar directamente a cirugía sin
                  esperar otro especialista.
                </p>
              </div>

              <p className="text-sm text-foreground/80">
                Cuando nos escribes, te contesta el doctor directamente — no una
                recepcionista. Disponible fines de semana y festivos en Mérida,
                Yucatán.{" "}
                <Link
                  href={DOCTOR.profileUrl}
                  className="text-primary hover:underline"
                >
                  Conoce más sobre el {DOCTOR.name}
                </Link>
                .
              </p>

              <WhatsAppButton
                service="urgencias"
                position="doctor"
                procedureName="Emergencia Digestiva"
                className="text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: FAQ ── bg-muted */}
      <div className="bg-muted">
        <Faq
          routeKey="emergencias"
          service="urgencias"
          heading="Preguntas Frecuentes sobre Emergencias Digestivas"
        />
      </div>

      {/* ── Section 7: Practical Info + Location ── bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2
            className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8"
          >
            Dónde Encontrarnos
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact + Map */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <p className="text-sm text-foreground/70">
                      {CLINIC.phone.display}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Teléfono</p>
                    <p className="text-sm text-foreground/70">
                      {CLINIC.phone.display}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Dirección</p>
                    <p className="text-sm text-foreground/70">
                      {CLINIC.address.display}
                    </p>
                    <p className="text-xs text-foreground/60 mt-1">
                      Acceso fácil desde Altabrisa, Temozón Norte, Cholul y
                      Centro Histórico
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Horario</p>
                    <p className="text-sm text-foreground/70">
                      {CLINIC.hours.display}
                    </p>
                    <p className="text-xs text-foreground/60 mt-1">
                      Emergencias: disponibilidad extendida por WhatsApp
                    </p>
                  </div>
                </div>
              </div>

              <MapEmbed />
            </div>

            {/* What to Bring + Payment */}
            <div className="space-y-8">
              <div>
                <h3
                  className="font-serif text-lg font-semibold text-foreground mb-4"
                >
                  Qué Traer a la Emergencia
                </h3>
                <ul className="space-y-2">
                  {[
                    "Estudios previos si los tienes (no indispensable)",
                    "Lista de medicamentos actuales",
                    "Familiar acompañante",
                    "Identificación oficial",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3
                  className="font-serif text-lg font-semibold text-foreground mb-4"
                >
                  Formas de Pago
                </h3>
                <ul className="space-y-2">
                  {[
                    "Seguros de gastos médicos mayores",
                    "Pago directo con cotización previa",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-foreground/70 mt-2">
                  <Link
                    href="/precios"
                    className="text-primary hover:underline"
                  >
                    Ver precios de procedimientos programados
                  </Link>
                </p>
              </div>

              <div className="rounded-xl bg-primary/10 border border-primary/20 p-6">
                <p className="text-sm text-foreground/80">
                  <strong>En emergencias no se requiere ayuno previo.</strong> La
                  prioridad es el control inmediato de la urgencia digestiva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: Final CTA ── bg-primary */}
      <section className="bg-primary">
        <div className="container-page section-padding text-center">
          <h2
            className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight mb-4"
          >
            ¿Emergencia Digestiva Ahora?
          </h2>
          <p className="text-white/80 mb-8">
            No esperes — las emergencias digestivas requieren atención inmediata
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <WhatsAppButton service="urgencias" position="cta section" procedureName="Emergencia Digestiva" />
            <CallButton
              service="urgencias"
              position="cta section"
              variant="inverse"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>Hospital Amerimed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>{DOCTOR.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>Atención 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 9: Related Procedures ── bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2
            className="font-serif text-xl md:text-2xl font-bold text-foreground tracking-tight mb-8"
          >
            Procedimientos Relacionados
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "CPRE en Mérida",
                description:
                  "Tratamiento de cálculos y obstrucciones biliares con endoscopia avanzada.",
                href: "/cpre-merida",
              },
              {
                title: "Ligadura de Várices Esofágicas",
                description:
                  "Control de sangrado por várices en pacientes con hipertensión portal.",
                href: "/ligadura-varices-esofagicas-merida",
              },
              {
                title: "Extracción de Cuerpos Extraños",
                description:
                  "Retiro endoscópico de objetos atorados en esófago o estómago.",
                href: "/extraccion-cuerpos-extranos-endoscopia-merida",
              },
            ].map((proc) => (
              <Link
                key={proc.title}
                href={proc.href}
                className="group rounded-xl border border-border p-6 hover:shadow-md hover:border-accent/30 transition-all"
              >
                <h3
                  className="font-serif text-lg font-semibold text-foreground mb-2"
                >
                  {proc.title}
                </h3>
                <p className="text-sm text-foreground/80 mb-4">
                  {proc.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Ver más
                  <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD: MedicalProcedure */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "Emergencias Digestivas en Mérida",
              path: "/emergencias-digestivas-merida",
              description:
                "Atención endoscópica de urgencias digestivas: sangrado digestivo, obstrucciones biliares agudas, extracción de cuerpos extraños. Disponible fines de semana y festivos en Hospital Amerimed Mérida.",
              procedureType: "Therapeutic",
              howPerformed:
                "Endoscopia terapéutica de urgencia con sedación consciente segura en Hospital Amerimed Mérida.",
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
              {
                name: "Emergencias Digestivas",
                path: "/emergencias-digestivas-merida",
              },
            ])
          ),
        }}
      />
    </>
  )
}
