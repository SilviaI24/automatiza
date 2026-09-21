import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

// Precio por participante con mínimo de grupo. El mínimo protege el caso de
// grupo pequeño: por debajo de 8 el taller no cubre la preparación previa.
// Fuera de Asturias el desplazamiento se valora aparte.
const PRECIO_PARTICIPANTE = "79 €";
const GRUPO_MIN = 8;
const GRUPO_MAX = 12;

export const metadata: Metadata = {
  title: "Formación en IA para empresas",
  description:
    "Taller presencial de 3 horas sobre las tareas reales de tu equipo. Desde 79 € por participante: con dos horas recuperadas a la semana se amortiza en menos de un mes. Asturias y Madrid.",
  alternates: { canonical: "https://www.automatizatuempresa.com/servicios/formacion-ia-empresas" },
  openGraph: {
    title: "Formación en IA para empresas | Automatiza tu Empresa",
    description:
      "Noventa horas al año por persona. El taller cuesta 79 €. Tres horas presenciales sobre las tareas reales de tu equipo, 80% práctica.",
    url: "https://www.automatizatuempresa.com/servicios/formacion-ia-empresas",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formación en IA para empresas",
    description:
      "Taller presencial de 3 horas sobre las tareas reales de tu equipo. 80% práctica, resultados el lunes siguiente.",
    images: ["/og.png"],
  },
};

const BASE = "https://www.automatizatuempresa.com";
const URL_PAGINA = `${BASE}/servicios/formacion-ia-empresas`;

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${URL_PAGINA}#webpage`,
  url: URL_PAGINA,
  name: "Formación en IA para empresas",
  dateModified: "2026-09-21",
  isPartOf: { "@id": `${BASE}/#website` },
  breadcrumb: { "@id": `${URL_PAGINA}#breadcrumb` },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Formación en IA para empresas",
  serviceType: "Formación in-company en inteligencia artificial aplicada",
  description:
    "Taller presencial de 3 horas en el que los equipos aprenden a aplicar la IA generativa a sus tareas reales de trabajo: comunicación, documentos, análisis y detección de procesos automatizables.",
  provider: { "@id": `${BASE}/#organization` },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Asturias" },
    { "@type": "AdministrativeArea", name: "Madrid" },
  ],
  url: URL_PAGINA,
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Formación en IA para empresas",
  description:
    "Taller práctico in-company sobre inteligencia artificial generativa aplicada al trabajo diario. Se prepara sobre los procesos reales de la empresa y se imparte en sus oficinas.",
  provider: { "@id": `${BASE}/#organization` },
  url: URL_PAGINA,
  inLanguage: "es-ES",
  teaches: [
    "Uso profesional de ChatGPT y Claude",
    "Redacción y gestión de correo electrónico con IA",
    "Elaboración de documentos, informes y propuestas",
    "Investigación y análisis de información",
    "Uso seguro de la IA y protección de datos",
    "Identificación de procesos automatizables",
  ],
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Onsite",
    courseWorkload: "PT3H",
    inLanguage: "es-ES",
    location: {
      "@type": "Place",
      name: "Instalaciones del cliente (Asturias y Madrid)",
    },
    maximumAttendeeCapacity: GRUPO_MAX,
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: PRECIO_PARTICIPANTE.replace(/[^\d]/g, ""),
    description: `Precio por participante. Grupos de ${GRUPO_MIN} a ${GRUPO_MAX} personas.`,
    availability: "https://schema.org/InStock",
    url: URL_PAGINA,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${URL_PAGINA}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: BASE },
    { "@type": "ListItem", position: 2, name: "Servicios", item: `${BASE}/servicios` },
    { "@type": "ListItem", position: 3, name: "Formación en IA", item: URL_PAGINA },
  ],
};

