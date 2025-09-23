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
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.endoscopiadelmayab.com").replace(/\/$/, "")

  return (
    <>
      {/* HERO SECTION */}
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
                  <span className="text-sm font-medium text-red-700">Atención de emergencia disponible 24/7</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-foreground leading-tight">
                  Ligadura de Várices Esofágicas en Mérida | Dr. Omar Quiroz
                </h1>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  Procedimiento endoscópico para <strong>controlar y prevenir hemorragias por várices</strong>.
                  Atención inmediata en Hospital Amerimed (Mérida, Yucatán) y <strong>precio transparente</strong> desde {mxn(PRICING.ligadura_varices.from)}.
                </p>

                <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-red-600" />
                    <span>Control endoscópico en el mismo acto</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-red-600" />
                    <span>Prevención de resangrado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-red-600" />
                    <span>Sedación con anestesiólogo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-red-600" />
                    <span>Disponibilidad 24/7 en Hospital Amerimed</span>
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
                  <span>Emergencias y procedimientos programados</span>
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
                      Control de hemorragia
                    </h3>
                    <p className="text-foreground/70 text-sm">
                      Alta tasa de control inicial en hemorragia digestiva alta por várices.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xs text-foreground/70">Tiempo habitual</div>
                      <div className="text-2xl font-bold text-red-600">20–45 min</div>
                    </div>
                    <div>
                      <div className="text-xs text-foreground/70">Disponibilidad</div>
                      <div className="text-2xl font-bold text-red-600">24/7</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-red-50 border border-red-200">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <span className="font-semibold text-foreground">Urgencia médica</span>
                </div>
                <p className="text-sm text-foreground/80">
                  Si presentas vómito con sangre o evacuaciones negras, acude de inmediato. Atención en Hospital Amerimed.
                </p>
                <p className="mt-3 text-sm">
                  <a href="tel:+529992360153" className="font-semibold text-red-600 underline underline-offset-4">Llamar 999 236 0153</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-STEP PROCESS */}
      {/* 5-STEP PROCESS */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Ligadura de Várices: 5 Pasos
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Protocolo para detener la hemorragia y reducir el riesgo de resangrado
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { n: 1, t: "Estabilización", d: "Vía aérea, signos vitales y reposición de volumen si es necesario" },
              { n: 2, t: "Sedación", d: "Sedación monitorizada por anestesiólogo para un procedimiento cómodo y seguro" },
              { n: 3, t: "Endoscopia", d: "Localización precisa de las várices sangrantes" },
              { n: 4, t: "Ligadura", d: "Colocación de bandas elásticas para ocluir la fuente del sangrado" },
              { n: 5, t: "Monitoreo", d: "Observación y control de complicaciones; plan de prevención secundaria" },
            ].map((s) => (
              <div key={s.n} className="text-center p-6 rounded-2xl border border-border bg-background">
                <div className="w-12 h-12 rounded-full bg-red-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {s.n}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{s.t}</h3>
                <p className="text-sm text-foreground/80">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-100 border border-red-200">
              <Zap className="h-5 w-5 text-red-600" />
              <span className="font-semibold text-foreground">Tiempo habitual:</span>
              <span className="text-foreground/70">20–45 minutos (según número de várices)</span>
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
                <span className="font-semibold text-foreground">Respaldo quirúrgico inmediato</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight">
                  Experiencia que marca la diferencia en hemorragia por várices
                </h2>
                
                <p className="text-lg text-foreground/80 leading-relaxed">
                  El Dr. Quiroz combina formación en cirugía y endoscopia terapéutica para <strong>manejar casos complejos</strong> y
                  coordinar equipos en situaciones críticas. Si la ligadura no es suficiente, se activa de inmediato un plan
                  integral con apoyo quirúrgico y cuidados intensivos.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="p-6 rounded-xl bg-muted/50 border border-border">
                    <h4 className="font-semibold text-foreground mb-3">Lo complejo que atendemos</h4>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• Hemorragia activa de alto gasto</li>
                      <li>• Inestabilidad hemodinámica</li>
                      <li>• Resangrado temprano</li>
                      <li>• Lesiones difíciles de acceder</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-3">Cómo lo abordamos</h4>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• Endoscopia terapéutica avanzada</li>
                      <li>• Coordinación con UCI y banco de sangre</li>
                      <li>• Protocolos de prevención secundaria</li>
                      <li>• Comunicación continua con la familia</li>
                    </ul>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-200">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                      <ShieldCheck className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                      Equipo y logística preparados 24/7
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Hospital Amerimed cuenta con anestesia, endoscopia, UCI y banco de sangre para manejar urgencias.
                      El objetivo: controlar la hemorragia con rapidez y seguridad.
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
              Costo de Ligadura de Várices en Mérida — desde {mxn(PRICING.ligadura_varices.from)}
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Precio claro para emergencias y procedimientos programados. En casos complejos, el costo puede ajustarse
              según materiales y estancia hospitalaria.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Base Price */}
            <div className="p-8 rounded-2xl border border-border bg-background text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Paquete base de ligadura
              </h3>
              <div className="text-3xl font-bold text-red-600 mb-2">{mxn(PRICING.ligadura_varices.from)}</div>
              <p className="text-sm text-foreground/70 mb-4">Casos estándar (programado o urgente)</p>
              <div className="text-left space-y-2 text-sm text-foreground/80">
                <p>• Procedimiento endoscópico completo</p>
                <p>• Sedación con anestesiólogo</p>
                <p>• Dispositivo de ligadura (bandas)</p>
                <p>• Vigilancia post-procedimiento</p>
              </div>
            </div>

            {/* What's Included */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Incluye</h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Valoración médica y preparación inmediata</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Sedación monitorizada</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Ligadura con bandas elásticas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>Observación post-procedimiento</p>
                </div>
              </div>
            </div>

            {/* Emergency Availability */}
            <div className="p-8 rounded-2xl border border-border bg-red-50">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Emergencias 24/7</h3>
              <div className="space-y-4 text-foreground/80">
                <p className="text-sm">
                  Atención inmediata en Hospital Amerimed para hemorragia activa.
                </p>
                <div className="p-4 rounded-xl bg-background border border-red-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="h-4 w-4 text-red-600" />
                    <span className="font-medium text-foreground">Línea de emergencias</span>
                  </div>
                  <p className="text-2xl font-bold">
                    <a href="tel:+529992360153" className="text-red-600 hover:underline underline-offset-4">999 236 0153</a>
                  </p>
                  <p className="text-xs text-foreground/70 mt-1">Respuesta inmediata para hemorragias digestivas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Note */}
          <div className="mt-8 text-center p-6 rounded-2xl bg-background border border-border">
            <p className="text-foreground/70">
              <strong>Nota:</strong> en emergencia, la prioridad es controlar la hemorragia. La parte administrativa se
              coordina después con el hospital.
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
                ¿Cuándo se indica la ligadura de várices?
              </h2>
              <p className="text-lg text-foreground/70">
                Criterios clínicos habituales para decidir tratamiento endoscópico
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="p-8 rounded-2xl border border-red-200 bg-red-50">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-6">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                  Indicaciones de emergencia
                </h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5" /><span>Hemorragia digestiva alta por várices</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5" /><span>Vómito con sangre (hematemesis)</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5" /><span>Evacuaciones negras (melena) con inestabilidad</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5" /><span>Resangrado pese a manejo médico</span></li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl border border-primary/20 bg-primary/5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                  Indicaciones programadas
                </h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5" /><span>Várices grandes (grado III–IV) en cirrosis</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5" /><span>Antecedente de sangrado por várices</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5" /><span>Profilaxis secundaria post-sangrado</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5" /><span>Signos endoscópicos de alto riesgo</span></li>
                </ul>
              </div>
            </div>

            {/* Related Conditions */}
            <div className="p-8 rounded-2xl bg-muted/30 border border-border">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Condiciones asociadas frecuentes
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-6 w-6 text-accent-strong" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Cirrosis hepática</h4>
                  <p className="text-sm text-foreground/70">Con hipertensión portal</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mx-auto mb-3">
                    <Activity className="h-6 w-6 text-accent-strong" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Hipertensión portal</h4>
                  <p className="text-sm text-foreground/70">Refractaria a manejo médico</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mx-auto mb-3">
                    <Microscope className="h-6 w-6 text-accent-strong" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Resangrado</h4>
                  <p className="text-sm text-foreground/70">Pese a profilaxis previa</p>
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
          Recuperación y seguimiento
        </h2>
        <p className="text-lg text-foreground/70">
          Qué esperar después de la ligadura de várices
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 rounded-2xl border border-border bg-background">
          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
            <Clock className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
            Primeras 24 horas
          </h3>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>• Observación 4–6 horas</li>
            <li>• Dieta líquida inicial</li>
            <li>• Control de náusea post-sedación</li>
            <li>• Señales de alarma explicadas</li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl border border-border bg-background">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
            <Heart className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
            Primera semana
          </h3>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>• Dieta blanda progresiva</li>
            <li>• Evitar irritantes (alcohol, picante, antiinflamatorios)</li>
            <li>• Medicación para prevenir resangrado</li>
            <li>• Actividad ligera</li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl border border-border bg-background">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
            <Target className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
            Seguimiento
          </h3>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>• Endoscopia de control en 1–3 meses</li>
            <li>• Ajuste de medicamentos</li>
            <li>• Sesiones adicionales si se requieren</li>
            <li>• Plan de profilaxis secundaria</li>
          </ul>
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
              Signos de alarma — acudir de inmediato
            </h3>
            <div className="grid gap-3 md:grid-cols-2">
              {["Vómito con sangre fresca","Evacuaciones negras abundantes","Mareo o debilidad intensa","Dolor abdominal severo"].map((txt)=>(
                <div key={txt} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-red-600" />
                  <span className="text-foreground/80">{txt}</span>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-xl bg-background border border-red-200">
              <p className="font-semibold text-foreground mb-1">Línea directa 24/7</p>
              <p className="text-2xl font-bold">
                <a href="tel:+529992360153" className="text-red-600 hover:underline underline-offset-4">999 236 0153</a>
              </p>
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
        Procedimientos relacionados en Mérida
      </h2>
      <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
        Tratamientos complementarios para el manejo integral de la hipertensión portal
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <Link href="/esclerosis-varices-gastricas-merida" className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300 group">
        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
          <Stethoscope className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          Esclerosis de várices gástricas
        </h3>
        <p className="text-foreground/80 mb-4">
          Inyección de cianoacrilato para várices fúndicas grandes. Complementa la ligadura esofágica en casos seleccionados.
        </p>
        <p className="text-sm text-foreground/70">Desde {mxn(PRICING.esclerosis_varices_gastricas.from)}</p>
      </Link>

      <Link href="/cpre-merida" className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300 group">
        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
          <Activity className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          CPRE (vías biliares y páncreas)
        </h3>
        <p className="text-foreground/80 mb-4">
          Diagnóstico y tratamiento de complicaciones biliares en pacientes con hipertensión portal.
        </p>
        <p className="text-sm text-foreground/70">Desde {mxn(PRICING.cpre.from)}</p>
      </Link>

      <Link href="/emergencias-digestivas-merida" className="p-8 rounded-2xl border border-red-200 bg-red-50 hover:shadow-lg transition-all duration-300 group">
        <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mb-6">
          <AlertTriangle className="h-8 w-8 text-red-600" />
        </div>
        <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          Endoscopia de emergencia
        </h3>
        <p className="text-foreground/80 mb-4">
          Evaluación y tratamiento endoscópico inmediato 24/7 para hemorragia digestiva alta.
        </p>
        <p className="text-sm text-foreground/70">Hospital Amerimed</p>
      </Link>
    </div>
  </div>
</section>

      {/* NEIGHBORHOODS SERVED */}
<section className="py-16 sm:py-24 bg-muted/20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
        Atención a toda Mérida y zona metropolitana
      </h2>
      <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
        Ligadura de várices disponible para pacientes de cualquier colonia
      </p>
    </div>

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-center">
      {[
        ["Centro Histórico","Acceso por Circuito Colonias"],
        ["Montebello","Ruta por Prolongación Paseo Montejo"],
        ["Altabrisa","~15 min por Periférico"],
        ["Temozón Norte","Acceso por Periférico Norte"],
        ["Cholul","Ruta por carretera Mérida–Progreso"],
        ["García Ginerés","Cerca de Circuito y Reforma"],
      ].map(([name,desc])=>(
        <div key={name} className="p-4 rounded-xl bg-background border border-border">
          <MapPin className="h-6 w-6 text-accent-strong mx-auto mb-2" />
          <h3 className="font-semibold text-foreground mb-1">{name}</h3>
          <p className="text-sm text-foreground/70">{desc}</p>
        </div>
      ))}
    </div>

    <div className="mt-12 text-center">
      <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-background border border-border shadow-sm">
        <MapPin className="h-6 w-6 text-accent-strong" />
        <div className="text-left">
          <p className="font-semibold text-foreground">Hospital Amerimed</p>
          <p className="text-sm text-foreground/70">Chichí Suárez, Mérida, Yucatán</p>
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
          ¿Necesitas ligadura de várices de emergencia?
        </h2>
        <p className="text-xl text-foreground/80">
          No esperes. Atención 24/7 en Hospital Amerimed (Mérida).
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex items-center gap-4 p-6 rounded-2xl bg-background border border-border shadow-sm">
          <Phone className="h-8 w-8 text-red-600" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Línea de emergencias</p>
            <p className="text-2xl font-bold">
              <a href="tel:+529992360153" className="text-red-600 hover:underline underline-offset-4">999 236 0153</a>
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 p-6 rounded-2xl bg-background border border-border shadow-sm">
          <MapPin className="h-8 w-8 text-red-600" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Ubicación</p>
            <p className="text-foreground/70">Hospital Amerimed • Consultorio 517</p>
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
