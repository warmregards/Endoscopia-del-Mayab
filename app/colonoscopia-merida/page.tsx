import { metaFor } from "@/lib/routes-seo"
import { PRICING, displayFrom, mxn, ADDITIONAL_FEES, INCLUDED_IN_PRICE } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Link from "next/link"
import {
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  Clock,
  MapPin,
} from "lucide-react"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400
export const metadata = metaFor("colonoscopia")

/* ── Data for DRY rendering ────────────────────────────────────────────── */

const trustChips = [
  "Sedación sin dolor",
  "Olympus 190 HD",
  "Hospital Amerimed",
  "Biopsias incluidas",
]

const includedItems = [
  ...INCLUDED_IN_PRICE,
  "Colonoscopia con equipo Olympus 190 HD",
]

const preventionItems = [
  "Primera colonoscopia: a partir de los 45 años",
  "Antecedentes familiares: 10 años antes del caso familiar",
  "Colon limpio sin hallazgos: repetir cada 10 años",
  "Pólipos encontrados: repetir cada 3–5 años según tipo",
]

const symptomItems = [
  "Sangrado rectal o heces con sangre",
  "Cambio en hábitos intestinales que persiste más de 4 semanas",
  "Dolor abdominal recurrente con pérdida de peso involuntaria",
  "Anemia ferropénica sin causa identificada",
]

const stats = [
  { value: "300+", label: "Colonoscopias anuales", color: "text-text-accent" },
  { value: "15+", label: "Años experiencia", color: "text-primary" },
  { value: "<0.1%", label: "Complicaciones", color: "text-text-accent" },
]

const differentiators = [
  {
    title: "Comunicación directa",
    desc: "Hablas con el Dr. Quiroz, no con residentes.",
  },
  {
    title: "Equipo propio Olympus HD",
    desc: "Sin intermediarios hospitalarios, precio justo.",
  },
  {
    title: "Hospital Amerimed Mérida",
    desc: "Quirófano certificado con equipo completo.",
  },
  {
    title: "Seguimiento personal",
    desc: "Resultados y dudas por WhatsApp directo.",
  },
]

/* ══════════════════════════════════════════════════════════════════════════ */

