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

function getWeb3FormsAccessKey() {
  return process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? "";
}

export async function submitStaticResumeRequest(form: ResumeFormPayload) {
  const accessKey = getWeb3FormsAccessKey();
  if (!accessKey) {
    throw new Error(
      "Resume form is not configured yet. Please use the contact page or email Kevin directly.",
    );
  }

  let response: Response;

  try {
    response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Resume request (review): ${form.name}`,
        from_name: form.name,
        name: form.name,
        email: form.email,
        company: form.company || "—",
        linkedin: form.linkedin || "—",
        message: form.message || "—",
      }),
    });
  } catch {
    throw new Error(
      "Unable to reach the form service. Check your connection and try again, or email Kevin directly.",
    );
  }

  const data = (await response.json().catch(() => null)) as {
    success?: boolean;
    message?: string;
  } | null;

  if (!response.ok || !data?.success) {
    throw new Error(
      data?.message ??
        "Unable to send your request. Please try again or use the contact page.",
    );
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
