"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

function useMobileNav() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isMobile;
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      focusable="false"
      className="site-nav__linkedin-svg"
    >
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.36 8h4.28v15H.36V8Zm7.12 0h4.1v2.05h.06c.57-1.08 1.96-2.23 4.04-2.23 4.32 0 5.12 2.84 5.12 6.53V23h-4.27v-7.67c0-1.83-.03-4.18-2.55-4.18-2.55 0-2.94 1.99-2.94 4.05V23H7.48V8Z"
      />
    </svg>
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobileNav = useMobileNav();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileNav && menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, isMobileNav]);

  return (
    <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
      <div className="site-container site-nav__inner">
        <Link href="/" className="site-nav__brand">
          {site.name}
        </Link>

        {isMobileNav ? (
          <button
            type="button"
            className="site-nav__toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="site-nav-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="site-nav__toggle-bar" />
            <span className="site-nav__toggle-bar" />
            <span className="site-nav__toggle-bar" />
          </button>
        ) : (
          <nav className="site-nav__desktop-nav" aria-label="Primary">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`site-nav__link${isActive ? " site-nav__link--active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={site.linkedin}
              className="site-nav__icon-link"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </nav>
        )}
      </div>

      {isMobileNav ? (
        <div
          id="site-nav-mobile-menu"
          className={`site-nav__mobile-panel${menuOpen ? " site-nav__mobile-panel--open" : ""}`}
        >
          <nav className="site-container site-nav__mobile-nav" aria-label="Primary mobile">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`site-nav__mobile-link${isActive ? " site-nav__mobile-link--active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={site.linkedin}
              className="site-nav__mobile-link site-nav__mobile-link--icon"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              LinkedIn
              <LinkedInIcon />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
