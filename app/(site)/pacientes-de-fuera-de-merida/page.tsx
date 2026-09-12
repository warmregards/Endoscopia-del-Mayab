import { metaFor } from "@/lib/routes-seo"
import {
  PRICING,
  displayFrom,
  mxn,
  ADDITIONAL_FEES,
  INCLUDED_IN_PRICE,
  type ServiceKey,
} from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { breadcrumbSchema } from "@/lib/schema"
import Link from "next/link"
import {
  ArrowRight,
  Bus,
  Car,
  CheckCircle2,
  Clock,
  FileText,
  MapPin,
  Receipt,
  Route,
  CalendarCheck,
} from "lucide-react"
import Faq from "@/components/Faq"
import WhatsAppButton from "@/components/WhatsAppButton"
import CallButton from "@/components/CallButton"
import MapEmbed from "@/components/MapEmbed"

// Out-of-town hub. Job: get the patient to message BEFORE they travel.
// Indexed, organic-only (never an Ads destination). Naming rule: use
// "de fuera de Mérida" / "de otro municipio", never the loaded local term.
// Tracking: every WhatsApp CTA uses service="fuera_merida"; the blank-filled
// prefill ("vengo de ____") is how the patient's municipio reaches the doctor.

export const revalidate = 86400
export const metadata = metaFor("fuera_merida")

const SERVICE = "fuera_merida"

const WA_MESSAGE_AGENDAR =
  "Hola, vengo de ____ (municipio). Quiero agendar ____ (endoscopia / colonoscopia / consulta). ¿Me confirman precio, fecha y preparación antes de viajar?"
const WA_MESSAGE_MISMO_DIA =
  "Hola, vengo de ____ y quiero saber si puedo hacerme ____ el mismo día que llego."

const whyConfirm = [
  {
    icon: Route,
    title: "No pierdas el viaje.",
    text: "Una colonoscopia necesita preparación desde el día anterior. Una endoscopia necesita ayuno. Si llegas sin cita y sin preparación, casi siempre hay que regresar otro día.",
  },
  {
    icon: Receipt,
    title: "Precio sin sorpresas.",
    text: "Te decimos el costo completo por WhatsApp antes de que salgas de casa. Sin seguro, sin trámites: precio particular, directo.",
  },
  {
    icon: CalendarCheck,
    title: "Tu lugar apartado.",
    text: "Con cita, te esperamos a tu hora. Te decimos hasta qué hora puedes llegar y qué traer.",
  },
]

const priceRows: { key: ServiceKey; label: string }[] = [
  { key: "endoscopia", label: "Endoscopia" },
  { key: "colonoscopia", label: "Colonoscopia" },
  { key: "doble", label: PRICING.doble.label },
]

const timeInHospital = [
  {
    label: "Endoscopia",
    time: "2 a 3 horas en total",
    detail: "valoración, el estudio (15–20 min), recuperación de la sedación y tu reporte.",
  },
  { label: "Colonoscopia", time: "3 a 4 horas en total", detail: "" },
  { label: "Consulta", time: "30–45 minutos", detail: "en persona." },
]

const whatToBring = [
  "Identificación oficial",
  "Estudios previos si los tienes (endoscopias, laboratorios, ultrasonidos) — o mándalos por WhatsApp antes de viajar",
  "Lista de tus medicamentos",
]

