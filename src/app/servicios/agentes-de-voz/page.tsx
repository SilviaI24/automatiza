import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agentes de voz y conversacionales con IA para empresas",
  description:
    "Agentes de IA que atienden, cualifican y resuelven en teléfono, WhatsApp y chat. Hasta el 70-80% de casos resueltos sin intervención humana.",
  alternates: { canonical: "https://www.automatizatuempresa.com/servicios/agentes-de-voz" },
  openGraph: {
    title: "Agentes de voz y conversacionales con IA para empresas",
    description:
      "Agentes de IA que atienden, cualifican y resuelven por teléfono, WhatsApp y chat — y escalan al humano cuando hace falta.",
    url: "https://www.automatizatuempresa.com/servicios/agentes-de-voz",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentes de voz y conversacionales con IA",
    description:
      "Atienden, cualifican y resuelven por teléfono, WhatsApp y chat. Hasta 70-80% de casos resueltos sin humano.",
    images: ["/og.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agentes de voz y conversacionales con IA",
  serviceType: "Agentes de IA conversacionales y de voz",
  description:
    "Agentes de IA que atienden, cualifican y resuelven por teléfono, WhatsApp y chat para empresas.",
  provider: { "@id": "https://www.automatizatuempresa.com/#organization" },
  areaServed: { "@type": "Country", name: "España" },
  url: "https://www.automatizatuempresa.com/servicios/agentes-de-voz",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.automatizatuempresa.com" },
    { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.automatizatuempresa.com/servicios" },
    { "@type": "ListItem", position: 3, name: "Agentes de voz", item: "https://www.automatizatuempresa.com/servicios/agentes-de-voz" },
  ],
};

const faqs = [
  {
    q: "¿En qué se diferencia de un chatbot tradicional?",
    a: "Un chatbot sigue un árbol de decisiones fijo y se rompe en cuanto la pregunta se sale del guión. Un agente de IA razona sobre la conversación, consulta tu CRM o catálogo en tiempo real y ejecuta acciones — resolviendo hasta el 70-80% de los casos sin intervención humana.",
  },
  {
    q: "¿En qué idiomas puede atender el agente?",
    a: "En todos los idiomas que necesites. La configuración estándar es español, pero podemos activar inglés, catalán, francés, alemán o cualquier otro idioma según tu mercado.",
  },
  {
    q: "¿Se integra con mi centralita o WhatsApp Business actual?",
    a: "Sí. Nos conectamos con WhatsApp Business API, centralitas VoIP, CRMs (HubSpot, Salesforce, Pipedrive…), calendarios y sistemas de tickets. Si ya tienes infraestructura, el agente se integra en ella.",
  },
  {
    q: "¿Cuánto tarda en estar operativo?",
    a: "Depende de la complejidad. Un agente para un caso de uso concreto (atención, cualificación, agendado) puede estar en producción en pocas semanas. Sistemas más complejos con múltiples integraciones requieren más iteraciones. En todos los casos validamos resultados desde el primer despliegue.",
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

export default function AgentesDeVoz() {
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
            <span style={{ color: "var(--ink)" }}>Agentes de voz</span>
          </nav>
        </div>

        {/* PAGE HERO */}
        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">03 / Agentes IA</span>
            <h1>Agentes de voz y<br /><span className="serif">conversacionales</span><br />con IA.</h1>
            <p className="lede">
              No siguen árboles de decisión rígidos: razonan sobre tu catálogo, tu base de conocimiento y tu CRM en tiempo real, ejecutan acciones y escalan a un humano cuando hace falta.
            </p>
            <div className="channels" style={{ marginTop: "32px" }}>
              <span className="chip"><span className="ind"></span>Web (widget)</span>
              <span className="chip"><span className="ind"></span>WhatsApp Business API</span>
              <span className="chip"><span className="ind"></span>Instagram DM</span>
              <span className="chip"><span className="ind"></span>Telegram</span>
              <span className="chip"><span className="ind"></span>Llamadas entrantes</span>
              <span className="chip"><span className="ind"></span>Llamadas salientes</span>
            </div>
          </div>
        </header>

        {/* QUÉ PUEDE HACER + DEMO */}
        <section className="svc-section dark">
          <div className="wrap">
            <div className="svc-grid-asym">
              <div className="conv-mock">
                <div className="conv-head">
                  <div className="ava">A</div>
                  <div className="meta">
                    <div className="name">Ana · Agente IA</div>
                    <div className="sub">Olea&amp;Co · Atención cliente</div>
                  </div>
                  <div className="src">WhatsApp</div>
                </div>
                <div className="conv-body">
                  <div className="conv-b r">¡Hola Marta! ¿En qué te ayudo?</div>
                  <div className="conv-b u">¿Hacéis envío a Canarias?</div>
                  <div className="conv-b r">Sí, envíos a Canarias en 5-7 días. Los pedidos &gt;60€ van con gastos incluidos. ¿Necesitas algo concreto?</div>
                  <div className="conv-b u">Busco las botas Olea modelo 2024 en talla 39</div>
                  <div className="conv-b r">Las tengo en stock en marrón y negro. ¿Te paso enlace de compra o prefieres reservar?</div>
                  <span className="conv-tag">Consultado catálogo en tiempo real</span>
                  <span className="conv-tag">Contacto registrado en CRM</span>
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: "clamp(32px,4vw,48px)", color: "var(--paper)", marginBottom: "28px" }}>Qué puede hacer<br />el agente</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
                  {[
                    { n: "1", t: "Conoce tu negocio", d: "entrenado sobre tu documentación, catálogo y políticas" },
                    { n: "2", t: "Ejecuta acciones", d: "consulta stock, crea tickets, agenda citas, enriquece el CRM" },
                    { n: "3", t: "Handover inteligente", d: "pasa a un humano con contexto completo cuando hace falta" },
                    { n: "4", t: "Habla como tu marca", d: "tono ajustado a tu voz, no genérico" },
                  ].map((item) => (
                    <div key={item.n} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                      <div style={{ width: "26px", height: "26px", borderRadius: "6px", background: "var(--mint)", display: "grid", placeItems: "center", color: "#1B4332", fontSize: "13px", fontWeight: "600", flexShrink: 0 }}>{item.n}</div>
                      <div style={{ fontSize: "15px", color: "#D8D5CE", lineHeight: "1.5" }}>
                        <strong style={{ color: "var(--paper)" }}>{item.t}</strong> · {item.d}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ padding: "20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--r-md)", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "var(--accent)", color: "var(--accent-ink)", display: "grid", placeItems: "center", fontWeight: "700", flexShrink: 0 }}>!</div>
                  <p style={{ fontSize: "14px", color: "#D8D5CE", lineHeight: "1.5" }}>
                    <strong style={{ color: "var(--paper)" }}>Transparencia:</strong> el agente de voz notifica siempre al inicio de la llamada que se trata de un asistente. Cumple AI Act + LSSI. La voz es natural; la transparencia es innegociable.
                  </p>
                </div>
              </div>
            </div>

            <div className="stat-row">
              <div className="stat"><div className="v">70<span className="ac">%</span></div><div className="l">Tasa media de resolución sin escalado humano</div></div>
              <div className="stat"><div className="v">&lt;2s</div><div className="l">Tiempo medio de primera respuesta</div></div>
              <div className="stat"><div className="v">24/7</div><div className="l">Disponibilidad sin festivos ni guardias</div></div>
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
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", marginBottom: "32px" }}>Conecta con el resto<br />de tu <span className="serif">operación</span>.</h2>
            <div className="svc-grid-2">
              <div style={{ padding: "28px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>CRM Inteligente</div>
                <p style={{ fontSize: "15px", lineHeight: "1.55", marginBottom: "20px" }}>Cada conversación del agente enriquece automáticamente tu CRM: lead scoring, historial y seguimiento sin intervención manual.</p>
                <Link href="/servicios/crm-inteligente" style={{ fontSize: "14px", fontWeight: "500", color: "var(--accent)" }}>
                  Ver CRM inteligente →
                </Link>
              </div>
              <div style={{ padding: "28px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Caso real</div>
                <p style={{ fontSize: "15px", lineHeight: "1.55", marginBottom: "20px" }}>Administración de fincas: agente de voz que gestiona consultas de 60 comunidades y descongestion el teléfono el día 1 de cada mes.</p>
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
            <span className="eyebrow" style={{ color: "#B8B6AE" }}>¿Te imaginas tu equipo sin gestionar llamadas repetitivas?</span>
            <h2 style={{ marginTop: "24px" }}>Reserva 30 minutos.<br /><span className="serif">Sin compromiso.</span></h2>
            <p>Te decimos qué automatizaríamos primero en tu operación y qué resultado puedes esperar.</p>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
