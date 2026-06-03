"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
      <div className="site-container flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className={`site-nav__brand${pathname === "/" ? " site-nav__brand--active" : ""}`}
          aria-current={pathname === "/" ? "page" : undefined}
        >
          {site.name}
        </Link>

        <nav className="site-nav__desktop hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`site-nav__link${isActive ? " site-nav__link--active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="site-nav__toggle md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="site-nav-mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="site-nav__toggle-bar" />
          <span className="site-nav__toggle-bar" />
          <span className="site-nav__toggle-bar" />
        </button>
      </div>

      <div
        id="site-nav-mobile-menu"
        className={`site-nav__mobile-panel${menuOpen ? " site-nav__mobile-panel--open" : ""}`}
        hidden={!menuOpen}
      >
        <nav className="site-container site-nav__mobile-nav" aria-label="Primary mobile">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`site-nav__mobile-link${isActive ? " site-nav__mobile-link--active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
