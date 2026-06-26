import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes somos — Consultores en automatización con IA",
  description: "Consultores en automatización con IA y marketing digital. Desde Gijón, trabajamos con empresas de toda España para automatizar su operación.",
  openGraph: {
    title: "Quiénes somos | Automatiza tu Empresa — Gijón, Asturias",
    description: "Consultores en automatización con IA y marketing digital. Desde Gijón, trabajamos con empresas de toda España para automatizar su operación.",
    url: "https://www.automatizatuempresa.com/nosotros",
  },
  alternates: {
    canonical: "https://www.automatizatuempresa.com/nosotros",
  },
};

const socios = [
  {
    nombre: "David Jiménez",
    tags: ["Agentes IA", "Automatización", "Arquitectura", "Customer Journey"],
    foto: "/assets/david.jpg",
    iniciales: "DJ",
  },
  {
    nombre: "Danna Andrade",
    tags: ["Auditoría de procesos", "Optimización operativa", "CRM"],
    foto: "/assets/danna.jpg",
    iniciales: "DA",
  },
];

export default function Nosotros() {
  return (
    <>
      <Nav />
      <main>
        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Nosotros</span>
            <h1>Detrás de cada<br />proyecto, <span className="serif">personas</span>.</h1>
            <p className="lede">
              Venimos del marketing digital. Eso nos dio algo que la mayoría de equipos técnicos no tienen: entender el negocio antes de tocar una línea de código. Cuando sumamos esa visión a la capa de automatización e IA, el resultado es distinto — sistemas que encajan con cómo funciona realmente una empresa, no con cómo debería funcionar en teoría.
            </p>
          </div>
        </header>

        {/* SOCIOS */}
        <section style={{ paddingBottom: "100px" }}>
          <div className="wrap">
            <div className="socios-grid">
              {socios.map((s) => (
                <div key={s.nombre} className="socio-card">
                  <div className="socio-foto">
                    {/* Sustituye el placeholder con tu foto: pon el archivo en public/assets/david.jpg o danna.jpg */}
                    {/* <Image src={s.foto} alt={s.nombre} fill style={{ objectFit: "cover" }} /> */}
                    <div className="socio-placeholder">{s.iniciales}</div>
                  </div>
                  <div className="socio-info">
                    <h2 className="socio-nombre">{s.nombre}</h2>
                    <div className="socio-tags">
                      {s.tags.map((t) => (
                        <span key={t} className="socio-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POR QUÉ EXISTE ESTO */}
        <section className="block process" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow" style={{ color: "#B8B6AE" }}>Nuestra forma de trabajar</span>
                <h2 style={{ marginTop: "18px", color: "var(--paper)" }}>
                  No vendemos herramientas.<br />
                  <span className="serif">Resolvemos operaciones.</span>
                </h2>
              </div>
              <p className="desc" style={{ color: "#B8B6AE" }}>
                Años trabajando en marketing digital nos enseñaron a ver el negocio completo: el customer journey, los cuellos de botella, dónde se pierde dinero y dónde se gana. La tecnología vino después — y esa combinación es lo que nos permite automatizar con criterio, no solo con código.
              </p>
            </div>

            <div className="process-grid process-grid-3" style={{ marginTop: "48px" }}>
              <div className="step">
                <span className="n">De dónde venimos</span>
                <h3>Marketing digital primero</h3>
                <p>Antes de automatizar procesos, aprendimos a leer negocios: qué mueve el crecimiento, cómo se comportan los clientes, dónde se rompe el journey. Eso cambia cómo se diseña un sistema.</p>
              </div>
              <div className="step">
                <span className="n">Qué nos diferencia</span>
                <h3>Visión de negocio + capa tech</h3>
                <p>No somos solo desarrolladores que automatizan tareas. Entendemos el funnel, la retención y el margen. Los sistemas que construimos sirven al negocio, no al revés.</p>
              </div>
              <div className="step step-last">
                <span className="n">Cómo trabajamos</span>
                <h3>Directos y sin rodeos</h3>
                <p>Si algo no va a funcionar, te lo decimos antes de empezar. Preferimos no hacer un proyecto que construir algo inútil.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-final">
          <div className="wrap">
            <span className="eyebrow" style={{ color: "#B8B6AE" }}>¿Hablamos?</span>
            <h2 style={{ marginTop: "24px" }}>
              30 minutos para ver<br />si <span className="serif">tiene sentido.</span>
            </h2>
            <p>Sin propuestas de 80 páginas. Sin venta dura. Solo una conversación honesta sobre lo que podemos hacer juntos.</p>
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
