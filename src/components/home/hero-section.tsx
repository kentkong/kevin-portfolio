import Link from "next/link";
import { site } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="site-hero">
      <div className="site-container site-hero__inner">
        <p className="site-label">{site.label}</p>
        <h1 className="site-hero__title">{site.headline}</h1>
        <p className="site-hero__lead">{site.subheadline}</p>
        <div className="site-hero__actions">
          <Link href="#projects" className="site-btn site-btn--primary">
            Explore My Work
          </Link>
        </div>
      </div>
    </section>
  );
}
