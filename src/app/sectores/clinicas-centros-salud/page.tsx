import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

const BASE = "https://www.automatizatuempresa.com";
const URL = `${BASE}/sectores/clinicas-centros-salud`;

export const metadata: Metadata = {
  title: "IA para clínicas y centros de salud",
  description:
    "Automatización para clínicas: agendado automático de citas, recordatorios de pacientes, gestión de listas de espera y atención fuera de horario sin ampliar plantilla.",
  alternates: { canonical: URL },
  openGraph: {
    title: "IA para clínicas y centros de salud | Automatiza tu Empresa",
    description: "Reduce las ausencias, llena los huecos de agenda y atiende consultas de pacientes fuera de horario. Sin más personal administrativo.",
    url: URL,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IA para clínicas y centros de salud",
    description: "Agendado automático, recordatorios y atención 24/7 para clínicas sin ampliar plantilla.",
    images: ["/og.png"],
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    url: URL,
    name: "IA para clínicas y centros de salud",
    dateModified: "2026-07-21",
    isPartOf: { "@id": `${BASE}/#website` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: BASE },
      { "@type": "ListItem", position: 2, name: "Sectores", item: `${BASE}/sectores` },
      { "@type": "ListItem", position: 3, name: "Clínicas y centros de salud", item: URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Puede un agente de IA gestionar citas médicas respetando la privacidad del paciente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El sistema gestiona el agendado sin acceder a información clínica del paciente — solo trabaja con disponibilidad, tipo de consulta y datos de contacto. Todo funciona con infraestructura europea cumpliendo el Reglamento General de Protección de Datos (RGPD) y la normativa española de protección de datos sanitarios.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo reduce el sistema las ausencias (no-shows)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El sistema envía recordatorios automáticos por WhatsApp o SMS en el momento óptimo: 48 horas y 2 horas antes de la cita. Si el paciente no confirma o quiere cancelar, puede hacerlo directamente en el mensaje y el hueco se pone disponible para otra persona automáticamente. Esta secuencia reduce las ausencias sin aviso entre un 30% y un 50% según la especialidad.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué tipo de consultas puede resolver el agente sin intervención del personal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Preguntas sobre horarios, cómo llegar a la clínica, qué documentación traer, precio orientativo de los servicios, si se trabaja con determinado seguro médico y cómo prepararse para una prueba o intervención. Estas consultas representan entre el 60% y el 80% del volumen de llamadas y mensajes que recibe una clínica, y ninguna requiere criterio clínico.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se integra con el software de gestión de clínica que ya tenemos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del software. Tenemos integración nativa con los principales sistemas de gestión de clínicas del mercado español. En los casos donde no hay API disponible, trabajamos con una capa intermedia que sincroniza la agenda en tiempo real. En la sesión de diagnóstico analizamos tu sistema actual y te decimos con precisión qué es posible.",
        },
      },
    ],
  },
];

const problemas = [
  { n: "01", t: "El teléfono no para y la agenda no se llena sola", d: "El personal dedica horas a llamadas para pedir y confirmar citas mientras hay huecos sin cubrir. Dos tareas que podrían hacerse solas." },
  { n: "02", t: "Ausencias sin aviso que desperdician agenda", d: "Un hueco de 30 o 45 minutos sin paciente porque nadie recordó la cita a tiempo. En una clínica con alta demanda, cada hueco perdido tiene un coste directo." },
  { n: "03", t: "Consultas de pacientes fuera del horario de atención", d: "Un paciente que quiere saber si puede pedir cita, qué documentación traer o cuánto cuesta un servicio. Sin respuesta hasta el día siguiente, llama a la competencia." },
  { n: "04", t: "Lista de espera gestionada manualmente", d: "Cuando se libera un hueco, alguien tiene que llamar a la lista de espera hasta encontrar a alguien disponible. Proceso lento que deja huecos sin cubrir." },
];

const soluciones = [
  { t: "Agendado automático 24/7", d: "El paciente pide cita por web o WhatsApp en cualquier momento. El sistema consulta la disponibilidad real y confirma sin intervención del personal." },
  { t: "Recordatorios y confirmación", d: "Secuencia automática por WhatsApp 48h y 2h antes. Si el paciente cancela, el hueco se pone disponible de inmediato." },
  { t: "Lista de espera inteligente", d: "Cuando se libera un hueco, el sistema contacta automáticamente a los pacientes en espera hasta cubrir la cita. Sin llamadas manuales." },
  { t: "Atención fuera de horario", d: "El agente responde las preguntas frecuentes — precio, preparación, seguros, ubicación — a cualquier hora. El paciente no espera hasta el día siguiente." },
  { t: "Gestión de cancelaciones", d: "Flujo automatizado para reasignar huecos: el paciente cancela, el sistema llena el hueco con el siguiente en lista de espera o abre la franja para nuevas citas." },
  { t: "Reportes de ocupación", d: "Tasa de ocupación, no-shows por especialidad, franjas con más demanda. Datos para optimizar la agenda y detectar oportunidades." },
];

