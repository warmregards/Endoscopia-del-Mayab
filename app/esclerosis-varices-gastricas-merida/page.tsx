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
  ...metaFor("esclerosis_varices_gastricas"),
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
    name: "Ligadura de Várices Esofágicas",
    href: "/ligadura-varices-esofagicas-merida",
    price: mxn(PRICING.ligadura_varices.from),
    desc: "Bandas elásticas para várices del esófago. Complementa la esclerosis en pacientes con várices en ambos sitios.",
  },
  {
    name: "CPRE",
    href: "/cpre-merida",
    price: mxn(PRICING.cpre.from),
    desc: "Diagnóstico y tratamiento de complicaciones biliares en pacientes con hipertensión portal.",
  },
  {
    name: "Endoprótesis Esofágicas",
    href: "/endoprotesis-esofagicas-merida",
    price: "Cotización",
    desc: "Stents esofágicos para estenosis y fístulas. Valoración individual por especialista.",
  },
]

/* ══════════════════════════════════════════════════════════════════════════ */

export default function EsclerosisVaricesGastricasPage() {
  return (
    <>
      {/* ── JSON-LD: MedicalProcedure ───────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "Esclerosis de Várices Gástricas en Mérida",
              path: "/esclerosis-varices-gastricas-merida",
              pricingKey: "esclerosis_varices_gastricas",
              description:
                "Inyección endoscópica de cianoacrilato para controlar y prevenir sangrado por várices gástricas fúndicas. Procedimiento ambulatorio con sedación en Hospital Amerimed Mérida.",
              bodyLocation: "Estómago (fondo gástrico)",
              howPerformed:
                "Inyección de cianoacrilato (adhesivo tisular) a través de endoscopio bajo sedación profunda",
              preparation:
                "Ayuno 8 horas, laboratorios de coagulación y función hepática",
              followUp:
                "Observación 4–6 horas, dieta blanda 24–48 horas, endoscopia de control en 4–6 semanas",
              procedureType: "Therapeutic",
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
              { name: "Esclerosis de Várices Gástricas en Mérida", path: "/esclerosis-varices-gastricas-merida" },
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
              <h1 className="font-serif font-extrabold tracking-tight text-foreground text-3xl md:text-4xl lg:text-5xl">
                Esclerosis de Várices Gástricas en Mérida
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Inyección de cianoacrilato para sellar y controlar várices del
                estómago. Tratamiento de primera línea para várices gástricas
                fúndicas.
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
                  service="esclerosis varices gastricas"
                  position="hero"
                  procedureName="Esclerosis de Várices Gástricas"
                  label="Agendar por WhatsApp"
                  className="sm:px-8"
                />
                <CallButton
                  service="esclerosis varices gastricas"
                  position="hero"
                  variant="ghost"
                />
              </div>

              {/* Location + hours */}
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
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
                    {mxn(PRICING.esclerosis_varices_gastricas.from)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Desde — sedación incluida
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "Sedación con anestesiólogo",
                    "Cianoacrilato (adhesivo tisular)",
                    "Equipo endoscópico especializado",
                    "Sala de recuperación y observación",
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
                    Generalmente 1–2 sesiones. Lectura de patología{" "}
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
          SECTION 2: DEFINITION — bg-muted
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-foreground">
              ¿Qué es la esclerosis de várices gástricas?
            </h2>

            <div className="text-foreground/80 leading-relaxed space-y-4">
              <p>
                Las várices gástricas se forman en el estómago — especialmente en
                el fondo gástrico — por hipertensión portal asociada a
                enfermedad hepática. A diferencia de las várices esofágicas que
                se tratan con bandas elásticas (ligadura), las várices gástricas
                fúndicas requieren un abordaje diferente.
              </p>
              <p>
                La esclerosis consiste en inyectar cianoacrilato (un adhesivo
                tisular) directamente dentro de la várice a través del
                endoscopio. El adhesivo se solidifica al contacto con la sangre,
                sellando la várice y deteniendo o previniendo el sangrado. La
                tasa de éxito en hemostasia supera el 90%.
              </p>
              <p>
                Es el tratamiento de primera línea recomendado por guías
                internacionales (AASLD, ASGE) para várices gástricas fúndicas.
                Se realiza bajo sedación profunda con el mismo equipo
                endoscópico.
              </p>
            </div>

            {/* Cross-link to ligadura */}
            <div className="bg-accent-light border border-accent/20 rounded-xl p-6">
              <p className="text-foreground/80">
                <span className="font-semibold text-foreground">
                  ¿Tu médico indicó ligadura de várices esofágicas?
                </span>{" "}
                La ligadura con bandas elásticas es el tratamiento para várices
                del esófago, no del estómago.{" "}
                <Link
                  href="/ligadura-varices-esofagicas-merida"
                  className="text-primary font-medium hover:underline"
                >
                  Consulta nuestra página de ligadura de várices esofágicas
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
              ¿Cuánto cuesta la esclerosis de várices gástricas en Mérida?
            </h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="font-serif font-bold text-text-accent text-3xl">
                Desde {mxn(PRICING.esclerosis_varices_gastricas.from)}
              </p>
            </div>

            <p className="text-foreground/80 leading-relaxed">
              El precio incluye sedación profunda con anestesiólogo certificado,
              cianoacrilato (adhesivo tisular), equipo endoscópico
              especializado, sala de recuperación y observación
              post-procedimiento (4–6 horas), y consulta pre-procedimiento.
              Generalmente se resuelve en 1–2 sesiones, a diferencia de la
              ligadura esofágica que puede requerir 2–4.
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
                      Laboratorios: biometría hemática, coagulación y función
                      hepática
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Suspender anticoagulantes según indicación médica
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
                  Durante (30–60 min)
                </h3>
                <ul className="space-y-4 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Sedación profunda con anestesiólogo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      El endoscopio llega al estómago y localiza la várice
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Inyección de cianoacrilato en dosis controlada
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      El adhesivo se solidifica al contacto con la sangre
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
                  Recuperación (4–6 h)
                </h3>
                <ul className="space-y-4 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Observación 4–6 horas en Hospital Amerimed
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Dieta blanda las primeras 24–48 horas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Endoscopia de control en 4–6 semanas
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
                    Señales de alarma — contactar inmediatamente
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Vómito con sangre, evacuaciones negras, dolor abdominal
                    intenso o fiebre. Escribe por WhatsApp al{" "}
                    {CLINIC.phone.display} para valoración urgente.
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
                  {DOCTOR.bioShort} El Dr. Quiroz cuenta con amplia experiencia
                  en urgencias digestivas y manejo de sangrado variceal,
                  incluyendo la técnica de inyección de cianoacrilato para
                  várices gástricas fúndicas. Cuando nos escribes, te contesta
                  el Dr. Quiroz directamente. Atención en Hospital Amerimed,
                  Mérida, Yucatán — a minutos de Cholul, Temozón Norte y
                  Country Club.
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
                  service="esclerosis varices gastricas"
                  position="doctor"
                  procedureName="Esclerosis de Várices Gástricas"
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
          routeKey="esclerosis_varices_gastricas"
          service="esclerosis varices gastricas"
          heading="Preguntas frecuentes sobre esclerosis de várices gástricas"
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
                      {proc.price.startsWith("$")
                        ? `Desde ${proc.price}`
                        : proc.price}
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
                Si tienes sangrado digestivo o te indicaron esclerosis de
                várices gástricas, agenda tu cita hoy. El {DOCTOR.name} te
                responde personalmente.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                service="esclerosis varices gastricas"
                position="bottom-cta"
                procedureName="Esclerosis de Várices Gástricas"
                label="Agendar por WhatsApp"
                className="sm:px-10"
              />
              <CallButton
                service="esclerosis varices gastricas"
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
