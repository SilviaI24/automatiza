import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatización de procesos low code para empresas",
  description:
    "Conectamos las herramientas que ya usas y construimos flujos automáticos 24/7: leads, onboarding, facturación y reportes. Más de 200 conectores.",
  alternates: { canonical: "https://www.automatizatuempresa.com/servicios/automatizacion-low-code" },
  openGraph: {
    title: "Automatización de procesos low code para empresas",
    description:
      "Flujos automáticos 24/7 que conectan tus herramientas actuales. Gestión de leads, onboarding, facturación y reportes sin intervención manual.",
    url: "https://www.automatizatuempresa.com/servicios/automatizacion-low-code",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización de procesos low code para empresas",
    description: "Flujos automáticos 24/7. Conectamos tus herramientas y eliminamos el trabajo manual repetitivo.",
    images: ["/og.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automatización de procesos low code",
  serviceType: "Automatización de flujos empresariales con low code",
  description:
    "Construcción de flujos automáticos que conectan CRM, email, hojas de cálculo, ERP y formularios para ejecutar tareas complejas 24/7 sin intervención humana.",
  provider: { "@id": "https://www.automatizatuempresa.com/#organization" },
  areaServed: { "@type": "Country", name: "España" },
  url: "https://www.automatizatuempresa.com/servicios/automatizacion-low-code",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.automatizatuempresa.com" },
    { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.automatizatuempresa.com/servicios" },
    { "@type": "ListItem", position: 3, name: "Automatización low code", item: "https://www.automatizatuempresa.com/servicios/automatizacion-low-code" },
  ],
};

const useCases = [
  { t: "→ Gestión de leads automática", d: "Nuevo lead en formulario → enriquecido con IA → puntuado → asignado al comercial correcto → notificado por Slack → registrado en CRM." },
  { t: "→ Onboarding de clientes", d: "Contrato firmado → espacio creado en Notion → invitación enviada → tareas asignadas al equipo → cliente notificado." },
  { t: "→ Facturación y seguimiento", d: "Proyecto completado → factura generada → enviada al cliente → seguimiento automático hasta confirmar recepción." },
  { t: "→ Reportes automáticos", d: "Informe semanal de métricas del CRM, marketing y operaciones enviado al equipo directivo sin intervención manual." },
];

export default function AutomatizacionLowCode() {
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
            <span style={{ color: "var(--ink)" }}>Automatización low code</span>
          </nav>
        </div>

        {/* PAGE HERO */}
        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">02 / Automatización</span>
            <h1>Automatización de<br /><span className="serif">procesos</span><br />low code.</h1>
            <p className="lede">
              Conectamos las herramientas que ya usas — CRM, email, hojas de cálculo, ERP, formularios — y construimos flujos automáticos que ejecutan tareas complejas 24 horas al día, sin intervención humana y sin errores.
            </p>
            <div className="channels" style={{ marginTop: "32px" }}>
              <span className="chip"><span className="ind"></span>Low code</span>
              <span className="chip"><span className="ind"></span>Software a medida</span>
              <span className="chip"><span className="ind"></span>HubSpot</span>
              <span className="chip"><span className="ind"></span>Airtable</span>
              <span className="chip"><span className="ind"></span>Google Workspace</span>
              <span className="chip off"><span className="ind"></span>+200 conectores</span>
            </div>
          </div>
        </header>

        {/* CASOS DE USO + ARQUITECTURA */}
        <section className="svc-section">
          <div className="wrap">
            <div className="svc-grid-asym">
              <div>
                <h2 style={{ fontSize: "clamp(32px,4vw,48px)", marginBottom: "28px" }}>Casos de uso<br /><span className="serif">típicos.</span></h2>
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

        {/* ENLACES INTERNOS */}
        <section className="svc-section" style={{ padding: "64px 0", background: "var(--bg-2)" }}>
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
    </>
  );
}
