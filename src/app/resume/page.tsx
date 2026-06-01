import { ResumeRequestForm } from "@/components/resume/resume-request-form";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { isResumeAvailable } from "@/lib/resume-access";
import { isStaticResumeHost } from "@/lib/resume-submit";

export default async function ResumePage() {
  const resumeAvailable = isStaticResumeHost() || (await isResumeAvailable());

  return (
    <>
      <SiteNav />
      <main className="site-page">
        <div className="site-container site-page__inner">
          <p className="site-label">Resume</p>
          <h1 className="site-page__title">Experience & credentials</h1>
          <p className="site-page__lead">
            Senior marketing and lifecycle leader · AI product builder · Delivery strategist
          </p>

          <ResumeRequestForm disabled={!resumeAvailable} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
