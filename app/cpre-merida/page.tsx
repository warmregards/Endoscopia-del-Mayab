import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn } from "@/lib/pricing"
import Image from "next/image"
import Link from "next/link"
import { Stethoscope, MapPin, Phone, MessageCircle, Globe, CheckCircle2, ShieldCheck, Microscope, Hospital, Clock, Star, Award, Users, Heart, AlertTriangle, Activity, Camera, Search, Brain, Target, TrendingUp, UserCheck, Zap, Users2, FileText } from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleReviews from "@/components/GoogleReviews";

export const revalidate = 86400
export const metadata = metaFor("cpre")

export default function CprePage() {
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
                  <Zap className="h-4 w-4 text-accent-strong" />
                  <span className="text-sm font-medium text-foreground">100+ CPREs Anuales</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-foreground leading-tight">
                  CPRE en Mérida - $24,700 Pesos Fijos | Dr. Omar Quiroz
                </h1>
                
                <p className="text-xl text-accent-strong font-semibold">
                  Especialista en CPRE - Problemas biliares sin cirugía abierta
                </p>
                
                <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                  <p>
                    ¿Te dijeron que necesitas cirugía de vesícula? La CPRE puede evitar la operación. Dr. Omar Quiroz - uno de los pocos especialistas en Yucatán entrenado en esta técnica avanzada.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Sedación profunda incluida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Tecnología SpyGlass Olympus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Extracción cálculos incluida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Stents si necesario</span>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="CPRE" position="hero" />
                      <WhatsAppButton service="CPRE" position="hero" />
                </div>
              </div>
            </div>
            
            {/* Image - Right Side */}
            <div className="flex-1 lg:max-w-md">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-strong/20 to-primary/20 rounded-3xl transform rotate-3" />
                <div className="relative bg-background rounded-3xl p-8 border border-border shadow-2xl">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-accent-strong/10 flex items-center justify-center mx-auto">
                      <ShieldCheck className="h-8 w-8 text-accent-strong" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-foreground/60">Dr. Omar Quiroz</div>
                      <div className="text-2xl font-bold text-accent-strong">{mxn(PRICING.cpre.from)} pesos fijos</div>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-background border border-border">
                    <h3 className="text-lg font-serif font-bold text-foreground mb-4 text-center">
                      Todo incluido en {mxn(PRICING.cpre.from)} pesos
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Sedación profunda</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Duodenoscopio especializado</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Fluoroscopía tiempo real</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Extracción cálculos</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Stents si necesario</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                        <span className="text-sm text-foreground/80">Seguimiento 24h</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 rounded-xl bg-accent-light/10 border border-accent-light/20">
                      <h4 className="font-semibold text-foreground mb-1 text-sm">¿Por qué más accesible?</h4>
                      <p className="text-xs text-foreground/80">
                        Sin overhead hospitalario. Acceso directo equipos sin intermediarios.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS CPRE SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Qué es la CPRE? - Estudio Biliar Especializado
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Colangiopancreatografía Retrógrada Endoscópica - Técnica que pocos dominan
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center mb-16">
            {/* Explanation */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  Estudio CPRE - Endoscopia + Rayos X para Conductos Biliares
                </h3>
                
                <div className="p-6 rounded-xl bg-accent-light/10 border border-accent-light/20">
                  <h4 className="font-semibold text-foreground mb-3">CPRE = Colangiopancreatografía Retrógrada Endoscópica</h4>
                  <div className="space-y-3 text-foreground/80">
                    <p>• Duodenoscopio especializado hasta intestino</p>
                    <p>• Contraste en conductos biliares</p>
                    <p>• Rayos X tiempo real (fluoroscopía)</p>
                    <p>• Ve y trata obstrucciones mismo día</p>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-3">Diferencia clave:</h4>
                  <p className="text-foreground/80">
                    Endoscopia normal solo "ve" - <strong>CPRE "trata"</strong> problemas biliares sin cirugía abierta
                  </p>
                </div>
              </div>
            </div>

            {/* Patient Story */}
            <div className="bg-gradient-to-br from-background to-muted/30 p-8 rounded-2xl border border-border">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent-strong/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-accent-strong" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Testimonio Real</h4>
                    <p className="text-sm text-foreground/60">Carmen, 54 años</p>
                  </div>
                </div>
                <blockquote className="text-foreground/80 italic text-lg">
                  "Evité cirugía de vesícula gracias a CPRE. Dr. Quiroz sacó 3 cálculos del conducto sin abrir abdomen"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              CPRE Precio en Mérida - $24,700 Todo Incluido
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Costo CPRE fijo - Sin sorpresas ni cargos ocultos
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {/* Dr. Omar Price */}
            <div className="p-6 rounded-2xl border-2 border-accent-strong bg-accent-strong/5 text-center order-2 md:order-1">
              <div className="text-lg font-bold text-accent-strong mb-2">Dr. Omar Quiroz</div>
              <div className="text-3xl font-bold text-accent-strong">{mxn(PRICING.cpre.from)} pesos</div>
              <p className="text-sm text-accent-strong/80 mt-2">Todo incluido</p>
            </div>

            {/* Other Specialists */}
            <div className="p-6 rounded-2xl border border-border bg-background text-center order-1 md:order-2">
              <div className="text-lg font-bold text-foreground/60 mb-2">Otros Especialistas</div>
              <div className="text-2xl font-bold text-foreground/60 line-through">$35,000+ pesos</div>
              <p className="text-sm text-foreground/50 mt-2">+ extras + estudios</p>
            </div>

            {/* Hospital Option */}
            <div className="p-6 rounded-2xl border border-border bg-background text-center order-3">
              <div className="text-lg font-bold text-foreground/60 mb-2">Hospitales</div>
              <div className="text-2xl font-bold text-foreground/60 line-through">$30,000+ pesos</div>
              <p className="text-sm text-foreground/50 mt-2">+ sobrecargos</p>
            </div>
          </div>

          {/* What's Included */}
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-muted/30 to-background border border-border">
            <h3 className="text-xl font-serif font-bold text-foreground mb-6 text-center">
              ¿Qué incluye exactamente?
            </h3>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Sedación profunda con anestesiólogo</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Duodenoscopio + fluoroscopía</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Extracción cálculos biliares</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Colocación stents si necesario</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Materiales y equipo estéril</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <span className="text-foreground/80">Seguimiento hospitalario 24h</span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-accent-light/10 border border-accent-light/20 text-center">
              <h4 className="font-semibold text-foreground mb-2">¿Por qué más accesible?</h4>
              <p className="text-sm text-foreground/80">
                Consulta independiente sin deudas hospitalarias. Acceso directo a fluoroscopía y quirófano sin sobrecargos administrativos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPYGLASS TECHNOLOGY */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Spyglass CPRE - Tecnología Avanzada Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Visualización directa de conductos biliares - Precisión máxima
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            {/* Technology Details */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="font-semibold text-foreground mb-4">SpyGlass Olympus - Ve Directamente</h3>
                <div className="space-y-3 text-foreground/80">
                  <p>• Otros endoscopistas trabajan "a ciegas" solo con rayos X</p>
                  <p>• SpyGlass permite ver directamente dentro conductos</p>
                  <p>• Mayor precisión extracción cálculos difíciles</p>
                  <p>• Menos tiempo procedimiento, menos complicaciones</p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                <h3 className="font-semibold text-foreground mb-4">Casos Complejos</h3>
                <p className="text-foreground/80">
                  Pacientes vienen después CPRE fallidas otros lugares. SpyGlass + experiencia Dr. Quiroz resuelve lo que otros no pueden.
                </p>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-xl border border-border bg-background text-center">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground mb-1">Mayor Precisión</h4>
                  <p className="text-sm text-foreground/70">Extracción cálculos difíciles</p>
                </div>

                <div className="p-4 rounded-xl border border-border bg-background text-center">
                  <Clock className="h-8 w-8 text-accent-strong mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground mb-1">Menos Tiempo</h4>
                  <p className="text-sm text-foreground/70">Procedimiento más eficiente</p>
                </div>

                <div className="p-4 rounded-xl border border-border bg-background text-center">
                  <ShieldCheck className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground mb-1">Menos Riesgo</h4>
                  <p className="text-sm text-foreground/70">Menor tasa complicaciones</p>
                </div>

                <div className="p-4 rounded-xl border border-border bg-background text-center">
                  <Target className="h-8 w-8 text-accent-strong mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground mb-1">Mejores Resultados</h4>
                  <p className="text-sm text-foreground/70">Éxito casos complejos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVATE PRACTICE BENEFITS */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                <UserCheck className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">CPRE Particular Mérida</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight">
                  CPRE Particular - Ventajas Consulta Independiente
                </h2>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-strong mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Comunicación directa</p>
                    <p className="text-sm text-foreground/70">
                      Hablas con Dr. Quiroz, no residentes. Explica procedimiento y resultados personalmente
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Horarios flexibles</p>
                    <p className="text-sm text-foreground/70">
                      Emergencias biliares fines de semana. No esperas lunes si urgencia
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-strong mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Seguimiento personal</p>
                    <p className="text-sm text-foreground/70">
                      Dr. Quiroz revisa evolución. WhatsApp directo para dudas post-CPRE
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Atención bilingüe</p>
                    <p className="text-sm text-foreground/70">
                      Perfecto expatriados Cholul/Norte. Explicaciones claras inglés sobre procedimientos complejos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEDATION COMFORT */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              CPRE con Sedación en Mérida - Procedimiento Cómodo
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Sedación profunda para tu comodidad durante procedimiento complejo
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            {/* Sedation Details */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="font-semibold text-foreground mb-4">Sedación Profunda Segura</h3>
                <div className="space-y-3 text-foreground/80">
                  <p>• Anestesiólogo certificado maneja sedación</p>
                  <p>• Te duermes cómodamente durante procedimiento</p>
                  <p>• Monitoreo continuo signos vitales</p>
                  <p>• Equipo emergencia disponible</p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-4">Recuperación:</h3>
                <p className="text-foreground/80">
                  2-3 horas observación. Mayoría pacientes se va caminando mismo día.
                </p>
              </div>
            </div>

            {/* Patient Testimonial */}
            <div className="bg-gradient-to-br from-background to-muted/30 p-8 rounded-2xl border border-border">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent-strong/10 flex items-center justify-center">
                    <Star className="h-6 w-6 text-accent-strong" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Experiencia Paciente</h4>
                    <p className="text-sm text-foreground/60">Roberto, 48 años</p>
                  </div>
                </div>
                <blockquote className="text-foreground/80 italic text-lg">
                  "No sentí nada. Me dormí con dolor terrible vesícula y desperté sin molestias por primera vez en meses"
                </blockquote>
              </div>
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
                <span className="font-semibold text-foreground">Dr. Omar Quiroz - Cirujano Especialista CPRE</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight">
                  CPRE Merida - Experiencia Quirúrgica Única
                </h2>
                
                <p className="text-lg text-foreground/80 leading-relaxed">
                  ¿Por qué cirujano hace CPRE? Otros endoscopistas envían casos difíciles a cirugía. Dr. Quiroz resuelve complicaciones que otros no pueden manejar.
                </p>
              </div>
            </div>

            {/* Experience Stats */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center p-6 rounded-2xl border border-border bg-background">
                <div className="text-3xl font-bold text-accent-strong mb-2">100+</div>
                <div className="text-sm font-medium text-foreground/70">CPREs Anuales</div>
              </div>
              <div className="text-center p-6 rounded-2xl border border-border bg-background">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm font-medium text-foreground/70">Años Experiencia</div>
              </div>
              <div className="text-center p-6 rounded-2xl border border-border bg-background">
                <div className="text-3xl font-bold text-accent-strong mb-2">&lt;0.1%</div>
                <div className="text-sm font-medium text-foreground/70">Complicaciones</div>
              </div>
            </div>

            {/* Certifications */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Certificaciones:</p>
                    <div className="text-sm text-foreground/70 space-y-1">
                      <p>• Consejo Mexicano Cirugía General</p>
                      <p>• Colegio Mexicano Gastroenterología</p>
                      <p>• Entrenamiento UNAM + University of Florida</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-strong mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Casos referencia:</p>
                    <p className="text-sm text-foreground/70">
                      Médicos península refieren casos complejos CPRE que fallaron otros centros
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN YOU NEED CPRE */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Cuándo Necesitas CPRE? - CPRE en Mérida Yucatán
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Indicaciones médicas para procedimiento CPRE
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Gallstones */}
            <div className="p-6 rounded-xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-accent-strong" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Cálculos Conducto Biliar</h3>
              <div className="space-y-2 text-sm text-foreground/80">
                <p>• Piedras atoradas salida vesícula</p>
                <p>• Dolor intenso + ictericia</p>
                <p>• Náusea severa</p>
              </div>
            </div>

            {/* Emergencies */}
            <div className="p-6 rounded-xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Emergencias Biliares</h3>
              <div className="space-y-2 text-sm text-foreground/80">
                <p>• Colangitis (infección)</p>
                <p>• Pancreatitis por cálculos</p>
                <p>• Ictericia severa</p>
              </div>
            </div>

            {/* Pre-Surgery */}
            <div className="p-6 rounded-xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-accent-strong" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Antes Cirugía Vesícula</h3>
              <div className="space-y-2 text-sm text-foreground/80">
                <p>• Limpiar conductos</p>
                <p>• Evitar complicaciones</p>
                <p>• Cirugía más segura</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCEDURE STEPS */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Procedimiento CPRE Paso a Paso - Qué Esperar
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Proceso completo desde preparación hasta recuperación
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Before */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-foreground mb-3">Antes CPRE</h3>
              <div className="space-y-2 text-sm text-foreground/80">
                <p>• Análisis sangre + evaluación</p>
                <p>• Ayuno 8 horas</p>
                <p>• Llegar acompañado</p>
              </div>
            </div>

            {/* During */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-foreground mb-3">Durante CPRE</h3>
              <div className="space-y-2 text-sm text-foreground/80">
                <p>• Sedación profunda</p>
                <p>• Duodenoscopio a duodeno</p>
                <p>• Contraste + rayos X</p>
                <p>• 30-90 min según caso</p>
              </div>
            </div>

            {/* After */}
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-foreground mb-3">Después CPRE</h3>
              <div className="space-y-2 text-sm text-foreground/80">
                <p>• Observación 2-3 horas</p>
                <p>• Resultados inmediatos</p>
                <p>• Instrucciones detalladas</p>
                <p>• Seguimiento telefónico</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
              <Zap className="h-5 w-5 text-accent-strong" />
              <span className="font-semibold text-foreground">Duración variable:</span>
              <span className="text-foreground/70">30-90 minutos según complejidad caso</span>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY CPRE */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent-strong/10 border border-accent-strong/20">
                <AlertTriangle className="h-5 w-5 text-accent-strong" />
                <span className="font-semibold text-foreground">Emergencias CPRE Mérida</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight">
                  CPRE Emergencia - Disponible Fines de Semana
                </h2>
              </div>
            </div>

            {/* Emergency Conditions */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">Colangitis Aguda</h3>
                <p className="text-sm text-foreground/80">
                  Infección biliar requiere CPRE urgente 24/7
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">Pancreatitis Biliar</h3>
                <p className="text-sm text-foreground/80">
                  Cálculos causan pancreatitis grave. CPRE urgente salva vidas
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">Ictericia Severa</h3>
                <p className="text-sm text-foreground/80">
                  Bloqueo biliar completo. CPRE resuelve obstrucción rápido
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-50 border border-red-200">
                <Phone className="h-5 w-5 text-red-600" />
                <span className="font-semibold text-foreground">Contacto emergencia:</span>
                <span className="text-foreground/70">[Teléfono] - Respuesta inmediata urgencias biliares</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL EXPERTISE */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              CPRE en Mérida Yucatán - Especialista Único
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Entrenamiento especializado - Casos referencia toda península
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Training & Coverage */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Entrenamiento especializado:</p>
                    <p className="text-sm text-foreground/70">
                      CPRE estudiada centros referencia UNAM y Florida. Técnica que pocos dominan sureste mexicano
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-strong mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Pacientes península:</p>
                    <p className="text-sm text-foreground/70">
                      Vienen Progreso, Izamal, Valladolid, Campeche. Médicos interior refieren casos complejos
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                <Clock className="h-5 w-5 text-accent-strong" />
                <span className="font-semibold text-foreground">Disponibilidad emergencia:</span>
                <span className="text-foreground/70">CPRE urgente fines de semana casos ictericia severa</span>
              </div>
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
                Agendar CPRE - Consulta Valoración Disponible
              </h2>
              <p className="text-lg text-foreground/70">
                Evaluación previa - Dr. Quiroz explica si CPRE mejor opción que cirugía
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">📞 Teléfono</h3>
                <p className="text-sm text-foreground/70">[Número] - Llamadas directas consultorio</p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <MessageCircle className="h-8 w-8 text-accent-strong mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">💬 WhatsApp</h3>
                <p className="text-sm text-foreground/70">[Número] - Respuesta rápida programar</p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">📍 Centro Mérida</h3>
                <p className="text-sm text-foreground/70">Fácil acceso García Ginerés, Montebello</p>
              </div>
            </div>

            {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="CPRE" position="cta section" />
                      <WhatsAppButton service="CPRE" position="cta section" />
                </div>

            {/* Additional Info */}
            <div className="grid gap-4 md:grid-cols-2 mt-8">
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">¿Primera vez CPRE?</h4>
                <p className="text-sm text-foreground/80">
                  Consulta explica procedimiento completo, riesgos mínimos, beneficios específicos tu caso
                </p>
              </div>

              <div className="p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                <h4 className="font-semibold text-foreground mb-2">Emergencias</h4>
                <p className="text-sm text-foreground/80">
                  Dolor biliar severo, ictericia, fiebre. Atención inmediata disponible
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
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProceduresGrid />
        </div>
      </section>

      {/* FAQ LIST COMPONENT */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Faq routeKey="cpre" />
        </div>
      </section>
    </>
  )
}
