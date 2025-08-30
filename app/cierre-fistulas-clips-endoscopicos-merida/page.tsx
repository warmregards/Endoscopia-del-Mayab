import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn } from "@/lib/pricing"
import Image from "next/image"
import Link from "next/link"
import { Stethoscope, MapPin, Phone, MessageCircle, Globe, CheckCircle2, ShieldCheck, Microscope, Hospital, Clock, Star, Award, Users, Heart, AlertTriangle, Activity, Calendar, Target, FileText, Search, Zap, Users2, Brain, Settings } from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleReviews from "@/components/GoogleReviews";


export const revalidate = 86400
export const metadata = metaFor("cierre_fistulas_clips")


export default function CierreFistulasPage() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.endoscopiadelmayab.com").replace(/\/$/, "")

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent-light/5 to-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Content - Left Side */}
            <div className="flex-1 lg:max-w-3xl space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light/10 border border-accent-light/20">
                  <Zap className="h-4 w-4 text-accent-strong" />
                  <span className="text-sm font-medium text-foreground">Procedimiento Avanzado</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-foreground leading-tight">
                  Cierre de Fístulas con Clips Endoscópicos en Mérida | Dr. Omar Quiroz - Reparación Mínimamente Invasiva
                </h1>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  El <strong>Cierre de Fístulas con Clips Endoscópicos</strong> en Mérida utiliza clips metálicos especializados para reparar perforaciones digestivas sin cirugía abierta. El Dr. Omar Quiroz realiza este procedimiento mínimamente invasivo en Hospital Amerimed. El precio varía según complejidad del caso, con costo transparente desde la consulta inicial.
                </p>

                <p className="text-xl text-accent-strong font-semibold">
                  Cierre endoscópico desde {mxn(PRICING.cierre_fistulas_clips.from)} - Alternativa mínimamente invasiva a cirugía abierta
                </p>

                <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Sin cirugía abierta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Recuperación rápida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Hospital Amerimed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Precio transparente</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="cierre fistulas" position="hero" />
                      <WhatsAppButton service="cierre fistulas" position="hero" />
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* WHAT IS FISTULA CLOSURE SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Qué es el Cierre de Fístulas con Clips Endoscópicos?
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Procedimiento mínimamente invasivo que utiliza clips metálicos especializados para cerrar perforaciones digestivas
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center mb-16">
            {/* Explanation */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  El <strong>Cierre de Fístulas con Clips Endoscópicos</strong> es una alternativa avanzada a la cirugía
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Este procedimiento utiliza clips metálicos especializados para cerrar perforaciones o fugas en el tracto digestivo sin necesidad de cirugía abierta.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Tipos de fístulas tratadas:</strong> Digestivas, esofágicas, gástricas, duodenales, colónicas
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Ventaja sobre cirugía:</strong> Método más económico comparado con cirugía tradicional, con tiempo de recuperación reducido y menor riesgo de complicaciones.
                </p>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-accent-strong" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Mínimamente Invasivo</h4>
                <p className="text-sm text-foreground/70">Sin incisiones grandes, solo acceso endoscópico</p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Recuperación Rápida</h4>
                <p className="text-sm text-foreground/70">Menos tiempo hospitalario que cirugía abierta</p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-accent-strong" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Menor Riesgo</h4>
                <p className="text-sm text-foreground/70">Reducido riesgo de infección y complicaciones</p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Costo Menor</h4>
                <p className="text-sm text-foreground/70">Más económico que cirugía tradicional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN YOU NEED THIS PROCEDURE */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Cuándo Necesitas Cierre de Fístulas Endoscópico?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Situaciones donde el cierre con clips puede ser la mejor opción terapéutica
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Perforación Post-Endoscopia */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Perforación Post-Endoscopia
              </h3>
              <p className="text-foreground/80 mb-4">
                Complicación menor durante procedimiento endoscópico que requiere cierre inmediato.
              </p>
              <div className="text-sm text-red-600 font-medium">
                → Tratamiento de urgencia disponible
              </div>
            </div>

            {/* Fístulas Post-Quirúrgicas */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Fístulas Post-Quirúrgicas
              </h3>
              <p className="text-foreground/80 mb-4">
                Fugas después de cirugía digestiva que no cicatrizan adecuadamente.
              </p>
              <div className="text-sm text-orange-600 font-medium">
                → Alternative a nueva cirugía
              </div>
            </div>

            {/* Perforaciones Espontáneas */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Perforaciones Espontáneas
              </h3>
              <p className="text-foreground/80 mb-4">
                Por úlceras profundas o enfermedad inflamatoria intestinal severa.
              </p>
              <div className="text-sm text-yellow-600 font-medium">
                → Evaluación caso por caso
              </div>
            </div>

            {/* Dehiscencia de Suturas */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Dehiscencia de Suturas
              </h3>
              <p className="text-foreground/80 mb-4">
                Fallas en cicatrización post-operatoria que requieren refuerzo.
              </p>
              <div className="text-sm text-blue-600 font-medium">
                → Refuerzo con clips especializados
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
              <AlertTriangle className="h-5 w-5 text-accent-strong" />
              <span className="font-semibold text-foreground">Importante:</span>
              <span className="text-foreground/70">No todas las fístulas son candidatas - evaluación individual requerida</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCEDURE PROCESS SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Proceso del Cierre Endoscópico de Fístulas
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Procedimiento paso a paso con tecnología avanzada
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {/* Step 1 */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-foreground mb-2">Evaluación pre-procedimiento</h3>
              <p className="text-sm text-foreground/80">Registro en Hospital Amerimed (10 min)</p>
            </div>

            {/* Step 2 */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-foreground mb-2">Sedación segura</h3>
              <p className="text-sm text-foreground/80">Anestesiólogo certificado (5 min)</p>
            </div>

            {/* Step 3 */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-foreground mb-2">Localización endoscópica</h3>
              <p className="text-sm text-foreground/80">Identificación precisa de la fístula (15 min)</p>
            </div>

            {/* Step 4 */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-foreground mb-2">Colocación de clips</h3>
              <p className="text-sm text-foreground/80">Aplicación de clips metálicos especializados (20-40 min)</p>
            </div>

            {/* Step 5 */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                5
              </div>
              <h3 className="font-semibold text-foreground mb-2">Observación</h3>
              <p className="text-sm text-foreground/80">Vigilancia post-procedimiento (30-60 min)</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
              <Zap className="h-5 w-5 text-accent-strong" />
              <span className="font-semibold text-foreground">Duración total:</span>
              <span className="text-foreground/70">45-90 minutos según complejidad del caso</span>
            </div>
          </div>
        </div>
      </section>

      {/* DR. OMAR'S SURGICAL ADVANTAGE */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Dr. Omar Quiroz - Ventaja Quirúrgica Única</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight">
                  ¿Por Qué la Experiencia Quirúrgica es Crucial en Cierre de Fístulas?
                </h2>
                
                <p className="text-lg text-foreground/80 leading-relaxed">
                  La mayoría de endoscopistas en Mérida envían casos complejos de cierre de fístulas a cirugía cuando los clips no son suficientes. <strong>El Dr. Quiroz es diferente</strong> - como cirujano especializado, puede manejar complicaciones que otros no pueden resolver y ofrecer soluciones quirúrgicas inmediatas si el cierre endoscópico no es exitoso.
                </p>
              </div>
            </div>

            {/* Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Casos Complejos</p>
                    <p className="text-sm text-foreground/70">Maneja anatomía difícil que otros derivan</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-strong mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Solución Inmediata</p>
                    <p className="text-sm text-foreground/70">Cirugía laparoscópica si clips no son suficientes</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Coordinación Completa</p>
                    <p className="text-sm text-foreground/70">Plan integrado endoscopia + cirugía si necesario</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-strong mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Seguimiento Experto</p>
                    <p className="text-sm text-foreground/70">Vigilancia de cicatrización con criterio quirúrgico</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREPARATION & RECOVERY */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Preparación y Recuperación
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Instrucciones claras para mejores resultados
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Preparación */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 rounded-2xl bg-accent-strong/10 flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Preparación Pre-Procedimiento
              </h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Ayuno de 12 horas sólidos,</strong> 8 horas líquidos</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Medicamentos esenciales</strong> con sorbo mínimo</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Acompañante obligatorio</strong> para el alta</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Estudios previos:</strong> Tomografía o endoscopia diagnóstica</p>
                </div>
              </div>
            </div>

            {/* Post-Procedimiento */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Recuperación Post-Procedimiento
              </h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p><strong>Observación 2-4 horas</strong> en hospital</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p><strong>Dieta líquida 24-48 horas</strong> según tolerancia</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p><strong>Control endoscópico</strong> en 1-2 semanas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p><strong>Vigilancia de signos de alarma</strong> 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING & LOGISTICS */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Precio y Costo del Cierre de Fístulas en Mérida - Hospital Amerimed
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Transparencia total en precios desde la consulta inicial
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Pricing Details */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 rounded-2xl bg-accent-strong/10 flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Estructura de Precios
              </h3>
              <div className="space-y-4 text-foreground/80">
                <div className="p-4 rounded-lg bg-muted/30">
                  <p className="font-semibold text-foreground">Precio base: Desde {mxn(PRICING.cierre_fistulas_clips.from)}</p>
                  <p className="text-sm">Costo inicial para casos simples</p>
                </div>
                <div className="space-y-2">
                  <p><strong>El costo final depende de:</strong></p>
                  <ul className="space-y-1 text-sm pl-4">
                    <li>• Número de clips necesarios</li>
                    <li>• Complejidad del caso</li>
                    <li>• Tiempo quirúrgico requerido</li>
                    <li>• Ubicación y tamaño de fístula</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-primary/10">
                  <p className="font-semibold text-primary">Cotización sin compromiso</p>
                  <p className="text-sm text-foreground/70">Precio exacto después de evaluación inicial</p>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Qué Incluye el Precio
              </h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p>Procedimiento endoscópico completo</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p>Sedación y monitoreo anestésico</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p>Clips metálicos especializados</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p>Observación post-procedimiento</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p>Seguimiento inicial</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-semibold text-foreground mb-2">Costos Adicionales</h4>
                <div className="text-sm text-foreground/70 space-y-1">
                  <p>• Estudios previos (tomografía)</p>
                  <p>• Medicamentos externos</p>
                  <p>• Consultas de seguimiento</p>
                </div>
              </div>
            </div>
          </div>

          {/* Insurance & Payment */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="p-6 rounded-xl bg-background border border-border text-center">
              <ShieldCheck className="h-8 w-8 text-accent-strong mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Seguros Médicos</h4>
              <p className="text-sm text-foreground/70">Muchos seguros cubren el procedimiento como tratamiento terapéutico</p>
            </div>
            <div className="p-6 rounded-xl bg-background border border-border text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Precio Transparente</h4>
              <p className="text-sm text-foreground/70">Sin sorpresas en el costo final, cotización previa clara</p>
            </div>
            <div className="p-6 rounded-xl bg-background border border-border text-center">
              <Hospital className="h-8 w-8 text-accent-strong mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Hospital Amerimed</h4>
              <p className="text-sm text-foreground/70">Instalaciones especializadas en Mérida, Yucatán</p>
            </div>
          </div>
        </div>
      </section>

      {/* DR. OMAR CREDENTIALS SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Dr. Omar Quiroz - Especialista en Procedimientos Endoscópicos Avanzados</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight">
                  Triple Certificación con Entrenamiento Internacional
                </h2>
                
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Con <strong>más de 200 procedimientos terapéuticos</strong> realizados con clips y suturas endoscópicas. El Dr. Quiroz tiene triple certificación en Cirugía General, Laparoscópica y Endoscopia Terapéutica, con fellowship internacional en procedimientos avanzados.
                </p>
                
                <div className="p-6 rounded-xl bg-muted/20 border border-border">
                  <p className="text-foreground/80 italic">
                    "Como cirujano especializado en endoscopia, puedo ofrecer opciones que otros no pueden cuando el cierre endoscópico no es suficiente"
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border hover:shadow-md transition-all">
                <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Cirugía General</p>
                  <p className="text-xs text-foreground/70">UNAM • Cédula CIR180523</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border hover:shadow-md transition-all">
                <ShieldCheck className="h-6 w-6 text-accent-strong flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Alta Especialidad Endoscopia</p>
                  <p className="text-xs text-foreground/70">4 años especializados • Cédula EGI230072</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border hover:shadow-md transition-all">
                <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Fellowship Internacional</p>
                  <p className="text-xs text-foreground/70">Gastric Sleeve Center, Florida</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border hover:shadow-md transition-all">
                <ShieldCheck className="h-6 w-6 text-accent-strong flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Laparoscopia Avanzada</p>
                  <p className="text-xs text-foreground/70">Centro Médico ABC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPETITIVE ADVANTAGES */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Por Qué Elegir al Dr. Omar Quiroz?
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Experiencia integrada, tecnología avanzada y transparencia total
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Experiencia Integrada */}
            <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-accent-strong/10 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Experiencia Integrada
              </h3>
              <div className="space-y-2 text-foreground/80">
                <p>• Combinación única: Cirujano + Endoscopista</p>
                <p>• Maneja complicaciones que otros derivan</p>
                <p>• Respaldo quirúrgico inmediato disponible</p>
              </div>
            </div>

            {/* Tecnología Avanzada */}
            <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Microscope className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Tecnología Avanzada
              </h3>
              <div className="space-y-2 text-foreground/80">
                <p>• Clips metálicos especializados</p>
                <p>• Equipo Olympus de última generación</p>
                <p>• Instalaciones Hospital Amerimed</p>
              </div>
            </div>

            {/* Transparencia Total */}
            <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-accent-strong/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Transparencia Total
              </h3>
              <div className="space-y-2 text-foreground/80">
                <p>• Precios claros desde consulta</p>
                <p>• Sin sorpresas en costos</p>
                <p>• Cotización previa siempre disponible</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-accent-light/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Necesitas Cierre de Fístulas? Evaluación Especializada Disponible
            </h2>
            <p className="text-lg text-foreground/70">
              Emergencias digestivas 24/7 - No esperes si tienes complicaciones post-quirúrgicas
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-border bg-background/80 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-accent-strong" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-foreground">
                      Síntomas que requieren evaluación inmediata
                    </h3>
                    <p className="text-foreground/70">Fugas o perforaciones digestivas</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>• Fuga post-operatoria con dolor severo</p>
                  <p>• Perforación durante endoscopia</p>
                  <p>• Fístula que no cicatriza adecuadamente</p>
                  <p>• Dolor abdominal intenso con fiebre</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-xl border border-border bg-background/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <MessageCircle className="h-5 w-5 text-accent-strong" />
                    <span className="font-semibold text-foreground">WhatsApp directo</span>
                  </div>
                  <p className="text-foreground/80">Descripción de síntomas</p>
                </div>
                
                <div className="p-4 rounded-xl border border-border bg-background/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="h-5 w-5 text-accent-strong" />
                    <span className="font-semibold text-foreground">999-236-0153</span>
                  </div>
                  <p className="text-foreground/80">Emergencias 24 horas</p>
                </div>
              </div>

              {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="cierre fistulas" position="cta section" />
                      <WhatsAppButton service="cierre fistulas" position="cta section" />
                </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-light/20 to-accent-strong/20 rounded-2xl blur-xl" />
                <Image
                  src="/endoscopia-del-mayab-logo.png"
                  alt="Cierre de Fístulas en Mérida - Contacto"
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
          <Faq routeKey="cierre_fistulas_clips" />
        </div>
      </section>
    </>
  )
}
