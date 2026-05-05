import { metaFor } from "@/lib/routes-seo"
import { PRICING, displayFrom, mxn, ADDITIONAL_FEES } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Link from "next/link"
import Image from "next/image"
import {
  CheckCircle2,
  Microscope,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400
export const metadata: import("next").Metadata = {
  ...metaFor("cpre"),
  other: {
    "geo.region": "MX-YUC",
    "geo.placename": "Mérida",
    "geo.position": `${CLINIC.geo.lat};${CLINIC.geo.lng}`,
    ICBM: `${CLINIC.geo.lat}, ${CLINIC.geo.lng}`,
  },
}

/* ── Related procedures for cross-sell ──────────────────────────────────── */
const relatedProcedures = [
  {
    name: "Endoscopia",
    desc: "Diagnóstico de gastritis, úlceras, reflujo y H. pylori.",
    slug: "/endoscopia-merida",
    pricingKey: "endoscopia" as const,
  },
  {
    name: "Dilatación biliar",
    desc: "Tratamiento de estenosis biliar con balón endoscópico.",
    slug: "/dilatacion-biliar-merida",
    pricingKey: "dilatacion_biliar" as const,
  },
  {
    name: "Endoprótesis biliares",
    desc: "Stents biliares para drenar la vía biliar.",
    slug: "/endoprotesis-biliares-merida",
    pricingKey: "endoprotesis_biliares" as const,
  },
]

/* ── Data for DRY rendering ────────────────────────────────────────────── */
const trustChips = [
  "Sedación con anestesiólogo",
  "Olympus + SpyGlass",
  "Sin cirugía abierta",
  "Reporte el mismo día",
]

const includedItems = [
  "Consulta pre-CPRE",
  "Sedación con anestesiólogo",
  "Duodenoscopio Olympus",
  "Fluoroscopía digital en tiempo real",
  "Reporte con fotos el mismo día",
]

export default function CprePage() {
  return (
    <>
      {/* ── JSON-LD Schema ─────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "CPRE en Mérida",
              path: "/cpre-merida",
              pricingKey: "cpre",
              description:
                "Tratamiento mínimamente invasivo de cálculos en el conducto biliar y enfermedades de las vías biliares y páncreas. Combina endoscopio especializado con fluoroscopía digital bajo sedación profunda. Procedimiento ambulatorio en Hospital Amerimed Mérida.",
              procedureType: "Therapeutic",
              bodyLocation: "Conductos biliares y páncreas",
              howPerformed:
                "Duodenoscopio especializado con fluoroscopía digital en tiempo real, bajo sedación profunda con anestesiólogo. Duración: 30–90 minutos.",
              preparation:
                "Ayuno de 8 horas, análisis de sangre (bilirrubinas, enzimas hepáticas, coagulación), acudir con acompañante.",
              followUp:
                "Observación 2–3 horas. Reposo relativo 24–48 horas. Seguimiento por WhatsApp con el Dr. Quiroz.",
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
              { name: "CPRE en Mérida", path: "/cpre-merida" },
            ])
          ),
        }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1: HERO — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            {/* ── Left: Content ── */}
            <div className="flex-1 space-y-6">
              <h1 className="font-serif font-extrabold tracking-tight text-foreground text-3xl sm:text-4xl lg:text-5xl">
                CPRE en Mérida
              </h1>

              <p className="text-xl font-semibold text-text-accent">
                {displayFrom("cpre")} · Sedación con anestesiólogo · Sin cirugía abierta
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Tratamiento directo de cálculos en el conducto biliar, estenosis biliares y obstrucciones en 30–90 minutos en Hospital Amerimed Mérida, Yucatán. Endoscopio especializado con fluoroscopía digital ve tus conductos biliares en tiempo real — sin abrir.
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
                  service="CPRE"
                  position="hero"
                  procedureName="CPRE"
                  label="Agendar por WhatsApp"
                  className="sm:px-8"
                />
                <CallButton service="CPRE" position="hero" />
              </div>

              {/* Location signal */}
              <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span>{CLINIC.address.display}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary shrink-0" />
                  <span>{CLINIC.hours.display}</span>
                </div>
              </div>
            </div>

            {/* ── Right: Price card ── */}
            <div className="w-full lg:max-w-sm">
              <div className="border-2 border-accent bg-accent/5 rounded-2xl p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <Microscope className="h-8 w-8 text-accent" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {DOCTOR.name}
                  </p>
                  <p className="font-serif font-bold text-text-accent text-3xl">
                    {displayFrom("cpre")}
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-serif font-bold text-foreground text-center">
                    Lo que incluye el precio base
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
                  ✓ Mismo equipo que hospitales privados de Cancún
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2: ¿Qué es una CPRE? — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Qué es una CPRE?
            </h2>

            <p className="text-foreground/80 leading-relaxed max-w-3xl">
              Endoscopio especializado con fluoroscopía que entra por la boca y muestra en tiempo real tus conductos biliares y pancreáticos. Trata cálculos en el conducto, estenosis biliares y obstrucciones — y coloca prótesis si es necesario, en el mismo procedimiento. 30–90 minutos bajo sedación profunda. Sin cirugía abierta, sin cortes, sin dolor.
            </p>

            <p className="text-sm text-muted-foreground max-w-3xl">
              A diferencia del ultrasonido o la tomografía, la CPRE ve directamente el interior del conducto biliar — y lo trata en la misma sesión.
            </p>

            <div className="mt-8">
              <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                ¿Qué trata la CPRE?
              </h3>
              <div className="grid gap-3 md:grid-cols-2 max-w-3xl">
                {[
                  "Cálculos atrapados en el conducto biliar",
                  "Estenosis (estrechamiento) de la vía biliar",
                  "Pancreatitis biliar aguda",
                  "Ictericia obstructiva",
                  "Fugas biliares post-cirugía de vesícula",
                  "Sospecha de tumor en vías biliares o páncreas",
                  "Drenaje biliar paliativo",
                  "Pancreatitis crónica con ictericia recurrente",
                ].map((condition) => (
                  <div key={condition} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{condition}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 max-w-3xl">
              <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                ¿CEPRE o CPRE? Es el mismo procedimiento
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                &ldquo;CEPRE&rdquo; es una variante ortográfica común que muchos pacientes ven escrita en sus indicaciones médicas. El nombre médico formal es{" "}
                <strong>colangiopancreatografía retrógrada endoscópica</strong>{" "}
                y se abrevia CPRE o ERCP (en inglés). Si tu médico te indicó cualquiera de estos términos, es exactamente el mismo procedimiento. Para estudios diagnósticos generales del estómago, el {DOCTOR.name} también realiza{" "}
                <Link href="/endoscopia-merida" className="text-primary hover:underline">
                  endoscopia en Hospital Amerimed
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3: ¿Por qué te indicaron una CPRE? — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Por qué te indicaron una CPRE?
            </h2>

            <p className="text-foreground/80 leading-relaxed max-w-3xl">
              La CPRE permite ver y tratar directamente el conducto biliar — no adivina como una radiografía o ultrasonido. Estas son las indicaciones más frecuentes que llevan a un médico a referir a CPRE:
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  Cálculos en el conducto biliar
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  La causa más común. Cuando un cálculo de la vesícula migra al conducto biliar y se atora, bloquea el flujo de bilis y causa dolor, ictericia o pancreatitis. La CPRE extrae el cálculo en una sola sesión, sin abrir el abdomen. Si tu médico vio un cálculo en tu ultrasonido y otra causa de obstrucción, esto es lo que necesitas.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  Pancreatitis biliar
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Cuando un cálculo bloquea la salida del conducto pancreático, el páncreas se inflama de forma aguda. Es una urgencia médica. La CPRE retira el cálculo y descomprime el conducto en menos de 24 horas — evita la progresión a pancreatitis necrosante.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  Estenosis (estrechamiento) biliar
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Las vías biliares pueden estrecharse por inflamación crónica, cirugía previa de vesícula o tumores. La CPRE permite dilatarlas con balón y, si es necesario, colocar una prótesis (stent) que mantenga el conducto abierto. Diagnóstico y tratamiento en la misma sesión.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  Sospecha de tumor — biopsia y diagnóstico
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Cuando hay ictericia inexplicable o dilatación de la vía biliar en imágenes, la CPRE permite tomar biopsias del conducto y, si hay obstrucción tumoral, colocar una prótesis paliativa para drenar la bilis. Equipo Olympus + SpyGlass para visualización directa cuando los estudios convencionales no son concluyentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4: CPRE vs cirugía vs observación — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿CPRE o cirugía abierta? Compara las opciones
            </h2>

            <p className="text-foreground/80 leading-relaxed max-w-3xl">
              Si tu médico te indicó una CPRE, es porque las otras opciones no resuelven el problema o requieren una intervención mayor. Esta es la diferencia:
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  Cirugía abierta
                </h3>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  Apertura del abdomen para acceder al conducto biliar. 5–7 días de hospitalización, 4–6 semanas de recuperación, cicatriz permanente. Se reserva para casos donde la CPRE no es posible.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  Laparoscopía
                </h3>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  3–4 incisiones pequeñas. Útil para colecistectomía (extraer la vesícula) pero limitada para tratar el conducto biliar mismo. 2–3 semanas de recuperación.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  Observación / esperar
                </h3>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  Riesgo de progresión: pancreatitis, colangitis (infección biliar grave), cirrosis biliar secundaria. No es una opción cuando hay obstrucción confirmada.
                </p>
              </div>

              <div className="rounded-xl border-2 border-accent bg-accent/5 p-6">
                <h3 className="font-serif font-semibold text-lg text-text-accent mb-4">
                  CPRE
                </h3>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  Sin cortes, sin abrir el abdomen. Diagnóstica y trata en la misma sesión. Alta el mismo día en casos simples. Recuperación de 24–48 horas. La opción mínimamente invasiva cuando está indicada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5: PRECIOS — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section id="precio-cpre-merida" className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                Precio de CPRE en Mérida — desde {mxn(PRICING.cpre.from)}
              </h2>
              <p className="text-muted-foreground">
                ¿Cuánto cuesta una CPRE? Mismo equipo que hospitales privados de Cancún — al precio justo de Mérida
              </p>
            </div>

            {/* Three-column comparison */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 rounded-2xl border border-border text-center">
                <p className="text-lg font-bold text-muted-foreground mb-2">
                  Hospital privado en Cancún
                </p>
                <p className="text-2xl font-bold text-muted-foreground line-through">
                  $40,000+ MXN
                </p>
                <p className="text-sm text-muted-foreground/70 mt-2">
                  + estudios + traslado
                </p>
              </div>

              <div className="p-6 rounded-2xl border-2 border-accent bg-accent/5 text-center">
                <p className="text-lg font-bold text-text-accent mb-2">
                  {DOCTOR.name}
                </p>
                <p className="font-serif font-bold text-text-accent text-3xl">
                  {displayFrom("cpre")}
                </p>
                <p className="text-sm text-accent/80 mt-2">Precio base — sin sorpresas</p>
              </div>

              <div className="p-6 rounded-2xl border border-border text-center">
                <p className="text-lg font-bold text-muted-foreground mb-2">
                  IMSS / ISSSTE
                </p>
                <p className="text-2xl font-bold text-muted-foreground">
                  &ldquo;Gratis&rdquo;
                </p>
                <p className="text-sm text-muted-foreground/70 mt-2">
                  2–6 meses espera
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-muted border border-border p-6 mt-8 max-w-4xl mx-auto">
              <h3 className="font-serif font-semibold text-foreground mb-2">
                ¿Por qué pocos hospitales hacen CPRE?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                La CPRE requiere infraestructura altamente especializada: duodenoscopio dedicado, fluoroscopía digital en tiempo real, sala de quirófano con anestesiólogo y endoscopista con entrenamiento avanzado. Por eso muchos hospitales de la península de Yucatán refieren estos casos a especialistas en Mérida — incluyendo pacientes de Cancún, Playa del Carmen y Campeche que viajan al Hospital Amerimed Mérida, Yucatán.
              </p>
            </div>

            {/* What's included */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-serif font-bold text-foreground mb-6 text-center">
                ¿Qué incluye el precio base de tu CPRE?
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
              <p className="text-sm text-muted-foreground mt-6 max-w-3xl mx-auto text-center">
                Costos adicionales posibles si se requiere intervención terapéutica: esfinterotomía, extracción de cálculos múltiples, colocación de prótesis biliar (plástica o metálica), o uso de SpyGlass. Todo se cotiza antes del procedimiento.
              </p>
            </div>

            <div className="text-center mt-8">
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
          SECTION 6: ¿Cómo es el procedimiento? — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section id="preparacion-cpre" className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Cómo es el procedimiento de una CPRE?
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-4">
                  Antes
                </h3>
                <ul className="space-y-2 text-sm text-foreground/80 text-left list-disc list-inside">
                  <li>Ayuno de 8 horas</li>
                  <li>Análisis de sangre: bilirrubinas, enzimas hepáticas, coagulación</li>
                  <li>Llegar acompañado(a)</li>
                  <li>No suspender medicamentos sin indicación</li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-4">
                  Durante el procedimiento
                </h3>
                <ul className="space-y-2 text-sm text-foreground/80 text-left list-disc list-inside">
                  <li>Sedación profunda con anestesiólogo — no hay dolor</li>
                  <li>Endoscopio especializado por boca — 30–90 minutos</li>
                  <li>Fluoroscopía digital en tiempo real</li>
                  <li>Si hay cálculo o estenosis, se trata en la misma sesión</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-4">
                  Después
                </h3>
                <ul className="space-y-2 text-sm text-foreground/80 text-left list-disc list-inside">
                  <li>Recuperación 2–3 horas en hospital</li>
                  <li>El doctor te muestra imágenes y explica hallazgos</li>
                  <li>Reporte digital con fotos el mismo día</li>
                  <li>Reposo relativo 24–48 horas</li>
                  <li>Si biopsia: patología en 5–10 días</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent/10 border border-accent/20">
                <Clock className="h-5 w-5 text-accent" />
                <span className="font-semibold text-foreground">
                  Duración total:
                </span>
                <span className="text-muted-foreground">
                  30–90 min procedimiento + 2–3 hr recuperación
                </span>
              </div>
            </div>

            {/* Fear-reassurance cards */}
            <div className="grid gap-6 md:grid-cols-2 mt-12">
              <div className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  ¿Duele la CPRE?
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  No. Se realiza con sedación profunda administrada por un anestesiólogo certificado. No sentirás dolor ni reflejo de náusea. La mayoría de los pacientes despiertan sin recordar nada del procedimiento. Después puedes tener leve molestia en la garganta o sensación de hinchazón abdominal que desaparece en pocas horas.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                  ¿Es peligrosa la CPRE?
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  La CPRE es más compleja que una endoscopia convencional pero sigue siendo segura en manos experimentadas. El riesgo más común es pancreatitis post-CPRE (2–5% de los casos), que se resuelve con manejo médico en 24–72 horas. El sangrado y la perforación son poco frecuentes (menos del 1%). El {DOCTOR.name} es endoscopista y cirujano — si surge una complicación, puede resolverla sin referirte a otro especialista.
                </p>
              </div>
            </div>

            {/* Results timeline */}
            <div className="rounded-xl bg-background border border-border p-6 mt-6">
              <h3 className="font-serif font-semibold text-foreground mb-4">
                ¿Cuándo recibo los resultados?
              </h3>
              <div className="grid gap-4 md:grid-cols-2 text-sm text-foreground/80">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Mismo día:</strong> Reporte con fotos HD de hallazgos y plan de seguimiento</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">5–10 días:</strong> Resultado de patología (si hubo biopsias)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Seguimiento:</strong> Por WhatsApp con el {DOCTOR.name} para dudas post-procedimiento</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Control:</strong> 2–4 semanas según hallazgos y si se colocó prótesis</span>
                </div>
              </div>
              <p className="text-sm text-foreground/80 mt-4">
                Si durante la CPRE se identifica estenosis persistente o se requiere recambio de prótesis, contamos con equipo propio para realizar{" "}
                <Link href="/dilatacion-biliar-merida" className="text-primary hover:underline">dilatación biliar</Link>
                {" "}y{" "}
                <Link href="/endoprotesis-biliares-merida" className="text-primary hover:underline">colocación de endoprótesis biliares</Link>
                {" "}sin referirte a otro especialista.
              </p>
            </div>

            {/* Warning signs callout */}
            <div className="rounded-xl bg-muted border border-border p-6 mt-6">
              <p className="text-foreground/80 leading-relaxed">
                <strong className="text-foreground">Señales de alarma post-CPRE:</strong>{" "}
                fiebre mayor a 38°C, dolor abdominal intenso o vómito persistente — contacta inmediatamente al {DOCTOR.name} por WhatsApp o llama al{" "}
                <a href={`tel:${CLINIC.phone.e164}`} className="text-primary font-medium">{CLINIC.phone.display}</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7: TU ENDOSCOPISTA — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
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
                  Tu endoscopista en Hospital Amerimed: {DOCTOR.name}
                </h2>
                <p className="text-primary font-medium text-sm mt-1">
                  Endoscopista Gastrointestinal y Cirujano General
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { value: "1,000+", label: "Procedimientos endoscópicos al año", color: "text-accent" },
                { value: "15+", label: "Años experiencia en Mérida, Yucatán", color: "text-primary" },
                { value: "98%", label: "Sin complicaciones serias", color: "text-accent" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl border border-border bg-muted"
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
              <div className="space-y-3">
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
                  {DOCTOR.bioShort} Como endoscopista y cirujano, el {DOCTOR.name} maneja complicaciones de CPRE sin necesidad de referir a otro especialista. Pacientes de Valladolid, Campeche, Playa del Carmen y Cancún acuden por experiencia en casos complejos.
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
          SECTION 8: GOOGLE REVIEWS — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <GoogleReviews />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 9: ¿Duele la CPRE? — Crawlable Safety H2 — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Duele la CPRE? Lo Que Debes Saber Sobre la Sedación
            </h2>

            <p className="text-foreground/80 leading-relaxed max-w-3xl">
              No duele. Utilizamos sedación profunda intravenosa administrada por anestesiólogo certificado — no sentirás dolor ni reflejo de náusea. La mayoría de los pacientes no recuerdan nada del procedimiento y despiertan cómodamente.
            </p>

            <p className="text-foreground/80 leading-relaxed max-w-3xl">
              El anestesiólogo monitorea tus signos vitales continuamente durante todo el estudio. Al despertar, puedes tener leve incomodidad en la garganta y sensación de hinchazón abdominal — ambas desaparecen solas en pocas horas. La recuperación toma 2–3 horas en sala del hospital antes del alta.
            </p>

            <h3 className="font-serif font-semibold text-lg text-foreground">
              ¿Es Peligrosa la CPRE?
            </h3>

            <p className="text-foreground/80 leading-relaxed max-w-3xl">
              La CPRE es más compleja que una endoscopia convencional, pero es segura en manos experimentadas. El riesgo más descrito es pancreatitis post-CPRE — una inflamación temporal del páncreas que ocurre en 2–5% de los casos y se resuelve con manejo médico en 24–72 horas. El sangrado y la perforación son poco frecuentes (menos del 1%). El {DOCTOR.name} es endoscopista y cirujano — si surge una complicación, puede resolverla sin necesidad de referirte a otro especialista.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 10: DISAMBIGUATION + POR QUÉ REFERIDA — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              CPRE en Mérida: Preguntas Comunes
            </h2>

            <div className="space-y-6">
              <h3 className="font-serif font-semibold text-lg text-foreground">
                ¿CEPRE, CPRE o ERCP? Es el Mismo Procedimiento
              </h3>
              <p className="text-foreground/80 leading-relaxed max-w-3xl">
                Tres nombres para el mismo estudio: <strong>CPRE</strong> (colangiopancreatografía retrógrada endoscópica) es el término médico formal en español. <strong>CEPRE</strong> es una variante ortográfica común que aparece en muchas indicaciones médicas. <strong>ERCP</strong> es el acrónimo en inglés. Si tu médico te indicó cualquiera de estos términos, es exactamente el mismo procedimiento. En Endoscopia del Mayab el precio es {displayFrom("cpre")} sin importar cómo lo solicites.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="font-serif font-semibold text-lg text-foreground">
                ¿Por Qué los Hospitales de la Península Refieren CPRE a Mérida, Yucatán?
              </h3>

              <p className="text-foreground/80 leading-relaxed max-w-3xl">
                La CPRE requiere infraestructura altamente especializada que pocos hospitales de la península de Yucatán tienen. Cuando un hospital de Cancún, Playa del Carmen, Campeche o Valladolid no puede realizar el procedimiento, refiere al paciente a un endoscopista en Mérida. Esto es lo que necesitas para una CPRE segura:
              </p>

              <ul className="space-y-2 max-w-3xl">
                {[
                  `Endoscopista certificado con entrenamiento avanzado en vías biliares — el ${DOCTOR.name} cuenta con cédula de alta especialidad EGI230072`,
                  "Duodenoscopio dedicado (no cualquier endoscopio sirve)",
                  "Fluoroscopía digital en tiempo real durante todo el procedimiento",
                  "Sala de quirófano con anestesiólogo y equipo de respuesta inmediata",
                  "Tecnología SpyGlass para casos complejos donde otros estudios no son concluyentes",
                  "Hospital con sala de recuperación de 2–24 horas según el caso",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              <WhatsAppButton
                service="CPRE"
                position="disambiguation"
                procedureName="CPRE"
                label="Agendar por WhatsApp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 11: FAQ — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <Faq routeKey="cpre" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 12: RELATED PROCEDURES — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif font-bold tracking-tight text-foreground text-2xl md:text-3xl mb-2">
            Otros procedimientos
          </h2>
          <p className="text-muted-foreground mb-8">
            ¿Tu CPRE puede requerir dilatación o colocación de prótesis? Ambos procedimientos se realizan en la misma sesión cuando está indicado — sin segunda intervención.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedProcedures.map((proc) => (
              <Link
                key={proc.slug}
                href={proc.slug}
                className="group flex flex-col p-6 rounded-2xl border border-border bg-background hover:shadow-md hover:border-accent/30 transition-all"
              >
                <h3 className="font-serif font-bold text-foreground text-lg mb-2">
                  {proc.name}
                </h3>
                <p className="font-serif font-bold text-text-accent text-xl mb-2">
                  {displayFrom(proc.pricingKey)}
                </p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                  {proc.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Ver detalles <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
            >
              Ver todos los servicios <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 13: BOTTOM CTA — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                ¿Listo para agendar tu CPRE?
              </h2>
              <p className="text-lg text-muted-foreground">
                Envía tu ultrasonido y laboratorios por WhatsApp. El {DOCTOR.name} revisa tu caso y te confirma si la CPRE es necesaria antes de agendar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                service="CPRE"
                position="bottom-cta"
                procedureName="CPRE"
                label="Agendar por WhatsApp"
                className="sm:px-10"
              />
              <CallButton service="CPRE" position="bottom-cta" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-xl bg-muted border border-border">
                <p className="font-semibold text-foreground mb-1">
                  ¿Primera CPRE?
                </p>
                <p className="text-sm text-muted-foreground">
                  Consulta de valoración {mxn(ADDITIONAL_FEES.consultation.amount)} con el {DOCTOR.name} en Mérida, Yucatán — revisa tus estudios, confirma si la CPRE es necesaria y te da cotización exacta.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-muted border border-border">
                <p className="font-semibold text-foreground mb-1">
                  Pacientes de toda la península
                </p>
                <p className="text-sm text-muted-foreground">
                  Atendemos pacientes de Cancún, Playa del Carmen, Tulum y Campeche en Hospital Amerimed Mérida, Yucatán.{" "}
                  <Link href="/cpre-playa-del-carmen" className="text-primary hover:underline">
                    Información para Quintana Roo
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
