const testimonials = [
  {
    quote:
      "Pasamos de gestionar leads manualmente en hojas de cálculo a tener un sistema completamente automatizado. Ahora nuestro equipo de ventas cierra un 40% más sin trabajar más horas.",
    name: "Carlos M.",
    role: "Director Comercial",
    company: "Empresa de Real Estate",
    initials: "CM",
  },
  {
    quote:
      "La auditoría nos reveló que estábamos perdiendo 20 horas semanales en tareas que se podían automatizar. En 6 semanas, recuperamos ese tiempo y lo pusimos en crecer el negocio.",
    name: "Laura P.",
    role: "CEO",
    company: "Agencia de Marketing Digital",
    initials: "LP",
  },
  {
    quote:
      "Implementaron un agente de IA para atención al cliente que resuelve el 70% de las consultas sin intervención humana. Nuestros clientes están más satisfechos y mi equipo más descansado.",
    name: "Andrés T.",
    role: "Fundador",
    company: "SaaS B2B",
    initials: "AT",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-widest mb-3">
            Resultados reales
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            Empresas que ya trabajan diferente
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-sm">★</span>
                ))}
              </div>
              <blockquote className="text-slate-600 text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1b3a6b] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0f172a]">{t.name}</p>
                  <p className="text-xs text-slate-400">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
