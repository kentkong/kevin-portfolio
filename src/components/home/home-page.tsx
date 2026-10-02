import { HeroSection } from "@/components/home/hero-section";
import { ProjectShowcase } from "@/components/home/project-showcase";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";

export function HomePage() {
  return (
    <div className="home-page">
      <SiteNav />
      <main className="home-page__main">
        <HeroSection />
        <ProjectShowcase />
      </main>
      <SiteFooter />
    </div>
  );
}
