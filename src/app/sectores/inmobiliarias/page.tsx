import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

const BASE = "https://www.automatizatuempresa.com";
const URL = `${BASE}/sectores/inmobiliarias`;

export const metadata: Metadata = {
  title: "IA para inmobiliarias y agencias",
  description:
    "CRM inteligente y agentes IA para inmobiliarias: cualificación automática de leads, seguimiento personalizado y más cierres con el mismo equipo comercial.",
  alternates: { canonical: URL },
  openGraph: {
    title: "IA para inmobiliarias y agencias | Automatiza tu Empresa",
    description:
      "Automatiza la cualificación de leads, el seguimiento y la agenda de visitas. Tu equipo se concentra en cerrar, no en administrar.",
    url: URL,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IA para inmobiliarias y agencias",
    description: "CRM con IA y agentes para que tu equipo inmobiliario cierre más con el mismo tamaño.",
    images: ["/og.png"],
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    url: URL,
    name: "IA para inmobiliarias y agencias",
    dateModified: "2026-07-21",
    isPartOf: { "@id": `${BASE}/#website` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: BASE },
      { "@type": "ListItem", position: 2, name: "Sectores", item: `${BASE}/sectores` },
      { "@type": "ListItem", position: 3, name: "Inmobiliarias", item: URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo cualifica el CRM con IA a los leads inmobiliarios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El sistema evalúa cada lead según criterios que defines tú: presupuesto declarado, zona de interés, urgencia (busca para antes de 3 meses o simplemente mirando), tipo de inmueble y comportamiento en la web (páginas visitadas, tiempo, fichas descargadas). La puntuación se actualiza en tiempo real — cuando un lead vuelve a la web o abre un email, su score sube automáticamente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se conecta con los portales inmobiliarios como Idealista o Fotocasa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Los leads de Idealista, Fotocasa, Habitaclia, Pisos.com o tu web propia llegan directamente al CRM sin pasar por email ni copia manual. Cada lead se enriquece automáticamente, se puntúa y se asigna al comercial adecuado según la zona o tipo de inmueble.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puede el sistema agendar visitas automáticamente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando un lead cualificado solicita ver un inmueble, el agente conversacional consulta la disponibilidad del comercial asignado y propone huecos directamente en el chat o WhatsApp. El comercial recibe la cita confirmada en su calendario sin haber intervenido.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa con los leads que no están listos para comprar todavía?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El sistema los mantiene calientes de forma automática con secuencias de nurturing: alertas de nuevas propiedades según sus criterios, contenido útil sobre el proceso de compra, recordatorios periódicos. Cuando el lead vuelve a interactuar, el comercial recibe un aviso y retoma el contacto en el momento justo.",
        },
      },
    ],
  },
];

const problemas = [
  { n: "01", t: "Leads de múltiples portales, gestión manual", d: "Idealista, Fotocasa, web propia, WhatsApp. Cada lead llega por un canal distinto y hay que copiarlo manualmente al CRM — cuando alguien se acuerda." },
  { n: "02", t: "Comerciales que administran en lugar de vender", d: "Actualizar fichas, hacer seguimiento manual, responder consultas repetidas sobre precio o disponibilidad. Tiempo que no se dedica a acompañar la decisión de compra." },
  { n: "03", t: "Leads fríos que se caen del embudo", d: "Un lead que no está listo hoy puede estarlo en 6 meses. Sin nurturing automático, ese lead simplemente desaparece y acaba comprando con la competencia." },
  { n: "04", t: "Sin prioridad clara sobre qué lead trabajar hoy", d: "El equipo atiende por orden de llegada, no por calidad del lead. El mejor prospecto de la semana puede estar esperando mientras se responde a alguien que solo está mirando." },
];

const soluciones = [
  { t: "Centralización de portales", d: "Todos los leads de Idealista, Fotocasa, Habitaclia y tu web en un único CRM, sin copia manual." },
  { t: "Lead scoring automático", d: "Cada lead puntuado según presupuesto, urgencia, zona y comportamiento. El equipo sabe siempre a quién llamar primero." },
  { t: "Seguimiento inteligente", d: "Secuencias automáticas activadas por el comportamiento: si un lead vuelve a mirar la misma ficha, el comercial recibe un aviso al instante." },
  { t: "Agendado de visitas", d: "El agente conversacional gestiona la solicitud de visita y confirma en el calendario del comercial sin intervención manual." },
  { t: "Nurturing de leads fríos", d: "Alertas de nuevas propiedades según criterios guardados. Los leads se mantienen vivos aunque no estén listos para comprar hoy." },
  { t: "Reporting de pipeline", d: "Conversión por etapa, tiempo medio de cierre, portales con mejor ROI. Datos para tomar decisiones, no para buscarlos." },
];

