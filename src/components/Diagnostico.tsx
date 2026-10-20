"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { track } from "@/lib/analytics";
import {
  PROCESOS, SEMANAS, COSTE_HORA_DEFECTO, TEXTO_VEREDICTO,
  calcular, type Veredicto,
} from "@/lib/diagnostico";

const COLOR_VEREDICTO: Record<Veredicto, { fondo: string; texto: string; borde: string }> = {
  automatizar: { fondo: "var(--mint)", texto: "#1B4332", borde: "#1B4332" },
  documentar: { fondo: "var(--bg-2)", texto: "var(--ink)", borde: "var(--accent)" },
  dejarlo: { fondo: "transparent", texto: "var(--muted)", borde: "var(--line-soft)" },
};

const euros = (n: number) => n.toLocaleString("es-ES");

export default function Diagnostico() {
  const [horas, setHoras] = useState<Record<string, number>>({});
  const [coste, setCoste] = useState(COSTE_HORA_DEFECTO);
  const [calculado, setCalculado] = useState(false);

  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [envio, setEnvio] = useState<"inicial" | "enviando" | "ok" | "error">("inicial");

  const resultado = useMemo(() => calcular(horas, coste), [horas, coste]);
  const totalSemana = Object.values(horas).reduce((t, h) => t + (Number(h) || 0), 0);

  function fijarHoras(id: string, valor: string) {
    const n = Math.min(60, Math.max(0, Number(valor) || 0));
    setHoras((prev) => ({ ...prev, [id]: n }));
  }

  function calcularAhora() {
    if (totalSemana <= 0) return;
    setCalculado(true);
    track("diagnostico_calculado", { horas_semana: totalSemana, procesos: resultado.procesos.length });
    queueMicrotask(() => document.getElementById("resultado-diagnostico")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  async function pedirDesglose(e: React.FormEvent) {
    e.preventDefault();
    if (envio === "enviando" || !consent) return;
    setEnvio("enviando");
    try {
      const res = await fetch("/api/diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email, consent, costeHora: coste,
          horasAno: resultado.horasAno,
          euros: resultado.euros,
          procesos: resultado.procesos.map((r) => ({
            nombre: r.proceso.nombre, horasSemana: r.horasSemana,
            horasAno: r.horasAno, euros: r.euros, veredicto: r.veredicto,
          })),
        }),
      });
      if (!res.ok) throw new Error();
      setEnvio("ok");
      track("diagnostico_enviado", { horas_ano: resultado.horasAno });
    } catch {
      setEnvio("error");
    }
  }

  return (
    <div>
      {/* ── ENTRADA ── */}
      <div style={{ background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)", padding: "clamp(24px,4vw,40px)" }}>
        <p style={{ fontSize: "15px", lineHeight: "1.65", color: "var(--ink-2)", marginBottom: "28px", maxWidth: "620px" }}>
          Indica cuántas horas <strong style={{ color: "var(--ink)" }}>suma tu equipo entero</strong> en
          cada tarea durante una semana normal. Si una no os aplica, déjala en cero.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {PROCESOS.map((p) => (
            <div
              key={p.id}
              style={{
                display: "grid", gridTemplateColumns: "1fr auto", gap: "20px",
                alignItems: "center", padding: "18px 0", borderBottom: "1px solid var(--line-soft)",
              }}
            >
              <div>
                <label htmlFor={`h-${p.id}`} style={{ fontSize: "15px", fontWeight: 500, color: "var(--ink)", display: "block", marginBottom: "4px", cursor: "pointer" }}>
                  {p.nombre}
                </label>
                <p style={{ fontSize: "13px", lineHeight: "1.5", color: "var(--muted)", maxWidth: "520px" }}>{p.descripcion}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }}>
                <input
                  id={`h-${p.id}`}
                  type="number" min={0} max={60} step={1}
                  value={horas[p.id] ?? ""}
                  onChange={(e) => fijarHoras(p.id, e.target.value)}
                  placeholder="0"
                  style={{
                    font: "inherit", fontFamily: "'Geist Mono'", fontSize: "16px", width: "74px",
                    textAlign: "right", padding: "10px 12px", borderRadius: "var(--r-sm)",
                    border: "1px solid var(--line-soft)", background: "var(--bg)", color: "var(--ink)",
                  }}
                />
                <span style={{ fontSize: "13px", color: "var(--muted)" }}>h/sem</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center", justifyContent: "space-between", marginTop: "28px" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--ink-2)" }}>
            Coste laboral por hora
            <input
              type="number" min={5} max={200} value={coste}
              onChange={(e) => setCoste(Math.min(200, Math.max(5, Number(e.target.value) || COSTE_HORA_DEFECTO)))}
              style={{
                font: "inherit", fontFamily: "'Geist Mono'", fontSize: "15px", width: "70px",
                textAlign: "right", padding: "8px 10px", borderRadius: "var(--r-sm)",
                border: "1px solid var(--line-soft)", background: "var(--bg)", color: "var(--ink)",
              }}
            />
            €
          </label>
          <button onClick={calcularAhora} disabled={totalSemana <= 0} className="btn btn-primary" style={{ opacity: totalSemana <= 0 ? 0.4 : 1 }}>
            Ver el resultado
            <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
          </button>
        </div>
        <p style={{ fontSize: "12px", color: "var(--muted)", marginTop: "14px", lineHeight: "1.5" }}>
          18 €/hora corresponde a un perfil administrativo o comercial en España, contando la
          cotización. Cámbialo por el de tu equipo: el cálculo se rehace solo.
        </p>
      </div>

      {/* ── RESULTADO ── */}
      {calculado && (
        <div id="resultado-diagnostico" style={{ marginTop: "32px", scrollMarginTop: "80px" }}>
          <div style={{ background: "var(--ink)", color: "var(--paper)", borderRadius: "var(--r-lg)", padding: "clamp(28px,4vw,44px)" }}>
            <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#A8C4B0", marginBottom: "18px" }}>
              Tu resultado
            </div>

            {resultado.horasAno > 0 ? (
              <>
                <div style={{ fontFamily: "'Bricolage Grotesque'", fontSize: "clamp(38px,6vw,68px)", fontWeight: 500, letterSpacing: "-0.035em", lineHeight: 1, marginBottom: "16px" }}>
                  {euros(resultado.horasAno)} horas al año
                </div>
                <p style={{ fontSize: "17px", lineHeight: "1.6", color: "#A8C4B0", maxWidth: "560px" }}>
                  Equivalen a unas <strong style={{ color: "var(--paper)" }}>{resultado.jornadas} jornadas completas</strong> y
                  a <strong style={{ color: "var(--paper)" }}>{euros(resultado.euros)} €</strong> de coste laboral, con la
                  cifra de {coste} €/hora que has puesto.
                </p>
              </>
            ) : (
              <>
                <div style={{ fontFamily: "'Bricolage Grotesque'", fontSize: "clamp(30px,4.5vw,46px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: "16px" }}>
                  Ninguno de esos procesos<br />te compensa automatizar.
                </div>
                <p style={{ fontSize: "17px", lineHeight: "1.6", color: "#A8C4B0", maxWidth: "560px" }}>
                  Con las horas que has indicado, construir y mantener una automatización costaría
                  más de lo que ahorra. Preferimos decírtelo ahora que cobrarte por descubrirlo.
                </p>
              </>
            )}

            {resultado.horasAno > 0 && (
              <p style={{ fontFamily: "'Geist Mono'", fontSize: "12px", color: "#6A9C7A", marginTop: "24px", lineHeight: "1.6" }}>
                {totalSemana} h/semana declaradas × {SEMANAS} semanas × el porcentaje automatizable de cada tarea
              </p>
            )}
          </div>

          {/* Desglose, incluidos los que no compensan */}
          <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {resultado.procesos.map((r) => {
              const c = COLOR_VEREDICTO[r.veredicto];
              const t = TEXTO_VEREDICTO[r.veredicto];
              return (
                <div key={r.proceso.id} style={{ padding: "22px 24px", background: c.fondo, border: `1px solid ${c.borde}`, borderRadius: "var(--r-md)" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "baseline", justifyContent: "space-between", marginBottom: "8px" }}>
                    <strong style={{ fontSize: "16px", color: r.veredicto === "dejarlo" ? "var(--muted)" : "var(--ink)" }}>
                      {r.proceso.nombre}
                    </strong>
                    <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", color: c.texto, whiteSpace: "nowrap" }}>
                      {r.horasAno} h/año · {euros(r.euros)} €
                    </span>
                  </div>
                  <div style={{ fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: c.texto, marginBottom: "8px" }}>
                    {t.etiqueta}
                  </div>
                  <p style={{ fontSize: "14px", lineHeight: "1.6", color: r.veredicto === "dejarlo" ? "var(--muted)" : "var(--ink-2)" }}>
                    {t.explicacion}
                    {r.veredicto === "automatizar" && (
                      <>
                        {" "}
                        <Link href={r.proceso.servicio.href} style={{ color: "var(--accent)", fontWeight: 500 }}>
                          {r.proceso.servicio.etiqueta} →
                        </Link>
                      </>
                    )}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Captación: el desglose por correo */}
          {resultado.horasAno > 0 && (
            <div style={{ marginTop: "24px", padding: "clamp(24px,4vw,36px)", background: "var(--bg-2)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
              {envio === "ok" ? (
                <>
                  <p style={{ fontSize: "17px", fontWeight: 500, color: "var(--ink)", marginBottom: "8px" }}>Enviado. Revisa tu correo.</p>
                  <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--ink-2)" }}>
                    Si quieres que lo comentemos, responde a ese mismo correo y te contestamos nosotros.
                  </p>
                </>
              ) : (
                <>
                  <h3 style={{ fontSize: "clamp(20px,2.4vw,26px)", marginBottom: "10px" }}>
                    ¿Te lo enviamos para enseñárselo a quien decide?
                  </h3>
                  <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--ink-2)", marginBottom: "22px", maxWidth: "560px" }}>
                    Te mandamos este desglose por correo, con los supuestos declarados para que
                    cualquiera pueda comprobar la cuenta. Sin listas de difusión.
                  </p>
                  <form onSubmit={pedirDesglose}>
                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "14px" }}>
                      <input
                        type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@empresa.com" aria-label="Tu correo electrónico"
                        style={{
                          flex: "1 1 240px", minWidth: 0, font: "inherit", fontSize: "15px",
                          padding: "13px 16px", borderRadius: "var(--r-pill)",
                          border: "1px solid var(--line-soft)", background: "var(--paper)", color: "var(--ink)",
                        }}
                      />
                      <button type="submit" disabled={envio === "enviando" || !consent} className="btn btn-primary" style={{ opacity: !consent || envio === "enviando" ? 0.45 : 1 }}>
                        {envio === "enviando" ? "Enviando…" : "Enviarme el desglose"}
                      </button>
                    </div>
                    <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13px", lineHeight: "1.5", color: "var(--ink-2)", cursor: "pointer" }}>
                      <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required style={{ marginTop: "3px", accentColor: "var(--accent)", flexShrink: 0 }} />
                      <span>
                        Acepto que uséis mi correo para enviarme este desglose y, si procede,
                        contactarme una vez.{" "}
                        <Link href="/politica-de-privacidad" style={{ color: "var(--accent)", textDecoration: "underline" }}>Política de privacidad</Link>
                      </span>
                    </label>
                    {envio === "error" && (
                      <p style={{ marginTop: "14px", fontSize: "13px", color: "var(--destructive, #B91C1C)" }}>
                        No ha salido. Inténtalo otra vez o escríbenos a hablemos@automatizatuempresa.com
                      </p>
                    )}
                  </form>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
