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
  Scale,
  UserCheck,
  Zap,
  Award,
} from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews";


export const revalidate = 86400
export const metadata = metaFor("retiro_balon_gastrico")

export default function RetiroBalonGastricoPage() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://endoscopiadelmayab.com").replace(/\/$/, "")

  return (
    <>
{/* HERO SECTION */}
<section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent-light/5 to-background">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent" />
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

      {/* Left column */}
      <div className="flex-1 lg:max-w-3xl space-y-8">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200">
            <Scale className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">Procedimiento Bariátrico Especializado</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-foreground leading-tight">
            Retiro de Balón Gástrico en Mérida | Dr. Omar Quiroz - Extracción Segura con Sedación
          </h1>

          <p className="text-lg text-foreground/80 leading-relaxed">
            El retiro de balón gástrico en Mérida debe realizarse por un especialista experimentado. El Dr. Omar Quiroz realiza la extracción endoscópica en Hospital Amerimed, Mérida, Yucatán, con sedación profunda y protocolos de seguridad desde {mxn(PRICING.retiro_balon_gastrico.from)}.
          </p>

          <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-strong" />
              <span>Extracción segura sin complicaciones</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-strong" />
              <span>Todos los tipos de balón</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-strong" />
              <span>Desde {mxn(PRICING.retiro_balon_gastrico.from)}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-strong" />
              <span>Hospital Amerimed con anestesiólogo</span>
            </div>
          </div>
        </div>

         {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <CallButton service="retiro balon" position="hero" />
                      <WhatsAppButton service="retiro balon" position="hero" />
                </div>

        {/* Quick Info */}
        <div className="flex flex-wrap gap-6 text-sm text-foreground/70">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent-strong" />
            <span>Hospital Amerimed, Consultorio 517</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent-strong" />
            <span>Procedimiento ambulatorio</span>
          </div>
        </div>
      </div>

      {/* Right column (visual card) */}
      <div className="flex-1 lg:max-w-lg">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-strong/20 to-primary/20 rounded-3xl transform rotate-3" />
          <div className="relative p-8 bg-background rounded-3xl shadow-xl border border-border">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-6 text-center">
              ¿Cuándo Retirar el Balón Gástrico?
            </h3>

            <div className="space-y-4 text-foreground/80">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p><strong>6 meses:</strong> Balones temporales Orbera, Reshape</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p><strong>12 meses:</strong> Balones de larga duración</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p><strong>Emergencia:</strong> Complicaciones o intolerancia</p>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
              <h4 className="font-semibold text-foreground mb-3">Retiro Seguro en Mérida:</h4>
              <div className="space-y-2 text-sm text-foreground/80">
                <p>• Evaluación previa del tipo de balón</p>
                <p>• Sedación profunda con anestesiólogo</p>
                <p>• Extracción endoscópica sin incisiones</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
            {/* 4-STEP PROCESS */}
      <section className="py-16 sm:py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Proceso de Retiro de Balón Gástrico en 4 Pasos
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Procedimiento ambulatorio seguro con alta el mismo día
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="relative p-6 rounded-2xl border border-border bg-background">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
              </div>
              <div className="pt-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <UserCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  Evaluación Pre-Procedimiento
                </h3>
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>• Identificación del tipo de balón (Orbera, Reshape, etc.)</p>
                  <p>• Evaluación de tiempo desde colocación</p>
                  <p>• Exámenes de laboratorio básicos</p>
                  <p>• Historia clínica y síntomas actuales</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative p-6 rounded-2xl border border-border bg-background">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
              </div>
              <div className="pt-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  Preparación y Sedación
                </h3>
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>• Ayuno de 8-12 horas previo al procedimiento</p>
                  <p>• Evaluación anestésica pre-procedimiento</p>
                  <p>• Instalación de acceso venoso</p>
                  <p>• Sedación profunda con anestesiólogo</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative p-6 rounded-2xl border border-border bg-background">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                  3
                </div>
              </div>
              <div className="pt-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  Extracción Endoscópica
                </h3>
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>• Endoscopia con equipo Olympus 180</p>
                  <p>• Localización y punción del balón</p>
                  <p>• Deflación controlada del balón</p>
                  <p>• Extracción cuidadosa con fórceps</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative p-6 rounded-2xl border border-border bg-background">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                  4
                </div>
              </div>
              <div className="pt-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  Recuperación y Alta
                </h3>
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>• Monitoreo en recuperación 2-4 horas</p>
                  <p>• Evaluación de tolerancia oral</p>
                  <p>• Indicaciones para dieta post-retiro</p>
                  <p>• Alta el mismo día con seguimiento</p>
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
              Dr. Omar: Endoscopista + Cirujano = Retiro Seguro de Balón Gástrico
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              La ventaja única de tener ambas especialidades para casos complicados
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Problem */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                ¿Qué pasa si el retiro del balón se complica?
              </h3>

              <div className="space-y-4 text-foreground/80">
                <p>
                  En un pequeño porcentaje de casos (2-5%), el retiro del balón gástrico puede presentar complicaciones como adherencias, fragmentación del balón, o dificultades en la extracción que requieren manejo especializado.
                </p>

                <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Complicaciones Posibles:</h4>
                  <ul className="space-y-1 text-sm text-red-700">
                    <li>• Balón adherido a mucosa gástrica</li>
                    <li>• Fragmentación durante la extracción</li>
                    <li>• Migración del balón desinflado</li>
                    <li>• Necesidad de conversión quirúrgica</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dr. Omar's Solution */}
            <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-accent-light/10 to-accent-strong/10">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Ventaja del Dr. Omar: Doble Experiencia
              </h3>

              <div className="space-y-6 text-foreground/80">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-strong/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="h-6 w-6 text-accent-strong" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Como Endoscopista:</h4>
                    <p className="text-sm">Experiencia con todos los tipos de balón (Orbera, Reshape, Spatz), técnicas de extracción avanzadas, manejo de complicaciones endoscópicas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-strong/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-accent-strong" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Como Cirujano:</h4>
                    <p className="text-sm">Si se requiere conversión quirúrgica o manejo de complicaciones, el mismo médico puede proceder sin referir a otro especialista.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Resultado:</h4>
                  <p className="text-sm text-green-700">
                    Retiro seguro en el 98% de casos con manejo endoscópico. En casos complicados, resolución quirúrgica inmediata sin cambio de médico ni hospital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE DR. OMAR */}
      <section className="py-16 sm:py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Por Qué Elegir al Dr. Omar para el Retiro de Balón Gástrico?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Experiencia especializada en procedimientos bariátricos endoscópicos
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Expertise */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Microscope className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Experiencia Especializada
              </h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• Certificado en endoscopia avanzada</li>
                <li>• Experiencia con todos los tipos de balón</li>
                <li>• Manejo de complicaciones raras</li>
                <li>• Entrenamiento en técnicas bariátricas</li>
              </ul>
            </div>

            {/* Safety */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Protocolos de Seguridad
              </h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• Hospital Amerimed con quirófanos</li>
                <li>• Anestesiólogo certificado presente</li>
                <li>• Equipo de emergencia disponible</li>
                <li>• Monitoreo continuo durante el procedimiento</li>
              </ul>
            </div>

            {/* Technology */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Tecnología Avanzada
              </h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• Endoscopia Olympus 180 alta definición</li>
                <li>• Instrumentos especializados para extracción</li>
                <li>• Sedación monitorizaría avanzada</li>
                <li>• Recuperación con monitoreo continuo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING & AREAS SERVED */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Pricing */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                  Precio Retiro Balón Gástrico Mérida
                </h2>
                <p className="text-lg text-foreground/70">
                  Costo fijo sin sorpresas, incluye todos los componentes del procedimiento
                </p>
              </div>

              <div className="grid gap-6">
                {/* Main Price */}
                <div className="p-8 rounded-2xl border-2 border-accent-strong bg-gradient-to-br from-accent-light/10 to-accent-strong/10">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-foreground">
                      Retiro Balón Gástrico Completo
                    </h3>
                    <div className="text-4xl font-bold text-accent-strong">
                      {mxn(PRICING.retiro_balon_gastrico.from)}
                    </div>
                    <p className="text-sm text-foreground/70">
                      Precio incluye todos los componentes del procedimiento
                    </p>
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
                      <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                      <p>Extracción endoscópica completa del balón</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                      <p>Sedación profunda con anestesiólogo certificado</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                      <p>Uso de sala de endoscopia Hospital Amerimed</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                      <p>Monitoreo de recuperación post-procedimiento</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                      <p>Consulta de seguimiento incluida</p>
                    </div>
                  </div>
                </div>

                {/* Payment Options */}
                <div className="p-8 rounded-2xl border border-border bg-background">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Opciones de Pago</h3>
                  <div className="space-y-3 text-foreground/80">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                      <p>Efectivo con descuento del 5%</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                      <p>Tarjeta de crédito sin intereses hasta 6 meses</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                      <p>Transferencia bancaria</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                      <p>Verificación de cobertura de seguros médicos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas Served */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                  Retiro de Balón Gástrico en Mérida, Yucatán
                </h2>
                <p className="text-lg text-foreground/70">
                  Atendemos pacientes de toda la zona metropolitana de Mérida
                </p>
              </div>

              {/* Hospital Location */}
              <div className="p-8 rounded-2xl border border-border bg-background">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                      Hospital Amerimed Mérida
                    </h3>
                    <p className="text-foreground/80">
                      Consultorio 517 - Calle 54 No. 365 x 33A y 31, Col. Centro, Mérida, Yucatán
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Colonias Atendidas Norte:</h4>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      <li>• Altabrisa y Gran Plaza</li>
                      <li>• Temozon Norte</li>
                      <li>• Montebello y Country Club</li>
                      <li>• Residencial del Norte</li>
                      <li>• Las Américas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Colonias Centro y Sur:</h4>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      <li>• Centro Histórico Mérida</li>
                      <li>• García Ginerés</li>
                      <li>• Cholul y Komchen</li>
                      <li>• Itzimná y Jesús Carranza</li>
                      <li>• Fraccionamiento del Sur</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                  <p className="text-sm text-foreground/80">
                    <strong>Facilidades de transporte:</strong> Ubicación céntrica con fácil acceso desde Periférico, 
                    estacionamiento amplio disponible, cerca de Plaza Grande y principales avenidas.
                  </p>
                </div>
              </div>

              {/* Emergency Info */}
              <div className="p-8 rounded-2xl border border-orange-200 bg-orange-50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-orange-900 mb-3">
                      ¿Retiro de Emergencia?
                    </h3>
                    <div className="space-y-2 text-sm text-orange-800">
                      <p>Si experimenta síntomas severos como dolor abdominal intenso, vómito persistente, 
                      o signos de obstrucción, contacte inmediatamente.</p>
                      <p><strong>Disponibilidad 24/7 para emergencias relacionadas con balón gástrico.</strong></p>
                    </div>
                     {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <CallButton service="retiro balon" position="urgencia section" />
                      <WhatsAppButton service="retiro balon" position="urgencia section" />
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCEDURE DETAILS */}
      <section className="py-16 sm:py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Detalles del Procedimiento de Retiro
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Información completa sobre qué esperar durante el retiro de su balón gástrico
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Before Procedure */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-foreground">Antes del Procedimiento</h3>
              
              <div className="p-6 rounded-2xl border border-border bg-background">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Preparación Previa (1-2 días antes)
                </h4>
                <ul className="space-y-2 text-foreground/80">
                  <li>• <strong>Ayuno completo:</strong> 12 horas sin alimentos, 8 horas sin líquidos</li>
                  <li>• <strong>Medicamentos:</strong> Suspender anticoagulantes si los usa</li>
                  <li>• <strong>Análisis:</strong> Biometría hemática y química sanguínea recientes</li>
                  <li>• <strong>Acompañante:</strong> Debe venir con familiar para el alta</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-background">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Documentos Necesarios
                </h4>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Identificación oficial vigente</li>
                  <li>• Reporte de colocación del balón (si lo tiene)</li>
                  <li>• Estudios de laboratorio recientes</li>
                  <li>• Tarjeta del seguro médico (si aplica)</li>
                </ul>
              </div>
            </div>

            {/* During & After */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-foreground">Durante y Después</h3>
              
              <div className="p-6 rounded-2xl border border-border bg-background">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  El Procedimiento (30-45 minutos)
                </h4>
                <ul className="space-y-2 text-foreground/80">
                  <li>• <strong>Sedación:</strong> Anestesia intravenosa con monitoreo</li>
                  <li>• <strong>Endoscopia:</strong> Localización visual del balón</li>
                  <li>• <strong>Punción:</strong> Deflación controlada del balón</li>
                  <li>• <strong>Extracción:</strong> Remoción cuidadosa con fórceps especiales</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-background">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Recuperación y Alta (2-4 horas)
                </h4>
                <ul className="space-y-2 text-foreground/80">
                  <li>• <strong>Monitoreo:</strong> Observación en sala de recuperación</li>
                  <li>• <strong>Hidratación:</strong> Líquidos claros una vez despierto</li>
                  <li>• <strong>Evaluación:</strong> Verificación de signos vitales estables</li>
                  <li>• <strong>Alta:</strong> Instrucciones y cita de seguimiento</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-12 p-8 rounded-2xl border border-border bg-gradient-to-r from-primary/5 to-accent-strong/5">
            <h3 className="text-xl font-serif font-bold text-foreground mb-6 text-center">
              Cronograma del Día del Procedimiento
            </h3>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-2">
                  7AM
                </div>
                <h4 className="font-semibold text-foreground mb-1">Llegada</h4>
                <p className="text-xs text-foreground/70">Registro y preparación</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-2">
                  8AM
                </div>
                <h4 className="font-semibold text-foreground mb-1">Procedimiento</h4>
                <p className="text-xs text-foreground/70">Sedación y extracción</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-2">
                  9AM
                </div>
                <h4 className="font-semibold text-foreground mb-1">Recuperación</h4>
                <p className="text-xs text-foreground/70">Monitoreo y observación</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-2">
                  12PM
                </div>
                <h4 className="font-semibold text-foreground mb-1">Alta</h4>
                <p className="text-xs text-foreground/70">Instrucciones y seguimiento</p>
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
              Otros Procedimientos Endoscópicos Relacionados
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Dr. Omar Quiroz realiza diversos procedimientos endoscópicos avanzados
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/endoscopia-merida" className="group p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Stethoscope className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                Endoscopia Diagnóstica
              </h3>
              <p className="text-sm text-foreground/70 mb-3">
                Evaluación completa del tracto digestivo alto con sedación
              </p>
              <div className="flex items-center gap-2 text-accent-strong text-sm font-medium">
                <span>Desde {mxn(PRICING.endoscopia.from)}</span>
                <ExternalLink className="h-4 w-4" />
              </div>
            </Link>

            <Link href="/extraccion-cuerpos-extranos-endoscopia-merida" className="group p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                Extracción de Cuerpos Extraños
              </h3>
              <p className="text-sm text-foreground/70 mb-3">
                Remoción segura de objetos ingeridos accidentalmente
              </p>
              <div className="flex items-center gap-2 text-accent-strong text-sm font-medium">
                <span>Desde {mxn(PRICING.extraccion_cuerpos_extranos.from)}</span>
                <ExternalLink className="h-4 w-4" />
              </div>
            </Link>

            <Link href="/apc-coagulacion-plasma-argon-merida" className="group p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                Coagulación con Plasma de Argón
              </h3>
              <p className="text-sm text-foreground/70 mb-3">
                Control de sangrado y tratamiento de lesiones con APC
              </p>
              <div className="flex items-center gap-2 text-accent-strong text-sm font-medium">
                <span>Desde {mxn(PRICING.apc.from)}</span>
                <ExternalLink className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/10 via-accent-light/10 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Necesita Retirar su Balón Gástrico?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              El Dr. Omar Quiroz está disponible para evaluación y retiro seguro de balón gástrico en Hospital Amerimed, Mérida. 
              Consulta disponible el mismo día para casos urgentes.
            </p>
          </div>

           {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <CallButton service="retiro balon" position="cta section" />
                      <WhatsAppButton service="retiro balon" position="cta section" />
                </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-foreground/70">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent-strong" />
              <span>Hospital Amerimed, Consultorio 517</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent-strong" />
              <span>Disponible 24/7 para emergencias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-strong" />
              <span>Precio fijo desde {mxn(PRICING.retiro_balon_gastrico.from)}</span>
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
          <Faq routeKey="retiro_balon_gastrico" />
        </div>
      </section>

    </>
  )
}
