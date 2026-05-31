import { EvolutionTimeline } from "@/components/home/evolution-timeline";
import { ExploringSection } from "@/components/home/exploring-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectShowcase } from "@/components/home/project-showcase";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";

export function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        <HeroSection />
        <EvolutionTimeline />
        <ProjectShowcase />
        <ExploringSection />
      </main>
      <SiteFooter />
    </>
  );
}
