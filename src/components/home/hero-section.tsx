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
        <div className="site-hero__grid site-hero__grid--paired">
          <div className="site-hero__copy">
            <div className="site-hero__headline-frame">
              <h1 className="site-hero__statement site-hero__statement--paired" aria-label={site.headline}>
                {site.heroTagline.map((item) => (
                  <span key={item.label} className="site-hero__concept site-hero__concept--paired">
                    <span className="site-hero__concept-label">
                      <span className="site-hero__concept-text">{item.label}.</span>
                      <span className="site-hero__concept-light" aria-hidden="true">
                        {item.label}.
                      </span>
                    </span>
                    <span className="site-hero__concept-descriptor">{item.descriptor}</span>
                  </span>
                ))}
              </h1>
            </div>
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
        </div>
      </div>
    </section>
  );
}
