import Link from "next/link"
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-footer text-footer-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contacto</h3>
          <div className="flex flex-col gap-3 items-stretch">
  <CallButton
    service="footer"
    position="footer"
    className="w-full justify-center !px-2 !py-3 rounded-xl border shadow-sm"
  />
  <WhatsAppButton
    service="footer"
    position="footer"
    className="w-full justify-center !px-2 !py-3 rounded-xl shadow-sm"
  />
</div>
        </div>

        {/* Hours & Address */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Información</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium text-muted-foreground">Horario:</p>
              <p className="text-primary-foreground/90">Lunes a Domingo, 7:00–19:00</p>
              <p className="text-accent-light">Llamadas de emergencia respondidas inmediatamente.</p>
            </div>
            <div>
              <p className="font-medium text-muted-foreground">Dirección:</p>
              <p className="text-primary-foreground/90">
                Hospital Amerimed Mérida, Consultorio 517, Chichí Suárez, 97306 Mérida, Yuc.
              </p>
            </div>
            <div>
              <p className="font-medium text-muted-foreground">Pagos aceptados:</p>
              <p className="text-primary-foreground/90">Tarjeta, Efectivo, Transferencia</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Enlaces Útiles</h3>
          <div className="space-y-2">
            <Link href="/" className="block text-primary-foreground/80 hover:text-link transition-colors">
              Home
            </Link>
            <Link href="/colonoscopia-merida" className="block text-primary-foreground/80 hover:text-link transition-colors">
              Colonoscopia
            </Link>
            <Link href="/endoscopia-merida" className="block text-primary-foreground/80 hover:text-link transition-colors">
              Endoscopia
            </Link>
            <Link href="/cpre-merida" className="block text-primary-foreground/80 hover:text-link transition-colors">
              CPRE
            </Link>
            <Link href="/consultas-digestivas-merida" className="block text-primary-foreground/80 hover:text-link transition-colors">
              Consultas
            </Link>
            <Link
              href="/emergencias-digestivas-merida"
              className="block text-primary-foreground/80 hover:text-link transition-colors"
            >
              Emergencias
            </Link>
            <Link href="/contacto" className="block text-primary-foreground/80 hover:text-link transition-colors">
              Contacto
            </Link>
            <Link href="https://www.omar.doctor" className="block text-primary-foreground/80 hover:text-link transition-colors">
              Cirugia General
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
          <div className="space-y-2">
            <a
              href="https://www.omar.doctor"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary-foreground/80 hover:text-link transition-colors"
            >
              Sitio Web Oficial
            </a>
            <a
              href="https://www.doctoralia.com.mx/omar-quiroz/cirujano-bariatra-cirujano-general-endoscopista/yucatan"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary-foreground/80 hover:text-link transition-colors"
            >
              Doctoralia
            </a>
            <a
              href="https://www.youtube.com/channel/UCCENiT7n0qk8mXt-xBmRxxg"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary-foreground/80 hover:text-link transition-colors"
            >
              YouTube
            </a>
            <a
              href="https://www.facebook.com/dromarquiroz"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary-foreground/80 hover:text-link transition-colors"
            >
              Facebook Personal
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577159683148"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary-foreground/80 hover:text-link transition-colors"
            >
              Facebook Clínica
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t mt-8 pt-8 border-primary-foreground/20">
        <div className="max-w-6xl mx-auto px-4 text-center text-primary-foreground/70 text-sm">
          <p>&copy; {year} Dr. Omar Quiroz - Endoscopia del Mayab. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
