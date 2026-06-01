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
          <h1 className="site-hero__title">
            {site.headlineLines.map((line) => (
              <span key={line} className="site-hero__title-line">
                {line}
              </span>
            ))}
          </h1>
          <p className="site-hero__lead">{site.subheadline}</p>
        </div>
      </div>
    </section>
  );
}