export default function ColonoscopiaPage() {
  return (
    <>
      {/* ── JSON-LD: MedicalProcedure ───────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "Colonoscopia",
              path: "/colonoscopia-merida",
              pricingKey: "colonoscopia",
              description:
                "Estudio del colon y recto con cámara flexible Olympus HD para prevención y detección de cáncer colorrectal, pólipos, divertículos e inflamación. Incluye sedación con anestesiólogo.",
              procedureType: "Diagnostic",
              bodyLocation: "Colon y recto",
              howPerformed:
                "Colonoscopio flexible Olympus 190 HD introducido bajo sedación consciente. Duración: 20–40 minutos.",
              preparation:
                "Dieta líquida clara el día anterior. Laxante dividido en 2 tomas. Ayuno el día del estudio. Acudir con acompañante.",
              followUp:
                "Colon normal: repetir en 10 años. Pólipos: control en 3–5 años.",
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
              { name: "Colonoscopia en Mérida", path: "/colonoscopia-merida" },
            ])
          ),
        }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1: HERO — bg-background
          Serves: ALL personas. Price + CTA above fold.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
            {/* ── Left: Content ── */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-text-accent">
                Prevención de cáncer colorrectal
              </div>

              <h1 className="font-serif font-extrabold tracking-tight text-foreground text-3xl sm:text-4xl lg:text-5xl">
                Colonoscopia en Mérida — {displayFrom("colonoscopia")}
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Estudio del colon con sedación — sin dolor, precio fijo,
                resultados el mismo día.
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
                  service="colonoscopia"
                  position="hero"
                  procedureName="Colonoscopia"
                  label="Agendar por WhatsApp"
                  className="sm:px-8"
                />
                <CallButton
                  service="colonoscopia"
                  position="hero"
                  variant="ghost"
                />
              </div>

              {/* Location — NAP signal */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>{CLINIC.address.display}</span>
              </div>
            </div>

            {/* ── Right: Price card — Persona 2 (price shopper) ── */}
            <div className="w-full lg:max-w-sm">
              <div className="border border-border bg-card rounded-2xl shadow-md p-6 space-y-6">
                <div className="text-center space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    {DOCTOR.name}
                  </p>
                  <p className="font-serif font-bold text-text-accent text-2xl md:text-3xl">
                    {mxn(PRICING.colonoscopia.from)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Precio fijo — todo incluido
                  </p>
                </div>

                <div className="space-y-4">
                  {includedItems.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-accent-light rounded-xl p-4">
                  <p className="text-sm text-foreground/80">
                    Lecturas de patología:{" "}
                    <span className="font-semibold">
                      {mxn(ADDITIONAL_FEES.biopsy.amount)}
                    </span>{" "}
                    adicional solo si se requieren biopsias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2: WHAT IS + WHEN — bg-muted
          Serves: Persona 5 (investigator) + Persona 3 (procedure seeker)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Qué es la colonoscopia y cuándo se necesita?
            </h2>

            <div className="space-y-4 max-w-3xl">
              <p className="text-foreground/80 leading-relaxed">
                La colonoscopia es un estudio que revisa el interior del colon y
                recto con una cámara flexible de alta definición. Permite
                detectar y extirpar pólipos antes de que se conviertan en cáncer
                — en la misma sesión, sin necesidad de una segunda intervención.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                Según guías internacionales de gastroenterología, el 90% de los
                casos de cáncer colorrectal son curables con detección temprana
                mediante colonoscopia de tamizaje. Cuando se detecta en etapa
                avanzada, la supervivencia baja al 14%. La colonoscopia es la
                única prueba que detecta y trata en el mismo procedimiento.
              </p>
            </div>

            {/* Indication cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                  <h3 className="font-serif font-semibold text-foreground text-lg">
                    Tamizaje preventivo
                  </h3>
                </div>
                <ul className="space-y-4 text-sm text-foreground/80">
                  {preventionItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  <h3 className="font-serif font-semibold text-foreground text-lg">
                    Síntomas que requieren colonoscopia
                  </h3>
                </div>
                <ul className="space-y-4 text-sm text-foreground/80">
                  {symptomItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cross-links */}
            <p className="text-sm text-muted-foreground">
              ¿Síntomas digestivos altos (reflujo, gastritis)?{" "}
              <Link
                href="/endoscopia-merida"
                className="text-primary hover:underline"
              >
                Endoscopia en Mérida
              </Link>
              . ¿Ictericia u obstrucción biliar?{" "}
              <Link
                href="/cpre-merida"
                className="text-primary hover:underline"
              >
                CPRE en Mérida
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3: PRICING — bg-background
          Serves: Persona 2 (price shopper) — highest-value persona
          ══════════════════════════════════════════════════════════════════ */}
      <section id="precio-colonoscopia-merida" className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                Precio de colonoscopia en Mérida:{" "}
                {mxn(PRICING.colonoscopia.from)} todo incluido
              </h2>
              <p className="text-muted-foreground mt-2">
                Precio fijo con todo incluido. Sin cargos ocultos.
              </p>
            </div>

            {/* 3-column comparison */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-border text-center">
                <p className="text-lg font-bold text-muted-foreground mb-2">
                  Hospital privado típico
                </p>
                <p className="text-2xl font-bold text-muted-foreground">
                  Desde $8,000 MXN
                </p>
                <p className="text-sm text-muted-foreground/70 mt-2">
                  + anestesia, + patología, + recuperación por separado
                </p>
              </div>

              <div className="p-6 rounded-2xl border-2 border-accent bg-accent-light text-center">
                <p className="text-lg font-bold text-text-accent mb-2">
                  {DOCTOR.name}
                </p>
                <p className="font-serif font-bold text-text-accent text-3xl">
                  {mxn(PRICING.colonoscopia.from)}
                </p>
                <p className="text-sm text-accent/80 mt-2">Todo incluido</p>
              </div>

              <div className="p-6 rounded-2xl border border-border text-center">
                <p className="text-lg font-bold text-muted-foreground mb-2">
                  IMSS / Sector público
                </p>
                <p className="text-2xl font-bold text-muted-foreground">
                  Sin costo directo
                </p>
                <p className="text-sm text-muted-foreground/70 mt-2">
                  Lista de espera: 3–12 meses
                </p>
              </div>
            </div>

            {/* Biopsy differentiator */}
            <div className="bg-accent-light border border-accent/20 rounded-xl p-6">
              <p className="text-foreground/80 leading-relaxed">
                <span className="font-semibold text-foreground">
                  Biopsias sin límite con tarifa única.
                </span>{" "}
                Otros proveedores cobran por cada biopsia tomada — si necesitas
                3, pagas 3 veces. Con nosotros pagas una sola vez, sin importar
                cuántas biopsias se requieran.
              </p>
            </div>

            {/* GEO definitive paragraph */}
            <p className="text-muted-foreground leading-relaxed">
              Una colonoscopia en Mérida con el {DOCTOR.name} en{" "}
              {CLINIC.name} cuesta desde {mxn(PRICING.colonoscopia.from)}. El
              precio incluye valoración pre-procedimiento, sedación con
              anestesiólogo, equipo Olympus 190 HD, extracción de pólipos
              pequeños y reporte con fotografías. El único costo adicional
              posible es la lectura de patología ({mxn(ADDITIONAL_FEES.biopsy.amount)}) si
              se toman biopsias.{" "}
              <Link href="/precios" className="text-primary hover:underline font-medium">
                Ver todos los precios
              </Link>
            </p>

            {/* Additional cost note */}
            <div className="bg-muted rounded-xl p-4">
              <p className="text-sm text-muted-foreground">
                Único costo adicional posible: lectura de patología (biopsias)
                por {mxn(ADDITIONAL_FEES.biopsy.amount)}, solo si el {DOCTOR.name} toma
                muestras durante el estudio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4: STEP-BY-STEP PROCESS — bg-muted
          Serves: Persona 5 (investigator) + Persona 3 (procedure seeker)
          Sedation comfort content folded into step 2.
          ══════════════════════════════════════════════════════════════════ */}
      <section id="preparacion-colonoscopia" className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Cómo es el proceso de una colonoscopia?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-4">
                  Preparación (día anterior)
                </h3>
                <ul className="space-y-4 text-sm text-foreground/80 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Dieta líquida clara todo el día — evitar líquidos rojos o
                      morados
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Laxante en dos tomas (tarde y madrugada) según indicación
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Abundantes líquidos claros para mantenerte hidratado
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Instrucciones personalizadas por WhatsApp</span>
                  </li>
                </ul>
              </div>

              {/* Step 2 — includes sedation comfort content */}
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-4">
                  Procedimiento (20–40 min)
                </h3>
                <ul className="space-y-4 text-sm text-foreground/80 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Llegas con acompañante al Hospital Amerimed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Sedación con anestesiólogo — no sentirás absolutamente
                      nada
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      El {DOCTOR.name} examina tu colon completo con Olympus 190
                      HD
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Si encuentra pólipos, los extrae en la misma sesión
                    </span>
                  </li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-4">
                  Recuperación (30–45 min)
                </h3>
                <ul className="space-y-4 text-sm text-foreground/80 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Despiertas gradualmente en sala de recuperación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      El {DOCTOR.name} te muestra fotos y explica hallazgos
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Reporte digital con imágenes HD el mismo día</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Te vas caminando — actividades normales al día siguiente
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Recovery callout */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-accent/10 border border-accent/20">
                <Clock className="h-4 w-4 text-accent" />
                <span className="font-semibold text-foreground">
                  Tiempo total en hospital: aproximadamente 2 horas.
                </span>
                <span className="text-muted-foreground">
                  Te vas el mismo día.
                </span>
              </div>
            </div>

            {/* Pain reassurance — targets "duele la colonoscopia" P5 snippet */}
            <div className="rounded-xl bg-accent-light border border-accent/20 p-6 max-w-3xl mx-auto">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                ¿Duele la colonoscopia?
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                No. La colonoscopia se realiza bajo sedación profunda con
                anestesiólogo — estás completamente dormido durante todo el
                procedimiento. No sientes dolor, no sientes incomodidad, y la
                mayoría de los pacientes no recuerdan nada al despertar. La parte
                más incómoda es la preparación intestinal del día anterior, no el
                procedimiento en sí.
              </p>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              ¿Más dudas sobre la preparación?{" "}
              <a
                href="#faqs-colonoscopia"
                className="text-primary hover:underline"
              >
                Consulta las preguntas frecuentes
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5: WHY DR. QUIROZ — bg-background
          Serves: Persona 4 (referred) + local SEO entity signals
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Por qué elegir al Dr. Quiroz para tu colonoscopia?
            </h2>

            <p className="text-foreground/80 leading-relaxed max-w-3xl">
              El <Link href="/dr-omar-quiroz" className="text-primary hover:underline">{DOCTOR.name}</Link> es endoscopista certificado con alta especialidad en endoscopia gastrointestinal y más de 15
              años de experiencia en Mérida. Realiza más de 300 colonoscopias al
              año con equipo Olympus 190 HD en Hospital Amerimed Mérida, Yucatán, con
              tasa de complicaciones menor al 0.1%.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
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

            {/* Differentiators grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differentiators.map((d) => (
                <div
                  key={d.title}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <h3 className="font-serif font-semibold text-foreground mb-2">
                    {d.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{d.desc}</p>
                </div>
              ))}
            </div>

            {/* Neighborhoods from CLINIC.areaServed */}
            <p className="text-sm text-muted-foreground">
              Atiende pacientes de García Ginerés, Montebello, Altabrisa y toda
              la zona metropolitana de Mérida en su consultorio de Chichi
              Suárez.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6: RESULTS & FOLLOW-UP — bg-muted
          Serves: Persona 3 (procedure seeker) + Persona 5 (investigator)
          ══════════════════════════════════════════════════════════════════ */}
      <section id="resultados-y-tiempos" className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight">
              Resultados: explicación con fotos al despertar
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left — Timeline cards */}
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-serif font-semibold text-foreground mb-2">
                    Al despertar
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    El {DOCTOR.name} te muestra las fotos de tu colon y explica
                    lo que encontró mientras despiertas de la sedación. Sin
                    esperas, sin incertidumbre.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-serif font-semibold text-foreground mb-2">
                    Mismo día
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Recibes reporte digital completo con imágenes HD, ubicación
                    de hallazgos y recomendaciones de seguimiento.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-serif font-semibold text-foreground mb-2">
                    5–7 días (solo si hubo biopsias)
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Si se tomaron biopsias, los resultados de patología se
                    entregan en 5–7 días. El {DOCTOR.name} te contacta
                    personalmente por WhatsApp para explicar los resultados y
                    definir el siguiente paso.
                  </p>
                </div>
              </div>

              {/* Right — Follow-up schedule */}
              <div className="bg-accent-light rounded-2xl p-6">
                <h3 className="font-serif font-semibold text-foreground mb-6">
                  Calendario de seguimiento
                </h3>
                <ul className="space-y-4 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Colon completamente limpio → próxima colonoscopia en 10
                      años
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Pólipos hiperplásicos (bajo riesgo) → repetir en 5–10 años
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Pólipos adenomatosos → repetir en 3–5 años según número y
                      tamaño
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Displasia de alto grado → seguimiento cercano definido por
                      el {DOCTOR.name}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cross-links */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                ¿Necesitas también revisar esófago y estómago?{" "}
                <Link
                  href="/endoscopia-merida"
                  className="text-primary hover:underline"
                >
                  Conoce la endoscopia en Mérida
                </Link>
              </p>
              <p>
                ¿Más dudas sobre el procedimiento?{" "}
                <a
                  href="#faqs-colonoscopia"
                  className="text-primary hover:underline"
                >
                  Revisa las preguntas frecuentes
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7: GOOGLE REVIEWS
          Serves: All personas — real social proof
          Component wraps itself in <section> with own bg/padding.
          ══════════════════════════════════════════════════════════════════ */}
      <GoogleReviews />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 8: FAQ — bg-muted
          Serves: Persona 5 (investigator) + Persona 2 (price)
          Component injects faqSchema() JSON-LD automatically.
          ══════════════════════════════════════════════════════════════════ */}
      <section id="faqs-colonoscopia" className="bg-muted">
        <Faq routeKey="colonoscopia" service="colonoscopia" />
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 9: BOTTOM CTA — bg-primary
          Serves: ALL personas. Final conversion capture.
          ══════════════════════════════════════════════════════════════════ */}
      <section id="contacto-colonoscopia" className="bg-primary">
        <div className="container-page section-padding">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
                ¿Listo para agendar tu colonoscopia?
              </h2>
              <p className="text-white/80 mt-2">
                En {CLINIC.name}, el {DOCTOR.name} te contesta personalmente por
                WhatsApp. Citas disponibles esta semana.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                service="colonoscopia"
                position="bottom-cta"
                procedureName="Colonoscopia"
                label="Agendar por WhatsApp"
                className="sm:px-10"
              />
              <CallButton
                service="colonoscopia"
                position="bottom-cta"
                variant="inverse"
              />
            </div>

            <address className="not-italic text-sm text-white/60">
              {CLINIC.name} · {CLINIC.phone.display} ·{" "}
              {CLINIC.address.display}
            </address>
          </div>
        </div>
      </section>
    </>
  )
}
