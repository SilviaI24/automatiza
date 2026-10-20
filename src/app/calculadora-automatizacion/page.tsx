import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import Diagnostico from "@/components/Diagnostico";
import { PROCESOS, SEMANAS } from "@/lib/diagnostico";

const BASE = "https://www.automatizatuempresa.com";
const URL_PAGINA = `${BASE}/calculadora-automatizacion`;

export const metadata: Metadata = {
  title: "Calculadora: cuánto tiempo puedes automatizar",
  description:
    "Calcula en dos minutos cuántas horas al año puede recuperar tu equipo automatizando. Te decimos también qué procesos no compensa tocar.",
  alternates: { canonical: URL_PAGINA },
  openGraph: {
    title: "¿Cuánto tiempo puedes recuperar automatizando? | Automatiza tu Empresa",
    description:
      "Una calculadora honesta: suma lo que puedes recuperar y te dice qué procesos no merece la pena automatizar.",
    url: URL_PAGINA,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de automatización para empresas",
    description: "Cuántas horas al año puede recuperar tu equipo — y qué no compensa automatizar.",
    images: ["/og.png"],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${URL_PAGINA}#webpage`,
  url: URL_PAGINA,
  name: "Calculadora de automatización para empresas",
  dateModified: "2026-10-20",
  isPartOf: { "@id": `${BASE}/#website` },
  breadcrumb: { "@id": `${URL_PAGINA}#breadcrumb` },
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de automatización",
  url: URL_PAGINA,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Cualquiera con navegador",
  inLanguage: "es-ES",
  description:
    "Herramienta gratuita que estima las horas anuales que una empresa puede recuperar automatizando sus procesos, e indica cuáles no compensa automatizar.",
  provider: { "@id": `${BASE}/#organization` },
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${URL_PAGINA}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: BASE },
    { "@type": "ListItem", position: 2, name: "Calculadora de automatización", item: URL_PAGINA },
  ],
};

