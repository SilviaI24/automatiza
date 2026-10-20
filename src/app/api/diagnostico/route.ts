import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { TEXTO_VEREDICTO, SEMANAS, type Veredicto } from "@/lib/diagnostico";

const VERDE = "#1B5E3B";
const LIMA = "#A3E635";
const TINTA = "#080D09";

/** Los datos llegan del cliente: nada entra en el HTML sin escapar. */
function esc(v: unknown): string {
  return String(v ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

const num = (v: unknown, max: number) =>
  Math.max(0, Math.min(max, Math.round(Number(v) || 0)));

const emailValido = (v: unknown): v is string =>
  typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

type FilaEntrante = { nombre?: unknown; horasSemana?: unknown; horasAno?: unknown; euros?: unknown; veredicto?: unknown };

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const email = typeof data?.email === "string" ? data.email.trim() : "";

    if (!emailValido(email)) return NextResponse.json({ ok: false, error: "email" }, { status: 400 });
    if (data?.consent !== true) return NextResponse.json({ ok: false, error: "consent" }, { status: 400 });

    const costeHora = num(data?.costeHora, 200) || 18;
    const horasAno = num(data?.horasAno, 100000);
    const totalEuros = num(data?.euros, 10000000);

    const filas: FilaEntrante[] = Array.isArray(data?.procesos) ? data.procesos.slice(0, 12) : [];

    const tabla = filas
      .map((f) => {
        const v = (["automatizar", "documentar", "dejarlo"] as const).includes(f?.veredicto as Veredicto)
          ? (f.veredicto as Veredicto) : "dejarlo";
        const color = v === "automatizar" ? VERDE : v === "documentar" ? "#5E7A68" : "#9AA89E";
        return `<tr>
  <td style="padding:12px 16px 12px 0;border-bottom:1px solid #E4EAE0;vertical-align:top">
    <div style="font-size:14px;color:${TINTA};font-weight:500">${esc(f?.nombre)}</div>
    <div style="font-size:12px;color:${color};margin-top:3px">${esc(TEXTO_VEREDICTO[v].etiqueta)}</div>
  </td>
  <td style="padding:12px 0;border-bottom:1px solid #E4EAE0;text-align:right;white-space:nowrap;vertical-align:top">
    <div style="font-size:14px;color:${TINTA};font-family:ui-monospace,monospace">${num(f?.horasAno, 100000)} h/año</div>
    <div style="font-size:12px;color:#5E7A68;margin-top:3px">${num(f?.euros, 10000000).toLocaleString("es-ES")} €</div>
  </td>
</tr>`;
      })
      .join("");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const paraLector = `
<div style="font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;max-width:580px;margin:0 auto;background:#FAFAFA">
  <div style="background:${TINTA};padding:28px 32px;border-radius:12px 12px 0 0">
    <p style="margin:0;color:#8AAF96;font-size:11px;text-transform:uppercase;letter-spacing:0.14em">Automatiza tu Empresa</p>
    <h1 style="margin:10px 0 0;color:#fff;font-size:26px;font-weight:600;line-height:1.15">${horasAno.toLocaleString("es-ES")} horas al año</h1>
    <p style="margin:10px 0 0;color:#A8C4B0;font-size:15px">Unos ${totalEuros.toLocaleString("es-ES")} € de coste laboral, a ${costeHora} €/hora</p>
  </div>
  <div style="padding:32px;background:#fff;border:1px solid #C5D9CC;border-top:none;border-radius:0 0 12px 12px">
    <p style="margin:0 0 24px;font-size:15px;line-height:1.65;color:#1E2E26">
      Este es el desglose de lo que indicaste, tarea por tarea. Incluimos también las que
      <strong>no compensa automatizar</strong>: preferimos decírtelo que venderte algo que no
      se paga solo.
    </p>
    <table style="width:100%;border-collapse:collapse">${tabla}</table>

    <div style="margin-top:28px;padding:20px;background:#F2F6EF;border-radius:10px;border-left:3px solid ${VERDE}">
      <p style="margin:0;font-size:13px;line-height:1.65;color:#4C5449">
        <strong style="color:${TINTA}">Cómo está calculado.</strong> Horas semanales que indicaste ×
        ${SEMANAS} semanas laborables × el porcentaje de cada tarea que puede dejar de hacerse a
        mano, que va del 50% en documentos y propuestas al 90% en informes periódicos. Las tareas
        por debajo de 30 horas al año no se suman al total.
      </p>
    </div>

    <p style="margin:28px 0 20px;font-size:15px;line-height:1.65;color:#1E2E26">
      Es una estimación, no un presupuesto. Si quieres contrastarla con alguien que ha montado
      esto en empresas parecidas, media hora basta.
    </p>
    <a href="https://www.automatizatuempresa.com/contacto" style="display:inline-block;background:${VERDE};color:#F0FDF4;padding:14px 28px;border-radius:999px;font-size:15px;font-weight:500;text-decoration:none">Reservar 30 minutos →</a>

    <div style="margin-top:32px;padding-top:24px;border-top:1px solid #C5D9CC">
      <p style="margin:0;font-size:13px;line-height:1.6;color:#5E7A68">
        Te escribimos porque pediste este desglose en nuestra web. No te hemos metido en ninguna
        lista: si no quieres saber más de nosotros, con ignorar este correo es suficiente.
      </p>
    </div>
  </div>
</div>`;

    const paraNosotros = `
<div style="font-family:ui-sans-serif,system-ui,sans-serif;max-width:560px;margin:0 auto">
  <div style="background:${VERDE};padding:20px 28px;border-radius:12px 12px 0 0">
    <p style="margin:0;color:${LIMA};font-size:11px;text-transform:uppercase;letter-spacing:0.12em">Lead cualificado</p>
    <h1 style="margin:8px 0 0;color:#fff;font-size:20px;font-weight:500">Autodiagnóstico completado</h1>
  </div>
  <div style="padding:28px;background:#fff;border:1px solid #C5D9CC;border-top:none;border-radius:0 0 12px 12px">
    <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:24px">
      <tr><td style="padding:6px 16px 6px 0;color:#5E7A68;white-space:nowrap">Email</td><td style="padding:6px 0;color:${TINTA}">${esc(email)}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#5E7A68;white-space:nowrap">Potencial</td><td style="padding:6px 0;color:${TINTA}"><strong>${horasAno.toLocaleString("es-ES")} h/año · ${totalEuros.toLocaleString("es-ES")} €</strong></td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#5E7A68;white-space:nowrap">Coste/hora</td><td style="padding:6px 0;color:${TINTA}">${costeHora} €</td></tr>
    </table>
    <p style="margin:0 0 10px;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;color:#5E7A68">Lo que declaró</p>
    <table style="width:100%;border-collapse:collapse">${tabla}</table>
    <div style="margin-top:24px;padding-top:20px;border-top:1px solid #C5D9CC">
      <a href="mailto:${esc(email)}" style="display:inline-block;background:${TINTA};color:#fff;padding:11px 22px;border-radius:999px;font-size:14px;text-decoration:none">Escribirle →</a>
    </div>
  </div>
</div>`;

    await Promise.all([
      transporter.sendMail({
        from: `"Automatiza tu Empresa" <${process.env.SMTP_USER}>`,
        to: email,
        replyTo: "hablemos@automatizatuempresa.com",
        subject: `Tu diagnóstico: ${horasAno.toLocaleString("es-ES")} horas al año`,
        html: paraLector,
      }),
      transporter.sendMail({
        from: `"Automatiza tu Empresa" <${process.env.SMTP_USER}>`,
        to: "hablemos@automatizatuempresa.com",
        replyTo: email,
        subject: `Autodiagnóstico: ${email} — ${horasAno.toLocaleString("es-ES")} h/año`,
        html: paraNosotros,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[diagnostico]", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
