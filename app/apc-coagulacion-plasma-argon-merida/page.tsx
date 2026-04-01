import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn, ADDITIONAL_FEES, INCLUDED_IN_PRICE } from "@/lib/pricing"
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

export default function APCPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light border border-accent/20 text-sm font-medium text-foreground">
              <MapPin className="h-4 w-4 text-accent" />
              Hospital Amerimed · Mérida, Yucatán
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Coagulación con Plasma de Argón (APC) en Mérida
            </h1>

            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Tratamiento endoscópico sin contacto para sangrado digestivo, esófago de Barrett y ablación de lesiones — con equipo ERBE propio y el precio más accesible de la Península de Yucatán.
            </p>

            <div className="inline-flex items-baseline gap-2 px-6 py-4 rounded-2xl bg-accent-light border border-accent/20">
              <span className="text-sm text-foreground/70">Desde</span>
              <span className="text-3xl font-bold text-text-accent">{mxn(PRICING.apc.from)}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                service="coagulacion plasma argon"
                position="hero"
                procedureName="Coagulación con Plasma de Argón"
                className="sm:px-8"
              />
              <CallButton service="coagulacion plasma argon" position="hero" variant="ghost" />
            </div>

            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span>{CLINIC.address.display}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEFINITION */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
            ¿Qué es la coagulación con plasma de argón?
          </h2>

          <p className="text-foreground/80 leading-relaxed max-w-3xl mb-8">
            La coagulación con plasma de argón (APC) es un tratamiento endoscópico que utiliza gas argón ionizado para coagular tejido sin contacto directo. El gas se ioniza y transfiere energía al tejido, sellando vasos sanguíneos de forma segura con una penetración limitada a 2–3 mm, lo que reduce significativamente el riesgo de perforación.
          </p>

          <div className="space-y-8 max-w-3xl">
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Esófago de Barrett con displasia
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                El esófago de Barrett ocurre cuando el ácido gástrico daña el revestimiento del esófago y las células cambian (metaplasia intestinal). Cuando se detecta displasia, el APC ablaciona el tejido anormal capa por capa en sesiones controladas. Se diagnostica durante una{" "}
                <Link href="/endoscopia-merida" className="text-primary hover:underline">endoscopia</Link>
                {" "}y puede requerir múltiples sesiones con vigilancia endoscópica entre ellas.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Ectasia vascular antral gástrica (GAVE)
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                También conocida como &ldquo;estómago sandía&rdquo; por su apariencia endoscópica con franjas rojas, la GAVE causa sangrado crónico y anemia por deficiencia de hierro. El APC coagula los vasos sanguíneos anormales sin dañar el tejido circundante. Usualmente requiere 2–4 sesiones y es la aplicación de APC con mayor evidencia en el estómago.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Angiodisplasias del tubo digestivo
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Las angiodisplasias son malformaciones vasculares que causan sangrado oculto o visible. Pueden aparecer en cualquier parte del tubo digestivo — esófago, estómago, intestino delgado o colon. El APC sella estas lesiones con coagulación precisa y controlada. Frecuentemente se descubren durante una{" "}
                <Link href="/endoscopia-merida" className="text-primary hover:underline">endoscopia</Link> o{" "}
                <Link href="/colonoscopia-merida" className="text-primary hover:underline">colonoscopia</Link>.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Proctitis y proctopatía por radiación
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Efecto secundario frecuente en pacientes que recibieron radioterapia pélvica (próstata, cérvix, recto). Causa sangrado rectal por vasos sanguíneos frágiles (telangiectasias) en la mucosa del recto. El APC es el tratamiento endoscópico de primera línea para esta condición. Generalmente se necesitan múltiples sesiones dependiendo de la extensión.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Sangrado post-polipectomía y post-resección
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Después de remover pólipos durante una{" "}
                <Link href="/colonoscopia-merida" className="text-primary hover:underline">colonoscopia</Link>
                {" "}o lesiones más grandes mediante{" "}
                <Link href="/reseccion-endoscopica-mucosa-emr-merida" className="text-primary hover:underline">resección endoscópica (EMR)</Link>
                , el sitio de resección puede sangrar. El APC proporciona hemostasia inmediata sin dañar nuevamente el tejido.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Desvitalización tumoral paliativa
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Para pacientes con tumores obstructivos de esófago o estómago que no son candidatos a cirugía, el APC reduce el tejido tumoral para restaurar el paso de alimentos. Es un tratamiento paliativo que mejora la calidad de vida y puede combinarse con{" "}
                <Link href="/endoprotesis-esofagicas-merida" className="text-primary hover:underline">endoprótesis esofágicas</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRICING */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
            Precio de APC en Mérida
          </h2>

          <div className="max-w-2xl">
            <p className="text-3xl font-bold text-text-accent mb-6">
              Desde {mxn(PRICING.apc.from)}
            </p>

            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
              ¿Qué incluye?
            </h3>
            <ul className="space-y-2 mb-6">
              {INCLUDED_IN_PRICE.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-accent-light border border-accent/20 mb-6">
              <p className="text-sm text-foreground/80 font-medium">
                Un solo costo sin importar cuántas biopsias se tomen — la lectura de patología ({mxn(ADDITIONAL_FEES.biopsy.amount)}) es el único costo adicional posible.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Equipo ERBE propio — el precio más accesible en la península
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Mérida es la única ciudad en la Península de Yucatán donde se realiza tratamiento con argón plasma. El Dr. Quiroz cuenta con su propio generador electroquirúrgico ERBE, lo que permite ofrecer el tratamiento desde {mxn(PRICING.apc.from)} por sesión — el precio más accesible de los proveedores en la región, donde el promedio es de $25,000–$30,000 MXN.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Recibimos pacientes de Cancún, Playa del Carmen, Tulum, Campeche, Valladolid, Chetumal y Belice que necesitan este tratamiento.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-muted border border-border">
              <h3 className="font-serif text-base font-semibold text-foreground mb-4">
                ¿Cómo se compara el costo del APC?
              </h3>
              <div className="space-y-4 text-sm text-foreground/80">
                <p>
                  El APC trata la <strong>causa</strong> del problema, no solo los síntomas. Comparado con las alternativas:
                </p>
                <ul className="space-y-2">
                  {[
                    "Infusiones de hierro por anemia crónica: $2,000–$4,000 MXN/mes indefinidamente — sin resolver el sangrado",
                    "Cirugía esofágica por Barrett avanzado: $150,000+ MXN con semanas de recuperación",
                    "Transfusiones por sangrado recurrente: costos acumulados sin tratar el origen",
                    "APC con otros proveedores en la región: $25,000–$30,000 MXN por sesión",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  La mayoría de condiciones se resuelven en 1–4 sesiones de APC. Es la opción menos invasiva, más accesible y con recuperación más rápida.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <WhatsAppButton
                service="coagulacion plasma argon"
                position="pricing"
                procedureName="Coagulación con Plasma de Argón"
                size="compact"
              />
              <Link
                href="/precios"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Ver todos los precios <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PREPARATION & RECOVERY */}
      <section className="bg-muted">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
            Preparación y recuperación
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Before */}
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
                  <div key={s.step} className="p-4 rounded-xl bg-background border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                        {s.step}
                      </span>
                      <span className="font-semibold text-foreground">{s.label}</span>
                    </div>
                    <p className="text-sm text-foreground/70">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Después del procedimiento
              </h3>

              {/* Timeline */}
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
                  El número de sesiones depende de la condición tratada y la extensión de la lesión. El Dr. Quiroz te explica el plan completo de tratamiento antes de iniciar.
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
      </section>

      {/* 5. DOCTOR CREDENTIALS */}
      <section className="bg-background">
        <div className="container-page section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
            Tu especialista en endoscopia avanzada
          </h2>

          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <Image
              src={DOCTOR.photos.headshot}
              alt={DOCTOR.name}
              width={280}
              height={280}
              className="rounded-2xl w-full sm:w-56 h-auto flex-shrink-0"
            />

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                <Link href={DOCTOR.profileUrl} className="hover:underline">{DOCTOR.name}</Link>
              </h3>
              <p className="text-foreground/80">{DOCTOR.bioShort}</p>

              <div className="flex flex-wrap gap-2">
                {DOCTOR.credentials.slice(0, 5).map((c) => (
                  <span key={c} className="px-2 py-1 rounded-lg bg-accent-light text-xs font-medium text-foreground">
                    {c}
                  </span>
                ))}
              </div>

              <p className="text-sm text-foreground/70 italic">
                Cuando escribes, te contesta directamente el doctor — no una recepcionista.
              </p>

              <p className="text-sm text-foreground/70">
                {DOCTOR.worksFor.hospital} · Consultorio {DOCTOR.worksFor.consultorio}
              </p>

              <WhatsAppButton
                service="coagulacion plasma argon"
                position="doctor"
                procedureName="Coagulación con Plasma de Argón"
                size="compact"
              />

              <Link
                href={DOCTOR.profileUrl}
                className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
              >
                Ver perfil completo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REVIEWS */}
      <section className="bg-muted">
        <div className="container-page">
          <GoogleReviews />
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-background">
        <div className="container-page">
          <Faq routeKey="apc" service="coagulacion plasma argon" />
        </div>
      </section>

      {/* 8. RELATED PROCEDURES + BOTTOM CTA */}
      <section className="bg-primary">
        <div className="container-page section-padding text-center space-y-8">
          {/* Related procedures */}
          <h2 className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight">
            Procedimientos Relacionados
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {[
              { name: "Endoscopia", href: "/endoscopia-merida" },
              { name: "Colonoscopia", href: "/colonoscopia-merida" },
              { name: "Resección Endoscópica (EMR)", href: "/reseccion-endoscopica-mucosa-emr-merida" },
              { name: "Ligadura de Várices", href: "/ligadura-varices-esofagicas-merida" },
            ].map((proc) => (
              <Link
                key={proc.href}
                href={proc.href}
                className="rounded-xl border border-white/20 bg-white/10 p-4 text-white hover:bg-white/20 transition-colors text-sm font-medium"
              >
                {proc.name} →
              </Link>
            ))}
          </div>

          {/* CTA */}
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white">
            ¿Necesitas coagulación con plasma de argón?
          </h2>
          <p className="text-white/80">
            Agenda tu cita directamente con el Dr. Quiroz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              service="coagulacion plasma argon"
              position="bottom cta"
              procedureName="Coagulación con Plasma de Argón"
              className="sm:px-10"
            />
            <CallButton service="coagulacion plasma argon" position="bottom cta" variant="inverse" />
          </div>
        </div>
      </section>

      {/* JSON-LD: MedicalProcedure */}
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

      {/* JSON-LD: BreadcrumbList */}
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
    </>
  )
}
