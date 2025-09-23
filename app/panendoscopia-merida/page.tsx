import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn } from "@/lib/pricing"
import Image from "next/image"
import Link from "next/link"
import { Stethoscope, MapPin, Phone, MessageCircle, Globe, CheckCircle2, ShieldCheck, Microscope, Hospital, Clock, Star, Award, Users, Heart, AlertTriangle, Activity, Camera, Search, Brain, Target, Eye, Zap } from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleReviews from "@/components/GoogleReviews";
import { inter, montserrat } from "@/app/fonts";

export const revalidate = 86400
export const metadata = metaFor("panendoscopia")

export default function PanendoscopiaPage() {
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
                  <Eye className="h-4 w-4 text-accent-strong" />
                  <span className="text-sm font-medium text-foreground">Estudio Completo Digestivo</span>
                </div>
                
                <h1 className="`${montserrat.className} text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-foreground leading-tight`">
                  Panendoscopia en Mérida - {mxn(PRICING.panendoscopia.from)} | Dr. Omar Quiroz
                </h1>
                
                <p className="`${inter.className} text-xl text-accent-strong font-semibold`">
                  Endoscopia + Colonoscopia el mismo día - Diagnóstico completo digestivo
                </p>
                
                <div className="`${inter.className} space-y-4 text-lg text-foreground/80 leading-relaxed`">
                  <p>
                    ¿Síntomas digestivos arriba Y abajo? ¿Anemia sin causa? Panendoscopia evalúa todo el sistema digestivo en una sola cita con sedación.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Dos procedimientos, una sedación</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Diagnóstico completo digestivo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Equipo Olympus HD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Resultados con fotos</span>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                  <CallButton service="panendoscopia" position="hero" />
                  <WhatsAppButton service="panendoscopia" position="hero" />
                </div>
              </div>
            </div>
            
            {/* Pricing Card - Right Side */}
            <div className="flex-1 lg:max-w-md">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-strong/20 to-primary/20 rounded-3xl transform rotate-3" />
                <div className="relative bg-background rounded-3xl p-8 border border-border shadow-2xl">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-accent-strong/10 flex items-center justify-center mx-auto">
                      <Eye className="h-8 w-8 text-accent-strong" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-foreground/60">Dr. Omar Quiroz</div>
                      <div className="text-2xl font-bold text-accent-strong">{mxn(PRICING.panendoscopia.from)} pesos</div>
                      <div className="text-sm text-foreground/60">Ambos procedimientos</div>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-background border border-border">
                    <h3 className="text-lg font-serif font-bold text-foreground mb-4 text-center">
                      Panendoscopia completa
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Endoscopia alta (estómago)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Colonoscopia (colon completo)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Una sola sedación</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Fotos HD hallazgos</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Reportes mismo día</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 rounded-xl bg-accent-light/10 border border-accent-light/20">
                      <h4 className="font-semibold text-foreground mb-1 text-sm">Ventaja única</h4>
                      <p className="text-xs text-foreground/80">
                        Una preparación, una sedación, diagnóstico completo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS PANENDOSCOPY SECTION */}
      <section id="que-es-panendoscopia" className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Qué es panendoscopia? Endoscopia + colonoscopia el mismo día
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Endoscopia + Colonoscopia en una sola sesión - Diagnóstico total
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center mb-16">
            {/* Explanation */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  Dos Cámaras HD, Una Sedación
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-accent-light/10 border border-accent-light/20">
                    <h4 className="font-semibold text-foreground mb-2">Endoscopia Alta</h4>
                    <div className="space-y-1 text-foreground/80 text-sm">
                      <p>• Esófago, estómago, duodeno</p>
                      <p>• Detecta gastritis, úlceras, reflujo</p>
                      <p>• Biopsia H. pylori si necesario</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-2">Colonoscopia</h4>
                    <div className="space-y-1 text-foreground/80 text-sm">
                      <p>• Colon completo hasta ciego</p>
                      <p>• Pólipos, colitis, cáncer colorrectal</p>
                      <p>• Remoción pólipos mismo día</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                    <h4 className="font-semibold text-foreground mb-2">Ventaja Principal</h4>
                    <p className="text-foreground/80 text-sm">Una preparación, una sedación, diagnóstico completo digestivo</p>
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
                    <h4 className="font-semibold text-foreground">Caso Real</h4>
                    <p className="text-sm text-foreground/60">María, 55 años - Anemia</p>
                  </div>
                </div>
                <blockquote className="text-foreground/80 italic">
                  "Anemia 2 años sin saber por qué. Panendoscopia encontró úlcera sangrante en estómago Y pólipos en colon. Una cita resolvió todo."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN IS IT NEEDED */}
