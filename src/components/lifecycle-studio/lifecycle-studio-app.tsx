"use client";

import { LifecycleStudioV14App } from "@/components/lifecycle-studio/v14/lifecycle-studio-v14-app";
import type { LasV14PageId } from "@/components/lifecycle-studio/v14/lifecycle-studio-v14-data";

type Props = {
  initialPage?: LasV14PageId;
};

/** Portfolio-hosted Lifecycle Architecture Studio (V14 approved design). */
export function LifecycleStudioApp({ initialPage }: Props) {
  return <LifecycleStudioV14App initialPage={initialPage} />;
}
