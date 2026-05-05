import type { Message } from "@shared/schema";

const RESEND_API = "https://api.resend.com/emails";

/**
 * Sends you an email when the contact form is submitted (Resend free tier).
 * Set RESEND_API_KEY and CONTACT_NOTIFY_EMAIL. Optional: RESEND_FROM_EMAIL.
 * If either required var is missing, this is a no-op.
 */
export async function notifyNewContactMessage(row: Message): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_NOTIFY_EMAIL;
  if (!apiKey || !to) {
    return;
  }

  const from =
    process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  const subject = `New contact: ${row.name}`;
  const text = [
    `From: ${row.name} <${row.email}>`,
    `Submitted: ${row.createdAt?.toISOString?.() ?? String(row.createdAt)}`,
    `Message ID: ${row.id}`,
    "",
    row.message,
  ].join("\n");

  const res = await fetch(RESEND_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend ${res.status}: ${body}`);
  }
}
