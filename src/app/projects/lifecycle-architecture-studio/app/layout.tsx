import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Lifecycle Architecture Studio — App",
  description: "Explore reference lifecycle architecture stacks in the portfolio studio app.",
};

export default function LifecycleStudioAppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="lifecycle-studio-app-root" data-surface="lifecycle-studio-app">
      {children}
    </div>
  );
}
