import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { site } from "@/lib/site";
import { basePath } from "@/lib/site-config";
import "./globals.css";

const siteUrl = "https://kentkong.github.io/kevin-portfolio";
const ogImagePath = `${basePath}/og-linkedin.png`;

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
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: site.title,
    description: site.description,
    url: siteUrl,
    siteName: site.name,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 627,
        alt: `${site.name} — ${site.headline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [ogImagePath],
  },
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
