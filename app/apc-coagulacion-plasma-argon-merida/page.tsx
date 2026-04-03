import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn, displayFrom, ADDITIONAL_FEES, INCLUDED_IN_PRICE } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Image from "next/image"
import Link from "next/link"
import { MapPin, CheckCircle2, ArrowRight, Clock, AlertTriangle } from "lucide-react"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400

export const metadata = metaFor("apc")

/* ── Data for DRY rendering ────────────────────────────────────────────── */

const trustChips = [
  "Sin contacto directo",
  "Equipo ERBE propio",
  "Sedación con anestesiólogo",
  "Hospital Amerimed",
]

const includedItems = [
  ...INCLUDED_IN_PRICE,
  "Aplicación de plasma de argón con equipo ERBE",
]

const conditions = [
  {
    title: "Esófago de Barrett con displasia",
    desc: (
      <>
        El esófago de Barrett ocurre cuando el ácido gástrico daña el
        revestimiento del esófago y las células cambian (metaplasia intestinal).
        Cuando se detecta displasia, el APC ablaciona el tejido anormal capa por
        capa en sesiones controladas. Se diagnostica durante una{" "}
        <Link href="/endoscopia-merida" className="text-primary hover:underline">
          endoscopia
        </Link>{" "}
        y puede requerir múltiples sesiones.
      </>
    ),
  },
  {
    title: "Ectasia vascular antral gástrica (GAVE)",
    desc: (
      <>
        También conocida como &ldquo;estómago sandía&rdquo; por su apariencia
        endoscópica con franjas rojas, la GAVE causa sangrado crónico y anemia
        por deficiencia de hierro. El APC coagula los vasos sanguíneos anormales
        sin dañar el tejido circundante. Usualmente requiere 2–4 sesiones.
      </>
    ),
  },
  {
    title: "Angiodisplasias del tubo digestivo",
    desc: (
      <>
        Malformaciones vasculares que causan sangrado oculto o visible en
        esófago, estómago, intestino delgado o colon. El APC sella estas
        lesiones con coagulación precisa. Frecuentemente se descubren durante
        una{" "}
        <Link href="/endoscopia-merida" className="text-primary hover:underline">
          endoscopia
        </Link>{" "}
        o{" "}
        <Link href="/colonoscopia-merida" className="text-primary hover:underline">
          colonoscopia
        </Link>
        .
      </>
    ),
  },
  {
    title: "Proctitis por radiación",
    desc: (
      <>
        Efecto secundario frecuente en pacientes que recibieron radioterapia
        pélvica (próstata, cérvix, recto). Causa sangrado rectal por vasos
        sanguíneos frágiles en la mucosa del recto. El APC es el tratamiento
        endoscópico de primera línea. Generalmente se necesitan múltiples
        sesiones.
      </>
    ),
  },
  {
    title: "Sangrado post-polipectomía",
    desc: (
      <>
        Después de remover pólipos durante una{" "}
        <Link href="/colonoscopia-merida" className="text-primary hover:underline">
          colonoscopia
        </Link>{" "}
        o lesiones más grandes mediante{" "}
        <Link href="/reseccion-endoscopica-mucosa-emr-merida" className="text-primary hover:underline">
          resección endoscópica (EMR)
        </Link>
        , el sitio puede sangrar. El APC proporciona hemostasia inmediata.
      </>
    ),
  },
  {
    title: "Desvitalización tumoral paliativa",
    desc: (
      <>
        Para tumores obstructivos de esófago o estómago no candidatos a cirugía,
        el APC reduce el tejido tumoral para restaurar el paso de alimentos. Puede
        combinarse con{" "}
        <Link href="/endoprotesis-esofagicas-merida" className="text-primary hover:underline">
          endoprótesis esofágicas
        </Link>
        .
      </>
    ),
  },
]

const stats = [
  { value: "ERBE", label: "Equipo propio", color: "text-accent" },
  { value: "15+", label: "Años experiencia", color: "text-primary" },
  { value: "<0.1%", label: "Complicaciones", color: "text-accent" },
]

/* ══════════════════════════════════════════════════════════════════════════ */

