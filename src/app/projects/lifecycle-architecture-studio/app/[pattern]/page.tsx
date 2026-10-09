import { redirect } from "next/navigation";

type PageProps = {
  params: Promise<{ pattern: string }>;
};

/** Legacy pattern URLs redirect to the V14 studio app. */
export default async function LifecycleStudioAppPatternPage({ params }: PageProps) {
  await params;
  redirect("/projects/lifecycle-architecture-studio/app");
}
