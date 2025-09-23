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
  Phone,
  Hospital,
  Timer,
  UserCheck,
  Award,
  Eye,
} from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews";
import { inter, montserrat } from "@/app/fonts";


export const revalidate = 86400
export const metadata = metaFor("extraccion")

export default function ExtraccionCuerposExtranosPage() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.endoscopiadelmayab.com").replace(/\/$/, "")

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
                  <span className="text-sm font-medium text-red-700">Atención de Emergencia 24/7</span>
                </div>

                <h1 className="`${montserrat.className} text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-foreground leading-tight`">
                  Extracción de Cuerpos Extraños Endoscopia Mérida | Dr. Omar Quiroz - Atención de Urgencia
                </h1>

                <p className="`${inter.className} text-lg text-foreground/80 leading-relaxed`">
                  La extracción endoscópica de cuerpos extraños en Mérida es un procedimiento de emergencia para retirar objetos atorados en esófago, estómago o duodeno. El Dr. Omar Quiroz realiza extracción de cuerpos extraños en Hospital Amerimed, Mérida, Yucatán, con disponibilidad de emergencia incluso fines de semana por {mxn(PRICING.extraccion_cuerpos_extranos.from)}.
                </p>

                <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Disponible fines de semana</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Sedación segura</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Hospital Amerimed</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="extraccion cuerpos" position="hero" />
                      <WhatsAppButton service="extraccion cuerpo" position="hero" />
                </div>
              </div>
            </div>

            {/* Quick Info Cards - Right Side */}
            <div className="w-full lg:w-96 space-y-6">
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur border border-border shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Emergencia</h3>
                    <p className="text-sm text-foreground/70">24/7 disponible</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/80">
                  Si algo está atorado y causa dolor, dificultad para tragar o vómito, es urgencia médica.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur border border-border shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <Timer className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Tiempo Crítico</h3>
                    <p className="text-sm text-foreground/70">Acción rápida</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/80">
                  Entre más tiempo pase, más complicado se vuelve. Atendemos el mismo día.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur border border-border shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Dr. Omar</h3>
                    <p className="text-sm text-foreground/70">Doble certificación</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/80">
                  Endoscopista y cirujano. Si la extracción endoscópica falla, puede resolver quirúrgicamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Precio Fijo para Extracción de Cuerpos Extraños en Mérida
            </h2>
            <p className="text-lg text-foreground/70">
              Sin sorpresas ni cargos ocultos, aún en emergencia
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Price */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                ¿Cuánto cuesta?
              </h3>
              <div className="text-2xl font-bold text-accent-strong mb-2">{mxn(PRICING.extraccion_cuerpos_extranos.from)} pesos fijos</div>
              <p className="text-foreground/80">
                Incluye procedimiento, sedación y quir��fano. Precio fijo sin importar el objeto o complejidad.
              </p>
            </div>

            {/* Duration */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                ¿Cuánto tiempo toma?
              </h3>
              <div className="text-2xl font-bold text-green-600 mb-2">10-30 minutos</div>
              <p className="text-foreground/80">
                Depende del objeto y localización. La mayoría se resuelven en menos de 20 minutos.
              </p>
            </div>

            {/* Location */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <Hospital className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                ¿Dónde se realiza?
              </h3>
              <p className="text-foreground/80 mb-4">
                <strong>Hospital Amerimed</strong> - Quirófanos equipados para emergencias con todo el apoyo hospitalario necesario.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-sm font-medium text-blue-700">
                <MapPin className="h-4 w-4" />
                Chichí Suárez, Mérida
              </div>
            </div>
          </div>

          {/* Emergency Note */}
          <div className="mt-12 p-6 rounded-2xl bg-red-50 border border-red-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-red-800 mb-2">
                  ¿Cuándo es urgencia médica?
                </h3>
                <div className="space-y-2 text-red-700">
                  <p>• <strong>Dolor severo</strong> en pecho, garganta o estómago</p>
                  <p>• <strong>Dificultad para tragar</strong> saliva o líquidos</p>
                  <p>• <strong>Vómito constante</strong> o con sangre</p>
                  <p>• <strong>Dificultad para respirar</strong> (llama al 911 inmediatamente)</p>
                  <p>• <strong>Objetos punzocortantes</strong> como vidrio, metal filoso, huesos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Proceso de Extracción de Emergencia: Desde Llegada hasta Alta
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Protocolo optimizado para resolver la emergencia de forma rápida y segura
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mx-auto mb-6">
                  <UserCheck className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  1. Evaluación Inmediata
                </h3>
                <p className="text-foreground/80 mb-6">
                  Revisión rápida de síntomas, radiografía si es necesaria y preparación de emergencia para quirófano.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-sm font-medium text-red-700">
                  <Clock className="h-4 w-4" />
                  5-15 minutos
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  2. Sedación Monitoreada
                </h3>
                <p className="text-foreground/80 mb-6">
                  Anestesiólogo administra sedación profunda con monitoreo constante de signos vitales y oxígeno.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-sm font-medium text-blue-700">
                  <ShieldCheck className="h-4 w-4" />
                  Seguridad máxima
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  3. Extracción Endoscópica
                </h3>
                <p className="text-foreground/80 mb-6">
                  Dr. Omar localiza el objeto con endoscopio HD y usa pinzas especializadas para extracción segura.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-sm font-medium text-green-700">
                  <Eye className="h-4 w-4" />
                  Visión directa HD
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  4. Verificación y Alta
                </h3>
                <p className="text-foreground/80 mb-6">
                  Revisión endoscópica confirma extracción completa y ausencia de lesiones. Alta el mismo día.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-sm font-medium text-purple-700">
                  <Timer className="h-4 w-4" />
                  Misma día alta
                </div>
              </div>
            </div>
          </div>

          {/* Process Notes */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-muted/30 to-background border border-border">
            <h3 className="text-xl font-serif font-bold text-foreground mb-6 text-center">
              Objetos Más Comunes que Extraemos
            </h3>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Monedas</h4>
                <p className="text-sm text-foreground/70">Especialmente común en niños</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-3">
                  <Activity className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Espinas de Pescado</h4>
                <p className="text-sm text-foreground/70">Atoradas en garganta o esófago</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-3">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Prótesis Dentales</h4>
                <p className="text-sm text-foreground/70">Dientes, coronas, brackets</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Juguetes Pequeños</h4>
                <p className="text-sm text-foreground/70">Fichas, canicas, piezas LEGO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DR. OMAR'S ADVANTAGE SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Dr. Omar: Endoscopista + Cirujano = Respaldo Completo para Emergencias
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              La ventaja única de tener ambas especialidades en extracciones complicadas
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Problem */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                ¿Qué pasa si la extracción endoscópica no es posible?
              </h3>

              <div className="space-y-4 text-foreground/80">
                <p>
                  En casos complicados (5-10%), los objetos pueden estar muy atorados, ser demasiado grandes para las pinzas endoscópicas, o haber causado perforación. Un endoscopista sin entrenamiento quirúrgico tendría que:
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2"></div>
                    <span>Suspender el procedimiento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2"></div>
                    <span>Referir a otro médico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2"></div>
                    <span>Perder tiempo valioso</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2"></div>
                    <span>Aumentar el riesgo de complicaciones</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent-light/5 border border-primary/20">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                La Ventaja del Dr. Omar en Extracciones Complejas
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Primero: Extracción Endoscópica
                    </h4>
                    <p className="text-foreground/80">
                      Intenta la extracción menos invasiva con endoscopio y pinzas especializadas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent-strong/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-4 w-4 text-accent-strong" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Respaldo: Cirugía Inmediata
                    </h4>
                    <p className="text-foreground/80">
                      Si falla la extracción endoscópica, puede resolver quirúrgicamente en el mismo tiempo sin esperas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-green-600/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Resultado: Solución Completa
                    </h4>
                    <p className="text-foreground/80">
                      100% de éxito en extracción porque tiene ambas herramientas. No hay objeto que no pueda sacar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-green-50 border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">En resumen:</h4>
                <p className="text-green-700">
                  Otros médicos: "Si no sale por endoscopia, necesitará cirugía con otro doctor."<br />
                  <strong>Dr. Omar:</strong> "Si no sale por endoscopia, lo saco por cirugía en el momento."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Qué Esperar: Desde la Llamada hasta Regresar a Casa
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Información completa para que sepas exactamente qué va a pasar
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Before */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Antes del Procedimiento
              </h3>

              <div className="space-y-4 text-foreground/80">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Llamada de emergencia</p>
                    <p className="text-sm">Te orientamos por teléfono sobre qué hacer mientras llegas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Hospital className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Llegada a Hospital Amerimed</p>
                    <p className="text-sm">Urgencias te recibe y prepara para evaluación inmediata</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Prohibido comer o tomar líquidos</p>
                    <p className="text-sm">Desde el momento del incidente para seguridad anestésica</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-3">Ubicación específica:</h4>
                <div className="space-y-2 text-sm text-amber-700">
                  <p>• Hospital Amerimed, Consultorio 517</p>
                  <p>• Av. Itzaes #242, García Ginerés</p>
                  <p>• Estacionamiento gratuito disponible</p>
                </div>
              </div>
            </div>

            {/* During */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Durante el Procedimiento
              </h3>

              <div className="space-y-4 text-foreground/80">
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Sedación profunda segura</p>
                    <p className="text-sm">No sientes nada, despiertas cuando ya está resuelto</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Eye className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Localización con HD</p>
                    <p className="text-sm">Endoscopio Olympus HD para encontrar el objeto exacto</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Extracción especializada</p>
                    <p className="text-sm">Pinzas específicas según tipo de objeto y localización</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Verificación completa</p>
                    <p className="text-sm">Revisión endoscópica confirma extracción total</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-blue-50 border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-3">Monitoreo constante:</h4>
                <div className="space-y-2 text-sm text-blue-700">
                  <p>• Anestesiólogo presente todo el tiempo</p>
                  <p>• Signos vitales monitoreados</p>
                  <p>• Oximetría y electrocardiograma</p>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Después del Procedimiento
              </h3>

              <div className="space-y-4 text-foreground/80">
                <div className="flex items-start gap-3">
                  <Timer className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Recuperación rápida</p>
                    <p className="text-sm">30-60 minutos en observación hasta estar despierto</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Reporte con evidencia</p>
                    <p className="text-sm">Fotos del objeto extraído e informe completo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Stethoscope className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Instrucciones de cuidado</p>
                    <p className="text-sm">Dieta y actividades para las primeras 24 horas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Alta el mismo día</p>
                    <p className="text-sm">La mayoría va a casa en 2-3 horas</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-green-50 border border-green-200">
                <h4 className="font-semibold text-green-800 mb-3">Cuidados en casa:</h4>
                <div className="space-y-2 text-sm text-green-700">
                  <p>• Dieta blanda por 24 horas</p>
                  <p>• Evitar alimentos calientes o duros</p>
                  <p>• Contacto directo por WhatsApp si dudas</p>
                  <p>• Cita de seguimiento opcional</p>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mt-16 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <CallButton service="extraccion cuerpos" position="cta section" />
                      <WhatsAppButton service="extraccion cuerpo" position="cta section" />
                </div>
            <p className="text-sm text-foreground/60 mt-4">
              Disponible 24/7 incluyendo fines de semana • Respuesta inmediata para emergencias
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Por Qué Elegir al Dr. Omar para Extracción de Cuerpos Extraños
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Ventajas específicas que marcan la diferencia en emergencias digestivas
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Dual Training */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Doble Especialidad
              </h3>
              <p className="text-foreground/80">
                Certificado tanto en endoscopia como en cirugía general. Si falla una técnica, tiene respaldo inmediato con la otra.
              </p>
            </div>

            {/* 24/7 Availability */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Disponibilidad Real 24/7
              </h3>
              <p className="text-foreground/80">
                No solo "en teoría". Realmente atiende emergencias fines de semana, días festivos y madrugadas en Hospital Amerimed.
              </p>
            </div>

            {/* Advanced Equipment */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Equipo de Última Generación
              </h3>
              <p className="text-foreground/80">
                Endoscopios Olympus HD con pinzas especializadas para diferentes tipos de objetos. Ve exactamente qué está pasando.
              </p>
            </div>

            {/* Hospital Setting */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <Hospital className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Ambiente Hospitalario Completo
              </h3>
              <p className="text-foreground/80">
                No consultorio básico. Hospital Amerimed con quirófanos, UCI, laboratorio y radiología si se necesita apoyo adicional.
              </p>
            </div>

            {/* Fixed Pricing */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Precio Fijo Sin Sorpresas
              </h3>
              <p className="text-foreground/80">
                {mxn(PRICING.extraccion_cuerpos_extranos.from)} fijos, sin importar complejidad, duración o tipo de objeto. Sin cargos ocultos.
              </p>
            </div>

            {/* Experience */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Experiencia en Casos Complejos
              </h3>
              <p className="text-foreground/80">
                Ha resuelto desde monedas simples hasta prótesis dentales atoradas y espinas de pescado en ubicaciones difíciles.
              </p>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-muted/30 to-background border border-border">
            <h3 className="text-xl font-serif font-bold text-foreground mb-6 text-center">
              Atendemos Emergencias en Toda la Zona Metropolitana de Mérida
            </h3>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-center">
              <div className="p-4">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground">Centro Histórico</h4>
                <p className="text-sm text-foreground/70">15 minutos a Hospital Amerimed</p>
              </div>
              <div className="p-4">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground">Altabrisa</h4>
                <p className="text-sm text-foreground/70">10 minutos por periférico</p>
              </div>
              <div className="p-4">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground">Montebello</h4>
                <p className="text-sm text-foreground/70">8 minutos vía García Ginerés</p>
              </div>
              <div className="p-4">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground">Temozon Norte</h4>
                <p className="text-sm text-foreground/70">20 minutos por Progreso</p>
              </div>
              <div className="p-4">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground">Cholul</h4>
                <p className="text-sm text-foreground/70">25 minutos vía periférico</p>
              </div>
              <div className="p-4">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground">García Ginerés</h4>
                <p className="text-sm text-foreground/70">5 minutos - mismo sector</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-foreground/70">
                No importa desde qué zona de Mérida nos contactes - si es urgencia, coordinamos para atenderte el mismo día.
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
          <Faq routeKey="extraccion" />
        </div>
      </section>
    </>
  )
}