<section id="cuando-panendoscopia" className="py-16 sm:py-24 bg-background">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
        ¿Cuándo se necesita panendoscopia?
      </h2>
      <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
        Síntomas que requieren evaluación digestiva completa
      </p>
    </div>

    {/* ...tu grid actual sin cambios... */}

    {/* Triage links */}
    <div className="mt-10 text-center">
      <p className="text-sm text-foreground/70">
        ¿Solo reflujo o gastritis? Revisa la{" "}
        <Link href="/endoscopia" className="underline decoration-primary/40 hover:decoration-primary">
          endoscopia en Mérida (precio y qué incluye)
        </Link>.
      </p>
      <p className="text-sm text-foreground/70 mt-2">
        ¿Sangrado bajo o cambio en evacuaciones? Revisa la{" "}
        <Link href="/colonoscopia" className="underline decoration-primary/40 hover:decoration-primary">
          colonoscopia en Mérida (costo y preparación)
        </Link>.
      </p>
      <p className="text-sm text-foreground/70 mt-2">
        ¿Dudas comunes? Visita las{" "}
        <Link href="#faqs-panendoscopia" className="underline decoration-primary/40 hover:decoration-primary">
          preguntas frecuentes
        </Link>.
      </p>
    </div>
  </div>
</section>

      {/* PRICING / COMPARISON */}
