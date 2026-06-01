import { ProjectDeviceShowcase } from "@/components/home/project-device-showcase";
import { ProjectBrandName } from "@/components/home/project-brand-name";
import type { Project } from "@/lib/projects";

type ProjectShowcaseRowProps = {
  project: Project;
  index: number;
};

export function ProjectShowcaseRow({ project, index }: ProjectShowcaseRowProps) {
  return (
    <article className={`project-showcase ${index > 0 ? "project-showcase--spaced" : ""}`}>
      <div className="site-panel project-showcase__resolution">
        <header className="project-showcase__project-intro">
          <h2 className="project-showcase__hero-name">
            <ProjectBrandName project={project} />
          </h2>
          <h3 className="project-showcase__title">{project.headline}</h3>
          {project.overview ? (
            <p className="project-showcase__overview-text">{project.overview}</p>
          ) : null}
        </header>

        <div className="project-showcase__resolution-step">
          <span>The challenge</span>
          <p>{project.challenge}</p>
        </div>
        <div className="project-showcase__resolution-step">
          <span>{project.hypothesis ? "Observation" : "Idea"}</span>
          <p>{project.observation}</p>
        </div>
        {project.hypothesis ? (
          <div className="project-showcase__resolution-step">
            <span>Hypothesis</span>
            <p>{project.hypothesis}</p>
          </div>
        ) : null}
        <div className="project-showcase__resolution-step">
          <span>Solution</span>
          <p>{project.solution}</p>
        </div>

        {project.demoMode ? (
          <div className="project-showcase__resolution-step">
            <span>Interactive Demo Mode</span>
            <p>{project.demoMode}</p>
          </div>
        ) : null}

        <div className="project-showcase__highlights">
          <span className="project-showcase__highlights-label">Key capabilities</span>
          <ul className="project-showcase__highlights-list">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="project-showcase__devices">
        <ProjectDeviceShowcase project={project} />
      </div>
    </article>
  );
}
