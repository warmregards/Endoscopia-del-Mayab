import { metaFor } from "@/lib/routes-seo"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400

export const metadata = metaFor("eus")

/* ── Data for DRY rendering ────────────────────────────────────────────── */

const trustChips = [
  "Diagnóstico avanzado",
  "Sedación con anestesiólogo",
  "Hospital Amerimed",
  "Dr. Omar Quiroz responde",
]

const WA_MESSAGE =
  "Hola, me indicaron un ultrasonido endoscópico. ¿Está disponible con el Dr. Quiroz?"

const indications = [
  "Lesiones o tumores en el páncreas",
  "Cálculos en el conducto biliar no visibles en ultrasonido convencional",
  "Estadificación de cáncer esofágico, gástrico o rectal",
  "Evaluación de lesiones submucosas del tubo digestivo",
  "Punción-biopsia guiada por imagen (USE-PAAF)",
  "Evaluación de vías biliares antes de una CPRE",
]

const stats = [
  { value: "15+", label: "Años experiencia", color: "text-primary" },
  { value: "300+", label: "Procedimientos anuales", color: "text-accent" },
  { value: "<0.1%", label: "Complicaciones", color: "text-accent" },
]

/* ══════════════════════════════════════════════════════════════════════════ */

export default function UltrasonidoEndoscopicoPage() {
  return (
    <>
      {/* ── JSON-LD: MedicalProcedure ───────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "Ultrasonido Endoscópico en Mérida",
              path: "/ultrasonido-endoscopico-merida",
              description:
                "Estudio endoscópico con ultrasonido integrado para diagnóstico de alta resolución de páncreas, vías biliares y tumores del tubo digestivo. Realizado con sedación por el Dr. Omar Quiroz en Hospital Amerimed, Mérida.",
              bodyLocation: "Tracto gastrointestinal superior",
              howPerformed:
                "Endoscopio con transductor de ultrasonido introducido por vía oral bajo sedación.",
              preparation:
                "Ayuno de 6 a 8 horas. Suspender anticoagulantes según indicación médica.",
              followUp:
                "Reposo el día del procedimiento. Actividad normal al día siguiente.",
              procedureType: "Diagnostic",
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
              {
                name: "Ultrasonido Endoscópico en Mérida",
                path: "/ultrasonido-endoscopico-merida",
              },
            ])
          ),
        }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1: HERO — bg-background
          Quote-only: no price card, single-column layout
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light border border-accent/20 text-sm font-medium text-foreground">
              Precio bajo cotización · Consulta tu caso
            </div>

            <h1 className="font-serif font-extrabold tracking-tight text-foreground text-3xl sm:text-4xl lg:text-5xl">
              Ultrasonido Endoscópico en Mérida
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Diagnóstico de alta resolución para páncreas, vías biliares y
              tumores digestivos — sin necesidad de cirugía exploratoria.
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

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                service="eus"
                position="hero"
                message={WA_MESSAGE}
                label="Consultar disponibilidad"
                className="sm:px-8"
              />
              <CallButton service="eus" position="hero" variant="ghost" />
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span>{CLINIC.address.display}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2: DEFINITION — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Qué es el ultrasonido endoscópico?
            </h2>

            <p className="text-foreground/80 leading-relaxed">
              El ultrasonido endoscópico (USE o EUS) combina un endoscopio
              flexible con un transductor de ultrasonido miniaturizado. A
              diferencia del ultrasonido abdominal convencional — que se realiza
              desde afuera del cuerpo y se ve limitado por huesos, gas intestinal
              y distancia — el USE coloca el transductor directamente dentro del
              tubo digestivo, a milímetros del tejido que se quiere evaluar.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              Esto permite obtener imágenes de alta resolución del páncreas, las
              vías biliares, las paredes del esófago, estómago y duodeno, los
              ganglios linfáticos mediastínicos y las lesiones submucosas — estructuras
              que otros estudios de imagen no pueden detallar con la misma
              precisión. Cuando se requiere, el USE también permite tomar biopsias
              guiadas por imagen de tejidos profundos (USE-PAAF).
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3: INDICATIONS — bg-background
          6-item icon list
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                ¿Cuándo está indicado?
              </h2>
              <p className="text-muted-foreground">
                Tu médico puede indicar un ultrasonido endoscópico cuando
                necesita información que otros estudios no pueden proporcionar.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {indications.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4: AVAILABILITY — bg-muted
          Unique demand-validation section
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              Ultrasonido endoscópico en Mérida — sin viajar a otra ciudad
            </h2>

            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                Hasta hace poco, los pacientes de la Península de Yucatán tenían
                que viajar a Ciudad de México o Monterrey para realizarse este
                estudio. El Dr. Omar Quiroz está incorporando el ultrasonido
                endoscópico a su práctica en Hospital Amerimed.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                Si tu médico te indicó este estudio, escríbenos. El Dr. Quiroz
                evalúa tu caso directamente y te confirma disponibilidad y costo.
              </p>
            </div>

            <div className="rounded-xl bg-accent-light border border-accent/20 p-6">
              <p className="text-sm text-foreground/80 leading-relaxed">
                Recibimos pacientes de Cancún, Playa del Carmen, Campeche,
                Valladolid, Chetumal y toda la Península de Yucatán. El costo
                depende del tipo de estudio (diagnóstico o con punción guiada) y
                se confirma en la consulta previa.
              </p>
            </div>

            <WhatsAppButton
              service="eus"
              position="availability"
              message={WA_MESSAGE}
              label="Consultar disponibilidad"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5: DR. QUIROZ CREDENTIALS — bg-background
          General endoscopy expertise — no EUS specialization claim
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
                  Tu estudio con un Endoscopista Gastrointestinal certificado
                </h2>
                <p className="text-primary font-medium text-sm mt-1">
                  {DOCTOR.name}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid gap-6 md:grid-cols-3">
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
          SECTION 6: GOOGLE REVIEWS — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <GoogleReviews />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7: FAQ — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <Faq routeKey="eus" service="eus" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 8: RELATED PROCEDURES — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif font-bold tracking-tight text-foreground text-2xl md:text-3xl mb-2">
            Procedimientos relacionados
          </h2>
          <p className="text-muted-foreground mb-8">
            El ultrasonido endoscópico complementa estos estudios diagnósticos y
            terapéuticos.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "CPRE",
                desc: "Tratamiento de cálculos biliares y obstrucciones.",
                href: "/cpre-merida",
              },
              {
                name: "Endoscopia",
                desc: "Diagnóstico de esófago, estómago y duodeno.",
                href: "/endoscopia-merida",
              },
              {
                name: "Colonoscopia",
                desc: "Prevención de cáncer colorrectal.",
                href: "/colonoscopia-merida",
              },
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
          SECTION 9: BOTTOM CTA — bg-primary
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-primary">
        <div className="container-page section-padding">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
                ¿Te indicaron un ultrasonido endoscópico?
              </h2>
              <p className="text-lg text-white/80">
                Escríbenos y el {DOCTOR.name} evalúa tu caso directamente.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                service="eus"
                position="bottom-cta"
                message={WA_MESSAGE}
                label="Consultar disponibilidad"
                className="sm:px-10"
              />
              <CallButton service="eus" position="bottom-cta" variant="inverse" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
