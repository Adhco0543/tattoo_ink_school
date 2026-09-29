import { Resend } from "resend";

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character
  );
}

function getConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL;

  if (!apiKey || !from || !adminEmail) return null;

  return {
    resend: new Resend(apiKey),
    from,
    adminEmail,
  };
}

export async function notifySchool(input: {
  subject: string;
  heading: string;
  replyTo?: string;
  lines: Array<[string, string]>;
}) {
  const config = getConfig();
  if (!config) return { sent: false as const, reason: "email_not_configured" };

  const rows = input.lines
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;color:#777">${escapeHtml(label)}</td><td style="padding:8px 12px"><strong>${escapeHtml(value)}</strong></td></tr>`
    )
    .join("");

  const { error } = await config.resend.emails.send({
    from: config.from,
    to: config.adminEmail,
    replyTo: input.replyTo,
    subject: input.subject,
    html: `
      <div style="font-family:Arial,sans-serif;background:#0b0b0b;color:#f4efe4;padding:28px">
        <h1 style="margin:0 0 20px">${escapeHtml(input.heading)}</h1>
        <table style="width:100%;border-collapse:collapse;background:#151515">${rows}</table>
      </div>
    `,
  });

  if (error) {
    console.error("Resend school notification failed", error);
    return { sent: false as const, reason: "send_failed" };
  }

  return { sent: true as const };
}

export async function sendApplicantConfirmation(input: {
  to: string;
  firstName: string;
  reference: string;
}) {
  const config = getConfig();
  if (!config) return { sent: false as const, reason: "email_not_configured" };

  const { error } = await config.resend.emails.send({
    from: config.from,
    to: input.to,
    subject: "Ink Tattoo School application received",
    html: `
      <div style="font-family:Arial,sans-serif;background:#0b0b0b;color:#f4efe4;padding:32px">
        <h1 style="margin:0 0 16px">Application received</h1>
        <p>Hi ${escapeHtml(input.firstName)},</p>
        <p>Ink Tattoo School received your application. The school can review it and follow up about next steps.</p>
        <p style="color:#b8afa2">Reference: ${escapeHtml(input.reference)}</p>
        <p style="color:#b8afa2">Submitting an application does not reserve a class seat or create an enrollment agreement.</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend applicant confirmation failed", error);
    return { sent: false as const, reason: "send_failed" };
  }

  return { sent: true as const };
}
