import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn } from "@/lib/pricing"
import Image from "next/image"
import Link from "next/link"
import { Stethoscope, MapPin, Phone, MessageCircle, Globe, Calendar, CheckCircle2, ShieldCheck, Microscope, Hospital, Clock, Star, Award, Users, Heart, AlertTriangle, Activity, Zap, Target, FileText, Search, Settings, Flame } from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleReviews from "@/components/GoogleReviews";


export const revalidate = 86400
export const metadata = metaFor("apc")

export default function APCPage() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.endoscopiadelmayab.com").replace(/\/$/, "")

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-primary/5 via-background to-accent-light/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
            {/* Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-strong/10 border border-accent-strong/20">
                <Zap className="h-4 w-4 text-accent-strong" />
                <span className="text-sm font-medium text-foreground">Hemostasia Endoscópica Avanzada</span>
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground leading-tight">
                  <span className="text-accent-strong">APC</span> Coagulación con Plasma de Argón en Mérida
                </h1>
                <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-lg">
                  Tratamiento APC especializado en Mérida para hemostasia endoscópica efectiva. La coagulación con plasma de argón en Mérida ofrece control preciso de sangrado digestivo sin contacto directo con el tejido.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-accent-strong flex-shrink-0" />
                  <span className="text-foreground">Coagulación precisa sin contacto directo</span>
                </div>
                <div className="flex items-center gap-3">
                  <Flame className="h-5 w-5 text-accent-strong flex-shrink-0" />
                  <span className="text-foreground">Control inmediato de hemorragias digestivas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Microscope className="h-5 w-5 text-accent-strong flex-shrink-0" />
                  <span className="text-foreground">Tratamiento de displasias y angiodisplasias</span>
                </div>
              </div>

              {/* Price */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-accent-strong/10 to-accent-light/10 border border-accent-strong/20">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-accent-strong">{mxn(PRICING.apc.from)}</span>
                  <span className="text-foreground/60">pesos</span>
                </div>
                <p className="text-sm text-foreground/70">Precio fijo - sedación incluida</p>
              </div>

              {/* Emergency Notice */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 dark:from-red-900/20 dark:to-orange-900/20 dark:border-red-800/30">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-red-800 dark:text-red-200">Urgencias por sangrado digestivo</h3>
                    <p className="text-sm text-red-700 dark:text-red-300">Atención inmediata 24/7 - Hospital Amerimed</p>
                  </div>
                </div>
              </div>

              {/* Contact Options */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-xl border border-border bg-background/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <MessageCircle className="h-5 w-5 text-accent-strong" />
                    <span className="font-semibold text-foreground">WhatsApp directo</span>
                  </div>
                  <p className="text-foreground/80">Respuesta en minutos</p>
                </div>
                
                <div className="p-4 rounded-xl border border-border bg-background/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="h-5 w-5 text-accent-strong" />
                    <span className="font-semibold text-foreground">Disponibilidad inmediata</span>
                  </div>
                  <p className="text-foreground/80">Para urgencias por sangrado</p>
                </div>
              </div>

              {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="coagulacion plasma" position="hero" />
                      <WhatsAppButton service="coagulacion plasma" position="hero" />
                </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-light/20 to-accent-strong/20 rounded-2xl blur-xl" />
                <Image
                  src="/endoscopia-del-mayab-logo.png"
                  alt="APC Coagulación Plasma Argón Mérida"
                  width={480}
                  height={320}
                  className="relative w-full max-w-md h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              APC por {mxn(PRICING.apc.from)} Pesos - Precio Transparente
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Tecnología de coagulación con plasma de argón - costo fijo sin sorpresas
            </p>
          </div>

          {/* What's Included */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-muted/30 to-background border border-border">
            <h3 className="text-xl font-serif font-bold text-foreground mb-6 text-center">
              Todo incluido en {mxn(PRICING.apc.from)} pesos
            </h3>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Sedación monitorizada</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Generador de plasma APC especializado</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Catéter flexible y rígido disponible</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Gas argón de grado médico</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Monitoreo de coagulación en tiempo real</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Seguimiento post-procedimiento</span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-accent-light/10 border border-accent-light/20">
              <h4 className="font-semibold text-foreground mb-2">¿Por qué elegir APC?</h4>
              <p className="text-sm text-foreground/80">
                Coagulación sin contacto que minimiza el daño tisular profundo, ideal para control de sangrado y ablación de lesiones superficiales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS APC SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Qué es la Coagulación con Plasma de Argón?
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Tecnología avanzada que utiliza gas argón ionizado para crear coagulación precisa sin contacto directo
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-foreground">Cómo funciona el plasma de argón</h3>
                <p className="text-foreground/80 leading-relaxed">
                  El APC utiliza gas argón ionizado que se transforma en plasma conductivo. Este plasma transfiere energía de alta frecuencia 
                  directamente al tejido, causando coagulación inmediata sin necesidad de contacto físico con la mucosa.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">¿Cómo sella los vasos sangrantes?</h3>
                <p className="text-foreground/80 leading-relaxed">
                  El plasma ionizado crea una coagulación superficial controlada que sella los vasos sanguíneos pequeños. 
                  La energía penetra solo 2-3mm en el tejido, lo que permite un control efectivo del sangrado sin causar daño profundo 
                  o perforación, a diferencia de otros métodos térmicos.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-xl bg-accent-light/10 border border-accent-light/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-accent-strong" />
                    <span className="font-semibold text-foreground">Precisión</span>
                  </div>
                  <p className="text-sm text-foreground/80">Control exacto del área de coagulación</p>
                </div>

                <div className="p-4 rounded-xl bg-accent-light/10 border border-accent-light/20">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="h-5 w-5 text-accent-strong" />
                    <span className="font-semibold text-foreground">Seguridad</span>
                  </div>
                  <p className="text-sm text-foreground/80">Penetración tisular limitada</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="p-6 rounded-2xl bg-background border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Hemostasia endoscópica</h4>
                    <p className="text-foreground/80 text-sm">Control inmediato de sangrado digestivo activo durante endoscopia o colonoscopia</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center">
                    <Microscope className="h-6 w-6 text-accent-strong" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Ablación de lesiones</h4>
                    <p className="text-foreground/80 text-sm">Tratamiento de angiodisplasias, esófago de Barrett y displasias superficiales</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center dark:bg-green-900/30">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Reducción de reintervenciones</h4>
                    <p className="text-foreground/80 text-sm">Mayor efectividad que métodos convencionales para prevenir resangrado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN IS APC NEEDED SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Cuándo se necesita APC?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Indicaciones principales para coagulación con plasma de argón en Mérida
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Emergency Situations */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 border border-red-200 dark:from-red-900/20 dark:to-red-800/20 dark:border-red-700/30">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <h3 className="text-lg font-serif font-bold text-red-800 dark:text-red-200">Urgencias</h3>
              </div>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
                <li>• Sangrado digestivo activo</li>
                <li>• Hemorragia post-polipectomía</li>
                <li>• Sangrado de úlceras gástricas</li>
                <li>• Hemorragia de angiodisplasias</li>
              </ul>
            </div>

            {/* Planned Procedures */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 dark:from-blue-900/20 dark:to-blue-800/20 dark:border-blue-700/30">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-serif font-bold text-blue-800 dark:text-blue-200">Procedimientos programados</h3>
              </div>
              <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                <li>• Ablación de esófago de Barrett</li>
                <li>• Tratamiento de displasias</li>
                <li>• Coagulación preventiva</li>
                <li>• Revisión post-resección</li>
              </ul>
            </div>

            {/* Specific Conditions */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200 dark:from-green-900/20 dark:to-green-800/20 dark:border-green-700/30">
              <div className="flex items-center gap-3 mb-4">
                <Microscope className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-serif font-bold text-green-800 dark:text-green-200">Condiciones específicas</h3>
              </div>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                <li>• Angiodisplasias colónicas</li>
                <li>• Telangiectasias gástricas</li>
                <li>• Ectasia vascular antral</li>
                <li>• Lesiones de radiación</li>
              </ul>
            </div>
          </div>

          {/* Process Steps */}
          <div className="mt-16">
            <h3 className="text-2xl font-serif font-bold text-foreground text-center mb-12">
              Proceso del procedimiento APC
            </h3>
            
            <div className="grid gap-6 md:grid-cols-4">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Evaluación</h4>
                <p className="text-sm text-foreground/70">Endoscopia diagnóstica para localizar lesión</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent-strong/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-strong">2</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Preparación</h4>
                <p className="text-sm text-foreground/70">Sedación y configuración del equipo APC</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent-light/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-light">3</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Coagulación</h4>
                <p className="text-sm text-foreground/70">Aplicación controlada de plasma de argón</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4 dark:bg-green-900/30">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Verificación</h4>
                <p className="text-sm text-foreground/70">Confirmación de hemostasia efectiva</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      {/* COMPARISON SECTION (qualitative) */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              APC y otras técnicas de hemostasia
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Cada método tiene indicaciones específicas; el equipo elige la opción más adecuada para cada caso
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-background border border-border rounded-2xl overflow-hidden">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Método</th>
                  <th className="px-6 py-4 text-center font-semibold text-foreground">Contacto</th>
                  <th className="px-6 py-4 text-center font-semibold text-foreground">Profundidad</th>
                  <th className="px-6 py-4 text-center font-semibold text-foreground">Usos habituales</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-accent-strong/5">
                  <td className="px-6 py-4 font-semibold text-accent-strong">APC (plasma de argón)</td>
                  <td className="px-6 py-4 text-center text-foreground/80">Sin contacto</td>
                  <td className="px-6 py-4 text-center text-foreground/80">Superficial (autolimitante)</td>
                  <td className="px-6 py-4 text-foreground/80 text-sm">Hemostasia y ablación superficial (angiodisplasias, Barrett selecto)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-foreground">Electrocoagulación</td>
                  <td className="px-6 py-4 text-center text-foreground/80">Con contacto</td>
                  <td className="px-6 py-4 text-center text-foreground/80">Intermedia</td>
                  <td className="px-6 py-4 text-foreground/80 text-sm">Coagulación puntual dirigida</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-foreground">Láser</td>
                  <td className="px-6 py-4 text-center text-foreground/80">Sin contacto</td>
                  <td className="px-6 py-4 text-center text-foreground/80">Variable</td>
                  <td className="px-6 py-4 text-foreground/80 text-sm">Ablación selectiva en centros con disponibilidad</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-foreground">Clips</td>
                  <td className="px-6 py-4 text-center text-foreground/80">Mecánico</td>
                  <td className="px-6 py-4 text-center text-foreground/80">N/A</td>
                  <td className="px-6 py-4 text-foreground/80 text-sm">Cierre de vasos o defectos; complemento de terapia térmica</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-accent-light/10 border border-accent-light/20">
            <h4 className="font-semibold text-foreground mb-2">Resumen</h4>
            <p className="text-sm text-foreground/80">
              El APC destaca por su coagulación uniforme sin contacto y penetración limitada. En algunos escenarios se combina con clips,
              inyección o resección para optimizar resultados.
            </p>
          </div>
        </div>
      </section>

      {/* SUCCESS RATES SECTION */}
      {/* OUTCOMES SECTION (safe language) */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Resultados con APC
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Qué se puede esperar habitualmente con la coagulación con plasma de argón
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title:"Control inicial del sangrado", desc:"Alta tasa de control en hemorragia digestiva durante el mismo procedimiento", badge:"Alto" },
              { title:"Prevención de resangrado", desc:"Resultados favorables cuando se combina con tratamiento médico y seguimiento", badge:"Alto" },
              { title:"Ablación de lesiones", desc:"Eficacia demostrada en angiodisplasias y lesiones superficiales seleccionadas", badge:"Alto" },
            ].map((c)=>(
              <div key={c.title} className="p-8 rounded-2xl bg-gradient-to-br from-muted/20 to-background border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">{c.badge}</div>
                <h3 className="font-semibold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-foreground/80">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="p-6 rounded-2xl bg-background border border-border">
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">Factores que influyen</h3>
              <ul className="space-y-3 text-foreground/80 text-sm">
                <li>• Tamaño y localización de la lesión</li>
                <li>• Estado de la coagulación y comorbilidades</li>
                <li>• Experiencia del equipo y soporte hospitalario</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-background border border-border">
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">Seguridad</h3>
              <p className="text-sm text-foreground/80">
                El APC ofrece penetración tisular limitada y coagulación sin contacto. Como todo procedimiento, implica riesgos poco frecuentes
                (sangrado, dolor, estenosis). Se explican y minimizan con protocolos de seguridad y seguimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RECOVERY EXPECTATIONS SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Recuperación después de APC
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Qué esperar después del procedimiento de coagulación con plasma de argón
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-foreground">Cronología de recuperación</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-strong/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-accent-strong">2h</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Inmediato post-procedimiento</h4>
                    <p className="text-foreground/80 text-sm">Recuperación de sedación, observación por sangrado</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center dark:bg-blue-900/30">
                    <span className="text-sm font-bold text-blue-600">6h</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Misma tarde</h4>
                    <p className="text-foreground/80 text-sm">Dieta líquida clara, alta hospitalaria si no hay complicaciones</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/30">
                    <span className="text-sm font-bold text-green-600">24h</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Primer día</h4>
                    <p className="text-foreground/80 text-sm">Dieta blanda, actividades normales limitadas</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center dark:bg-purple-900/30">
                    <span className="text-sm font-bold text-purple-600">7d</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Primera semana</h4>
                    <p className="text-foreground/80 text-sm">Cicatrización completa, retorno a actividades normales</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-foreground">Cuidados post-APC</h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-green-50 border border-green-200 dark:bg-green-900/20 dark:border-green-800/30">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✓ Sí hacer</h4>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Dieta blanda primeras 24-48h</li>
                    <li>• Hidratación abundante</li>
                    <li>• Reposo relativo primer día</li>
                    <li>• Contactar si sangrado o dolor severo</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-red-50 border border-red-200 dark:bg-red-900/20 dark:border-red-800/30">
                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">✗ Evitar</h4>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• Alimentos muy calientes primeras 24h</li>
                    <li>• Alcohol por 48h</li>
                    <li>• Ejercicio intenso por 3 días</li>
                    <li>• Antiinflamatorios sin supervisión</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-yellow-50 border border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800/30">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">⚠ Señales de alerta</h4>
                  <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                    <li>• Sangrado activo o abundante</li>
                    <li>• Dolor abdominal intenso</li>
                    <li>• Fiebre &gt;38°C</li>
                    <li>• Vómito persistente</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DR. OMAR EXPERTISE SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Dr. Omar Quiroz - Especialista en APC
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Endoscopista con experiencia avanzada en coagulación con plasma de argón en Mérida
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-foreground">Experiencia en hemostasia endoscópica</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Especialista en gastroenterología y endoscopia digestiva con amplia experiencia en técnicas de hemostasia 
                  endoscópica, incluyendo coagulación con plasma de argón para el tratamiento de sangrado digestivo 
                  y lesiones superficiales.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">Certificación</span>
                  </div>
                  <p className="text-sm text-foreground/80">Endoscopia digestiva avanzada</p>
                </div>

                <div className="p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-accent-strong" />
                    <span className="font-semibold text-foreground">Casos realizados</span>
                  </div>
                  <p className="text-sm text-foreground/80">+500 procedimientos APC</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">Especialidades en APC:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Control de sangrado digestivo agudo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Ablación de esófago de Barrett</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Tratamiento de angiodisplasias</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Hemostasia post-resección endoscópica</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-background border border-border">
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">Equipo especializado</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Settings className="h-6 w-6 text-accent-strong flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Generador APC última generación</h4>
                      <p className="text-sm text-foreground/80">Control preciso de potencia y flujo de argón</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Microscope className="h-6 w-6 text-accent-strong flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Endoscopios de alta definición</h4>
                      <p className="text-sm text-foreground/80">Visualización óptima para aplicación precisa</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Hospital className="h-6 w-6 text-accent-strong flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Hospital Amerimed</h4>
                      <p className="text-sm text-foreground/80">Instalaciones de primer nivel en Mérida</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-accent-strong/5 border border-accent-strong/20">
                <h3 className="text-lg font-semibold text-foreground mb-3">¿Por qué elegir al Dr. Quiroz para APC?</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Experiencia específica en hemostasia endoscópica avanzada</li>
                  <li>• Acceso a tecnología de plasma de argón de última generación</li>
                  <li>• Protocolos de seguridad establecidos para urgencias</li>
                  <li>• Seguimiento personalizado post-procedimiento</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY SERVICES SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Servicios relacionados con APC
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Procedimientos endoscópicos que frecuentemente se combinan con coagulación con plasma de argón
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/endoscopia-merida" className="group p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Endoscopia diagnóstica</h3>
                  <p className="text-sm text-foreground/60">Desde {mxn(PRICING.endoscopia.from)}</p>
                </div>
              </div>
              <p className="text-sm text-foreground/80">Evaluación inicial para identificar lesiones que requieren APC</p>
            </Link>

            <Link href="/colonoscopia-merida" className="group p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center group-hover:bg-accent-strong/20 transition-colors">
                  <Microscope className="h-6 w-6 text-accent-strong" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-accent-strong transition-colors">Colonoscopia</h3>
                  <p className="text-sm text-foreground/60">Desde {mxn(PRICING.colonoscopia.from)}</p>
                </div>
              </div>
              <p className="text-sm text-foreground/80">Diagnóstico y tratamiento simultáneo de angiodisplasias colónicas</p>
            </Link>

            <Link href="/reseccion-endoscopica-mucosa-emr-merida" className="group p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors dark:bg-blue-900/30 dark:group-hover:bg-blue-800/40">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-blue-600 transition-colors">EMR + APC</h3>
                  <p className="text-sm text-foreground/60">Combinado</p>
                </div>
              </div>
              <p className="text-sm text-foreground/80">Resección mucosa seguida de hemostasia preventiva con APC</p>
            </Link>

            <Link href="/ligadura-varices-esofagicas-merida" className="group p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors dark:bg-red-900/30 dark:group-hover:bg-red-800/40">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-red-600 transition-colors">Ligadura de várices</h3>
                  <p className="text-sm text-foreground/60">Desde {mxn(PRICING.ligadura_varices.from)}</p>
                </div>
              </div>
              <p className="text-sm text-foreground/80">Control de sangrado variceal con técnicas complementarias</p>
            </Link>

            <Link href="/sutura-endoscopica-merida" className="group p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors dark:bg-purple-900/30 dark:group-hover:bg-purple-800/40">
                  <Settings className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-purple-600 transition-colors">Sutura endoscópica</h3>
                  <p className="text-sm text-foreground/60">Especializado</p>
                </div>
              </div>
              <p className="text-sm text-foreground/80">Reparación de defectos mucosos grandes con refuerzo de APC</p>
            </Link>

            <Link href="/cierre-fistulas-clips-endoscopicos-merida" className="group p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors dark:bg-green-900/30 dark:group-hover:bg-green-800/40">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-green-600 transition-colors">Cierre con clips</h3>
                  <p className="text-sm text-foreground/60">Avanzado</p>
                </div>
              </div>
              <p className="text-sm text-foreground/80">Cierre de perforaciones con hemostasia adicional por APC</p>
            </Link>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Tecnología APC avanzada en Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Equipo de última generación para coagulación con plasma de argón
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-foreground">Generador APC de precisión</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Utilizamos generadores de plasma de argón de última generación que permiten control preciso 
                  de la potencia, flujo de gas y duración de la aplicación para resultados óptimos y seguros.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                  <h4 className="font-semibold text-foreground mb-2">Control automático</h4>
                  <p className="text-sm text-foreground/80">Regulación automática de flujo según resistencia tisular</p>
                </div>

                <div className="p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                  <h4 className="font-semibold text-foreground mb-2">Seguridad integrada</h4>
                  <p className="text-sm text-foreground/80">Sistemas de protección contra sobrecalentamiento</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">Características técnicas:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Zap className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Potencia variable: 10-120W</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Activity className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Flujo de argón: 0.1-5.0 L/min</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Catéteres flexibles y rígidos disponibles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Monitoreo continuo de impedancia</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-background border border-border">
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">Ventajas tecnológicas</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Coagulación sin contacto</h4>
                      <p className="text-sm text-foreground/80">El plasma salta automáticamente al tejido más cercano</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent-strong/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-accent-strong">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Efecto autolimitante</h4>
                      <p className="text-sm text-foreground/80">Se detiene automáticamente al alcanzar coagulación</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 dark:bg-green-900/30">
                      <span className="text-sm font-bold text-green-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Penetración uniforme</h4>
                      <p className="text-sm text-foreground/80">Coagulación homogénea en superficies irregulares</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-accent-light/10 border border-accent-light/20">
                <h3 className="text-lg font-semibold text-foreground mb-3">Hospital Amerimed - Tecnología médica</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Torre endoscópica de alta definición</li>
                  <li>• Sala de endoscopia con monitoreo avanzado</li>
                  <li>• Gas argón de grado médico certificado</li>
                  <li>• Equipos de respaldo para urgencias</li>
                  <li>• Protocolos de mantenimiento estrictos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-accent-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Necesita coagulación con plasma de argón?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Consulte disponibilidad para APC en Mérida. Atención de urgencias por sangrado digestivo las 24 horas.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-foreground">Contacto directo</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Para urgencias por sangrado digestivo o consulta sobre tratamiento con APC, 
                  comuníquese directamente para evaluación y programación inmediata.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-xl border border-border bg-background/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="h-5 w-5 text-accent-strong" />
                    <span className="font-semibold text-foreground">Llamada directa</span>
                  </div>
                  <p className="text-foreground/80">Respuesta inmediata</p>
                </div>
                
                <div className="p-4 rounded-xl border border-border bg-background/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <MessageCircle className="h-5 w-5 text-accent-strong" />
                    <span className="font-semibold text-foreground">WhatsApp directo</span>
                  </div>
                  <p className="text-foreground/80">Respuesta en minutos</p>
                </div>
                
                <div className="p-4 rounded-xl border border-border bg-background/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="h-5 w-5 text-accent-strong" />
                    <span className="font-semibold text-foreground">Urgencias 24/7</span>
                  </div>
                  <p className="text-foreground/80">Hospital Amerimed</p>
                </div>

                <div className="p-4 rounded-xl border border-border bg-background/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="h-5 w-5 text-accent-strong" />
                    <span className="font-semibold text-foreground">Ubicación</span>
                  </div>
                  <p className="text-foreground/80">Mérida, Yucatán</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-accent-light/10 border border-accent-light/20">
                <p className="text-foreground/80 mb-4">
                  Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                  Sábados: 8:00 AM - 2:00 PM<br />
                  <span className="text-accent-strong font-medium">Urgencias digestivas atendidas 24/7</span>
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="coagulacion plasma" position="cta section" />
                      <WhatsAppButton service="coagulacion plasma" position="cta section" />
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-light/20 to-accent-strong/20 rounded-2xl blur-xl" />
                <Image
                  src="/endoscopia-del-mayab-logo.png"
                  alt="Endoscopia del Mayab - Contacto APC"
                  width={480}
                  height={320}
                  className="relative w-full max-w-md h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* GOOGLE REVIEWS COMPONENT */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoogleReviews className="mt-8" />
        </div>
      </section>

      {/* PROCEDURES GRID COMPONENT */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProceduresGrid />
        </div>
      </section>

      {/* FAQ LIST COMPONENT */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Faq routeKey="apc" />
        </div>
      </section>
      </>
  )
}
