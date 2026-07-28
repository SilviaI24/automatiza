import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

const BASE = "https://www.automatizatuempresa.com";
const URL = `${BASE}/sectores`;

export const metadata: Metadata = {
  title: "Automatización IA por sector empresarial",
  description:
    "Casos de automatización con IA específicos por sector: administración de fincas, inmobiliarias, bufetes, mantenimiento y clínicas. Resultados reales, no genéricos.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Automatización IA por sector | Automatiza tu Empresa",
    description: "Cada sector tiene sus propios procesos, cuellos de botella y oportunidades de automatización. Elige el tuyo y ve exactamente qué se puede hacer.",
    url: URL,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización IA por sector empresarial",
    description: "Resultados de automatización con IA específicos para tu sector.",
    images: ["/og.png"],
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    url: URL,
    name: "Automatización IA por sector empresarial",
    dateModified: "2026-07-21",
    isPartOf: { "@id": `${BASE}/#website` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: BASE },
      { "@type": "ListItem", position: 2, name: "Sectores", item: URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sectores con automatización IA",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "IA para administradoras de fincas", url: `${BASE}/sectores/administracion-de-fincas` },
      { "@type": "ListItem", position: 2, name: "IA para inmobiliarias y agencias", url: `${BASE}/sectores/inmobiliarias` },
      { "@type": "ListItem", position: 3, name: "IA para bufetes y despachos", url: `${BASE}/sectores/bufetes-abogados` },
      { "@type": "ListItem", position: 4, name: "IA para empresas de mantenimiento", url: `${BASE}/sectores/empresas-mantenimiento` },
      { "@type": "ListItem", position: 5, name: "IA para clínicas y centros de salud", url: `${BASE}/sectores/clinicas-centros-salud` },
    ],
  },
];

const sectores = [
  {
    href: "/sectores/administracion-de-fincas",
    eyebrow: "Administración de fincas",
    title: "100% de llamadas atendidas.\nSin ampliar la plantilla.",
    desc: "Agentes de voz que atienden propietarios a cualquier hora, clasifican la urgencia y gestionan proveedores automáticamente.",
    stats: ["100% llamadas atendidas", "24/7 disponibilidad", "−70% tiempo en tareas repetitivas"],
    cta: "Ver automatización para fincas",
  },
  {
    href: "/sectores/inmobiliarias",
    eyebrow: "Inmobiliarias y agencias",
    title: "3× más oportunidades.\nMismo equipo comercial.",
    desc: "CRM inteligente que centraliza leads de todos los portales, los puntúa y gestiona el seguimiento para que el equipo cierre más.",
    stats: ["3× oportunidades por comercial", "+40% conversión a visitas", "0 leads duplicados"],
    cta: "Ver automatización para inmobiliarias",
  },
  {
    href: "/sectores/bufetes-abogados",
    eyebrow: "Bufetes y despachos",
    title: "El equipo jurídico ejerce.\nEl sistema administra.",
    desc: "Filtrado de consultas, onboarding automatizado y seguimiento de presupuestos. Cero trabajo administrativo en el equipo jurídico.",
    stats: ["−80% tiempo en filtrado", "2 días de onboarding", "0 presupuestos perdidos"],
    cta: "Ver automatización para bufetes",
  },
  {
    href: "/sectores/empresas-mantenimiento",
    eyebrow: "Mantenimiento y urgencias",
    title: "Del aviso al técnico\nen menos de 5 minutos.",
    desc: "Clasificación de urgencias, despacho automático de técnicos y notificaciones al cliente. El sistema que no falla cuando más importa.",
    stats: ["24/7 atención urgencias", "<5 min hasta asignación", "−60% llamadas de seguimiento"],
    cta: "Ver automatización para mantenimiento",
  },
  {
    href: "/sectores/clinicas-centros-salud",
    eyebrow: "Clínicas y centros de salud",
    title: "Agenda siempre llena.\nNo-shows reducidos.",
    desc: "Agendado automático, recordatorios inteligentes y lista de espera gestionada sola. La agenda se llena sin que el teléfono suene.",
    stats: ["−40% ausencias sin aviso", "24/7 agendado automático", "+95% ocupación tras cancelación"],
    cta: "Ver automatización para clínicas",
  },
];

export default function SectoresPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="wrap" style={{ paddingTop: "24px", paddingBottom: "0" }}>
          <nav aria-label="Breadcrumb" style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", color: "var(--muted)" }}>
            <Link href="/" style={{ color: "var(--muted)" }}>Inicio</Link>
            <span>›</span>
            <span style={{ color: "var(--ink)" }}>Sectores</span>
          </nav>
        </div>

        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Automatización IA por sector</span>
            <h1>Cada sector tiene sus<br /><span className="serif">propios procesos</span><br />y sus propias palancas.</h1>
            <p className="lede">
              La automatización genérica no existe. Lo que funciona en una administradora de fincas no funciona igual en una inmobiliaria ni en un bufete. Elige tu sector y ve exactamente qué procesos se pueden automatizar, qué resultados son realistas y cómo lo hacemos.
            </p>
          </div>
        </header>

        <section className="svc-section" style={{ paddingTop: "0" }}>
          <div className="wrap">
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {sectores.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  style={{
                    display: "block",
                    padding: "36px 40px",
                    background: "var(--paper)",
                    border: "1px solid var(--line-soft)",
                    borderRadius: "var(--r-lg)",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "border-color 0.15s",
                  }}
                >
                  <span style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {s.eyebrow}
                  </span>
                  <h2 style={{ fontSize: "clamp(22px,2.5vw,32px)", fontWeight: "700", marginTop: "12px", marginBottom: "12px", lineHeight: "1.2", whiteSpace: "pre-line" }}>
                    {s.title}
                  </h2>
                  <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--ink-2)", maxWidth: "640px", marginBottom: "20px" }}>
                    {s.desc}
                  </p>
                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "24px" }}>
                    {s.stats.map((stat) => (
                      <span key={stat} style={{ fontSize: "12px", padding: "4px 10px", background: "var(--bg-2)", borderRadius: "100px", color: "var(--ink-2)", fontFamily: "'Geist Mono'" }}>
                        {stat}
                      </span>
                    ))}
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: "500", color: "var(--accent)" }}>
                    {s.cta} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-final">
          <div className="wrap">
            <span className="eyebrow" style={{ color: "#B8B6AE" }}>¿Tu sector no aparece aquí?</span>
            <h2 style={{ marginTop: "24px" }}>Si tienes procesos<br /><span className="serif">repetitivos, podemos automatizarlos.</span></h2>
            <p>Trabajamos con cualquier empresa de servicios que tenga procesos bien definidos. En 30 minutos evaluamos si hay palancas claras de automatización.</p>
            <div className="row">
              <Link href="/contacto" className="btn btn-primary">
                Reservar 30 minutos
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </Link>
              <Link href="/automatizacion-empresas-con-ia" className="btn btn-secondary">Guía de automatización →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
    </>
  );
}
