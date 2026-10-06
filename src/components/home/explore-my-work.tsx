import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/asset-path";

const plannedRoutes = {
  visual: "/work/visual-photography",
};

export function ExploreMyWork() {
  return (
    <section id="explore-work" className="explore-work" aria-labelledby="explore-work-title">
      <div className="site-container explore-work__container">
        <header className="explore-work__intro">
          <p className="explore-work__eyebrow">Section 02</p>
          <h2 id="explore-work-title" className="explore-work__title">
            Explore my work
          </h2>
          <p className="explore-work__lead">
            Four disciplines — UX and product, CRM and customer experience, AI and automation, and
            visual design — mapped to representative projects from this portfolio.
          </p>
        </header>
        <div className="explore-work__grid" aria-label="Portfolio work disciplines">
          <article className="explore-chapter explore-chapter--ux">
            <div className="explore-chapter__copy">
              <div className="explore-chapter__meta">
                <span>01</span>
                <p>UX & Product Design</p>
              </div>
              <h3>Revival</h3>
              <p className="explore-chapter__proposition">
                Visualise your dream Triumph Desert Sled motorcycle build before you buy it.
              </p>
              <p>
                AI-assisted Triumph Desert Sled product concept.
              </p>
              <div className="explore-chapter__status-row">
                <p className="explore-chapter__status">
                  Independent product concept / high-fidelity prototype
                </p>
                <Link href={assetPath("/projects/revival")} className="explore-chapter__route">
                  View Revival case study ↗
                </Link>
              </div>
            </div>

            <div className="explore-chapter__visual explore-chapter__visual--revival">
              <div className="revival-thumbnail-image">
                <Image
                  src={assetPath("/projects/revival/masters/01-tank-colour-decals.png")}
                  alt="Revival Triumph Desert Sled product concept"
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 42vw"
                />
              </div>
              <div className="revival-process-strip" aria-hidden="true">
                {["Original", "Configure", "Live Build", "Generate"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>

          <article className="explore-chapter explore-chapter--crm">
            <div className="explore-chapter__copy">
              <div className="explore-chapter__meta">
                <span>02</span>
                <p>CRM & Customer Experience</p>
              </div>
              <h3>Lifecycle systems and journey architecture.</h3>
              <p>
                CRM systems, lifecycle strategy and customer journeys designed around how people
                actually move through products and services.
              </p>
              <Link href={assetPath("/projects/lifecycle-architecture-studio")} className="explore-chapter__route">
                Lifecycle Architecture Studio overview ↗
              </Link>
            </div>

            <div className="explore-chapter__visual explore-chapter__visual--crm">
              <Image
                src={assetPath("/projects/lifecycle-architecture-studio/customer-360.png")}
                alt="Lifecycle Architecture Studio customer 360 architecture visual"
                fill
                unoptimized
                sizes="(max-width: 900px) 100vw, 42vw"
              />
            </div>
          </article>

          <article className="explore-chapter explore-chapter--ai">
            <div className="explore-chapter__copy">
              <div className="explore-chapter__meta">
                <span>03</span>
                <p>AI & Automation</p>
              </div>
              <h3>Applied workflows and operational intelligence.</h3>
              <p>
                AI-assisted experiences, workflow transformation and operational intelligence built
                around practical decisions and next actions.
              </p>
              <Link href={assetPath("/projects/pulse-ops")} className="explore-chapter__route">
                Pulse-Ops AI overview ↗
              </Link>
            </div>

            <div className="explore-chapter__visual explore-chapter__visual--ai">
              <Image
                src={assetPath("/projects/pulse-ops/operations.png")}
                alt="Pulse-Ops AI operational intelligence interface"
                fill
                unoptimized
                sizes="(max-width: 900px) 100vw, 34vw"
              />
            </div>
          </article>

          <article className="explore-chapter explore-chapter--visual">
            <div className="explore-chapter__copy">
              <div className="explore-chapter__meta">
                <span>04</span>
                <p>Visual Design & Photography</p>
              </div>
              <h3>Image-led creative foundation.</h3>
              <p>
                A future space for graphic design, photography, visual experimentation and
                editorial image-led work.
              </p>
              <p className="explore-chapter__route">Future destination: {plannedRoutes.visual}</p>
            </div>

            <div className="explore-chapter__visual explore-chapter__visual--placeholder">
              <p>Genuine photography and graphic design assets pending</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
