import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

const BASE = "https://www.automatizatuempresa.com";
const URL = `${BASE}/sectores/empresas-mantenimiento`;

export const metadata: Metadata = {
  title: "IA para empresas de mantenimiento",
  description:
    "Agentes IA y automatización para empresas de mantenimiento y urgencias: despacho de técnicos, atención 24/7, gestión de órdenes de trabajo y seguimiento al cliente.",
  alternates: { canonical: URL },
  openGraph: {
    title: "IA para empresas de mantenimiento | Automatiza tu Empresa",
    description: "Automatiza la atención de urgencias, el despacho de técnicos y el seguimiento de órdenes de trabajo. Disponibilidad 24/7 sin ampliar la guardia.",
    url: URL,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IA para empresas de mantenimiento",
    description: "Atención 24/7, despacho de técnicos y gestión de órdenes automática para empresas de mantenimiento.",
    images: ["/og.png"],
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    url: URL,
    name: "IA para empresas de mantenimiento y urgencias",
    dateModified: "2026-07-21",
    isPartOf: { "@id": `${BASE}/#website` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: BASE },
      { "@type": "ListItem", position: 2, name: "Sectores", item: `${BASE}/sectores` },
      { "@type": "ListItem", position: 3, name: "Empresas de mantenimiento", item: URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo distingue el agente de IA una urgencia real de una avería normal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El agente evalúa la gravedad mediante un protocolo de preguntas guiadas: tipo de instalación afectada, riesgo para personas o instalaciones, si hay agua, gas o electricidad comprometidos. Según la respuesta, clasifica la incidencia en tres niveles — emergencia (activa guardia inmediata), urgente (antes de 4 horas) o programable — y actúa en consecuencia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puede el sistema gestionar el despacho de técnicos automáticamente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Una vez clasificada la incidencia, el sistema consulta la disponibilidad y la ubicación de los técnicos, asigna el más cercano disponible con las competencias adecuadas y le envía la orden de trabajo con todos los detalles. El técnico confirma desde el móvil. Si no hay respuesta en X minutos, el sistema escala al siguiente disponible.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se mantiene informado el cliente mientras espera al técnico?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El sistema envía notificaciones automáticas por WhatsApp o SMS: confirmación de la incidencia registrada, nombre del técnico asignado, tiempo estimado de llegada y aviso cuando el técnico está en camino. El cliente no necesita llamar para saber qué pasa — el sistema le informa proactivamente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Funciona para empresas de mantenimiento de ascensores, climatización, fontanería o electricidad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, para cualquier tipo de mantenimiento con componente de urgencias y despacho de técnicos. Lo hemos implementado en servicios de ascensores, climatización, fontanería industrial y mantenimiento de edificios. La lógica de clasificación y despacho se configura según las especificidades de cada servicio.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo automatizar la gestión de urgencias en una empresa de mantenimiento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El agente de voz recibe la llamada, hace las preguntas de diagnóstico necesarias para clasificar la urgencia (emergencia, urgente o programable) y actúa según el protocolo: las emergencias activan la guardia inmediatamente, las urgentes se programan para las próximas horas, las programables se gestionan en horario normal. El cliente recibe confirmación y nombre del técnico asignado de forma automática.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué procesos de una empresa de mantenimiento se pueden automatizar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Atención y clasificación de urgencias 24/7, despacho de técnicos según disponibilidad y competencia, notificaciones automáticas al cliente durante el proceso, creación y cierre de órdenes de trabajo, programación de mantenimientos preventivos según contrato y generación de informes de actividad. La decisión técnica sobre cómo resolver la avería sigue siendo del técnico.",
        },
      },
    ],
  },
];

const problemas = [
  { n: "01", t: "Guardias 24/7 para urgencias que no siempre lo son", d: "Una parte importante de las llamadas fuera de horario son averías que podrían programarse para el día siguiente. El técnico de guardia las recibe todas igual." },
  { n: "02", t: "Despacho manual de técnicos en tiempo real", d: "Cuando llega una urgencia, alguien tiene que llamar a los técnicos, ver quién está disponible y dónde está. En alta demanda, este proceso tarda demasiado." },
  { n: "03", t: "El cliente no sabe qué está pasando", d: "Desde que abre la incidencia hasta que llega el técnico, el cliente está en el limbo. Las llamadas para preguntar 'dónde está el técnico' saturan el teléfono." },
  { n: "04", t: "Órdenes de trabajo en papel o en emails dispersos", d: "Sin sistema centralizado, las órdenes se pierden, no se facturan o se facturan mal. El historial de mantenimiento de cada cliente es imposible de consultar." },
];

const soluciones = [
  { t: "Atención de urgencias 24/7", d: "El agente de voz recibe todas las llamadas, clasifica la urgencia real y activa el protocolo adecuado — sin que el técnico de guardia reciba llamadas evitables." },
  { t: "Clasificación inteligente", d: "Emergencia / urgente / programable según el protocolo que defines. Solo las emergencias reales activan la guardia inmediata." },
  { t: "Despacho automático de técnicos", d: "El sistema asigna el técnico disponible más cercano con las competencias necesarias y le envía la orden de trabajo al móvil." },
  { t: "Notificaciones al cliente", d: "WhatsApp automático con confirmación, técnico asignado y tiempo estimado. El cliente no llama para preguntar." },
  { t: "Gestión de órdenes de trabajo", d: "Creación automática, asignación, confirmación por el técnico y cierre. Historial completo de cada cliente e instalación." },
  { t: "Mantenimiento preventivo", d: "Programación automática de revisiones periódicas según contrato, con recordatorios al cliente y asignación de técnico." },
];

