import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

const BASE = "https://www.automatizatuempresa.com";
const URL_PILAR = `${BASE}/automatizacion-empresas-con-ia`;

export const metadata: Metadata = {
  title: "Cómo automatizar una empresa con IA: guía práctica",
  description:
    "Guía práctica sobre cómo automatizar una empresa: desde documentar procesos y conectar herramientas hasta agentes IA. Sin humo — por dónde empezar y qué esperar.",
  alternates: { canonical: URL_PILAR },
  openGraph: {
    title: "Cómo automatizar una empresa con IA | Automatiza tu Empresa",
    description:
      "No todo son agentes IA. A veces es documentar, conectar herramientas o construir un flujo simple. Guía práctica para empresas en España.",
    url: URL_PILAR,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo automatizar una empresa con IA",
    description:
      "Guía práctica: desde documentar procesos hasta agentes IA. Por dónde empezar y qué esperar.",
    images: ["/og.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: BASE },
    { "@type": "ListItem", position: 2, name: "Cómo automatizar una empresa con IA", item: URL_PILAR },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${URL_PILAR}#webpage`,
  url: URL_PILAR,
  name: "Cómo automatizar una empresa con IA: guía práctica",
  dateModified: "2026-08-14",
  isPartOf: { "@id": `${BASE}/#website` },
};

const faqs = [
  {
    q: "¿Qué es la automatización empresarial con IA?",
    a: "La automatización empresarial con IA consiste en usar software para ejecutar tareas repetitivas sin intervención humana: atender llamadas, cualificar leads, enviar facturas o generar informes. A diferencia de la automatización tradicional basada en reglas fijas, los sistemas con IA pueden razonar sobre situaciones imprevistas, consultar datos en tiempo real y tomar decisiones dentro de un rango definido. El resultado práctico es que el equipo deja de hacer tareas mecánicas y se concentra en lo que requiere criterio.",
  },
  {
    q: "¿Qué procesos de una empresa se pueden automatizar con IA?",
    a: "Los más frecuentes en empresas de servicios B2B: atención al cliente por teléfono y chat, captación y cualificación de leads, onboarding de nuevos clientes, generación de facturas, seguimiento comercial y reportes de métricas. La regla general es que cualquier proceso que siga un patrón predecible, se repita con frecuencia y no requiera criterio humano en cada ocurrencia es candidato a automatizarse.",
  },
  {
    q: "¿Cuánto cuesta automatizar una empresa con IA?",
    a: "Depende del alcance. Un diagnóstico de procesos tiene un coste fijo y es independiente de la implementación. Los proyectos varían mucho: conectar dos herramientas existentes cuesta mucho menos que construir un agente de IA con múltiples integraciones. En la sesión de 30 minutos damos una estimación orientativa basada en tu caso concreto.",
  },
  {
    q: "¿Por dónde se empieza a automatizar una empresa?",
    a: "Con un diagnóstico de procesos. Antes de construir nada, es necesario entender qué hace el equipo, cuánto tiempo consume cada tarea y qué tiene más sentido automatizar primero. Sin ese paso, el riesgo es automatizar el proceso equivocado o mal diseñado. El diagnóstico tarda entre una y dos semanas y el resultado es una hoja de ruta priorizada — independientemente de si sigues trabajando con nosotros.",
  },
  {
    q: "¿Cuánto tiempo lleva implementar automatización con IA?",
    a: "Un flujo simple — conectar dos herramientas, automatizar un email o un informe — puede estar funcionando en días. Un agente de IA con múltiples integraciones requiere semanas. Los proyectos más grandes pueden extenderse dos o tres meses. En todos los casos validamos resultados desde el primer despliegue — no entregamos todo al final.",
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

const niveles = [
  {
    n: "01",
    t: "Documentar y ordenar",
    d: "A veces el problema no es la falta de automatización sino la falta de claridad sobre cómo se hace algo. Documentar un proceso revela pasos redundantes, decisiones inconsistentes y tareas duplicadas. Muchas empresas ahorran horas semanales solo con esto — antes de tocar ninguna herramienta.",
  },
  {
    n: "02",
    t: "Conectar herramientas (low-code)",
    d: "Si ya usas un CRM, un formulario, un email y una hoja de cálculo por separado, conectarlos tiene impacto inmediato. Plataformas como Make o n8n permiten crear flujos automáticos entre aplicaciones sin código: cuando llega un lead, va al CRM; cuando se firma un contrato, se crea la carpeta del cliente.",
  },
  {
    n: "03",
    t: "Software a medida",
    d: "Cuando las herramientas estándar no se ajustan a la lógica de tu negocio tiene sentido construir algo específico: un panel interno, un sistema de gestión propio, una integración que no existe como conector estándar. Más costoso que low-code, pero con control total sobre el comportamiento.",
  },
  {
    n: "04",
    t: "Agentes de IA",
    d: "Cuando el proceso requiere razonamiento — entender lo que dice un cliente, evaluar si una consulta tiene encaje, decidir a qué técnico enviar — los agentes de IA entran en juego. No sustituyen al equipo: gestionan el volumen para que el equipo llegue a las situaciones que requieren su criterio.",
  },
];

const procesos = [
  { n: "Atención al cliente", d: "Agentes de voz o chat que responden preguntas frecuentes, cualifican consultas y derivan al equipo solo cuando hace falta. Disponibles 24 horas, sin colas de espera." },
  { n: "Gestión de leads", d: "Desde que llega un lead hasta que llega al comercial correcto: captura automática de múltiples canales, enriquecimiento de datos y puntuación según el perfil de cliente ideal." },
  { n: "Onboarding de clientes", d: "Desde que se firma el contrato hasta que el cliente está operativo: envío de bienvenida, recogida de documentación, creación de accesos y asignación del equipo." },
  { n: "Facturación y cobros", d: "Generación automática de facturas al cerrar un proyecto o ciclo de servicio, seguimiento de pagos pendientes y recordatorios al cliente hasta confirmar recepción." },
  { n: "Reportes y dashboards", d: "Informes semanales o mensuales de métricas de CRM, marketing y operaciones generados y enviados automáticamente al equipo directivo sin que nadie los prepare." },
  { n: "Seguimiento comercial", d: "Secuencias de contacto activadas por el comportamiento del lead: si abre el presupuesto, si vuelve a la web, si pasa demasiado tiempo sin respuesta." },
];

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
            <span style={{ color: "var(--ink)" }}>Cómo automatizar una empresa con IA</span>
          </nav>
        </div>

        {/* PAGE HERO — RESPUESTA DIRECTA GEO */}
        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Guía · Automatización con IA</span>
            <h1>Cómo automatizar<br />tu empresa <span className="serif">con IA</span>.</h1>
            <p className="lede">
              Automatizar una empresa no siempre significa instalar agentes de inteligencia artificial. A veces significa documentar por primera vez cómo se hace una tarea. Otras, conectar dos herramientas que ya tienes pero que no se hablan. Y en algunos casos sí implica IA. El punto de partida es siempre el mismo: entender qué hace el equipo y qué parte de eso no requiere criterio humano.
            </p>
          </div>
        </header>

        {/* QUÉ ES */}
        <section className="block" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div style={{ maxWidth: "760px" }}>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", marginBottom: "20px" }}>¿Qué es automatizar<br />una empresa?</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "var(--ink-2)", marginBottom: "16px" }}>
                Automatizar una empresa significa usar software para ejecutar tareas repetitivas sin que una persona tenga que hacerlas cada vez. No es una tecnología concreta ni un producto único — es un enfoque. Y no requiere empezar por lo más sofisticado. Empieza por lo más útil.
              </p>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "var(--ink-2)", marginBottom: "16px" }}>
                En empresas de servicios, los procesos que más tiempo consumen suelen ser tres tipos: los operativos (facturación, onboarding, informes), los comerciales (captación de leads, seguimiento, CRM) y los de atención (teléfono, WhatsApp, email). La mayoría tienen margen en los tres — aunque casi nunca lo han visto ordenado sobre papel.
              </p>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "var(--ink-2)" }}>
                Lo que ha cambiado en los últimos años es el coste y la accesibilidad. Automatizar un proceso que antes requería programación a medida ahora puede hacerse con conectores sin código. Y añadir inteligencia — para que el sistema razone en lugar de seguir reglas fijas — ya no es un privilegio de grandes corporaciones. Las herramientas existen. La barrera es saber por dónde empezar.
              </p>
            </div>
          </div>
        </section>

        {/* NIVELES DE AUTOMATIZACIÓN */}
        <section className="block process" id="niveles">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow" style={{ color: "#B8B6AE" }}>Niveles</span>
                <h2 style={{ marginTop: "18px", color: "var(--paper)" }}>No todo necesita<br /><span className="serif">agentes de IA</span>.</h2>
              </div>
              <p className="desc" style={{ color: "#B8B6AE" }}>
                La automatización tiene niveles. Lo que tiene sentido para tu empresa depende de tu operación, tu equipo y tus procesos — no de lo que está de moda. Empezar por el nivel correcto es lo que marca la diferencia entre un proyecto que funciona y uno que se abandona.
              </p>
            </div>
            <div className="process-grid process-grid-3" style={{ marginTop: "48px" }}>
              {niveles.map((item) => (
                <div key={item.n} className="step">
                  <span className="n">{item.n}</span>
                  <h3>{item.t}</h3>
                  <p>{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESOS MÁS AUTOMATIZADOS */}
        <section className="block">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">Procesos</span>
                <h2 style={{ marginTop: "18px" }}>¿Qué se puede<br /><span className="serif">automatizar</span>?</h2>
              </div>
              <p className="desc">Los procesos más frecuentes en empresas B2B de servicios. No todos los negocios automatizan los mismos — el punto de partida siempre es el diagnóstico de tu operación concreta.</p>
            </div>

            <div className="process-grid process-grid-3">
              {procesos.map((item) => (
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
                Las empresas que saltan directamente a la implementación suelen automatizar el problema en lugar de resolverlo. El diagnóstico no es un trámite — es lo que define si el proyecto va a funcionar o no.
              </p>
            </div>
            <div className="process-grid process-grid-3">
              <div className="step">
                <span className="n">01 — Diagnóstico de procesos</span>
                <h3>Mapear antes de construir</h3>
                <p>Mapeamos cómo funciona realmente tu empresa — no cómo crees que funciona. El resultado es un inventario de procesos, una priorización por retorno y una hoja de ruta. El diagnóstico es un entregable independiente: tuyo, hayas seguido con nosotros o no. Tarda entre una y dos semanas.</p>
                <Link href="/servicios#auditoria" style={{ fontSize: "14px", color: "var(--accent-hi)", marginTop: "12px", display: "inline-block" }}>
                  Ver el diagnóstico →
                </Link>
              </div>
              <div className="step">
                <span className="n">02 — Diseño y construcción</span>
                <h3>La herramienta correcta, no la más cara</h3>
                <p>Elegimos la solución adecuada para cada proceso: puede ser una conexión simple entre dos apps, un flujo low-code, un agente de IA o software a medida. Construimos encima de lo que ya tienes siempre que sea posible. No vendemos tecnología — resolvemos el problema.</p>
              </div>
              <div className="step step-last">
                <span className="n">03 — Mantenimiento y evolución</span>
                <h3>El sistema mejora contigo</h3>
                <p>Un sistema automatizado no se entrega y se olvida. Monitorizamos, corregimos lo que falla y añadimos mejoras a medida que la empresa crece o cambia. El objetivo es que la automatización siga siendo útil, no que envejezca.</p>
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
                <h2 style={{ marginTop: "18px" }}>Las piezas de una<br /><span className="serif">operación automatizada</span>.</h2>
              </div>
              <p className="desc">Cada proyecto combina los bloques que necesita tu empresa. El diagnóstico define cuáles.</p>
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

        {/* POR SECTORES */}
        <section className="block">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">Por sector</span>
                <h2 style={{ marginTop: "18px" }}>Automatización según<br /><span className="serif">tu tipo de empresa</span>.</h2>
              </div>
              <p className="desc">Cada sector tiene sus procesos propios. Lo que automatiza una clínica no es lo mismo que lo que automatiza una inmobiliaria o un despacho de abogados.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px", marginTop: "40px" }}>
              {[
                { href: "/sectores/administracion-de-fincas", label: "Administradoras de fincas", desc: "Atención de incidencias, consultas de propietarios y urgencias 24/7." },
                { href: "/sectores/inmobiliarias", label: "Inmobiliarias", desc: "Captación de leads de portales, scoring y seguimiento comercial automático." },
                { href: "/sectores/bufetes-abogados", label: "Bufetes de abogados", desc: "Filtrado de consultas, onboarding de casos y seguimiento de presupuestos." },
                { href: "/sectores/clinicas-centros-salud", label: "Clínicas y centros de salud", desc: "Agendado automático, recordatorios y gestión de lista de espera." },
                { href: "/sectores/empresas-mantenimiento", label: "Empresas de mantenimiento", desc: "Clasificación de urgencias, despacho de técnicos y notificaciones al cliente." },
              ].map((s) => (
                <Link key={s.href} href={s.href} style={{ padding: "24px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)", display: "block", textDecoration: "none" }}>
                  <strong style={{ fontSize: "15px", display: "block", marginBottom: "8px", color: "var(--ink)" }}>{s.label}</strong>
                  <p style={{ fontSize: "13px", color: "var(--ink-2)", lineHeight: "1.5", margin: 0 }}>{s.desc}</p>
                </Link>
              ))}
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
              <Link href="/sectores" className="btn btn-secondary">Ver por sector</Link>
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