export default function ClinicasPage() {
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
            <span style={{ color: "var(--ink)" }}>Clínicas y centros de salud</span>
          </nav>
        </div>

        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Sector · Clínicas y centros de salud</span>
            <h1>Automatización IA para<br /><span className="serif">clínicas</span> y centros<br />de salud.</h1>
            <p className="lede">
              Una clínica tiene dos flujos de trabajo: el clínico, que requiere formación, criterio y responsabilidad, y el administrativo que lo sostiene, que no. Un sistema con IA gestiona el agendado, los recordatorios, la lista de espera y las consultas de pacientes fuera de horario — para que el equipo dedique su tiempo a lo que solo ellos pueden hacer.
            </p>
            <div className="hero-ctas" style={{ marginTop: "32px" }}>
              <Link href="/contacto" className="btn btn-accent">
                Reservar 30 minutos
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
              </Link>
              <Link href="/servicios/agentes-de-voz" className="btn btn-secondary">Ver agentes conversacionales</Link>
            </div>
          </div>
        </header>

        <section className="svc-section" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">El problema</span>
                <h2 style={{ marginTop: "18px" }}>Agenda llena de llamadas,<br /><span className="serif">no de pacientes</span>.</h2>
              </div>
              <p className="desc">En muchas clínicas, el personal dedica una parte desproporcionada de su jornada a gestionar la agenda: llamadas, confirmaciones, cancelaciones y listas de espera. Todas son tareas que no requieren criterio clínico.</p>
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

        <section className="svc-section dark">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow" style={{ color: "#B8B6AE" }}>La solución</span>
                <h2 style={{ marginTop: "18px", color: "var(--paper)" }}>Agenda siempre llena.<br /><span className="serif">No-shows reducidos.</span></h2>
              </div>
              <p className="desc" style={{ color: "#B8B6AE" }}>El sistema gestiona el ciclo completo de la cita — desde la solicitud hasta la confirmación y el recordatorio — sin que el personal tenga que intervenir.</p>
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
              <div className="stat"><div className="v">−40<span className="ac">%</span></div><div className="l">ausencias sin aviso con secuencias de recordatorio</div></div>
              <div className="stat"><div className="v">24/7</div><div className="l">agendado y atención de consultas sin personal</div></div>
              <div className="stat"><div className="v">+95<span className="ac">%</span></div><div className="l">ocupación de huecos liberados por cancelación</div></div>
            </div>
          </div>
        </section>

        <section className="svc-section faq" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="faq-grid">
              <div className="sticky-info">
                <span className="eyebrow">Preguntas frecuentes</span>
                <h2 style={{ marginTop: "20px" }}>Lo que nos<br />suelen <span className="serif">preguntar.</span></h2>
                <p style={{ marginTop: "20px", fontSize: "15px", color: "var(--ink-2)", lineHeight: "1.55" }}>
                  ¿Tienes dudas sobre RGPD o integración? <Link href="/contacto" style={{ color: "var(--ink)", textDecoration: "underline" }}>Hablamos.</Link>
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

        <section className="svc-section" style={{ padding: "64px 0" }}>
          <div className="wrap">
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", marginBottom: "32px" }}>Los servicios más usados<br /><span className="serif">en clínicas</span>.</h2>
            <div className="svc-grid-2">
              <div style={{ padding: "28px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Agentes de voz e IA</div>
                <p style={{ fontSize: "15px", lineHeight: "1.55", marginBottom: "20px" }}>Atención 24/7, agendado de citas y recordatorios automáticos. El agente que gestiona la agenda sin que el teléfono suene.</p>
                <Link href="/servicios/agentes-de-voz" style={{ fontSize: "14px", fontWeight: "500", color: "var(--accent)" }}>Ver servicio →</Link>
              </div>
              <div style={{ padding: "28px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Automatización de procesos</div>
                <p style={{ fontSize: "15px", lineHeight: "1.55", marginBottom: "20px" }}>Lista de espera automática, gestión de cancelaciones y reportes de ocupación. El ciclo completo de la cita sin intervención manual.</p>
                <Link href="/servicios/automatizacion-de-procesos" style={{ fontSize: "14px", fontWeight: "500", color: "var(--accent)" }}>Ver servicio →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-final">
          <div className="wrap">
            <span className="eyebrow" style={{ color: "#B8B6AE" }}>¿Cuántas horas semanales dedica el personal a gestionar la agenda?</span>
            <h2 style={{ marginTop: "24px" }}>30 minutos para<br /><span className="serif">recuperarlas.</span></h2>
            <p>Nos cuentas cómo funciona tu agenda hoy y qué volumen de llamadas recibes. Te decimos qué se puede automatizar sin tocar los procesos clínicos.</p>
            <div className="row">
              <Link href="/contacto" className="btn btn-primary">
                Reservar 30 minutos
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </Link>
              <Link href="/automatizacion-empresas-con-ia" className="btn btn-secondary">Guía de automatización →</Link>
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