export default function MantenimientoPage() {
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
            <span style={{ color: "var(--ink)" }}>Empresas de mantenimiento</span>
          </nav>
        </div>

        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Sector · Mantenimiento y urgencias</span>
            <h1>Automatización IA para<br /><span className="serif">mantenimiento</span><br />y urgencias.</h1>
            <p className="lede">
              Las empresas de mantenimiento operan con una presión constante: urgencias que no pueden esperar, técnicos que hay que despachar en tiempo real y clientes que exigen información inmediata. Un sistema con IA clasifica cada incidencia, despacha al técnico correcto y mantiene al cliente informado — sin que nadie tenga que coordinarlo manualmente.
            </p>
            <div className="hero-ctas" style={{ marginTop: "32px" }}>
              <Link href="/contacto" className="btn btn-accent">
                Reservar 30 minutos
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
              </Link>
              <Link href="/servicios/agentes-de-voz" className="btn btn-secondary">Ver agentes de voz</Link>
            </div>
          </div>
        </header>

        <section className="svc-section" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">El problema</span>
                <h2 style={{ marginTop: "18px" }}>Coordinación manual<br /><span className="serif">bajo presión de tiempo</span>.</h2>
              </div>
              <p className="desc">En mantenimiento, los errores de coordinación no son solo ineficiencias — son clientes sin servicio, técnicos mal despachados y guardias innecesarias. El margen de error es pequeño.</p>
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
                <h2 style={{ marginTop: "18px", color: "var(--paper)" }}>Del aviso al técnico<br /><span className="serif">en minutos, no horas</span>.</h2>
              </div>
              <p className="desc" style={{ color: "#B8B6AE" }}>El sistema recibe, clasifica, despacha e informa. El equipo solo interviene en las decisiones que requieren criterio humano.</p>
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
              <div className="stat"><div className="v">24/7</div><div className="l">atención de urgencias sin guardia permanente activa</div></div>
              <div className="stat"><div className="v">&lt;5 min</div><div className="l">desde la llamada hasta la asignación del técnico</div></div>
              <div className="stat"><div className="v">−60<span className="ac">%</span></div><div className="l">llamadas de seguimiento del cliente</div></div>
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
                  ¿Tu operativa es específica? <Link href="/contacto" style={{ color: "var(--ink)", textDecoration: "underline" }}>Cuéntanosla.</Link>
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
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", marginBottom: "32px" }}>Los servicios más usados<br /><span className="serif">en mantenimiento</span>.</h2>
            <div className="svc-grid-2">
              <div style={{ padding: "28px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Agentes de voz e IA</div>
                <p style={{ fontSize: "15px", lineHeight: "1.55", marginBottom: "20px" }}>Atención 24/7, clasificación de urgencias y notificaciones automáticas. El agente que no se cansa ni se va de vacaciones.</p>
                <Link href="/servicios/agentes-de-voz" style={{ fontSize: "14px", fontWeight: "500", color: "var(--accent)" }}>Ver servicio →</Link>
              </div>
              <div style={{ padding: "28px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Automatización de procesos</div>
                <p style={{ fontSize: "15px", lineHeight: "1.55", marginBottom: "20px" }}>Órdenes de trabajo, programación de preventivos, facturación y reportes de actividad. Sin intervención manual en el ciclo completo.</p>
                <Link href="/servicios/automatizacion-de-procesos" style={{ fontSize: "14px", fontWeight: "500", color: "var(--accent)" }}>Ver servicio →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="svc-section" style={{ padding: "80px 0" }}>
          <div className="wrap">
            <div style={{ maxWidth: "720px" }}>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", marginBottom: "20px" }}>Cómo automatizar una empresa<br />de mantenimiento</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--ink-2)", marginBottom: "24px" }}>
                Automatizar una empresa de mantenimiento significa resolver primero el cuello de botella más costoso: la coordinación en tiempo real de urgencias. Cuando llega una llamada de emergencia a las 2 de la madrugada, el tiempo entre la llamada, la clasificación y el despacho del técnico correcto determina la calidad del servicio y el coste de la guardia. Automatizar ese flujo — clasificación automática, asignación del técnico disponible más cercano, notificación al cliente — reduce el tiempo de respuesta de horas a minutos y elimina las guardias para llamadas que no eran urgencias reales.
              </p>
              <Link href="/automatizacion-empresas-con-ia" style={{ fontSize: "14px", color: "var(--accent)", fontWeight: "500" }}>
                Guía completa: cómo automatizar tu empresa con IA →
              </Link>
            </div>
          </div>
        </section>

        <section className="cta-final">
          <div className="wrap">
            <span className="eyebrow" style={{ color: "#B8B6AE" }}>¿Cuántas urgencias al mes podrían haberse gestionado solas?</span>
            <h2 style={{ marginTop: "24px" }}>30 minutos para<br /><span className="serif">analizarlo juntos.</span></h2>
            <p>Nos cuentas cómo funciona tu guardia y cómo llegan las urgencias hoy. Te decimos qué se puede automatizar y cuánto se puede reducir la carga.</p>
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
