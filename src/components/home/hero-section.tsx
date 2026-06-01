import { site } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="site-hero">
      <div className="site-container">
        <div className="site-hero__inner site-panel">
          <p className="site-hero__tagline" aria-label="Focus areas">
            <span className="site-hero__tagline-part">{site.heroTagline[0]}</span>
            <span className="site-hero__tagline-sep" aria-hidden="true">
              /
            </span>
            <span className="site-hero__tagline-part">{site.heroTagline[1]}</span>
            <span className="site-hero__tagline-sep" aria-hidden="true">
              /
            </span>
            <span className="site-hero__tagline-part">{site.heroTagline[2]}</span>
          </p>
          <h1 className="site-display-headline site-display-headline--hero">{site.headline}</h1>
          <p className="site-hero__intro">{site.heroIntro}</p>
        </div>
      </div>
    </section>
  );
}
