"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}
    >
      <div className="site-container flex h-16 items-center justify-between gap-6">
        <Link href="/" className="site-nav__brand">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="site-nav__link">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="site-btn site-btn--primary shrink-0">
          Let&apos;s Connect
        </Link>
      </div>
    </header>
  );
}
