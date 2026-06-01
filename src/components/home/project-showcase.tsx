import { ProjectShowcaseRow } from "@/components/home/project-showcase-row";
import { projects } from "@/lib/projects";

export function ProjectShowcase() {
  return (
    <section id="projects" className="site-section site-section--compact-top">
      <div className="site-container">
        <h2 className="site-display-headline site-display-headline--accent project-showcase__section-label">
          Featured Work
        </h2>

        {projects.map((project, index) => (
          <ProjectShowcaseRow key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
