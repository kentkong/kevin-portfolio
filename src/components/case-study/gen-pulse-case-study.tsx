import Link from "next/link";
import { GenPulseArchitectureDiagram } from "@/components/case-study/gen-pulse-architecture-diagram";
import { ProjectDeviceShowcase } from "@/components/home/project-device-showcase";
import { genPulseStory } from "@/lib/gen-pulse-content";
import { getProject } from "@/lib/projects";

export function GenPulseCaseStudy() {
  const project = getProject("gen-pulse");
  if (!project) return null;

  const story = genPulseStory;

  return (
    <article className="gp-story">
      {/* 1. Hero */}
      <section className="gp-story-hero">
        <div className="site-container project-showcase__hero">
          <ProjectDeviceShowcase project={project} />
        </div>
        <div className="site-container gp-story-hero__copy">
          <p className="site-label">{story.title}</p>
          <h1 className="gp-story-hero__title">{project.headline}</h1>
          <p className="gp-story-hero__value">{story.valueProposition}</p>
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="site-btn site-btn--primary"
          >
            Open Live Demo
          </Link>
        </div>
      </section>

      {/* 2. Challenge */}
      <section className="site-section gp-story-section">
        <div className="site-container gp-story-section__inner">
          <p className="site-label">The Challenge</p>
          <h2 className="gp-story-section__title">{story.challenge.headline}</h2>
          <p className="gp-story-prose">{story.challenge.body}</p>
          <ul className="gp-story-list">
            {story.challenge.painPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Solution */}
      <section className="site-section gp-story-section gp-story-section--soft">
        <div className="site-container gp-story-section__inner">
          <p className="site-label">The Solution</p>
          <h2 className="gp-story-section__title">{story.solution.headline}</h2>
          <p className="gp-story-prose">{story.solution.body}</p>
          <GenPulseArchitectureDiagram />
        </div>
      </section>

      {/* 4. Features */}
      <section className="site-section gp-story-section gp-story-section--soft">
        <div className="site-container">
          <p className="site-label">Capabilities</p>
          <h2 className="gp-story-section__title">What leaders get every morning.</h2>
          <div className="gp-features">
            {story.features.map((feature) => (
              <div key={feature.title} className="gp-features__item">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Business Impact */}
      <section className="site-section gp-story-section">
        <div className="site-container">
          <p className="site-label">Business Impact</p>
          <h2 className="gp-story-section__title">Operational outcomes—not dashboard metrics.</h2>
          <div className="gp-impact">
            {story.impact.map((item) => (
              <div key={item.title} className="gp-impact__item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
