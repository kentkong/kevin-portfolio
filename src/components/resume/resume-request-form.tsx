"use client";

import { useState, type FormEvent } from "react";
import {
  isStaticResumeHost,
  submitStaticResumeRequest,
} from "@/lib/resume-submit";

type FormState = {
  name: string;
  email: string;
  company: string;
  linkedin: string;
  message: string;
  website: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  linkedin: "",
  message: "",
  website: "",
  consent: false,
};

type ResumeRequestFormProps = {
  disabled?: boolean;
};

export function ResumeRequestForm({ disabled = false }: ResumeRequestFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setError(null);
    setSuccess(false);
  }

  function validateClient() {
    if (!form.name.trim() || form.name.trim().length < 2) {
      return "Please enter your full name.";
    }

    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      return "Please enter a valid email address.";
    }

    if (form.linkedin.trim() && !/^https?:\/\//i.test(form.linkedin.trim())) {
      return "LinkedIn URL must start with http:// or https://.";
    }

    if (!form.consent) {
      return "Please confirm you agree to share your details.";
    }

    return null;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(false);

    const clientError = validateClient();
    if (clientError) {
      setError(clientError);
      return;
    }

    setSubmitting(true);

    try {
      if (isStaticResumeHost()) {
        await submitStaticResumeRequest({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          linkedin: form.linkedin.trim(),
          message: form.message.trim(),
        });

        setSuccess(true);
        setForm(initialState);
        return;
      }

      const response = await fetch("/api/resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const contentType = response.headers.get("content-type") ?? "";

      if (!response.ok) {
        if (contentType.includes("application/json")) {
          const data = (await response.json()) as { message?: string };
          throw new Error(data.message ?? "Unable to download resume.");
        }

        throw new Error(
          response.status === 404
            ? "Download is unavailable on this hosting setup. Please email Kevin directly."
            : "Unable to download resume. Please try again or use the contact page.",
        );
      }

      if (!contentType.includes("application/pdf")) {
        throw new Error("Unexpected response from the server. Please use the contact page.");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Kevin-Mold-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);

      setSuccess(true);
      setForm(initialState);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to download resume.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="resume-form" onSubmit={handleSubmit}>
      <div className="resume-form__grid">
        <label className="resume-form__field">
          <span>Full name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            disabled={disabled || submitting}
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
          />
        </label>

        <label className="resume-form__field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            disabled={disabled || submitting}
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
        </label>

        <label className="resume-form__field">
          <span>Company (optional)</span>
          <input
            type="text"
            name="company"
            autoComplete="organization"
            disabled={disabled || submitting}
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
          />
        </label>

        <label className="resume-form__field">
          <span>LinkedIn (optional)</span>
          <input
            type="url"
            name="linkedin"
            placeholder="https://linkedin.com/in/..."
            disabled={disabled || submitting}
            value={form.linkedin}
            onChange={(event) => updateField("linkedin", event.target.value)}
          />
        </label>
      </div>

      <label className="resume-form__field resume-form__field--full">
        <span>Message (optional)</span>
        <textarea
          name="message"
          rows={3}
          maxLength={500}
          placeholder="Role, project, or reason for reaching out"
          disabled={disabled || submitting}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
        />
      </label>

      <label className="resume-form__honeypot" aria-hidden="true">
        <span>Website</span>
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </label>

      <label className="resume-form__consent">
        <input
          type="checkbox"
          name="consent"
          disabled={disabled || submitting}
          checked={form.consent}
          onChange={(event) => updateField("consent", event.target.checked)}
        />
        <span>
          I agree to share my details with Kevin so he can follow up about opportunities or
          introductions.
        </span>
      </label>

      {error ? (
        <div className="resume-form__alert resume-form__alert--error" role="alert">
          {error}
        </div>
      ) : null}

      {success ? (
        <div className="resume-form__alert resume-form__alert--success" role="status">
          Thank you — I&apos;ll review your request and follow up by email if there&apos;s a good
          fit to discuss.
        </div>
      ) : null}

      <button
        type="submit"
        className="site-btn site-btn--ghost"
        disabled={disabled || submitting}
      >
        {submitting ? "Sending request…" : "Request Resume"}
      </button>
    </form>
  );
}
