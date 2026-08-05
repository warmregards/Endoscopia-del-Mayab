import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn, displayFrom } from "@/lib/pricing"
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
  Pill,
  Camera,
  Search,
  FileText,
  AlertTriangle,
} from "lucide-react"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"

export const revalidate = 86400
export const metadata = metaFor("capsula_endoscopica")

export default function CapsulaEndoscopicaPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            procedureSchema({
              name: "Cápsula Endoscópica",
              path: "/capsula-endoscopica-merida",
              pricingKey: "capsula_endoscopica",
              description:
                "Estudio del intestino delgado con una cámara que se traga (cápsula endoscópica), para sangrado digestivo sin fuente identificada, anemia y sospecha de enfermedad de Crohn en Mérida, Yucatán.",
              procedureType: "Diagnostic",
              bodyLocation: "Intestino delgado",
              howPerformed:
                "El paciente traga una cápsula con cámara que graba el intestino delgado durante 8 a 12 horas; la grabación es interpretada por el endoscopista.",
              preparation:
                "Ayuno y restricción de la dieta según protocolo antes del estudio.",
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
              { name: "Servicios", path: "/servicios" },
              {
                name: "Cápsula Endoscópica en Mérida",
                path: "/capsula-endoscopica-merida",
              },
            ])
          ),
        }}
      />

      {/* SECTION 1: HERO — bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
            {/* Content */}
            <div className="flex-1 space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-foreground tracking-tight">
                Cápsula Endoscópica en Mérida
              </h1>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Una cámara del tamaño de una cápsula que se traga para revisar el
                intestino delgado — el tramo que la endoscopia y la colonoscopia
                no alcanzan. Sin sedación y sin cirugía.
              </p>

              <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                {[
                  "Sin sedación",
                  `${DOCTOR.worksFor.hospital}`,
                  "Cotización personalizada",
                  "Estudio ambulatorio",
                ].map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton service="cápsula endoscópica" position="hero" />
                <CallButton
                  service="cápsula endoscópica"
                  position="hero"
                  variant="ghost"
                />
              </div>
            </div>

            {/* Quote Card */}
            <div className="w-full lg:max-w-md">
              <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-accent-light flex items-center justify-center mx-auto">
                    <Pill className="h-8 w-8 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">
                      {DOCTOR.name}
                    </div>
                    <div className="text-2xl font-bold text-text-accent">
                      {mxn(PRICING.capsula_endoscopica.from)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Estudio de alto costo, cotizado según tu caso
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-6 rounded-xl bg-muted border border-border">
                  <h3 className="text-lg font-serif font-bold text-foreground mb-4 text-center">
                    La cotización cubre
                  </h3>
                  <div className="space-y-2">
                    {[
                      "La cápsula endoscópica",
                      "El estudio completo",
                      "La interpretación de la grabación",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
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
              ¿Qué es la cápsula endoscópica?
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Es una cámara del tamaño de una cápsula que te tragas con un poco de
              agua. A lo largo de 8 a 12 horas va tomando miles de fotografías
              mientras avanza de forma natural por el intestino delgado — la parte
              del tubo digestivo que ni la{" "}
              <Link
                href="/endoscopia-merida"
                className="text-primary hover:underline"
              >
                endoscopia
              </Link>{" "}
              (que llega hasta el duodeno) ni la{" "}
              <Link
                href="/colonoscopia-merida"
                className="text-primary hover:underline"
              >
                colonoscopia
              </Link>{" "}
              (que revisa el colon) alcanzan a ver. Por eso existe: cuando el
              problema está en esa zona intermedia, es la forma de revisarla sin
              cirugía.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-background border border-border">
              <Clock className="h-5 w-5 text-accent" />
              <span className="font-semibold text-foreground">8–12 horas de grabación</span>
              <span className="text-foreground/70">· Sin sedación · Ambulatorio</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INDICATIONS & LOCATION — bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight mb-8">
            ¿Cuándo se necesita una cápsula endoscópica?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl">
            {/* Indications Card */}
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 mb-4">
                <Search className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Indicaciones
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Es un estudio de alto costo, por lo que se reserva para
                situaciones concretas donde de verdad aporta:
              </p>
              <ul className="space-y-2 mb-4 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    Sangrado digestivo cuya fuente no apareció en la endoscopia ni
                    en la colonoscopia
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Sospecha de enfermedad de Crohn en el intestino delgado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    Anemia por falta de hierro con endoscopia y colonoscopia
                    normales
                  </span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Si un estudio convencional puede responder tu pregunta primero, el{" "}
                {DOCTOR.name} te lo dice directamente antes de indicarla.
              </p>
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
                  <p className="font-semibold text-foreground">
                    {DOCTOR.worksFor.hospital}
                  </p>
                  <p>{CLINIC.address.display}</p>
                </div>
                <div>
                  <p className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{CLINIC.hours.display}</span>
                  </p>
                </div>
                <Link
                  href="/precios"
                  className="inline-block text-sm font-medium text-primary hover:underline"
                >
                  Ver todos los precios →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS, PREP & RISK — bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight mb-8">
            Cómo funciona, preparación y seguridad
          </h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl">
            {/* Cómo funciona */}
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 mb-4">
                <Camera className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Cómo funciona
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Te tragas la cápsula con un poco de agua</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Haces tu vida normal mientras graba 8–12 horas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Se elimina sola de forma natural — no hay que recuperarla</span>
                </li>
              </ul>
            </div>

            {/* Preparación */}
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Preparación
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Ayuno las horas previas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Restricción de la dieta según protocolo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    El {DOCTOR.name} te da las indicaciones exactas al agendar
                  </span>
                </li>
              </ul>
            </div>

            {/* Seguridad */}
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Seguridad
                </h3>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Es un estudio muy seguro. El riesgo principal es que la cápsula se
                retenga si hay una estrechez u obstrucción en el intestino. Cuando
                existe esa sospecha, se evalúa antes con estudios de imagen o una
                cápsula de prueba disoluble — el {DOCTOR.name} revisa tu historia
                para descartarlo antes de indicarla.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: DOCTOR — bg-background */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight mb-8">
            Quién realiza e interpreta tu estudio
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
              <p className="text-foreground/80 leading-relaxed">{DOCTOR.bioShort}</p>
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
                El {DOCTOR.name} consigue la cápsula, supervisa el estudio e
                interpreta él mismo la grabación — no se envía a un tercero. Quien
                te explica los resultados es el mismo médico que te atiende.
              </p>
              <WhatsAppButton
                service="cápsula endoscópica"
                position="doctor"
                className="text-sm"
              />
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
          <Faq routeKey="capsula_endoscopica" service="cápsula endoscópica" />
        </div>
      </section>

      {/* SECTION 8: CTA + RELATED — bg-muted */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          {/* CTA */}
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              ¿Sangrado o anemia sin causa clara?
            </h2>
            <p className="text-lg text-foreground/80">
              Escríbele al {DOCTOR.name} con tu indicación médica y te dice si la
              cápsula endoscópica es lo que necesitas — o si un estudio
              convencional responde primero.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton service="cápsula endoscópica" position="cta" />
              <CallButton
                service="cápsula endoscópica"
                position="cta"
                variant="ghost"
              />
            </div>
          </div>

          {/* Related Procedures */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight mb-8">
              Estudios relacionados
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/endoscopia-merida"
                className="group p-6 rounded-xl border border-border bg-card hover:shadow-md hover:border-accent/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Search className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Endoscopia
                  </h3>
                </div>
                <p className="text-sm text-foreground/80 mb-4">
                  Revisa esófago, estómago y duodeno. Suele ser el primer estudio
                  cuando hay sangrado alto.
                </p>
                <span className="text-sm font-medium text-text-accent">
                  {displayFrom("endoscopia")} →
                </span>
              </Link>

              <Link
                href="/colonoscopia-merida"
                className="group p-6 rounded-xl border border-border bg-card hover:shadow-md hover:border-accent/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Search className="h-6 w-6 text-accent" />
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    Colonoscopia
                  </h3>
                </div>
                <p className="text-sm text-foreground/80 mb-4">
                  Revisa el colon y el recto. Junto con la endoscopia, descarta las
                  causas más frecuentes de sangrado.
                </p>
                <span className="text-sm font-medium text-text-accent">
                  {displayFrom("colonoscopia")} →
                </span>
              </Link>

              <Link
                href="/emergencias-digestivas-merida"
                className="group p-6 rounded-xl border border-border bg-card hover:shadow-md hover:border-accent/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Emergencias digestivas
                  </h3>
                </div>
                <p className="text-sm text-foreground/80 mb-4">
                  Sangrado digestivo activo o dolor abdominal intenso que no puede
                  esperar.
                </p>
                <span className="text-sm font-medium text-text-accent">
                  Ver atención →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
