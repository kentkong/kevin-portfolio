import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { site } from "@/lib/site";

export function ResumePageStatic() {
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
            <Link
              href={`mailto:${site.email}?subject=${encodeURIComponent("Resume request")}`}
              className="site-btn site-btn--ghost"
            >
              Email for resume
            </Link>
            <Link href="/contact" className="site-btn site-btn--ghost">
              Contact
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
