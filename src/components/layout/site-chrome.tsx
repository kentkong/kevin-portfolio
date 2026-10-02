"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/site-header";

const CHROMELESS_PATHS = new Set(["/cv/print"]);

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showHeader = !CHROMELESS_PATHS.has(pathname);

  return (
    <>
      {showHeader ? <SiteHeader /> : null}
      {children}
    </>
  );
}
