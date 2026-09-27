import { ProfessionalProfilePage } from "@/components/about/professional-profile-page";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";

export default function CvPage() {
  return (
    <>
      <SiteNav />
      <ProfessionalProfilePage />
      <SiteFooter />
    </>
  );
}
