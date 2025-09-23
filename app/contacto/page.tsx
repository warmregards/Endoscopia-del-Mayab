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
  Users2
} from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews";
import { inter, montserrat } from "@/app/fonts";


export const revalidate = 86400
export const metadata = metaFor("contacto")

export default function ContactoPage() {
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
                  <Calendar className="h-4 w-4 text-accent-strong" />
                  <span className="text-sm font-medium text-foreground">Atención Inmediata Disponible</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-foreground leading-tight">
                  Contacto - Agendar Cita Endoscopia y Colonoscopia en Mérida
                </h1>

                <p className="text-xl text-accent-strong font-semibold">
                  Contacto directo con Dr. Omar Quiroz - Respuesta inmediata para emergencias digestivas
                </p>

                <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Único endoscopista disponible fines de semana</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Atención de emergencias 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Precios fijos sin sorpresas</span>
                  </div>
                </div>
              </div>

              {/* Emergency Alert */}
              <div className="p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Urgencias Digestivas 24/7</h3>
                    <p className="text-sm text-foreground/80">
                      ¿Dolor severo de estómago? ¿Sangrado digestivo? ¿Sospecha de úlcera? No esperes hasta el lunes. 
                      Llamar ahora: 999-236-0153
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/50 shadow-md">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-strong/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-accent-strong" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-foreground">999-236-0153</div>
                    <div className="text-sm text-foreground/70">Emergencias 24/7</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/50 shadow-md">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-light/10 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-accent-strong" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-foreground">WhatsApp</div>
                    <div className="text-sm text-foreground/70">Respuesta en minutos</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/50 shadow-md">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-foreground">Citas rápidas</div>
                    <div className="text-sm text-foreground/70">Esta misma semana</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <CallButton />
                <WhatsAppButton />
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute" />
                <Image
                  src="/schedule-now.webp"
                  alt="Dr. Omar Quiroz - Contacto Endoscopia Mérida"
                  width={600}
                  height={400}
                  className="relative w-full max-w-md lg:max-w-lg h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-accent-light/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Dr. Omar Quiroz - Especialista en Endoscopia Digestiva
            </h2>
            <p className="text-lg text-foreground/70">
              Cirujano certificado con más de 10 años de experiencia en Mérida
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-border bg-background/80 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Hospital className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-foreground">
                      Información de Contacto
                    </h3>
                    <p className="text-foreground/70">Atención personalizada</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent-strong" />
                    <div>
                      <div className="font-medium text-foreground">999-236-0153</div>
                      <div className="text-sm text-foreground/70">Línea directa del doctor</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-accent-strong" />
                    <div>
                      <div className="font-medium text-foreground">WhatsApp: 999-236-0153</div>
                      <div className="text-sm text-foreground/70">Respuesta en minutos</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent-strong" />
                    <div>
                      <div className="font-medium text-foreground">Consultorio Mérida</div>
                      <div className="text-sm text-foreground/70">Centro médico especializado</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-accent-strong" />
                    <div>
                      <div className="font-medium text-foreground">Horarios Flexibles</div>
                      <div className="text-sm text-foreground/70">Lunes a domingo, emergencias 24/7</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Quick Access */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-xl border border-border bg-background/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="h-5 w-5 text-accent-strong" />
                    <span className="font-semibold text-foreground">Endoscopia</span>
                  </div>
                  <p className="text-foreground/80">{mxn(PRICING.endoscopia.from)} pesos fijo</p>
                </div>
                
                <div className="p-4 rounded-xl border border-border bg-background/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Search className="h-5 w-5 text-accent-strong" />
                    <span className="font-semibold text-foreground">Colonoscopia</span>
                  </div>
                  <p className="text-foreground/80">{mxn(PRICING.colonoscopia.from)} pesos fijo</p>
                </div>
                
                <div className="p-4 rounded-xl border border-border bg-background/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="h-5 w-5 text-accent-strong" />
                    <span className="font-semibold text-foreground">CPRE</span>
                  </div>
                  <p className="text-foreground/80">{mxn(PRICING.cpre.from)} pesos</p>
                </div>
                
                <div className="p-4 rounded-xl border border-border bg-background/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="h-5 w-5 text-accent-strong" />
                    <span className="font-semibold text-foreground">Emergencias</span>
                  </div>
                  <p className="text-foreground/80">Disponible 24/7</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <CallButton />
                <WhatsAppButton />
              </div>
            </div>

            {/* Location & Map */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-border bg-background/80 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent-strong" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-foreground">
                      Ubicación en Mérida
                    </h3>
                    <p className="text-foreground/70">Fácil acceso y estacionamiento</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Navigation className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Centro Médico Especializado</div>
                      <div className="text-sm text-foreground/70">Zona norte de Mérida</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users2 className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Estacionamiento gratuito</div>
                      <div className="text-sm text-foreground/70">Espacios amplios disponibles</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Fácil acceso desde periférico</div>
                      <div className="text-sm text-foreground/70">Cerca de principales avenidas</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="p-6 rounded-2xl border border-border bg-background/80 backdrop-blur-sm">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2246452050617!2d-89.55689432227041!3d20.98363028932237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f567136033f05e9%3A0xe0f304c9458a28b2!2sEndoscopia%20del%20Mayab!5e0!3m2!1sen!2smx!4v1756155121463!5m2!1sen!2smx"

                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Por Qué Elegir Endoscopia del Mayab
            </h2>
            <p className="text-lg text-foreground/70">
              Experiencia, tecnología y atención personalizada en Mérida
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-6 rounded-2xl border border-border bg-background/50">
              <div className="w-16 h-16 rounded-2xl bg-accent-strong/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Especialista Certificado</h3>
              <p className="text-foreground/70">Triple certificación en cirugía y endoscopia</p>
            </div>

            <div className="text-center p-6 rounded-2xl border border-border bg-background/50">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Disponibilidad Única</h3>
              <p className="text-foreground/70">Único endoscopista disponible fines de semana</p>
            </div>

            <div className="text-center p-6 rounded-2xl border border-border bg-background/50">
              <div className="w-16 h-16 rounded-2xl bg-accent-light/10 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Precios Transparentes</h3>
              <p className="text-foreground/70">Sin cargos ocultos ni sorpresas</p>
            </div>

            <div className="text-center p-6 rounded-2xl border border-border bg-background/50">
              <div className="w-16 h-16 rounded-2xl bg-accent-strong/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Más de 10 Años</h3>
              <p className="text-foreground/70">Experiencia comprobada en Mérida</p>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOADABLE RESOURCES SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-accent-light/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Recursos y Guías para Pacientes
            </h2>
            <p className="text-lg text-foreground/70">
              Descarga información útil para tu procedimiento
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-2xl border border-border bg-background/80 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center flex-shrink-0">
                  <Download className="h-6 w-6 text-accent-strong" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Guía de Preparación Colonoscopia</h3>
                  <p className="text-foreground/70 mb-4">Instrucciones paso a paso para una preparación exitosa</p>
                  <a
                    href="/colonoscopia-preparacion.pdf"
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-strong text-accent-strong-foreground font-medium hover:bg-accent-strong/90 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Descargar PDF
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background/80 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Qué Esperar - Endoscopia</h3>
                  <p className="text-foreground/70 mb-4">Todo sobre el procedimiento de endoscopia superior</p>
                  <a
                    href="/endoscopia-informacion.pdf"
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Descargar PDF
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background/80 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-light/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-accent-strong" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cuidados Post-Procedimiento</h3>
                  <p className="text-foreground/70 mb-4">Recomendaciones para después de tu endoscopia</p>
                  <a
                    href="/cuidados-post-endoscopia.pdf"
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-light text-accent-light-foreground font-medium hover:bg-accent-light/90 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Descargar PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCEDURES GRID COMPONENT */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProceduresGrid />
        </div>
      </section>
    </>
  )
}
