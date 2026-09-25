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
    <article
      className="revival-editorial"
      style={{
        background: "#e8decc",
        color: "#1d1b17",
        minHeight: "100vh",
        padding: "clamp(5rem, 8vw, 7rem) 0 clamp(3rem, 6vw, 5rem)",
      }}
    >
      <section
        aria-label="Approved Revival master designs"
        style={{
          width: "min(100% - 3rem, 93.75rem)",
          marginInline: "auto",
        }}
      >
        <header
          style={{
            marginBottom: "clamp(2rem, 4vw, 3.25rem)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              paddingBottom: "1.25rem",
              borderBottom: "1px solid rgba(29, 27, 23, 0.65)",
              fontFamily: 'var(--font-mono), "IBM Plex Mono", monospace',
              fontSize: "clamp(0.7rem, 1vw, 1rem)",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(29, 27, 23, 0.72)",
            }}
          >
            <span>01</span>
            <span>UX &amp; PRODUCT DESIGN</span>
          </div>

          <div
            style={{
              margin: "clamp(2.75rem, 6vw, 5rem) 0 1.3rem",
              maxWidth: "42rem",
            }}
          >
            <Image
              src={assetPath("/projects/revival/brand/revival-wordmark.png")}
              alt="Revival"
              width={1024}
              height={200}
              priority
              unoptimized
              style={{
                display: "block",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <p
            style={{
              maxWidth: "64rem",
              margin: "0",
              fontFamily: "var(--font-body), Inter, system-ui, sans-serif",
              fontSize: "clamp(1.2rem, 2vw, 2.15rem)",
              fontWeight: 500,
              letterSpacing: "-0.045em",
              lineHeight: 1.18,
            }}
          >
            Is a UX/Product Design concept for planning a custom Triumph Desert Sled. The concept
            explores a visual configurator where riders can start with their original
            motorcycle, experiment with components and styling, and see those decisions come
            together as a complete build concept that can be shared with a motorcycle workshop.
          </p>
          <p
            style={{
              maxWidth: "46rem",
              margin: "0.85rem 0 0",
              fontSize: "clamp(0.98rem, 1.2vw, 1.24rem)",
              lineHeight: 1.62,
              color: "rgba(29, 27, 23, 0.62)",
            }}
          >
            The goal was simple: make it easier to design the bike you want before spending money
            or making irreversible changes.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              alignItems: "center",
              marginTop: "clamp(1.4rem, 2vw, 2rem)",
              fontFamily: 'var(--font-mono), "IBM Plex Mono", monospace',
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.13em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                padding: "0.72rem 0.9rem",
                border: "1px solid rgba(29, 27, 23, 0.45)",
                color: "rgba(29, 27, 23, 0.66)",
              }}
            >
              Independent product concept / high-fidelity prototype
            </span>
            <a href="#revival-masters" style={{ color: "rgba(29, 27, 23, 0.52)" }}>
              View Revival case study ↗
            </a>
          </div>
        </header>

        <div
          id="revival-masters"
          className="revival-editorial__screen-stack"
          style={{
            width: "100%",
          }}
        >
          {masterScreens.map((screen) => (
            <figure className="revival-editorial__screen" key={screen.image}>
              <figcaption
                style={{
                  color: "#e94f1d",
                }}
              >
                <span>{screen.label}</span>
                <Link href={assetPath(screen.image)} target="_blank" rel="noreferrer">
                  OPEN FULL-SIZE PNG ↗
                </Link>
              </figcaption>
              <Link
                href={assetPath(screen.image)}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "transparent",
                  borderColor: "rgba(29, 27, 23, 0.18)",
                }}
              >
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
