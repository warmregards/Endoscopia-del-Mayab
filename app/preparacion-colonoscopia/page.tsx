"use client"

import { useState, useEffect } from "react";
import { Calendar, Phone, FileText } from "lucide-react";

export default function DynamicColonoscopyPrep() {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => document.head.contains(meta) && document.head.removeChild(meta);
  }, []);

  const calculateTimes = () => {
    if (!appointmentDate || !appointmentTime) return null;
    const appointment = new Date(`${appointmentDate}T${appointmentTime}`);
    const fastingStart = new Date(appointment.getTime() - 4 * 60 * 60 * 1000);
    const prepStart = new Date(appointment.getTime() - 18 * 60 * 60 * 1000);
    const threeDaysBefore = new Date(appointment.getTime() - 3 * 24 * 60 * 60 * 1000);
    const oneDayBefore = new Date(appointment.getTime() - 24 * 60 * 60 * 1000);
    prepStart.setHours(18, 0, 0, 0);
    return { appointment, fastingStart, prepStart, threeDaysBefore, oneDayBefore };
  };

  const formatTime = (d: Date) =>
    d.toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit", hour12: false });

  const formatDate = (d: Date) =>
    d.toLocaleDateString("es-MX", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  const handleGenerateInstructions = () => {
    if (appointmentDate && appointmentTime && patientName) setShowInstructions(true);
  };

  // ---- Print filename: "<first>-colonoscopia-<mes>-<d��a>-<HHmm>"
  const generateFileName = () => {
    const t = calculateTimes();
    if (!t || !patientName) return "colonoscopia";
    const months = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
    const first = patientName.trim().split(/\s+/)[0].toLowerCase();
    const month = months[t.appointment.getMonth()];
    const day = t.appointment.getDate();
    const hh = t.appointment.getHours().toString().padStart(2, "0");
    const mm = t.appointment.getMinutes().toString().padStart(2, "0");
    return `${first}-colonoscopia-${month}-${day}-${hh}${mm}`;
  };

  const handleSavePDF = () => {
    document.title = generateFileName();
    window.print();
  };

  const handleBack = () => setShowInstructions(false);

  // ---------- Pre-instructions (hidden on print) ----------
  if (!showInstructions) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8 print:hidden">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold">EDM</div>
              <div>
                <h1 className="text-2xl font-bold text-teal-600">ENDOSCOPIA DEL MAYAB</h1>
                <p className="text-gray-600">Dr. Omar Quiroz</p>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Preparación Personalizada para Colonoscopia</h2>
            <p className="text-gray-600">Ingrese la fecha y hora de su cita para recibir instrucciones personalizadas</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border p-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre del paciente</label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Ej: María González López"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Fecha de su cita</label>
                <input
                  type="date"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Hora de su cita</label>
                <input
                  type="time"
                  value={appointmentTime}
                  onChange={(e) => setAppointmentTime(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            </div>

            <button
              onClick={handleGenerateInstructions}
              disabled={!appointmentDate || !appointmentTime || !patientName}
              className="w-full bg-teal-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              Generar Instrucciones Personalizadas
            </button>

            <div className="text-center pt-4 border-t">
              <div className="flex items-center justify-center gap-2 text-teal-600">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">(999) 236-0153</span>
              </div>
              <p className="text-gray-600 text-sm mt-1">Hospital Amerimed, Consultorio 517 • WhatsApp disponible</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------- Generated instructions (print ONLY this) ----------
  const times = calculateTimes();
  if (!times) return null;

  return (
    <div className="min-h-screen bg-white">
      <div id="print-area" className="max-w-4xl mx-auto p-8 print:p-4">
        {/* Header (smaller in print, tighter spacing) */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-teal-600">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold">EDM</div>
            <div>
              <h1 className="text-lg font-bold text-teal-600 leading-tight">ENDOSCOPIA DEL MAYAB</h1>
              <p className="text-gray-600 text-xs leading-tight">Dr. Omar Quiroz</p>
            </div>
          </div>
          <div className="text-right text-xs text-gray-600 leading-tight">
            <div className="text-teal-600 font-semibold text-sm">(999) 236-0153</div>
            <div>Hospital Amerimed, Consultorio 517</div>
            <div>Chichí Suárez, Mérida, Yucatán</div>
          </div>
        </div>

        <h2 className="text-xl font-extrabold text-gray-800 text-center mb-4 leading-tight">
          Guía Personalizada - Preparación para Colonoscopia
        </h2>

        {/* Action Buttons (not printed) */}
        <div className="print:hidden mb-5">
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Calendar className="h-4 w-4" />
              Cambiar Fecha/Hora
            </button>
            <button
              onClick={handleSavePDF}
              className="flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              <FileText className="h-4 w-4" />
              Guardar como PDF
            </button>
          </div>
        </div>

        {/* Appointment Info */}
        <section className="avoid-break bg-teal-50 border border-teal-200 rounded-lg p-4 mb-5 text-center">
          <h3 className="font-semibold text-teal-700 text-xs mb-2">Cita de {patientName}</h3>
          <p className="text-base font-bold text-teal-800">
            {formatDate(times.appointment)} a las {formatTime(times.appointment)}
          </p>
        </section>

        {/* Timeline */}
        <section className="avoid-break mb-5">
          <h3 className="text-sm font-semibold text-gray-800 mb-3 p-3 bg-gray-50 border-l-4 border-teal-600 rounded">
            Su Cronograma Personalizado
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: formatDate(times.threeDaysBefore), text: "Suspender medicamentos con hierro, vitaminas y suplementos" },
              { label: formatDate(times.oneDayBefore), text: `Dieta líquida clara + iniciar preparación a las ${formatTime(times.prepStart)}` },
              { label: "Día del Estudio", text: `Ayuno desde las ${formatTime(times.fastingStart)}` },
            ].map((item, i) => (
              <div key={i} className="avoid-break bg-gray-50 border rounded-lg p-4 text-center">
                <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">{i + 1}</div>
                <h4 className="font-semibold text-gray-800 text-xs mb-2 leading-snug">{item.label}</h4>
                <p className="text-xs text-gray-600 leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Diet (always side-by-side) */}
        <section className="avoid-break mb-5">
          <h3 className="text-sm font-semibold text-gray-800 mb-3 p-3 bg-gray-50 border-l-4 border-teal-600 rounded">
            Dieta {formatDate(times.oneDayBefore)} (Solo Líquidos Claros)
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="avoid-break bg-green-50 border border-teal-200 rounded-lg p-4">
              <h4 className="font-semibold text-teal-700 mb-3 text-xs">✓ Permitidos</h4>
              <ul className="text-xs space-y-1 text-gray-600">
                <li>• Agua natural</li><li>• Té sin leche</li><li>• Café negro sin azúcar</li>
                <li>• Caldos colados (sin verduras)</li><li>• Gelatina transparente</li>
                <li>• Jugos claros sin pulpa</li><li>• Bebidas deportivas claras</li>
              </ul>
            </div>
            <div className="avoid-break bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-600 mb-3 text-xs">✗ No Permitidos</h4>
              <ul className="text-xs space-y-1 text-gray-600">
                <li>• Alimentos sólidos</li><li>• Leche y derivados</li><li>• Jugos con pulpa</li>
                <li>• Bebidas rojas o moradas</li><li>• Alcohol</li>
                <li>• Fibra, semillas o nueces</li><li>• Chicles o dulces</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Prep + Day-of */}
        <section className="avoid-break mb-5">
          <h3 className="text-sm font-semibold text-gray-800 mb-3 p-3 bg-gray-50 border-l-4 border-teal-600 rounded">
            Preparación e Instrucciones del Día
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="avoid-break bg-blue-50 border border-teal-200 rounded-lg p-4">
              <h4 className="font-semibold text-teal-700 mb-3 text-xs">Preparación Intestinal - PEG-3350</h4>
              <ul className="text-xs space-y-2 text-gray-700">
                <li><strong>Inicio:</strong> {formatDate(times.oneDayBefore)} a las {formatTime(times.prepStart)}</li>
                <li><strong>Preparación:</strong> 1 sobre en 1 litro de agua fría</li>
                <li><strong>Cómo tomar:</strong> 1 vaso (250ml) cada 15 minutos</li>
                <li><strong>Objetivo:</strong> Evacuaciones líquidas claras</li>
                <li><strong>Duración:</strong> ~4 horas</li>
              </ul>
            </div>
            <div className="avoid-break bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-600 mb-3 text-xs">Día del Procedimiento</h4>
              <ul className="text-xs space-y-2 text-gray-700">
                <li><strong>Ayuno desde:</strong> {formatTime(times.fastingStart)} ({formatDate(times.appointment)})</li>
                <li><strong>Llegada:</strong> 30 minutos antes ({formatTime(new Date(times.appointment.getTime() - 30 * 60 * 1000))})</li>
                <li><strong>Acompañante:</strong> Adulto obligatorio</li>
                <li><strong>Documentos:</strong> ID oficial y estudios previos</li>
                <li><strong>No manejar:</strong> 8 horas después</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Post / Contact / Notice */}
        <section className="avoid-break mb-5">
          <div className="grid grid-cols-4 gap-3">
            {[
              ["Post-Procedimiento", "Actividades normales mañana"],
              ["Seguimiento", "Según recomendación"],
              ["Biopsia", "5–10 días si necesario"],
              ["Emergencias", "Llamar si preocupado"],
            ].map(([h, t], i) => (
              <div key={i} className="avoid-break bg-gray-50 border rounded-lg p-4 text-center">
                <h4 className="font-semibold text-gray-800 text-xs mb-2">{h}</h4>
                <p className="text-xs text-gray-600">{t}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="avoid-break mb-5">
          <div className="bg-green-50 border-2 border-teal-600 rounded-lg p-4 text-center">
            <h3 className="font-semibold text-teal-700 text-xs mb-2">Dudas o Emergencias 24/7</h3>
            <div className="text-base font-bold text-teal-600">(999) 236-0153</div>
            <p className="text-xs text-gray-600 mt-1">WhatsApp disponible • Respuesta inmediata</p>
          </div>
        </section>

        <section className="avoid-break">
          <div className="bg-yellow-100 border-2 border-orange-500 rounded-lg p-4">
            <h3 className="font-bold text-orange-600 text-xs mb-2 uppercase tracking-wide">
              ⚠️ Aviso Importante - Cargos por Preparación Inadecuada
            </h3>
            <p className="text-xs text-gray-800">
              Si no viene adecuadamente preparado y no podemos completar el procedimiento, aún se cobrará
              <strong className="text-orange-600"> honorarios del anestesiólogo + $500 pesos por uso de instalaciones.</strong>
              Será necesario reprogramar el estudio. Es fundamental seguir todas las instrucciones.
            </p>
          </div>
        </section>
      </div>

      {/* Print CSS */}
      <style jsx>{`
        /* Keep browser headers/footers minimal; tighten page margins */
        @page { size: auto; margin: 10mm 10mm 12mm 10mm; }

        @media print {
          html, body { height: auto !important; }
          body { -webkit-print-color-adjust: exact; }
          /* Print only the generated area */
          body * { visibility: hidden !important; }
          #print-area, #print-area * { visibility: visible !important; }
          #print-area { position: static !important; padding-top: 2mm !important; }
          /* Smaller header spacing in print */
          #print-area h1, #print-area h2 { margin-top: 0 !important; }
          /* Avoid cut-offs: keep blocks intact */
          .avoid-break { break-inside: avoid; page-break-inside: avoid; }
          /* Avoid phantom trailing blank page */
          #print-area > :last-child { page-break-after: avoid; }
        }
      `}</style>
    </div>
  );
}
