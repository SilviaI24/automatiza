import {
  Search,
  Workflow,
  Bot,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Auditoría de Procesos con IA",
    description:
      "Analizamos en detalle tu operación para identificar exactamente qué tareas consumen tiempo innecesario, dónde se producen errores y cuánto valor puedes recuperar con automatización.",
    bullets: [
      "Mapeo completo de flujos de trabajo",
      "Identificación de cuellos de botella",
      "Informe con ROI estimado",
    ],
    color: "bg-blue-50 text-blue-600",
    border: "hover:border-blue-200",
  },
  {
    icon: Workflow,
    title: "Automatización con Make y n8n",
    description:
      "Conectamos tus herramientas —CRM, email, hojas de cálculo, ERP— y creamos flujos automáticos que ejecutan tareas complejas 24 horas al día, 7 días a la semana, sin errores humanos.",
    bullets: [
      "Integración entre cualquier plataforma",
      "Flujos sin código, 100% mantenibles",
      "Notificaciones y alertas automáticas",
    ],
    color: "bg-indigo-50 text-indigo-600",
    border: "hover:border-indigo-200",
  },
  {
    icon: Bot,
    title: "Agentes de IA",
    description:
      "Diseñamos e implementamos agentes inteligentes que interactúan con clientes, procesan información, responden preguntas y ejecutan acciones complejas de forma autónoma.",
    bullets: [
      "Atención al cliente automatizada",
      "Agentes de ventas y calificación de leads",
      "Procesamiento de documentos con IA",
    ],
    color: "bg-sky-50 text-sky-600",
    border: "hover:border-sky-200",
  },
  {
    icon: BarChart3,
    title: "CRM Inteligente",
    description:
      "Configuramos e integramos sistemas CRM con capas de inteligencia artificial para que tu equipo de ventas se centre en cerrar, no en administrar datos.",
    bullets: [
      "Implementación de HubSpot y similares",
      "Scoring de leads con IA",
      "Pipelines automatizados de ventas",
    ],
    color: "bg-emerald-50 text-emerald-600",
    border: "hover:border-emerald-200",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-widest mb-3">
            Nuestros servicios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            Todo lo que necesitas para automatizar
            <br className="hidden sm:block" /> tu empresa con IA
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Desde el diagnóstico inicial hasta la implementación completa.
            Trabajamos con las mejores herramientas del mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`bg-white rounded-2xl p-8 border border-slate-100 transition-all duration-200 hover:shadow-lg ${service.border} group`}
              >
                <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-5`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1b3a6b] group-hover:gap-2.5 transition-all"
                >
                  Saber más <ArrowRight size={15} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
