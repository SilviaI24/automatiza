import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatización de procesos para empresas",
  description:
    "Analizamos cómo trabaja tu empresa y construimos flujos automáticos exactos: leads, onboarding, facturación y reportes sin trabajo manual.",
  alternates: { canonical: "https://www.automatizatuempresa.com/servicios/automatizacion-de-procesos" },
  openGraph: {
    title: "Automatización de procesos para empresas",
    description:
      "Flujos automáticos 24/7 diseñados a medida para tu operación. Leads, onboarding, facturación y reportes sin intervención manual.",
    url: "https://www.automatizatuempresa.com/servicios/automatizacion-de-procesos",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización de procesos para empresas",
    description: "Flujos automáticos 24/7 a medida. Eliminamos el trabajo manual repetitivo en tu operación.",
    images: ["/og.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automatización de procesos empresariales",
  serviceType: "Automatización de flujos y procesos empresariales",
  description:
    "Diseño y construcción de flujos automáticos que conectan las herramientas de la empresa para ejecutar tareas complejas 24/7 sin intervención humana.",
  provider: { "@id": "https://www.automatizatuempresa.com/#organization" },
  areaServed: { "@type": "Country", name: "España" },
  url: "https://www.automatizatuempresa.com/servicios/automatizacion-de-procesos",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.automatizatuempresa.com" },
    { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.automatizatuempresa.com/servicios" },
    { "@type": "ListItem", position: 3, name: "Automatización de procesos", item: "https://www.automatizatuempresa.com/servicios/automatizacion-de-procesos" },
  ],
};

const faqs = [
  {
    q: "¿Qué es automatizar procesos en una empresa?",
    a: "Automatizar procesos empresariales significa usar software para ejecutar tareas repetitivas sin intervención humana: clasificar leads, enviar notificaciones, actualizar registros, generar facturas o enviar reportes. La empresa sigue el mismo proceso, pero lo realiza un sistema en lugar de una persona.",
  },
  {
    q: "¿Qué procesos son los más habituales de automatizar?",
    a: "Los más frecuentes son: gestión de leads entrantes, onboarding de nuevos clientes, seguimiento comercial, facturación y cobros, y reportes periódicos. Prácticamente cualquier proceso que siga reglas fijas y se repita con regularidad es candidato a automatizarse.",
  },
  {
    q: "¿Necesito cambiar mis herramientas actuales?",
    a: "No. Conectamos las herramientas que ya usas — CRM, email, hojas de cálculo, ERP, formularios — y construimos los flujos encima. Menos de lo esperado cambia en tu operación diaria; lo que cambia es quién ejecuta el trabajo.",
  },
  {
    q: "¿Cuánto tarda en estar en producción?",
    a: "Depende del alcance. Un flujo concreto puede estar funcionando en días. Proyectos más completos con varias integraciones requieren más iteraciones. En todos los casos validamos resultados desde el primer despliegue.",
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

const useCases = [
  { t: "→ Gestión de leads automática", d: "Nuevo lead en formulario → enriquecido con IA → puntuado → asignado al comercial correcto → notificado por Slack → registrado en CRM." },
  { t: "→ Onboarding de clientes", d: "Contrato firmado → espacio creado en Notion → invitación enviada → tareas asignadas al equipo → cliente notificado." },
  { t: "→ Facturación y seguimiento", d: "Proyecto completado → factura generada → enviada al cliente → seguimiento automático hasta confirmar recepción." },
  { t: "→ Reportes automáticos", d: "Informe semanal de métricas del CRM, marketing y operaciones enviado al equipo directivo sin intervención manual." },
];

export default function AutomatizacionDeProcesos() {
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
            <span style={{ color: "var(--ink)" }}>Automatización de procesos</span>
          </nav>
        </div>

        {/* PAGE HERO */}
        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">02 / Automatización</span>
            <h1>Automatiza los<br /><span className="serif">procesos</span><br />de tu empresa.</h1>
            <p className="lede">
              Estudiamos cómo trabaja realmente tu equipo y construimos los flujos automáticos exactos que necesitas. Conectamos las herramientas que ya usas y eliminamos el trabajo manual que consume tiempo sin añadir valor.
            </p>
            <div className="channels" style={{ marginTop: "32px" }}>
              <span className="chip"><span className="ind"></span>Gestión de leads</span>
              <span className="chip"><span className="ind"></span>Onboarding</span>
              <span className="chip"><span className="ind"></span>Facturación</span>
              <span className="chip"><span className="ind"></span>Reportes</span>
              <span className="chip off"><span className="ind"></span>+200 conectores</span>
            </div>
          </div>
        </header>

        {/* QUÉ ES AUTOMATIZAR PROCESOS — definición GEO */}
        <section className="svc-section" style={{ paddingBottom: "0" }}>
          <div className="wrap">
            <div style={{ maxWidth: "720px" }}>
              <h2 style={{ fontSize: "clamp(24px,3vw,36px)", marginBottom: "16px" }}>¿Qué es automatizar procesos en una empresa?</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--ink-2)" }}>
                Automatizar procesos empresariales consiste en usar software para ejecutar tareas repetitivas sin intervención humana: clasificar leads, enviar notificaciones, actualizar registros, generar facturas o enviar reportes periódicos. La empresa sigue el mismo flujo de trabajo, pero lo realiza un sistema en lugar de una persona — 24 horas al día, sin errores y sin depender de que alguien esté disponible.
              </p>
            </div>
          </div>
        </section>

        {/* CASOS DE USO + ARQUITECTURA */}
        <section className="svc-section">
          <div className="wrap">
            <div className="svc-grid-asym">
              <div>
                <h2 style={{ fontSize: "clamp(32px,4vw,48px)", marginBottom: "28px" }}>Qué automatizamos<br /><span className="serif">en la práctica.</span></h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {useCases.map((item) => (
                    <div key={item.t} style={{ padding: "18px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-md)" }}>
                      <strong style={{ fontSize: "15px" }}>{item.t}</strong>
                      <p style={{ fontSize: "13px", color: "var(--ink-2)", marginTop: "6px", lineHeight: "1.5" }}>{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="arch">
                <div className="arch-label">Entrada del flujo</div>
                <div className="arch-row">
                  <div className="arch-pill"><span className="dot"></span>Formulario web</div>
                  <div className="arch-pill"><span className="dot"></span>Email</div>
                  <div className="arch-pill"><span className="dot"></span>Webhook</div>
                </div>
                <div className="arch-connector"></div>
                <div className="arch-label">Procesamiento IA</div>
                <div className="arch-row">
                  <div className="arch-pill solid"><span className="dot"></span>Clasificación y enriquecimiento</div>
                </div>
                <div className="arch-connector"></div>
                <div className="arch-label">Acciones automáticas</div>
                <div className="arch-row">
                  <div className="arch-pill"><span className="dot"></span>CRM actualizado</div>
                  <div className="arch-pill"><span className="dot"></span>Email enviado</div>
                  <div className="arch-pill"><span className="dot"></span>Notificación Slack</div>
                </div>
                <div className="arch-connector"></div>
                <div className="arch-label">Monitorización</div>
                <div className="arch-row">
                  <div className="arch-pill"><span className="dot"></span>Dashboard en tiempo real</div>
                  <div className="arch-pill"><span className="dot"></span>Alertas de errores</div>
                </div>
              </div>
            </div>

            <div className="stat-row">
              <div className="stat"><div className="v">24/7</div><div className="l">Los flujos trabajan aunque tu equipo duerma</div></div>
              <div className="stat"><div className="v">0<span className="ac">%</span></div><div className="l">Errores humanos en procesos automatizados</div></div>
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
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", marginBottom: "32px" }}>Completa tu<br /><span className="serif">stack de automatización</span>.</h2>
            <div className="svc-grid-2">
              <div style={{ padding: "28px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>CRM Inteligente</div>
                <p style={{ fontSize: "15px", lineHeight: "1.55", marginBottom: "20px" }}>Conecta los flujos de automatización con un CRM con IA que puntúa leads y gestiona el seguimiento comercial.</p>
                <Link href="/servicios/crm-inteligente" style={{ fontSize: "14px", fontWeight: "500", color: "var(--accent)" }}>
                  Ver CRM inteligente →
                </Link>
              </div>
              <div style={{ padding: "28px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Agentes conversacionales</div>
                <p style={{ fontSize: "15px", lineHeight: "1.55", marginBottom: "20px" }}>Añade agentes de IA que atiendan y cualifiquen a tus clientes por WhatsApp, voz o chat, y alimenten tus flujos automáticamente.</p>
                <Link href="/servicios/agentes-de-voz" style={{ fontSize: "14px", fontWeight: "500", color: "var(--accent)" }}>
                  Ver agentes de voz →
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
            <span className="eyebrow" style={{ color: "#B8B6AE" }}>¿Cuántas horas pierde tu equipo en tareas repetitivas?</span>
            <h2 style={{ marginTop: "24px" }}>Reserva 30 minutos.<br /><span className="serif">Sin compromiso.</span></h2>
            <p>En 30 minutos identificamos qué proceso automatizaríamos primero y cuántas horas recuperarías.</p>
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
