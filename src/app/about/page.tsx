import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { site } from "@/lib/site";

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="site-page">
        <div className="site-container site-page__inner">
          <p className="site-label">About</p>
          <div className="site-page__about">
            <figure className="site-about__photo">
              <Image
                src={assetPath("/about/kevin-headshot.png")}
                alt="Portrait of Kevin Alan Mold"
                width={320}
                height={320}
                priority
                className="site-about__photo-img"
              />
            </figure>
            <div className="site-prose site-prose--about">
              {site.aboutBio.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
