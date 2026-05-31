import { CaseStudyPage } from "@/components/case-study/case-study-page";
import { projects } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <CaseStudyPage slug={slug} />;
}
