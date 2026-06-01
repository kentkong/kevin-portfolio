import { ProjectCaseStudyRedirect } from "@/components/project-case-study-redirect";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectCaseStudyPage() {
  return <ProjectCaseStudyRedirect />;
}
