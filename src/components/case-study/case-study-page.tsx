import Link from "next/link";
import { notFound } from "next/navigation";
import { GenPulseCaseStudy } from "@/components/case-study/gen-pulse-case-study";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import type { Project } from "@/lib/projects";
import { getProject } from "@/lib/projects";

type CaseStudyPageProps = {
  slug: string;
};

export function CaseStudyPage({ slug }: CaseStudyPageProps) {
  const project = getProject(slug);
  if (!project) notFound();

  if (slug === "gen-pulse") {
    return (
      <>
        <SiteNav />
        <main>
          <GenPulseCaseStudy />
        </main>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteNav />
      <main>
        <CaseStudyHero project={project} />
        <CaseStudyBody project={project} />
      </main>
      <SiteFooter />
    </>
  );
}

function CaseStudyHero({ project }: { project: Project }) {
  return (
    <section className={`case-hero bg-gradient-to-br ${project.accent}`}>
      <div className="site-container case-hero__inner">
        <p className="site-label">{project.name}</p>
        <h1 className="case-hero__title">{project.headline}</h1>
        <p className="case-hero__summary">{project.summary}</p>
        <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="site-btn site-btn--primary">
          Open Live Demo
        </Link>
      </div>
    </section>
  );
}

function CaseStudyBody({ project }: { project: Project }) {
  return (
    <article className="site-container case-body">
      <section className="case-block">
        <p className="site-label">The Challenge</p>
        <p className="case-prose">{project.challenge}</p>
      </section>

      <section className="case-block">
        <p className="site-label">My Thinking</p>
        <div className="case-thinking">
          <div>
            <h2>Observation</h2>
            <p>{project.observation}</p>
          </div>
          <div>
            <h2>Hypothesis</h2>
            <p>{project.hypothesis}</p>
          </div>
          <div>
            <h2>Solution</h2>
            <p>{project.solution}</p>
          </div>
        </div>
      </section>

      <section className="case-block">
        <p className="site-label">Product Walkthrough</p>
        <div className="case-walkthrough">
          {project.walkthrough.map((item) => (
            <div key={item.title} className="case-walkthrough__item">
              <h3>{item.title}</h3>
              <p className="case-walkthrough__desc">{item.description}</p>
              <p className="case-walkthrough__impact">
                <strong>Impact:</strong> {item.impact}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="case-block">
        <p className="site-label">What I Learned</p>
        <ul className="case-learned">
          {project.learned.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
