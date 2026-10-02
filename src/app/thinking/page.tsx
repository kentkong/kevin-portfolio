import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";

export default function ThinkingPage() {
  return (
    <>
      <SiteNav />
      <main className="site-page" aria-label="Insights" />
      <SiteFooter />
    </>
  );
}
