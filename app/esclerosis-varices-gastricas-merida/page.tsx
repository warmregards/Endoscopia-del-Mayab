import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn } from "@/lib/pricing"
import Image from "next/image"
import Link from "next/link"
import { Heart, Clock, CheckCircle2, AlertTriangle, Stethoscope, Phone, MapPin, Star } from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleReviews from "@/components/GoogleReviews";
import { inter, montserrat } from "@/app/fonts";


export const revalidate = 86400
export const metadata = metaFor("esclerosis_varices_gastricas")

export default function EsclerosisVaricesGastricasPage() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.endoscopiadelmayab.com").replace(/\/$/, "")

  return (
    <div className="min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 bg-gradient-to-b from-accent-light/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-2 text-accent-strong font-medium">
              <Heart className="h-5 w-5" />
              <span>Control Especializado de Hemorragias</span>
            </div>
            
            <h1 className="`${montserrat.className}text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight`">
              Esclerosis de Várices Gástricas en Mérida
            </h1>
            
            <p className="`${inter.className} text-xl text-foreground/80 leading-relaxed`">
              El Dr. Omar Quiroz ofrece tratamiento endoscópico especializado para el control de hemorragias por várices gástricas. Disponible 24/7 para emergencias en Hospital Amerimed, Mérida, Yucatán.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="esclerosis varices" position="hero" />
                      <WhatsAppButton service="esclerosis varices" position="hero" />
                </div>
            </div>

            <div className="pt-6 text-center">
              <p className="text-foreground/60">
                Desde <span className="font-bold text-accent-strong">{mxn(15000)}</span> • Sedación incluida
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="precio-varices-gastricas" className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Esclerosis de várices gástricas en Mérida: precio y qué incluye
            </h2>
            <p className="text-lg text-foreground/70">Desde {mxn(15000)} — sedación incluida</p>
          </div>

          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-muted/30 to-background border border-border">
            <h3 className="text-xl font-serif font-bold text-foreground mb-6 text-center">¿Qué incluye?</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-foreground/80">Sedación con anestesiólogo y monitoreo continuo</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-foreground/80">Endoscopia terapéutica con agente esclerosante</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-foreground/80">Materiales estándar y equipo Olympus HD</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-foreground/80">Primera valoración y plan de seguimiento</span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20 text-sm text-foreground/80">
              <p>
                <strong>Puede tener costo extra (según complejidad):</strong> mayor volumen de agente hemostático, dispositivos adicionales,
                estancia hospitalaria/UCI, estudios de laboratorio/imagen y transfusiones. Siempre se explica y autoriza antes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS GASTRIC VARICES SCLEROTHERAPY */}
      <section id="que-es" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  ¿Qué es la Esclerosis de Várices Gástricas?
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Las várices gástricas son venas dilatadas en la pared del estómago que se forman cuando la presión en el sistema portal aumenta, comúnmente en pacientes con cirrosis hepática.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-foreground/80">
                  La esclerosis de várices gástricas es un procedimiento endoscópico especializado donde el Dr. Quiroz inyecta agentes esclerosantes directamente en las várices sangrantes para sellarlas y controlar la hemorragia.
                </p>
                <p className="text-foreground/80">
                  Este tratamiento es crucial en emergencias por sangrado digestivo alto y como medida preventiva en pacientes con várices de alto riesgo.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-accent-light/10 to-accent-strong/10 border border-accent-strong/20">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-accent-strong mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Atención de Emergencia</h3>
                    <p className="text-foreground/80">
                      El sangrado por várices gástricas es una urgencia médica. El Dr. Quiroz está disponible 24/7 en Hospital Amerimed para atención inmediata.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-border bg-background/50">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  ¿Cuándo se Necesita este Tratamiento?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">Sangrado activo por várices gástricas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">Prevención en várices de alto riesgo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">Pacientes con cirrosis e hipertensión portal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">Historia previa de sangrado digestivo</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Ventaja Quirúrgica del Dr. Quiroz</h3>
                </div>
                <p className="text-foreground/80">
                  Su formación como cirujano le permite comprender la anatomía vascular compleja y manejar complicaciones técnicas durante el procedimiento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-STEP PROCESS */}
      <section id="proceso" className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Proceso de Tratamiento en 4 Pasos
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Protocolo estructurado para el manejo seguro y efectivo de várices gástricas
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                <span className="font-bold text-accent-strong">1</span>
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Evaluación de Emergencia
              </h3>
              <p className="text-foreground/80">
                Estabilización hemodinámica, evaluación de la severidad del sangrado y preparación para endoscopia urgente.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                <span className="font-bold text-accent-strong">2</span>
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Localización Endoscópica
              </h3>
              <p className="text-foreground/80">
                Identificación precisa de las várices sangrantes mediante endoscopia diagnóstica bajo sedación profunda.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                <span className="font-bold text-accent-strong">3</span>
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Inyección Esclerosante
              </h3>
              <p className="text-foreground/80">
                Aplicación controlada del agente esclerosante directamente en las várices para sellar el sangrado.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                <span className="font-bold text-accent-strong">4</span>
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Monitoreo y Seguimiento
              </h3>
              <p className="text-foreground/80">
                Observación hospitalaria, control de signos vitales y programación de endoscopia de seguimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SYMPTOMS SECTION */}
      <section id="sintomas" className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Reconoces estos síntomas de sangrado por várices gástricas?
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Si tienes cirrosis y presentas estos síntomas, busca atención inmediata
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Hematemesis */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                ¿Vomitas sangre o "borra de café"?
              </h3>
              <p className="text-foreground/80 mb-3">
                Hematemesis - sangre fresca en vómito
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-sm font-medium text-red-600">
                <AlertTriangle className="h-4 w-4" />
                Emergencia médica - llama YA
              </div>
            </div>

            {/* Melena */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                ¿Evacuaciones negras y pegajosas?
              </h3>
              <p className="text-foreground/80 mb-3">
                Melena - indica sangrado digestivo
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-sm font-medium text-orange-600">
                <AlertTriangle className="h-4 w-4" />
                Señal de hemorragia interna
              </div>
            </div>

            {/* Hypotension */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                ¿Mareo severo y debilidad súbita?
              </h3>
              <p className="text-foreground/80 mb-3">
                Pérdida de sangre, presión baja
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-sm font-medium text-red-600">
                <Heart className="h-4 w-4" />
                Tu cuerpo perdiendo volumen
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20">
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">PACIENTES EN MÉRIDA</h3>
                <p className="text-foreground/80">
                  Si tienes 2 o más síntomas + cirrosis, ve a Hospital Amerimed o llama <strong>(999) 236-0153</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREPARATION SECTION */}
      <section id="preparacion" className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Preparación Simple para tu Tratamiento
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Instrucciones claras para mejores resultados
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* 48 Hours Before */}
            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                <span className="font-bold text-accent-strong">48h</span>
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                48 horas antes
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Suspender anticoagulantes (con autorización médica)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Organizar acompañante</span>
                </li>
              </ul>
            </div>

            {/* Day Before */}
            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Día anterior
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Ayuno desde medianoche</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Solo líquidos claros hasta 8 horas antes</span>
                </li>
              </ul>
            </div>

            {/* Day Of */}
            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-accent-light/10 flex items-center justify-center mb-4">
                <Stethoscope className="h-6 w-6 text-accent-light" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Día del procedimiento
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-light flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Ayuno completo (ni agua)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-light flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Llegar 1 hora antes</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20">
              <h3 className="font-semibold text-foreground mb-2">Casos de Emergencia</h3>
              <p className="text-foreground/80 text-sm">
                        Si hay sangrado activo, la preparación se adapta: la prioridad es controlar la hemorragia de inmediato.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">Ubicación</h3>
              <p className="text-foreground/80 text-sm">
                Hospital Amerimed, Chichí Suárez - estacionamiento disponible
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RECOVERY SECTION */}
      <section id="recuperacion" className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Tu Recuperación Paso a Paso
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Cronología clara de qué esperar después del tratamiento
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* First 8 Hours */}
            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-accent-strong" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Primeras 8 horas - Hospital
              </h3>
              <ul className="space-y-2 text-foreground/80 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Observación continua, solo hielos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Normal: garganta irritada, ligero mareo</span>
                </li>
              </ul>
            </div>

            {/* Days 1-2 */}
            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <span className="font-bold text-primary">1-2</span>
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Días 1-2 - Hospitalización
              </h3>
              <ul className="space-y-2 text-foreground/80 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dieta líquidos → blandos gradualmente</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Medicamentos antiácidos</span>
                </li>
              </ul>
            </div>

            {/* Week 1 */}
            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-accent-light/10 flex items-center justify-center mb-4">
                <span className="font-bold text-accent-light">7d</span>
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Semana 1 - Casa
              </h3>
              <ul className="space-y-2 text-foreground/80 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-light flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Actividades ligeras solamente</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-light flex-shrink-0 mt-0.5" />
                  <span className="text-sm">NO levantar peso, NO alcohol</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-light flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Cita control con Dr. Quiroz</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                Alerta Inmediata si tienes:
              </h3>
              <ul className="space-y-1 text-foreground/80 text-sm">
                <li>• Vómito con sangre</li>
                <li>• Evacuaciones negras nuevamente</li>
                <li>• Mareo severo</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Contacto
              </h3>
              <p className="text-foreground/80 text-sm">
                Hospital Amerimed 24/7 para emergencias post-tratamiento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTRAINDICATIONS SECTION */}
      <section id="contraindicaciones" className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Situaciones Donde NO es Seguro el Procedimiento
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Transparencia médica sobre cuándo evaluar otras opciones
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Absolute Contraindications */}
            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                NO es posible si:
              </h3>
              <ul className="space-y-2 text-foreground/80 text-sm">
                <li>• Coagulopatía severa no corregible</li>
                <li>• Shock severo sin respuesta a tratamiento</li>
                <li>• Obstrucción que impide paso del endoscopio</li>
              </ul>
            </div>

            {/* Relative Contraindications */}
            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                <Stethoscope className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Requiere evaluación especial:
              </h3>
              <ul className="space-y-2 text-foreground/80 text-sm">
                <li>• Ascitis masiva</li>
                <li>• Encefalopatía hepática severa</li>
                <li>• Edad &gt;80 años con múltiples enfermedades</li>
              </ul>
            </div>

            {/* Alternatives */}
            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Alternativas:
              </h3>
              <ul className="space-y-2 text-foreground/80 text-sm">
                <li>• Taponamiento temporal</li>
                <li>• Derivación TIPS</li>
                <li>• Coordinación con otros especialistas</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-primary/10 border border-primary/20 text-center">
            <p className="text-foreground/80">
              Dr. Quiroz evalúa cada caso individualmente en Hospital Amerimed
            </p>
          </div>
        </div>
      </section>

      {/* EMERGENCY VS ELECTIVE SECTION */}
      <section id="urgente-o-cita" className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Es Urgente o Puedes Programar Cita?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Guía clara para tomar la decisión correcta
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Emergency */}
            <div className="p-8 rounded-2xl border-2 border-red-500/30 bg-gradient-to-br from-red-500/5 to-red-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  🚨 EMERGENCIA - Llama YA
                </h3>
              </div>
              
              <div className="space-y-4">
                <ul className="space-y-2 text-foreground/80">
                  <li>• Vómito con sangre</li>
                  <li>• Evacuaciones negras</li>
                  <li>• Mareo severo, desmayos</li>
                </ul>
                
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="text-foreground/80 text-sm font-medium">
                    Hospital Amerimed 24/7 disponible
                  </p>
                  <p className="text-foreground/80 text-sm">
                    <strong>(999) 236-0153</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Elective */}
            <div className="p-8 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  📅 PROGRAMA CONSULTA
                </h3>
              </div>
              
              <div className="space-y-4">
                <ul className="space-y-2 text-foreground/80">
                  <li>• Várices conocidas sin sangrado</li>
                  <li>• Cirrosis estable para evaluación</li>
                  <li>• Seguimiento rutinario</li>
                </ul>
                
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <p className="text-foreground/80 text-sm font-medium">
                    Mejor preparación = mejores resultados
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-2xl bg-orange-500/10 border border-orange-500/20">
              <h3 className="font-semibold text-foreground mb-2">Ante Duda</h3>
              <p className="text-foreground/80 text-sm">
                Siempre consulta - mejor prevenir que lamentar
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">Contacto</h3>
              <p className="text-foreground/80 text-sm">
                <strong>Emergencia:</strong> Urgencias Hospital Amerimed<br/>
                <strong>Consultas:</strong> WhatsApp (999) 236-0153
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DR. OMAR'S SURGICAL ADVANTAGE */}
      <section id="ventaja-quirurgica" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  La Ventaja Quirúrgica del Dr. Omar Quiroz
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Su formación dual como cirujano y endoscopista le permite manejar casos complejos de hemorragia por várices gástricas con mayor precisión y seguridad.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Stethoscope className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Comprensión Anatómica Avanzada</h3>
                    <p className="text-foreground/80">
                      Conocimiento profundo de la circulación portal y las variantes anatómicas que pueden complicar el tratamiento.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Manejo de Emergencias 24/7</h3>
                    <p className="text-foreground/80">
                      Disponibilidad inmediata para casos de hemorragia digestiva alta por várices gástricas en Hospital Amerimed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Técnicas Avanzadas</h3>
                    <p className="text-foreground/80">
                      Dominio de múltiples agentes esclerosantes y técnicas combinadas para casos refractarios al tratamiento inicial.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent-strong/5">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Infraestructura Hospitalaria Completa
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">Unidad de Cuidados Intensivos disponible</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">Banco de sangre 24 horas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">Anestesiólogos certificados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">Equipo endoscópico Olympus HD</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-accent-strong/10 border border-accent-strong/20">
                <h3 className="font-semibold text-foreground mb-2">Para Familias en Mérida</h3>
                <p className="text-foreground/80">
                  Entendemos la urgencia de estos casos. Proporcionamos comunicación clara y constante a familiares durante todo el proceso de tratamiento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENT EXPERIENCE & RECOVERY */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Qué Esperar Durante el Tratamiento?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-background border border-border">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Durante el Procedimiento
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">Sedación profunda monitorizada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">No siente dolor durante el tratamiento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">Duración: 30-60 minutos típicamente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">Monitoreo continuo de signos vitales</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Recuperación Post-Procedimiento
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">Observación hospitalaria 24-48 horas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">Dieta líquida inicial progresiva</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">Medicación para reducir acidez gástrica</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">Seguimiento endoscópico en 2-4 semanas</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Costo del Tratamiento
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80">Esclerosis de várices gástricas</span>
                    <span className="font-bold text-primary">{mxn(15000)}</span>
                  </div>
                  <div className="pt-3 border-t border-primary/20">
                    <p className="text-foreground/70 text-sm">
                      Incluye: Sedación, quirófano, materiales especializados y seguimiento inicial
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-accent-strong/10">
                    <p className="text-foreground/80 text-sm">
                      <strong>Casos de emergencia:</strong> El costo puede variar según la complejidad del sangrado y los materiales requeridos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-accent-strong/10 border border-accent-strong/20">
                <h3 className="font-semibold text-foreground mb-3">Ubicación en Mérida</h3>
                <div className="space-y-2 text-foreground/80">
                  <p><strong>Hospital Amerimed</strong></p>
                  <p>Consultorio 517 - Gastroenterología</p>
                  <p>Chichí Suárez, Mérida, Yucatán</p>
                  <p className="text-sm">Fácil acceso desde Centro, Montebello, Altabrisa, Temozon Norte, Cholul y García Ginerés</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PROCEDURES */}
      <section id="relacionados" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Procedimientos Relacionados
            </h2>
            <p className="text-lg text-foreground/70">
              Otros tratamientos especializados para manejo de hemorragias digestivas
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/ligadura-varices-esofagicas-merida"
              className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Ligadura de Várices Esofágicas
              </h3>
              <p className="text-foreground/80">
                Tratamiento con bandas elásticas para várices del esófago sangrantes o de alto riesgo.
              </p>
            </Link>

            <Link
              href="/cpre-merida"
              className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                CPRE (Colangiopancreatografía)
              </h3>
              <p className="text-foreground/80">
                Procedimiento diagnóstico y terapéutico para vías biliares y páncreas.
              </p>
            </Link>

            <Link
              href="/emergencias-digestivas-merida"
              className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Emergencias Digestivas 24/7
              </h3>
              <p className="text-foreground/80">
                Atención inmediata para hemorragias y urgencias endoscópicas.
              </p>
            </Link>
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
      <section id="faqs-esclerosis-varices" className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Faq routeKey="esclerosis_varices_gastricas" />
        </div>
      </section>

    
    </div>
  )
}
