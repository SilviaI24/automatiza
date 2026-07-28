import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

const BASE = "https://www.automatizatuempresa.com";
const URL = `${BASE}/sectores/bufetes-abogados`;

export const metadata: Metadata = {
  title: "IA para bufetes y despachos",
  description:
    "Automatización para bufetes de abogados: filtrado de consultas, gestión del embudo de clientes y onboarding de casos sin trabajo administrativo manual.",
  alternates: { canonical: URL },
  openGraph: {
    title: "IA para bufetes y despachos | Automatiza tu Empresa",
    description: "Filtra consultas, gestiona el embudo de clientes y automatiza el onboarding. Los abogados se dedican a ejercer, no a administrar.",
    url: URL,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IA para bufetes y despachos",
    description: "Automatiza el filtrado de consultas y el onboarding. El equipo jurídico se dedica a ejercer.",
    images: ["/og.png"],
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    url: URL,
    name: "IA para bufetes y despachos de abogados",
    dateModified: "2026-07-21",
    isPartOf: { "@id": `${BASE}/#website` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: BASE },
      { "@type": "ListItem", position: 2, name: "Sectores", item: `${BASE}/sectores` },
      { "@type": "ListItem", position: 3, name: "Bufetes y despachos", item: URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Puede un sistema de IA evaluar si una consulta legal encaja con el bufete?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, dentro de unos límites. El sistema no emite opinión jurídica, pero sí puede determinar si la consulta pertenece a un área de práctica del bufete (mercantil, laboral, familia, penal…), si ya existe proceso judicial, y si el perfil del potencial cliente encaja con los casos que el bufete acepta. Las consultas fuera del alcance se derivan o se descartan automáticamente antes de consumir tiempo del equipo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo gestiona el sistema la confidencialidad de los datos del cliente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El sistema opera con infraestructura europea, cumple RGPD y no transfiere datos a modelos de IA públicos para entrenamiento. Los datos del potencial cliente se almacenan en tu CRM interno, con los mismos controles de acceso que ya tienes. Podemos configurar retención mínima y acceso por roles.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué procesos de onboarding de cliente se pueden automatizar en un despacho?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Una vez aceptado el caso: envío automático del contrato de servicios para firma digital, solicitud de documentación inicial con checklist personalizado por tipo de caso, creación de la carpeta de cliente en el sistema de gestión documental, asignación al abogado responsable y notificación al cliente de los próximos pasos. Todo sin intervención administrativa.",
        },
      },
      {
        "@type": "Question",
        name: "¿Funciona para despachos especializados en un solo área de práctica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los despachos especializados se benefician especialmente porque el sistema puede configurarse con criterios muy específicos de aceptación. Un despacho solo de derecho laboral puede filtrar con precisión: tipo de caso, importe en juego, tipo de empresa demandada. Los criterios los defines tú.",
        },
      },
    ],
  },
];

const problemas = [
  { n: "01", t: "Consultas que no tienen encaje pero consumen tiempo", d: "El equipo jurídico evalúa, responde y presupuesta consultas que quedan fuera de su especialidad o que no tienen recorrido real. Tiempo facturables perdido antes de empezar." },
  { n: "02", t: "Onboarding de cliente completamente manual", d: "Contrato enviado por email, documentación solicitada por WhatsApp, expediente creado a mano. Proceso que dura días y depende de que alguien se acuerde de cada paso." },
  { n: "03", t: "Sin visibilidad sobre el estado del embudo de clientes", d: "¿Cuántas consultas entran por semana? ¿Qué porcentaje se convierten en clientes? ¿En qué fase se caen? Sin datos, es imposible optimizar la captación." },
  { n: "04", t: "Seguimiento de presupuestos pendientes manual", d: "Un presupuesto enviado y no respondido se pierde si nadie hace seguimiento. El equipo no tiene tiempo para hacerlo sistemáticamente." },
];

