import Link from "next/link";
import { projects } from "@/lib/projects";

export function ProjectShowcase() {
  return (
    <section id="projects" className="site-section">
      <div className="site-container">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className={`project-showcase ${index > 0 ? "project-showcase--spaced" : ""}`}
          >
            <div className={`project-showcase__visual bg-gradient-to-br ${project.accent}`}>
              <div className="project-showcase__frame">
                <div className="project-showcase__chrome">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="project-showcase__screen">
                  <p className="project-showcase__screen-label">{project.name}</p>
                  <p className="project-showcase__screen-copy">{project.summary}</p>
                </div>
              </div>
            </div>

            <div className="project-showcase__copy">
              <p className="site-label">{project.name}</p>
              <h2 className="project-showcase__title">{project.headline}</h2>
              <p className="project-showcase__summary">{project.summary}</p>
              <div className="project-showcase__actions">
                <Link href={`/projects/${project.slug}`} className="site-btn site-btn--primary">
                  View Case Study
                </Link>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="site-btn site-btn--ghost"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
