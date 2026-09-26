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
        <ProjectShowcase />
      </main>
      <SiteFooter />
    </>
  );
}
