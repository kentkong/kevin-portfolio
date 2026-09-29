import { PulseOpsOverviewPage } from "@/components/case-study/pulse-ops-overview-page";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";

export default function PulseOpsRootPage() {
  return (
    <>
      <SiteNav />
      <PulseOpsOverviewPage />
      <SiteFooter />
    </>
  );
}
