import { readFile } from "node:fs/promises";
import path from "node:path";

export type ResumeRequestPayload = {
  name: string;
  email: string;
  company?: string;
  linkedin?: string;
  message?: string;
  website?: string;
  consent: boolean;
};

export type ResumeRequestMeta = {
  ip?: string;
  userAgent?: string;
  requestedAt: string;
};

export class ResumeAccessError extends Error {
  status: number;

  constructor(message: string, status = 400) {
    super(message);
    this.status = status;
  }
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseResumeRequest(body: unknown): ResumeRequestPayload {
  if (!body || typeof body !== "object") {
    throw new ResumeAccessError("Invalid request.");
  }

  const data = body as Record<string, unknown>;
  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim().toLowerCase();
  const company = String(data.company ?? "").trim();
  const linkedin = String(data.linkedin ?? "").trim();
  const message = String(data.message ?? "").trim();
  const website = String(data.website ?? "").trim();
  const consent = data.consent === true;

  if (website) {
    throw new ResumeAccessError("Unable to process request.", 400);
  }

  if (!name || name.length < 2) {
    throw new ResumeAccessError("Please enter your full name.");
  }

  if (!email || !EMAIL_PATTERN.test(email)) {
    throw new ResumeAccessError("Please enter a valid email address.");
  }

  if (company.length > 120) {
    throw new ResumeAccessError("Company name is too long.");
  }

  if (linkedin && !/^https?:\/\//i.test(linkedin)) {
    throw new ResumeAccessError("LinkedIn URL must start with http:// or https://.");
  }

  if (message.length > 500) {
    throw new ResumeAccessError("Message must be 500 characters or fewer.");
  }

  if (!consent) {
    throw new ResumeAccessError("Please confirm you agree to share your details.");
  }

  return {
    name,
    email,
    company: company || undefined,
    linkedin: linkedin || undefined,
    message: message || undefined,
    consent,
  };
}

export function getResumePdfPath() {
  const filename = process.env.RESUME_PDF_FILENAME ?? "kevin-mold-resume.pdf";
  return path.join(process.cwd(), "private", "resume", filename);
}

export async function isResumeAvailable() {
  if (process.env.RESUME_PDF_URL) return true;

  try {
    await readFile(getResumePdfPath());
    return true;
  } catch {
    return false;
  }
}

export async function readResumePdf() {
  const pdfUrl = process.env.RESUME_PDF_URL;
  if (pdfUrl) {
    const response = await fetch(pdfUrl);
    if (!response.ok) {
      throw new ResumeAccessError(
        "Resume file is not available yet. Please contact Kevin directly.",
        503,
      );
    }

    return Buffer.from(await response.arrayBuffer());
  }

  try {
    return await readFile(getResumePdfPath());
  } catch {
    throw new ResumeAccessError(
      "Resume file is not available yet. Please contact Kevin directly.",
      503,
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildNotificationPayload(
  request: ResumeRequestPayload,
  meta: ResumeRequestMeta,
) {
  return {
    event: "resume_download",
    ...request,
    ...meta,
  };
}

async function sendResendNotification(
  request: ResumeRequestPayload,
  meta: ResumeRequestMeta,
) {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.RESUME_NOTIFY_EMAIL;
  const from = process.env.RESEND_FROM ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !notifyEmail) return false;

  const lines = [
    `<p><strong>${escapeHtml(request.name)}</strong> requested your resume.</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(request.email)}</p>`,
  ];

  if (request.company) {
    lines.push(`<p><strong>Company:</strong> ${escapeHtml(request.company)}</p>`);
  }

  if (request.linkedin) {
    lines.push(
      `<p><strong>LinkedIn:</strong> <a href="${escapeHtml(request.linkedin)}">${escapeHtml(request.linkedin)}</a></p>`,
    );
  }

  if (request.message) {
    lines.push(`<p><strong>Message:</strong><br />${escapeHtml(request.message)}</p>`);
  }

  lines.push(
    `<p><strong>Time:</strong> ${escapeHtml(meta.requestedAt)}</p>`,
    `<p><strong>IP:</strong> ${escapeHtml(meta.ip ?? "unknown")}</p>`,
  );

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [notifyEmail],
      reply_to: request.email,
      subject: `Resume download: ${request.name}`,
      html: lines.join("\n"),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new ResumeAccessError(
      `Notification failed (${response.status}): ${detail}`,
      502,
    );
  }

  return true;
}

async function sendWebhookNotification(
  request: ResumeRequestPayload,
  meta: ResumeRequestMeta,
) {
  const webhookUrl = process.env.RESUME_NOTIFY_WEBHOOK;
  if (!webhookUrl) return false;

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildNotificationPayload(request, meta)),
  });

  if (!response.ok) {
    throw new ResumeAccessError(
      `Notification webhook failed (${response.status}).`,
      502,
    );
  }

  return true;
}

export async function notifyResumeRequest(
  request: ResumeRequestPayload,
  meta: ResumeRequestMeta,
) {
  const isDev = process.env.NODE_ENV === "development";
  const hasResend = Boolean(process.env.RESEND_API_KEY && process.env.RESUME_NOTIFY_EMAIL);
  const hasWebhook = Boolean(process.env.RESUME_NOTIFY_WEBHOOK);

  if (!hasResend && !hasWebhook) {
    if (isDev) {
      console.info("[resume] download request:", buildNotificationPayload(request, meta));
      return;
    }

    throw new ResumeAccessError(
      "Resume downloads are not configured yet. Please use the contact page.",
      503,
    );
  }

  const sent =
    (hasResend && (await sendResendNotification(request, meta))) ||
    (hasWebhook && (await sendWebhookNotification(request, meta)));

  if (!sent && !isDev) {
    throw new ResumeAccessError(
      "Unable to record your request. Please try again or contact Kevin directly.",
      502,
    );
  }
}
