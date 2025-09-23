import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn } from "@/lib/pricing"
import Image from "next/image"
import Link from "next/link"
import { Stethoscope, MapPin, Phone, MessageCircle, Globe, CheckCircle2, ShieldCheck, Microscope, Hospital, Clock, Star, Award, Users, Heart, AlertTriangle, Activity, Camera, Search, Brain, Target, TrendingUp, UserCheck } from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleReviews from "@/components/GoogleReviews";

export const revalidate = 86400
export const metadata = metaFor("colonoscopia")

export default function ColonoscopiaPage() {
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">300+ Colonoscopias Anuales</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-foreground leading-tight">
                  Colonoscopia en Mérida - ${mxn(PRICING.colonoscopia.from)} Pesos Fijos | Dr. Omar Quiroz
                </h1>
                
                <p className="text-xl text-primary font-semibold">
                  Prevención cáncer colorrectal con sedación consciente - Sin dolor, precio transparente
                </p>
                
                <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                  <p>
                    ¿45+ años sin colonoscopia? ... colonoscopia cómoda.{" "}
                    <Link href="#precio-colonoscopia-merida" className="underline decoration-primary/40 hover:decoration-primary">
                      Ver precio y qué incluye
                    </Link>.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Sedación profunda sin dolor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Olympus 180 HD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Extracción pólipos incluida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Reporte fotos inmediato</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-left gap-4">
                  <CallButton service="colonoscopia" position="hero" />
                  <WhatsAppButton service="colonoscopia" position="hero" />
                </div>
              </div>
            </div>
            
            {/* Image - Right Side */}
            <div className="flex-1 lg:max-w-md">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-strong/20 rounded-3xl transform rotate-3" />
                <div className="relative bg-background rounded-3xl p-8 border border-border shadow-2xl">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <ShieldCheck className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-foreground/60">Dr. Omar Quiroz</div>
                      <div className="text-2xl font-bold text-primary">{mxn(PRICING.colonoscopia.from)} pesos fijos</div>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-background border border-border">
                    <h3 className="text-lg font-serif font-bold text-foreground mb-4 text-center">
                      Todo incluido en {mxn(PRICING.colonoscopia.from)} pesos
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Sedación profunda</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Colonoscopia Olympus 180</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Extracción pólipos incluida</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Reporte con fotos HD</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Biopsia $1,000 si necesaria</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <h4 className="font-semibold text-foreground mb-1 text-sm">¿Por qué más accesible?</h4>
                      <p className="text-xs text-foreground/80">
                        Sin deudas hospitalarias. Misma tecnología, precio justo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CANCER PREVENTION SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Colonoscopia - Tu Mejor Defensa Contra Cáncer Colorrectal
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              90% curación si se detecta temprano - Colonoscopia salva vidas
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center mb-16">
            {/* Stats and Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  Cáncer Colorrectal Mata Porque se Detecta Tarde
                </h3>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                    <div className="text-2xl font-bold text-green-600 mb-1">90%</div>
                    <p className="text-sm text-foreground/80">Supervivencia detección temprana</p>
                  </div>
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <div className="text-2xl font-bold text-red-600 mb-1">65%</div>
                    <p className="text-sm text-foreground/80">Supervivencia detección tardía</p>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-3">¿Qué son pólipos?</h4>
                  <div className="space-y-2 text-foreground/80">
                    <p>• Crecimientos en colon que pueden ser cáncer</p>
                    <p>• Proceso toma 5-10 años</p>
                    <p>• Colonoscopia los quita mismo día</p>
                    <p>• Problema resuelto antes de ser cáncer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Patient Story */}
            <div className="bg-gradient-to-br from-background to-muted/30 p-8 rounded-2xl border border-border">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Historia Real</h4>
                    <p className="text-sm text-foreground/60">Miguel, 47 años</p>
                  </div>
                </div>
                <blockquote className="text-foreground/80 italic text-lg">
                  "Mi papá murió de cáncer colon a los 60. Yo me hice colonoscopia a los 45 y quitaron 3 pólipos. Probablemente me salvé la vida"
                </blockquote>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
              <Target className="h-5 w-5 text-accent-strong" />
              <span className="font-semibold text-foreground">¿Cuándo?</span>
              <span className="text-foreground/70">Primera: 45 años. Antecedentes familiares: 10 años antes</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 id="precio-colonoscopia-merida" className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Precio de la colonoscopia en Mérida: ¿qué incluye? — {mxn(PRICING.colonoscopia.from)} todo incluido
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Precio transparente con sedación y extracción de pólipos pequeños incluida. Sin cargos ocultos.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {/* Hospital 1 */}
            <div className="p-6 rounded-2xl border border-border bg-background text-center">
              <div className="text-lg font-bold text-foreground/60 mb-2">Faro del Mayab</div>
              <div className="text-2xl font-bold text-foreground/60 line-through">$12,500+ pesos</div>
              <p className="text-sm text-foreground/50 mt-2">+ estudios + extras</p>
            </div>
            
            <div className="p-6 rounded-2xl border-2 border-primary bg-primary/5 text-center">
              <div className="text-lg font-bold text-primary mb-2">Dr. Omar Quiroz</div>
              <div className="text-3xl font-bold text-primary">{mxn(PRICING.colonoscopia.from)} pesos</div>
              <p className="text-sm text-primary/80 mt-2">Todo incluido</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background text-center">
              <div className="text-lg font-bold text-foreground/60 mb-2">IMSS</div>
              <div className="text-2xl font-bold text-foreground/60">"Gratis"</div>
              <p className="text-sm text-foreground/50 mt-2">6-12 meses espera</p>
            </div>
          </div>

          {/* What's Included */}
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-muted/30 to-background border border-border">
            <h3 className="text-xl font-serif font-bold text-foreground mb-6 text-center">
              ¿Qué incluye exactamente?
            </h3>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80">Consulta pre-colonoscopia</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80">Sedación con anestesiólogo</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80">Colonoscopia Olympus 180</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80">Extracción pólipos pequeños</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80">Fotos HD + reporte</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80">Seguimiento telefónico</span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20 text-center">
              <p className="text-sm text-foreground/80">
                Incluye: sedación, equipo HD, reporte y extracción de pólipos pequeños. <br className="hidden sm:block"/>
                Puede tener costo extra: biopsia o materiales especiales si se requieren (te avisamos antes).
              </p>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20 text-center">
              <h4 className="font-semibold text-foreground mb-2">Biopsia pólipos: $1,000 extra (solo si necesaria)</h4>
              <p className="text-sm text-foreground/80">
                Sin overhead hospitalario - Mismo equipo, precio real
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREPARATION SECTION */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 id="preparacion-colonoscopia" className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
              Preparación para colonoscopia: guía rápida
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>Dieta líquida clara el día anterior; evita bebidas rojas/moradas.</li>
              <li>Laxante dividido en 2 tomas (tarde y madrugada) según indicación.</li>
              <li>Medicamentos: consulta si tomas anticoagulantes o antidiabéticos.</li>
              <li>El día del estudio: ayuno, acudir con acompañante y no conducir después.</li>
            </ul>
            <p className="text-sm text-foreground/70">
              Te enviamos indicaciones por WhatsApp al agendar.{" "}
              <Link href="#contacto-colonoscopia" className="underline decoration-primary/40 hover:decoration-primary">
                Solicitar indicaciones ahora
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* SEDATION COMFORT SECTION */}
      <section id="sedacion" className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Colonoscopia con Sedación en Mérida - "No Sentí Nada"
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Procedimiento cómodo con sedación profunda
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            {/* Patient Testimonials */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-accent-light/5 to-background border border-accent-light/20">
                <blockquote className="text-foreground/80 italic mb-3">
                  "Tenía pánico a colonoscopia. Con Dr. Quiroz fue facilísimo. Me dormí y desperté sin dolor. Lo peor fue tomar laxante día anterior"
                </blockquote>
                <p className="text-sm text-foreground/60">- Patricia, 49 años</p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-background border border-primary/20">
                <blockquote className="text-foreground/80 italic mb-3">
                  "Pensé iba doler horrible. Sedación perfecta - no recuerdo nada. Desperté hablando normal viendo fotos mi colon"
                </blockquote>
                <p className="text-sm text-foreground/60">- Fernando, 55 años</p>
              </div>
            </div>

            {/* Sedation Details */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="font-semibold text-foreground mb-4">Sedación Ajustada a Ti</h3>
                <div className="space-y-3 text-foreground/80">
                  <p>• Anestesiólogo calcula dosis exacta peso/edad</p>
                  <p>• No despiertas durante procedimiento</p>
                  <p>• No quedas inconsciente por horas</p>
                  <p>• Sin náusea post-sedación</p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                <h3 className="font-semibold text-foreground mb-4">Monitoreo Continuo</h3>
                <div className="space-y-2 text-foreground/80">
                  <p>• Oxígeno, presión, ritmo cardíaco vigilados</p>
                  <p>• Equipo emergencia disponible</p>
                  <p>• Despertar gradual sin dolor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL EXPERTISE SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Colonoscopia en Mérida Yucatán</span>
              </div>
              
              <div className="space-y-4">
                <h2 id="por-que-elegirnos" className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight">
                  ¿Por qué elegirnos para tu colonoscopia en Mérida?
                </h2>
              </div>
              <ul className="mt-3 space-y-2 text-foreground/80">
                <li>• Sedación con <Link href="/endoscopia#sedacion" className="underline text-primary">anestesiólogo y monitoreo</Link> continuo</li>
              <li>• Equipo Olympus 180 HD y <Link href="#deteccion-polipos" className="underline text-primary">extracción de pólipos</Link> en la misma sesión</li>
                <li>• 15+ años de experiencia, complicaciones &lt;0.1%</li>
              </ul>
            </div>

            {/* Experience Stats */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center p-6 rounded-2xl border border-border bg-background">
                <div className="text-3xl font-bold text-primary mb-2">300+</div>
                <div className="text-sm font-medium text-foreground/70">Colonoscopias Anuales</div>
              </div>
              <div className="text-center p-6 rounded-2xl border border-border bg-background">
                <div className="text-3xl font-bold text-accent-strong mb-2">15+</div>
                <div className="text-sm font-medium text-foreground/70">Años Mérida</div>
              </div>
              <div className="text-center p-6 rounded-2xl border border-border bg-background">
                <div className="text-3xl font-bold text-primary mb-2">&lt;0.1%</div>
                <div className="text-sm font-medium text-foreground/70">Complicaciones</div>
              </div>
            </div>

            {/* Local Coverage */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Pacientes Mérida:</p>
                    <p className="text-sm text-foreground/70">
                      García Ginerés, Montebello, Centro, Cholul confían Dr. Quiroz colonoscopia preventiva
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-strong mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Cobertura Regional:</p>
                    <p className="text-sm text-foreground/70">
                      Progreso, Valladolid, Campeche viajan para colonoscopia calidad Dr. Quiroz
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN YOU NEED COLONOSCOPY */}
<section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
        Colonoscopia Precio Merida - ¿Cuándo Necesitas Una?
      </h2>
      <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
        Prevención vs. síntomas - Cuándo es tu momento
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Prevention */}
      <div className="p-8 rounded-2xl border border-border bg-background">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <ShieldCheck className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-serif font-bold text-foreground mb-4">Prevención (edad 45+)</h3>
        <div className="space-y-3 text-foreground/80">
          <p>• Primera colonoscopia: 45 años</p>
          <p>• Antecedentes familiares: 10 años antes caso familiar</p>
          <p>• Cada 10 años si colon normal</p>
          <p>• Cada 3-5 años si pólipos previos</p>
        </div>
      </div>

      {/* Symptoms */}
      <div className="p-8 rounded-2xl border border-border bg-background">
        <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
          <AlertTriangle className="h-6 w-6 text-accent-strong" />
        </div>
        <h3 className="text-xl font-serif font-bold text-foreground mb-4">Síntomas Alarmantes</h3>
        <div className="space-y-3 text-foreground/80">
          <p>• Sangrado rectal (rojo o heces negras)</p>
          <p>• Cambios intestinales súbitos</p>
          <p>• Dolor abdominal + pérdida peso</p>
          <p>• Anemia sin causa clara</p>
        </div>
      </div>
    </div>

    <div className="mt-12 text-center">
      <div className="max-w-2xl mx-auto p-6 rounded-xl bg-primary/10 border border-primary/20">
        <h4 className="font-semibold text-foreground mb-3">Costo Real vs. Riesgo</h4>
        <p className="text-foreground/80">
          <strong>Colonoscopia preventiva:</strong> $5,000 cada 10 años = $500/año<br/>
          <strong>Cáncer colorrectal:</strong> $500,000+ tratamiento + sufrimiento
        </p>
        <p className="text-primary font-semibold mt-2">¿Qué prefieres?</p>
      </div>

      {/* RELATED LINKS / TRIAGE */}
      <p className="text-sm text-foreground/70 mt-6 text-center">
        ¿Síntomas altos (reflujo, gastritis)? Conoce la{" "}
        <Link href="/endoscopia" className="underline decoration-primary/40 hover:decoration-primary">
          endoscopia en Mérida (precio y qué incluye)
        </Link>.
      </p>

      <p className="text-sm text-foreground/70 mt-2">
        Ictericia u obstrucción biliar: evalúa{" "}
        <Link href="/cpre" className="underline decoration-accent-strong/40 hover:decoration-accent-strong">
          CPRE en Mérida (costo y proceso)
        </Link>.
      </p>

      <p className="text-sm text-foreground/70 mt-2">
        ¿Dudas comunes? Revisa las{" "}
        <Link href="#faqs-colonoscopia" className="underline decoration-primary/40 hover:decoration-primary">
          preguntas frecuentes
        </Link>.
      </p>
    </div>
  </div>
</section>

      {/* PRIVATE PRACTICE BENEFITS */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent-strong/10 border border-accent-strong/20">
                <UserCheck className="h-5 w-5 text-accent-strong" />
                <span className="font-semibold text-foreground">Colonoscopia Privada Mérida</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight">
                  Colonoscopia Particular - Atención Personalizada Sin Prisa
                </h2>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Comunicación directa</p>
                    <p className="text-sm text-foreground/70">
                      Hablas con Dr. Quiroz, no residentes. Explica resultados personalmente
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-strong mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Horarios flexibles</p>
                    <p className="text-sm text-foreground/70">
                      Citas rápidas, no meses espera. Emergencias fines de semana
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Ambiente cómodo</p>
                    <p className="text-sm text-foreground/70">
                      No áreas frías hospital. Consultorio diseñado comodidad paciente
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-strong mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Seguimiento personal</p>
                    <p className="text-sm text-foreground/70">
                      WhatsApp directo Dr. Quiroz. Revisa biopsias personalmente
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCEDURE STEPS */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Colonoscopia Proceso - Qué Esperar Paso a Paso
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Procedimiento completo desde preparación hasta resultados
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Day Before */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-foreground mb-3">Día anterior</h3>
              <div className="space-y-2 text-sm text-foreground/80">
                <p>• Dieta líquida clara</p>
                <p>• Laxante según horarios</p>
                <p>• Mucho líquido</p>
                <p>• Preparación exitosa</p>
              </div>
            </div>

            {/* Day Of */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-foreground mb-3">Día colonoscopia</h3>
              <div className="space-y-2 text-sm text-foreground/80">
                <p>• Llegar con acompañante</p>
                <p>• Sedación intravenosa</p>
                <p>• Colonoscopia 20-40 min</p>
                <p>• Sin dolor, sin molestias</p>
              </div>
            </div>

            {/* After */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-foreground mb-3">Después</h3>
              <div className="space-y-2 text-sm text-foreground/80">
                <p>• Despertar gradual</p>
                <p>• Resultados con fotos</p>
                <p>• Reporte detallado</p>
                <p>• Te vas caminando</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Recuperación:</span>
              <span className="text-foreground/70">30-45 minutos - Te vas mismo día</span>
            </div>
          </div>
        </div>
      </section>

      {/* POLYP DETECTION */}
      <section id="deteccion-polipos" className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Detección Temprana Cáncer Colorrectal - Pólipos Antes de Cáncer
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Dr. Quiroz encuentra pólipos que otros colonoscopistas pierden
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Polyp Types */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <h3 className="font-semibold text-foreground mb-3">Adenomatosos</h3>
                <p className="text-sm text-foreground/80">Los que pueden ser cáncer</p>
                <div className="mt-3 text-accent-strong font-semibold">Se quitan siempre</div>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <h3 className="font-semibold text-foreground mb-3">Hiperplásicos</h3>
                <p className="text-sm text-foreground/80">Generalmente benignos</p>
                <div className="mt-3 text-green-600 font-semibold">Bajo riesgo</div>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <h3 className="font-semibold text-foreground mb-3">Serrados</h3>
                <p className="text-sm text-foreground/80">Riesgo intermedio</p>
                <div className="mt-3 text-yellow-600 font-semibold">Seguimiento</div>
              </div>
            </div>

            {/* Success Story */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-accent-light/5 to-background border border-accent-light/20">
              <blockquote className="text-foreground/80 italic text-center text-lg">
                "Quitaron 2 pólipos 8mm. Biopsia mostró displasia alto grado - prácticamente pre-cáncer. Si no me hago colonoscopia, en 5 años hubiera sido cáncer real"
              </blockquote>
              <p className="text-center text-foreground/60 mt-2">- Carlos, 51 años</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                <Target className="h-5 w-5 text-accent-strong" />
                <span className="font-semibold text-foreground">Extracción incluida:</span>
                <span className="text-foreground/70">Pólipos pequeños (menos 1cm) sin costo extra</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 id="resultados-y-tiempos" className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Resultados y tiempos: entrega en 20 minutos
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Explicación con fotos HD al despertar y reporte escrito el mismo día; biopsias en 5–7 días.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            {/* Results Process */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="font-semibold text-foreground mb-4">Durante despertar:</h3>
                <p className="text-foreground/80">
                  Dr. Quiroz muestra fotos tu colon, explica pólipos encontrados mientras despiertas sedación
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="font-semibold text-foreground mb-4">Reporte completo:</h3>
                <div className="space-y-2 text-foreground/80">
                  <p>• Ubicación exacta pólipos</p>
                  <p>• Tamaños y tipos</p>
                  <p>• Recomendaciones seguimiento</p>
                  <p>• Plan próxima colonoscopia</p>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="font-semibold text-foreground mb-4">Biopsias:</h3>
                <p className="text-foreground/80">
                  Resultados 5-7 días. Dr. Quiroz llama personalmente explicar patología y siguiente paso
                </p>
              </div>
            </div>

            {/* Patient Testimonial */}
            <div className="bg-gradient-to-br from-background to-muted/30 p-8 rounded-2xl border border-border">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Testimonio</h4>
                    <p className="text-sm text-foreground/60">Lucía, 46 años</p>
                  </div>
                </div>
                <blockquote className="text-foreground/80 italic">
                  "Dr. Quiroz explicó todo con fotos. Mostró dónde estaban pólipos, por qué los quitó. Nunca doctor explicó tan bien"
                </blockquote>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20">
              <Brain className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Seguimiento:</span>
              <span className="text-foreground/70">Colon limpio: 10 años. Pólipos: 3-5 años</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contacto-colonoscopia" className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-accent-light/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Agendar Colonoscopia - Citas Esta Semana
              </h2>
              <p className="text-lg text-foreground/70">
                Consulta valoración evalúa si necesitas colonoscopia según síntomas
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">📞 Teléfono</h3>
                <p className="text-sm text-foreground/70">[Número] - Llamadas directas consultorio</p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <MessageCircle className="h-8 w-8 text-accent-strong mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">💬 WhatsApp</h3>
                <p className="text-sm text-foreground/70">[Número] - Respuesta rápida programar</p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">📍 Centro Mérida</h3>
                <p className="text-sm text-foreground/70">Acceso García Ginerés, Montebello, Norte</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
                  <CallButton service="colonoscopia" position="cta section" />
                  <WhatsAppButton service="colonoscopia" position="cta section" />
            </div>

            {/* Additional Info */}
            <div className="grid gap-4 md:grid-cols-2 mt-8">
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">¿Primera colonoscopia?</h4>
                <p className="text-sm text-foreground/80">
                  Consulta previa resuelve miedos, explica preparación específica
                </p>
              </div>

              <div className="p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                <h4 className="font-semibold text-foreground mb-2">Emergencias</h4>
                <p className="text-sm text-foreground/80">
                  Sangrado rectal activo, dolor severo. Fines de semana disponible
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
      <section id="faqs-colonoscopia" className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Faq routeKey="colonoscopia" />
        </div>
      </section>
    </>
  )
}