export default function APCPage() {
  return (
    <>
      {/* ── JSON-LD: MedicalProcedure ───────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "Coagulación con Plasma de Argón (APC) en Mérida",
              path: "/apc-coagulacion-plasma-argon-merida",
              pricingKey: "apc",
              description:
                "Tratamiento endoscópico sin contacto con equipo ERBE para sangrado digestivo, esófago de Barrett con displasia, ectasia vascular antral gástrica (GAVE), angiodisplasias, proctitis por radiación y control hemostático post-resección.",
              bodyLocation: "Tracto gastrointestinal (esófago, estómago, colon, recto)",
              howPerformed:
                "Se introduce un catéter por el canal de trabajo del endoscopio y se aplica gas argón ionizado para coagular el tejido sin contacto directo, con penetración controlada de 2–3 mm.",
              preparation: "Ayuno de 8-12 horas. Posible ajuste de anticoagulantes según indicación médica.",
              followUp:
                "Dieta blanda 24-48 horas. Inhibidor de bomba de protones entre sesiones. Control endoscópico según extensión del tratamiento.",
              procedureType: "Therapeutic",
            })
          ),
        }}
      />

      {/* ── JSON-LD: BreadcrumbList ──────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", path: "/" },
              { name: "Servicios", path: "/servicios" },
              { name: "Coagulación con Plasma de Argón (APC)", path: "/apc-coagulacion-plasma-argon-merida" },
            ])
          ),
        }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1: HERO — bg-background
          Split layout: left content + right price card (proven pattern)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">

            {/* ── Left: Content ── */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light border border-accent/20 text-sm font-medium text-foreground">
                Tratamiento endoscópico con equipo ERBE
              </div>

              <h1 className="font-serif font-extrabold tracking-tight text-foreground text-3xl sm:text-4xl lg:text-5xl">
                Coagulación con Plasma de Argón (APC) en Mérida
              </h1>

              <p className="text-xl font-semibold text-text-accent">
                {displayFrom("apc")} · Equipo ERBE propio · Hospital Amerimed
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Tratamiento endoscópico sin contacto para sangrado digestivo,
                esófago de Barrett y ablación de lesiones — con el precio más
                accesible de la Península de Yucatán.
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
                  service="coagulacion plasma argon"
                  position="hero"
                  procedureName="Coagulación con Plasma de Argón"
                  label="Agendar por WhatsApp"
                  className="sm:px-8"
                />
                <CallButton service="coagulacion plasma argon" position="hero" variant="ghost" />
              </div>

              {/* Location — NAP signal */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>{CLINIC.address.display}</span>
              </div>
            </div>

            {/* ── Right: Price card ── */}
            <div className="w-full lg:max-w-sm">
              <div className="border-2 border-accent bg-accent/5 rounded-2xl p-8">
                <div className="text-center space-y-4">
                  <p className="text-sm font-medium text-muted-foreground">
                    {DOCTOR.name}
                  </p>
                  <p className="font-serif font-bold text-text-accent text-3xl">
                    {displayFrom("apc")}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Precio por sesión — todo incluido
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
                  ✓ Equipo ERBE propio — sin rentar equipo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2: DEFINITION — bg-muted
          Short explanation + what it treats
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Qué es la coagulación con plasma de argón?
            </h2>

            <p className="text-foreground/80 leading-relaxed max-w-3xl">
              La coagulación con plasma de argón (APC) es un tratamiento
              endoscópico que utiliza gas argón ionizado para coagular tejido sin
              contacto directo. El gas se ioniza y transfiere energía al tejido,
              sellando vasos sanguíneos de forma segura con una penetración
              limitada a 2–3&nbsp;mm, lo que reduce significativamente el riesgo
              de perforación.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3: CONDITIONS GRID — bg-background
          6 condition cards in 2-col grid — scannable, not a wall of text
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                ¿Qué condiciones trata el APC?
              </h2>
              <p className="text-muted-foreground max-w-3xl">
                El plasma de argón es efectivo para condiciones donde se necesita
                coagular tejido de forma precisa y controlada — sin contacto
                directo y con penetración limitada.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {conditions.map((condition) => (
                <div
                  key={condition.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                    {condition.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed text-sm">
                    {condition.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4: PRICING COMPARISON — bg-muted
          3-col comparison + ERBE differentiator + cost context
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                Precio de APC en Mérida — equipo ERBE propio
              </h2>
              <p className="text-muted-foreground">
                El único equipo ERBE propio en la Península de Yucatán — sin
                rentar equipo, precio justo por sesión
              </p>
            </div>

            {/* Three-column comparison */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 rounded-2xl border border-border bg-background text-center">
                <p className="text-lg font-bold text-muted-foreground mb-2">
                  Otros proveedores
                </p>
                <p className="text-2xl font-bold text-muted-foreground line-through">
                  $25,000–$30,000
                </p>
                <p className="text-sm text-muted-foreground/70 mt-2">
                  Rentan equipo por sesión
                </p>
              </div>

              <div className="p-6 rounded-2xl border-2 border-accent bg-accent/5 text-center">
                <p className="text-lg font-bold text-text-accent mb-2">
                  {DOCTOR.name}
                </p>
                <p className="font-serif font-bold text-text-accent text-3xl">
                  {displayFrom("apc")}
                </p>
                <p className="text-sm text-accent/80 mt-2">
                  Equipo ERBE propio — todo incluido
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-background text-center">
                <p className="text-lg font-bold text-muted-foreground mb-2">
                  Cirugía convencional
                </p>
                <p className="text-2xl font-bold text-muted-foreground">
                  $150,000+
                </p>
                <p className="text-sm text-muted-foreground/70 mt-2">
                  Semanas de recuperación
                </p>
              </div>
            </div>

            {/* What's included */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-serif font-bold text-foreground mb-6 text-center">
                ¿Qué incluye el costo por sesión?
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

            {/* ERBE differentiator callout */}
            <div className="rounded-xl bg-accent-light border border-accent/20 p-6 max-w-4xl mx-auto">
              <h3 className="font-serif font-semibold text-foreground mb-2">
                ¿Por qué el precio es menor?
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                El Dr. Quiroz cuenta con su propio generador electroquirúrgico
                ERBE — no renta equipo por sesión como otros proveedores. Mérida
                es la única ciudad en la Península de Yucatán donde se realiza
                este tratamiento. Recibimos pacientes de Cancún, Playa del
                Carmen, Tulum, Campeche, Valladolid, Chetumal y Belice.
              </p>
            </div>

            {/* Cost comparison context */}
            <div className="rounded-xl bg-background border border-border p-6 max-w-4xl mx-auto">
              <h3 className="font-serif font-semibold text-foreground mb-4">
                APC vs. tratamientos alternativos
              </h3>
              <p className="text-sm text-foreground/80 mb-4">
                El APC trata la <strong>causa</strong> del problema, no solo los
                síntomas:
              </p>
              <div className="grid gap-4 md:grid-cols-2 text-sm text-foreground/80">
                {[
                  "Infusiones de hierro por anemia crónica: $2,000–$4,000/mes indefinidamente",
                  "Cirugía esofágica por Barrett avanzado: $150,000+ con semanas de recuperación",
                  "Transfusiones por sangrado recurrente: costos acumulados sin tratar el origen",
                  "APC con otros proveedores: $25,000–$30,000 por sesión",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-foreground/80 mt-4">
                La mayoría de condiciones se resuelven en 1–4 sesiones. Es la
                opción menos invasiva, más accesible y con recuperación más
                rápida.
              </p>
            </div>

            <div className="text-center">
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
          SECTION 5: PREPARATION & RECOVERY — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              Preparación y recuperación
            </h2>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Procedure steps */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-6">
                  Pasos del procedimiento
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { step: "1", label: "Evaluación", desc: "Endoscopia diagnóstica para localizar la lesión" },
                    { step: "2", label: "Sedación", desc: "Anestesia monitorizada — no sientes nada" },
                    { step: "3", label: "Coagulación", desc: "Aplicación controlada de plasma de argón" },
                    { step: "4", label: "Verificación", desc: "Confirmación de hemostasia efectiva" },
                  ].map((s) => (
                    <div key={s.step} className="p-4 rounded-xl bg-muted border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                          {s.step}
                        </span>
                        <span className="font-semibold text-foreground">{s.label}</span>
                      </div>
                      <p className="text-sm text-foreground/70">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recovery timeline */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Después del procedimiento
                </h3>

                <div className="space-y-4">
                  {[
                    { time: "2h", label: "Recuperación de sedación y observación" },
                    { time: "6h", label: "Dieta líquida clara, alta si no hay complicaciones" },
                    { time: "24h", label: "Dieta blanda, actividades limitadas" },
                    { time: "7d", label: "Cicatrización completa, actividades normales" },
                  ].map((t) => (
                    <div key={t.time} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-light flex items-center justify-center">
                        <Clock className="h-4 w-4 text-accent" />
                      </span>
                      <div>
                        <span className="font-semibold text-foreground">{t.time}</span>
                        <p className="text-sm text-foreground/70">{t.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-accent-light border border-accent/20">
                  <p className="text-sm text-foreground/80">
                    El número de sesiones depende de la condición tratada y la
                    extensión de la lesión. El Dr. Quiroz te explica el plan
                    completo de tratamiento antes de iniciar.
                  </p>
                </div>

                {/* Warning signs */}
                <div className="p-4 rounded-xl bg-yellow-50 border border-yellow-200">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-700" />
                    <span className="font-semibold text-yellow-800 text-sm">Contacta inmediatamente si:</span>
                  </div>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Sangrado activo o abundante</li>
                    <li>• Dolor abdominal intenso</li>
                    <li>• Fiebre mayor a 38 °C</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6: DR. QUIROZ CREDENTIALS — bg-muted
          Matches endoscopia pattern: photo header + stats + 2-col bio
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 sm:items-center mb-8">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-accent overflow-hidden shrink-0 mx-auto sm:mx-0">
                <Image
                  src={DOCTOR.photos.headshot}
                  alt={DOCTOR.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                  Tu especialista: {DOCTOR.name}
                </h2>
                <p className="text-primary font-medium text-sm mt-1">
                  Endoscopista con equipo ERBE propio
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid gap-6 md:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl border border-border bg-background"
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
              <div className="space-y-4">
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
          SECTION 7: GOOGLE REVIEWS — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <GoogleReviews />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 8: FAQ — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <Faq routeKey="apc" service="coagulacion plasma argon" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 9: RELATED PROCEDURES — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="font-serif font-bold tracking-tight text-foreground text-2xl md:text-3xl mb-2">
            Procedimientos relacionados
          </h2>
          <p className="text-muted-foreground mb-8">
            El APC se complementa con estos procedimientos diagnósticos y
            terapéuticos del Dr. Quiroz.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Endoscopia", desc: "Diagnóstico de esófago, estómago y duodeno.", href: "/endoscopia-merida" },
              { name: "Colonoscopia", desc: "Prevención de cáncer colorrectal.", href: "/colonoscopia-merida" },
              { name: "Resección Endoscópica (EMR)", desc: "Remoción de pólipos y lesiones.", href: "/reseccion-endoscopica-mucosa-emr-merida" },
              { name: "Ligadura de Várices", desc: "Tratamiento de várices esofágicas.", href: "/ligadura-varices-esofagicas-merida" },
            ].map((proc) => (
              <Link
                key={proc.href}
                href={proc.href}
                className="group flex flex-col p-6 rounded-2xl border border-border bg-card hover:shadow-md hover:border-accent/30 transition-all"
              >
                <h3 className="font-serif font-bold text-foreground text-lg mb-2">
                  {proc.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                  {proc.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Ver detalles <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 10: BOTTOM CTA — bg-primary
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-primary">
        <div className="container-page section-padding">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
                ¿Necesitas coagulación con plasma de argón?
              </h2>
              <p className="text-lg text-white/80">
                Agenda tu cita directamente con el {DOCTOR.name} — te orienta
                sobre el plan de tratamiento para tu caso.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                service="coagulacion plasma argon"
                position="bottom-cta"
                procedureName="Coagulación con Plasma de Argón"
                label="Agendar por WhatsApp"
                className="sm:px-10"
              />
              <CallButton service="coagulacion plasma argon" position="bottom-cta" variant="inverse" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
