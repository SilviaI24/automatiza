import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

const BASE = "https://www.automatizatuempresa.com";
const URL_PILAR = `${BASE}/automatizacion-empresas-con-ia`;

export const metadata: Metadata = {
  title: "Automatización de empresas con IA",
  description:
    "Guía completa sobre cómo automatizar una empresa con inteligencia artificial: procesos, herramientas, casos reales y cómo empezar. Agencia especializada en España.",
  alternates: { canonical: URL_PILAR },
  openGraph: {
    title: "Automatización de empresas con IA | Automatiza tu Empresa",
    description:
      "Cómo automatizar una empresa con IA: procesos, agentes, CRM inteligente y casos reales. Agencia especializada en Asturias, España.",
    url: URL_PILAR,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización de empresas con IA",
    description:
      "Guía completa: cómo automatizar tu empresa con IA. Procesos, herramientas y casos reales.",
    images: ["/og.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: BASE },
    { "@type": "ListItem", position: 2, name: "Automatización de empresas con IA", item: URL_PILAR },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${URL_PILAR}#webpage`,
  url: URL_PILAR,
  name: "Automatización de empresas con IA",
  dateModified: "2026-07-21",
  isPartOf: { "@id": `${BASE}/#website` },
};

const faqs = [
  {
    q: "¿Qué es la automatización empresarial con IA?",
    a: "{{PENDIENTE: respuesta de 3-4 frases explicando qué es, qué procesos incluye y qué diferencia hay respecto a la automatización tradicional (RPA, scripts fijos). Mencionar agentes IA, flujos automáticos y CRM inteligente.}}",
  },
  {
    q: "¿Qué procesos de una empresa se pueden automatizar con IA?",
    a: "{{PENDIENTE: lista de procesos habituales: atención al cliente, gestión de leads, onboarding, facturación, reportes, seguimiento comercial. Indicar cuáles son los más frecuentes en B2B.}}",
  },
  {
    q: "¿Cuánto cuesta automatizar una empresa con IA?",
    a: "{{PENDIENTE: rango orientativo o modelo de pricing (diagnóstico fijo + proyecto variable). No dar números exactos si no están definidos — usar rangos o explicar que depende del alcance.}}",
  },
  {
    q: "¿Por dónde se empieza a automatizar una empresa?",
    a: "{{PENDIENTE: explicar el proceso: diagnóstico de procesos → priorización por ROI → construcción → mantenimiento. Mencionar los 30 min gratuitos como primer paso.}}",
  },
  {
    q: "¿Cuánto tiempo lleva implementar automatización con IA en una empresa?",
    a: "{{PENDIENTE: dar rangos reales de tiempo según complejidad (días para flujo simple, semanas para proyecto completo). Mencionar que se valida desde el primer despliegue.}}",
  },
  {
    q: "¿Qué diferencia hay entre un agente IA y un chatbot?",
    a: "Un chatbot sigue un árbol de decisiones fijo y falla en cuanto la pregunta se sale del guion. Un agente de IA razona sobre la conversación, consulta sistemas externos en tiempo real (CRM, catálogo, base de conocimiento) y ejecuta acciones. La diferencia práctica: el agente resuelve el 70-80% de los casos solo; el chatbot deriva al humano continuamente.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function AutomatizacionEmpresasConIA() {
  return (
    <>
      <Nav />
      <main>
        {/* BREADCRUMB */}
        <div className="wrap" style={{ paddingTop: "24px", paddingBottom: "0" }}>
          <nav aria-label="Breadcrumb" style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", color: "var(--muted)" }}>
            <Link href="/" style={{ color: "var(--muted)" }}>Inicio</Link>
            <span>›</span>
            <span style={{ color: "var(--ink)" }}>Automatización de empresas con IA</span>
          </nav>
        </div>

        {/* PAGE HERO — RESPUESTA DIRECTA GEO */}
        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Guía · Automatización con IA</span>
            <h1>Automatización de<br /><span className="serif">empresas con IA</span>.</h1>
            <p className="lede">
              Automatizar una empresa con IA significa usar agentes inteligentes y flujos automáticos para ejecutar los procesos repetitivos de tu operación — atención al cliente, gestión de leads, facturación y reportes — sin intervención humana y sin errores. El equipo se concentra en lo que solo una persona puede hacer.
            </p>
          </div>
        </header>

        {/* QUÉ ES — definición GEO extendida */}
        <section className="block" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div style={{ maxWidth: "760px" }}>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", marginBottom: "20px" }}>¿Qué es la automatización empresarial con IA?</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "var(--ink-2)", marginBottom: "16px" }}>
                {"{{PENDIENTE: párrafo 1 — definición clara y autocontenida: qué es, qué no es, en qué se diferencia de la automatización sin IA (RPA, macros, scripts fijos). 80-120 palabras.}}"}
              </p>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "var(--ink-2)", marginBottom: "16px" }}>
                {"{{PENDIENTE: párrafo 2 — qué tipos de procesos cubre: operativos (facturación, onboarding), comerciales (leads, seguimiento, CRM) y de atención (voz, chat, WhatsApp). 60-80 palabras.}}"}
              </p>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "var(--ink-2)" }}>
                {"{{PENDIENTE: párrafo 3 — por qué ahora: coste de los modelos de IA, acceso a conectores (+200), casos reales en pymes y medianas empresas en España. 60-80 palabras.}}"}
              </p>
            </div>
          </div>
        </section>

        {/* PROCESOS MÁS AUTOMATIZADOS */}
        <section className="block">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">Procesos</span>
                <h2 style={{ marginTop: "18px" }}>¿Qué se puede<br /><span className="serif">automatizar con IA</span>?</h2>
              </div>
              <p className="desc">{"{{PENDIENTE: 2-3 frases intro: los procesos más frecuentes en empresas B2B de servicios que automatizan nuestros clientes.}}"}</p>
            </div>

            <div className="process-grid process-grid-3">
              {[
                { n: "Atención al cliente",        d: "{{PENDIENTE: 2 frases sobre agentes de voz/chat que atienden 24/7.}}" },
                { n: "Gestión de leads",            d: "{{PENDIENTE: 2 frases sobre captura, enriquecimiento y scoring automático.}}" },
                { n: "Onboarding de clientes",      d: "{{PENDIENTE: 2 frases sobre el flujo desde contrato firmado hasta cliente activo.}}" },
                { n: "Facturación y cobros",        d: "{{PENDIENTE: 2 frases sobre generación automática de facturas y seguimiento de pago.}}" },
                { n: "Reportes y dashboards",       d: "{{PENDIENTE: 2 frases sobre informes automáticos enviados al equipo directivo.}}" },
                { n: "Seguimiento comercial",       d: "{{PENDIENTE: 2 frases sobre secuencias automáticas activadas por comportamiento del lead.}}" },
              ].map((item) => (
                <div key={item.n} className="step">
                  <h3>{item.n}</h3>
                  <p>{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CÓMO EMPEZAR */}
        <section className="block process" id="como-empezar">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow" style={{ color: "#B8B6AE" }}>Por dónde empezar</span>
                <h2 style={{ marginTop: "18px", color: "var(--paper)" }}>El camino hacia una<br /><span className="serif">operación automatizada</span>.</h2>
              </div>
              <p className="desc" style={{ color: "#B8B6AE" }}>
                {"{{PENDIENTE: 2-3 frases describiendo la metodología general: diagnóstico → diseño → build → mantenimiento.}}"}
              </p>
            </div>
            <div className="process-grid process-grid-3">
              <div className="step">
                <span className="n">01 — Diagnóstico de procesos</span>
                <h3>Mapear antes de construir</h3>
                <p>{"{{PENDIENTE: 2-3 frases sobre el diagnóstico: qué incluye, qué entrega (informe + hoja de ruta), cuánto tarda.}}"}</p>
                <Link href="/servicios#auditoria" style={{ fontSize: "14px", color: "var(--accent-hi)", marginTop: "12px", display: "inline-block" }}>
                  Ver el diagnóstico →
                </Link>
              </div>
              <div className="step">
                <span className="n">02 — Diseño y construcción</span>
                <h3>La arquitectura correcta</h3>
                <p>{"{{PENDIENTE: 2-3 frases sobre cómo se diseña e implementa la solución: conectamos herramientas existentes, construimos flujos específicos.}}"}</p>
              </div>
              <div className="step step-last">
                <span className="n">03 — Mantenimiento continuo</span>
                <h3>El sistema mejora contigo</h3>
                <p>{"{{PENDIENTE: 2-3 frases sobre mantenimiento, evolución y soporte. Mencionar que no desaparecemos después de entregar.}}"}</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS — ENLACE A PÁGINAS HIJA */}
        <section className="block" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">Servicios</span>
                <h2 style={{ marginTop: "18px" }}>Las tres piezas de una<br /><span className="serif">operación automatizada</span>.</h2>
              </div>
              <p className="desc">Cada proyecto combina los bloques que necesita tu empresa. Diagnóstico, construcción y mantenimiento incluidos.</p>
            </div>
            <div className="svc-cards-home">
              <Link href="/servicios/agentes-de-voz" className="svc-card-home">
                <span className="eyebrow" style={{ marginBottom: "12px" }}>Agentes IA</span>
                <h3>Agentes de voz y conversacionales</h3>
                <p>Atienden, cualifican y resuelven por teléfono, WhatsApp y chat — sin intervención humana en el 70-80% de los casos.</p>
                <span className="svc-card-link">Ver servicio →</span>
              </Link>
              <Link href="/servicios/automatizacion-de-procesos" className="svc-card-home">
                <span className="eyebrow" style={{ marginBottom: "12px" }}>Automatización</span>
                <h3>Automatización de procesos</h3>
                <p>Flujos automáticos 24/7 que conectan tus herramientas: leads, onboarding, facturación y reportes sin trabajo manual.</p>
                <span className="svc-card-link">Ver servicio →</span>
              </Link>
              <Link href="/servicios/crm-inteligente" className="svc-card-home">
                <span className="eyebrow" style={{ marginBottom: "12px" }}>CRM</span>
                <h3>CRM inteligente con IA</h3>
                <p>Lead scoring automático, pipelines que avanzan solos y seguimiento inteligente. Tu equipo cierra, no administra.</p>
                <span className="svc-card-link">Ver servicio →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CASOS REALES */}
        <section className="block">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">Casos reales</span>
                <h2 style={{ marginTop: "18px" }}>Empresas que ya<br /><span className="serif">automatizan con IA</span>.</h2>
              </div>
              <p className="desc">{"{{PENDIENTE: 2 frases intro recordando los sectores: fincas, inmobiliaria, legal. Enlazar a /casos.}}"}</p>
            </div>
            <div style={{ marginTop: "32px" }}>
              <Link href="/casos" className="btn btn-secondary">
                Ver todos los casos
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="block faq" id="faq" style={{ background: "var(--bg-2)" }}>
          <div className="wrap faq-grid">
            <div className="sticky-info">
              <span className="eyebrow">FAQ</span>
              <h2 style={{ marginTop: "18px" }}>Preguntas sobre<br />automatización<br /><span className="serif">empresarial</span>.</h2>
              <p style={{ marginTop: "20px", fontSize: "15px", color: "var(--ink-2)", lineHeight: "1.55", maxWidth: "300px" }}>
                Si tu duda no está aquí, escríbenos directamente.
              </p>
              <Link href="/contacto" className="btn btn-primary" style={{ marginTop: "24px" }}>
                Reservar 30 minutos
              </Link>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="cta-final">
          <div className="wrap">
            <span className="eyebrow" style={{ color: "#B8B6AE" }}>Siguiente paso</span>
            <h2 style={{ marginTop: "24px" }}>
              30 minutos para ver<br />
              si <span className="serif">tiene sentido.</span>
            </h2>
            <p>Cuéntanos qué hace tu equipo hoy que no debería hacer mañana. Sin propuestas de 80 páginas. Sin compromiso.</p>
            <div className="row">
              <Link href="/contacto" className="btn btn-primary">
                Reservar los 30 minutos
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
              <Link href="/servicios" className="btn btn-secondary">Ver servicios</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