const soluciones = [
  { t: "Filtrado automático de consultas", d: "El agente recoge la consulta inicial, identifica el área de práctica y evalúa si tiene encaje. Las que no encajan se derivan; las que sí, pasan al equipo cualificadas." },
  { t: "Scoring de casos", d: "Priorización automática según tipo de caso, urgencia, importe estimado y perfil del cliente. El equipo trabaja primero los casos con más potencial." },
  { t: "Onboarding automatizado", d: "Contrato, documentación y expediente generados y gestionados automáticamente desde que se acepta el caso hasta que el cliente está operativo." },
  { t: "Seguimiento de presupuestos", d: "Recordatorios automáticos a presupuestos sin respuesta. El equipo solo interviene si el potencial cliente responde." },
  { t: "CRM de casos", d: "Estado de cada caso, comunicaciones, documentos y plazos en un único sistema accesible para todo el despacho." },
  { t: "Informes de captación", d: "Volumen de consultas, tasa de conversión, tiempo medio de cierre y áreas más demandadas. Datos para tomar decisiones sobre especialización y marketing." },
];

export default function BufetesPage() {
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
            <span style={{ color: "var(--ink)" }}>Bufetes y despachos</span>
          </nav>
        </div>

        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Sector · Bufetes y despachos de abogados</span>
            <h1>Automatización IA para<br /><span className="serif">bufetes</span> y despachos.</h1>
            <p className="lede">
              Un bufete de abogados tiene dos tipos de trabajo: el trabajo jurídico — que requiere criterio, experiencia y responsabilidad — y el trabajo administrativo que lo rodea, que no requiere ninguno de los tres. Un sistema de IA separa ambos. El equipo jurídico se dedica a ejercer; el sistema gestiona el embudo de entrada, el onboarding y el seguimiento.
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
                <h2 style={{ marginTop: "18px" }}>Tiempo jurídico<br /><span className="serif">gastado en gestión</span>.</h2>
              </div>
              <p className="desc">En muchos despachos, los abogados más senior dedican una parte de su jornada a tareas que no requieren su titulación ni su experiencia. Eso tiene un coste directo en facturación y en calidad del trabajo jurídico.</p>
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
                <h2 style={{ marginTop: "18px", color: "var(--paper)" }}>El sistema filtra.<br /><span className="serif">El equipo decide.</span></h2>
              </div>
              <p className="desc" style={{ color: "#B8B6AE" }}>La IA no reemplaza el criterio jurídico — gestiona todo lo que no requiere ese criterio, para que el equipo llegue a cada caso con energía e información completa.</p>
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
              <div className="stat"><div className="v">−80<span className="ac">%</span></div><div className="l">tiempo en filtrar consultas sin encaje</div></div>
              <div className="stat"><div className="v">2 días</div><div className="l">tiempo medio de onboarding vs. semanas manual</div></div>
              <div className="stat"><div className="v">0</div><div className="l">presupuestos perdidos por falta de seguimiento</div></div>
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
                  ¿Tienes dudas sobre confidencialidad o cumplimiento? <Link href="/contacto" style={{ color: "var(--ink)", textDecoration: "underline" }}>Hablamos.</Link>
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
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", marginBottom: "32px" }}>Los servicios más usados<br /><span className="serif">en despachos</span>.</h2>
            <div className="svc-grid-2">
              <div style={{ padding: "28px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Automatización de procesos</div>
                <p style={{ fontSize: "15px", lineHeight: "1.55", marginBottom: "20px" }}>Filtrado de consultas, onboarding automatizado y seguimiento de presupuestos. Procesos completos sin intervención manual.</p>
                <Link href="/servicios/automatizacion-de-procesos" style={{ fontSize: "14px", fontWeight: "500", color: "var(--accent)" }}>Ver servicio →</Link>
              </div>
              <div style={{ padding: "28px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Agentes conversacionales</div>
                <p style={{ fontSize: "15px", lineHeight: "1.55", marginBottom: "20px" }}>Primera atención en web o WhatsApp: recoge la consulta inicial, identifica el área y cualifica antes de pasar al equipo jurídico.</p>
                <Link href="/servicios/agentes-de-voz" style={{ fontSize: "14px", fontWeight: "500", color: "var(--accent)" }}>Ver servicio →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-final">
          <div className="wrap">
            <span className="eyebrow" style={{ color: "#B8B6AE" }}>¿Cuántas horas a la semana dedica el equipo a gestión no jurídica?</span>
            <h2 style={{ marginTop: "24px" }}>30 minutos para<br /><span className="serif">recuperarlas.</span></h2>
            <p>Nos cuentas cómo entra una consulta nueva y qué pasa hasta que se convierte en cliente. Te decimos qué se puede automatizar.</p>
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