export default function CalculadoraAutomatizacion() {
  return (
    <>
      <Nav />
      <main>
        <div className="wrap" style={{ paddingTop: "24px", paddingBottom: "0" }}>
          <nav aria-label="Breadcrumb" style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", color: "var(--muted)" }}>
            <Link href="/" style={{ color: "var(--muted)" }}>Inicio</Link>
            <span>›</span>
            <span style={{ color: "var(--ink)" }}>Calculadora</span>
          </nav>
        </div>

        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Herramienta gratuita</span>
            <h1>¿Cuánto tiempo<br />puedes <span className="serif">recuperar</span>?</h1>
            <p className="lede">
              Dos minutos y una estimación de las horas que tu equipo deja cada año en tareas que
              podrían no hacerse a mano. Sin registro, sin correo: el resultado sale en pantalla.
            </p>
          </div>
        </header>

        <section className="svc-section" style={{ background: "var(--bg)" }}>
          <div className="wrap">
            <div style={{ maxWidth: "860px" }}>
              <Diagnostico />
            </div>
          </div>
        </section>

        {/* CÓMO ESTÁ CALCULADO */}
        <section className="svc-section" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="svc-head">
              <div>
                <div className="label">Transparencia</div>
                <h2>Cómo está<br /><span className="serif">calculado</span>.</h2>
              </div>
              <div>
                <p className="lede">
                  Una calculadora que no enseña sus supuestos sirve para vender, no para decidir.
                  Estos son los nuestros, para que puedas discutirlos.
                </p>
              </div>
            </div>

            <div className="svc-grid-sym">
              <div style={{ background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)", padding: "32px" }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>
                  Qué parte puede dejar de hacerse a mano
                </div>
                {PROCESOS.map((p) => (
                  <div key={p.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", padding: "11px 0", borderBottom: "1px solid var(--line-soft)" }}>
                    <span style={{ fontSize: "14px", color: "var(--ink-2)" }}>{p.nombre}</span>
                    <span style={{ fontFamily: "'Geist Mono'", fontSize: "14px", color: "var(--accent)", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
                      {Math.round(p.automatizable * 100)}%
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <h3 style={{ fontSize: "24px", marginBottom: "14px" }}>Por qué no todo es automatizable</h3>
                <p style={{ fontSize: "15px", lineHeight: "1.65", color: "var(--ink-2)", marginBottom: "24px" }}>
                  Un informe mensual se monta solo: los datos están en sistemas y las reglas no
                  cambian. Una propuesta comercial, no — hay criterio, contexto y una decisión
                  sobre qué contar y qué callar. Por eso el porcentaje va del 90% en informes al
                  50% en documentos.
                </p>

                <h3 style={{ fontSize: "24px", marginBottom: "14px" }}>Por qué descartamos lo pequeño</h3>
                <p style={{ fontSize: "15px", lineHeight: "1.65", color: "var(--ink-2)", marginBottom: "24px" }}>
                  Por debajo de 30 horas al año —unos 40 minutos a la semana— construir una
                  automatización no se paga. Hay que diseñarla, probarla y mantenerla cuando algo
                  cambie. Esas tareas aparecen en el resultado, pero no suman al total.
                </p>

                <h3 style={{ fontSize: "24px", marginBottom: "14px" }}>De dónde salen las semanas</h3>
                <p style={{ fontSize: "15px", lineHeight: "1.65", color: "var(--ink-2)" }}>
                  Contamos {SEMANAS} semanas laborables, descontando vacaciones y festivos. Y el
                  coste por hora que viene puesto —18 €— corresponde a un perfil administrativo o
                  comercial en España con la cotización incluida. Puedes cambiarlo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* QUÉ NO ES */}
        <section className="svc-section dark">
          <div className="wrap">
            <div style={{ maxWidth: "760px" }}>
              <div className="label">Los límites</div>
              <h2 style={{ fontSize: "clamp(32px,4vw,52px)", color: "var(--paper)", marginBottom: "28px" }}>
                Esto es una estimación,<br />no un <span className="serif">presupuesto</span>.
              </h2>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#A8C4B0", marginBottom: "20px" }}>
                La calculadora trabaja con lo que tú declaras, y casi todo el mundo se equivoca al
                estimar su propio tiempo — unas veces por arriba y otras por abajo. Sirve para
                saber si merece la pena mirar esto en serio, no para decidir una inversión.
              </p>
              <p style={{ fontSize: "17px", lineHeight: "1.65", color: "#A8C4B0", marginBottom: "32px" }}>
                Lo que sí da una cifra fiable es el diagnóstico: mapear los procesos como ocurren
                de verdad, medirlos y cuantificar cada uno. Eso no se puede hacer con un
                formulario.
              </p>
              <Link href="/servicios#auditoria" className="btn btn-accent">
                Ver el diagnóstico de procesos
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ENLACE A LA GUÍA */}
        <section className="svc-section" style={{ background: "var(--bg)", padding: "64px 0" }}>
          <div className="wrap">
            <div style={{ maxWidth: "720px" }}>
              <h2 style={{ fontSize: "clamp(26px,3.2vw,40px)", marginBottom: "18px" }}>
                Si el resultado te ha dado que pensar
              </h2>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--ink-2)", marginBottom: "22px" }}>
                La guía explica el recorrido completo: qué se resuelve documentando, qué necesita
                conectar herramientas que ya tienes y en qué punto tiene sentido construir algo
                propio. Es gratis y está entera en la web.
              </p>
              <Link href="/automatizacion-empresas-con-ia" style={{ fontSize: "15px", color: "var(--accent)", fontWeight: 500 }}>
                Cómo automatizar tu empresa con IA →
              </Link>
            </div>
          </div>
        </section>

        <section className="cta-final">
          <div className="wrap">
            <span className="eyebrow" style={{ color: "#B8B6AE" }}>¿Quieres contrastar el número?</span>
            <h2 style={{ marginTop: "24px" }}>Reserva 30 minutos.<br /><span className="serif">Sin compromiso.</span></h2>
            <p>
              Nos cuentas cómo trabaja tu equipo y te decimos qué automatizaríamos primero — o si
              lo tuyo todavía no lo necesita.
            </p>
            <div className="row">
              <Link href="/contacto" className="btn btn-primary">
                Reservar 30 minutos
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </Link>
              <Link href="/servicios" className="btn btn-secondary">Ver servicios</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
