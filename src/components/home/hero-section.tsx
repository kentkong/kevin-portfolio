import { site } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="site-hero">
      <div className="site-container">
        <div className="site-hero__inner">
          <p className="site-label">{site.label}</p>
          <h1 className="site-hero__title">{site.headline}</h1>
          <p className="site-hero__lead">{site.subheadline}</p>
        </div>
      </div>
    </section>
  );
}
