import { site } from "@/lib/site";
import { assetPath } from "@/lib/asset-path";

export type ResumeFormPayload = {
  name: string;
  email: string;
  company: string;
  linkedin: string;
  message: string;
};

export function isStaticResumeHost() {
  return process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";
}

export function getResumeDownloadUrl() {
  const path = process.env.NEXT_PUBLIC_RESUME_DOWNLOAD_URL;
  return path ? assetPath(path) : null;
}

export async function submitStaticResumeRequest(form: ResumeFormPayload) {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: form.name,
      email: form.email,
      company: form.company || "—",
      linkedin: form.linkedin || "—",
      message: form.message || "—",
      _subject: `Resume download: ${form.name}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to send your request. Please use the contact page.");
  }

  const data = (await response.json().catch(() => null)) as { success?: string } | null;
  if (data?.success !== "true") {
    throw new Error("Unable to send your request. Please use the contact page.");
  }
}

export function triggerResumeDownload() {
  const downloadUrl = getResumeDownloadUrl();
  if (!downloadUrl) return false;

  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = "Kevin-Mold-Resume.pdf";
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
  return true;
}
