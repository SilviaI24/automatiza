import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

const BASE = "https://www.automatizatuempresa.com";
const URL = `${BASE}/sectores/administracion-de-fincas`;

export const metadata: Metadata = {
  title: "IA para administradoras de fincas",
  description:
    "Agentes de voz e IA que gestionan incidencias, consultas de cuotas y urgencias en comunidades de propietarios — 24 horas, sin saturar al equipo.",
  alternates: { canonical: URL },
  openGraph: {
    title: "IA para administradoras de fincas | Automatiza tu Empresa",
    description:
      "Automatiza la atención telefónica, la gestión de incidencias y el seguimiento en comunidades de propietarios con agentes de IA.",
    url: URL,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IA para administradoras de fincas",
    description:
      "Agentes de IA que gestionan incidencias y consultas de comunidades 24/7, sin saturar a tu equipo.",
    images: ["/og.png"],
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    url: URL,
    name: "IA para administradoras de fincas",
    dateModified: "2026-07-21",
    isPartOf: { "@id": `${BASE}/#website` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: BASE },
      { "@type": "ListItem", position: 2, name: "Sectores", item: `${BASE}/sectores` },
      { "@type": "ListItem", position: 3, name: "Administradoras de fincas", item: URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo gestiona el agente de IA las urgencias en comunidades?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El agente clasifica cada llamada según su naturaleza — urgencia real (fuga de agua, ascensor bloqueado), consulta administrativa o incidencia programable — y actúa en consecuencia: escala inmediatamente las urgencias al técnico o persona de guardia, registra las demás en el sistema de gestión y envía confirmación al propietario. Las urgencias no esperan cola.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puede el agente consultar el estado de cada comunidad en tiempo real?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El agente se conecta a tu software de gestión (Gesfincas, Adminsoft, Fincaweb u otros) y puede responder preguntas como el estado de una derrama, la fecha de pago de cuotas o el historial de incidencias de una comunidad concreta — sin que el equipo tenga que intervenir.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo gestiona el sistema el volumen constante de llamadas diarias?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El agente atiende todas las llamadas en paralelo — sin cola de espera, a cualquier hora. Responde consultas de cuotas, envía recibos por email o WhatsApp, registra reclamaciones y solo pasa al equipo las llamadas que requieren criterio humano. El equipo empieza cada día gestionando lo que importa, no contestando el teléfono.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se integra con WhatsApp Business para comunidades que prefieren escribir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El mismo agente opera por WhatsApp Business API, email y teléfono. Un propietario puede abrir una incidencia por WhatsApp a las 11 de la noche; el sistema la registra, confirma recepción y programa la gestión para el día siguiente — o activa el protocolo de urgencia si la situación lo requiere.",
        },
      },
    ],
  },
];

const problemas = [
  {
    n: "01",
    t: "El teléfono no para en todo el día",
    d: "Consultas de cuotas, reclamaciones de recibos, solicitudes de certificados, avisos de incidencias. El equipo pasa horas al teléfono para tareas que no requieren su criterio.",
  },
  {
    n: "02",
    t: "Las urgencias se pierden entre el ruido",
    d: "Una fuga real comparte bandeja de entrada con una pregunta sobre el parking. Sin clasificación automática, las verdaderas urgencias llegan tarde.",
  },
  {
    n: "03",
    t: "Sin visibilidad sobre qué comunidades generan más carga",
    d: "¿Qué comunidades concentran más incidencias? ¿Qué tipo de consultas son las más frecuentes? Sin datos, es imposible optimizar ni justificar honorarios.",
  },
  {
    n: "04",
    t: "Guardias de fin de semana para urgencias evitables",
    d: "Muchas llamadas fuera de horario son consultas que podrían haberse resuelto sin intervención humana. El equipo las asume igualmente.",
  },
];

const soluciones = [
  { t: "Agente de voz 24/7", d: "Atiende el 100% de las llamadas, clasifica por urgencia real y escala solo lo que necesita criterio humano." },
  { t: "Integración con tu software", d: "Consulta datos de cuotas, incidencias y comunidades en tiempo real desde la llamada o el chat." },
  { t: "WhatsApp Business", d: "Canal adicional para propietarios. Apertura de incidencias, confirmaciones y estado sin intervención del equipo." },
  { t: "CRM de incidencias", d: "Cada contacto queda registrado con fecha, canal, tipo y resolución. Histórico completo por comunidad." },
  { t: "Reporting automático", d: "Informe semanal con volumen de incidencias por comunidad, tipos más frecuentes y tiempo de resolución." },
  { t: "Protocolo de urgencias", d: "Detección de palabras clave de emergencia (inundación, fuego, ascensor) y escalado inmediato al técnico de guardia." },
];

