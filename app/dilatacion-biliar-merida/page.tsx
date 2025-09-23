import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn } from "@/lib/pricing"
import Image from "next/image"
import Link from "next/link"
import { Stethoscope, MapPin, Phone, MessageCircle, Globe, CheckCircle2, ShieldCheck, Microscope, Hospital, Clock, Star, Award, Users, Heart, AlertTriangle, Activity, Download, Calendar, Target, FileText, Search, Zap, ArrowRight, ExternalLink } from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews";
import { inter, montserrat } from "@/app/fonts";


export const revalidate = 86400
export const metadata = metaFor("dilatacion_biliar")

export default function DilatacionBiliarPage() {
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-200">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium text-red-700">Urgencias Biliares 24/7</span>
                </div>

                <h1 className="`${montserrat.className} text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-foreground leading-tight`">
                  Dilatación Biliar Endoscópica en Mérida | Dr. Omar Quiroz - Tratamiento Urgente de Estenosis Biliares
                </h1>

                <p className="`${inter.className} text-lg text-foreground/80 leading-relaxed`">
                  La dilatación biliar endoscópica en Mérida es un procedimiento especializado para tratar estenosis de conductos biliares sin cirugía abierta. El Dr. Omar Quiroz realiza dilatación biliar en Hospital Amerimed, Mérida, Yucatán, ofreciendo esta técnica mínimamente invasiva con precio transparente desde $25,000 MXN.
                </p>

                <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Urgencias atendidas mismo día</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Alternativa a cirugía abierta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Desde {mxn(PRICING.dilatacion_biliar.from)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Hospital Amerimed con fluoroscopía</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="dilatacion biliar" position="hero" />
                      <WhatsAppButton service="dilatacion biliar" position="hero" />
                </div>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 text-sm text-foreground/70">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent-strong" />
                  <span>Hospital Amerimed, Consultorio 517</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent-strong" />
                  <span>Urgencias 24/7</span>
                </div>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="flex-1 lg:max-w-lg">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-light/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
                <div className="relative bg-background rounded-2xl p-8 border border-border shadow-lg">
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 bg-accent-strong/10 rounded-2xl flex items-center justify-center mx-auto">
                      <Microscope className="h-8 w-8 text-accent-strong" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                        Dilatación Biliar Especializada
                      </h3>
                      <p className="text-foreground/80">
                        Procedimiento endoscópico para abrir conductos biliares estrechos sin cirugía abierta
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center p-3 rounded-lg bg-muted/30">
                        <div className="font-semibold text-foreground">30-60 min</div>
                        <div className="text-foreground/70">Duración</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted/30">
                        <div className="font-semibold text-foreground">2-6 horas</div>
                        <div className="text-foreground/70">Recuperación</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE TRANSPARENCY SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Costo de Dilatación Biliar en Mérida - Precio Transparente desde {mxn(PRICING.dilatacion_biliar.from)}
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Cotización clara con todo incluido, sin sorpresas en el precio final
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Base Price */}
            <div className="p-8 rounded-2xl border border-border bg-background text-center">
              <div className="w-16 h-16 bg-accent-strong/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Precio Base Dilatación Biliar
              </h3>
              <div className="text-3xl font-bold text-accent-strong mb-2">
                {mxn(PRICING.dilatacion_biliar.from)}
              </div>
              <p className="text-sm text-foreground/70 mb-4">
                Puede variar según complejidad del caso
              </p>
              <div className="text-left space-y-2 text-sm text-foreground/80">
                <p>• Procedimiento completo</p>
                <p>• Sedación profunda</p>
                <p>• Fluoroscopía especializada</p>
                <p>• Quirófano equipado</p>
              </div>
            </div>

            {/* What's Included */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Costo Incluye
              </h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Procedimiento dilatación biliar completo</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Sedación con anestesiólogo</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Fluoroscopía en tiempo real</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Balones de dilatación especializados</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Seguimiento post-procedimiento</p>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 bg-accent-light/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Facilidades de Pago
              </h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Seguros médicos principales en Mérida</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Cotización gratuita personalizada</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Precio exacto según tu caso específico</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Sin sobrecargos administrativos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS DILATACION BILIAR SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Qué es la Dilatación Biliar en Mérida? Apertura Endoscópica de Conductos Estrechos
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Procedimiento especializado que pocos endoscopistas en Mérida dominan para tratar estenosis biliares
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center mb-16">
            {/* Explanation */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  Dilatación Biliar: Endoscopia + Fluoroscopía para Abrir Conductos Estrechos
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  La dilatación biliar en Mérida es un procedimiento especializado que utiliza balones de dilatación durante endoscopia para abrir conductos biliares que se han estrechado por diferentes causas.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>¿Cómo funciona?</strong> Se introduce un duodenoscopio hasta el duodeno, se accede al conducto biliar estrecho y se utiliza un balón de dilatación gradual para abrir la estenosis bajo guía de fluoroscopía.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>¿Qué la hace especial?</strong> La dilatación biliar endoscópica evita cirugía abierta, permitiendo tratar estenosis biliares de forma mínimamente invasiva con recuperación inmediata.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                <h4 className="font-semibold text-foreground mb-2">¿Cuándo se necesita dilatación biliar en Mérida?</h4>
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>• Estenosis post-quirúrgicas (después de cirugía de vesícula)</p>
                  <p>• Estenosis benignas por inflamación crónica</p>
                  <p>• Cálculos impactados que causaron estrechez</p>
                  <p>• <strong>URGENCIA:</strong> Ictericia (color amarillo) + dolor abdominal</p>
                </div>
              </div>
            </div>

            {/* Visual Comparison */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-border bg-background">
                <h4 className="text-lg font-serif font-semibold text-foreground mb-4">
                  Dilatación Biliar vs Otros Tratamientos
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Dilatación Biliar Endoscópica en Mérida</p>
                      <p className="text-sm text-foreground/70">Abre conductos endoscópicamente sin cirugía</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 border border-red-200">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Cirugía Abierta</p>
                      <p className="text-sm text-foreground/70">Requiere incisiones grandes y hospitalización prolongada</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Sin Tratamiento</p>
                      <p className="text-sm text-foreground/70">Riesgo de infección grave (colangitis)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Por qué Elegir Dilatación Biliar Endoscópica en Mérida sobre Cirugía?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Ventajas significativas en recuperación, costo y resultados
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Endoscopic Advantages */}
            <div className="p-8 rounded-2xl border border-green-200 bg-green-50">
              <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Ventajas de la Dilatación Biliar Endoscópica
              </h3>
              <div className="space-y-4 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Sin incisiones externas en el abdomen</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Recuperación inmediata (2-6 horas)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Sin dolor post-operatorio significativo</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Regreso a actividades normales en 24-48 horas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Menor riesgo de complicaciones</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Costo significativamente menor</p>
                </div>
              </div>
            </div>

            {/* Surgery Disadvantages */}
            <div className="p-8 rounded-2xl border border-red-200 bg-red-50">
              <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center mb-6">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Desventajas de la Cirugía Abierta
              </h3>
              <div className="space-y-4 text-foreground/80">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Requiere hospitalización 3-7 días</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Incisiones grandes con cicatrices permanentes</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Recuperación de 4-6 semanas completas</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Mayor riesgo de infecciones</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Dolor post-operatorio intenso</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Costo más elevado total</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Tu Dilatación Biliar en Mérida en 5 Pasos
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Proceso eficiente desde evaluación hasta recuperación completa
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {/* Step 1 */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-foreground mb-2">Evaluación Urgente</h3>
              <p className="text-sm text-foreground/80">Análisis de laboratorios e imagen para dilatación biliar (30 min)</p>
            </div>

            {/* Step 2 */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-foreground mb-2">Preparación</h3>
              <p className="text-sm text-foreground/80">Acceso venoso y sedación en Hospital Amerimed, Mérida (15 min)</p>
            </div>

            {/* Step 3 */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-foreground mb-2">Dilatación Biliar</h3>
              <p className="text-sm text-foreground/80">Duodenoscopio + fluoroscopía + balón de dilatación (30-60 min)</p>
            </div>

            {/* Step 4 */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-foreground mb-2">Recuperación</h3>
              <p className="text-sm text-foreground/80">Observación hasta alta segura en Mérida (2-6 horas)</p>
            </div>

            {/* Step 5 */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                5
              </div>
              <h3 className="font-semibold text-foreground mb-2">Seguimiento</h3>
              <p className="text-sm text-foreground/80">Control incluido en el precio sin costo adicional</p>
            </div>
          </div>
        </div>
      </section>

      {/* URGENCY SECTION */}
      <section className="py-16 sm:py-24 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Señales de Alarma: Cuándo Necesitas Dilatación Biliar Urgente en Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Reconoce los síntomas que requieren atención inmediata
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Warning Signs */}
            <div className="lg:col-span-2 p-8 rounded-2xl border border-red-200 bg-background">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    Busca Dilatación Biliar INMEDIATA en Mérida si tienes:
                  </h3>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Piel u ojos amarillos (ictericia)</p>
                    <p className="text-sm text-foreground/70">Indica obstrucción biliar grave</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Dolor intenso en lado derecho del abdomen</p>
                    <p className="text-sm text-foreground/70">Especialmente después de comer</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Fiebre + escalofríos + ictericia</p>
                    <p className="text-sm text-foreground/70">Triada de Charcot - emergencia médica</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Orina muy oscura + heces muy claras</p>
                    <p className="text-sm text-foreground/70">Cambios en coloración por obstrucción</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Urgent */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                ¿Por qué la Dilatación Biliar es Urgente?
              </h3>
              
              <div className="space-y-4 text-foreground/80">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Riesgo de colangitis:</strong> Infección grave de conductos biliares</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Emergencia quirúrgica:</strong> Puede requerir cirugía de urgencia</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Tratamiento temprano:</strong> Evita complicaciones graves</p>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                <h4 className="font-semibold text-foreground mb-3">Disponibilidad Dilatación Biliar en Mérida:</h4>
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>• Urgencias 24/7 en Hospital Amerimed</p>
                  <p>• Fines de semana y días festivos</p>
                  <p>• Fluoroscopía disponible siempre</p>
                  <p>• Equipo especializado listo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DR. OMAR'S ADVANTAGE SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Dr. Omar: Endoscopista + Cirujano = Solución Completa
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              La ventaja única de tener ambas especialidades disponibles el mismo día
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Problem */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                ¿Qué pasa si no se puede acceder endoscópicamente?
              </h3>
              
              <div className="space-y-4 text-foreground/80">
                <p>En un pequeño porcentaje de casos (10-15%), los conductos biliares no pueden ser accedidos durante la dilatación biliar endoscópica debido a anatomía individual o condiciones específicas. Esto es normal en cualquier centro del mundo - incluso los más especializados.</p>
                
                <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                  <h4 className="font-semibold text-foreground mb-2">Otros endoscopistas:</h4>
                  <p className="text-sm text-foreground/80">Te envían a cirugía abierta con otro especialista después de fallar</p>
                </div>

                <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                  <h4 className="font-semibold text-foreground mb-2">Dr. Omar:</h4>
                  <p className="text-sm text-foreground/80">Ofrece cirugía laparoscópica el mismo día si es necesario</p>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Su Doble Especialidad: Tu Ventaja
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Endoscopia avanzada:</strong> Dilatación biliar especializada</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Cirugía general laparoscópica:</strong> Backup inmediato disponible</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>No necesitas buscar otro especialista</strong> si se requiere cirugía</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Solución quirúrgica inmediata</strong> el mismo día si es necesaria</p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                <p className="text-foreground/80 text-sm">
                  La mayoría de casos (85-90%) se resuelven exitosamente con dilatación biliar endoscópica. En casos donde no es posible, tendrás opciones quirúrgicas inmediatas sin esperar semanas para otra cita.
                </p>
              </div>

              <div className="mt-6">
                <Link 
                  href="https://www.omar.doctor/cirugia-general-merida"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver perfil quirúrgico completo
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPMENT & TECHNOLOGY SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Tecnología Especializada para Dilatación Biliar en Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Equipo de alta tecnología en Hospital Amerimed para dilatación biliar segura
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Equipment Features */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                <Microscope className="h-6 w-6 text-accent-strong" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Duodenoscopio Especializado
              </h3>
              <p className="text-foreground/80 text-sm">Endoscopio lateral específico para acceder a conductos biliares</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Fluoroscopía en Tiempo Real
              </h3>
              <p className="text-foreground/80 text-sm">Rayos X continua durante dilatación biliar para precisión</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent-light/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-accent-strong" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Balones de Dilatación
              </h3>
              <p className="text-foreground/80 text-sm">Dispositivos graduales desde 4mm hasta 20mm para dilatación precisa</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Hospital className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Quirófano Híbrido
              </h3>
              <p className="text-foreground/80 text-sm">Endoscopia + fluoroscopía integrada para dilatación biliar</p>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-accent-light/5 border border-accent-light/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent-light/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-6 w-6 text-accent-strong" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  ¿Por qué no todos pueden hacer dilatación biliar en Mérida?
                </h3>
                <div className="grid gap-3 md:grid-cols-2 text-foreground/80">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Requiere certificación en CPRE avanzada</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Equipo de fluoroscopía muy costoso</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Entrenamiento especializado de 2-3 años</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Experiencia en casos complejos de dilatación biliar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREPARATION & RECOVERY SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Preparación para Dilatación Biliar en Mérida y Qué Esperar
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Guía completa del proceso antes, durante y después del procedimiento
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Before */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 rounded-2xl bg-accent-strong/10 flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Antes de la Dilatación Biliar
              </h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Ayuno 8 horas</strong> (urgencias pueden requerir menos)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Análisis de sangre recientes</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Suspender anticoagulantes (si es seguro)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Venir acompañado a Hospital Amerimed, Mérida</p>
                </div>
              </div>
            </div>

            {/* During */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Activity className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Durante la Dilatación Biliar
              </h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Sedación profunda</strong> - no sientes nada del procedimiento</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Monitoreo constante por anestesiólogo certificado</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Duración:</strong> 30-60 minutos típicamente</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>Control fluoroscópico en tiempo real</p>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 rounded-2xl bg-accent-light/10 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Después de la Dilatación Biliar
              </h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Observación:</strong> 2-6 horas en Hospital Amerimed</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Alta el mismo día</strong> (mayoría de casos)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>No manejar</strong> por 24 horas post-sedación</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Seguimiento incluido</strong> en el precio sin costo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND OPINION SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Te Dijeron que Necesitas Cirugía Abierta? Considera Dilatación Biliar en Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Muchas estenosis biliares pueden tratarse con dilatación biliar endoscópica
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* When to Seek Second Opinion */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Considera Segunda Opinión Si:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Otro médico recomendó cirugía abierta</p>
                    <p className="text-sm text-foreground/70">Sin evaluar dilatación biliar endoscópica</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Te dijeron "no hay otra opción"</p>
                    <p className="text-sm text-foreground/70">Muchas veces sí hay alternativas endoscópicas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Cirugía laparoscópica "no es posible"</p>
                    <p className="text-sm text-foreground/70">Dr. Omar evalúa todas las opciones</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Opinion Benefits */}
            <div className="p-8 rounded-2xl border border-green-200 bg-green-50">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Segunda Opinión Gratuita para Dilatación Biliar:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Casos rechazados</strong> por otros endoscopistas en Mérida</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Pacientes programados</strong> para cirugía abierta</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Complicaciones post-quirúrgicas</strong> biliares</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Evaluación costo-beneficio</strong> dilatación biliar vs cirugía</p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-green-100 border border-green-200">
                <p className="text-green-800 text-sm font-medium">
                  💡 Muchos pacientes evitan cirugía mayor con dilatación biliar endoscópica. Vale la pena una segunda evaluación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS CASES SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Resultados Reales de Dilatación Biliar en Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Casos exitosos que evitaron cirugía mayor
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Success Case Types */}
            <div className="p-6 rounded-2xl border border-green-200 bg-green-50 text-center">
              <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Estenosis Post-Colecistectomía</h3>
              <p className="text-sm text-foreground/70">Resueltas con dilatación biliar endoscópica</p>
            </div>

            <div className="p-6 rounded-2xl border border-green-200 bg-green-50 text-center">
              <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Cálculos Impactados</h3>
              <p className="text-sm text-foreground/70">Con estrechez secundaria tratados en Mérida</p>
            </div>

            <div className="p-6 rounded-2xl border border-green-200 bg-green-50 text-center">
              <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Estenosis Benignas</h3>
              <p className="text-sm text-foreground/70">Inflamatorias resueltas endoscópicamente</p>
            </div>

            <div className="p-6 rounded-2xl border border-green-200 bg-green-50 text-center">
              <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Cirugía Evitada</h3>
              <p className="text-sm text-foreground/70">Pacientes que evitaron cirugía abierta gracias a dilatación biliar</p>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-2xl border border-accent-light/20 bg-accent-light/5">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-serif font-semibold text-foreground">
                Resultados Típicos de Dilatación Biliar en Mérida
              </h3>
              <div className="grid gap-6 md:grid-cols-3 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent-strong mb-2">85-90%</div>
                  <p className="text-sm text-foreground/70">Tasa de éxito con dilatación biliar endoscópica</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-strong mb-2">50-70%</div>
                  <p className="text-sm text-foreground/70">Reducción en costo vs cirugía tradicional</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-strong mb-2">24-48h</div>
                  <p className="text-sm text-foreground/70">Tiempo de recuperación típico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-accent-light/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Agenda tu Evaluación para Dilatación Biliar en Mérida
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                No esperes más. Las urgencias biliares requieren atención especializada inmediata.
              </p>
            </div>

            {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="dilatacion biliar" position="cta section" />
                      <WhatsAppButton service="dilatacion biliar" position="cta section" />
                </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto text-sm">
              <div className="flex items-center gap-3 justify-center">
                <MapPin className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-foreground">Hospital Amerimed</p>
                  <p className="text-foreground/70">Consultorio 517, Chichí Suárez</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Clock className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-foreground">Urgencias 24/7</p>
                  <p className="text-foreground/70">Fines de semana incluidos</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Heart className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-foreground">Seguros Médicos</p>
                  <p className="text-foreground/70">Principales aceptados en Mérida</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <FileText className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-foreground">Cotización Gratuita</p>
                  <p className="text-foreground/70">Precio exacto para dilatación biliar</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-red-200 bg-red-50 max-w-2xl mx-auto">
              <div className="flex items-center gap-3 justify-center mb-3">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <h3 className="font-semibold text-foreground">Recuerda: Las Urgencias Biliares No Pueden Esperar</h3>
              </div>
              <p className="text-foreground/80 text-sm">
                Si tienes ictericia, dolor abdominal intenso, fiebre o cambios en orina/heces, busca atención inmediata. 
                La dilatación biliar temprana puede evitar complicaciones graves y cirugía mayor.
              </p>
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
          <Faq routeKey="colonoscopia" />
        </div>
      </section>
    </>
  )
}
