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
  ExternalLink,
  Zap,
} from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews";


export const revalidate = 86400
export const metadata = metaFor("endoprotesis_colonicas")

export default function EndoprotesisColonicasPage() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://endoscopiadelmayab.com").replace(/\/$/, "")

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
                  <span className="text-sm font-medium text-red-700">Urgencias Obstrucciones Colónicas</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-foreground leading-tight">
                  Endoprótesis Colónica en Mérida | Dr. Omar Quiroz - Stents de Emergencia para Obstrucción Intestinal
                </h1>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  Las endoprótesis colónicas en Mérida son stents autoexpandibles para resolver urgencias de obstrucción intestinal. 
                  El Dr. Omar Quiroz coloca endoprótesis colónicas en Hospital Amerimed, Mérida, Yucatán, ofreciendo manejo inmediato 
                  de emergencias colorrectales con evaluación quirúrgica integral el mismo día.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="endoprotesis colonica" position="hero" />
                      <WhatsAppButton service="endoprotesis colonica" position="hero" />
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent-strong" />
                    <span>Hospital Amerimed, Mérida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-accent-strong" />
                    <span>Urgencias 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-accent-strong" />
                    <span>Evaluación Inmediata</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-accent-light/10 to-accent-strong/10 border border-accent-light/20">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Cuándo Necesitas Endoprótesis Colónica de Emergencia
                </h3>

                <div className="space-y-4 text-foreground/80">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>Obstrucción intestinal completa:</strong> Stent para repermeabilización inmediata
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>Bridge to surgery:</strong> Estabilización antes de cirugía programada
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>Paliación de síntomas:</strong> Alivio en pacientes no candidatos a cirugía
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                  <h4 className="font-semibold text-foreground mb-3">Disponibilidad de Urgencias en Mérida:</h4>
                  <div className="space-y-2 text-sm text-foreground/80">
                    <p>• Evaluación emergente Hospital Amerimed 24/7</p>
                    <p>• Colocación inmediata de stent colónico</p>
                    <p>• Seguimiento postoperatorio especializado</p>
                    <p>• Acceso desde Centro, Altabrisa, Montebello, García Ginerés</p>
                  </div>
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
              Dr. Omar: Endoscopista + Cirujano = Manejo Integral de Emergencias Colorrectales
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              La ventaja única de tener ambas especialidades para urgencias colónicas complejas
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Problem */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                ¿Qué pasa si el stent colónico no resuelve la obstrucción?
              </h3>

              <div className="space-y-4 text-foreground/80">
                <p>
                  En casos de obstrucción colónica compleja (20-25%), el stent puede migrar, ocluirse o no expandir 
                  adecuadamente. Estos pacientes necesitan evaluación quirúrgica inmediata para cirugía colorrectal de emergencia.
                </p>

                <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                  <h4 className="font-semibold text-foreground mb-2">Otros endoscopistas:</h4>
                  <p className="text-sm text-foreground/80">
                    Te envían a urgencias de cirugía general después de fallar el stent colónico
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                  <h4 className="font-semibold text-foreground mb-2">Dr. Omar:</h4>
                  <p className="text-sm text-foreground/80">
                    Evalúa opciones quirúrgicas colorrectales inmediatamente si el stent falla
                  </p>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Su Doble Especialidad para Emergencias Colónicas
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Endoscopia de urgencia:</strong> Colocación inmediata de stents colónicos
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Cirugía colorrectal laparoscópica:</strong> Backup quirúrgico el mismo día
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Manejo de complicaciones:</strong> Perforación, migración, oclusión
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Decisión terapéutica única:</strong> Bridge vs paliación vs cirugía inmediata
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                <p className="text-foreground/80 text-sm">
                  La mayoría de casos (75-80%) se resuelven exitosamente con endoprótesis colónica. En emergencias complejas, 
                  tendrás evaluación quirúrgica colorrectal inmediata sin esperar otro especialista o traslados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION - 5 STEPS */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Proceso de Endoprótesis Colónica: De Urgencia a Resolución en 5 Pasos
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Protocolo especializado para manejo de emergencias colónicas en Hospital Amerimed
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Step 1: Emergency Evaluation */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Evaluación de Urgencia
                </h3>
                <div className="space-y-3 text-sm text-foreground/80">
                  <p><strong>Evaluación clínica inmediata</strong></p>
                  <p>• Síntomas de obstrucción</p>
                  <p>• TC abdominal urgente</p>
                  <p>• Localización de estenosis</p>
                  <p>• Candidato a stent vs cirugía</p>
                </div>
              </div>
            </div>

            {/* Step 2: Pre-procedure */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Preparación Inmediata
                </h3>
                <div className="space-y-3 text-sm text-foreground/80">
                  <p><strong>Preparación para procedimiento</strong></p>
                  <p>• Consentimiento informado</p>
                  <p>• Selección de stent apropiado</p>
                  <p>• Coordinación con anestesia</p>
                  <p>• Quirófano endoscópico listo</p>
                </div>
              </div>
            </div>

            {/* Step 3: Stent Placement */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Colocación de Stent
                </h3>
                <div className="space-y-3 text-sm text-foreground/80">
                  <p><strong>Endoprótesis bajo sedación</strong></p>
                  <p>• Colonoscopia hasta estenosis</p>
                  <p>• Medición de longitud</p>
                  <p>• Liberación de stent autoexpandible</p>
                  <p>• Verificación de permeabilidad</p>
                </div>
              </div>
            </div>

            {/* Step 4: Immediate Assessment */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-strong to-accent-strong/80 flex items-center justify-center text-white font-bold text-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Evaluación Inmediata
                </h3>
                <div className="space-y-3 text-sm text-foreground/80">
                  <p><strong>Verificación de éxito</strong></p>
                  <p>• Permeabilidad del stent</p>
                  <p>• Ausencia de complicaciones</p>
                  <p>• Rx abdomen control</p>
                  <p>• Alivio de síntomas</p>
                </div>
              </div>
            </div>

            {/* Step 5: Plan Management */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white font-bold text-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                5
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Plan Definitivo
                </h3>
                <div className="space-y-3 text-sm text-foreground/80">
                  <p><strong>Decisión terapéutica</strong></p>
                  <p>• Bridge to surgery programada</p>
                  <p>• Manejo paliativo definitivo</p>
                  <p>• Seguimiento endoscópico</p>
                  <p>• Cirugía urgente si falla</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-strong/10 border border-accent-strong/20">
              <Clock className="h-5 w-5 text-accent-strong" />
              <span className="text-sm font-medium text-accent-strong">
                Tiempo total del procedimiento: 30-45 minutos | Resolución de urgencia: Inmediata
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE TRANSPARENCY SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Costo de Endoprótesis Colónica en Mérida - {mxn(PRICING.endoprotesis_colonicas.from)}
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Precio según tipo de stent y complejidad del caso de urgencia
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Quote Based Pricing */}
            <div className="p-8 rounded-2xl border border-border bg-background text-center">
              <div className="w-16 h-16 bg-accent-strong/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Cotización Personalizada
              </h3>
              <div className="text-2xl font-bold text-accent-strong mb-2">{mxn(PRICING.endoprotesis_colonicas.from)}</div>
              <p className="text-sm text-foreground/70 mb-4">Precio según stent específico y caso clínico</p>
              <div className="text-left space-y-2 text-sm text-foreground/80">
                <p>• Stent autoexpandible</p>
                <p>• Procedimiento completo</p>
                <p>• Sedación profunda</p>
                <p>• Monitoreo especializado</p>
              </div>
            </div>

            {/* Emergency Cases */}
            <div className="p-8 rounded-2xl border border-border bg-background text-center">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Casos de Emergencia
              </h3>
              <div className="text-2xl font-bold text-red-600 mb-2">Urgencia 24/7</div>
              <p className="text-sm text-foreground/70 mb-4">Evaluación y cotización inmediata</p>
              <div className="text-left space-y-2 text-sm text-foreground/80">
                <p>• Obstrucción completa</p>
                <p>• Bridge to surgery</p>
                <p>• Manejo paliativo</p>
                <p>• Decisión multidisciplinaria</p>
              </div>
            </div>

            {/* What's Included */}
            <div className="p-8 rounded-2xl border border-border bg-background text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Cotización Incluye
              </h3>
              <div className="text-2xl font-bold text-green-600 mb-2">Todo Incluido</div>
              <p className="text-sm text-foreground/70 mb-4">Sin costos ocultos en emergencias</p>
              <div className="text-left space-y-2 text-sm text-foreground/80">
                <p>• Evaluación previa</p>
                <p>• Anestesiólogo</p>
                <p>• Rx control</p>
                <p>• Seguimiento inmediato</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-accent-light/10 to-accent-strong/10 border border-accent-light/20">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Factores que Determinan el Precio en Mérida
              </h3>
              <div className="grid gap-4 md:grid-cols-2 text-sm text-foreground/80">
                <div className="space-y-2">
                  <p>• <strong>Tipo de stent:</strong> Autoexpandible vs recubierto</p>
                  <p>• <strong>Diámetro necesario:</strong> Según calibre de estenosis</p>
                  <p>• <strong>Longitud del stent:</strong> Extensión de la obstrucción</p>
                </div>
                <div className="space-y-2">
                  <p>• <strong>Complejidad técnica:</strong> Localización de la lesión</p>
                  <p>• <strong>Urgencia del caso:</strong> Procedimiento programado vs emergencia</p>
                  <p>• <strong>Seguimiento requerido:</strong> Bridge vs paliación</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS SERVED */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Endoprótesis Colónica en Hospital Amerimed - Accesible desde toda Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Ubicación estratégica para emergencias colónicas desde cualquier punto de la ciudad
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Location */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                    Hospital Amerimed Mérida
                  </h3>
                  <div className="space-y-3 text-foreground/80">
                    <p><strong>Consultorio 517</strong> - Torre de Especialidades</p>
                    <p>Calle 54, Chichí Suárez, Mérida, Yucatán</p>
                    <p>Estacionamiento gratuito disponible</p>
                    <p>Acceso directo a quirófanos endoscópicos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Neighborhoods Served */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-accent-strong" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                    Zonas de Mérida Atendidas
                  </h3>
                  <div className="grid gap-2 text-sm text-foreground/80">
                    <p>• <strong>Centro Histórico:</strong> 15 min en emergencia</p>
                    <p>• <strong>Montebello:</strong> 10 min por Av. García Lavín</p>
                    <p>• <strong>Altabrisa:</strong> 12 min por Periférico</p>
                    <p>• <strong>Temozon Norte:</strong> 18 min vía Periférico</p>
                    <p>• <strong>García Ginerés:</strong> 8 min acceso directo</p>
                    <p>• <strong>Cholul:</strong> 20 min por carretera Progreso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-200">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  Protocolo de Urgencias Colónicas 24/7
                </h3>
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>En caso de obstrucción intestinal aguda, contacte inmediatamente por WhatsApp o llamada. 
                  Hospital Amerimed cuenta con quirófanos endoscópicos disponibles para emergencias colónicas.</p>
                  <p><strong>Síntomas de urgencia:</strong> Distensión abdominal intensa, imposibilidad para evacuar gases, 
                  vómitos persistentes, dolor abdominal severo.</p>
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
              Otros Procedimientos de Endoprótesis en Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Tratamientos relacionados disponibles en Hospital Amerimed
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Dilatación Colónica */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                <Link href="/dilatacion-colonica-merida" className="hover:text-primary transition-colors">
                  Dilatación Colónica
                </Link>
              </h3>
              <p className="text-foreground/80 mb-4">
                Alternativa previa al stent para estenosis menos severas del colon.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-600">
                <span>Ver procedimiento</span>
                <ExternalLink className="h-4 w-4" />
              </div>
            </div>

            {/* Endoprótesis Esofágicas */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                <Link href="/endoprotesis-esofagicas-merida" className="hover:text-primary transition-colors">
                  Endoprótesis Esofágicas
                </Link>
              </h3>
              <p className="text-foreground/80 mb-4">
                Stents para obstrucciones esofágicas por cáncer o estenosis benignas.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
                <span>Ver procedimiento</span>
                <ExternalLink className="h-4 w-4" />
              </div>
            </div>

            {/* Endoprótesis Duodenales */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                <Stethoscope className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                <Link href="/endoprotesis-duodenales-merida" className="hover:text-primary transition-colors">
                  Endoprótesis Duodenales
                </Link>
              </h3>
              <p className="text-foreground/80 mb-4">
                Stents para obstrucciones duodenales, generalmente por tumores pancreáticos.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-purple-600">
                <span>Ver procedimiento</span>
                <ExternalLink className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CONTACT CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 to-accent-light/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                ¿Necesitas Endoprótesis Colónica de Urgencia en Mérida?
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Contacta al Dr. Omar Quiroz para evaluación inmediata de obstrucción colónica. 
                Disponible 24/7 para emergencias en Hospital Amerimed, Mérida, Yucatán.
              </p>
            </div>

            {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <CallButton service="endoprotesis colonica" position="cta section" />
                      <WhatsAppButton service="endoprotesis colonica" position="cta section" />
                </div>

            <div className="grid gap-6 md:grid-cols-3 text-center max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent-strong/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent-strong" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Ubicación</h3>
                  <p className="text-sm text-foreground/70">Hospital Amerimed, Consultorio 517</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent-strong/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent-strong" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Urgencias</h3>
                  <p className="text-sm text-foreground/70">Disponible 24/7 para emergencias</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent-strong/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-accent-strong" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Experiencia</h3>
                  <p className="text-sm text-foreground/70">Endoscopista + Cirujano certificado</p>
                </div>
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
          <Faq routeKey="endoprotesis_colonicas" />
        </div>
      </section>
    </>
  )
}
