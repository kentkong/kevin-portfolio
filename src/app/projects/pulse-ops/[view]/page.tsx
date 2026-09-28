import { notFound } from "next/navigation";
import {
  PulseOpsCommandWireframe,
  type PulseOpsView,
} from "@/components/case-study/pulse-ops-command-wireframe";

const pulseOpsViews = ["command", "lifecycle", "workflows", "signals", "events", "stack"] as const;

type PulseOpsViewPageProps = {
  params: Promise<{ view: string }>;
};

export function generateStaticParams() {
  return pulseOpsViews.map((view) => ({ view }));
}

export default async function PulseOpsViewPage({ params }: PulseOpsViewPageProps) {
  const { view } = await params;

  if (!pulseOpsViews.includes(view as PulseOpsView)) {
    notFound();
  }

  return <PulseOpsCommandWireframe view={view as PulseOpsView} />;
}
