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
} from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews";


export const revalidate = 86400
export const metadata = metaFor("endoprotesis_esofagicas")

export default function EndoprotesisEsofagicasPage() {
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
                  <Target className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Stents Esofágicos Especializados</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-foreground leading-tight">
                  Endoprótesis Esofágicas en Mérida | Dr. Omar Quiroz - Stent Esofágico para Estenosis y Fístulas
                </h1>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  Las endoprótesis esofágicas en Mérida son stents metálicos autoexpandibles que el Dr. Omar Quiroz coloca por endoscopia para mantener abierto el esófago en casos de estenosis maligna, benigna o fístulas esofágicas. Este procedimiento especializado en Hospital Amerimed, Mérida, Yucatán, permite restaurar la deglución cuando las dilataciones no son suficientes, con precio personalizado según el tipo de prótesis requerida.
                </p>

                <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Restaura capacidad de tragar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Mínimamente invasivo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>{mxn(PRICING.endoprotesis_esofagicas.from)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Hospital Amerimed con sedación profunda</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="endoprotesis esofagica" position="hero" />
                      <WhatsAppButton service="endoprotesis esofagica" position="hero" />
                </div>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 text-sm text-foreground/70">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent-strong" />
                  <span>Hospital Amerimed, Consultorio 517</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent-strong" />
                  <span>Evaluaciones programadas</span>
                </div>
              </div>
            </div>

            {/* Info Card - Right Side */}
            <div className="w-full lg:max-w-md space-y-6">
              <div className="p-6 rounded-2xl border border-border bg-background/80 backdrop-blur-sm">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-accent-strong" />
                  Beneficios de las Endoprótesis Esofágicas
                </h3>

                <div className="space-y-4 text-foreground/80">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>Rápida mejoría:</strong> Alivio inmediato de disfagia severa
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>Calidad de vida:</strong> Permite alimentación oral
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>Mínimamente invasivo:</strong> Sin cirugía abierta
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                  <h4 className="font-semibold text-foreground mb-3">Disponibilidad en Mérida:</h4>
                  <div className="space-y-2 text-sm text-foreground/80">
                    <p>• Evaluaciones urgentes Hospital Amerimed</p>
                    <p>• Stents especializados disponibles</p>
                    <p>• Seguimiento post-colocación</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-16 sm:py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              5 Pasos para Colocación de Endoprótesis Esofágica en Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Proceso especializado que permite restaurar la deglución de forma mínimamente invasiva
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                1. Evaluación Especializada Pre-procedimiento
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                El Dr. Omar Quiroz evalúa estudios de imagen (TAC, endoscopia diagnóstica) para determinar el tipo y tamaño de endoprótesis más adecuada. Se analiza la localización de la estenosis, su causa (maligna/benigna) y la anatomía esofágica individual.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-accent-strong" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                2. Ingreso Hospitalario y Anestesia
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Ingreso programado en Hospital Amerimed con ayuno de 8 horas. Se administra sedación profunda con anestesiólogo certificado, monitoreo cardiopulmonnar continuo y antibiótico profiláctico según protocolo.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <Stethoscope className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                3. Colocación Endoscópica del Stent
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Utilizando endoscopio terapéutico, se avanza la endoprótesis autoexpandible hasta la zona de estenosis bajo visualización directa. El stent se libera con precisión y se verifica su correcta expansión y posición.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                4. Monitoreo y Recuperación
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Observación post-procedimiento por 4-6 horas con monitoreo de signos vitales. Se verifica la tolerancia inicial a líquidos y se descarta complicaciones inmediatas como dolor torácico o dificultad respiratoria.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-6 rounded-2xl border border-border bg-background lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                5. Seguimiento y Cuidados Post-colocación
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Control ambulatorio a 24-48 horas para evaluar tolerancia alimentaria. Se proporcionan indicaciones dietéticas específicas (alimentos blandos, masticación adecuada) y se programa seguimiento a 1-2 semanas para verificar funcionamiento del stent y detectar complicaciones tardías.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DR. OMAR'S ADVANTAGE SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Dr. Omar: Endoscopista + Cirujano = Manejo Integral de Patología Esofágica Compleja
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              La ventaja única de tener ambas especialidades para casos esofágicos complicados
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Problem */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                ¿Qué pasa cuando una endoprótesis esofágica no es la solución completa?
              </h3>

              <div className="space-y-4 text-foreground/80">
                <p>
                  En casos complejos de patología esofágica (15-25%), las endoprótesis pueden presentar limitaciones: migración del stent, obstrucción por alimentos, erosión de la mucosa, o necesidad de resección quirúrgica combinada.
                </p>
                
                <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Situaciones que requieren evaluación quirúrgica adicional:</h4>
                  <ul className="space-y-1 text-sm text-red-700">
                    <li>• Perforación esofágica durante colocación</li>
                    <li>• Fístulas complejas que no sellan con stent</li>
                    <li>• Tumores que requieren resección + reconstrucción</li>
                    <li>• Migración recurrente de endoprótesis</li>
                    <li>• Stenosis benignas que no responden a tratamiento endoscópico</li>
                  </ul>
                </div>

                <p>
                  <strong>El problema tradicional:</strong> Cuando surgen estas complicaciones, el paciente debe ser referido a otro especialista, perdiendo continuidad en el cuidado y retrasando el tratamiento definitivo.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="p-8 rounded-2xl border border-accent-strong/20 bg-gradient-to-br from-accent-light/5 to-accent-strong/5">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                La Ventaja del Dr. Omar Quiroz: Doble Certificación
              </h3>

              <div className="space-y-4 text-foreground/80">
                <p>
                  El Dr. Omar Quiroz es <strong>cirujano general certificado</strong> con subespecialidad en <strong>endoscopia digestiva</strong>, lo que le permite ofrecer manejo integral desde el diagnóstico hasta la resolución quirúrgica cuando es necesaria.
                </p>

                <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Beneficios de la doble especialidad:</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• <strong>Continuidad del cuidado:</strong> Un solo médico maneja todo el proceso</li>
                    <li>• <strong>Decisión quirúrgica inmediata:</strong> Durante el mismo procedimiento</li>
                    <li>• <strong>Técnica híbrida:</strong> Combina endoscopia + cirugía cuando es necesario</li>
                    <li>• <strong>Experiencia en complicaciones:</strong> Manejo inmediato de perforaciones</li>
                    <li>• <strong>Planificación integral:</strong> Estrategia completa desde la primera consulta</li>
                  </ul>
                </div>

                <p>
                  <strong>Resultado:</strong> Los pacientes reciben atención especializada sin referencia a múltiples especialistas, con resolución más rápida y coordinada de su patología esofágica compleja.
                </p>

                <div className="mt-6 p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                  <h4 className="font-semibold text-foreground mb-2">Casos donde esta combinación es crucial:</h4>
                  <ul className="space-y-1 text-sm text-foreground/80">
                    <li>• Cáncer de esófago con necesidad de resección + stent paliativo</li>
                    <li>• Fístulas esófago-traqueales complejas</li>
                    <li>• Perforaciones iatrogénicas durante endoscopia</li>
                    <li>• Estenosis cáusticas con componente fibrótico severo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-foreground/80 mb-6">
              ¿Necesita evaluación para otro procedimiento esofágico? El Dr. Omar Quiroz ofrece manejo integral de patología esofágica.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/dilatacion-esofagica-merida" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background hover:shadow-md transition-all">
                <ExternalLink className="h-4 w-4" />
                Ver Dilatación Esofágica
              </Link>
              <Link href="/sutura-endoscopica-merida"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background hover:shadow-md transition-all">
                <ExternalLink className="h-4 w-4" />
                Ver Sutura Endoscópica
              </Link>
            </div>
          </div>
        </div>
      </section>

    

      {/* FINAL CTA SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/10 via-accent-light/10 to-accent-strong/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Necesita Evaluación para Endoprótesis Esofágica?
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              El Dr. Omar Quiroz ofrece consulta especializada para determinar si las endoprótesis esofágicas son la mejor opción para su caso específico.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
            <div className="p-6 rounded-xl border border-border bg-background/80 backdrop-blur-sm">
              <h3 className="font-semibold text-foreground mb-2">Consulta Especializada</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Evaluación integral con estudios de imagen para planificar el mejor tratamiento
              </p>
              <div className="flex justify-center">
                <CallButton service="endoprotesis esofagica" position="cta section" />
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-background/80 backdrop-blur-sm">
              <h3 className="font-semibold text-foreground mb-2">WhatsApp Directo</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Consulte su caso específico y obtenga información personalizada
              </p>
              <div className="flex justify-center">
                <WhatsAppButton service="endoprotesis esofagica" position="cta section" />
              </div>
            </div>
          </div>


          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent-strong" />
                <span>Hospital Amerimed, Consultorio 517, Mérida, Yucatán</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent-strong" />
                <span>Lunes a Viernes: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* BENEFITS SECTION */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Endoprótesis Esofágicas: Cuando las Dilataciones No Son Suficientes
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Solución especializada para estenosis esofágicas complejas en Mérida
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Benefit 1 */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Restauración Inmediata de la Deglución
              </h3>
              <p className="text-foreground/80">
                Permite alimentación oral inmediata en pacientes con disfagia severa por estenosis malignas o benignas complejas que no responden a dilatación.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Alternativa a Cirugía Mayor
              </h3>
              <p className="text-foreground/80">
                Evita procedimientos quirúrgicos extensos (esofagectomía, reconstrucción) en pacientes con alto riesgo operatorio o enfermedad avanzada.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Manejo de Fístulas Esofágicas
              </h3>
              <p className="text-foreground/80">
                Los stents cubiertos permiten sellar fístulas esófago-traqueales o esófago-mediastínicas, mejorando significativamente la calidad de vida.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Procedimiento Ambulatorio
              </h3>
              <p className="text-foreground/80">
                Se realiza bajo sedación consciente con alta el mismo día en casos seleccionados, reduciendo la estancia hospitalaria.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Mejora Nutricional Rápida
              </h3>
              <p className="text-foreground/80">
                Permite ingesta calórica adecuada desde las primeras 24 horas, fundamental en pacientes oncológicos o con desnutrición severa.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Cuidado Paliativo Especializado
              </h3>
              <p className="text-foreground/80">
                En casos de cáncer esofágico avanzado, ofrece paliación efectiva de síntomas mejorando significativamente la calidad de vida restante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS SECTION */}
      <section className="py-16 bg-gradient-to-b from-accent-light/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
              Endoprótesis Esofágicas en Colonias de Mérida
            </h2>
            <p className="text-foreground/70">
              Atendemos pacientes de toda la zona metropolitana de Mérida con fácil acceso al Hospital Amerimed
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
            {[
              "Centro Histórico", "Montebello", "Altabrisa", "Temozón Norte", 
              "Cholul", "García Ginerés", "Itzimná", "Alemán", "México", 
              "San José Tecoh", "Chichí Suárez", "Fraccionamiento del Norte"
            ].map((colonia) => (
              <div key={colonia} className="p-3 text-center rounded-lg border border-border bg-background/50">
                <span className="text-foreground/80 font-medium">{colonia}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-foreground/70">
              <MapPin className="inline h-4 w-4 text-accent-strong mr-1" />
              Hospital Amerimed se encuentra estratégicamente ubicado para fácil acceso desde cualquier punto de Mérida
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
          <Faq routeKey="endoprotesis_esofagicas" />
        </div>
      </section>
      </>
  )
}
