import { Phone, Map, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Auditoría gratuita",
    description:
      "Nos reunimos contigo durante 30 minutos para entender tu negocio, tus procesos actuales y los puntos de mayor fricción. Sin compromiso.",
  },
  {
    number: "02",
    icon: Map,
    title: "Plan de automatización",
    description:
      "Diseñamos un mapa de automatización personalizado con las herramientas adecuadas, el orden de implementación y el ROI estimado para cada mejora.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Implementación y acompañamiento",
    description:
      "Nuestro equipo construye, prueba y despliega todas las soluciones. Te formamos y te acompañamos durante el periodo de adopción.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-widest mb-3">
            El proceso
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            De cero a automatizado en 3 pasos
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Un proceso claro, sin tecnicismos y con resultados medibles desde el
            primer mes.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="text-center relative">
                  <div className="inline-flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#1b3a6b] flex items-center justify-center mb-5 shadow-md">
                      <Icon size={24} className="text-white" />
                    </div>
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">
                      Paso {step.number}
                    </span>
                    <h3 className="text-xl font-bold text-[#0f172a] mb-3">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1b3a6b] text-white font-semibold rounded-lg hover:bg-[#152d54] transition-all shadow-md text-base"
          >
            Empezar con mi auditoría gratuita
          </a>
          <p className="mt-3 text-xs text-slate-400">
            Sin compromiso · Respuesta en menos de 24 horas
          </p>
        </div>
      </div>
    </section>
  );
}
