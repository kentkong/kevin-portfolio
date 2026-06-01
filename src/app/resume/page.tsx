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
      <main className="site-page site-page--resume">
        <div className="site-container site-page__inner">
          <div className="site-panel resume-page__panel">
            <p className="site-label">Resume</p>
            <h1 className="site-page__title">Experience & credentials</h1>
            <p className="site-page__lead">
              Senior marketing and lifecycle leader · AI product builder · Delivery strategist
            </p>
            <p className="resume-page__intro">
              Share a few details below to request my resume. I&apos;ll follow up if there&apos;s a
              good fit to discuss.
            </p>

            <ResumeRequestForm disabled={!resumeAvailable} />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
