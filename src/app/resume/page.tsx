import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { site } from "@/lib/site";

const downloads = [
  { label: "Download CV", href: "/resume/kevin-mold-cv.pdf" },
  { label: "Download Resume", href: "/resume/kevin-mold-resume.pdf" },
  { label: "Cover Letter", href: "/resume/kevin-mold-cover-letter.pdf" },
];

export default function ResumePage() {
  return (
    <>
      <SiteNav />
      <main className="site-page">
        <div className="site-container site-page__inner">
          <p className="site-label">Resume</p>
          <h1 className="site-page__title">Experience & credentials</h1>
          <p className="site-page__lead">
            Senior marketing and lifecycle leader · AI product builder · Delivery strategist
          </p>

          <div className="resume-actions">
            {downloads.map((item) => (
              <Link key={item.label} href={item.href} className="site-btn site-btn--ghost">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="resume-links">
            <Link href={site.linkedin} target="_blank" rel="noreferrer" className="site-btn site-btn--primary">
              LinkedIn
            </Link>
            <Link href={site.github} target="_blank" rel="noreferrer" className="site-btn site-btn--ghost">
              GitHub
            </Link>
          </div>

          <p className="site-note">
            Add PDF files to <code>public/resume/</code> when ready—the links above are wired and
            waiting.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
