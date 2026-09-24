import Image from "next/image";
import { assetPath } from "@/lib/asset-path";

const plannedRoutes = {
  ux: "/work/ux-product-design",
  crm: "/work/crm-customer-experience",
  ai: "/work/ai-automation",
  visual: "/work/visual-photography",
};

export function ExploreMyWork() {
  return (
    <section className="explore-work" aria-labelledby="explore-work-title">
      <div className="site-container explore-work__container">
        <header className="explore-work__intro">
          <p className="explore-work__eyebrow">Section 03</p>
          <h2 id="explore-work-title" className="explore-work__title">
            Explore My Work
          </h2>
          <p className="explore-work__lead">
            Four connected areas that broaden the portfolio beyond a single job title or
            project type.
          </p>
        </header>

        <div className="explore-work__grid" aria-label="Portfolio work disciplines">
          <article className="explore-chapter explore-chapter--ux">
            <div className="explore-chapter__copy">
              <p className="explore-chapter__kicker">UX & Product Design</p>
              <h3>Revival</h3>
              <p className="explore-chapter__proposition">
                Visualise your motorcycle build before you build it.
              </p>
              <p>
                An AI-assisted motorcycle customisation product concept in development,
                grounded in a real planning problem from motorcycle customisation.
              </p>
              <p className="explore-chapter__route">Future route: {plannedRoutes.ux}</p>
            </div>

            <div className="explore-chapter__visual explore-chapter__visual--revival">
              <div className="revival-study-card">
                <p>Product concept in development</p>
                <span>Motorcycle imagery required</span>
              </div>
              <div className="revival-build-map" aria-hidden>
                {["Tank", "Seat", "Bars", "Tyres", "Colour"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>

          <article className="explore-chapter explore-chapter--crm">
            <div className="explore-chapter__copy">
              <p className="explore-chapter__kicker">CRM & Customer Experience</p>
              <h3>Lifecycle systems and journey architecture</h3>
              <p>
                CRM systems, lifecycle strategy and customer journeys designed around how
                people actually move through products and services.
              </p>
              <p className="explore-chapter__route">Future route: {plannedRoutes.crm}</p>
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
              <p className="explore-chapter__kicker">AI & Automation</p>
              <h3>Applied workflows, not AI theatre</h3>
              <p>
                AI-assisted experiences, workflow transformation and operational intelligence
                built around practical decisions and next actions.
              </p>
              <p className="explore-chapter__route">Future route: {plannedRoutes.ai}</p>
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
              <p className="explore-chapter__kicker">Visual Design & Photography</p>
              <h3>Image-led creative foundation</h3>
              <p>
                A future space for graphic design, photography, visual experimentation and
                editorial image-led work.
              </p>
              <p className="explore-chapter__route">Future route: {plannedRoutes.visual}</p>
            </div>

            <div className="explore-chapter__visual explore-chapter__visual--placeholder">
              <p>Genuine photography and design assets needed</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
