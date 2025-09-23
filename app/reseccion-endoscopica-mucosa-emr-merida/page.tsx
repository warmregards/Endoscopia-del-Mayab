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
  Award,
  Zap,
  Users2,
  Search,
} from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews";
import { inter, montserrat } from "@/app/fonts";


export const revalidate = 86400
export const metadata = metaFor("emr")

export default function EmrPage() {
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
                  <Target className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Alternativa a Cirugía de Pólipos</span>
                </div>

                <h1 className="`${montserrat.className} text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-foreground leading-tight`">
                  Resección Endoscópica Mucosa (EMR) en Mérida | Dr. Omar Quiroz - Tratamiento de Pólipos Complejos
                </h1>

                <p className="`${inter.className} text-lg text-foreground/80 leading-relaxed`">
                  La resección endoscópica mucosa (EMR) en Mérida es un procedimiento especializado para remover pólipos superficiales y lesiones pre-malignas sin cirugía abierta. El Dr. Omar Quiroz realiza EMR en Hospital Amerimed, Mérida, Yucatán, ofreciendo esta técnica de precisión con cotización personalizada según complejidad del caso.
                </p>

                <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Procedimiento de día</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Hospital Amerimed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Cotización personalizada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Sin cirugía abierta</span>
                  </div>
                </div>

                 {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="reseccion emr" position="hero" />
                      <WhatsAppButton service="reseccion emr" position="hero" />
                </div>
              </div>
            </div>

            {/* EMR Pricing Card - Right Side */}
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
                      <div className="text-2xl font-bold text-accent-strong">Cotización personalizada</div>
                      <div className="text-sm text-foreground/80">Según tamaño y ubicación de pólipo</div>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-background border border-border">
                    <h3 className="text-lg font-serif font-bold text-foreground mb-4 text-center">
                      Procedimiento EMR incluye
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Sedación consciente segura</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Resección mucosa completa</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Análisis histopatológico</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Fotos HD del procedimiento</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Seguimiento personalizado</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 rounded-xl bg-accent-light/10 border border-accent-light/20">
                      <h4 className="font-semibold text-foreground mb-1 text-sm">¿Por qué varía el precio?</h4>
                      <p className="text-xs text-foreground/80">
                        Pólipos grandes o múltiples requieren más tiempo y técnica especializada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING & LOCATION */}
      <section className="py-12 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
            {/* Pricing */}
            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  Costo EMR en Mérida
                </h3>
              </div>
              <div className="space-y-3 text-foreground/80">
                <p className="text-lg font-semibold text-accent-strong">
                  {mxn(PRICING.emr.from)} - Cotización según caso
                </p>
                <p>El precio varía por:</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Número de lesiones a resecar</li>
                  <li>• Localización anatómica</li>
                  <li>• Complejidad histológica</li>
                  <li>• Necesidad de técnicas especiales</li>
                </ul>
                <p className="text-sm">
                  Incluye: Procedimiento completo, sedación, patología y seguimiento.
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  Ubicación en Mérida
                </h3>
              </div>
              <div className="space-y-3 text-foreground/80">
                <div>
                  <p className="font-semibold">Hospital Amerimed</p>
                  <p className="text-sm">Consultorio 517, Chichí Suárez</p>
                </div>
                <div className="text-sm">
                  <p><strong>Fácil acceso desde:</strong></p>
                  <p>Centro Histórico, Montebello, Altabrisa, Temozón Norte, García Ginerés, Cholul</p>
                </div>
                <div className="text-sm">
                  <p><strong>Ventajas del Hospital:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Quirófanos con tecnología avanzada</li>
                    <li>• Anestesiólogos certificados</li>
                    <li>• Área de recuperación monitoreada</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-STEP PROCESS */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Proceso de EMR en 3 Etapas
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Desde la evaluación inicial hasta la recuperación completa
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-foreground mb-2">Evaluación Pre-Resección</h3>
              <p className="text-sm text-foreground/80">Colonoscopia diagnóstica con cromoendoscopia para evaluar márgenes y profundidad</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-foreground mb-2">Resección Endoscópica</h3>
              <p className="text-sm text-foreground/80">Inyección submucosa, resección en asa y recuperación de espécimen completo</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-foreground mb-2">Seguimiento Patológico</h3>
              <p className="text-sm text-foreground/80">Evaluación histopatológica y vigilancia endoscópica según resultados</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
              <Clock className="h-5 w-5 text-accent-strong" />
              <span className="font-semibold text-foreground">Duración</span>
              <span className="text-foreground/70">- 30-45 minutos según complejidad</span>
            </div>
          </div>
        </div>
      </section>

      {/* DR. OMAR'S SURGICAL ADVANTAGE */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Dr. Omar Quiroz - Ventaja Quirúrgica Única</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight">
                  ¿Por Qué la Experiencia Quirúrgica Marca la Diferencia en EMR?
                </h2>
                
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Muchos endoscopistas en Mérida evitan casos complejos de EMR o los envían a cirugía cuando encuentran lesiones difíciles. <strong>El Dr. Quiroz es diferente</strong> - como cirujano especializado, maneja resecciones complejas que otros consideran "no resecables" endoscópicamente.
                </p>
              </div>
            </div>

            {/* Surgical Benefits Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-xl border border-border bg-background">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Precisión Quirúrgica</h3>
                    <p className="text-sm text-foreground/80">
                      Técnica refinada por años de cirugía laparoscópica. Resecciones en bloque cuando otros fragmentan la lesión.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-strong/10 flex items-center justify-center flex-shrink-0">
                    <Microscope className="h-5 w-5 text-accent-strong" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Evaluación Oncológica</h3>
                    <p className="text-sm text-foreground/80">
                      Determina márgenes quirúrgicos apropiados y evalúa necesidad de tratamiento adicional con criterio oncológico.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Manejo de Complicaciones</h3>
                    <p className="text-sm text-foreground/80">
                      Experiencia quirúrgica para manejar perforaciones o sangrado inmediatamente, sin referir a otro especialista.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-strong/10 flex items-center justify-center flex-shrink-0">
                    <Users2 className="h-5 w-5 text-accent-strong" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Plan Integral</h3>
                    <p className="text-sm text-foreground/80">
                      Si EMR no es completa, planea segunda resección o cirugía laparoscópica sin cambiar de médico.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-accent-light/5 to-accent-strong/5 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                    Casos que Otros Consideran "Muy Complejos"
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Pólipos de 3-4 cm en colon, lesiones laterally spreading tumors (LST), y adenomas vellosos que otros especialistas envían directamente a cirugía. El Dr. Quiroz evalúa cada caso individualmente para ofrecer la opción menos invasiva.
                  </p>
                  <p className="text-sm text-primary font-medium">
                    "La clave está en saber cuándo EMR es suficiente y cuándo se necesita algo más" - Dr. Omar Quiroz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PATIENT EXPERIENCE */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Qué Esperar Durante la EMR?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Proceso detallado desde la llegada hasta el alta médica
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="font-serif font-semibold text-foreground mb-4">Antes del Procedimiento</h3>
                <div className="space-y-3 text-sm text-foreground/80">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p>Preparación intestinal 24 horas previas (colonoscopia)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p>Ayuno de 8 horas antes del procedimiento</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p>Revisión de anticoagulantes y medicamentos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p>Consentimiento informado detallado</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="font-serif font-semibold text-foreground mb-4">Durante la Resección</h3>
                <div className="space-y-3 text-sm text-foreground/80">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-strong mt-2 flex-shrink-0" />
                    <p>Sedación profunda - no sentirás nada</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-strong mt-2 flex-shrink-0" />
                    <p>Localización exacta de la lesión</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-strong mt-2 flex-shrink-0" />
                    <p>Inyección submucosa para elevación</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-strong mt-2 flex-shrink-0" />
                    <p>Resección en asa con márgenes adecuados</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="font-serif font-semibold text-foreground mb-4">Después del Procedimiento</h3>
                <div className="space-y-3 text-sm text-foreground/80">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                    <p>Recuperación en sala monitoreada 1-2 horas</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                    <p>Explicación de hallazgos con imágenes</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                    <p>Instrucciones de dieta y actividades</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                    <p>Alta el mismo día en la mayoría de casos</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="font-serif font-semibold text-foreground mb-4">Seguimiento y Resultados</h3>
                <div className="space-y-3 text-sm text-foreground/80">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <p>Resultados de patología en 7-10 días</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <p>Cita de revisión para discutir histopatología</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <p>Plan de vigilancia endoscópica según resultados</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <p>Coordinación con oncología si es necesario</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recovery Timeline */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
                Cronología de Recuperación Post-EMR
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">Día 1-2</div>
                  <p className="text-sm text-foreground/80">Dieta líquida, actividad ligera, observación de síntomas</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">Día 3-7</div>
                  <p className="text-sm text-foreground/80">Dieta suave, actividades normales, evitar ejercicio intenso</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">Semana 2+</div>
                  <p className="text-sm text-foreground/80">Actividad completa, seguimiento según patología</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PROCEDURES */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Procedimientos Relacionados
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Opciones complementarias para diagnóstico y tratamiento endoscópico
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/colonoscopia-merida" className="group p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Search className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Colonoscopia Diagnóstica
                </h3>
              </div>
              <p className="text-sm text-foreground/80 mb-3">
                Evaluación inicial para detectar pólipos y lesiones que requieren EMR.
              </p>
              <div className="text-sm text-primary font-medium">
                Desde $5,000 MXN →
              </div>
            </Link>

            <Link href="/diseccion-endoscopica-submucosa-esd-merida" className="group p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-accent-strong" />
                <h3 className="font-semibold text-foreground group-hover:text-accent-strong transition-colors">
                  Disección ESD
                </h3>
              </div>
              <p className="text-sm text-foreground/80 mb-3">
                Para lesiones complejas que requieren resección más extensa que EMR.
              </p>
              <div className="text-sm text-accent-strong font-medium">
                Cotización personalizada →
              </div>
            </Link>

            <Link href="/apc-coagulacion-plasma-argon-merida" className="group p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-foreground group-hover:text-blue-600 transition-colors">
                  Coagulación APC
                </h3>
              </div>
              <p className="text-sm text-foreground/80 mb-3">
                Tratamiento complementario para márgenes post-resección.
              </p>
              <div className="text-sm text-blue-600 font-medium">
                Desde $19,000 MXN →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                ¿Tienes Pólipos que Requieren Resección?
              </h2>
              <p className="text-lg text-foreground/80">
                No todos los pólipos necesitan cirugía. El Dr. Omar evalúa cada caso para determinar si EMR puede resolver tu situación de manera menos invasiva.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-accent-light/5 to-accent-strong/5 border border-primary/20">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Heart className="h-6 w-6 text-primary" />
                  <span className="font-semibold text-foreground">Evaluación sin compromiso</span>
                </div>
                <p className="text-foreground/80">
                  Agenda una consulta para revisar tu caso específico. Muchos pacientes que otros médicos enviaron a cirugía pueden resolverse con EMR ambulatoria.
                </p>
                 {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <CallButton service="reseccion emr" position="cta section" />
                      <WhatsAppButton service="reseccion emr" position="cta section" />
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-foreground/70">
              <p>
                Evalúa todas tus opciones antes de considerar cirugía mayor.
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
          <Faq routeKey="emr" />
        </div>
      </section>
    </>
  )
}