export default function FincasPage() {
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
            <span style={{ color: "var(--ink)" }}>Administración de fincas</span>
          </nav>
        </div>

        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Sector · Administración de fincas</span>
            <h1>Automatización IA para<br /><span className="serif">administradoras</span><br />de fincas.</h1>
            <p className="lede">
              Una administradora de fincas gestiona decenas o centenares de comunidades con un equipo reducido. El cuello de botella no es la capacidad del equipo — es el volumen de contacto repetitivo que lo consume. Un agente de IA atiende el 100% de las llamadas, clasifica cada incidencia y escala solo lo que requiere criterio humano.
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

        {/* EL PROBLEMA */}
        <section className="svc-section" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">El problema</span>
                <h2 style={{ marginTop: "18px" }}>Por qué el teléfono<br /><span className="serif">no para nunca</span>.</h2>
              </div>
              <p className="desc">La mayoría de las llamadas que recibe una administradora de fincas son repetitivas, predecibles y no requieren criterio humano. Pero el equipo las responde todas igual.</p>
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

        {/* SOLUCIÓN */}
        <section className="svc-section dark">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow" style={{ color: "#B8B6AE" }}>La solución</span>
                <h2 style={{ marginTop: "18px", color: "var(--paper)" }}>Un sistema que gestiona<br /><span className="serif">lo repetitivo</span>.</h2>
              </div>
              <p className="desc" style={{ color: "#B8B6AE" }}>El agente no sustituye al equipo — lo libera para los problemas que realmente requieren su criterio. Las consultas rutinarias desaparecen de la agenda.</p>
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
              <div className="stat"><div className="v">100<span className="ac">%</span></div><div className="l">de llamadas atendidas sin cola de espera</div></div>
              <div className="stat"><div className="v">24/7</div><div className="l">disponibilidad, incluidos festivos y urgencias</div></div>
              <div className="stat"><div className="v">−70<span className="ac">%</span></div><div className="l">tiempo del equipo en consultas repetitivas</div></div>
            </div>
          </div>
        </section>

        {/* CASO REAL */}
        <section className="svc-section">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">Caso real</span>
                <h2 style={{ marginTop: "18px" }}>Cómo lo hicimos<br /><span className="serif">en la práctica</span>.</h2>
              </div>
              <p className="desc">Una administradora con 60 comunidades y 3 personas en atención telefónica. El teléfono no paraba en todo el día.</p>
            </div>
            <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <div style={{ padding: "32px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>Antes</div>
                <ul style={{ display: "flex", flexDirection: "column", gap: "10px", padding: 0, listStyle: "none" }}>
                  {[
                    "3 personas atendiendo llamadas a lo largo de todo el día",
                    "Urgencias reales esperando en cola junto a consultas de cuotas",
                    "Sin registro sistemático de incidencias por comunidad",
                    "Guardias de fin de semana para llamadas que podrían haberse evitado",
                  ].map((item) => (
                    <li key={item} style={{ fontSize: "14px", color: "var(--ink-2)", lineHeight: "1.5", display: "flex", gap: "10px" }}>
                      <span style={{ color: "var(--muted)", flexShrink: 0 }}>✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ padding: "32px", background: "var(--accent)", border: "1px solid var(--accent)", borderRadius: "var(--r-lg)" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>Después</div>
                <ul style={{ display: "flex", flexDirection: "column", gap: "10px", padding: 0, listStyle: "none" }}>
                  {[
                    "El agente atiende el 100% de llamadas en paralelo, sin espera",
                    "Urgencias escaladas en menos de 30 segundos al técnico de guardia",
                    "Histórico completo de incidencias por comunidad en el CRM",
                    "El equipo empieza el día gestionando lo que importa",
                  ].map((item) => (
                    <li key={item} style={{ fontSize: "14px", color: "rgba(255,255,255,0.9)", lineHeight: "1.5", display: "flex", gap: "10px" }}>
                      <span style={{ flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="svc-section faq" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="faq-grid">
              <div className="sticky-info">
                <span className="eyebrow">Preguntas frecuentes</span>
                <h2 style={{ marginTop: "20px" }}>Lo que nos<br />suelen <span className="serif">preguntar.</span></h2>
                <p style={{ marginTop: "20px", fontSize: "15px", color: "var(--ink-2)", lineHeight: "1.55" }}>
                  ¿Tu situación es distinta? <Link href="/contacto" style={{ color: "var(--ink)", textDecoration: "underline" }}>Cuéntanosla.</Link>
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

        {/* SERVICIOS RELEVANTES */}
        <section className="svc-section" style={{ padding: "64px 0" }}>
          <div className="wrap">
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", marginBottom: "32px" }}>Los servicios que<br /><span className="serif">más se usan en fincas</span>.</h2>
            <div className="svc-grid-2">
              <div style={{ padding: "28px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Agentes de voz e IA</div>
                <p style={{ fontSize: "15px", lineHeight: "1.55", marginBottom: "20px" }}>Atención 24/7 por teléfono y WhatsApp. El agente conoce cada comunidad, gestiona incidencias y escala las urgencias reales.</p>
                <Link href="/servicios/agentes-de-voz" style={{ fontSize: "14px", fontWeight: "500", color: "var(--accent)" }}>Ver servicio →</Link>
              </div>
              <div style={{ padding: "28px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Automatización de procesos</div>
                <p style={{ fontSize: "15px", lineHeight: "1.55", marginBottom: "20px" }}>Flujos automáticos para envío de cuotas, recordatorios de pago, generación de informes y gestión de proveedores.</p>
                <Link href="/servicios/automatizacion-de-procesos" style={{ fontSize: "14px", fontWeight: "500", color: "var(--accent)" }}>Ver servicio →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-final">
          <div className="wrap">
            <span className="eyebrow" style={{ color: "#B8B6AE" }}>¿Gestionas más de 20 comunidades?</span>
            <h2 style={{ marginTop: "24px" }}>30 minutos para ver<br /><span className="serif">qué automatizaríamos primero.</span></h2>
            <p>Sin propuestas de 80 páginas. Nos cuentas cómo trabaja tu equipo, te decimos qué tiene sentido automatizar y cuánto recuperas.</p>
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
