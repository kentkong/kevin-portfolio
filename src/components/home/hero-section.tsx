import { site } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="site-hero">
      <div className="site-container">
        <div className="site-hero__inner site-panel">
          <ul className="site-hero__labels" aria-label="Focus areas">
            {site.heroLabels.map((label) => (
              <li key={label} className="site-label">
                {label}
              </li>
            ))}
          </ul>
          <h1 className="site-hero__title">{site.headline}</h1>
          <p className="site-hero__intro">{site.heroIntro}</p>
        </div>
      </div>
    </section>
  );
}