const faqs = [
  {
    q: "¿Cuánto dura la formación y en qué formato se imparte?",
    a: "Es un taller presencial de 3 horas que impartimos en vuestras oficinas. Antes de la sesión mantenemos una entrevista para conocer cómo trabaja el equipo y seleccionar los casos de uso con más potencial, de forma que las 3 horas se dediquen íntegramente a vuestras tareas reales y no a ejemplos genéricos.",
  },
  {
    q: "¿Cuántas personas pueden asistir?",
    a: "Entre 8 y 12 participantes, siendo 8-10 el tamaño óptimo. Ponemos el máximo en 12 porque el taller es 80% práctico: cada persona trabaja sobre sus propias tareas y necesita acompañamiento individual durante los ejercicios, y por encima de ese número esa atención deja de ser posible. Si sois un equipo más pequeño, consúltanos y lo valoramos.",
  },
  {
    q: "¿Hace falta que el equipo tenga conocimientos técnicos?",
    a: "No. La formación está diseñada para perfiles no técnicos: administración, atención al cliente, comercial, dirección. No se programa nada ni se configura ninguna herramienta compleja. Se trabaja con las herramientas de IA generativa desde el navegador, sobre tareas que el equipo ya hace todos los días.",
  },
  {
    q: "¿Qué pasa con la confidencialidad de nuestros datos?",
    a: "Es parte del temario, no una nota al pie. Una de las secciones del taller se dedica al uso seguro: qué información se puede introducir en una herramienta de IA y cuál no, qué diferencia hay entre las versiones gratuitas y las de empresa en cuanto a tratamiento de datos, y cómo encaja todo ello con el RGPD y el AI Act. El equipo sale con una guía de una página que el responsable de cumplimiento puede circular internamente.",
  },
  {
    q: "¿Qué se lleva el equipo al terminar el taller?",
    a: "Cuatro entregables: una guía de prompts construida durante la sesión sobre vuestras propias tareas y con vuestro tono; los flujos de trabajo que cada participante deja documentados y funcionando; la guía de uso seguro; y un informe con las oportunidades de automatización detectadas durante el taller, que sirve para decidir el siguiente paso si lo hay.",
  },
  {
    q: "¿En qué se diferencia de un curso online sobre ChatGPT?",
    a: "Un curso online enseña la herramienta con ejemplos genéricos, y el problema es que dos semanas después nadie ha aplicado nada a su trabajo. Aquí el taller se prepara sobre vuestros procesos concretos, se imparte de forma presencial con acompañamiento durante la práctica, y cada participante termina con flujos suyos ya funcionando. La diferencia no está en el contenido teórico sino en que se aplica sobre trabajo real desde el primer minuto.",
  },
  {
    q: "¿Dónde impartís la formación?",
    a: "Presencial en Asturias y Madrid. Para otras provincias, consúltanos y valoramos el desplazamiento.",
  },
  {
    q: "¿Cuánto cuesta la formación en IA para empresas?",
    a: `Desde ${PRECIO_PARTICIPANTE} por participante, para grupos de ${GRUPO_MIN} a ${GRUPO_MAX} personas. El importe incluye las entrevistas previas con el equipo, la personalización del taller sobre vuestros procesos, las tres horas de sesión y los cuatro entregables. Para grupos más pequeños o desplazamientos fuera de Asturias lo valoramos caso por caso.`,
  },
  {
    q: "¿Cómo justifico la inversión ante dirección?",
    a: `Con aritmética. Tomando un coste laboral de 18 € por hora —una cifra razonable para perfiles administrativos o comerciales en España— dos horas recuperadas a la semana equivalen a 36 € semanales por persona. Con un coste de ${PRECIO_PARTICIPANTE} por participante, el taller queda amortizado en unas dos semanas. En un año esas dos horas semanales suman unas 90 horas por persona. La estimación de dos horas es deliberadamente conservadora: son veinte minutos al día. Sustituyendo el coste por hora por el real de vuestro equipo, la cuenta sigue saliendo con cualquier cifra realista.`,
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

const AREAS = [
  {
    label: "Comunicación",
    titulo: "Escribir y responder",
    desc: "Correo electrónico, atención al cliente y seguimiento comercial. Redactar más rápido sin perder el tono de la empresa, y responder con criterio a lo que llega cada día.",
  },
  {
    label: "Documentos y reuniones",
    titulo: "Producir y organizar",
    desc: "Informes, propuestas y actas. Preparar un documento partiendo de notas dispersas, resumir una reunión larga y convertirla en tareas concretas con responsable.",
  },
  {
    label: "Análisis y contenido",
    titulo: "Investigar y crear",
    desc: "Búsqueda y análisis de información, marketing y creación de contenidos. Contrastar lo que devuelve la IA, y detectar cuándo se está inventando la respuesta.",
  },
];

const ENTREGABLES = [
  {
    n: "01",
    t: "Guía de prompts de la empresa",
    d: "No una guía genérica descargada de internet: los prompts que construimos durante la sesión, sobre vuestras tareas y con vuestro lenguaje. Es el material que el equipo abre el lunes siguiente.",
  },
  {
    n: "02",
    t: "Flujos documentados y funcionando",
    d: "Cada participante termina el taller con tres flujos propios resueltos de principio a fin. No ejercicios de ejemplo: trabajo real que ya no vuelve a hacerse como antes.",
  },
  {
    n: "03",
    t: "Guía de uso seguro, en una página",
    d: "Qué se puede introducir en una herramienta de IA y qué no, en lenguaje claro y sin jerga legal. Pensada para que pueda circularse internamente tal cual.",
  },
  {
    n: "04",
    t: "Informe de oportunidades de automatización",
    d: "Durante el taller salen a la luz procesos que no deberían hacerse a mano en absoluto. Los recogemos y os los entregamos priorizados, con una estimación de lo que cuesta resolverlos. Tuyo, trabajéis después con nosotros o no.",
  },
];

const SECTORES = [
  { href: "/sectores/administracion-de-fincas", label: "Administradoras de fincas" },
  { href: "/sectores/inmobiliarias", label: "Inmobiliarias" },
  { href: "/sectores/bufetes-abogados", label: "Bufetes y asesorías" },
  { href: "/sectores/clinicas-centros-salud", label: "Clínicas y centros de salud" },
  { href: "/sectores/empresas-mantenimiento", label: "Empresas de mantenimiento" },
];

export default function FormacionIaEmpresas() {
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
            <span style={{ color: "var(--ink)" }}>Formación en IA</span>
          </nav>
        </div>

        {/* PAGE HERO */}
        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">01 / Formación</span>
            <h1>Formación en IA<br /><span className="serif">para empresas</span>.</h1>
            <p className="lede">
              IA que tu equipo usa al día siguiente. Trabajamos sobre sus tareas reales —
              no sobre ejemplos de manual.
            </p>
            <div className="channels" style={{ marginTop: "32px" }}>
              <span className="chip"><span className="ind"></span>Presencial en tu oficina</span>
              <span className="chip"><span className="ind"></span>3 horas</span>
              <span className="chip"><span className="ind"></span>Desde 79 € por participante</span>
              <span className="chip"><span className="ind"></span>Asturias y Madrid</span>
            </div>
          </div>
        </header>

        {/* RESPUESTA DIRECTA GEO */}
        <section className="svc-section" style={{ paddingBottom: "0" }}>
          <div className="wrap">
            <div style={{ maxWidth: "720px" }}>
              <h2 style={{ fontSize: "clamp(24px,3vw,36px)", marginBottom: "16px" }}>
                ¿Qué es la formación en IA para empresas?
              </h2>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--ink-2)" }}>
                La formación en IA para empresas es un taller práctico en el que un equipo aprende
                a aplicar herramientas de inteligencia artificial generativa —ChatGPT, Claude y
                similares— a las tareas concretas de su trabajo diario. A diferencia de un curso
                abierto, se prepara sobre los procesos reales de la empresa: antes de la sesión se
                identifican los casos de uso con mayor potencial, y durante el taller cada
                participante practica sobre su propio trabajo. El objetivo no es que el equipo
                sepa qué es la IA, sino que la esté usando el lunes siguiente.
              </p>
            </div>
          </div>
        </section>

        {/* POR QUÉ NO SUELE FUNCIONAR */}
        <section className="svc-section dark">
          <div className="wrap">
            <div className="svc-head">
              <div>
                <div className="label">El problema</div>
                <h2>Por qué la formación<br />en IA no suele<br /><span className="serif">funcionar</span>.</h2>
              </div>
              <div>
                <p className="lede">
                  La mayoría de las empresas que conocemos ya han hecho algo de formación en IA.
                  Casi ninguna ha cambiado su forma de trabajar por ello. El motivo casi siempre
                  es el mismo.
                </p>
              </div>
            </div>

            <div className="feat-grid">
              <div className="feat">
                <div className="ico">01</div>
                <h4>Prompts genéricos</h4>
                <p>
                  Se enseñan fórmulas que funcionan en la demo y se caen en cuanto el trabajo
                  real es más específico. Nadie recuerda la fórmula dos semanas después.
                </p>
              </div>
              <div className="feat">
                <div className="ico">02</div>
                <h4>Teoría sobre qué es la IA</h4>
                <p>
                  Interesante durante la sesión, inútil el lunes. Entender cómo funciona un
                  modelo no ayuda a redactar la propuesta que hay que enviar esa tarde.
                </p>
              </div>
              <div className="feat">
                <div className="ico">03</div>
                <h4>Una herramienta, no un método</h4>
                <p>
                  Se forma sobre un producto concreto. Cambia el producto —y cambian cada pocos
                  meses— y el equipo vuelve al punto de partida.
                </p>
              </div>
            </div>

            <div style={{ marginTop: "48px", padding: "32px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--r-md)", maxWidth: "720px" }}>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#D8D5CE" }}>
                <strong style={{ color: "var(--paper)" }}>Lo que hacemos distinto:</strong> antes
                del taller hablamos con vosotros para saber en qué se va el tiempo del equipo.
                Seleccionamos tres o cuatro tareas concretas y preparamos la sesión sobre ellas.
                Durante las tres horas, cada persona trabaja sobre su propio material. Sale con
                flujos suyos ya funcionando, no con apuntes.
              </p>
            </div>
          </div>
        </section>

        {/* QUÉ TRABAJAMOS */}
        <section className="svc-section">
          <div className="wrap">
            <div className="svc-head">
              <div>
                <div className="label">Contenido</div>
                <h2>Qué trabajamos<br />en la <span className="serif">sesión</span>.</h2>
              </div>
              <div>
                <p className="lede">
                  Estas son las tres áreas del catálogo. El taller cubre las tres o cuatro tareas
                  concretas que seleccionamos contigo antes de la sesión — no las recorre todas
                  por encima.
                </p>
              </div>
            </div>

            <div className="feat-grid">
              {AREAS.map((area) => (
                <div key={area.label} className="feat">
                  <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "14px" }}>
                    {area.label}
                  </div>
                  <h4>{area.titulo}</h4>
                  <p>{area.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "32px", padding: "24px", background: "var(--bg-2)", borderRadius: "var(--r-md)", borderLeft: "3px solid var(--accent)", maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--ink-2)" }}>
                Transversal a todo lo anterior: <strong style={{ color: "var(--ink)" }}>detectar
                qué tareas no deberían hacerse a mano</strong>. Buena parte del valor del taller
                aparece cuando alguien describe un proceso y queda claro que no necesita IA, sino
                automatización.
              </p>
            </div>
          </div>
        </section>

        {/* CÓMO ES EL TALLER */}
        <section className="svc-section" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="svc-head">
              <div>
                <div className="label">Formato</div>
                <h2>Cómo es<br />el <span className="serif">taller</span>.</h2>
              </div>
              <div>
                <p className="lede">
                  Una sesión única de tres horas, presencial, en vuestras oficinas. Con trabajo
                  antes y material después.
                </p>
              </div>
            </div>

            <div className="stat-row">
              <div className="stat">
                <div className="v">3<span className="ac">h</span></div>
                <div className="l">Sesión única, presencial en tus oficinas</div>
              </div>
              <div className="stat">
                <div className="v">80<span className="ac">%</span></div>
                <div className="l">Práctica sobre tareas reales. El 20% restante, los conceptos imprescindibles</div>
              </div>
              <div className="stat">
                <div className="v">12</div>
                <div className="l">Máximo de participantes, para que cada persona tenga acompañamiento</div>
              </div>
            </div>

            <div className="process-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px", marginTop: "48px" }}>
              <div style={{ padding: "28px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "12px", color: "var(--accent)", marginBottom: "14px" }}>ANTES</div>
                <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>Entrevista y selección</h3>
                <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--ink-2)" }}>
                  Hablamos con vosotros para entender en qué se va el tiempo del equipo.
                  Elegimos las tareas con más potencial y preparamos los ejemplos con vuestro
                  material.
                </p>
              </div>
              <div style={{ padding: "28px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "12px", color: "var(--accent)", marginBottom: "14px" }}>DURANTE</div>
                <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>Tres horas de práctica</h3>
                <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--ink-2)" }}>
                  Cada participante trabaja sobre sus propias tareas, con acompañamiento. No hay
                  ejercicios de ejemplo: se resuelve trabajo que estaba pendiente de verdad.
                </p>
              </div>
              <div style={{ padding: "28px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "12px", color: "var(--accent)", marginBottom: "14px" }}>DESPUÉS</div>
                <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>Material y seguimiento</h3>
                <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--ink-2)" }}>
                  Los cuatro entregables llegan tras la sesión. Opcionalmente, una sesión corta de
                  dudas a los 30 días, cuando ya han aparecido las preguntas de uso real.
                </p>
              </div>
            </div>

            {/* PRECIO */}
            <div style={{ marginTop: "48px", padding: "40px", background: "var(--ink)", color: "var(--paper)", borderRadius: "var(--r-lg)", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#A8C4B0", marginBottom: "14px" }}>
                  Taller in-company · grupos de {GRUPO_MIN} a {GRUPO_MAX}
                </div>
                <div style={{ fontFamily: "'Bricolage Grotesque'", fontSize: "clamp(36px,5vw,56px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1 }}>
                  desde {PRECIO_PARTICIPANTE}
                  <span style={{ fontSize: "0.4em", color: "#A8C4B0", marginLeft: "10px", letterSpacing: "-0.01em" }}>por participante</span>
                </div>
                <p style={{ fontSize: "14px", color: "#A8C4B0", marginTop: "14px", lineHeight: "1.5", maxWidth: "440px" }}>
                  Incluye las entrevistas previas, la personalización sobre vuestros procesos y los
                  cuatro entregables. Grupos menores de {GRUPO_MIN} personas o desplazamiento fuera
                  de Asturias, consúltanos.
                </p>
              </div>
              <Link href="/contacto" className="btn btn-accent">
                Quiero esas 90 horas
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </Link>
            </div>

            {/* LA CUENTA */}
            <div style={{ marginTop: "24px", padding: "40px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
              <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--muted)", marginBottom: "20px" }}>
                La cuenta
              </div>

              <h3 style={{ fontSize: "clamp(28px,3.6vw,44px)", lineHeight: "1.05", marginBottom: "24px", maxWidth: "16ch" }}>
                Noventa horas al año por persona. El taller cuesta {PRECIO_PARTICIPANTE}.
              </h3>

              <div className="svc-grid-asym" style={{ gap: "48px", alignItems: "start" }}>
                <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--ink-2)" }}>
                  Basta con que cada participante recupere dos horas a la semana —unos veinte
                  minutos al día— para llegar a esa cifra. A ese ritmo el taller queda amortizado
                  en menos de un mes. El resto del año, esas dos horas siguen ahí.
                  <br /><br />
                  Es una estimación deliberadamente corta: para alguien que redacta correos,
                  prepara documentos y resume reuniones, veinte minutos diarios es el suelo, no
                  el techo.
                </p>

                <div>
                  {[
                    { l: "Coste por participante", v: PRECIO_PARTICIPANTE },
                    { l: "Tiempo recuperado", v: "2 h / semana" },
                    { l: "Coste laboral estimado", v: "18 € / hora" },
                    { l: "Amortización", v: "~2 semanas", destacado: true },
                    { l: "Recuperado en un año", v: "~90 horas", destacado: true },
                  ].map((fila) => (
                    <div
                      key={fila.l}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        gap: "16px",
                        padding: "14px 0",
                        borderBottom: "1px solid var(--line-soft)",
                      }}
                    >
                      <span style={{ fontSize: "14px", color: fila.destacado ? "var(--ink)" : "var(--ink-2)", fontWeight: fila.destacado ? 500 : 400 }}>
                        {fila.l}
                      </span>
                      <span style={{ fontFamily: "'Geist Mono'", fontSize: fila.destacado ? "16px" : "14px", color: fila.destacado ? "var(--accent)" : "var(--ink)", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
                        {fila.v}
                      </span>
                    </div>
                  ))}
                  <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.5", marginTop: "18px" }}>
                    Sustituye el coste por hora por el de tu equipo: la cuenta sigue saliendo con
                    cualquier cifra realista.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENTREGABLES */}
        <section className="svc-section">
          <div className="wrap">
            <div className="svc-head">
              <div>
                <div className="label">Entregables</div>
                <h2>Qué se lleva<br />tu <span className="serif">equipo</span>.</h2>
              </div>
              <div>
                <p className="lede">
                  El problema de la formación no es la sesión: es lo que queda dos semanas
                  después. Estos cuatro materiales existen para resolver exactamente eso.
                </p>
              </div>
            </div>

            <div className="svc-grid-2">
              {ENTREGABLES.map((e) => (
                <div key={e.n} style={{ padding: "32px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
                  <div style={{ fontFamily: "'Geist Mono'", fontSize: "12px", color: "var(--muted)", marginBottom: "14px" }}>{e.n}</div>
                  <h3 style={{ fontSize: "22px", marginBottom: "12px", lineHeight: "1.15" }}>{e.t}</h3>
                  <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--ink-2)" }}>{e.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* USO SEGURO */}
        <section className="svc-section dark">
          <div className="wrap">
            <div className="svc-grid-asym">
              <div>
                <div className="label">Seguridad</div>
                <h2 style={{ fontSize: "clamp(32px,4vw,48px)", color: "var(--paper)", marginBottom: "24px" }}>
                  Usar IA sin<br />poner en riesgo<br /><span className="serif">vuestros datos</span>.
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.65", color: "#A8C4B0", marginBottom: "28px" }}>
                  La primera preocupación de cualquier responsable es la misma: que alguien del
                  equipo pegue información de un cliente en una herramienta gratuita. Es una
                  preocupación razonable, y por eso es parte del temario y no una advertencia al
                  final.
                </p>
                <div className="channels">
                  <span className="chip"><span className="ind"></span>RGPD</span>
                  <span className="chip"><span className="ind"></span>AI Act</span>
                  <span className="chip"><span className="ind"></span>Versión gratuita vs. empresa</span>
                  <span className="chip"><span className="ind"></span>Qué no se pega nunca</span>
                </div>
              </div>

              <div style={{ padding: "32px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--r-lg)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    { t: "Qué se puede introducir y qué no", d: "Criterio claro y aplicable, sin jerga legal, para que cualquiera del equipo pueda decidir en el momento." },
                    { t: "Diferencia entre versiones", d: "Qué hace cada herramienta con lo que se le envía según el plan contratado. La diferencia es relevante y casi nadie la conoce." },
                    { t: "Verificar antes de usar", d: "Cómo detectar cuándo un modelo está inventando datos, y qué tipo de tarea nunca debe darse por buena sin revisión." },
                  ].map((item) => (
                    <div key={item.t}>
                      <strong style={{ color: "var(--paper)", fontSize: "15px", display: "block", marginBottom: "6px" }}>{item.t}</strong>
                      <p style={{ fontSize: "14px", color: "#A8C4B0", lineHeight: "1.55" }}>{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EL EMBUDO */}
        <section className="svc-section">
          <div className="wrap">
            <div className="svc-head">
              <div>
                <div className="label">El paso siguiente</div>
                <h2>De la formación<br />a la <span className="serif">automatización</span>.</h2>
              </div>
              <div>
                <p className="lede">
                  La formación resuelve el uso individual de la IA. Pero en casi todos los
                  talleres aparece algo más: procesos repetitivos que no necesitan que una
                  persona los haga mejor, sino que dejen de hacerse a mano. Cuando eso ocurre, te
                  decimos cuál es el siguiente paso.
                </p>
              </div>
            </div>

            <div className="process-grid" style={{ borderTopColor: "var(--line-soft)" }}>
              <div className="step" style={{ borderRightColor: "var(--line-soft)" }}>
                <div className="n" style={{ color: "var(--accent)" }}>01</div>
                <h3 style={{ color: "var(--ink)" }}>Formación</h3>
                <p style={{ color: "var(--ink-2)" }}>El equipo empieza a usar la IA en su trabajo diario y detecta dónde se le va el tiempo.</p>
              </div>
              <div className="step" style={{ borderRightColor: "var(--line-soft)" }}>
                <div className="n" style={{ color: "var(--accent)" }}>02</div>
                <h3 style={{ color: "var(--ink)" }}>Diagnóstico</h3>
                <p style={{ color: "var(--ink-2)" }}>
                  Mapeamos los procesos y cuantificamos cuánto vale automatizar cada uno.{" "}
                  <Link href="/servicios#auditoria" style={{ color: "var(--accent)", fontWeight: 500 }}>Ver diagnóstico →</Link>
                </p>
              </div>
              <div className="step" style={{ borderRightColor: "var(--line-soft)" }}>
                <div className="n" style={{ color: "var(--accent)" }}>03</div>
                <h3 style={{ color: "var(--ink)" }}>Optimización</h3>
                <p style={{ color: "var(--ink-2)" }}>A veces basta con documentar bien un proceso y conectar dos herramientas que ya tenéis.</p>
              </div>
              <div className="step step-last">
                <div className="n" style={{ color: "var(--accent)" }}>04</div>
                <h3 style={{ color: "var(--ink)" }}>Automatización</h3>
                <p style={{ color: "var(--ink-2)" }}>
                  Cuando el volumen lo justifica, el proceso deja de hacerse a mano.{" "}
                  <Link href="/servicios/automatizacion-de-procesos" style={{ color: "var(--accent)", fontWeight: 500 }}>Ver automatización →</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PARA QUIÉN */}
        <section className="svc-section" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div style={{ maxWidth: "760px" }}>
              <span className="eyebrow">Para quién</span>
              <h2 style={{ marginTop: "20px", fontSize: "clamp(32px,4vw,52px)", marginBottom: "24px" }}>
                Pymes y equipos que quieren<br />usar la IA <span className="serif">con sentido</span>.
              </h2>
              <p style={{ fontSize: "17px", lineHeight: "1.6", color: "var(--ink-2)", marginBottom: "32px" }}>
                Equipos comerciales, departamentos administrativos, agencias, asesorías,
                inmobiliarias y empresas de servicios. No hace falta perfil técnico: la formación
                está diseñada para gente que trabaja con clientes, documentos y correo, no con
                código.
              </p>
              <div className="filters">
                {SECTORES.map((s) => (
                  <Link key={s.href} href={s.href} className="filter">{s.label}</Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="svc-section faq">
          <div className="wrap">
            <div className="faq-grid">
              <div className="sticky-info">
                <span className="eyebrow">Preguntas frecuentes</span>
                <h2 style={{ marginTop: "20px" }}>Lo que nos<br />suelen <span className="serif">preguntar.</span></h2>
                <p style={{ marginTop: "20px", fontSize: "15px", color: "var(--ink-2)", lineHeight: "1.55" }}>
                  ¿No encuentras tu pregunta?{" "}
                  <Link href="/contacto" style={{ color: "var(--ink)", textDecoration: "underline" }}>Escríbenos directamente.</Link>
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
            <div style={{ maxWidth: "720px" }}>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", marginBottom: "20px" }}>
                Automatizar una empresa<br />no empieza por la <span className="serif">tecnología</span>
              </h2>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--ink-2)", marginBottom: "24px" }}>
                La formación es el primer escalón, y muchas veces el único que hace falta durante
                un tiempo. Antes de plantear agentes o software a medida conviene entender el
                recorrido completo: qué se puede resolver documentando, qué necesita conectar
                herramientas y en qué punto tiene sentido construir algo propio.
              </p>
              <Link href="/automatizacion-empresas-con-ia" style={{ fontSize: "14px", color: "var(--accent)", fontWeight: "500" }}>
                Guía completa: cómo automatizar tu empresa con IA →
              </Link>
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
            <span className="eyebrow" style={{ color: "#B8B6AE" }}>¿Quieres saber cómo usaría la IA tu equipo en su trabajo real?</span>
            <h2 style={{ marginTop: "24px" }}>Reserva 30 minutos.<br /><span className="serif">Sin compromiso.</span></h2>
            <p>
              Nos cuentas cómo trabaja tu equipo y te decimos qué tres tareas atacaríamos primero
              en el taller — y si la formación es realmente lo que necesitáis ahora.
            </p>
            <div className="row">
              <Link href="/contacto" className="btn btn-primary">
                Reservar 30 minutos
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </Link>
              <Link href="/servicios" className="btn btn-secondary">Ver todos los servicios</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
