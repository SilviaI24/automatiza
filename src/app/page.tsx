import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatMock from "@/components/ChatMock";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Nav />
      <main>

        {/* ── HERO ─────────────────────────────────────────── */}
        <header className="hero">
          <div className="wrap hero-grid">
            <div>
              <div className="hero-badge">
                Agentes IA · Automatización · Low code
              </div>
              <h1>
                El trabajo que<br />
                consume a tu equipo<br />
                <span className="serif">puede hacerlo</span><br />
                <span className="pill">un sistema de IA.</span>
              </h1>
              <p className="hero-subhead">
                Automatizamos los procesos de tu empresa con agentes de voz, automatizaciones low code y CRMs inteligentes — para que tu operación funcione sola y tu equipo se dedique a lo que realmente importa.
              </p>
              <div className="hero-chips">
                <span>Llamadas sin contestar</span>
                <span>Seguimientos que se pierden</span>
                <span>Herramientas desconectadas</span>
              </div>
              <div className="hero-ctas">
                <Link href="/contacto" className="btn btn-accent">
                  Reservar 30 minutos
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </Link>
                <Link href="/casos" className="btn btn-secondary">Ver casos</Link>
              </div>
              <div className="hero-meta">
                <div><span className="hero-cap">Customer journey completo</span><span className="lbl">Del primer contacto al cierre, sin fricción ni pasos manuales.</span></div>
                <div><span className="hero-cap">Recursos donde importan</span><span className="lbl">Tu equipo dedicado a lo que solo una persona puede hacer.</span></div>
                <div><span className="hero-cap">Operación que escala</span><span className="lbl">El sistema absorbe la gestión para que crezcas sin contratar.</span></div>
              </div>
            </div>
            <ChatMock />
          </div>
        </header>

        {/* ── CÓMO TRABAJAMOS ──────────────────────────────── */}
        <section className="block process" id="proceso">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow" style={{ color: "#B8B6AE" }}>Cómo trabajamos</span>
                <h2 style={{ marginTop: "18px", color: "var(--paper)" }}>
                  Tres pasos.<br />Ningún PowerPoint<br />de 80 slides.
                </h2>
              </div>
              <p className="desc" style={{ color: "#B8B6AE" }}>
                Cada proyecto tiene su ritmo. Lo que no cambia: diagnóstico, construcción, producción. No desaparecemos después de entregar.
              </p>
            </div>

            <div className="process-grid process-grid-3">
              <div className="step">
                <span className="n">01 — Entramos y miramos</span>
                <h3>Diagnóstico inicial</h3>
                <p>Entendemos cómo funciona realmente tu empresa — no cómo crees que funciona. Salimos con un mapa de qué automatizar y cuánto vale hacerlo.</p>
              </div>
              <div className="step">
                <span className="n">02 — Diseñamos y construimos</span>
                <h3>La arquitectura correcta</h3>
                <p>Construimos con low code o software a medida según lo que necesite tu caso. Siempre integrado con las herramientas que ya tienes.</p>
              </div>
              <div className="step step-last">
                <span className="n">03 — Lo dejamos rodando</span>
                <h3>Mantenimiento continuo</h3>
                <p>No desaparecemos después de entregar. El sistema mejora con tu negocio — mantenimiento, evolución y soporte incluidos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICIOS ─────────────────────────────────────── */}
        <section className="block" id="servicios" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">Qué construimos</span>
                <h2 style={{ marginTop: "18px" }}>
                  Tres servicios.<br />
                  <span className="serif">Un solo objetivo.</span>
                </h2>
              </div>
              <p className="desc">
                Cada proyecto combina piezas distintas según lo que necesita tu empresa. Auditoría, diseño, construcción y mantenimiento incluidos.
              </p>
            </div>
            <div className="svc-cards-home">
              <Link href="/servicios/agentes-de-voz" className="svc-card-home">
                <span className="eyebrow" style={{ marginBottom: "12px" }}>01</span>
                <h3>Agentes de voz y conversacionales</h3>
                <p>Atienden, cualifican y resuelven por teléfono, WhatsApp y chat — sin intervención humana en el 70-80% de los casos.</p>
                <span className="svc-card-link">Ver servicio →</span>
              </Link>
              <Link href="/servicios/automatizacion-de-procesos" className="svc-card-home">
                <span className="eyebrow" style={{ marginBottom: "12px" }}>02</span>
                <h3>Automatización de procesos low code</h3>
                <p>Flujos automáticos 24/7 que conectan tus herramientas: leads, onboarding, facturación y reportes sin trabajo manual.</p>
                <span className="svc-card-link">Ver servicio →</span>
              </Link>
              <Link href="/servicios/crm-inteligente" className="svc-card-home">
                <span className="eyebrow" style={{ marginBottom: "12px" }}>03</span>
                <h3>CRM inteligente con IA</h3>
                <p>Lead scoring automático, pipelines que avanzan solos y seguimiento inteligente. Tu equipo cierra, no administra datos.</p>
                <span className="svc-card-link">Ver servicio →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CASOS ─────────────────────────────────────────── */}
        <section className="block" id="casos" style={{ background: "var(--bg)" }}>
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">Casos reales</span>
                <h2 style={{ marginTop: "18px" }}>
                  Lo que cambia cuando<br />
                  <span className="serif">la IA trabaja de verdad.</span>
                </h2>
              </div>
              <p className="desc">
                Tres proyectos distintos, el mismo patrón: un equipo saturado de gestión, un sistema que lo absorbe, y tiempo de vuelta para lo que importa.
              </p>
            </div>

            <div className="casos-home-grid">

              <article className="caso-home">
                <div className="caso-home-label">
                  <span className="caso-sector">Administración de fincas</span>
                  <span className="caso-detail">3 personas en atención telefónica</span>
                </div>
                <div className="caso-home-body">
                  <div className="caso-home-problema">
                    <p>El equipo dedicaba la mayor parte de su jornada a atender llamadas entrantes — consultas rutinarias, incidencias repetidas, gestiones que no requerían criterio humano. Las urgencias reales se perdían entre el ruido. No había visibilidad sobre qué comunidades concentraban más actividad ni qué tipos de incidencia eran más frecuentes.</p>
                  </div>
                  <div className="caso-home-solucion">
                    <p>Tras la auditoría, construimos agentes de voz y WhatsApp integrados con su CRM. El sistema atiende el 100% de las llamadas, clasifica cada contacto por tipo y urgencia, y escala al equipo solo cuando hace falta criterio real. El equipo tiene por primera vez visibilidad completa sobre el estado de cada comunidad.</p>
                  </div>
                </div>
                <div className="caso-home-footer">
                  <div className="caso-home-tags">
                    <span>Agente de voz</span>
                    <span>WhatsApp</span>
                    <span>CRM inteligente</span>
                  </div>
                </div>
              </article>

              <article className="caso-home dark">
                <div className="caso-home-label">
                  <span className="caso-sector">Inmobiliaria</span>
                  <span className="caso-detail">Equipo comercial saturado de gestión</span>
                </div>
                <div className="caso-home-body">
                  <div className="caso-home-problema">
                    <p>El equipo comercial dedicaba una parte considerable de su tiempo a tareas que no requerían su criterio: responder consultas repetidas, actualizar registros, hacer seguimiento manual de contactos sin cualificar. Resultado inevitable — menos tiempo para lo que importa: acompañar al cliente en una decisión de alta implicación personal y económica.</p>
                  </div>
                  <div className="caso-home-solucion">
                    <p>Construimos agentes de IA y un CRM inteligente que absorbe la gestión operativa. El sistema cualifica, prioriza y hace seguimiento de forma automática. El equipo comercial ahora dedica su tiempo a lo que ningún sistema puede reemplazar: construir confianza y personalizar la experiencia de cada cliente.</p>
                  </div>
                </div>
                <div className="caso-home-footer">
                  <div className="caso-home-tags">
                    <span>Agentes conversacionales</span>
                    <span>CRM inteligente</span>
                    <span>Lead scoring</span>
                  </div>
                </div>
              </article>

              <article className="caso-home">
                <div className="caso-home-label">
                  <span className="caso-sector">Bufete de abogados</span>
                  <span className="caso-detail">Operación completamente manual</span>
                </div>
                <div className="caso-home-body">
                  <div className="caso-home-problema">
                    <p>Cada consulta entrante requería tiempo del equipo para valorarla, presupuestarla y responderla — sin importar si tenía encaje real con la especialidad del bufete. El equipo jurídico invertía tiempo en filtrar y presupuestar antes de poder dedicarse a lo esencial: resolver casos.</p>
                  </div>
                  <div className="caso-home-solucion">
                    <p>Diseñamos un sistema de filtrado y scoring que evalúa automáticamente cada consulta. Identifica qué casos tienen encaje, qué puede resolverse de forma automatizada y qué necesita atención directa del equipo. Los abogados ahora se dedican a ejercer — no a gestionar el embudo de entrada.</p>
                  </div>
                </div>
                <div className="caso-home-footer">
                  <div className="caso-home-tags">
                    <span>Filtrado automático</span>
                    <span>Scoring de consultas</span>
                    <span>Agente conversacional</span>
                  </div>
                </div>
              </article>

            </div>

            <div className="casos-home-cta">
              <Link href="/casos" className="btn btn-secondary">
                Ver todos los casos
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────── */}
        <section className="block faq" id="faq">
          <div className="wrap faq-grid">
            <div className="sticky-info">
              <span className="eyebrow">FAQ</span>
              <h2 style={{ marginTop: "18px" }}>Preguntas<br />frecuentes.</h2>
              <p style={{ marginTop: "20px", fontSize: "15px", color: "var(--ink-2)", lineHeight: "1.55", maxWidth: "300px" }}>
                Si tu duda no está aquí, escríbenos. Siempre responde una persona.
              </p>
              <Link href="/contacto" className="btn btn-primary" style={{ marginTop: "24px" }}>
                Reservar 30 minutos
              </Link>
            </div>

            <div className="faq-list">
              <details open>
                <summary>¿Cuál es la diferencia entre un chatbot y un agente de IA?</summary>
                <p>Un chatbot sigue un árbol de decisiones fijo. Un agente de IA razona sobre la conversación, consulta tu CRM o catálogo en tiempo real y ejecuta acciones. La diferencia práctica: el chatbot deriva al humano en cuanto la pregunta se sale del guion; el agente resuelve hasta el 70-80% de los casos solo.</p>
              </details>
              <details>
                <summary>¿Cuánto tiempo lleva automatizar un proceso empresarial?</summary>
                <p>Depende de lo que construyamos. Hay proyectos que arrancan en días y otros que requieren más iteraciones — cada caso es distinto. Lo que sí ocurre siempre: validamos resultados desde el primer despliegue, no al final.</p>
              </details>
              <details>
                <summary>¿Necesito cambiar mis herramientas para implementar automatización con IA?</summary>
                <p>No cambias nada. Nos conectamos a tus herramientas actuales — web, CRM, WhatsApp Business, calendario, ERP. El proceso lo conducimos nosotros de principio a fin.</p>
              </details>
              <details>
                <summary>¿Los agentes de IA cumplen con el RGPD y el AI Act en España?</summary>
                <p>Sí. Infraestructura europea, retención mínima de datos, logs de auditoría y categorización de riesgo según el AI Act. Tu información no se usa para entrenamiento.</p>
              </details>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ─────────────────────────────────────── */}
        <section className="cta-final" id="cta">
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
              <a href="mailto:hablemos@automatizatuempresa.com" className="btn btn-secondary">
                hablemos@automatizatuempresa.com
              </a>
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
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cuál es la diferencia entre un chatbot y un agente de IA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Un chatbot sigue un árbol de decisiones fijo. Un agente de IA razona sobre la conversación, consulta tu CRM o catálogo en tiempo real y ejecuta acciones. La diferencia práctica: el chatbot deriva al humano en cuanto la pregunta se sale del guion; el agente resuelve hasta el 70-80% de los casos solo.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto tiempo lleva automatizar un proceso empresarial?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Depende de lo que construyamos. Hay proyectos que arrancan en días y otros que requieren más iteraciones — cada caso es distinto. Lo que sí ocurre siempre: validamos resultados desde el primer despliegue, no al final.",
                },
              },
              {
                "@type": "Question",
                name: "¿Necesito cambiar mis herramientas para implementar automatización con IA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No cambias nada. Nos conectamos a tus herramientas actuales — web, CRM, WhatsApp Business, calendario, ERP. El proceso lo conducimos nosotros de principio a fin.",
                },
              },
              {
                "@type": "Question",
                name: "¿Los agentes de IA cumplen con el RGPD y el AI Act en España?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Infraestructura europea, retención mínima de datos, logs de auditoría y categorización de riesgo según el AI Act. Tu información no se usa para entrenamiento.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
