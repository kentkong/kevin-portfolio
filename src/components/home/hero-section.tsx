import Link from "next/link";
import { site } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="site-hero">
      <div className="site-hero__ambient" aria-hidden="true">
        <span className="site-hero__ambient-field site-hero__ambient-field--lavender" />
        <span className="site-hero__ambient-field site-hero__ambient-field--cyan" />
        <span className="site-hero__ambient-field site-hero__ambient-field--blush" />
        <span className="site-hero__ambient-field site-hero__ambient-field--warm" />
      </div>
      <div className="site-container">
        <div className="site-hero__grid">
          <div className="site-hero__copy">
            <p className="site-hero__eyebrow">Portfolio 2.0</p>
            <h1 className="site-hero__statement" aria-label={site.headline}>
              {site.heroTagline.map((item) => (
                <span
                  key={item.label}
                  className={`site-hero__concept${
                    item.label === "Customer Experience" ? " site-hero__concept--long" : ""
                  }`}
                >
                  <span className="site-hero__concept-label" data-light-text={`${item.label}.`}>
                    {item.label}.
                  </span>
                  <span className="site-hero__concept-descriptor">{item.descriptor}</span>
                </span>
              ))}
            </h1>
            <p className="site-hero__intro">{site.heroIntro}</p>
            <div className="site-hero__actions" aria-label="Portfolio actions">
              <Link href="/#projects" className="site-btn site-btn--ink">
                View Work
              </Link>
              <Link href="/about" className="site-btn site-btn--paper">
                About Me
              </Link>
            </div>
          </div>

          <aside className="site-hero__editorial-card" aria-label="Professional focus">
            <p className="site-hero__card-label">Professional foundation</p>
            <div className="site-hero__card-rule" aria-hidden />
            <div className="site-hero__experience-mark">
              <span>17</span>
              <span>years professional experience</span>
            </div>
            <p className="site-hero__card-copy">{site.heroExperience}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
