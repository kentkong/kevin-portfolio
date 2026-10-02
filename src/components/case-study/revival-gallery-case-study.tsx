import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/asset-path";

const masterScreens = [
  {
    label: "01 / TANK",
    image: "/projects/revival/masters/01-tank-colour-decals.png",
  },
  {
    label: "04 / WHEELS & TYRES",
    image: "/projects/revival/masters/02-wheels-tyres.png",
  },
  {
    label: "06 / EXHAUST",
    image: "/projects/revival/masters/03-exhaust.png",
  },
  {
    label: "07 / ACCESSORIES",
    image: "/projects/revival/masters/04-accessories.png",
  },
];

export function RevivalGalleryCaseStudy() {
  return (
    <article className="revival-editorial revival-editorial--home-skin">
      <section className="revival-editorial--home-skin__inner" aria-label="Approved Revival master designs">
        <header className="revival-editorial--home-skin__header">
          <div className="revival-editorial--home-skin__meta">
            <span>01</span>
            <span>UX &amp; Product Design</span>
          </div>

          <h1>Revival</h1>
          <p className="revival-editorial--home-skin__lede">
            Is a UX/Product Design concept for planning a custom Triumph Desert Sled. The concept
            explores a visual configurator where riders can start with their original motorcycle,
            experiment with components and styling, and see those decisions come together as a complete
            build concept that can be shared with a motorcycle workshop.
          </p>
          <p className="revival-editorial--home-skin__body">
            The goal was simple: make it easier to design the bike you want before spending money or
            making irreversible changes.
          </p>
          <div className="revival-editorial--home-skin__actions">
            <span className="revival-editorial--home-skin__tag">
              Independent product concept / high-fidelity prototype
            </span>
            <a
              href={assetPath("/projects/revival/case-study-full-page.png")}
              target="_blank"
              rel="noreferrer"
              className="revival-editorial--home-skin__link"
            >
              Open full case study page (PNG) ↗
            </a>
          </div>
        </header>

        <div id="revival-masters" className="revival-editorial__screen-stack">
          {masterScreens.map((screen) => (
            <figure className="revival-editorial__screen" key={screen.image}>
              <figcaption>
                <span>{screen.label}</span>
                <Link href={assetPath(screen.image)} target="_blank" rel="noreferrer">
                  Open full-size PNG ↗
                </Link>
              </figcaption>
              <Link href={assetPath(screen.image)} target="_blank" rel="noreferrer">
                <Image
                  src={assetPath(screen.image)}
                  alt={`Approved Revival master design for ${screen.label}`}
                  width={768}
                  height={512}
                  priority={screen.label === "01 / TANK"}
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 1500px"
                />
              </Link>
            </figure>
          ))}
        </div>
      </section>
    </article>
  );
}
