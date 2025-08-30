import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn } from "@/lib/pricing"
import Image from "next/image"
import Link from "next/link"
import { 
  Stethoscope, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Globe, 
  CheckCircle2, 
  ShieldCheck, 
  Microscope, 
  Hospital, 
  Clock, 
  Star, 
  Award, 
  Users, 
  Heart, 
  AlertTriangle, 
  Activity, 
  Download, 
  Calendar, 
  Target, 
  FileText, 
  Search,
  Navigation,
  Zap,
  Users2,
  PhoneCall,
  Mail,
  MapPinIcon,
  DollarSign,
  Brain,
  Camera
} from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews"
import Faq from "@/components/Faq"

export const revalidate = 86400
export const metadata = metaFor("consultas")

export default function ConsultasDigestivasPage() {
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
                  <Stethoscope className="h-4 w-4 text-accent-strong" />
                  <span className="text-sm font-medium text-foreground">Consultas Digestivas Especializadas</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-foreground leading-tight">
                  Consultas Digestivas en Mérida - $800 | Dr. Omar Quiroz
                </h1>
                
                <p className="text-xl text-accent-strong font-semibold">
                  No más "toma antiácidos y regresa en 6 meses" - Diagnóstico real y tratamiento efectivo
                </p>
                
                <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                  <p>
                    ¿Dolor estómago persistente? ¿Reflujo que no mejora? Dr. Omar Quiroz encuentra la causa real con evaluación especializada bilingüe.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Atención bilingüe</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Triple certificación</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Urgencias 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Sin referencia médica</span>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                  <CallButton service="consultas" position="hero" />
                  <WhatsAppButton service="consultas" position="hero" />
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
                      <Stethoscope className="h-8 w-8 text-accent-strong" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-foreground/60">Consulta Digestiva</div>
                      <div className="text-2xl font-bold text-accent-strong">$800 pesos fijos</div>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-background border border-border">
                    <h3 className="text-lg font-serif font-bold text-foreground mb-4 text-center">
                      Todo incluido en $800 pesos
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Historia clínica completa</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Examen físico especializado</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Plan de estudios personalizado</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Explicación bilingüe clara</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Seguimiento por WhatsApp</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                      <h4 className="font-semibold text-foreground mb-1 text-sm">¿Por qué precio fijo?</h4>
                      <p className="text-xs text-foreground/80">
                        Sin sorpresas ni cobros extra. Expatriados necesitan transparencia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES OF CONSULTATIONS SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Tipos de Consultas Digestivas - Dr. Omar Quiroz
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Desde urgencias hasta medicina preventiva - Atención especializada para cada necesidad
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Urgencias Digestivas */}
            <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-red-50/50 to-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-red-100/80 flex items-center justify-center mb-6">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">Urgencias Digestivas</h3>
              <p className="text-foreground/80 mb-4">
                Atención inmediata para dolor abdominal intenso, vómito persistente y sangrado digestivo. 
                Disponible 24 horas en Hospital Amerimed.
              </p>
              <div className="space-y-2 text-sm text-foreground/70 mb-4">
                <p>• Dolor abdominal severo</p>
                <p>• Hemorragias digestivas</p>
                <p>• Vómito incoercible</p>
                <p>• Obstrucciones intestinales</p>
              </div>
              <div className="p-3 bg-red-100/50 rounded-lg border border-red-200/50">
                <p className="text-sm font-semibold text-red-800">
                  Servicio 24/7 - Respuesta inmediata
                </p>
              </div>
            </div>

            {/* Control Post-Endoscopia */}
            <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-green-50/50 to-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-100/80 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">Control Post-Endoscopia</h3>
              <p className="text-foreground/80 mb-4">
                Seguimiento especializado después de endoscopia o colonoscopia. Revisión de resultados 
                de biopsias y plan de tratamiento personalizado.
              </p>
              <div className="space-y-2 text-sm text-foreground/70 mb-4">
                <p>• Revisión resultados biopsia</p>
                <p>• Evaluación recuperación</p>
                <p>• Interpretación hallazgos</p>
                <p>• Plan seguimiento médico</p>
              </div>
              <div className="p-3 bg-green-100/50 rounded-lg border border-green-200/50">
                <p className="text-sm font-semibold text-green-800">
                  Incluido en precio del procedimiento
                </p>
              </div>
            </div>

            {/* Chequeo Preventivo */}
            <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-purple-50/50 to-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-100/80 flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">Chequeo Digestivo Preventivo</h3>
              <p className="text-foreground/80 mb-4">
                Detección temprana de cáncer colorrectal y gástrico. Recomendado para personas 
                mayores de 45 años o con antecedentes familiares.
              </p>
              <div className="space-y-2 text-sm text-foreground/70 mb-4">
                <p>• Screening cáncer colorrectal</p>
                <p>• Detección pólipos intestinales</p>
                <p>• Evaluación riesgo familiar</p>
                <p>• Medicina preventiva digestiva</p>
              </div>
              <div className="p-3 bg-purple-100/50 rounded-lg border border-purple-200/50">
                <p className="text-sm font-semibold text-purple-800">
                  La detección temprana salva vidas
                </p>
              </div>
            </div>

            {/* Valoración Pre-Endoscópica */}
            <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-blue-50/50 to-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-100/80 flex items-center justify-center mb-6">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">Valoración Pre-Endoscópica</h3>
              <p className="text-foreground/80 mb-4">
                Evaluación completa antes de procedimientos endoscópicos. Preparación médica 
                adecuada para garantizar seguridad y efectividad.
              </p>
              <div className="space-y-2 text-sm text-foreground/70 mb-4">
                <p>• Evaluación riesgos anestésicos</p>
                <p>• Preparación médica específica</p>
                <p>• Explicación detallada procedimiento</p>
                <p>• Resolución dudas y miedos</p>
              </div>
              <div className="p-3 bg-blue-100/50 rounded-lg border border-blue-200/50">
                <p className="text-sm font-semibold text-blue-800">
                  Procedimientos más seguros
                </p>
              </div>
            </div>

            {/* Segunda Opinión */}
            <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-teal-50/50 to-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-teal-100/80 flex items-center justify-center mb-6">
                <Users2 className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">Segunda Opinión Médica</h3>
              <p className="text-foreground/80 mb-4">
                Revisión de diagnósticos previos y tratamientos. Ideal para casos complejos 
                o cuando necesitas mayor claridad sobre tu condición.
              </p>
              <div className="space-y-2 text-sm text-foreground/70 mb-4">
                <p>• Revisión estudios previos</p>
                <p>• Análisis tratamientos actuales</p>
                <p>• Recomendaciones alternativas</p>
                <p>• Clarificación diagnósticos</p>
              </div>
              <div className="p-3 bg-teal-100/50 rounded-lg border border-teal-200/50">
                <p className="text-sm font-semibold text-teal-800">
                  Diagnósticos certeros
                </p>
              </div>
            </div>

            {/* Emergencias GI */}
            <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-orange-50/50 to-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-orange-100/80 flex items-center justify-center mb-6">
                <Activity className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">Emergencias Gastrointestinales</h3>
              <p className="text-foreground/80 mb-4">
                Manejo especializado de emergencias digestivas complejas. Procedimientos 
                endoscópicos de urgencia para control de hemorragias.
              </p>
              <div className="space-y-2 text-sm text-foreground/70 mb-4">
                <p>• Control endoscópico hemorragias</p>
                <p>• Extracción cuerpos extraños</p>
                <p>• Descompresión obstrucciones</p>
                <p>• Procedimientos terapéuticos urgentes</p>
              </div>
              <div className="p-3 bg-orange-100/50 rounded-lg border border-orange-200/50">
                <p className="text-sm font-semibold text-orange-800">
                  Disponible fines de semana
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE DR. QUIROZ SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Por Qué Dr. Omar Quiroz Para Consultas Digestivas?
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Experiencia internacional y atención personalizada que marca la diferencia
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-blue-50/30 to-background hover:shadow-lg transition-all duration-300">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">Triple Certificación</h3>
              <p className="text-foreground/80">
                Certificado en Cirugía General, Laparoscópica y Endoscopia. Entrenamiento en UNAM y hospitales de Florida.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-green-50/30 to-background hover:shadow-lg transition-all duration-300">
              <Globe className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">Atención Bilingüe</h3>
              <p className="text-foreground/80">
                Perfecta comunicación en español e inglés. Ideal para expatriados en Cholul, Montebello y Centro Histórico.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-purple-50/30 to-background hover:shadow-lg transition-all duration-300">
              <Brain className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">Diagnósticos Precisos</h3>
              <p className="text-foreground/80">
                Encuentra la causa real cuando otros médicos dan tratamientos genéricos sin diagnóstico específico.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-red-50/30 to-background hover:shadow-lg transition-all duration-300">
              <Clock className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">Disponibilidad 24/7</h3>
              <p className="text-foreground/80">
                Urgencias digestivas atendidas 24 horas, incluyendo fines de semana y días festivos.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-orange-50/30 to-background hover:shadow-lg transition-all duration-300">
              <MapPin className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">Ubicación Conveniente</h3>
              <p className="text-foreground/80">
                Hospital Amerimed con fácil acceso desde cualquier punto de Mérida. Estacionamiento gratuito.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-teal-50/30 to-background hover:shadow-lg transition-all duration-300">
              <DollarSign className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">Precios Transparentes</h3>
              <p className="text-foreground/80">
                Costos claros desde el principio. Sin sorpresas ni cobros adicionales inesperados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED DETAILED SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Qué Incluye Tu Consulta Digestiva?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              El Dr. Quiroz dedica el tiempo necesario para encontrar la causa real de tus síntomas
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-strong mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Historia Clínica Detallada</p>
                    <div className="space-y-1 text-sm text-foreground/70">
                      <p>• Revisión completa síntomas actuales</p>
                      <p>• Antecedentes médicos y familiares</p>
                      <p>• Medicamentos y alergias</p>
                      <p>• Factores de riesgo específicos</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Examen Físico Especializado</p>
                    <div className="space-y-1 text-sm text-foreground/70">
                      <p>• Palpación abdominal dirigida</p>
                      <p>• Búsqueda signos específicos</p>
                      <p>• Evaluación dolor y localización</p>
                      <p>• Maniobras diagnósticas especializadas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-strong mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Plan de Estudios Personalizado</p>
                    <div className="space-y-1 text-sm text-foreground/70">
                      <p>• Estudios realmente necesarios</p>
                      <p>• Evita pruebas innecesarias</p>
                      <p>• Secuencia lógica diagnóstica</p>
                      <p>• Presupuesto estimado estudios</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Explicación Clara y Seguimiento</p>
                    <div className="space-y-1 text-sm text-foreground/70">
                      <p>• Todo en términos comprensibles</p>
                      <p>• Español o inglés según prefieras</p>
                      <p>• WhatsApp para dudas posteriores</p>
                      <p>• Plan de seguimiento claro</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Patient Testimonial */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-accent-light/5 to-background border border-accent-light/20">
              <blockquote className="text-foreground/80 italic text-center text-lg">
                "Primer médico que me explica exactamente qué tengo y por qué. Ya no tomo pastillas sin saber para qué"
              </blockquote>
              <p className="text-center text-foreground/60 mt-2">- Patricia, 52 años</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION VS OTHER DOCTORS SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Consulta Digestiva Dr. Quiroz vs. Otros Médicos
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              ¿Por qué consulta especializada y no médico general?
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 rounded-xl border border-border bg-background text-center">
              <h3 className="font-semibold text-foreground mb-3">Médico General</h3>
              <p className="text-sm text-foreground/60 mb-3">Conocimiento básico digestivo</p>
              <div className="mt-3 text-red-500 font-semibold text-sm">❌ "Toma omeprazol"</div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-background text-center">
              <h3 className="font-semibold text-foreground mb-3">Internista</h3>
              <p className="text-sm text-foreground/60 mb-3">Múltiples especialidades</p>
              <div className="mt-3 text-red-500 font-semibold text-sm">❌ No hace endoscopias</div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-background text-center">
              <h3 className="font-semibold text-foreground mb-3">Gastroenterólogo</h3>
              <p className="text-sm text-foreground/60 mb-3">Solo diagnósticos médicos</p>
              <div className="mt-3 text-yellow-600 font-semibold text-sm">⚠️ No resuelve quirúrgico</div>
            </div>

            <div className="p-6 rounded-xl border-2 border-accent-strong bg-accent-strong/5 text-center">
              <h3 className="font-semibold text-accent-strong mb-3">Dr. Omar Quiroz</h3>
              <p className="text-sm text-foreground/80 mb-3">Gastro + Cirujano + Endoscopista</p>
              <div className="mt-3 text-green-600 font-semibold text-sm">✅ Resuelve TODO</div>
            </div>
          </div>

          {/* Patient Story */}
          <div className="mt-12 max-w-3xl mx-auto p-6 rounded-xl bg-gradient-to-br from-primary/5 to-background border border-primary/20">
            <blockquote className="text-foreground/80 italic text-center">
              "5 médicos diferentes me daban diferentes pastillas. Dr. Quiroz encontró mi hernia y me operó. Ya no tengo dolor"
            </blockquote>
            <p className="text-center text-foreground/60 mt-2">- David, 39 años</p>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Dr. Omar Quiroz - Resultados Comprobados</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight">
                  Consultas Digestivas Mérida - 1,500+ Pacientes Anuales
                </h2>
              </div>
            </div>

            {/* Stats and Credentials */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center p-6 rounded-2xl border border-border bg-background">
                <div className="text-3xl font-bold text-accent-strong mb-2">1,500+</div>
                <div className="text-sm font-medium text-foreground/70">Consultas Anuales</div>
              </div>
              <div className="text-center p-6 rounded-2xl border border-border bg-background">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm font-medium text-foreground/70">Diagnóstico Primera Consulta</div>
              </div>
              <div className="text-center p-6 rounded-2xl border border-border bg-background">
                <div className="text-3xl font-bold text-accent-strong mb-2">15+</div>
                <div className="text-sm font-medium text-foreground/70">Años Experiencia</div>
              </div>
            </div>

            {/* Patient Testimonial */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-accent-light/5 to-background border border-accent-light/20">
              <blockquote className="text-foreground/80 italic text-center text-lg">
                "Primera vez que un doctor me explica exactamente qué tengo y qué vamos a hacer. Se nota la experiencia"
              </blockquote>
              <p className="text-center text-foreground/60 mt-2">- María, 45 años</p>
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
                Agendar Consulta Digestiva - Citas Disponibles
              </h2>
              <p className="text-lg text-foreground/70">
                Primera consulta $800 - Sin referencia médica necesaria
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Teléfono</h3>
                <p className="text-sm text-foreground/70">Llamadas directas - Citas mismo día</p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <MessageCircle className="h-8 w-8 text-accent-strong mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                <p className="text-sm text-foreground/70">Respuesta rápida - Fotos de estudios</p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Hospital Amerimed</h3>
                <p className="text-sm text-foreground/70">Centro Mérida - Fácil acceso</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CallButton service="consultas" position="cta section" />
              <WhatsAppButton service="consultas" position="cta section" />
            </div>

            {/* Additional Info */}
            <div className="grid gap-4 md:grid-cols-2 mt-8">
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">Para expatriados</h4>
                <p className="text-sm text-foreground/80">
                  Atención bilingüe - Comunicación clara sin barreras idiomáticas
                </p>
              </div>

              <div className="p-4 rounded-xl bg-accent-light/10 border border-accent-light/20">
                <h4 className="font-semibold text-foreground mb-2">Urgencias disponibles</h4>
                <p className="text-sm text-foreground/80">
                  24/7 incluye fines de semana y días festivos
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
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProceduresGrid />
        </div>
      </section>

      {/* FAQ LIST COMPONENT */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Faq routeKey="consultas" />
        </div>
      </section>
    </>
  )
}
