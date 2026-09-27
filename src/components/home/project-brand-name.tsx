import type { Project } from "@/lib/projects";

type ProjectBrandNameProps = {
  project: Project;
  className?: string;
};

export function ProjectBrandName({ project, className }: ProjectBrandNameProps) {
  if (project.slug === "sprintiq") {
    return (
      <span className={className}>
        Sprint<span className="project-brand-name__accent">IQ</span>
      </span>
    );
  }

  return <span className={className}>{project.name}</span>;
}
