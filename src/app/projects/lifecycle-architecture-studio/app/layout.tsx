import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./lifecycle-studio-app.css";

export const metadata: Metadata = {
  title: "Lifecycle Architecture Studio — App",
  description: "Interactive lifecycle architecture and CRM technology explorer.",
};

export default function LifecycleStudioAppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="lifecycle-studio-app-root" data-surface="lifecycle-studio-app">
      {children}
    </div>
  );
}
