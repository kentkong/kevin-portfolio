import { notFound } from "next/navigation";
import { LifecycleStudioApp } from "@/components/lifecycle-studio/lifecycle-studio-app";
import {
  getLifecycleStudioPattern,
  lifecycleStudioPatternSlugs,
  type LifecycleStudioPatternSlug,
} from "@/lib/lifecycle-studio-patterns";

type PageProps = {
  params: Promise<{ pattern: string }>;
};

export function generateStaticParams() {
  return lifecycleStudioPatternSlugs.map((pattern) => ({ pattern }));
}

export default async function LifecycleStudioAppPatternPage({ params }: PageProps) {
  const { pattern: patternParam } = await params;
  const pattern = getLifecycleStudioPattern(patternParam);

  if (!pattern) {
    notFound();
  }

  return <LifecycleStudioApp patternSlug={pattern.slug as LifecycleStudioPatternSlug} />;
}
