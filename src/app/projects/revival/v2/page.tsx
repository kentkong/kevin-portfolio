import type { Metadata } from "next";
import { RevivalV2CaseStudyPass1 } from "@/components/case-study/revival-v2/revival-v2-case-study-pass1";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import "./revival-v2.css";

export const metadata: Metadata = {
  title: "Revival V2 — Case Study",
  robots: { index: false, follow: false },
};

export default function RevivalV2Page() {
  return (
    <>
      <SiteNav />
      <main className="revival-v2-main">
        <RevivalV2CaseStudyPass1 />
      </main>
      <SiteFooter />
    </>
  );
}
