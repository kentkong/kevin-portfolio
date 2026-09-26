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
          <div className="site-hero__copy site-hero__copy--poster">
            <div className="site-hero__headline-frame site-hero__headline-frame--poster">
              <h1 className="site-hero__statement site-hero__statement--poster" aria-label={site.headline}>
                {site.heroTagline.map((item) => (
                  <span key={item.label} className="site-hero__concept site-hero__concept--poster">
                    <span className="site-hero__concept-label">
                      <span className="site-hero__concept-text">{item.label}.</span>
                      <span className="site-hero__concept-light" aria-hidden="true">
                        {item.label}.
                      </span>
                    </span>
                  </span>
                ))}
              </h1>
            </div>
            <div className="site-hero__pillar-grid" aria-label="Portfolio focus areas">
              {site.heroPillars.map((pillar) => (
                <div className="site-hero__pillar" key={pillar.title}>
                  <strong>{pillar.title}</strong>
                  <p>{pillar.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
