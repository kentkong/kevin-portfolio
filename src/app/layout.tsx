import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { site } from "@/lib/site";
import { basePath } from "@/lib/site-config";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} scroll-smooth`}>
      <body
        className="site-body"
        style={{
          ["--texture-slate" as string]: `url('${basePath}/textures/slate-stone-1920.jpg')`,
          ["--texture-slate-hd" as string]: `url('${basePath}/textures/slate-stone.jpg')`,
        }}
      >
        {children}
      </body>
    </html>
  );
}
