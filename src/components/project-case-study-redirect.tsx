"use client";

import { useEffect } from "react";
import { basePath } from "@/lib/site-config";

export function ProjectCaseStudyRedirect() {
  useEffect(() => {
    window.location.replace(`${basePath}/#projects`);
  }, []);

  return null;
}