export default function PacientesDeFueraDeMeridaPage() {
  const consultaFee = mxn(ADDITIONAL_FEES.consultation.amount)
  const biopsyFee = mxn(ADDITIONAL_FEES.biopsy.amount)
  const { directions } = CLINIC

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", path: "/" },
              { name: "Pacientes de fuera de Mérida", path: "/pacientes-de-fuera-de-merida" },
            ])
          ),
        }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1: HERO — bg-background
          "Confirma antes de viajar" framed as protecting the patient's trip.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-serif font-extrabold tracking-tight text-foreground text-3xl md:text-4xl lg:text-5xl">
              ¿Vienes de fuera de Mérida?
            </h1>

            <p className="text-lg text-foreground leading-relaxed">
              Atendemos pacientes de todo Yucatán y de Quintana Roo. Antes de
              tomar el camión o salir en carretera, escríbenos: te confirmamos{" "}
              <strong className="font-semibold">
                precio exacto, fecha y hora, y qué preparación necesitas
              </strong>{" "}
              — para que tu viaje valga la pena.
            </p>

            {/* Price badge — first viewport */}
            <div className="inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-6 py-4 rounded-xl bg-accent-light border border-accent/20">
              <span className="text-sm font-medium text-foreground">
                Precio particular
              </span>
              <span className="font-serif font-bold text-text-accent whitespace-nowrap">
                Endoscopia {displayFrom("endoscopia", "desde")}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                service={SERVICE}
                position="hero"
                label="Confirmar antes de viajar"
                message={WA_MESSAGE_AGENDAR}
                className="sm:px-8"
              />
              <CallButton service={SERVICE} position="hero" variant="ghost" />
            </div>

            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>{CLINIC.address.display}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2: POR QUÉ CONFIRMAR — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-5xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              Por qué confirmar antes de viajar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyConfirm.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="bg-card border border-border rounded-xl p-6 space-y-4"
                >
                  <Icon className="h-6 w-6 text-accent" aria-hidden />
                  <h3 className="font-serif font-semibold text-foreground text-lg tracking-tight">
                    {title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3: PRECIOS PARTICULARES — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-4xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              Precios para pacientes particulares
            </h2>

            <div className="border border-border rounded-xl overflow-hidden bg-card">
              {priceRows.map((row, i) => (
                <div
                  key={row.key}
                  className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-6 ${
                    i < priceRows.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="font-medium text-foreground">{row.label}</span>
                  <span className="font-semibold text-text-accent whitespace-nowrap">
                    {displayFrom(row.key)}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <p className="font-semibold text-foreground">Todos incluyen:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {INCLUDED_IN_PRICE.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                <span className="font-semibold text-foreground">
                  Consulta de valoración: {consultaFee}
                </span>{" "}
                — en persona, 30–45 min.{" "}
                <strong className="font-semibold text-foreground">
                  No se descuenta del precio del estudio.
                </strong>{" "}
                Las dudas de logística y el agendado por teléfono o WhatsApp no
                tienen costo.
              </p>
              <p>
                <span className="font-semibold text-foreground">
                  Lectura de patología (solo si se toman biopsias): {biopsyFee}
                </span>{" "}
                — se te informa antes del procedimiento.
              </p>
            </div>

            <Link
              href="/precios"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 hover:underline transition-all"
            >
              Ver todos los precios <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4: ¿MISMO DÍA? — bg-muted
          The question the unscheduled walk-ins actually had.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-4xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Puedo hacerme el estudio el mismo día que llego?
            </h2>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <h3 className="font-serif font-semibold text-foreground text-lg tracking-tight">
                  Endoscopia — sí, si llegas en ayuno total
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Ocho horas sin comer{" "}
                  <strong className="font-semibold text-foreground">
                    ni beber nada, ni agua
                  </strong>
                  . La cena del día anterior: solo líquidos claros (agua, té,
                  gelatina), y nada después de medianoche si tu cita es por la
                  mañana. Si tomas medicamento para la presión, tómalo con un
                  sorbo pequeño de agua y nada más.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Si sales de tu pueblo de madrugada sin desayunar ni beber,
                  puedes hacerte la endoscopia esa misma mañana —{" "}
                  <strong className="font-semibold text-foreground">
                    siempre que hayas confirmado tu lugar por WhatsApp
                  </strong>
                  .
                </p>
                <Link
                  href="/preparacion-endoscopia"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 hover:underline transition-all"
                >
                  Preparación para endoscopia <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <h3 className="font-serif font-semibold text-foreground text-lg tracking-tight">
                  Colonoscopia — no el mismo día
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Necesita dieta líquida el día anterior y la solución de
                  limpieza intestinal en dos tomas. Si vienes de lejos, hay dos
                  opciones:
                </p>
                <ul className="space-y-4 text-foreground/80 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                    <span>
                      <strong className="font-semibold text-foreground">
                        Preparación en casa, cita por la mañana.
                      </strong>{" "}
                      Con cita matutina, la solución de limpieza se toma la noche
                      anterior y el ayuno total empieza a medianoche, así que
                      puedes viajar de madrugada ya preparado.{" "}
                      <strong className="font-semibold text-foreground">
                        Pero la preparación para colonoscopia siempre se coordina
                        con nosotros — no la improvises.
                      </strong>{" "}
                      Llámanos o escríbenos y te damos tus instrucciones exactas
                      (cantidad de solución, horarios, medicamentos) para tu hora
                      de cita.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                    <span>
                      <strong className="font-semibold text-foreground">
                        Llegar el día anterior
                      </strong>
                      , hacer la preparación en Mérida y pasar la noche aquí.
                    </span>
                  </li>
                </ul>
                <Link
                  href="/preparacion-colonoscopia"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 hover:underline transition-all"
                >
                  Preparación para colonoscopia <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <h3 className="font-serif font-semibold text-foreground text-lg tracking-tight">
                  Consulta — con cita, y siempre en persona
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Dura 30–45 minutos y cuesta {consultaFee}; no se descuenta del
                  precio del estudio. No hacemos consultas por teléfono — pero{" "}
                  <strong className="font-semibold text-foreground">
                    si solo quieres preguntar por un estudio, resolver dudas de
                    logística o agendar, llámanos o escríbenos sin costo.
                  </strong>{" "}
                  Si ya vienes en camino, llama para preguntar si hay espacio ese
                  día antes de llegar al hospital.
                </p>
              </div>

              <div className="bg-accent-light border border-accent/20 rounded-xl p-6 space-y-4">
                <h3 className="font-serif font-semibold text-foreground text-lg tracking-tight flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" aria-hidden />
                  Llega por la mañana
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Los estudios se hacen en la mañana; en general la última hora
                  para iniciar es alrededor de las 11 AM. No publicamos una
                  &ldquo;hora límite&rdquo; porque{" "}
                  <strong className="font-semibold text-foreground">
                    no queremos que nadie llegue sin confirmar
                  </strong>
                  : si de todos modos vienes sin cita,{" "}
                  <strong className="font-semibold text-foreground">
                    llama o escribe antes de salir de tu pueblo
                  </strong>{" "}
                  y llega antes del mediodía. Después de esa hora, agendamos para
                  otro día.
                </p>
              </div>
            </div>

            <WhatsAppButton
              service={SERVICE}
              position="mismo-dia"
              label="Preguntar si puede ser el mismo día"
              message={WA_MESSAGE_MISMO_DIA}
              className="w-full sm:w-auto sm:px-8"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5: CUÁNTO TIEMPO — bg-background
          Sedation is not "walk in and out" — sets the expectation up front.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                Cuánto tiempo estarás en el hospital
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Un estudio con sedación no es &ldquo;entrar y salir&rdquo;. Cuenta con:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {timeInHospital.map((t) => (
                <div
                  key={t.label}
                  className="bg-card border border-border rounded-xl p-6 space-y-2"
                >
                  <p className="text-sm font-medium text-muted-foreground">{t.label}</p>
                  <p className="font-serif font-bold text-foreground text-xl tracking-tight">
                    {t.time}
                  </p>
                  {t.detail && (
                    <p className="text-sm text-foreground/80 leading-relaxed">{t.detail}</p>
                  )}
                </div>
              ))}
            </div>

            <p className="text-foreground/80 leading-relaxed">
              <strong className="font-semibold text-foreground">
                Con cita, tienes tu hora reservada.
              </strong>{" "}
              Sin cita, se atiende a los pacientes agendados primero y la espera
              puede ser larga. Si vienes de lejos, planea el día completo y el
              regreso con calma.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6: CÓMO LLEGAR — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-5xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                Cómo llegar (sin entrar al centro)
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Estamos en{" "}
                <strong className="font-semibold text-foreground">
                  {CLINIC.hospitalName}, Consultorio 517, {CLINIC.address.neighborhood}
                </strong>{" "}
                — sobre el Periférico Norte. No tienes que entrar al centro de
                Mérida.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <h3 className="font-serif font-semibold text-foreground text-lg tracking-tight flex items-center gap-2">
                  <Car className="h-5 w-5 text-accent" aria-hidden />
                  En carretera
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Desde el sur (Ticul, Tekax, Peto, Oxkutzcab) y el oriente
                  (Valladolid, Tizimín, Izamal) toma el Periférico hasta la salida
                  de{" "}
                  <strong className="font-semibold text-foreground">
                    {directions.exitName}
                  </strong>
                  .{" "}
                  <strong className="font-semibold text-foreground">
                    {directions.parking}.
                  </strong>
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <h3 className="font-serif font-semibold text-foreground text-lg tracking-tight flex items-center gap-2">
                  <Bus className="h-5 w-5 text-accent" aria-hidden />
                  En autobús
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Desde cualquier terminal del centro, toma el{" "}
                  <strong className="font-semibold text-foreground">Va y Ven</strong>{" "}
                  hasta el paradero{" "}
                  <strong className="font-semibold text-foreground">
                    {directions.busStop.name}
                  </strong>{" "}
                  —{" "}
                  <a
                    href={directions.busStop.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    ver en Google Maps
                  </a>
                  . Desde ahí son{" "}
                  <strong className="font-semibold text-foreground">
                    {directions.busStop.walk}
                  </strong>{" "}
                  al hospital. También puedes pedir un taxi o DiDi y decir
                  &ldquo;{directions.taxiDestination}&rdquo;.
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden">
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7: QUÉ TRAER + TU REPORTE — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight">
                Qué traer
              </h2>
              <ul className="space-y-4 text-foreground/80 leading-relaxed">
                {whatToBring.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                  <span>
                    <strong className="font-semibold text-foreground">
                      Un acompañante adulto — obligatorio.
                    </strong>{" "}
                    Después de la sedación no puedes conducir y te cuesta caminar
                    bien por unas horas. Alguien tiene que acompañarte de regreso,
                    en carretera o en autobús.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight flex items-center gap-2">
                <FileText className="h-6 w-6 text-accent" aria-hidden />
                Tu reporte, el mismo día
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Sales con tu reporte el mismo día, y además recibes un{" "}
                <strong className="font-semibold text-foreground">enlace</strong>{" "}
                donde puedes ver tu reporte, descargarlo en PDF y compartir las
                fotos y el video de tu estudio con quien tú quieras.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Si tu médico de tu pueblo te envió, puedes mandarle el enlace — o,
                si lo prefieres, nosotros se lo compartimos directamente — para que
                dé seguimiento allá sin que tengas que regresar solo para entregar
                papeles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 8: FAQ — bg-muted (FAQPage JSON-LD injected by <Faq>)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <Faq routeKey="fuera_merida" service={SERVICE} />
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 9: BOTTOM CTA — bg-primary
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-primary">
        <div className="container-page section-padding">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
                Escríbenos antes de salir de casa
              </h2>
              <p className="text-white/80 mt-2">
                Te confirmamos precio, fecha y preparación. Te contesta el{" "}
                {DOCTOR.name} directamente.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                service={SERVICE}
                position="bottom-cta"
                label="Confirmar antes de viajar"
                message={WA_MESSAGE_AGENDAR}
                className="sm:px-10"
              />
              <CallButton service={SERVICE} position="bottom-cta" variant="inverse" />
            </div>

            <address className="not-italic text-sm text-white/80">
              {CLINIC.name} · {CLINIC.phone.display} · {CLINIC.address.display}
            </address>
          </div>
        </div>
      </section>
    </>
  )
}
