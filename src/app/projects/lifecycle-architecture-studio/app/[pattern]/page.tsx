import { LifecycleStudioApp } from "@/components/lifecycle-studio/lifecycle-studio-app";
import { lifecycleStudioPatternSlugs } from "@/lib/lifecycle-studio-patterns";

type PageProps = {
  params: Promise<{ pattern: string }>;
};

export function generateStaticParams() {
  return lifecycleStudioPatternSlugs.map((pattern) => ({ pattern }));
}

/** Legacy pattern URLs still open the V14 studio app. */
export default async function LifecycleStudioAppPatternPage({ params }: PageProps) {
  await params;
  return <LifecycleStudioApp />;
}