export default function InmobiliariasPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="wrap" style={{ paddingTop: "24px", paddingBottom: "0" }}>
          <nav aria-label="Breadcrumb" style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", color: "var(--muted)" }}>
            <Link href="/" style={{ color: "var(--muted)" }}>Inicio</Link>
            <span>›</span>
            <Link href="/sectores" style={{ color: "var(--muted)" }}>Sectores</Link>
            <span>›</span>
            <span style={{ color: "var(--ink)" }}>Inmobiliarias</span>
          </nav>
        </div>

        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Sector · Inmobiliarias y agencias</span>
            <h1>Automatización IA para<br /><span className="serif">inmobiliarias</span>.</h1>
            <p className="lede">
              En una inmobiliaria, la venta es una decisión de alta implicación personal. El equipo comercial tiene que estar presente en los momentos que importan — no actualizando CRMs ni respondiendo consultas repetidas de precio y disponibilidad. Un sistema con IA absorbe la gestión operativa para que el equipo se concentre en construir confianza y cerrar.
            </p>
            <div className="hero-ctas" style={{ marginTop: "32px" }}>
              <Link href="/contacto" className="btn btn-accent">
                Reservar 30 minutos
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
              </Link>
              <Link href="/casos" className="btn btn-secondary">Ver caso real</Link>
            </div>
          </div>
        </header>

        <section className="svc-section" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">El problema</span>
                <h2 style={{ marginTop: "18px" }}>El comercial que<br /><span className="serif">administra en lugar de vender</span>.</h2>
              </div>
              <p className="desc">El tiempo de un comercial inmobiliario es su activo más escaso. La mayoría de las tareas que lo consumen no requieren su criterio ni su presencia.</p>
            </div>
            <div className="process-grid process-grid-3" style={{ marginTop: "48px" }}>
              {problemas.map((p) => (
                <div key={p.n} className="step">
                  <span className="n">{p.n}</span>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="svc-section dark">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow" style={{ color: "#B8B6AE" }}>La solución</span>
                <h2 style={{ marginTop: "18px", color: "var(--paper)" }}>CRM inteligente que<br /><span className="serif">trabaja por el equipo</span>.</h2>
              </div>
              <p className="desc" style={{ color: "#B8B6AE" }}>El sistema gestiona la captación, cualificación y seguimiento. El comercial entra en escena cuando el lead está listo para hablar.</p>
            </div>
            <div className="feat-grid" style={{ marginTop: "48px" }}>
              {soluciones.map((s) => (
                <div key={s.t} className="feat">
                  <div className="ico">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: "17px" }}>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
            <div className="stat-row" style={{ marginTop: "48px" }}>
              <div className="stat"><div className="v">3×</div><div className="l">más oportunidades gestionadas por comercial</div></div>
              <div className="stat"><div className="v">+40<span className="ac">%</span></div><div className="l">tasa de conversión media de leads a visitas</div></div>
              <div className="stat"><div className="v">0</div><div className="l">leads duplicados entre portales</div></div>
            </div>
          </div>
        </section>

        <section className="svc-section faq" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="faq-grid">
              <div className="sticky-info">
                <span className="eyebrow">Preguntas frecuentes</span>
                <h2 style={{ marginTop: "20px" }}>Lo que nos<br />suelen <span className="serif">preguntar.</span></h2>
                <p style={{ marginTop: "20px", fontSize: "15px", color: "var(--ink-2)", lineHeight: "1.55" }}>
                  ¿Tu caso es distinto? <Link href="/contacto" style={{ color: "var(--ink)", textDecoration: "underline" }}>Cuéntanoslo.</Link>
                </p>
              </div>
              <div className="faq-list">
                {(schemas[2] as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] }).mainEntity.map((faq) => (
                  <details key={faq.name}>
                    <summary>{faq.name}</summary>
                    <p>{faq.acceptedAnswer.text}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="svc-section" style={{ padding: "64px 0" }}>
          <div className="wrap">
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", marginBottom: "32px" }}>Los servicios más usados<br /><span className="serif">en inmobiliarias</span>.</h2>
            <div className="svc-grid-2">
              <div style={{ padding: "28px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>CRM inteligente con IA</div>
                <p style={{ fontSize: "15px", lineHeight: "1.55", marginBottom: "20px" }}>Lead scoring, pipelines automáticos y seguimiento inteligente. Un CRM que trabaja, no uno donde se archivan datos.</p>
                <Link href="/servicios/crm-inteligente" style={{ fontSize: "14px", fontWeight: "500", color: "var(--accent)" }}>Ver servicio →</Link>
              </div>
              <div style={{ padding: "28px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Agentes conversacionales</div>
                <p style={{ fontSize: "15px", lineHeight: "1.55", marginBottom: "20px" }}>Agente en web y WhatsApp que cualifica leads, responde consultas sobre propiedades y agenda visitas sin intervención del equipo.</p>
                <Link href="/servicios/agentes-de-voz" style={{ fontSize: "14px", fontWeight: "500", color: "var(--accent)" }}>Ver servicio →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-final">
          <div className="wrap">
            <span className="eyebrow" style={{ color: "#B8B6AE" }}>¿Tu equipo comercial dedica más tiempo a tareas de gestión que a vender?</span>
            <h2 style={{ marginTop: "24px" }}>30 minutos para<br /><span className="serif">cambiar eso.</span></h2>
            <p>Nos cuentas cómo llegan los leads hoy y qué hace el equipo con ellos. Te decimos qué automatizaríamos primero.</p>
            <div className="row">
              <Link href="/contacto" className="btn btn-primary">
                Reservar 30 minutos
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </Link>
              <Link href="/casos" className="btn btn-secondary">Ver caso real</Link>
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
