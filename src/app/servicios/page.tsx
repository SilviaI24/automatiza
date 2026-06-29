import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de automatización con IA para empresas",
  description: "Auditoría de procesos, agentes IA, automatización low code y CRM inteligente. Todo el ciclo, desde el diagnóstico hasta la autonomía operativa.",
  openGraph: {
    title: "Servicios de automatización con IA | Automatiza tu Empresa",
    description: "Auditoría de procesos, agentes IA, automatización low code y CRM inteligente. Todo el ciclo, desde el diagnóstico hasta la autonomía operativa.",
    url: "https://www.automatizatuempresa.com/servicios",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de automatización con IA | Automatiza tu Empresa",
    description: "Auditoría, agentes IA, automatización low code y CRM inteligente. Todo el ciclo, del diagnóstico a la autonomía operativa.",
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
        {/* PAGE HERO */}
        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Servicios</span>
            <h1>Servicios de<br /><span className="serif">automatización</span><br />con IA.</h1>
            <p className="lede">
              Cinco servicios para automatizar la operación de tu empresa de principio a fin: auditoría de procesos, agentes IA, automatización low code, CRM inteligente y software a medida.
            </p>
            <div className="toc">
              <a href="#auditoria">→ Auditoría de procesos</a>
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
                <h2>Auditoría de procesos<br />con IA</h2>
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

            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "48px", alignItems: "start" }}>
              <div style={{ background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)", padding: "40px" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "24px" }}>Entregable de auditoría</div>
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
                <h3 style={{ fontSize: "28px", marginBottom: "18px" }}>¿Para quién es la auditoría?</h3>
                <p style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-2)", marginBottom: "24px" }}>Para cualquier empresa que sienta que sus equipos pasan demasiado tiempo en tareas que &ldquo;deberían poder automatizarse&rdquo; — pero no saben por dónde empezar ni cuánto vale hacerlo.</p>
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
                <p className="lede">Conectamos las herramientas que ya usas — CRM, email, hojas de cálculo, ERP, formularios — y construimos flujos automáticos con low code o software a medida que ejecutan tareas complejas 24 horas al día, sin intervención humana y sin errores.</p>
                <div className="channels">
                  <span className="chip"><span className="ind"></span>Low code</span>
                  <span className="chip"><span className="ind"></span>Software a medida</span>
                  <span className="chip"><span className="ind"></span>HubSpot</span>
                  <span className="chip"><span className="ind"></span>Airtable</span>
                  <span className="chip"><span className="ind"></span>Notion</span>
                  <span className="chip"><span className="ind"></span>Google Workspace</span>
                  <span className="chip off"><span className="ind"></span>+200 conectores</span>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
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
                <p className="lede">Agentes IA que atienden, cualifican y resuelven — por chat, WhatsApp o teléfono. No siguen árboles de decisión rígidos: razonan sobre tu catálogo, tu base de conocimiento y tu CRM en tiempo real, y escalan a un humano cuando hace falta.</p>
                <div className="channels">
                  <span className="chip"><span className="ind"></span>Web (widget)</span>
                  <span className="chip"><span className="ind"></span>WhatsApp Business API</span>
                  <span className="chip"><span className="ind"></span>Instagram DM</span>
                  <span className="chip"><span className="ind"></span>Telegram</span>
                  <span className="chip"><span className="ind"></span>Llamadas entrantes</span>
                  <span className="chip"><span className="ind"></span>Llamadas salientes</span>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "48px", alignItems: "start" }}>
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
                <h3 style={{ fontSize: "28px", marginBottom: "18px", color: "var(--paper)" }}>Qué puede hacer el agente</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                  {[
                    { n: "1", t: "Conoce tu negocio", d: "entrenado sobre tu documentación, catálogo y políticas" },
                    { n: "2", t: "Ejecuta acciones", d: "consulta stock, crea tickets, agenda citas, enriquece CRM" },
                    { n: "3", t: "Handover inteligente", d: "pasa a un humano con contexto cuando hace falta" },
                    { n: "4", t: "Habla como tu marca", d: "tono ajustado a tu voz, no genérico" },
                  ].map((item) => (
                    <div key={item.n} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: "var(--mint)", display: "grid", placeItems: "center", color: "#1B4332", fontSize: "12px", fontWeight: "600", flexShrink: 0 }}>{item.n}</div>
                      <div style={{ fontSize: "14px", color: "#D8D5CE", lineHeight: "1.5" }}><strong style={{ color: "var(--paper)" }}>{item.t}</strong> · {item.d}</div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "8px", padding: "20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--r-md)", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "var(--accent)", color: "var(--accent-ink)", display: "grid", placeItems: "center", fontWeight: "700", flexShrink: 0 }}>!</div>
                  <div style={{ fontSize: "14px", color: "#D8D5CE", lineHeight: "1.5" }}><strong style={{ color: "var(--paper)" }}>Transparencia:</strong> el agente de voz notifica siempre al inicio de la llamada que se trata de un asistente. Cumple AI Act + LSSI. La voz es natural; la transparencia es innegociable.</div>
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

        {/* 04 CRM INTELIGENTE */}
        <section className="svc-section dark" id="crm">
          <div className="wrap">
            <div className="svc-head">
              <div>
                <div className="label">04 / CRM</div>
                <h2>CRM inteligente</h2>
              </div>
              <div>
                <p className="lede">Configuramos sistemas CRM con capas de inteligencia artificial para que tu equipo de ventas se centre en cerrar, no en administrar datos. Cada lead cualificado, cada seguimiento automatizado, cada oportunidad priorizada.</p>
                <div className="channels">
                  <span className="chip"><span className="ind"></span>Lead scoring con IA</span>
                  <span className="chip"><span className="ind"></span>Pipelines automáticos</span>
                  <span className="chip"><span className="ind"></span>Seguimiento inteligente</span>
                  <span className="chip"><span className="ind"></span>Forecasting</span>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
              <div className="feat-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: "0" }}>
                {[
                  { t: "Configuración CRM", d: "Configuramos el CRM desde cero o migramos el que ya tienes con todos los datos." },
                  { t: "Lead scoring IA", d: "El sistema puntúa automáticamente los leads según su comportamiento y perfil ideal de cliente." },
                  { t: "Pipelines automáticos", d: "Los leads avanzan solos por el embudo según sus acciones. Tu equipo solo interviene donde hace falta." },
                  { t: "Seguimiento inteligente", d: "Secuencias de emails y llamadas activadas por el comportamiento del lead, no por una fecha fija." },
                  { t: "Integraciones profundas", d: "CRM conectado con tu web, formularios, WhatsApp, email marketing, facturación y ERP." },
                  { t: "Reporting en tiempo real", d: "Dashboards automáticos de ventas, conversión por etapa, tiempo de cierre y previsión." },
                ].map((item) => (
                  <div key={item.t} className="feat">
                    <div className="ico">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M4 9h16M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                    </div>
                    <h4>{item.t}</h4>
                    <p>{item.d}</p>
                  </div>
                ))}
              </div>

              <div>
                <h3 style={{ fontSize: "28px", marginBottom: "18px" }}>¿Qué resultado puedes esperar?</h3>
                <div className="stat-row" style={{ gridTemplateColumns: "1fr", marginTop: "0" }}>
                  <div className="stat"><div className="v">+40<span className="ac">%</span></div><div className="l">Tasa de conversión media de leads a clientes</div></div>
                  <div className="stat"><div className="v">−60<span className="ac">%</span></div><div className="l">Tiempo de tu equipo dedicado a tareas administrativas en CRM</div></div>
                  <div className="stat"><div className="v">3×</div><div className="l">Más oportunidades gestionadas por comercial sin aumentar la plantilla</div></div>
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
                <p className="lede">Cuando low code no llega. Diseñamos arquitecturas con varios agentes especializados que colaboran entre sí sobre tus sistemas internos — con orquestación, observabilidad y humano en el loop donde importa.</p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
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
            <p>30 minutos. Te enseñamos qué automatizaríamos primero en tu caso. Salimos con un plan, una estimación, y la decisión está en tus manos.</p>
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
    </>
  );
}
