"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const slots = ["Mañana (9–13h)", "Tarde (16–19h)", "Me da igual"];

export default function Contacto() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", size: "10 — 50 personas", sector: "Servicios B2B", msg: "", day: "", slot: "" });
  const [consent, setConsent] = useState(false);
  const [checks, setChecks] = useState<string[]>([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, checks }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  function toggleCheck(v: string) {
    setChecks((prev) => prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]);
  }

  return (
    <>
      <Nav />
      <main>
        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Contacto</span>
            <h1>Hablemos<br />de tu <span className="serif">operación</span>.</h1>
            <p className="lede">Cuéntanos cómo trabaja tu equipo. Escuchamos, hacemos las preguntas que importan y te damos una primera opinión honesta sobre qué podría automatizarse — y si tiene sentido hacerlo.</p>
          </div>
        </header>

        <section>
          <div className="wrap">
            <div className="form-centered">
              {sent ? (
                <div className="form-success show">
                  <div className="ic">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L19 7" stroke="#1B4332" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <h3>Recibido, gracias.</h3>
                  <p>Un sistema lo procesa al instante — una persona lo lee antes de responderte. Mientras tanto, échale un ojo a los casos que ya tenemos en marcha.</p>
                  <Link href="/casos" className="btn btn-secondary" style={{ marginTop: "24px" }}>Ver casos →</Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row split">
                    <div className="form-row" style={{ margin: 0 }}>
                      <label htmlFor="name">Nombre y apellidos</label>
                      <input id="name" type="text" placeholder="María García" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="form-row" style={{ margin: 0 }}>
                      <label htmlFor="company">Empresa</label>
                      <input id="company" type="text" placeholder="Tu empresa" required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                    </div>
                  </div>

                  <div className="form-row split">
                    <div className="form-row" style={{ margin: 0 }}>
                      <label htmlFor="email">Email</label>
                      <input id="email" type="email" placeholder="maria@tuempresa.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div className="form-row" style={{ margin: 0 }}>
                      <label htmlFor="phone">Teléfono (opcional)</label>
                      <input id="phone" type="tel" placeholder="+34 600 000 000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>

                  <div className="form-row split">
                    <div className="form-row" style={{ margin: 0 }}>
                      <label htmlFor="size">Tamaño de equipo</label>
                      <select id="size" value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })}>
                        <option>1 — 10 personas</option>
                        <option>10 — 50 personas</option>
                        <option>50 — 200 personas</option>
                        <option>+200 personas</option>
                      </select>
                    </div>
                    <div className="form-row" style={{ margin: 0 }}>
                      <label htmlFor="sector">Sector</label>
                      <select id="sector" value={form.sector} onChange={(e) => setForm({ ...form, sector: e.target.value })}>
                        {["E-commerce / Retail", "Salud / Bienestar", "Administración de fincas", "Sector público", "Servicios B2B", "Logística / Distribución", "Hostelería / Restauración", "Inmobiliario", "Educación", "Otro"].map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <label>¿Qué te interesa? (puedes elegir varios)</label>
                    <div className="check-group">
                      {["Diagnóstico de procesos", "Automatización de procesos", "Agentes conversacionales", "Agentes de voz", "CRM inteligente", "Software a medida", "Aún no lo tengo claro"].map((opt) => (
                        <label key={opt} className="check">
                          <input type="checkbox" checked={checks.includes(opt)} onChange={() => toggleCheck(opt)} />
                          <span className="box"></span>
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-row">
                    <label htmlFor="msg">¿Qué proceso te está consumiendo más tiempo?</label>
                    <textarea id="msg" placeholder="Ej: somos administradora de fincas, 60 comunidades, y el día 1 de cada mes el teléfono colapsa con consultas de cuotas e incidencias…" value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} />
                  </div>

                  <div className="form-row">
                    <label>¿Cuándo te va mejor para hablar? (opcional)</label>
                    <div className="avail-chips">
                      {slots.map((s) => (
                        <button type="button" key={s} className={`avail-chip${form.slot === s ? " selected" : ""}`} onClick={() => setForm({ ...form, slot: form.slot === s ? "" : s })}>{s}</button>
                      ))}
                    </div>
                  </div>

                  <label className="consent">
                    <input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                    <span>Acepto la <Link href="/politica-de-privacidad">política de privacidad</Link> y el tratamiento de mis datos para contactar conmigo sobre esta solicitud.</span>
                  </label>

                  {error && (
                    <p style={{ color: "var(--accent)", fontSize: "14px", marginBottom: "12px" }}>
                      Algo fue mal al enviar. Escríbenos directamente a hablemos@automatizatuempresa.com
                    </p>
                  )}
                  <div className="submit-row">
                    <button type="submit" className="btn btn-primary" disabled={sending}>
                      {sending ? "Enviando…" : "Enviar mensaje"}
                      {!sending && <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>}
                    </button>
                    <div className="submit-meta">Un sistema lo procesa · una persona lo lee</div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
