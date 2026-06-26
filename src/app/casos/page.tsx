"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const cases = [
  {
    id: "fincas",
    sector: "Administración de fincas",
    detail: "3 personas en atención telefónica",
    dark: false,
    problema: "El equipo dedicaba la mayor parte de su jornada a atender llamadas entrantes — consultas rutinarias, incidencias repetidas, gestiones que no requerían criterio humano. Las urgencias reales se perdían entre el ruido. No había visibilidad sobre qué comunidades concentraban más actividad ni qué tipos de incidencia eran más frecuentes.",
    solucion: "Tras la auditoría, construimos agentes de voz y WhatsApp integrados con su CRM. El sistema atiende el 100% de las llamadas, clasifica cada contacto por tipo y urgencia, y escala al equipo solo cuando hace falta criterio real. Las urgencias se gestionan sin demora. El equipo tiene por primera vez visibilidad completa sobre el estado de cada comunidad y los patrones de incidencia.",
    tags: ["Agente de voz", "WhatsApp", "CRM inteligente"],
  },
  {
    id: "inmobiliaria",
    sector: "Inmobiliaria",
    detail: "Equipo comercial saturado de gestión",
    dark: true,
    problema: "El equipo comercial dedicaba una parte considerable de su tiempo a tareas que no requerían su criterio: responder consultas repetidas, actualizar registros, hacer seguimiento manual de contactos sin cualificar. El resultado era inevitable — menos tiempo para lo que realmente importa: acompañar al cliente en una decisión de alta implicación personal y económica.",
    solucion: "Construimos agentes de IA y un CRM inteligente que absorbe la gestión operativa. El sistema cualifica, prioriza y hace seguimiento de forma automática. El equipo comercial ahora dedica su tiempo a lo que ningún sistema puede reemplazar: construir confianza y personalizar la experiencia de cada cliente.",
    tags: ["Agentes conversacionales", "CRM inteligente", "Lead scoring"],
  },
  {
    id: "legal",
    sector: "Bufete de abogados",
    detail: "Operación completamente manual",
    dark: false,
    problema: "Cada consulta entrante requería tiempo del equipo para valorarla, presupuestarla y responderla — independientemente de si el caso tenía encaje real con la especialidad del bufete. El equipo jurídico invertía tiempo en filtrar, informar y presupuestar antes de poder dedicarse a lo esencial: resolver casos.",
    solucion: "Diseñamos un sistema de filtrado y scoring que evalúa automáticamente cada consulta entrante. El sistema identifica qué casos tienen encaje con el bufete, qué información puede resolverse de forma automatizada y qué consultas necesitan atención directa del equipo. Los abogados ahora se dedican a ejercer — no a gestionar el embudo de entrada.",
    tags: ["Filtrado automático", "Scoring de consultas", "Agente conversacional"],
  },
];

const filters = [
  { key: "all", label: "Todos" },
  { key: "fincas", label: "Administración de fincas" },
  { key: "inmobiliaria", label: "Inmobiliaria" },
  { key: "legal", label: "Legal / Bufetes" },
];

export default function Casos() {
  const [active, setActive] = useState("all");
  const visible = cases.filter((c) => active === "all" || c.id === active);

  return (
    <>
      <Nav />
      <main>
        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Casos · Proyectos reales</span>
            <h1>Casos reales de<br />automatización <span className="serif">con IA</span><br />en empresa.</h1>
            <p className="lede">
              Tres casos reales de automatización con IA en sectores distintos: administración de fincas, inmobiliaria y bufetes. El mismo patrón: un equipo saturado de gestión, un sistema que lo absorbe, y tiempo de vuelta para lo que importa.
            </p>
            <div className="filters">
              {filters.map((f) => (
                <button
                  key={f.key}
                  className={`filter${active === f.key ? " active" : ""}`}
                  onClick={() => setActive(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        <section className="cases" style={{ paddingTop: "60px" }}>
          <div className="wrap">
            <div className="casos-home-grid">
              {visible.map((c) => (
                <article key={c.id} className={`caso-home${c.dark ? " dark" : ""}`}>
                  <div className="caso-home-label">
                    <span className="caso-sector">{c.sector}</span>
                    <span className="caso-detail">{c.detail}</span>
                  </div>
                  <div className="caso-home-body">
                    <div className="caso-home-problema">
                      <p>{c.problema}</p>
                    </div>
                    <div className="caso-home-solucion">
                      <p>{c.solucion}</p>
                    </div>
                  </div>
                  <div className="caso-home-footer">
                    <div className="caso-home-tags">
                      {c.tags.map((t) => <span key={t}>{t}</span>)}
                    </div>
                    <Link href="/contacto" className="caso-cta-link">
                      Hablemos de tu caso →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-final">
          <div className="wrap">
            <span className="eyebrow" style={{ color: "#B8B6AE" }}>¿Tu sector aquí?</span>
            <h2 style={{ marginTop: "24px" }}>Cuéntanos tu<br /><span className="serif">cuello de botella.</span></h2>
            <p>Si tienes un proceso que consume horas y crees que podría automatizarse — probablemente puede. 30 minutos para saberlo.</p>
            <div className="row">
              <Link href="/contacto" className="btn btn-primary">
                Reservar 30 minutos
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </Link>
              <Link href="/servicios" className="btn btn-secondary">Ver servicios</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
