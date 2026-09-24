import Link from "next/link";
import { site } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="site-hero">
      <div className="site-container">
        <div className="site-hero__grid">
          <div className="site-hero__copy">
            <p className="site-hero__eyebrow">Portfolio 2.0</p>
            <h1 className="site-hero__statement" aria-label={site.headline}>
              {site.heroTagline.map((line) => (
                <span key={line}>{line}.</span>
              ))}
            </h1>
            <p className="site-hero__intro">{site.heroIntro}</p>
            <p className="site-hero__experience">{site.heroExperience}</p>
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
            <p className="site-hero__card-label">Multidisciplinary practice</p>
            <div className="site-hero__card-rule" aria-hidden />
            <dl className="site-hero__focus-list">
              <div>
                <dt>Design foundation</dt>
                <dd>Graphic design, visual communication, UX/UI and product thinking.</dd>
              </div>
              <div>
                <dt>Customer experience</dt>
                <dd>CRM, lifecycle journeys, marketing technology and customer operations.</dd>
              </div>
              <div>
                <dt>Technology delivery</dt>
                <dd>Enterprise systems, business analysis, automation and cross-functional delivery.</dd>
              </div>
            </dl>
            <div className="site-hero__experience-mark" aria-hidden>
              <span>17</span>
              <span>years corporate experience</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
