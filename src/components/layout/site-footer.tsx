import { site } from "@/lib/site";
import { SiteSlateBand } from "@/components/layout/site-slate-band";

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      focusable="false"
      className="site-footer__linkedin-svg"
    >
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.36 8h4.28v15H.36V8Zm7.12 0h4.1v2.05h.06c.57-1.08 1.96-2.23 4.04-2.23 4.32 0 5.12 2.84 5.12 6.53V23h-4.27v-7.67c0-1.83-.03-4.18-2.55-4.18-2.55 0-2.94 1.99-2.94 4.05V23H7.48V8Z"
      />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__slate-wrap">
        <SiteSlateBand className="site-footer__slate" />
        <div className="site-container site-footer__meta-outer">
          <div className="site-footer__meta">
            <p className="site-footer__copyright">© 2026 {site.name}</p>
            <a
              href={site.linkedin}
              className="site-footer__linkedin"
              target="_blank"
              rel="noreferrer"
              aria-label="Kevin Alan Mold on LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
