import { ProfessionalProfilePage } from "@/components/about/professional-profile-page";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteSlateBand } from "@/components/layout/site-slate-band";

export default function CvPage() {
  return (
    <>
      <SiteSlateBand className="site-slate-band--page-top" />
      <SiteNav />
      <ProfessionalProfilePage />
      <SiteFooter />
    </>
  );
}
