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
  Phone,
  Target,
  MessageCircle,
  FileText,
  ExternalLink,
  Zap,
  Hospital,
  Users,
} from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews";


export const revalidate = 86400
export const metadata = metaFor("endoprotesis_duodenales")

export default function EndoprotesisDuodenalesPage() {
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200">
                  <Target className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">Alternativa Paliativa No Quirúrgica</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-foreground leading-tight">
                  Endoprótesis Duodenales en Mérida | Dr. Omar Quiroz - Tratamiento de Obstrucciones Duodenales
                </h1>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  Las endoprótesis duodenales en Mérida son stents especializados que se colocan por endoscopia para 
                  tratar obstrucciones del duodeno. El Dr. Omar Quiroz realiza colocación de endoprótesis duodenales 
                  en Hospital Amerimed, Mérida, Yucatán, ofreciendo esta técnica paliativa para pacientes con 
                  obstrucción de la salida gástrica.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                    <Clock className="h-4 w-4 text-accent-strong flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">45-60 min</div>
                      <div className="text-foreground/70">Duración</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                    <MapPin className="h-4 w-4 text-accent-strong flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Hospital Amerimed</div>
                      <div className="text-foreground/70">Mérida, Yucatán</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                    <FileText className="h-4 w-4 text-accent-strong flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">{mxn(PRICING.endoprotesis_duodenales.from)}</div>
                      <div className="text-foreground/70">Precio</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="endoprotesis duodenal" position="hero" />
                      <WhatsAppButton service="endoprotesis duodenal" position="hero" />
                </div>

              <p className="text-sm text-foreground/60">
                Atendemos pacientes de Mérida Centro, Montebello, Altabrisa, Temozón Norte, Cholul, García Ginerés y toda la zona metropolitana.
              </p>
            </div>

            {/* Image - Right Side */}
            <div className="flex-1 lg:max-w-xl">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-light/20 to-primary/20 rounded-3xl transform rotate-3" />
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-accent-light/20">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-accent-light/10 rounded-full flex items-center justify-center mx-auto">
                      <Stethoscope className="h-8 w-8 text-accent-strong" />
                    </div>
                    
                    <h2 className="text-xl font-serif font-bold text-foreground">
                      Dr. Omar Quiroz
                    </h2>
                    
                    <p className="text-foreground/80">
                      Cirujano Gastroenterólogo especializado en endoprótesis duodenales y procedimientos endoscópicos complejos
                    </p>

                    <div className="pt-4 border-t border-accent-light/20">
                      <div className="text-sm text-foreground/70 space-y-1">
                        <p>✓ Certificado por el Consejo Mexicano</p>
                        <p>✓ Experiencia en obstrucciones duodenales</p>
                        <p>✓ Hospital Amerimed, Mérida</p>
                      </div>
                    </div>
                  </div>
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
              Tu Endoprótesis Duodenal en Mérida en 4 Pasos
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Proceso especializado para resolver obstrucciones duodenales con alivio inmediato
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {/* Step 1 */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-foreground mb-2">Evaluación y Diagnóstico</h3>
              <p className="text-sm text-foreground/80">Tomografía + endoscopia para localizar obstrucción duodenal</p>
            </div>

            {/* Step 2 */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-foreground mb-2">Sedación y Acceso</h3>
              <p className="text-sm text-foreground/80">Sedación profunda + duodenoscopio hasta sitio de obstrucción</p>
            </div>

            {/* Step 3 */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-foreground mb-2">Colocación del Stent</h3>
              <p className="text-sm text-foreground/80">Guía fluoroscópica + despliegue de stent autoexpandible</p>
            </div>

            {/* Step 4 */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-foreground mb-2">Recuperación y Seguimiento</h3>
              <p className="text-sm text-foreground/80">Observación hospitalaria + progresión dietética gradual</p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Beneficios del Procedimiento
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Alivio inmediato:</strong> Permite el paso de alimentos en horas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Mínimamente invasivo:</strong> Sin incisiones quirúrgicas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Recuperación rápida:</strong> Alta en 24-48 horas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Mejoría nutricional:</strong> Permite alimentación oral adecuada</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Recuperación
              </h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Observación:</strong> 24-48 horas en hospital</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Dieta progresiva:</strong> Líquidos → blandos → sólidos</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Control de síntomas:</strong> Mejoría en vómitos y dolor</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p><strong>Seguimiento:</strong> Control a los 7 días incluido</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DR. OMAR'S ADVANTAGE */}
      <section className="py-16 sm:py-24 bg-accent-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  Ventaja del Dr. Omar como Cirujano Gastroenterólogo
                </h2>
                <p className="text-lg text-foreground/80">
                  La experiencia quirúrgica del Dr. Omar marca la diferencia en casos complejos de obstrucción duodenal
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-accent-light/20 bg-background">
                  <h3 className="font-semibold text-foreground mb-3">Manejo de Complicaciones</h3>
                  <p className="text-foreground/80">
                    Si durante la colocación de endoprótesis duodenales surgen complicaciones como perforación o 
                    sangrado, el Dr. Omar puede resolverlas quirúrgicamente en la misma sesión, evitando traslados 
                    de emergencia a otros especialistas.
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-accent-light/20 bg-background">
                  <h3 className="font-semibold text-foreground mb-3">Evaluación Quirúrgica Simultánea</h3>
                  <p className="text-foreground/80">
                    En casos donde la endoprótesis no sea factible, el Dr. Omar puede ofrecer opciones quirúrgicas 
                    como gastroenterostomía laparoscópica, proporcionando soluciones integrales sin derivar a otros médicos.
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-accent-light/20 bg-background">
                  <h3 className="font-semibold text-foreground mb-3">Anatomía Duodenal Compleja</h3>
                  <p className="text-foreground/80">
                    Su conocimiento anatómico quirúrgico permite abordar casos con anatomía alterada por cirugías previas 
                    o procesos malignos complejos que otros endoscopistas podrían considerar inoperables.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Statistics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-2xl border border-accent-light/20 bg-background">
                  <div className="text-3xl font-bold text-accent-strong mb-2">95%</div>
                  <div className="text-sm text-foreground/70">Tasa de éxito técnico</div>
                </div>
                <div className="text-center p-6 rounded-2xl border border-accent-light/20 bg-background">
                  <div className="text-3xl font-bold text-accent-strong mb-2">24h</div>
                  <div className="text-sm text-foreground/70">Mejoría síntomas</div>
                </div>
                <div className="text-center p-6 rounded-2xl border border-accent-light/20 bg-background">
                  <div className="text-3xl font-bold text-accent-strong mb-2">48h</div>
                  <div className="text-sm text-foreground/70">Alta hospitalaria promedio</div>
                </div>
                <div className="text-center p-6 rounded-2xl border border-accent-light/20 bg-background">
                  <div className="text-3xl font-bold text-accent-strong mb-2">100%</div>
                  <div className="text-sm text-foreground/70">Seguimiento incluido</div>
                </div>
              </div>

              {/* Transparent Note */}
              <div className="p-6 rounded-2xl bg-accent-light/5 border border-accent-light/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-light/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="h-6 w-6 text-accent-strong" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                      Transparencia en Expectativas
                    </h3>
                    <div className="space-y-3 text-foreground/80">
                      <p>
                        Las endoprótesis duodenales son principalmente un tratamiento paliativo para mejorar calidad 
                        de vida en pacientes con obstrucciones malignas. El éxito se mide por la mejoría en síntomas 
                        y capacidad de alimentación.
                      </p>
                      <p>
                        <strong>Duración del stent:</strong> Los stents duodenales pueden funcionar por meses a años, 
                        dependiendo de la causa subyacente. Algunos pacientes pueden requerir recambio o limpieza endoscópica.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN & WHY SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Cuándo se Necesitan Endoprótesis Duodenales?
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Reconoce los síntomas que indican obstrucción duodenal y la necesidad de tratamiento especializado
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Symptoms */}
            <div className="space-y-8">
              <h3 className="text-2xl font-serif font-semibold text-foreground">
                Síntomas de Obstrucción Duodenal
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Vómitos persistentes después de comer</p>
                    <p className="text-sm text-foreground/70">Especialmente alimentos sólidos, con contenido alimentario no digerido</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Sensación de llenura extrema con poca comida</p>
                    <p className="text-sm text-foreground/70">Saciedad precoz que impide alimentación adecuada</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Dolor abdominal superior tipo cólico</p>
                    <p className="text-sm text-foreground/70">Dolor que empeora después de intentar comer</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Pérdida de peso progresiva</p>
                    <p className="text-sm text-foreground/70">Desnutrición por incapacidad de mantener alimentación oral</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Distensión abdominal superior</p>
                    <p className="text-sm text-foreground/70">Dilatación gástrica visible y palpable</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Important */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                ¿Por qué son Necesarias las Endoprótesis Duodenales?
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Obstrucción de Salida Gástrica</h4>
                  <p className="text-foreground/80 text-sm">
                    Las endoprótesis duodenales restauran el paso de alimentos desde el estómago hacia el intestino delgado, 
                    aliviando los vómitos y permitiendo nutrición oral adecuada.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Causas Principales</h4>
                  <ul className="space-y-2 text-foreground/80 text-sm">
                    <li>• <strong>Cáncer pancreático:</strong> Obstrucción por masa tumoral</li>
                    <li>• <strong>Cáncer duodenal:</strong> Tumor primario en duodeno</li>
                    <li>• <strong>Estenosis post-quirúrgica:</strong> Cicatrización tras cirugía</li>
                    <li>• <strong>Procesos inflamatorios crónicos:</strong> Pancreatitis crónica</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Alternativa a Cirugía Mayor</h4>
                  <p className="text-foreground/80 text-sm">
                    En pacientes con cáncer avanzado o alto riesgo quirúrgico, las endoprótesis duodenales ofrecen 
                    alivio paliativo sin los riesgos de una gastroenterostomía quirúrgica.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                  <p className="text-sm text-foreground">
                    <strong>Importante:</strong> El diagnóstico temprano y tratamiento oportuno mejoran significativamente 
                    la calidad de vida y el estado nutricional del paciente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPMENT & FACILITIES */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Tecnología Especializada en Hospital Amerimed
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Duodenoscopio terapéutico y fluoroscopía para colocación precisa de endoprótesis
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Equipment Features */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                <Microscope className="h-6 w-6 text-accent-strong" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Duodenoscopio Terapéutico
              </h3>
              <p className="text-foreground/80">Endoscopio especializado con canal de trabajo amplio para colocación de stents duodenales</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Fluoroscopía en Tiempo Real
              </h3>
              <p className="text-foreground/80">Guía radiológica continua para posicionamiento exacto del stent duodenal</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Stents Autoexpandibles
              </h3>
              <p className="text-foreground/80">Endoprótesis metálicas de última generación con diseño específico para duodeno</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-4">
                <Hospital className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Quirófano Híbrido
              </h3>
              <p className="text-foreground/80">Sala especializada con capacidades endoscópicas y quirúrgicas simultáneas</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-600/10 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Monitoreo Anestésico
              </h3>
              <p className="text-foreground/80">Sedación profunda con monitoreo continuo por anestesiólogo certificado</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Protocolos de Seguridad
              </h3>
              <p className="text-foreground/80">Estándares hospitalarios con equipo de emergencia disponible 24/7</p>
            </div>
          </div>

          {/* Location Details */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-accent-light/5 to-primary/5 border border-accent-light/20">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-accent-light/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-8 w-8 text-accent-strong" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Hospital Amerimed - Ubicación Estratégica en Mérida
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-foreground/80 mb-2">
                      <strong>Dirección:</strong> Av. Itzaes #242 entre 59 y 59A, Centro, Mérida, Yucatán
                    </p>
                    <p className="text-foreground/80">
                      <strong>Fácil acceso desde:</strong> Centro, Montebello, Altabrisa, Temozón Norte, Cholul, García Ginerés
                    </p>
                  </div>
                  <div>
                    <p className="text-foreground/80 mb-2">
                      <strong>Horario:</strong> Procedimientos de lunes a sábado
                    </p>
                    <p className="text-foreground/80">
                      <strong>Estacionamiento:</strong> Gratuito para pacientes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-accent-strong to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                ¿Necesitas Evaluación para Endoprótesis Duodenales?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                El Dr. Omar Quiroz evaluará tu caso específico y determinará el mejor tratamiento para tu obstrucción duodenal
              </p>
            </div>

            {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <CallButton service="endoprotesis duodenal" position="cta section" />
                      <WhatsAppButton service="endoprotesis duodenal" position="cta section" />
                </div>

            <p className="text-white/80 text-sm">
              Consulta inicial disponible • Evaluación integral • Plan de tratamiento personalizado
            </p>
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
          <Faq routeKey="endoprotesis_duodenales" />
        </div>
      </section>


      
      
    </>
  )
}
