import type { Metadata } from "next";
import { CvDocumentPages } from "@/components/cv/cv-page-one-prototype";

export const metadata: Metadata = {
  title: "Kevin Alan Mold — CV Print",
  description: "Printable two-page CV for Kevin Alan Mold.",
};

export default function CvPrintPage() {
  return (
    <main className="cv-print-document" aria-label="Kevin Alan Mold printable CV">
      <CvDocumentPages />
    </main>
  );
}
