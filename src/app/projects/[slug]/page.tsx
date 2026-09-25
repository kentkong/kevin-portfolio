import { CaseStudyPage } from "@/components/case-study/case-study-page";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type ProjectCaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectCaseStudyPage({ params }: ProjectCaseStudyPageProps) {
  const { slug } = await params;

  return <CaseStudyPage slug={slug} />;
}
