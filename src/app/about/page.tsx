import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="site-page">
        <div className="site-container site-page__inner">
          <p className="site-label">About</p>
          <h1 className="site-page__title">Professional, but human.</h1>
          <div className="site-prose">
            <p>
              I&apos;m Kevin Alan Mold—a senior marketing and lifecycle leader who builds AI
              products that solve real operational problems. Born and raised in England, I&apos;ve
              worked across North America and now live in Prague.
            </p>
            <p>
              For 20+ years I&apos;ve led customer engagement, lifecycle marketing, and operations
              teams in global organizations. I understand leadership pain points because I&apos;ve
              lived them—not from a slide deck, but from stand-ups, quarter-end pressure, and the
              gap between strategy and execution.
            </p>
            <p>
              Today I combine that leadership background with AI product building—using tools like
              Cursor to turn strategic thinking into credible, interactive demos. Gen Pulse, PulseOps
              AI, and SprintIQ are evidence of how I identify problems, form hypotheses, and design
              products that address them.
            </p>
            <p>
              Outside work: powerlifting, vinyl DJ, and continuously exploring how AI changes
              lifecycle marketing, operations, and product delivery.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
