import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn } from "@/lib/pricing"
import Image from "next/image"
import Link from "next/link"
import { Stethoscope, MapPin, Phone, MessageCircle, Globe, CheckCircle2, ShieldCheck, Microscope, Hospital, Clock, Star, Award, Users, Heart, AlertTriangle, Activity, Camera, Search, Brain, Target } from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleReviews from "@/components/GoogleReviews";

export const revalidate = 86400
export const metadata = metaFor("endoscopia")

export default function EndoscopiaPage() {
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
                  <Activity className="h-4 w-4 text-accent-strong" />
                  <span className="text-sm font-medium text-foreground">500+ Endoscopias Anuales</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-foreground leading-tight">
                  Endoscopia en Mérida - {mxn(PRICING.endoscopia.from)} | Dr. Omar Quiroz
                </h1>
                
                <p className="text-xl text-accent-strong font-semibold">
                  Endoscopia digestiva con sedación - Diagnóstico real de gastritis, úlceras y reflujo
                </p>
                
                <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                  <p>
                    ¿Meses tomando antiácidos sin mejoría? ¿Dolor estómago que no se quita? Dr. Omar Quiroz encuentra la causa real en 20 minutos con endoscopia segura.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Sedación consciente</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Olympus 180 HD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Resultados inmediatos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Reporte con fotos</span>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="endoscopia" position="hero" />
                      <WhatsAppButton service="endoscopia" position="hero" />
                </div>
              </div>
            </div>
            
            {/* Image - Right Side */}
            <div className="flex-1 lg:max-w-md">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-strong/20 to-primary/20 rounded-3xl transform rotate-3" />
                <div className="relative bg-background rounded-3xl p-8 border border-border shadow-2xl">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-accent-strong/10 flex items-center justify-center mx-auto">
                      <Microscope className="h-8 w-8 text-accent-strong" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-foreground/60">Dr. Omar Quiroz</div>
                      <div className="text-2xl font-bold text-accent-strong">{mxn(PRICING.endoscopia.from)} pesos fijos</div>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-background border border-border">
                    <h3 className="text-lg font-serif font-bold text-foreground mb-4 text-center">
                      Todo incluido en {mxn(PRICING.endoscopia.from)} pesos
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Sedación consciente</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Endoscopia Olympus 180</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Fotos HD hallazgos</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Reporte mismo día</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Biopsia $1,000 si necesaria</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 rounded-xl bg-accent-light/10 border border-accent-light/20">
                      <h4 className="font-semibold text-foreground mb-1 text-sm">¿Por qué más accesible?</h4>
                      <p className="text-xs text-foreground/80">
                        Sin overhead hospitalario. Mismo equipo, precio justo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS ENDOSCOPY SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Qué es la Endoscopia? - Ve Directamente Tu Estómago
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              No es radiografía que "adivina" - es VER directamente qué tienes
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center mb-16">
            {/* Explanation */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  Endoscopia: Cámara HD Dentro del Estómago
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-accent-light/10 border border-accent-light/20">
                    <h4 className="font-semibold text-foreground mb-2">¿Cómo funciona?</h4>
                    <div className="space-y-2 text-foreground/80">
                      <p>• Endoscopio flexible por boca</p>
                      <p>• Cámara HD ve estómago tiempo real</p>
                      <p>• Detecta gastritis, úlceras, cáncer</p>
                      <p>• Resultados inmediatos con fotos</p>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-2">Diagnóstico real vs. adivinar</h4>
                    <p className="text-foreground/80">No más "toma esto a ver si funciona". Vemos exactamente tu problema.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Patient Story */}
            <div className="bg-gradient-to-br from-background to-muted/30 p-8 rounded-2xl border border-border">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent-strong/10 flex items-center justify-center">
                    <Star className="h-6 w-6 text-accent-strong" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Testimonio Real</h4>
                    <p className="text-sm text-foreground/60">Carmen, 48 años</p>
                  </div>
                </div>
                <blockquote className="text-foreground/80 italic">
                  "Después 6 meses pantoprazol sin mejoría, endoscopia mostró H. pylori. 2 semanas antibióticos me curé completamente."
                </blockquote>
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
              Precio de Endoscopia en Mérida - {mxn(PRICING.endoscopia.from)} Todo Incluido
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Sin overhead hospitalario - Mismo equipo, precio justo
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {/* Hospitals */}
            <div className="p-6 rounded-2xl border border-border bg-background text-center">
              <div className="text-lg font-bold text-foreground/60 mb-2">Hospitales Mérida</div>
              <div className="text-2xl font-bold text-foreground/60 line-through">$8,000+ pesos</div>
              <p className="text-sm text-foreground/50 mt-2">+ extras + estudios</p>
            </div>
            
            <div className="p-6 rounded-2xl border-2 border-accent-strong bg-accent-strong/5 text-center">
              <div className="text-lg font-bold text-accent-strong mb-2">Dr. Omar Quiroz</div>
              <div className="text-3xl font-bold text-accent-strong">{mxn(PRICING.endoscopia.from)} pesos</div>
              <p className="text-sm text-accent-strong/80 mt-2">Todo incluido</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background text-center">
              <div className="text-lg font-bold text-foreground/60 mb-2">IMSS</div>
              <div className="text-2xl font-bold text-foreground/60">"Gratis"</div>
              <p className="text-sm text-foreground/50 mt-2">3-6 meses espera</p>
            </div>
          </div>

          {/* What's Included */}
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-muted/30 to-background border border-border">
            <h3 className="text-xl font-serif font-bold text-foreground mb-6 text-center">
              ¿Qué incluye tu endoscopia?
            </h3>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Consulta pre-endoscopia</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Sedación con anestesiólogo</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Endoscopia Olympus 180</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Fotos HD hallazgos</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Reporte escrito mismo día</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Biopsia $1,000 si necesaria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PANENDOSCOPIA SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Panendoscopia en Mérida - Estudio Completo Mismo Día
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              ¿Síntomas arriba Y abajo? Una cita resuelve todo
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-strong mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">¿Qué incluye panendoscopia?</p>
                    <div className="space-y-1 text-sm text-foreground/70">
                      <p>• Endoscopia alta (estómago, esófago)</p>
                      <p>• Colonoscopia (colon completo)</p>
                      <p>• Una sola sedación ambos procedimientos</p>
                      <p>• Diagnóstico completo digestivo</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Cuándo se recomienda:</p>
                    <div className="space-y-1 text-sm text-foreground/70">
                      <p>• Anemia sin causa clara</p>
                      <p>• Dolor abdominal generalizado</p>
                      <p>• Antecedentes familiares cáncer digestivo</p>
                      <p>• Sangrado digestivo alto y bajo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                <Target className="h-5 w-5 text-accent-strong" />
                <span className="font-semibold text-foreground">Ventaja:</span>
                <span className="text-foreground/70">Un día preparación, una sedación, diagnóstico completo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REFLUX SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                <Search className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Endoscopia por Reflujo</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight">
                  Endoscopia por Reflujo - Evalúa Daño Real del Esófago
                </h2>
                
                <p className="text-lg text-foreground/80 leading-relaxed">
                  ¿Años con reflujo tomando omeprazol? Endoscopia muestra si esófago tiene daño real o solo síntomas.
                </p>
              </div>
            </div>

            {/* What We Look For */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-6 rounded-xl border border-border bg-background">
                <h4 className="font-semibold text-foreground mb-3">¿Qué buscamos en reflujo?</h4>
                <div className="space-y-2 text-foreground/80">
                  <p>• Esofagitis (inflamación esófago)</p>
                  <p>• Barrett's esófago (precáncer)</p>
                  <p>• Úlceras esofágicas</p>
                  <p>• Hernia hiatal</p>
                  <p>• Gastritis por reflujo biliar</p>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border bg-gradient-to-br from-accent-light/5 to-background">
                <h4 className="font-semibold text-foreground mb-3">Testimonio</h4>
                <blockquote className="text-foreground/80 italic">
                  "3 años reflujo horrible. Endoscopia mostró esófago perfecto - era solo estrés. Cambié pastillas por terapia"
                </blockquote>
                <p className="text-sm text-foreground/60 mt-2">- José, 35 años</p>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20">
                <Brain className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Grados esofagitis:</span>
                <span className="text-foreground/70">A (leve) hasta D (severo) - Tratamiento específico</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DR. OMAR EXPERTISE */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Dr. Omar Quiroz - Endoscopista Certificado</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight">
                  Endoscopia en Mérida Yucatán - 500+ Endoscopias Anuales
                </h2>
              </div>
            </div>

            {/* Stats and Credentials */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center p-6 rounded-2xl border border-border bg-background">
                <div className="text-3xl font-bold text-accent-strong mb-2">500+</div>
                <div className="text-sm font-medium text-foreground/70">Endoscopias Anuales</div>
              </div>
              <div className="text-center p-6 rounded-2xl border border-border bg-background">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm font-medium text-foreground/70">Años Experiencia</div>
              </div>
              <div className="text-center p-6 rounded-2xl border border-border bg-background">
                <div className="text-3xl font-bold text-accent-strong mb-2">&lt;0.1%</div>
                <div className="text-sm font-medium text-foreground/70">Complicaciones</div>
              </div>
            </div>

            {/* Certifications */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Certificaciones:</p>
                    <div className="text-sm text-foreground/70 space-y-1 mt-1">
                      <p>• Consejo Mexicano Cirugía General</p>
                      <p>• Colegio Mexicano Gastroenterología</p>
                      <p>• Entrenamiento UNAM + University of Florida</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-strong mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Precisión diagnóstica:</p>
                    <p className="text-sm text-foreground/70 mt-1">
                      Experiencia quirúrgica encuentra lesiones que otros endoscopistas pierden
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Patient Testimonial */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-accent-light/5 to-background border border-accent-light/20">
              <blockquote className="text-foreground/80 italic text-center text-lg">
                "Dr. Quiroz único que encontró mi úlcera. 2 endoscopias otros lugares decían normal"
              </blockquote>
              <p className="text-center text-foreground/60 mt-2">- Ana, 43 años</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCEDURE SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Costo de Endoscopia vs. Valor Diagnóstico
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Procedimiento paso a paso - Qué esperar
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Before */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-foreground mb-3">Antes endoscopia</h3>
              <div className="space-y-2 text-sm text-foreground/80">
                <p>• Ayuno 8 horas</p>
                <p>• Llegar acompañado</p>
                <p>• Ropa cómoda</p>
              </div>
            </div>

            {/* During */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-foreground mb-3">Durante procedimiento</h3>
              <div className="space-y-2 text-sm text-foreground/80">
                <p>• Sedación consciente</p>
                <p>• Endoscopio por boca</p>
                <p>• 15-25 minutos</p>
                <p>• Fotos hallazgos</p>
              </div>
            </div>

            {/* After */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-foreground mb-3">Después endoscopia</h3>
              <div className="space-y-2 text-sm text-foreground/80">
                <p>• Recuperación 30-45 min</p>
                <p>• Resultados con fotos</p>
                <p>• Reporte completo</p>
                <p>• WhatsApp para dudas</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
              <Clock className="h-5 w-5 text-accent-strong" />
              <span className="font-semibold text-foreground">Duración total:</span>
              <span className="text-foreground/70">15-25 minutos procedimiento</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT DETECTS SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Qué Detecta la Endoscopia? - Diagnósticos Comunes
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Endoscopia encuentra la causa real de tus síntomas
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Gastritis */}
            <div className="p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Microscope className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Gastritis</h3>
              <div className="space-y-1 text-sm text-foreground/80">
                <p>• H. pylori (bacteria)</p>
                <p>• Por medicinas</p>
                <p>• Por estrés</p>
              </div>
            </div>

            {/* Ulcers */}
            <div className="p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-accent-strong" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Úlceras</h3>
              <div className="space-y-1 text-sm text-foreground/80">
                <p>• Gástricas o duodenales</p>
                <p>• Tamaño y profundidad</p>
                <p>• Riesgo sangrado</p>
              </div>
            </div>

            {/* Reflux */}
            <div className="p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Reflujo</h3>
              <div className="space-y-1 text-sm text-foreground/80">
                <p>• Esofagitis grados A-D</p>
                <p>• Barrett's esófago</p>
                <p>• Hernia hiatal</p>
              </div>
            </div>

            {/* Cancer */}
            <div className="p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-accent-strong" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Cáncer Gástrico</h3>
              <div className="space-y-1 text-sm text-foreground/80">
                <p>• Detección temprana</p>
                <p>• Cuando se puede curar</p>
                <p>• Muchas veces parece gastritis</p>
              </div>
            </div>
          </div>

          {/* Success Story */}
          <div className="mt-12 max-w-3xl mx-auto p-6 rounded-xl bg-gradient-to-br from-accent-light/5 to-background border border-accent-light/20">
            <blockquote className="text-foreground/80 italic text-center text-lg">
              "Pensé gastritis normal. Endoscopia mostró cáncer gástrico temprano. Operaron a tiempo, me salvé"
            </blockquote>
            <p className="text-center text-foreground/60 mt-2">- Roberto, 58 años</p>
          </div>
        </div>
      </section>

      {/* ENDOSCOPY VS OTHER STUDIES */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Endoscopia Precio Merida vs. Otros Estudios
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              ¿Por qué endoscopia y no radiografía o ultrasonido?
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 rounded-xl border border-border bg-background text-center">
              <h3 className="font-semibold text-foreground mb-3">Radiografía</h3>
              <p className="text-sm text-foreground/60">Solo perforaciones grandes</p>
              <div className="mt-3 text-red-500 font-semibold">❌ No ve gastritis</div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-background text-center">
              <h3 className="font-semibold text-foreground mb-3">Ultrasonido</h3>
              <p className="text-sm text-foreground/60">Ve vesícula, NO estómago</p>
              <div className="mt-3 text-red-500 font-semibold">❌ No ve úlceras</div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-background text-center">
              <h3 className="font-semibold text-foreground mb-3">Tomografía</h3>
              <p className="text-sm text-foreground/60">Órganos sólidos, no mucosa</p>
              <div className="mt-3 text-red-500 font-semibold">❌ No toma biopsias</div>
            </div>

            <div className="p-6 rounded-xl border-2 border-accent-strong bg-accent-strong/5 text-center">
              <h3 className="font-semibold text-accent-strong mb-3">Endoscopia</h3>
              <p className="text-sm text-foreground/80">VE directamente + biopsias</p>
              <div className="mt-3 text-green-600 font-semibold">✅ Diagnóstico preciso</div>
            </div>
          </div>

          {/* Patient Story */}
          <div className="mt-12 max-w-3xl mx-auto p-6 rounded-xl bg-gradient-to-br from-primary/5 to-background border border-primary/20">
            <blockquote className="text-foreground/80 italic text-center">
              "Ultrasonido, tomografía, radiografías 'normales' pero dolor seguía. Endoscopia encontró úlcera duodenal"
            </blockquote>
            <p className="text-center text-foreground/60 mt-2">- Mario, 44 años</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-accent-light/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Agendar Endoscopia - Citas Disponibles
              </h2>
              <p className="text-lg text-foreground/70">
                Consulta valoración - Dr. Quiroz evalúa si endoscopia necesaria
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">📞 Teléfono</h3>
                <p className="text-sm text-foreground/70">[Número] - Llamadas directas</p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <MessageCircle className="h-8 w-8 text-accent-strong mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">💬 WhatsApp</h3>
                <p className="text-sm text-foreground/70">[Número] - Respuesta rápida</p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">📍 Centro Mérida</h3>
                <p className="text-sm text-foreground/70">Fácil acceso toda ciudad</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
                  <CallButton service="endoscopia" position="cta section" />
                  <WhatsAppButton service="endoscopia" position="cta section" />
            </div>

            {/* Additional Info */}
            <div className="grid gap-4 md:grid-cols-2 mt-8">
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">¿Primera endoscopia?</h4>
                <p className="text-sm text-foreground/80">
                  Consulta $800 explica procedimiento, resuelve miedos
                </p>
              </div>

              <div className="p-4 rounded-xl bg-accent-light/10 border border-accent-light/20">
                <h4 className="font-semibold text-foreground mb-2">Para expatriados</h4>
                <p className="text-sm text-foreground/80">
                  Atención bilingüe comunidad extranjera Cholul/Norte
                </p>
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
          <Faq routeKey="endoscopia" />
        </div>
      </section>
    </>
  )
}
