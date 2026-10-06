import { HeroSection } from "@/components/home/hero-section";
import { PortfolioWorkIntro } from "@/components/home/portfolio-work-intro";
import { ProjectShowcase } from "@/components/home/project-showcase";
import { ExploreMyWork } from "@/components/home/explore-my-work";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteSlateBand } from "@/components/layout/site-slate-band";

export function HomePage() {
  return (
    <div className="home-page">
      <SiteSlateBand className="site-slate-band--home-top" />
      <SiteNav />
      <main className="home-page__main">
        <HeroSection />
        <PortfolioWorkIntro />
        <ProjectShowcase />
        <ExploreMyWork />
      </main>
      <SiteFooter />
    </div>
  );
}
