import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn, ADDITIONAL_FEES } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Link from "next/link"
import Image from "next/image"
import {
  CheckCircle2,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Clock,
  AlertTriangle,
} from "lucide-react"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400
export const metadata: import("next").Metadata = {
  ...metaFor("ligadura_varices"),
  other: {
    "geo.region": "MX-YUC",
    "geo.placename": "Mérida",
    "geo.position": `${CLINIC.geo.lat};${CLINIC.geo.lng}`,
    ICBM: `${CLINIC.geo.lat}, ${CLINIC.geo.lng}`,
  },
}

/* ── Related procedures ─────────────────────────────────────────────────── */

const relatedProcedures = [
  {
    name: "Esclerosis de Várices Gástricas",
    href: "/esclerosis-varices-gastricas-merida",
    price: mxn(PRICING.esclerosis_varices_gastricas.from),
    desc: "Inyección de cianoacrilato para várices del estómago. Tratamiento de primera línea para várices gástricas fúndicas.",
  },
  {
    name: "CPRE",
    href: "/cpre-merida",
    price: mxn(PRICING.cpre.from),
    desc: "Diagnóstico y tratamiento de complicaciones biliares en pacientes con hipertensión portal.",
  },
  {
    name: "Coagulación APC",
    href: "/apc-coagulacion-plasma-argon-merida",
    price: mxn(PRICING.apc.from),
    desc: "Control de sangrado y tratamiento de lesiones vasculares con plasma de argón.",
  },
]

/* ══════════════════════════════════════════════════════════════════════════ */

