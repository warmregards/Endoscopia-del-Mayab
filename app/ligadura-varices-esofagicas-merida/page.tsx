import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn } from "@/lib/pricing"
import Link from "next/link"
import {
  Stethoscope,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Microscope,
  Clock,
  Heart,
  AlertTriangle,
  Activity,
  Target,
  FileText,
  Award,
  Zap,
  Users,
  Phone,
  ExternalLink,
} from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews";


export const revalidate = 86400
export const metadata = metaFor("ligadura")

export default function LigaduraVaricesPage() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://endoscopiadelmayab.com").replace(/\/$/, "")

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-background">
        <div className="absolute inset-0 bg-gradient-to-br from-red-100/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Content - Left Side */}
            <div className="flex-1 lg:max-w-3xl space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-200">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium text-red-700">Procedimiento de Emergencia Disponible</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-foreground leading-tight">
                  Ligadura de Várices Esofágicas en Mérida | Dr. Omar Quiroz - Control de Hemorragias Digestivas
                </h1>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  La ligadura de várices esofágicas en Mérida es un procedimiento endoscópico de urgencia para controlar y prevenir hemorragias por várices. 
                  El Dr. Omar Quiroz realiza ligadura de várices en Hospital Amerimed, Mérida, Yucatán, con disponibilidad de emergencia 24/7 
                  y precio transparente desde {mxn(PRICING.ligadura_varices.from)}.
                </p>

                <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-red-600" />
                    <span>Control inmediato de hemorragias</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-red-600" />
                    <span>Prevención de resangrado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-red-600" />
                    <span>Desde {mxn(PRICING.ligadura_varices.from)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-red-600" />
                    <span>Disponible 24/7 en Hospital Amerimed</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="ligadura varices" position="hero" />
                      <WhatsAppButton service="ligadura varices" position="hero" />
                </div>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 text-sm text-foreground/70">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-red-600" />
                  <span>Hospital Amerimed, Consultorio 517</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-red-600" />
                  <span>Emergencias y programadas</span>
                </div>
              </div>
            </div>

            {/* Stats Card - Right Side */}
            <div className="lg:w-80 space-y-6">
              <div className="p-8 rounded-2xl border border-border bg-background/80 backdrop-blur-sm shadow-lg">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="font-serif font-bold text-xl text-foreground mb-2">
                      Salvamos Vidas
                    </h3>
                    <p className="text-foreground/70 text-sm">
                      Control efectivo de hemorragias digestivas altas por várices esofágicas
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-red-600">95%</div>
                      <div className="text-xs text-foreground/70">Éxito hemostático</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-600">24/7</div>
                      <div className="text-xs text-foreground/70">Disponibilidad</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-red-50 border border-red-200">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <span className="font-semibold text-foreground">Urgencia Médica</span>
                </div>
                <p className="text-sm text-foreground/80">
                  Si presenta vómito con sangre o evacuaciones oscuras, acuda inmediatamente. 
                  Ligadura urgente disponible en Hospital Amerimed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-STEP PROCESS */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Procedimiento de Ligadura de Várices - 5 Pasos
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Proceso controlado para detener hemorragias y prevenir resangrado
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-red-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-foreground mb-2">Estabilización</h3>
              <p className="text-sm text-foreground/80">Evaluación de signos vitales y reposición de volumen si necesario</p>
            </div>

            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-red-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-foreground mb-2">Sedación Profunda</h3>
              <p className="text-sm text-foreground/80">Anestesia controlada para procedimiento sin dolor</p>
            </div>

            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-red-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-foreground mb-2">Endoscopia</h3>
              <p className="text-sm text-foreground/80">Visualización directa de las várices esofágicas sangrantes</p>
            </div>

            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-red-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-foreground mb-2">Ligadura</h3>
              <p className="text-sm text-foreground/80">Colocación de bandas elásticas para ocluir várices</p>
            </div>

            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-red-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                5
              </div>
              <h3 className="font-semibold text-foreground mb-2">Monitoreo</h3>
              <p className="text-sm text-foreground/80">Vigilancia post-procedimiento y control de complicaciones</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-100 border border-red-200">
              <Zap className="h-5 w-5 text-red-600" />
              <span className="font-semibold text-foreground">Duración del procedimiento</span>
              <span className="text-foreground/70">- 20-45 minutos según número de várices</span>
            </div>
          </div>
        </div>
      </section>

      {/* DR. OMAR'S SURGICAL ADVANTAGE */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Dr. Omar Quiroz - Ventaja Quirúrgica Única</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight">
                  ¿Por Qué la Experiencia Quirúrgica Es Vital en Ligadura de Várices?
                </h2>
                
                <p className="text-lg text-foreground/80 leading-relaxed">
                  La mayoría de endoscopistas en Mérida evitan casos complejos de várices sangrantes debido al riesgo. 
                  <strong>El Dr. Quiroz es diferente</strong> - como cirujano especializado en emergencias digestivas, 
                  maneja complicaciones que otros no pueden resolver y ofrece respaldo quirúrgico inmediato si la ligadura endoscópica no es suficiente.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="p-6 rounded-xl bg-muted/50 border border-border">
                    <h4 className="font-semibold text-foreground mb-3">Casos Que Otros Endoscopistas Evitan:</h4>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• Hemorragia masiva activa</li>
                      <li>• Várices en pacientes inestables</li>
                      <li>• Resangrado post-ligadura</li>
                      <li>• Complicaciones durante el procedimiento</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-3">Lo Que Dr. Quiroz Ofrece:</h4>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• Manejo integral de emergencias digestivas</li>
                      <li>• Backup quirúrgico inmediato si es necesario</li>
                      <li>• Experiencia en casos complejos y alta mortalidad</li>
                      <li>• Coordinación multidisciplinaria en Hospital Amerimed</li>
                    </ul>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-200">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                      <ShieldCheck className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                      Experiencia Probada en Emergencias Digestivas
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Con más de 150 ligaduras de várices realizadas, el Dr. Quiroz combina técnica endoscópica avanzada 
                      con criterio quirúrgico para salvar vidas en situaciones críticas. Es el único especialista en Mérida 
                      que ofrece manejo integral de hemorragias digestivas altas las 24 horas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE TRANSPARENCY SECTION */}
      <section className="py-16 sm:py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Costo de Ligadura de Várices en Mérida - Precio Transparente desde {mxn(PRICING.ligadura_varices.from)}
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Precio claro para emergencias y procedimientos programados, sin sorpresas en situaciones críticas
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Base Price */}
            <div className="p-8 rounded-2xl border border-border bg-background text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Precio Base Ligadura de Várices
              </h3>
              <div className="text-3xl font-bold text-red-600 mb-2">{mxn(PRICING.ligadura_varices.from)}</div>
              <p className="text-sm text-foreground/70 mb-4">Para casos estándar programados o de emergencia</p>
              <div className="text-left space-y-2 text-sm text-foreground/80">
                <p>• Procedimiento completo</p>
                <p>• Sedación con anestesiólogo</p>
                <p>• Bandas de ligadura</p>
                <p>• Monitoreo post-procedimiento</p>
              </div>
            </div>

            {/* What's Included */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Costo Incluye</h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Evaluación pre-procedimiento urgente</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Sedación profunda monitoreada</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Endoscopio de emergencia</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Bandas elásticas especializadas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Vigilancia post-ligadura</p>
                </div>
              </div>
            </div>

            {/* Emergency Availability */}
            <div className="p-8 rounded-2xl border border-border bg-red-50">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Disponibilidad de Emergencia</h3>
              <div className="space-y-4 text-foreground/80">
                <p className="text-sm">
                  <strong>Ligadura urgente 24/7</strong> en Hospital Amerimed para casos de hemorragia activa.
                </p>
                <div className="p-4 rounded-xl bg-background border border-red-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="h-4 w-4 text-red-600" />
                    <span className="font-medium text-foreground">Línea de Emergencias</span>
                  </div>
                  <p className="text-2xl font-bold text-red-600">999-236-0153</p>
                  <p className="text-xs text-foreground/70 mt-1">Respuesta inmediata para hemorragias digestivas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Note */}
          <div className="mt-8 text-center p-6 rounded-2xl bg-background border border-border">
            <p className="text-foreground/70">
              <strong>Nota importante:</strong> En casos de emergencia, la prioridad es el control de la hemorragia. 
              Los aspectos financieros se coordinan posteriormente con trabajadores sociales del hospital.
            </p>
          </div>
        </div>
      </section>

      {/* WHEN IS LIGATION INDICATED */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                ¿Cuándo Se Indica la Ligadura de Várices?
              </h2>
              <p className="text-lg text-foreground/70">
                Criterios médicos para decidir el tratamiento endoscópico de várices esofágicas
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="p-8 rounded-2xl border border-red-200 bg-red-50">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-6">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                  Indicaciones de Emergencia
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">Hemorragia digestiva alta activa por várices</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">Vómito con sangre (hematemesis) recurrente</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">Evacuaciones oscuras (melena) con inestabilidad</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">Resangrado tras tratamiento médico</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl border border-primary/20 bg-primary/5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                  Indicaciones Programadas
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">Várices grandes (grado III-IV) en cirrosis</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">Historia de sangrado previo por várices</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">Profilaxis secundaria post-sangrado</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">Alto riesgo de hemorragia por signos endoscópicos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Conditions */}
            <div className="p-8 rounded-2xl bg-muted/30 border border-border">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Condiciones Asociadas Que Requieren Ligadura
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-6 w-6 text-accent-strong" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Cirrosis Hepática</h4>
                  <p className="text-sm text-foreground/70">Cualquier etiología con hipertensión portal</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mx-auto mb-3">
                    <Activity className="h-6 w-6 text-accent-strong" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Hipertensión Portal</h4>
                  <p className="text-sm text-foreground/70">Sin respuesta a tratamiento médico</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mx-auto mb-3">
                    <Microscope className="h-6 w-6 text-accent-strong" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Sangrado Recurrente</h4>
                  <p className="text-sm text-foreground/70">A pesar de manejo médico óptimo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECOVERY AND FOLLOW-UP */}
      <section className="py-16 sm:py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Recuperación y Seguimiento Post-Ligadura
              </h2>
              <p className="text-lg text-foreground/70">
                Qué esperar después del procedimiento de ligadura de várices
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Immediate Recovery */}
              <div className="p-6 rounded-2xl border border-border bg-background">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  Primeras 24 Horas
                </h3>
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>• Vigilancia en hospital 4-6 horas</p>
                  <p>• Dieta líquida inicialmente</p>
                  <p>• Monitoreo de signos vitales</p>
                  <p>• Control de náusea post-sedación</p>
                </div>
              </div>

              {/* First Week */}
              <div className="p-6 rounded-2xl border border-border bg-background">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  Primera Semana
                </h3>
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>• Dieta blanda progresiva</p>
                  <p>• Evitar alimentos duros o picantes</p>
                  <p>• Medicamentos para prevenir resangrado</p>
                  <p>• Reposo relativo en casa</p>
                </div>
              </div>

              {/* Long-term Follow-up */}
              <div className="p-6 rounded-2xl border border-border bg-background">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  Seguimiento a Largo Plazo
                </h3>
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>• Endoscopia de control en 1-3 meses</p>
                  <p>• Evaluación de nuevas várices</p>
                  <p>• Ajuste de medicamentos</p>
                  <p>• Sesiones adicionales si necesario</p>
                </div>
              </div>
            </div>

            {/* Warning Signs */}
            <div className="mt-12 p-8 rounded-2xl bg-red-50 border border-red-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    Signos de Alarma - Contactar Inmediatamente
                  </h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-600" />
                      <span className="text-foreground/80">Vómito con sangre fresca</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-600" />
                      <span className="text-foreground/80">Evacuaciones negras abundantes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-600" />
                      <span className="text-foreground/80">Mareo o debilidad intensa</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-600" />
                      <span className="text-foreground/80">Dolor abdominal severo</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-background border border-red-200">
                    <p className="font-semibold text-foreground mb-1">Línea Directa 24/7</p>
                    <p className="text-2xl font-bold text-red-600">999-236-0153</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PROCEDURES */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Procedimientos Relacionados Disponibles en Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Tratamientos complementarios para manejo integral de hipertensión portal
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Esclerosis */}
            <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Esclerosis de Várices Gástricas
              </h3>
              <p className="text-foreground/80 mb-6">
                Tratamiento especializado para várices gástricas mediante inyección de agentes esclerosantes. 
                Complementa la ligadura esofágica en casos complejos.
              </p>
              <div className="space-y-2 text-sm text-foreground/70 mb-6">
                <p>• Técnica con cianoacrilato</p>
                <p>• Para várices fúndicas grandes</p>
                <p>• Disponible en Hospital Amerimed</p>
                <p>• Desde {mxn(PRICING.esclerosis_varices_gastricas.from)}</p>
              </div>
              <Link 
                href="/esclerosis-varices-gastricas-merida" 
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Más información sobre Esclerosis →
              </Link>
            </div>

            {/* CPRE */}
            <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                <Activity className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                CPRE - Manejo de Complicaciones
              </h3>
              <p className="text-foreground/80 mb-6">
                Colangiopancreatografía retrógrada endoscópica para evaluar y tratar complicaciones 
                biliares en pacientes con cirrosis e hipertensión portal.
              </p>
              <div className="space-y-2 text-sm text-foreground/70 mb-6">
                <p>• Evaluación de vías biliares</p>
                <p>• Colocación de prótesis si necesario</p>
                <p>• Manejo de obstrucciones</p>
                <p>• Desde {mxn(PRICING.cpre.from)}</p>
              </div>
              <Link 
                href="/cpre-merida" 
                className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Más información sobre CPRE →
              </Link>
            </div>

            {/* Emergency Endoscopy */}
            <div className="p-8 rounded-2xl border border-red-200 bg-red-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mb-6">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Endoscopia de Emergencia
              </h3>
              <p className="text-foreground/80 mb-6">
                Evaluación endoscópica inmediata para hemorragias digestivas altas. 
                Diagnóstico rápido y tratamiento simultáneo disponible 24/7.
              </p>
              <div className="space-y-2 text-sm text-foreground/70 mb-6">
                <p>• Disponible fines de semana</p>
                <p>• Respuesta en menos de 1 hora</p>
                <p>• Equipo completo de emergencia</p>
                <p>• Hospital Amerimed</p>
              </div>
              <Link 
                href="/emergencias-digestivas-merida" 
                className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
              >
                Más información sobre Emergencias →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS SERVED */}
      <section className="py-16 sm:py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Atención a Toda Mérida y Zona Metropolitana
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Ligadura de várices disponible para pacientes de todas las colonias de Mérida
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-center">
            <div className="p-4 rounded-xl bg-background border border-border">
              <MapPin className="h-6 w-6 text-accent-strong mx-auto mb-2" />
              <h3 className="font-semibold text-foreground mb-1">Centro Histórico</h3>
              <p className="text-sm text-foreground/70">Acceso directo por Circuito Colonias</p>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border">
              <MapPin className="h-6 w-6 text-accent-strong mx-auto mb-2" />
              <h3 className="font-semibold text-foreground mb-1">Montebello</h3>
              <p className="text-sm text-foreground/70">Ruta rápida vía Prolongación Paseo Montejo</p>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border">
              <MapPin className="h-6 w-6 text-accent-strong mx-auto mb-2" />
              <h3 className="font-semibold text-foreground mb-1">Altabrisa</h3>
              <p className="text-sm text-foreground/70">15 minutos por Periférico</p>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border">
              <MapPin className="h-6 w-6 text-accent-strong mx-auto mb-2" />
              <h3 className="font-semibold text-foreground mb-1">Temozón Norte</h3>
              <p className="text-sm text-foreground/70">Acceso conveniente por Periférico Norte</p>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border">
              <MapPin className="h-6 w-6 text-accent-strong mx-auto mb-2" />
              <h3 className="font-semibold text-foreground mb-1">Cholul</h3>
              <p className="text-sm text-foreground/70">Ruta directa por Carretera Mérida-Progreso</p>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border">
              <MapPin className="h-6 w-6 text-accent-strong mx-auto mb-2" />
              <h3 className="font-semibold text-foreground mb-1">García Ginerés</h3>
              <p className="text-sm text-foreground/70">Cerca de Circuito Colonias y Reforma</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-background border border-border shadow-sm">
              <MapPin className="h-6 w-6 text-accent-strong" />
              <div className="text-left">
                <p className="font-semibold text-foreground">Hospital Amerimed</p>
                <p className="text-sm text-foreground/70">Calle 54 #365 x Av. Pérez Ponce, Chichí Suárez</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                ¿Necesita Ligadura de Várices de Emergencia?
              </h2>
              <p className="text-xl text-foreground/80">
                No espere. El Dr. Omar Quiroz está disponible 24/7 en Hospital Amerimed para emergencias digestivas.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-background border border-border shadow-sm">
                <Phone className="h-8 w-8 text-red-600" />
                <div className="text-left">
                  <p className="font-semibold text-foreground">Línea de Emergencias</p>
                  <p className="text-2xl font-bold text-red-600">999-236-0153</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-background border border-border shadow-sm">
                <MapPin className="h-8 w-8 text-red-600" />
                <div className="text-left">
                  <p className="font-semibold text-foreground">Ubicación</p>
                  <p className="text-foreground/70">Hospital Amerimed</p>
                  <p className="text-foreground/70">Consultorio 517</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <CallButton service="ligadura varices" position="cta section" />
                      <WhatsAppButton service="ligadura varices" position="cta section" />
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
          <Faq routeKey="ligadura" />
        </div>
      </section>
    </>
  )
}
