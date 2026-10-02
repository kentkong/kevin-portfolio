import Image from "next/image";
import Link from "next/link";
import {
  RevivalV2IconArrow,
  RevivalV2IconDecisions,
  RevivalV2IconEye,
  RevivalV2IconMotorcycle,
} from "@/components/case-study/revival-v2/revival-v2-icons";
import { assetPath } from "@/lib/asset-path";
import { revivalV2Assets } from "@/lib/revival-v2-assets";
import { revivalV2OpportunityColumns, revivalV2ProcessSteps } from "@/lib/revival-v2-content";

const opportunityIcons = {
  decisions: RevivalV2IconDecisions,
  visualise: RevivalV2IconEye,
  motorcycle: RevivalV2IconMotorcycle,
  arrow: RevivalV2IconArrow,
} as const;

export function RevivalV2CaseStudyPass1() {
  return (
    <article className="revival-v2">
      <div className="revival-v2__grid" aria-hidden="true" />

      <div className="revival-v2__sheet">
        <header className="revival-v2__sheet-meta">
          <span>02</span>
          <span>UX &amp; Product Design</span>
        </header>

        <section className="revival-v2__hero" aria-labelledby="revival-v2-title">
          <div className="revival-v2__hero-copy">
            <p className="revival-v2__kicker">Revival / AI Visualisation</p>
            <h1 id="revival-v2-title">Revival</h1>
            <p className="revival-v2__hero-lede">
              Visualise your motorcycle
              <br />
              before you build it.
            </p>
            <p className="revival-v2__hero-body">
              Revival explores how riders could configure tank, wheels, tyres, bars, seat, exhaust,
              paint and accessories on their own Triumph — seeing those decisions come together as a
              coherent build concept before parts are ordered or metal is cut.
            </p>
            <p className="revival-v2__hero-tagline">
              Your bike.
              <br />
              Your ideas.
              <br />
              Visualised before you build.
            </p>
            <div className="revival-v2__hero-actions">
              <Link href="#revival-v2-opportunity" className="revival-v2__btn revival-v2__btn--solid">
                Explore the concept →
              </Link>
              <Link href="#revival-v2-how-it-works" className="revival-v2__btn revival-v2__btn--ghost">
                See the process ↓
              </Link>
            </div>
          </div>

          <div className="revival-v2__hero-visual" aria-label="Revival on desktop, tablet and mobile">
            <div className="revival-v2__hero-device revival-v2__hero-device--laptop">
              <Image
                src={assetPath(revivalV2Assets.masters.tank)}
                alt="Revival tank workshop on desktop"
                width={768}
                height={512}
                unoptimized
                priority
                sizes="(max-width: 900px) 92vw, 44vw"
              />
            </div>
            <div className="revival-v2__hero-device revival-v2__hero-device--tablet">
              <Image
                src={assetPath(revivalV2Assets.masters.wheels)}
                alt="Revival wheels and tyres workshop on tablet"
                width={768}
                height={512}
                unoptimized
                sizes="(max-width: 900px) 40vw, 18vw"
              />
            </div>
            <div className="revival-v2__hero-device revival-v2__hero-device--phone">
              <Image
                src={assetPath(revivalV2Assets.masters.accessories)}
                alt="Revival accessories workshop on mobile"
                width={768}
                height={512}
                unoptimized
                sizes="(max-width: 900px) 28vw, 12vw"
              />
            </div>
          </div>
        </section>

        <section
          id="revival-v2-opportunity"
          className="revival-v2__section revival-v2__section--opportunity"
          aria-labelledby="revival-v2-opportunity-title"
        >
          <div className="revival-v2__section-rail">
            <span>01 / The Opportunity</span>
            <Link href={assetPath(revivalV2Assets.masters.tank)} target="_blank" rel="noreferrer">
              Open full-size project →
            </Link>
          </div>

          <div className="revival-v2__opportunity-top">
            <div className="revival-v2__opportunity-copy">
              <h2 id="revival-v2-opportunity-title">
                Turn your ideas into
                <br />a real visualisation.
              </h2>
              <p>
                Custom motorcycle builds involve many interdependent decisions. Revival is a UX and
                product design concept for seeing those choices together on your motorcycle — not as
                isolated parts in a catalogue.
              </p>
              <p>
                The goal is simple: make it easier to design the bike you want before spending money
                or making irreversible workshop changes.
              </p>
            </div>
            <figure className="revival-v2__opportunity-photo">
              <Image
                src={assetPath(revivalV2Assets.reference.originalBonneville)}
                alt="R/001 original Triumph Bonneville — the starting motorcycle for Revival"
                width={1200}
                height={900}
                unoptimized
                sizes="(max-width: 900px) 100vw, 46vw"
              />
            </figure>
          </div>

          <div className="revival-v2__opportunity-grid">
            {revivalV2OpportunityColumns.map((column) => {
              const Icon = opportunityIcons[column.icon];
              return (
                <article key={column.title} className="revival-v2__opportunity-card">
                  <Icon className="revival-v2__opportunity-icon" />
                  <h3>{column.title}</h3>
                  <p>{column.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="revival-v2-how-it-works"
          className="revival-v2__section revival-v2__section--process"
          aria-labelledby="revival-v2-process-title"
        >
          <div className="revival-v2__section-rail">
            <span>02 / How It Works</span>
            <Link href={assetPath(revivalV2Assets.masters.tank)} target="_blank" rel="noreferrer">
              Open full-size project →
            </Link>
          </div>

          <header className="revival-v2__process-intro">
            <h2 id="revival-v2-process-title">From a photo to a complete build concept.</h2>
            <p>
              A compact journey from the motorcycle you own today to a shareable build concept — with
              deterministic configuration first and generative visualisation when you are ready to
              generate Revival.
            </p>
          </header>

          <ol className="revival-v2__process-steps">
            {revivalV2ProcessSteps.map((step, index) => (
              <li key={step.number} className="revival-v2__process-step">
                <span className="revival-v2__process-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
                {index < revivalV2ProcessSteps.length - 1 ? (
                  <span className="revival-v2__process-arrow" aria-hidden>
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
}