export default function LigaduraVaricesPage() {
  return (
    <>
      {/* ── JSON-LD: MedicalProcedure ───────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "Ligadura de Várices Esofágicas en Mérida",
              path: "/ligadura-varices-esofagicas-merida",
              pricingKey: "ligadura_varices",
              description:
                "Colocación de bandas elásticas sobre várices esofágicas para prevenir y controlar sangrado por hipertensión portal. Procedimiento ambulatorio con sedación en Hospital Amerimed Mérida.",
              bodyLocation: "Esófago",
              howPerformed:
                "Colocación de bandas elásticas mediante endoscopio terapéutico bajo sedación profunda",
              preparation:
                "Ayuno 8 horas, laboratorios de coagulación",
              followUp:
                "Dieta fría y blanda 24–48 horas, siguiente sesión en 2–4 semanas",
              procedureType: "Therapeutic",
            })
          ),
        }}
      />

      {/* ── JSON-LD: BreadcrumbList ───────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", path: "/" },
              { name: "Ligadura de Várices Esofágicas", path: "/ligadura-varices-esofagicas-merida" },
            ])
          ),
        }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1: HERO — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
            {/* Left: Content */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-sm font-medium text-red-700">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                Atención de emergencia disponible 24/7
              </div>

              <h1 className="font-serif font-extrabold tracking-tight text-foreground text-3xl md:text-4xl lg:text-5xl">
                Ligadura de Várices Esofágicas en Mérida
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Control y prevención de sangrado por várices esofágicas con
                bandas elásticas. Procedimiento ambulatorio con sedación.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                {[
                  "Sedación incluida",
                  "Hospital Amerimed Mérida",
                  `${DOCTOR.name} – Endoscopista`,
                ].map((chip) => (
                  <div key={chip} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>{chip}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  service="ligadura varices"
                  position="hero"
                  procedureName="Ligadura de Várices Esofágicas"
                  label="Agendar por WhatsApp"
                  className="sm:px-8"
                />
                <CallButton
                  service="ligadura varices"
                  position="hero"
                  variant="ghost"
                />
              </div>

              {/* Location + Hours */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-muted-foreground">
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

            {/* Right: Price card */}
            <div className="w-full lg:max-w-sm">
              <div className="border border-border bg-card rounded-2xl shadow-md p-6 space-y-6">
                <div className="text-center space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    {DOCTOR.name}
                  </p>
                  <p className="font-serif font-bold text-text-accent text-2xl md:text-3xl">
                    {mxn(PRICING.ligadura_varices.from)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Desde — sedación incluida
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "Sedación con anestesiólogo",
                    "Equipo endoscópico terapéutico",
                    "Dispositivo de ligadura (bandas)",
                    "Sala de recuperación",
                    "Consulta pre-procedimiento",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-muted rounded-xl p-4">
                  <p className="text-xs text-muted-foreground">
                    Pueden requerirse 2–4 sesiones. Lectura de patología{" "}
                    {mxn(ADDITIONAL_FEES.biopsy.amount)} adicional si se toman
                    biopsias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2: DEFINITION + INDICATIONS — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-foreground">
              ¿Qué es la ligadura de várices esofágicas?
            </h2>

            <div className="text-foreground/80 leading-relaxed space-y-4">
              <p>
                La ligadura consiste en colocar bandas elásticas sobre las
                várices del esófago para estrangularlas y detener o prevenir el
                sangrado. Las várices esofágicas se forman por hipertensión
                portal, generalmente asociada a enfermedad hepática crónica.
              </p>
              <p>
                Es el tratamiento estándar de primera línea para várices
                esofágicas, tanto en emergencia (sangrado activo) como en
                prevención (profilaxis primaria y secundaria). Se requieren
                típicamente 2–4 sesiones separadas por 2–4 semanas hasta
                erradicar las várices residuales, seguido de vigilancia
                endoscópica periódica.
              </p>
            </div>

            {/* Cross-link to esclerosis */}
            <div className="bg-accent-light border border-accent/20 rounded-xl p-6">
              <p className="text-foreground/80">
                <span className="font-semibold text-foreground">
                  ¿Tu médico indicó esclerosis de várices gástricas?
                </span>{" "}
                Las várices del estómago (fondo gástrico) no se tratan con
                bandas — requieren inyección de cianoacrilato.{" "}
                <Link
                  href="/esclerosis-varices-gastricas-merida"
                  className="text-primary font-medium hover:underline"
                >
                  Consulta nuestra página de esclerosis de várices gástricas
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3: PRICING — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-foreground">
              ¿Cuánto cuesta la ligadura de várices en Mérida?
            </h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="font-serif font-bold text-text-accent text-3xl">
                Desde {mxn(PRICING.ligadura_varices.from)}
              </p>
            </div>

            <p className="text-foreground/80 leading-relaxed">
              El precio incluye sedación profunda con anestesiólogo certificado,
              equipo endoscópico terapéutico, dispositivo de ligadura con bandas
              elásticas, sala de recuperación y consulta pre-procedimiento.
              Pueden requerirse 2–4 sesiones separadas por 2–4 semanas, cada
              una desde {mxn(PRICING.ligadura_varices.from)}.
            </p>

            {/* Biopsy differentiator */}
            <div className="bg-accent-light border border-accent/20 rounded-xl p-6">
              <p className="text-foreground/80">
                <span className="font-semibold text-foreground">
                  Biopsias sin límite con tarifa única.
                </span>{" "}
                Si se toman biopsias, la lectura de patología tiene un costo
                adicional de {mxn(ADDITIONAL_FEES.biopsy.amount)} — un solo
                cobro sin importar cuántas biopsias se requieran.
              </p>
            </div>

            <p className="text-sm text-muted-foreground">
              <Link
                href="/precios"
                className="text-primary font-medium hover:underline"
              >
                Ver todos nuestros precios →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4: PREPARATION — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-foreground">
              Preparación y qué esperar
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Before */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="font-serif font-semibold text-foreground text-center mb-4">
                  Antes del procedimiento
                </h3>
                <ul className="space-y-4 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Ayuno de 8 horas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Laboratorios: biometría hemática y estudios de coagulación
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Ajuste de medicamentos según indicación del Dr. Quiroz
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Acudir con acompañante adulto</span>
                  </li>
                </ul>
              </div>

              {/* During */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-accent text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="font-serif font-semibold text-foreground text-center mb-4">
                  Durante (20–40 min)
                </h3>
                <ul className="space-y-4 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Sedación profunda con anestesiólogo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      El endoscopio terapéutico localiza las várices
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Colocación de bandas elásticas sobre cada várice
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Las bandas estrangulan la várice, deteniendo el flujo
                    </span>
                  </li>
                </ul>
              </div>

              {/* After */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="font-serif font-semibold text-foreground text-center mb-4">
                  Recuperación
                </h3>
                <ul className="space-y-4 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Molestia leve al tragar 24–48 horas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Dieta fría y blanda el primer día</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Siguiente sesión en 2–4 semanas
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Endoscopia de vigilancia periódica
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Warning signs */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Señales de alarma — acudir de inmediato
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Vómito con sangre, evacuaciones negras, dolor intenso o
                    fiebre. Escribe por WhatsApp al {CLINIC.phone.display} para
                    valoración urgente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5: DOCTOR — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-foreground">
              Tu especialista: <Link href="/dr-omar-quiroz" className="text-primary hover:underline">{DOCTOR.name}</Link>
            </h2>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-muted">
                <Image
                  src={DOCTOR.photos.headshot}
                  alt={DOCTOR.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  {DOCTOR.bioShort} El Dr. Quiroz combina formación en cirugía y
                  endoscopia terapéutica para manejar casos complejos de
                  sangrado variceal. Atiende pacientes de toda la Península de
                  Yucatán — incluyendo zonas como Cholul, Temozón Norte y
                  Country Club. Si la ligadura no es suficiente, puede activar
                  un plan integral con apoyo quirúrgico y cuidados intensivos en
                  Hospital Amerimed.
                </p>

                {/* Credentials */}
                <div className="flex flex-wrap gap-2">
                  {DOCTOR.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-accent-light text-xs font-medium text-foreground"
                    >
                      <ShieldCheck className="h-4 w-4 text-accent" />
                      {cred}
                    </span>
                  ))}
                </div>

                <WhatsAppButton
                  service="ligadura varices"
                  position="doctor"
                  procedureName="Ligadura de Várices Esofágicas"
                  label="Consultar con el Dr. Quiroz"
                  className="text-sm px-4 py-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6: GOOGLE REVIEWS — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <GoogleReviews />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7: FAQ — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <Faq
          routeKey="ligadura_varices"
          service="ligadura varices"
          heading="Preguntas frecuentes sobre ligadura de várices"
        />
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 8: RELATED PROCEDURES — bg-background
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-xl md:text-2xl font-serif font-bold tracking-tight text-foreground">
              Procedimientos relacionados
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProcedures.map((proc) => (
                <Link
                  key={proc.href}
                  href={proc.href}
                  className="group bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-accent/30 transition-all"
                >
                  <h3 className="font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {proc.name}
                  </h3>
                  <p className="text-sm text-foreground/80 mb-4">{proc.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-text-accent">
                      Desde {proc.price}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 9: BOTTOM CTA — bg-primary
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-primary">
        <div className="container-page section-padding">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
                ¿Necesitas valoración urgente?
              </h2>
              <p className="text-white/80 mt-2">
                Si tienes sangrado digestivo o te indicaron ligadura de várices,
                agenda tu cita hoy. El {DOCTOR.name} te responde personalmente.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                service="ligadura varices"
                position="bottom-cta"
                procedureName="Ligadura de Várices Esofágicas"
                label="Agendar por WhatsApp"
                className="sm:px-10"
              />
              <CallButton
                service="ligadura varices"
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
