"use client";

import { useState } from "react";
import Link from "next/link";
import { track } from "@/lib/analytics";

/**
 * Captación de contacto a cambio de enviar la guía por correo.
 *
 * La guía sigue siendo pública: esto no la cierra. Lo que se ofrece es
 * recibirla por email para leerla con calma o reenviarla al equipo, que es
 * una razón honesta para dejar la dirección.
 */
export default function GuiaLead({ origen }: { origen: string }) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [estado, setEstado] = useState<"inicial" | "enviando" | "ok" | "error">("inicial");

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (estado === "enviando" || !consent) return;
    setEstado("enviando");
    try {
      const res = await fetch("/api/guia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent, origen }),
      });
      if (!res.ok) throw new Error();
      setEstado("ok");
      track("guia_solicitada", { origen });
    } catch {
      setEstado("error");
      track("guia_error", { origen });
    }
  }

  if (estado === "ok") {
    return (
      <div style={{ padding: "32px", background: "var(--mint)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)" }}>
        <p style={{ fontSize: "17px", fontWeight: 500, color: "#1B4332", marginBottom: "8px" }}>
          Enviada. Revisa tu correo.
        </p>
        <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#1B4332" }}>
          Si no aparece en unos minutos, mira en spam. Y si quieres comentarla, responde a ese
          mismo correo y te contestamos nosotros.
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: "32px", background: "var(--ink)", color: "var(--paper)", borderRadius: "var(--r-lg)" }}>
      <div style={{ fontFamily: "'Geist Mono'", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#A8C4B0", marginBottom: "14px" }}>
        La guía, por email
      </div>
      <h3 style={{ fontSize: "clamp(22px,2.6vw,30px)", color: "var(--paper)", marginBottom: "12px", lineHeight: "1.15" }}>
        ¿Prefieres leerla con calma?
      </h3>
      <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#A8C4B0", marginBottom: "24px", maxWidth: "460px" }}>
        Te la enviamos al correo para que la leas cuando quieras o se la pases a quien toma la
        decisión. La guía seguirá estando aquí, gratis y completa: no hay versión de pago.
      </p>

      <form onSubmit={enviar}>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px" }}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@empresa.com"
            aria-label="Tu correo electrónico"
            style={{
              flex: "1 1 240px", minWidth: 0, font: "inherit", fontSize: "15px",
              padding: "13px 16px", borderRadius: "var(--r-pill)",
              border: "1px solid #2E5040", background: "#152219", color: "var(--paper)",
            }}
          />
          <button
            type="submit"
            disabled={estado === "enviando" || !consent}
            className="btn btn-accent"
            style={{ opacity: !consent || estado === "enviando" ? 0.45 : 1, cursor: !consent ? "not-allowed" : "pointer" }}
          >
            {estado === "enviando" ? "Enviando…" : "Enviármela"}
          </button>
        </div>

        <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13px", lineHeight: "1.5", color: "#A8C4B0", cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
            style={{ marginTop: "3px", accentColor: "var(--accent-hi)", flexShrink: 0 }}
          />
          <span>
            Acepto que uséis mi correo para enviarme la guía y, si procede, contactarme una vez.
            Nada de listas de difusión.{" "}
            <Link href="/politica-de-privacidad" style={{ color: "var(--accent-hi)", textDecoration: "underline" }}>
              Política de privacidad
            </Link>
          </span>
        </label>

        {estado === "error" && (
          <p style={{ marginTop: "14px", fontSize: "13px", color: "#FCA5A5" }}>
            No ha salido. Inténtalo otra vez o escríbenos a hablemos@automatizatuempresa.com
          </p>
        )}
      </form>
    </div>
  );
}