<section id="precio-panendoscopia-merida" className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
        Panendoscopia en Mérida: precio y qué incluye — {mxn(PRICING.panendoscopia.from)}
      </h2>
      <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
        Endoscopia + colonoscopia el mismo día, una sola sedación. Precio transparente.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3 mb-12">
      {/* Hospitals */}
      <div className="p-6 rounded-2xl border border-border bg-background text-center">
        <div className="text-lg font-bold text-foreground/60 mb-2">Hospitales Mérida</div>
        <div className="text-2xl font-bold text-foreground/60 line-through">$15,000+ pesos</div>
        <p className="text-sm text-foreground/50 mt-2">Dos citas + extras</p>
      </div>
      
      {/* Our price */}
      <div className="p-6 rounded-2xl border-2 border-accent-strong bg-accent-strong/5 text-center">
        <div className="text-lg font-bold text-accent-strong mb-2">Dr. Omar Quiroz</div>
        <div className="text-3xl font-bold text-accent-strong">{mxn(PRICING.panendoscopia.from)} pesos</div>
        <p className="text-sm text-accent-strong/80 mt-2">Ambos incluidos</p>
      </div>

      {/* Separate */}
      <div className="p-6 rounded-2xl border border-border bg-background text-center">
        <div className="text-lg font-bold text-foreground/60 mb-2">Por separado</div>
        <div className="text-2xl font-bold text-foreground/60">$12,000+ pesos</div>
        <p className="text-sm text-foreground/50 mt-2">Dos preparaciones</p>
      </div>
    </div>

    {/* What's Included */}
    <div id="incluye-panendoscopia" className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border">
      <h3 className="text-xl font-serif font-bold text-foreground mb-6 text-center">
        ¿Qué incluye exactamente?
      </h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-accent-strong" /><span className="text-foreground/80">Endoscopia alta (con fotos)</span></div>
        <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-accent-strong" /><span className="text-foreground/80">Colonoscopia completa</span></div>
        <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-accent-strong" /><span className="text-foreground/80">Una sola sedación</span></div>
        <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-accent-strong" /><span className="text-foreground/80">Reporte(s) el mismo día</span></div>
        <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-accent-strong" /><span className="text-foreground/80">Equipo Olympus HD</span></div>
        <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-accent-strong" /><span className="text-foreground/80">Seguimiento por WhatsApp</span></div>
      </div>

      <div className="mt-6 p-4 rounded-xl bg-accent-light/10 border border-accent-light/20 text-center">
        <p className="text-sm text-foreground/80">
          <strong>Incluye:</strong> ambos estudios, sedación, fotos y reporte(s).{" "}
          <strong>Puede tener costo extra:</strong> biopsias y estudio de patología, materiales especiales o
          resección de pólipos grandes (si se requieren). Siempre te avisamos antes.
        </p>
      </div>

      {/* Mini-FAQ de costo */}
      <div className="mt-8 border-t border-border pt-6">
        <h4 className="text-center font-semibold text-foreground mb-4">Preguntas frecuentes sobre costo</h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded-lg bg-background border border-border">
            <p className="font-medium">• panendoscopia precio / cuánto cuesta</p>
            <p className="text-sm text-foreground/70 mt-1">
              {mxn(PRICING.panendoscopia.from)} pesos (ambos estudios con una sedación). Biopsias y patología se cotizan aparte si son necesarias.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-background border border-border">
            <p className="font-medium">• ¿incluye sedación y fotos?</p>
            <p className="text-sm text-foreground/70 mt-1">
              Sí. La sedación con anestesiólogo, fotos HD y reporte(s) están incluidos en el precio.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-background border border-border">
            <p className="font-medium">• hospital vs. consulta particular</p>
            <p className="text-sm text-foreground/70 mt-1">
              En hospital suele salir $15,000+ por sobrecargos y duplicidad de insumos. Aquí evitas esos extras.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-background border border-border">
            <p className="font-medium">• ¿cuándo sube el costo?</p>
            <p className="text-sm text-foreground/70 mt-1">
              Solo si se requieren insumos especiales, múltiples biopsias o resección de pólipos grandes. Se explica y autoriza antes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* DR. OMAR EXPERTISE */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Dr. Omar Quiroz - Especialista Endoscopia</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight">
                  Panendoscopia Mérida Yucatán - 300+ Procedimientos Anuales
                </h2>
                <p className="text-lg text-foreground/80">
                  Endoscopista certificado con experiencia quirúrgica - Precisión diagnóstica superior
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid gap-6 md:grid-cols-4">
              <div className="text-center p-6 rounded-2xl border border-border bg-background">
                <div className="text-3xl font-bold text-accent-strong mb-2">300+</div>
                <div className="text-sm font-medium text-foreground/70">Panendoscopias Anuales</div>
              </div>
              <div className="text-center p-6 rounded-2xl border border-border bg-background">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm font-medium text-foreground/70">Años Experiencia</div>
              </div>
              <div className="text-center p-6 rounded-2xl border border-border bg-background">
                <div className="text-3xl font-bold text-accent-strong mb-2">98%</div>
                <div className="text-sm font-medium text-foreground/70">Tasa Detección</div>
              </div>
              <div className="text-center p-6 rounded-2xl border border-border bg-background">
                <div className="text-3xl font-bold text-primary mb-2">&lt;0.1%</div>
                <div className="text-sm font-medium text-foreground/70">Complicaciones Mayores</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-accent-light/5 to-background border border-accent-light/20">
              <blockquote className="text-foreground/80 italic text-center text-lg">
                "Dr. Quiroz encontró pólipo precanceroso que otros no vieron. Experiencia quirúrgica hace la diferencia"
              </blockquote>
              <p className="text-center text-foreground/60 mt-2">- Roberto, 52 años</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCEDURE PROCESS */}
      <section id="proceso-panendoscopia" className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Proceso Panendoscopia - Qué Esperar
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Procedimiento paso a paso - Una preparación, dos estudios
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Before */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-foreground mb-3">Antes del procedimiento</h3>
              <div className="space-y-2 text-sm text-foreground/80">
                <p>• Ayuno 8-12 horas</p>
                <p>• Preparación colon (Fleet)</p>
                <p>• Suspender anticoagulantes</p>
                <p>• Llegar acompañado</p>
              </div>
            </div>

            {/* During */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-foreground mb-3">Durante procedimiento</h3>
              <div className="space-y-2 text-sm text-foreground/80">
                <p>• Sedación consciente única</p>
                <p>• Endoscopia alta primero</p>
                <p>• Colonoscopia después</p>
                <p>• 45-60 minutos total</p>
              </div>
            </div>

            {/* After */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-foreground mb-3">Después procedimiento</h3>
              <div className="space-y-2 text-sm text-foreground/80">
                <p>• Recuperación 1-2 horas</p>
                <p>• Dos reportes completos</p>
                <p>• Fotos hallazgos</p>
                <p>• Seguimiento WhatsApp</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
              <Zap className="h-5 w-5 text-accent-strong" />
              <span className="font-semibold text-foreground">Ventaja:</span>
              <span className="text-foreground/70">Una preparación, una cita, diagnóstico completo</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT DETECTS SECTION */}
<section id="que-detecta-panendoscopia" className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Qué Detecta la Panendoscopia? - Diagnóstico Completo
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Evaluación completa del sistema digestivo - De esófago a recto
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Upper Tract Findings */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-bold text-foreground text-center">
                Endoscopia Alta Detecta:
              </h3>
              
              <div className="grid gap-4">
                <div className="p-4 rounded-xl border border-border bg-background hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Microscope className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Gastritis y H. pylori</h4>
                      <p className="text-sm text-foreground/80">Inflamación estómago, bacteria causante</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-border bg-background hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent-strong/10 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="h-4 w-4 text-accent-strong" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Úlceras Pépticas</h4>
                      <p className="text-sm text-foreground/80">Gástricas, duodenales, riesgo sangrado</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-border bg-background hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Activity className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Reflujo y Esofagitis</h4>
                      <p className="text-sm text-foreground/80">Daño esófago, Barrett's, hernia hiatal</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-border bg-background hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent-strong/10 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="h-4 w-4 text-accent-strong" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Cáncer Gástrico</h4>
                      <p className="text-sm text-foreground/80">Detección temprana cuando curable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lower Tract Findings */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-bold text-foreground text-center">
                Colonoscopia Detecta:
              </h3>
              
              <div className="grid gap-4">
                <div className="p-4 rounded-xl border border-border bg-background hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Target className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Pólipos Colónicos</h4>
                      <p className="text-sm text-foreground/80">Precancerosos, remoción inmediata</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-border bg-background hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent-strong/10 flex items-center justify-center flex-shrink-0">
                      <Eye className="h-4 w-4 text-accent-strong" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Cáncer Colorrectal</h4>
                      <p className="text-sm text-foreground/80">Estadios tempranos, mejor pronóstico</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-border bg-background hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Microscope className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Colitis Inflamatoria</h4>
                      <p className="text-sm text-foreground/80">Ulcerosa, Crohn, extensión exacta</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-border bg-background hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent-strong/10 flex items-center justify-center flex-shrink-0">
                      <Activity className="h-4 w-4 text-accent-strong" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Diverticulitis</h4>
                      <p className="text-sm text-foreground/80">Inflamación, sangrado, complicaciones</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Story */}
          <div className="mt-12 max-w-3xl mx-auto p-6 rounded-xl bg-gradient-to-br from-accent-light/5 to-background border border-accent-light/20">
            <blockquote className="text-foreground/80 italic text-center text-lg">
              "Panendoscopia encontró gastritis por H. pylori arriba y 3 pólipos abajo. Un día, dos problemas resueltos"
            </blockquote>
            <p className="text-center text-foreground/60 mt-2">- Patricia, 48 años</p>
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Panendoscopia vs. Estudios Separados
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              ¿Por qué juntos es mejor que separados?
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Separate Studies */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-bold text-foreground/60 mb-6 text-center">
                Estudios Separados
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 text-sm font-bold">✗</span>
                  </div>
                  <span className="text-foreground/70">Dos preparaciones diferentes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 text-sm font-bold">✗</span>
                  </div>
                  <span className="text-foreground/70">Dos sedaciones, más riesgo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 text-sm font-bold">✗</span>
                  </div>
                  <span className="text-foreground/70">Dos citas, más tiempo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 text-sm font-bold">✗</span>
                  </div>
                  <span className="text-foreground/70">Costo total mayor</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 text-sm font-bold">✗</span>
                  </div>
                  <span className="text-foreground/70">Diagnóstico parcial primero</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200">
                <p className="text-center text-foreground/60 font-semibold">
                  Total: $12,000-15,000 pesos
                </p>
              </div>
            </div>

            {/* Panendoscopy */}
            <div className="p-8 rounded-2xl border-2 border-accent-strong bg-accent-strong/5">
              <h3 className="text-xl font-bold text-accent-strong mb-6 text-center">
                Panendoscopia
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-foreground/80">Una sola preparación</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-foreground/80">Una sedación, menor riesgo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-foreground/80">Una cita resuelve todo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-foreground/80">Precio fijo transparente</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-foreground/80">Diagnóstico completo inmediato</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                <p className="text-center text-accent-strong font-bold">
                  Total: {mxn(PRICING.panendoscopia.from)} pesos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-accent-light/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Agendar Panendoscopia Mérida - Citas Disponibles
              </h2>
              <p className="text-lg text-foreground/70">
                Consulta valoración - Dr. Quiroz determina si panendoscopia necesaria
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">📞 Teléfono</h3>
                <p className="text-sm text-foreground/70">Llamadas directas - Citas inmediatas</p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <MessageCircle className="h-8 w-8 text-accent-strong mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">💬 WhatsApp</h3>
                <p className="text-sm text-foreground/70">Respuesta rápida - Dudas procedure</p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">📍 Centro Mérida</h3>
                <p className="text-sm text-foreground/70">Ubicación céntrica - Fácil acceso</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CallButton service="panendoscopia" position="cta section" />
              <WhatsAppButton service="panendoscopia" position="cta section" />
            </div>

            {/* Additional Info */}
            <div className="grid gap-4 md:grid-cols-2 mt-8">
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">¿Primera vez panendoscopia?</h4>
                <p className="text-sm text-foreground/80">
                  Consulta $800 explica ambos procedimientos
                </p>
              </div>

              <div className="p-4 rounded-xl bg-accent-light/10 border border-accent-light/20">
                <h4 className="font-semibold text-foreground mb-2">¿Cuándo programar?</h4>
                <p className="text-sm text-foreground/80">
                  Lunes a viernes - Disponibilidad 2-3 semanas
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
      <section id="faqs-panendoscopia" className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Faq routeKey="panendoscopia" />
        </div>
      </section>
    </>
  )
}
