import { ArrowRight, CalendarCheck, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-[#2563eb] mb-8 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 bg-[#2563eb] rounded-full animate-pulse" />
          Consultoría de IA para empresas
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0f172a] leading-tight tracking-tight mb-6">
          Automatiza tu empresa con IA.
          <br />
          <span className="text-[#1b3a6b]">Trabaja menos, escala más.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Auditamos tus procesos e implementamos soluciones de inteligencia
          artificial para eliminar tareas repetitivas, reducir errores y
          multiplicar la productividad de tu equipo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#contacto"
            className="group flex items-center gap-2 px-7 py-3.5 bg-[#1b3a6b] text-white font-semibold rounded-lg hover:bg-[#152d54] transition-all shadow-md hover:shadow-lg text-base"
          >
            Solicitar auditoría gratuita
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#como-funciona"
            className="flex items-center gap-2 px-7 py-3.5 border-2 border-slate-200 text-slate-700 font-semibold rounded-lg hover:border-[#1b3a6b] hover:text-[#1b3a6b] transition-all text-base"
          >
            <CalendarCheck size={18} />
            Cómo funciona
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: "70%", label: "Reducción de tareas manuales" },
            { value: "3x", label: "Más productividad del equipo" },
            { value: "24/7", label: "Procesos que no se detienen" },
            { value: "ROI", label: "Medible desde el primer mes" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-[#1b3a6b] mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a href="#servicios" aria-label="Ver servicios">
            <ChevronDown size={28} className="text-slate-300 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
