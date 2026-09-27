import type { Project } from "@/lib/projects";

type ProjectBrandNameProps = {
  project: Project;
  className?: string;
};

export function ProjectBrandName({ project, className }: ProjectBrandNameProps) {
  const classes = ["project-brand-name", className].filter(Boolean).join(" ");

  if (project.slug === "gen-pulse") {
    return (
      <span className={`${classes} project-brand-name--gen-pulse`} aria-label={project.name}>
        <span className="project-brand-name__gen-mark">
          Gen<span>™</span>
        </span>
        <span className="project-brand-name__pulse">Pulse</span>
      </span>
    );
  }

  if (project.slug === "sprintiq") {
    return (
      <span className={classes}>
        Sprint<span className="project-brand-name__accent">IQ</span>
      </span>
    );
  }

  return <span className={classes}>{project.name}</span>;
}
