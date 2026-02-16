import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn, displayFrom, ADDITIONAL_FEES, INCLUDED_IN_PRICE } from "@/lib/pricing"
import { CLINIC } from "@/lib/clinic"
import { DOCTOR } from "@/lib/doctor"
import { procedureSchema, breadcrumbSchema } from "@/lib/schema"
import Link from "next/link"
import Image from "next/image"
import {
  CheckCircle2,
  MapPin,
  Clock,
  ShieldCheck,
  Microscope,
  FileText,
  Target,
  Zap,
} from "lucide-react"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400
export const metadata = metaFor("emr")

export default function EmrPage() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.endoscopiadelmayab.com").replace(/\/$/, "")

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(procedureSchema({
            name: "Resección Endoscópica Mucosa (EMR)",
            path: "/reseccion-endoscopica-mucosa-emr-merida",
            pricingKey: "emr",
            description: "Eliminación de pólipos y lesiones pre-malignas sin cirugía abierta mediante resección endoscópica mucosa en Mérida, Yucatán.",
            procedureType: "Therapeutic",
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: "/servicios" },
            { name: "Resección Endoscópica Mucosa (EMR)", path: "/reseccion-endoscopica-mucosa-emr-merida" },
          ])),
        }}
      />

      {/* SECTION 1: HERO — bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
            {/* Content */}
            <div className="flex-1 space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-foreground tracking-tight">
                Resección Endoscópica Mucosa (EMR) en Mérida
              </h1>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Eliminación de pólipos y lesiones pre-malignas sin cirugía abierta,
                con cotización personalizada según tu caso.
              </p>

              <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                {[
                  "Procedimiento ambulatorio",
                  `${DOCTOR.worksFor.hospital}`,
                  "Cotización personalizada",
                  "Sin cirugía abierta",
                ].map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton service="resección endoscópica mucosa (EMR)" position="hero" />
                <CallButton service="resección endoscópica mucosa (EMR)" position="hero" variant="ghost" />
              </div>
            </div>

            {/* Pricing Card */}
            <div className="w-full lg:max-w-md">
              <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-accent-light flex items-center justify-center mx-auto">
                    <Microscope className="h-8 w-8 text-accent-strong" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">{DOCTOR.name}</div>
                    <div className="text-2xl font-bold text-text-accent">{mxn(PRICING.emr.from)}</div>
                    <div className="text-sm text-muted-foreground">Según complejidad del caso</div>
                  </div>
                </div>

                <div className="mt-6 p-6 rounded-xl bg-muted border border-border">
                  <h3 className="text-lg font-serif font-bold text-foreground mb-4 text-center">
                    Incluye
                  </h3>
                  <div className="space-y-2">
                    {INCLUDED_IN_PRICE.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DEFINITION — bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight mb-6">
              ¿Qué es la Resección Endoscópica Mucosa?
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Es un procedimiento que permite remover pólipos grandes y lesiones superficiales
              del tubo digestivo usando un endoscopio, sin necesidad de cirugía abierta. Trata
              pólipos complejos del colon, lesiones superficiales del estómago o esófago y
              esófago de Barrett con displasia. Se realiza bajo sedación con anestesiólogo
              certificado, dura entre 30 y 45 minutos y es ambulatorio — regresas a casa
              el mismo día. En muchos casos, pacientes que otro médico envió a cirugía pueden
              resolverse con EMR ambulatoria.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-background border border-border">
              <Clock className="h-5 w-5 text-accent-strong" />
              <span className="font-semibold text-foreground">30–45 minutos</span>
              <span className="text-foreground/70">· Sedación segura · Ambulatorio</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PRICING & LOCATION — bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight mb-8">
            Costo de EMR en Mérida
          </h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl">
            {/* Pricing Card */}
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Cotización Personalizada
                </h3>
              </div>
              <p className="text-lg font-semibold text-text-accent mb-4">
                {mxn(PRICING.emr.from)}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                El precio varía según número de lesiones, localización anatómica,
                complejidad y técnicas especiales requeridas.
              </p>
              <div className="space-y-2 mb-4">
                <p className="text-sm font-semibold text-foreground">Incluye:</p>
                {INCLUDED_IN_PRICE.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Lectura de patología: {mxn(ADDITIONAL_FEES.biopsy.amount)} adicional
              </p>
              <Link
                href="/precios"
                className="text-sm font-medium text-primary hover:underline"
              >
                Ver todos los precios →
              </Link>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Ubicación en Mérida
                </h3>
              </div>
              <div className="space-y-4 text-sm text-foreground/80">
                <div>
                  <p className="font-semibold text-foreground">{DOCTOR.worksFor.hospital}</p>
                  <p>{CLINIC.address.display}</p>
                  <p className="text-muted-foreground">Mérida, Yucatán</p>
                </div>
                <div>
                  <p className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{CLINIC.hours.display}</span>
                  </p>
                </div>
                <p>
                  <strong>Fácil acceso desde:</strong> Cholul, Temozón Norte,
                  Altabrisa, Montebello, Centro Histórico, García Ginerés
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PREPARATION & RECOVERY — bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight mb-8">
            Preparación y Recuperación
          </h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl">
            {/* Antes */}
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-lg font-serif font-semibold text-foreground mb-4">Antes</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Preparación intestinal (si colon)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Ayuno de 8 horas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Revisión de medicamentos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Consentimiento informado</span>
                </li>
              </ul>
            </div>

            {/* Durante */}
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-lg font-serif font-semibold text-foreground mb-4">Durante</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-strong mt-0.5 flex-shrink-0" />
                  <span>Sedación segura — no sentirás nada</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-strong mt-0.5 flex-shrink-0" />
                  <span>Duración: 30–45 minutos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-strong mt-0.5 flex-shrink-0" />
                  <span>Fotos HD del procedimiento</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-strong mt-0.5 flex-shrink-0" />
                  <span>Alta el mismo día</span>
                </li>
              </ul>
            </div>

            {/* Después */}
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-lg font-serif font-semibold text-foreground mb-4">Después</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="h-4 w-4 text-accent-strong mt-0.5 flex-shrink-0" />
                  <span>Día 1–2: Dieta líquida, actividad ligera</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="h-4 w-4 text-accent-strong mt-0.5 flex-shrink-0" />
                  <span>Día 3–7: Dieta suave, sin ejercicio intenso</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="h-4 w-4 text-accent-strong mt-0.5 flex-shrink-0" />
                  <span>Semana 2+: Actividad completa</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="h-4 w-4 text-accent-strong mt-0.5 flex-shrink-0" />
                  <span>Patología: 7–10 días</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: DOCTOR — bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight mb-8">
            Tu Especialista en Resección Endoscópica
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-8 max-w-4xl">
            <Image
              src={DOCTOR.photos.headshot}
              alt={DOCTOR.name}
              width={280}
              height={350}
              className="rounded-2xl w-full max-w-[280px]"
            />
            <div className="space-y-4">
              <Link href={DOCTOR.profileUrl}>
                <h3 className="text-lg font-serif font-semibold text-foreground hover:text-primary transition-colors">
                  {DOCTOR.name}
                </h3>
              </Link>
              <p className="text-foreground/80 leading-relaxed">
                {DOCTOR.bioShort}
              </p>
              <div className="flex flex-wrap gap-2">
                {DOCTOR.credentials.slice(0, 4).map((cred) => (
                  <span
                    key={cred}
                    className="inline-flex items-center px-4 py-2 rounded-xl bg-accent-light text-sm font-medium text-foreground"
                  >
                    {cred}
                  </span>
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Como cirujano especializado, maneja resecciones complejas que otros
                envían a cirugía. Si la EMR no es suficiente, planea el siguiente paso
                sin cambiar de médico.
              </p>
              <WhatsAppButton service="EMR" position="doctor" className="text-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: REVIEWS — bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <GoogleReviews />
        </div>
      </section>

      {/* SECTION 7: FAQ — bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <Faq routeKey="emr" service="resección endoscópica mucosa (EMR)" />
        </div>
      </section>

      {/* SECTION 8: CTA + RELATED — bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          {/* CTA */}
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Tienes Pólipos que Requieren Resección?
            </h2>
            <p className="text-lg text-foreground/80">
              No todos los pólipos necesitan cirugía. Escríbenos para evaluar
              si EMR es la opción adecuada para tu caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton service="resección endoscópica mucosa (EMR)" position="cta" />
              <CallButton service="resección endoscópica mucosa (EMR)" position="cta" variant="ghost" />
            </div>
          </div>

          {/* Related Procedures */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight mb-8">
              Procedimientos Relacionados
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/colonoscopia-merida"
                className="group p-6 rounded-xl border border-border bg-card hover:shadow-md hover:border-accent/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Microscope className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Colonoscopia Diagnóstica
                  </h3>
                </div>
                <p className="text-sm text-foreground/80 mb-4">
                  Evaluación inicial para detectar pólipos y lesiones que requieren EMR.
                </p>
                <span className="text-sm font-medium text-text-accent">
                  {displayFrom("colonoscopia")} →
                </span>
              </Link>

              <Link
                href="/diseccion-endoscopica-submucosa-esd-merida"
                className="group p-6 rounded-xl border border-border bg-card hover:shadow-md hover:border-accent/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Target className="h-6 w-6 text-accent-strong" />
                  <h3 className="font-semibold text-foreground group-hover:text-accent-strong transition-colors">
                    Disección ESD
                  </h3>
                </div>
                <p className="text-sm text-foreground/80 mb-4">
                  Para lesiones complejas que requieren resección en-bloc.
                </p>
                <span className="text-sm font-medium text-text-accent">
                  {displayFrom("esd")} →
                </span>
              </Link>

              <Link
                href="/apc-coagulacion-plasma-argon-merida"
                className="group p-6 rounded-xl border border-border bg-card hover:shadow-md hover:border-accent/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Coagulación APC
                  </h3>
                </div>
                <p className="text-sm text-foreground/80 mb-4">
                  Tratamiento complementario para hemostasia post-resección.
                </p>
                <span className="text-sm font-medium text-text-accent">
                  {displayFrom("apc")} →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
