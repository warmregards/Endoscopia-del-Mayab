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
  Shield,
  Users,
} from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews";


export const revalidate = 86400
export const metadata = metaFor("sutura_endoscopica")

export default function SuturaEndoscopicaPage() {
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
                  <span className="text-sm font-medium text-blue-700">Reparación Minimamente Invasiva</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-foreground leading-tight">
                  Sutura Endoscópica en Mérida | Dr. Omar Quiroz - Reparación Segura de Perforaciones
                </h1>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  La sutura endoscópica en Mérida permite reparar defectos gastrointestinales sin cirugía abierta. 
                  El Dr. Omar Quiroz realiza sutura endoscópica en Hospital Amerimed, Mérida, Yucatán, utilizando 
                  dispositivos especializados para cerrar perforaciones, reforzar suturas y reparar fístulas con 
                  técnica mínimamente invasiva.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                    <span className="text-foreground/80">Sedación profunda</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                    <span className="text-foreground/80">Sin cirugía abierta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                    <span className="text-foreground/80">Cotización personalizada</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <CallButton service="sutura" position="hero" />
                      <WhatsAppButton service="sutura" position="hero" />
                </div>
              </div>
            </div>

            {/* Info Cards - Right Side */}
            <div className="w-full lg:w-80 space-y-4">
              {/* Price Card */}
              <div className="p-6 rounded-2xl border-2 border-primary/20 bg-primary/5">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Precio Sutura Endoscópica</h3>
                    <p className="text-2xl font-bold text-primary mb-2">{mxn(PRICING.sutura_endoscopica.from)}</p>
                    <p className="text-sm text-foreground/70">
                      Varía según tipo de defecto y dispositivo utilizado. Cotización clara antes del procedimiento.
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-6 rounded-2xl border border-border bg-background">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent-strong" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Hospital Amerimed</h3>
                    <p className="text-sm text-foreground/80 mb-2">
                      Consultorio 517, Chichí Suárez<br />
                      Mérida, Yucatán
                    </p>
                    <p className="text-sm text-accent-strong font-medium">
                      Servicio a toda la zona metropolitana
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience Card */}
              <div className="p-6 rounded-2xl border border-border bg-background">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-accent-strong" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Técnica Especializada</h3>
                    <p className="text-sm text-foreground/80">
                      Dr. Quiroz - único endoscopista en Mérida con entrenamiento avanzado en sutura endoscópica
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                ¿Por Qué Elegir Sutura Endoscópica en Lugar de Cirugía?
              </h2>
              <p className="text-lg text-foreground/70">
                Reparación precisa de defectos gastrointestinales sin las complicaciones de cirugía abierta
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-2xl border border-border bg-background">
                <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-accent-strong" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  Mínimamente Invasiva
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>¿Qué significa?</strong> Reparación de perforaciones, fístulas y defectos mucosos sin incisiones 
                  externas. Solo requiere acceso endoscópico natural por boca o ano.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>¿Qué ventajas ofrece?</strong> Menor dolor post-operatorio, sin cicatrices externas, 
                  recuperación más rápida y menor riesgo de infección comparado con cirugía abierta.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-background">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  Preservación de Órganos
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>¿Cómo funciona?</strong> Utiliza dispositivos especializados de sutura que permiten cerrar 
                  defectos desde el interior del tracto digestivo, manteniendo la anatomía normal.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>¿Qué la hace especial?</strong> Evita resecciones innecesarias de tejido sano, 
                  preserva la función intestinal normal y reduce significativamente el tiempo de hospitalización.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                <h4 className="font-semibold text-foreground mb-2">
                  ¿Cuándo se necesita sutura endoscópica en Mérida?
                </h4>
                <ul className="text-sm text-foreground/80 space-y-1 list-disc list-inside">
                  <li>Perforaciones post-biopsia o polipectomía</li>
                  <li>Cierre de fístulas digestivas pequeñas</li>
                  <li>Refuerzo de suturas en anastomosis</li>
                  <li>Reparación de defectos mucosos post-resección</li>
                  <li>Cierre de orificios de gastrostomía</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">
                  Lo que dicen nuestros pacientes de Centro, Altabrisa y García Ginerés:
                </h4>
                <p className="text-sm text-foreground/80 italic">
                  "El Dr. Quiroz reparó una perforación durante mi colonoscopia el mismo día. 
                  Sin cirugía, sin dolor, me fui a casa esa misma tarde."
                </p>
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
              Proceso de Sutura Endoscópica - 5 Pasos
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Procedimiento meticuloso que combina precisión técnica con monitoreo continuo en Hospital Amerimed
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 mb-12">
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-foreground mb-2">Evaluación</h3>
              <p className="text-sm text-foreground/80">Valoración endoscópica del defecto - tamaño, ubicación y profundidad</p>
            </div>

            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-foreground mb-2">Preparación</h3>
              <p className="text-sm text-foreground/80">Sedación profunda y posicionamiento del endoscopio terapéutico</p>
            </div>

            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-foreground mb-2">Sutura</h3>
              <p className="text-sm text-foreground/80">Colocación precisa del dispositivo de sutura endoscópica</p>
            </div>

            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-foreground mb-2">Verificación</h3>
              <p className="text-sm text-foreground/80">Confirmación de cierre hermético y integridad de la reparación</p>
            </div>

            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                5
              </div>
              <h3 className="font-semibold text-foreground mb-2">Observación</h3>
              <p className="text-sm text-foreground/80">Monitoreo post-procedimiento según complejidad del caso</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
              <Zap className="h-5 w-5 text-accent-strong" />
              <span className="font-semibold text-foreground">Duración variable</span>
              <span className="text-foreground/70">- 20-45 minutos según complejidad del defecto</span>
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
                  ¿Por Qué la Experiencia Quirúrgica Marca la Diferencia en Sutura Endoscópica?
                </h2>
                
                <p className="text-lg text-foreground/80 leading-relaxed">
                  La mayoría de endoscopistas en Mérida envían perforaciones y defectos complejos directamente a cirugía. 
                  <strong>El Dr. Quiroz es diferente</strong> - como cirujano especializado en endoscopia, puede resolver 
                  casos que otros no se atreven a intentar y ofrecer solución quirúrgica inmediata si la sutura endoscópica no es exitosa.
                </p>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="p-6 rounded-xl bg-accent-strong/5 border border-accent-strong/20">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Target className="h-5 w-5 text-accent-strong" />
                      Técnica Avanzada
                    </h3>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      Entrenamiento especializado en dispositivos de sutura endoscópica incluyendo OverStitch, clips 
                      over-the-scope y suturas transmurales. Conocimiento profundo de anatomía quirúrgica aplicada 
                      a reparación endoscópica.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Manejo de Complicaciones
                    </h3>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      Experiencia única en Mérida para resolver complicaciones intraoperatorias. Si la sutura 
                      endoscópica no es suficiente, puede proceder inmediatamente a reparación quirúrgica sin 
                      derivar a otro especialista.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Costo de Sutura Endoscópica en Mérida - Cotización Personalizada
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Precio transparente según tipo de defecto y dispositivos utilizados
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {/* Factors affecting price */}
            <div className="p-6 rounded-2xl border border-border bg-background text-center">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-6 w-6 text-accent-strong" />
              </div>
              <div className="text-lg font-bold text-foreground mb-2">Tipo de Defecto</div>
              <div className="text-sm text-foreground/70">
                Perforación simple, fístula compleja, refuerzo de sutura
              </div>
            </div>
            
            <div className="p-6 rounded-2xl border border-border bg-background text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div className="text-lg font-bold text-foreground mb-2">Dispositivo Utilizado</div>
              <div className="text-sm text-foreground/70">
                Clips, OverStitch, suturas transmurales especializadas
              </div>
            </div>
            
            <div className="p-6 rounded-2xl border-2 border-accent-strong bg-accent-strong/5 text-center">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/20 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-accent-strong" />
              </div>
              <div className="text-lg font-bold text-accent-strong mb-2">Cotización Clara</div>
              <div className="text-sm text-foreground/70">
                Precio fijo antes del procedimiento, sin sorpresas
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-accent-strong/5 to-primary/5 border border-accent-strong/20">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  ¿Qué Incluye el Costo de Sutura Endoscópica?
                </h3>
                <div className="grid gap-4 md:grid-cols-2 text-left">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                      <span className="text-foreground/80">Procedimiento completo de sutura</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                      <span className="text-foreground/80">Sedación profunda monitorizada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                      <span className="text-foreground/80">Dispositivos de sutura especializados</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                      <span className="text-foreground/80">Quirófano de Hospital Amerimed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                      <span className="text-foreground/80">Observación post-procedimiento</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                      <span className="text-foreground/80">Seguimiento incluido por 30 días</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECOVERY AND CARE */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Recuperación Tras Sutura Endoscópica en Mérida
              </h2>
              <p className="text-lg text-foreground/70">
                Proceso de recuperación optimizado para el retorno rápido a actividades normales
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  Primeras 24 Horas
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-accent-strong" />
                      Inmediato (0-2 horas)
                    </h4>
                    <ul className="text-sm text-foreground/80 space-y-1 list-disc list-inside">
                      <li>Despertar gradual de sedación en sala de recuperación</li>
                      <li>Monitoreo de signos vitales y función digestiva</li>
                      <li>Evaluación de dolor - generalmente mínimo</li>
                      <li>Inicio de hidratación oral si no hay complicaciones</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Activity className="h-4 w-4 text-primary" />
                      Resto del día
                    </h4>
                    <ul className="text-sm text-foreground/80 space-y-1 list-disc list-inside">
                      <li>Dieta líquida clara - agua, té, caldos sin grasa</li>
                      <li>Reposo relativo - caminar suavemente es benéfico</li>
                      <li>Medicamentos para molestias si es necesario</li>
                      <li>Alta hospitalaria mismo día en casos simples</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  Semana de Recuperación
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                    <h4 className="font-semibold text-foreground mb-2">
                      Días 2-3: Progresión Dietética
                    </h4>
                    <p className="text-sm text-foreground/80">
                      Avance gradual a dieta blanda. Evitar alimentos duros, picantes o ácidos. 
                      Masticación cuidadosa y porciones pequeñas.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-2">
                      Días 4-7: Normalización
                    </h4>
                    <p className="text-sm text-foreground/80">
                      Retorno progresivo a dieta normal. Actividad física ligera permitida. 
                      Seguimiento telefónico con el equipo del Dr. Quiroz.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-accent-light/5 to-accent-strong/5 border border-accent-strong/20">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Señales de Alerta - Contactar Inmediatamente
              </h3>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0" />
                  <span className="text-sm text-foreground/80">Dolor abdominal severo o persistente</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0" />
                  <span className="text-sm text-foreground/80">Vómito con sangre o persistente</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0" />
                  <span className="text-sm text-foreground/80">Fiebre mayor a 38°C</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0" />
                  <span className="text-sm text-foreground/80">Distensión abdominal marcada</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-foreground/70 mb-2">Teléfono de emergencias 24/7:</p>
                <CallButton service="sutura" position="urgencia" />
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
              Procedimientos Relacionados en Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              El Dr. Quiroz ofrece múltiples opciones de reparación endoscópica según las necesidades específicas de cada caso
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Cierre de Fístulas */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-accent-strong" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Cierre de Fístulas por Clips
              </h3>
              <p className="text-foreground/80 mb-4">
                Cierre especializado de fístulas digestivas utilizando clips endoscópicos over-the-scope para casos complejos.
              </p>
              <Link 
                href="/cierre-fistulas-clips-endoscopicos-merida"
                className="inline-flex items-center gap-2 text-accent-strong hover:text-accent-strong/80 font-medium"
              >
                Ver detalles 
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>

            {/* EMR */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Microscope className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Resección Endoscópica Mucosa (EMR)
              </h3>
              <p className="text-foreground/80 mb-4">
                Resección de lesiones superficiales que pueden requerir sutura endoscópica para cierre del defecto mucoso.
              </p>
              <Link 
                href="/reseccion-endoscopica-mucosa-emr-merida"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
              >
                Ver procedimiento 
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>

            {/* Gastrostomía */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-accent-strong" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Gastrostomía Endoscópica (PEG)
              </h3>
              <p className="text-foreground/80 mb-4">
                Colocación de sonda de alimentación que puede requerir sutura endoscópica para cierre posterior del orificio.
              </p>
              <Link 
                href="/gastrostomia-endoscopica-peg-merida"
                className="inline-flex items-center gap-2 text-accent-strong hover:text-accent-strong/80 font-medium"
              >
                Más información 
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION CTA */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-accent-strong/5 to-primary/5 border border-accent-strong/20">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-accent-strong/10 flex items-center justify-center mx-auto">
                  <Stethoscope className="h-8 w-8 text-accent-strong" />
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-3xl font-serif font-bold text-foreground">
                    ¿Necesitas Sutura Endoscópica en Mérida?
                  </h2>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    El Dr. Omar Quiroz evalúa cada caso individualmente y ofrece cotización transparente. 
                    Muchos procedimientos pueden realizarse el mismo día del diagnóstico endoscópico.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <CallButton service="sutura" position="cta section" />
                      <WhatsAppButton service="sutura" position="cta section" />
                </div>

                <div className="text-sm text-foreground/60 space-y-1">
                  <p>📍 Hospital Amerimed, Consultorio 517 - Mérida, Yucatán</p>
                  <p>🕒 Atención de emergencias 24/7 - Citas regulares de lunes a viernes</p>
                  <p>💰 Precios transparentes - Cotización antes del procedimiento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT DR. OMAR */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Dr. Omar Quiroz - Especialista en Sutura Endoscópica</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight">
                  Más de 200 suturas endoscópicas realizadas con técnica de precisión quirúrgica
                </h2>
                
                <p className="text-lg text-foreground/80 leading-relaxed">
                  El Dr. Quiroz combina su experiencia quirúrgica con técnicas endoscópicas avanzadas para realizar 
                  suturas endoscópicas que otros especialistas no pueden ofrecer. Como cirujano certificado en endoscopia, 
                  <strong>único especialista en Mérida</strong> con entrenamiento formal en dispositivos de sutura endoscópica 
                  y manejo de complicaciones complejas.
                </p>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="p-6 rounded-xl bg-accent-strong/5 border border-accent-strong/20">
                    <h3 className="font-semibold text-foreground mb-3">Formación Especializada</h3>
                    <ul className="text-sm text-foreground/80 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        Cirugía General - UNAM con especialización en Florida
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        Endoscopia Digestiva - Certificación nacional
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        Entrenamiento en OverStitch y clips OTSC
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                    <h3 className="font-semibold text-foreground mb-3">Experiencia Clínica</h3>
                    <ul className="text-sm text-foreground/80 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        +200 suturas endoscópicas exitosas
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Manejo de perforaciones de emergencia
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Reparación de fístulas complejas
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PATIENT TESTIMONIAL */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-accent-light/5 to-accent-strong/5 border border-accent-strong/20">
              <div className="text-center max-w-3xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-accent-strong/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-accent-strong" />
                </div>
                <blockquote className="text-xl font-medium text-foreground mb-4 leading-relaxed">
                  "Durante mi colonoscopia se presentó una pequeña perforación. El Dr. Quiroz la reparó inmediatamente 
                  con sutura endoscópica. Sin cirugía, sin internamiento, me fui a casa el mismo día."
                </blockquote>
                <p className="text-foreground/70 font-medium">
                  Testimonio real de paciente de Montebello tratado en Hospital Amerimed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL AREAS SERVED */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Sutura Endoscópica para Toda la Zona Metropolitana de Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Atendemos pacientes de todas las colonias y municipios cercanos con la misma calidad y profesionalismo
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Centro Histórico y Norte */}
            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-accent-strong" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Centro y Norte de Mérida
              </h3>
              <p className="text-sm text-foreground/80 mb-3">
                Fácil acceso desde Centro Histórico, García Ginerés, Itzimná, Campestre y colonias del norte de la ciudad.
              </p>
              <div className="text-sm text-accent-strong font-medium">
                → 15-20 minutos en auto a Hospital Amerimed
              </div>
            </div>

            {/* Zona Moderna */}
            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Zona Moderna y Altabrisa
              </h3>
              <p className="text-sm text-foreground/80 mb-3">
                Servicio a Altabrisa, Montebello, Temozon Norte, La Isla y desarrollos residenciales modernos.
              </p>
              <div className="text-sm text-primary font-medium">
                → 10-15 minutos desde Altabrisa y Gran Plaza
              </div>
            </div>

            {/* Municipios Cercanos */}
            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-accent-strong" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Municipios Metropolitanos
              </h3>
              <p className="text-sm text-foreground/80 mb-3">
                Atención a Cholul, Conkal, Umán, Kanasín y municipios de la zona metropolitana de Mérida.
              </p>
              <div className="text-sm text-accent-strong font-medium">
                → Mismo día - consulta y procedimiento si es necesario
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                No Dejes que una Perforación se Convierta en Cirugía Mayor
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                La sutura endoscópica permite reparación inmediata de defectos gastrointestinales. 
                El Dr. Quiroz ofrece evaluación inmediata y cotización transparente en Hospital Amerimed, 
                Mérida. Disponible para emergencias 24/7.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <CallButton service="sutura" position="final cta" />
                      <WhatsAppButton service="sutura" position="final cta" />
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
          <Faq routeKey="sutura_endoscopica" />
        </div>
      </section>
    </>
  )
}
