import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { getSiteSettings } from "@/lib/sanity";

// Nodemailer needs the Node.js runtime (not edge).
export const runtime = "nodejs";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Pedido inválido." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim() ?? "";
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Nome, email e mensagem são obrigatórios." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Email inválido." }, { status: 400 });
  }

  // Recipient comes from Sanity (single source of truth), not the client.
  const settings = await getSiteSettings().catch(() => null);
  const recipient = settings?.contact?.email;
  if (!recipient) {
    return NextResponse.json(
      { error: "Destinatário não configurado." },
      { status: 500 }
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    // Not configured yet — surface a clear, actionable error.
    return NextResponse.json(
      {
        error:
          "O envio de email ainda não está configurado. Defina SMTP_USER e SMTP_PASS.",
      },
      { status: 503 }
    );
  }

  const port = Number(SMTP_PORT ?? 465);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST ?? "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const siteName = settings?.siteName ?? "Dogwarts";

  try {
    await transporter.sendMail({
      from: MAIL_FROM ?? `${siteName} <${SMTP_USER}>`,
      to: recipient,
      replyTo: `${name} <${email}>`,
      subject: `Novo contacto do site — ${name}`,
      text: [
        `Nome: ${name}`,
        `Email: ${email}`,
        `Telefone: ${phone || "—"}`,
        "",
        message,
      ].join("\n"),
      html: `
        <h2 style="font-family:sans-serif">Novo contacto do site ${siteName}</h2>
        <p style="font-family:sans-serif"><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p style="font-family:sans-serif"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="font-family:sans-serif"><strong>Telefone:</strong> ${escapeHtml(phone) || "—"}</p>
        <p style="font-family:sans-serif white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email failed:", error);
    return NextResponse.json(
      { error: "Não foi possível enviar a mensagem. Tente novamente." },
      { status: 502 }
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
