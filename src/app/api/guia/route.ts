import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const URL_GUIA = "https://www.automatizatuempresa.com/automatizacion-empresas-con-ia";
const VERDE = "#1B5E3B";
const LIMA = "#A3E635";
const TINTA = "#080D09";

/** Validación deliberadamente laxa: solo descarta lo que no puede ser un correo. */
function emailValido(valor: unknown): valor is string {
  return typeof valor === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor.trim());
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const email = typeof data?.email === "string" ? data.email.trim() : "";

    if (!emailValido(email)) {
      return NextResponse.json({ ok: false, error: "email" }, { status: 400 });
    }
    // El consentimiento se comprueba también aquí, no solo en el formulario:
    // sin él no se puede tratar el dato.
    if (data?.consent !== true) {
      return NextResponse.json({ ok: false, error: "consent" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const origen = typeof data?.origen === "string" ? data.origen.slice(0, 120) : "desconocido";

    // 1 — Correo a quien la pide
    const paraLector = `
<div style="font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;max-width:560px;margin:0 auto;background:#FAFAFA">
  <div style="background:${TINTA};padding:28px 32px;border-radius:12px 12px 0 0">
    <p style="margin:0;color:#8AAF96;font-size:11px;text-transform:uppercase;letter-spacing:0.14em">Automatiza tu Empresa</p>
    <h1 style="margin:10px 0 0;color:#fff;font-size:24px;font-weight:600;line-height:1.2">Aquí tienes la guía</h1>
  </div>
  <div style="padding:32px;background:#fff;border:1px solid #C5D9CC;border-top:none;border-radius:0 0 12px 12px">
    <p style="margin:0 0 20px;font-size:15px;line-height:1.65;color:#1E2E26">
      Cómo automatizar una empresa con IA, de principio a fin: qué se puede resolver documentando,
      qué necesita conectar herramientas y en qué punto tiene sentido construir algo propio.
    </p>
    <p style="margin:0 0 28px;font-size:15px;line-height:1.65;color:#1E2E26">
      Está pensada para leerse de una sentada. Si prefieres guardarla o pasársela a alguien del
      equipo, desde el navegador puedes imprimirla o guardarla en PDF.
    </p>
    <a href="${URL_GUIA}" style="display:inline-block;background:${VERDE};color:#F0FDF4;padding:14px 28px;border-radius:999px;font-size:15px;font-weight:500;text-decoration:none">Leer la guía →</a>
    <div style="margin-top:32px;padding-top:24px;border-top:1px solid #C5D9CC">
      <p style="margin:0;font-size:13px;line-height:1.6;color:#5E7A68">
        Te escribimos porque la pediste en nuestra web. No te vamos a inscribir en ninguna lista:
        si quieres que hablemos, respóndenos a este correo y ya está.
      </p>
    </div>
  </div>
</div>`;

    // 2 — Aviso interno
    const paraNosotros = `
<div style="font-family:ui-sans-serif,system-ui,sans-serif;max-width:520px;margin:0 auto">
  <div style="background:${VERDE};padding:20px 28px;border-radius:12px 12px 0 0">
    <p style="margin:0;color:${LIMA};font-size:11px;text-transform:uppercase;letter-spacing:0.12em">Nuevo lead</p>
    <h1 style="margin:8px 0 0;color:#fff;font-size:20px;font-weight:500">Descarga de la guía</h1>
  </div>
  <div style="padding:28px;background:#fff;border:1px solid #C5D9CC;border-top:none;border-radius:0 0 12px 12px">
    <table style="width:100%;border-collapse:collapse;font-size:14px">
      <tr><td style="padding:6px 16px 6px 0;color:#5E7A68;white-space:nowrap">Email</td><td style="padding:6px 0;color:${TINTA}">${email}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#5E7A68;white-space:nowrap">Desde</td><td style="padding:6px 0;color:${TINTA}">${origen}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#5E7A68;white-space:nowrap">Consentimiento</td><td style="padding:6px 0;color:${TINTA}">Sí, marcado expresamente</td></tr>
    </table>
    <div style="margin-top:24px;padding-top:20px;border-top:1px solid #C5D9CC">
      <a href="mailto:${email}" style="display:inline-block;background:${TINTA};color:#fff;padding:11px 22px;border-radius:999px;font-size:14px;text-decoration:none">Escribirle →</a>
    </div>
  </div>
</div>`;

    await Promise.all([
      transporter.sendMail({
        from: `"Automatiza tu Empresa" <${process.env.SMTP_USER}>`,
        to: email,
        replyTo: "hablemos@automatizatuempresa.com",
        subject: "Tu guía: cómo automatizar una empresa con IA",
        html: paraLector,
      }),
      transporter.sendMail({
        from: `"Automatiza tu Empresa" <${process.env.SMTP_USER}>`,
        to: "hablemos@automatizatuempresa.com",
        replyTo: email,
        subject: `Guía descargada: ${email}`,
        html: paraNosotros,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[guia]", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
