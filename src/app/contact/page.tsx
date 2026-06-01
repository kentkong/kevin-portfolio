import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main className="site-page">
        <div className="site-container site-page__inner">
          <p className="site-label">Contact</p>
          <h1 className="site-page__title">Let&apos;s connect</h1>
          <p className="site-page__lead">
            Open to conversations about AI product strategy, lifecycle operations, and building
            demos that tell a credible story.
          </p>
          <div className="contact-actions">
            <Link href={`mailto:${site.email}`} className="site-btn site-btn--ghost">
              Email me
            </Link>
            <Link href={site.linkedin} target="_blank" rel="noreferrer" className="site-btn site-btn--ghost">
              LinkedIn
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
