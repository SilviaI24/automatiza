import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de automatización con IA para empresas",
  description: "Diagnóstico de procesos, agentes IA, automatización de procesos y CRM inteligente. Desde el análisis de tu operación hasta la implementación completa.",
  openGraph: {
    title: "Servicios de automatización con IA | Automatiza tu Empresa",
    description: "Diagnóstico de procesos, agentes IA, automatización de procesos y CRM inteligente. Desde el análisis de tu operación hasta la implementación completa.",
    url: "https://www.automatizatuempresa.com/servicios",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de automatización con IA | Automatiza tu Empresa",
    description: "Diagnóstico de procesos, agentes IA, automatización y CRM inteligente. Del análisis inicial a la implementación completa.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "https://www.automatizatuempresa.com/servicios",
  },
};

export default function Servicios() {
  return (
    <>
      <Nav />
      <main>
        {/* BREADCRUMB */}
        <div className="wrap" style={{ paddingTop: "24px", paddingBottom: "0" }}>
          <nav aria-label="Breadcrumb" style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", color: "var(--muted)" }}>
            <Link href="/" style={{ color: "var(--muted)" }}>Inicio</Link>
            <span>›</span>
            <span style={{ color: "var(--ink)" }}>Servicios</span>
          </nav>
        </div>

        {/* PAGE HERO */}
        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Servicios</span>
            <h1>Servicios de<br /><span className="serif">automatización</span><br />con IA.</h1>
            <p className="lede">
              Cinco servicios para automatizar la operación de tu empresa de principio a fin: diagnóstico de procesos, agentes IA, automatización de procesos, CRM inteligente y software a medida.
            </p>
            <div className="toc">
              <a href="#auditoria">→ Diagnóstico de procesos</a>
              <a href="#automatizacion">→ Automatización de flujos</a>
              <a href="#agentes">→ Agentes conversacionales y de voz</a>
              <a href="#crm">→ CRM inteligente</a>
              <a href="#agentico">→ Sistemas a medida</a>
            </div>
          </div>
        </header>

        {/* 01 AUDITORÍA */}
        <section className="svc-section" id="auditoria">
          <div className="wrap">
            <div className="svc-head">
              <div>
                <div className="label">01 / Diagnóstico</div>
                <h2>Diagnóstico<br />de procesos</h2>
              </div>
              <div>
                <p className="lede">Antes de construir nada, analizamos. Mapeamos cómo funciona realmente tu empresa — no cómo crees que funciona — y detectamos qué procesos consumen más tiempo, dónde se producen errores y cuánto vale automatizar cada uno.</p>
                <div className="channels">
                  <span className="chip"><span className="ind"></span>Entrevistas de proceso</span>
                  <span className="chip"><span className="ind"></span>Mapa de flujos actuales</span>
                  <span className="chip"><span className="ind"></span>Identificación de fricciones</span>
                  <span className="chip"><span className="ind"></span>ROI por proceso</span>
                  <span className="chip"><span className="ind"></span>Hoja de ruta priorizada</span>
                </div>
              </div>
            </div>

            <div className="svc-grid-sym">
              <div style={{ background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)", padding: "40px" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "24px" }}>Entregable del diagnóstico</div>
                {[
                  { n: "01", t: "Mapa de procesos actual", d: "Diagrama visual de cómo fluye la información y las tareas en tu empresa hoy." },
                  { n: "02", t: "Inventario de automatizables", d: "Lista priorizada de procesos que se pueden automatizar, con estimación de horas recuperadas." },
                  { n: "03", t: "Análisis de ROI por proceso", d: "Coste actual (tiempo × personas) vs. coste de automatización y tiempo de retorno." },
                  { n: "04", t: "Hoja de ruta de implementación", d: "Orden recomendado de implementación con fases y criterios de prioridad." },
                ].map((item) => (
                  <div key={item.n} style={{ display: "flex", gap: "16px", paddingBottom: "20px", marginBottom: "20px", borderBottom: "1px solid var(--line-soft)" }}>
                    <div style={{ fontFamily: "'Geist Mono'", fontSize: "13px", color: "var(--accent)", flexShrink: 0, width: "28px" }}>{item.n}</div>
                    <div>
                      <strong style={{ fontSize: "15px", display: "block", marginBottom: "4px" }}>{item.t}</strong>
                      <p style={{ fontSize: "13px", color: "var(--ink-2)", lineHeight: "1.5" }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 style={{ fontSize: "28px", marginBottom: "18px" }}>¿Para quién es el diagnóstico?</h3>
                <p style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-2)", marginBottom: "24px" }}>Para cualquier empresa que sienta que sus equipos pasan demasiado tiempo en tareas que podrían automatizarse — pero no saben por dónde empezar ni cuánto vale hacerlo.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    "Empresas con procesos manuales repetitivos",
                    "Equipos que trabajan con muchas herramientas no integradas",
                    "Negocios que quieren escalar sin contratar más personal",
                    "Directivos que necesitan datos para justificar la inversión en IA",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: "var(--mint)", display: "grid", placeItems: "center", color: "#1B4332", fontSize: "14px", flexShrink: 0 }}>✓</div>
                      <div style={{ fontSize: "14px", lineHeight: "1.5", paddingTop: "4px" }}>{item}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "28px", padding: "20px", background: "var(--bg-2)", borderRadius: "var(--r-md)", borderLeft: "3px solid var(--accent)" }}>
                  <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--ink-2)" }}>
                    <strong style={{ color: "var(--ink)" }}>El diagnóstico es un servicio independiente.</strong> El informe y el plan de acción son tuyos — construyas la automatización con nosotros o no. También ofrecemos seguimiento mensual para equipos que quieren acompañamiento continuo sin comprometerse a un proyecto completo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 AUTOMATIZACIÓN */}
        <section className="svc-section" id="automatizacion">
          <div className="wrap">
            <div className="svc-head">
              <div>
                <div className="label">02 / Automatización</div>
                <h2>Automatización<br />de flujos</h2>
              </div>
              <div>
                <p className="lede">Conectamos las herramientas que ya usas — CRM, email, hojas de cálculo, ERP, formularios — y construimos flujos automáticos a medida que ejecutan tareas complejas 24 horas al día, sin intervención humana y sin errores.</p>
                <div className="channels">
                  <span className="chip"><span className="ind"></span>HubSpot</span>
                  <span className="chip"><span className="ind"></span>Airtable</span>
                  <span className="chip"><span className="ind"></span>Notion</span>
                  <span className="chip"><span className="ind"></span>Google Workspace</span>
                  <span className="chip off"><span className="ind"></span>+200 conectores</span>
                </div>
                <div style={{ marginTop: "24px" }}>
                  <Link href="/servicios/automatizacion-de-procesos" className="btn btn-primary" style={{ fontSize: "14px", padding: "10px 20px" }}>
                    Ver en detalle →
                  </Link>
                </div>
              </div>
            </div>

            <div className="svc-grid-sym">
              <div>
                <h3 style={{ fontSize: "28px", marginBottom: "18px" }}>Casos de uso típicos</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[
                    { t: "→ Gestión de leads automática", d: "Nuevo lead en formulario → enriquecido con IA → puntuado → asignado al comercial correcto → notificado por Slack → registrado en CRM." },
                    { t: "→ Onboarding de clientes", d: "Contrato firmado → espacio creado en Notion → invitación enviada → tareas asignadas al equipo → cliente notificado." },
                    { t: "→ Facturación y seguimiento", d: "Proyecto completado → factura generada → enviada al cliente → seguimiento automático hasta confirmar recepción." },
                    { t: "→ Reportes automáticos", d: "Informe semanal de métricas del CRM, marketing y operaciones enviado al equipo directivo sin intervención manual." },
                  ].map((item) => (
                    <div key={item.t} style={{ padding: "18px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-md)" }}>
                      <strong style={{ fontSize: "15px" }}>{item.t}</strong>
                      <p style={{ fontSize: "13px", color: "var(--ink-2)", marginTop: "4px", lineHeight: "1.5" }}>{item.d}</p>
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

        {/* 03 AGENTES — conversacionales + voz fusionados */}
        <section className="svc-section dark" id="agentes">
          <div className="wrap">
            <div className="svc-head">
              <div>
                <div className="label">03 / Agentes IA</div>
                <h2>Agentes conversacionales<br />y de voz</h2>
              </div>
              <div>
                <p className="lede">Agentes IA que atienden, cualifican y resuelven — por chat, WhatsApp o teléfono. No siguen árboles de decisión rígidos: razonan sobre tu catálogo, tu CRM y tu base de conocimiento en tiempo real. Resuelven hasta el 70% de los casos sin intervención humana y escalan al equipo cuando hace falta.</p>
                <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link href="/servicios/agentes-de-voz" className="btn btn-primary" style={{ fontSize: "14px", padding: "10px 20px" }}>
                    Ver en detalle →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 CRM INTELIGENTE */}
        <section className="svc-section dark" id="crm">
          <div className="wrap">
            <div className="svc-head">
              <div>
                <div className="label">04 / CRM</div>
                <h2>CRM inteligente</h2>
              </div>
              <div>
                <p className="lede">Configuramos sistemas CRM con capas de inteligencia artificial: lead scoring automático, pipelines que avanzan solos y seguimiento inteligente activado por el comportamiento del lead. Tu equipo se centra en cerrar, no en administrar datos.</p>
                <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link href="/servicios/crm-inteligente" className="btn btn-primary" style={{ fontSize: "14px", padding: "10px 20px" }}>
                    Ver en detalle →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 SISTEMAS A MEDIDA */}
        <section className="svc-section" id="agentico">
          <div className="wrap">
            <div className="svc-head">
              <div>
                <div className="label">05 / Software a medida</div>
                <h2>Sistemas a medida.</h2>
              </div>
              <div>
                <p className="lede">Para operaciones más complejas. Diseñamos arquitecturas con varios agentes especializados que colaboran entre sí sobre tus sistemas internos — con orquestación, observabilidad y humano en el loop donde importa.</p>
              </div>
            </div>

            <div className="svc-grid-sym">
              <div className="arch">
                <div className="arch-label">Capa de entrada</div>
                <div className="arch-row">
                  <div className="arch-pill"><span className="dot"></span>WhatsApp</div>
                  <div className="arch-pill"><span className="dot"></span>Web chat</div>
                  <div className="arch-pill"><span className="dot"></span>Voz</div>
                  <div className="arch-pill"><span className="dot"></span>Email</div>
                </div>
                <div className="arch-connector"></div>
                <div className="arch-label">Orquestador (router)</div>
                <div className="arch-row">
                  <div className="arch-pill solid"><span className="dot"></span>Agente coordinador</div>
                </div>
                <div className="arch-connector"></div>
                <div className="arch-label">Agentes especializados</div>
                <div className="arch-row">
                  <div className="arch-pill"><span className="dot"></span>Ventas</div>
                  <div className="arch-pill"><span className="dot"></span>Soporte L1</div>
                  <div className="arch-pill"><span className="dot"></span>Back-office</div>
                  <div className="arch-pill"><span className="dot"></span>Agendado</div>
                </div>
                <div className="arch-connector"></div>
                <div className="arch-label">Sistemas conectados</div>
                <div className="arch-row">
                  <div className="arch-pill"><span className="dot"></span>CRM</div>
                  <div className="arch-pill"><span className="dot"></span>ERP</div>
                  <div className="arch-pill"><span className="dot"></span>Calendario</div>
                  <div className="arch-pill"><span className="dot"></span>APIs propias</div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: "28px", marginBottom: "18px" }}>¿Cuándo tiene sentido?</h3>
                <p style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-2)", marginBottom: "24px" }}>Cuando un único agente ya no cubre el alcance. Cuando hay procesos que cruzan departamentos. Cuando necesitas que la IA no solo responda sino que <em>ejecute</em> sobre tus sistemas internos.</p>
                {[
                  { t: "→ Operación entera de un departamento", d: "Atención + ventas + agendado + facturación gestionado por agentes coordinados." },
                  { t: "→ Procesos cross-funcionales", d: "Onboarding de cliente que requiere comercial + legal + ops. La IA orquesta los pasos." },
                  { t: "→ Operativa interna autónoma", d: "Generación de informes, conciliación de facturas, gestión de incidencias, sin intervención humana hasta la excepción." },
                ].map((item) => (
                  <div key={item.t} style={{ padding: "18px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-md)", marginBottom: "14px" }}>
                    <strong style={{ fontSize: "15px" }}>{item.t}</strong>
                    <p style={{ fontSize: "13px", color: "var(--ink-2)", marginTop: "4px", lineHeight: "1.5" }}>{item.d}</p>
                  </div>
                ))}
                <div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {["Datos en Europa", "RGPD + AI Act", "Auditoría completa", "Humano en el loop", "SLA dedicado"].map((tag) => (
                    <span key={tag} style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", background: "var(--bg-2)", padding: "6px 12px", borderRadius: "var(--r-pill)" }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="cta-final">
          <div className="wrap">
            <span className="eyebrow" style={{ color: "#B8B6AE" }}>¿No estás seguro de por dónde empezar?</span>
            <h2 style={{ marginTop: "24px" }}>Hablemos de tu<br />operación. <span className="serif">Sin venta dura.</span></h2>
            <p>Una conversación, sin venta dura. Nos cuentas cómo trabaja tu equipo, hacemos las preguntas correctas y te damos una primera opinión honesta. Si tiene sentido seguir, lo sabrás antes de salir.</p>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.automatizatuempresa.com" },
              { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.automatizatuempresa.com/servicios" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Servicios de automatización con IA",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Diagnóstico de procesos", url: "https://www.automatizatuempresa.com/servicios#auditoria" },
              { "@type": "ListItem", position: 2, name: "Automatización de procesos", url: "https://www.automatizatuempresa.com/servicios/automatizacion-de-procesos" },
              { "@type": "ListItem", position: 3, name: "Agentes de voz y conversacionales", url: "https://www.automatizatuempresa.com/servicios/agentes-de-voz" },
              { "@type": "ListItem", position: 4, name: "CRM inteligente", url: "https://www.automatizatuempresa.com/servicios/crm-inteligente" },
              { "@type": "ListItem", position: 5, name: "Sistemas a medida", url: "https://www.automatizatuempresa.com/servicios#agentico" },
            ],
          }),
        }}
      />
    </>
  );
}
