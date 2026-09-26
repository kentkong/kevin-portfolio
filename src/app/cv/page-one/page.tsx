import { CvPageOnePrototype } from "@/components/cv/cv-page-one-prototype";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";

export default function CvPageOnePrototypePage() {
  return (
    <>
      <SiteNav />
      <main>
        <CvPageOnePrototype />
      </main>
      <SiteFooter />
    </>
  );
}
