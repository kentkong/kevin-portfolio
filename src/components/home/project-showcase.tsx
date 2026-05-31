import { ProjectShowcaseRow } from "@/components/home/project-showcase-row";
import { projects } from "@/lib/projects";

export function ProjectShowcase() {
  return (
    <section id="projects" className="site-section">
      <div className="site-container">
        <div className="site-section__intro project-showcase__intro">
          <p className="site-label">Featured Work</p>
          <h2 className="site-section__title">Products built from real operational problems</h2>
          <p className="site-section__lead">
            Each project pairs the problem with the product—the challenge, the thinking, and
            the outcome leaders actually feel.
          </p>
        </div>

        {projects.map((project, index) => (
          <ProjectShowcaseRow key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
