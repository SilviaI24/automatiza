import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const rows = [
      ["Nombre", data.name],
      ["Empresa", data.company],
      ["Email", data.email],
      data.phone && ["Teléfono", data.phone],
      ["Sector", data.sector],
      ["Equipo", data.size],
      data.checks?.length && ["Intereses", data.checks.join(", ")],
      data.day && ["Días disponibles", data.day],
      data.slot && ["Franja horaria", data.slot],
    ]
      .filter(Boolean)
      .map(
        ([k, v]) =>
          `<tr><td style="padding:8px 16px 8px 0;color:#6B6A63;font-size:13px;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:8px 0;font-size:14px;color:#0E0F12">${v}</td></tr>`
      )
      .join("");

    const html = `
<div style="font-family:ui-sans-serif,system-ui,sans-serif;max-width:600px;margin:0 auto;background:#F2EDE2">
  <div style="background:#FF4A1C;padding:24px 32px;border-radius:12px 12px 0 0">
    <p style="margin:0;color:rgba(255,255,255,0.7);font-size:12px;text-transform:uppercase;letter-spacing:0.12em">Automatiza tu Empresa</p>
    <h1 style="margin:8px 0 0;color:#fff;font-size:22px;font-weight:500">Nuevo mensaje de ${data.name}</h1>
  </div>
  <div style="padding:32px;background:#FBF7EE;border:1px solid #D8CFBB;border-top:none;border-radius:0 0 12px 12px">
    <table style="width:100%;border-collapse:collapse">${rows}</table>
    ${
      data.msg
        ? `<div style="margin-top:24px;padding:20px;background:#F2EDE2;border-radius:8px;border-left:3px solid #FF4A1C">
        <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;color:#6B6A63">Mensaje</p>
        <p style="margin:0;font-size:14px;line-height:1.6;color:#0E0F12">${data.msg}</p>
      </div>`
        : ""
    }
    <div style="margin-top:28px;padding-top:20px;border-top:1px solid #D8CFBB">
      <a href="mailto:${data.email}" style="display:inline-block;background:#0E0F12;color:#FBF7EE;padding:12px 24px;border-radius:999px;font-size:14px;text-decoration:none">Responder a ${data.name} →</a>
    </div>
  </div>
</div>`;

    await transporter.sendMail({
      from: `"Automatiza tu Empresa" <${process.env.SMTP_USER}>`,
      to: "hablemos@automatizatuempresa.com",
      replyTo: data.email,
      subject: `Nuevo contacto: ${data.name} — ${data.company}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
