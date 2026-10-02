import { HeroSection } from "@/components/home/hero-section";
import { ProjectShowcase } from "@/components/home/project-showcase";
import { SiteFooter } from "@/components/layout/site-footer";

export function HomePage() {
  return (
    <div className="home-page">
      <main className="home-page__main">
        <HeroSection />
        <ProjectShowcase />
      </main>
      <SiteFooter />
    </div>
  );
}
