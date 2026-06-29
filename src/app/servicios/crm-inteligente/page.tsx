import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM inteligente con IA: lead scoring y seguimiento",
  description:
    "Configuramos un CRM con capas de IA: lead scoring automático, pipelines que avanzan solos y seguimiento inteligente. Tu equipo cierra, no administra datos.",
  alternates: { canonical: "https://www.automatizatuempresa.com/servicios/crm-inteligente" },
  openGraph: {
    title: "CRM inteligente con IA: lead scoring y seguimiento",
    description:
      "Lead scoring automático, pipelines que avanzan solos y seguimiento inteligente. Tu equipo cierra, no administra datos.",
    url: "https://www.automatizatuempresa.com/servicios/crm-inteligente",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM inteligente con IA",
    description:
      "Lead scoring, pipelines automáticos y seguimiento inteligente para que tu equipo cierre, no administre datos.",
    images: ["/og.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CRM inteligente con IA",
  serviceType: "Implantación de CRM con inteligencia artificial",
  description:
    "Configuración de CRM con lead scoring, pipelines automáticos y seguimiento inteligente impulsados por IA.",
  provider: { "@id": "https://www.automatizatuempresa.com/#organization" },
  areaServed: { "@type": "Country", name: "España" },
  url: "https://www.automatizatuempresa.com/servicios/crm-inteligente",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.automatizatuempresa.com" },
    { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.automatizatuempresa.com/servicios" },
    { "@type": "ListItem", position: 3, name: "CRM inteligente", item: "https://www.automatizatuempresa.com/servicios/crm-inteligente" },
  ],
};

const features = [
  { t: "Configuración CRM", d: "Configuramos el CRM desde cero o migramos el que ya tienes con todos los datos." },
  { t: "Lead scoring IA", d: "El sistema puntúa automáticamente los leads según su comportamiento y perfil ideal de cliente." },
  { t: "Pipelines automáticos", d: "Los leads avanzan solos por el embudo según sus acciones. Tu equipo solo interviene donde hace falta." },
  { t: "Seguimiento inteligente", d: "Secuencias de emails y llamadas activadas por el comportamiento del lead, no por una fecha fija." },
  { t: "Integraciones profundas", d: "CRM conectado con tu web, formularios, WhatsApp, email marketing, facturación y ERP." },
  { t: "Reporting en tiempo real", d: "Dashboards automáticos de ventas, conversión por etapa, tiempo de cierre y previsión." },
];

const faqs = [
  {
    q: "¿Funciona con el CRM que ya tengo o hay que migrar?",
    a: "Trabajamos con el CRM que ya tienes — HubSpot, Salesforce, Pipedrive, Zoho, Notion, Airtable u otros. Si necesitas migrar, también lo gestionamos. El objetivo es que pierdas el mínimo tiempo posible en la transición.",
  },
  {
    q: "¿Cómo puntúa los leads la IA?",
    a: "Definimos contigo el perfil de cliente ideal (ICP) y los comportamientos que indican intención de compra: páginas visitadas, formularios enviados, emails abiertos, tiempo en la web, cargo del contacto. La IA combina esas señales y asigna una puntuación que actualiza en tiempo real.",
  },
  {
    q: "¿Con qué herramientas se integra?",
    a: "Con más de 200 conectores: HubSpot, Salesforce, Pipedrive, Google Workspace, Slack, WhatsApp Business API, Mailchimp, Brevo, plataformas de facturación y ERPs. Si usas algo específico, pregúntanos.",
  },
];

export default function CrmInteligente() {
  return (
    <>
      <Nav />
      <main>
        {/* BREADCRUMB */}
        <div className="wrap" style={{ paddingTop: "24px", paddingBottom: "0" }}>
          <nav aria-label="Breadcrumb" style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", color: "var(--muted)" }}>
            <Link href="/" style={{ color: "var(--muted)" }}>Inicio</Link>
            <span>›</span>
            <Link href="/servicios" style={{ color: "var(--muted)" }}>Servicios</Link>
            <span>›</span>
            <span style={{ color: "var(--ink)" }}>CRM inteligente</span>
          </nav>
        </div>

        {/* PAGE HERO */}
        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">04 / CRM</span>
            <h1>CRM inteligente<br /><span className="serif">con IA.</span></h1>
            <p className="lede">
              Configuramos sistemas CRM con capas de inteligencia artificial para que tu equipo de ventas se centre en cerrar, no en administrar datos. Cada lead cualificado, cada seguimiento automatizado, cada oportunidad priorizada.
            </p>
            <div className="channels" style={{ marginTop: "32px" }}>
              <span className="chip"><span className="ind"></span>Lead scoring con IA</span>
              <span className="chip"><span className="ind"></span>Pipelines automáticos</span>
              <span className="chip"><span className="ind"></span>Seguimiento inteligente</span>
              <span className="chip"><span className="ind"></span>Forecasting</span>
              <span className="chip"><span className="ind"></span>+200 integraciones</span>
            </div>
          </div>
        </header>

        {/* QUÉ INCLUYE */}
        <section className="svc-section">
          <div className="wrap">
            <div className="section-head">
              <h2>Qué incluye<br />el <span className="serif">servicio</span>.</h2>
              <p className="desc">Un CRM sin IA es un archivo. Con IA, es un sistema que trabaja por tu equipo comercial las 24 horas.</p>
            </div>
            <div className="feat-grid">
              {features.map((item) => (
                <div key={item.t} className="feat">
                  <div className="ico">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M4 9h16M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: "17px" }}>{item.t}</h3>
                  <p>{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTADOS */}
        <section className="svc-section dark">
          <div className="wrap">
            <div className="section-head">
              <h2 style={{ color: "var(--paper)" }}>Resultados<br /><span className="serif">que puedes esperar.</span></h2>
              <p className="desc" style={{ color: "#B8B6AE" }}>Basados en proyectos reales de implantación de CRM con IA en empresas de servicios B2B.</p>
            </div>
            <div className="stat-row">
              <div className="stat"><div className="v">+40<span className="ac">%</span></div><div className="l">Tasa de conversión media de leads a clientes</div></div>
              <div className="stat"><div className="v">−60<span className="ac">%</span></div><div className="l">Tiempo dedicado a tareas administrativas en CRM</div></div>
              <div className="stat"><div className="v">3×</div><div className="l">Más oportunidades gestionadas por comercial sin ampliar plantilla</div></div>
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
                  ¿No encuentras tu pregunta? <Link href="/contacto" style={{ color: "var(--ink)", textDecoration: "underline" }}>Escríbenos directamente.</Link>
                </p>
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
          </div>
        </section>

        {/* ENLACES INTERNOS */}
        <section className="svc-section" style={{ padding: "64px 0" }}>
          <div className="wrap">
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", marginBottom: "32px" }}>Aliméntalo con agentes<br />que <span className="serif">cualifican</span>.</h2>
            <div className="svc-grid-2">
              <div style={{ padding: "28px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Agentes conversacionales y de voz</div>
                <p style={{ fontSize: "15px", lineHeight: "1.55", marginBottom: "20px" }}>Un agente que atiende a tus leads por WhatsApp o teléfono y alimenta el CRM automáticamente con cada interacción.</p>
                <Link href="/servicios/agentes-de-voz" style={{ fontSize: "14px", fontWeight: "500", color: "var(--accent)" }}>
                  Ver agentes de voz →
                </Link>
              </div>
              <div style={{ padding: "28px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Caso real</div>
                <p style={{ fontSize: "15px", lineHeight: "1.55", marginBottom: "20px" }}>Inmobiliaria: sistema que cualifica leads, actualiza el CRM y agenda visitas sin intervención humana.</p>
                <Link href="/casos" style={{ fontSize: "14px", fontWeight: "500", color: "var(--accent)" }}>
                  Ver caso real →
                </Link>
              </div>
            </div>
            <div style={{ marginTop: "32px" }}>
              <Link href="/servicios" style={{ fontSize: "14px", color: "var(--ink-2)" }}>
                ← Volver a todos los servicios
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="cta-final">
          <div className="wrap">
            <span className="eyebrow" style={{ color: "#B8B6AE" }}>¿Tu equipo pierde tiempo administrando el CRM?</span>
            <h2 style={{ marginTop: "24px" }}>Reserva 30 minutos.<br /><span className="serif">Sin compromiso.</span></h2>
            <p>Te decimos qué automatizaríamos primero en tu operación comercial y qué resultado puedes esperar.</p>
            <div className="row">
              <Link href="/contacto" className="btn btn-primary">
                Reservar 30 minutos
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </Link>
              <Link href="/casos" className="btn btn-secondary">Ver casos reales</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
