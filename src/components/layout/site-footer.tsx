import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer__inner">
        <div>
          <p className="site-footer__headline">
            Let&apos;s build something{" "}
            <span className="site-accent">meaningful</span> together
          </p>
          <p className="site-footer__copy">
            Product strategy, lifecycle operations, and AI-native demos.
          </p>
        </div>

        <div className="site-footer__links">
          <Link href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </Link>
          <Link href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </Link>
          <Link href={`mailto:${site.email}`}>Email</Link>
          <Link href="/resume">Resume</Link>
        </div>
      </div>
    </footer>
  );
}
