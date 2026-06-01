import { ProjectShowcaseRow } from "@/components/home/project-showcase-row";
import { projects } from "@/lib/projects";

export function ProjectShowcase() {
  return (
    <section id="projects" className="site-section site-section--compact-top">
      <div className="site-container">
        <div className="site-section__intro site-panel">
          <p className="site-label">Featured Work</p>
          <h2 className="site-section__title">
            Every product in this portfolio is built around a real operational challenge
          </h2>
          <p className="site-section__lead">
            Each project focuses on improving visibility, accelerating decision-making, simplifying
            execution, and helping teams work more effectively.
          </p>
        </div>

        <div className="project-showcase__section-divider" aria-hidden="true">
          <span className="project-showcase__section-divider-line" />
        </div>

        {projects.map((project, index) => (
          <ProjectShowcaseRow key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
