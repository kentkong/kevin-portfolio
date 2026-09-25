import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/asset-path";

const tags = [
  "UX / Product Design",
  "Interaction Design",
  "AI Concept Development",
  "Motorcycle Customisation",
];

const taxonomy = [
  "01 TANK",
  "02 FRAME & STANCE",
  "03 BARS & CONTROLS",
  "04 WHEELS & TYRES",
  "05 SEAT",
  "06 EXHAUST",
  "07 ACCESSORIES",
  "08 PAINT & FINISH",
];

const masterScreens = [
  {
    label: "01 / TANK",
    title: "Tank, colour and heritage decal",
    image: "/projects/revival/masters/01-tank-colour-decals.png",
  },
  {
    label: "04 / WHEELS & TYRES",
    title: "Wheel, tyre and sizing decisions",
    image: "/projects/revival/masters/02-wheels-tyres.png",
  },
  {
    label: "06 / EXHAUST",
    title: "High exhaust and finish direction",
    image: "/projects/revival/masters/03-exhaust.png",
  },
  {
    label: "07 / ACCESSORIES",
    title: "Accessories, lighting and final details",
    image: "/projects/revival/masters/04-accessories.png",
  },
];

const nextSteps = [
  "Validate whether riders understand Original vs Live Build.",
  "Test the eight-part workshop structure.",
  "Test component selection and Build Tape behaviour.",
  "Explore motorcycle-image onboarding.",
  "Test rider-to-workshop handoff.",
  "Develop production-ready compositing assets.",
  "Investigate parts and compatibility data.",
  "Validate the role of AI in final visualisation.",
];

export function RevivalCaseStudy() {
  return (
    <article className="revival-case">
      <section className="revival-case__hero">
        <div className="revival-case__hero-copy">
          <p className="revival-case__eyebrow">UX / Product Design Case Study</p>
          <h1>REVIVAL</h1>
          <p className="revival-case__proposition">
            Visualise your dream Triumph Desert Sled motorcycle build before you buy it.
          </p>
          <p className="revival-case__intro">
            Revival explores how a rider could transform an ordinary classic Triumph into a
            personalised Desert Sled visually before committing to parts, fabrication and workshop
            work.
          </p>
          <dl className="revival-case__meta-list">
            <div>
              <dt>Project type</dt>
              <dd>UX / Product Design · AI-assisted concept development · Interaction Design</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>Independent product concept / high-fidelity prototype</dd>
            </div>
          </dl>
          <div className="revival-case__tags" aria-label="Project tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <Link
          href={assetPath("/projects/revival/masters/01-tank-colour-decals.png")}
          target="_blank"
          rel="noreferrer"
          className="revival-case__hero-image"
          aria-label="Open Revival Tank master design"
        >
          <Image
            src={assetPath("/projects/revival/masters/01-tank-colour-decals.png")}
            alt="Revival high-fidelity Tank workshop product concept"
            fill
            priority
            unoptimized
            sizes="(max-width: 900px) 100vw, 54vw"
          />
        </Link>
      </section>

      <CaseSection label="01 / The Problem" title="Planning a build means judging many decisions together.">
        <p>
          The project originated from the real difficulty of planning a custom classic motorcycle
          build. A rider may know the direction they want — tyres, tank, stance, bars, seat,
          exhaust, paint and other details — but individual decisions are difficult to judge in
          isolation.
        </p>
        <p className="revival-case__pull">
          What will all of these decisions look like together on my motorcycle?
        </p>
        <p>
          Revival explores a visual tool for answering that question before physical work begins.
        </p>
      </CaseSection>

      <section className="revival-case__original">
        <div>
          <p className="revival-case__eyebrow">R/001 / Original</p>
          <h2>The starting motorcycle.</h2>
          <p>
            R/001 represents an ordinary road-going Triumph Bonneville before the Revival process.
            The transformation begins from the motorcycle the rider already owns.
          </p>
        </div>
        <div className="revival-case__original-image">
          <Image
            src={assetPath("/projects/revival/reference/r001-original-bonneville.png")}
            alt="R/001 original Triumph Bonneville before the Revival process"
            fill
            unoptimized
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
      </section>

      <CaseSection label="02 / Product Idea" title="Original Triumph → Configure Desert Sled → Live Build → Generate Revival">
        <div className="revival-case__journey" aria-label="Revival product journey">
          {["Original Triumph", "Configure Desert Sled", "Live Build", "Generate Revival"].map(
            (step, index) => (
              <span key={step}>
                {step}
                {index < 3 ? <i aria-hidden>→</i> : null}
              </span>
            ),
          )}
        </div>
        <p>
          The concept proposes three important visual states: the original motorcycle, the cumulative
          working configuration, and a final cohesive generated visualisation. The motorcycle itself
          remains the centre of the experience rather than turning the product into a conventional
          ecommerce configurator.
        </p>
      </CaseSection>

      <section className="revival-case__system">
        <div>
          <p className="revival-case__eyebrow">03 / Building the System</p>
          <h2>Eight decisions shape the Desert Sled direction.</h2>
          <p>
            The categories were organised around the decisions involved in developing a Desert Sled
            direction. Revival visualises design intent; structural changes would require workshop
            and fabrication review and the concept does not claim engineering approval.
          </p>
        </div>
        <ol>
          {taxonomy.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="revival-case__component">
        <div className="revival-case__component-copy">
          <p className="revival-case__eyebrow">04 / Component Exploration</p>
          <h2>Tank form, colour, finish and heritage badge.</h2>
          <p>
            The Tank workshop explores component decisions through visual comparison. The intention
            is: select, see it on your bike, refine.
          </p>
          <p>
            This component sheet is design exploration supporting the product concept. It is not
            presented as a working interface.
          </p>
        </div>
        <Link
          href={assetPath("/projects/revival/reference/tank-component-library.png")}
          target="_blank"
          rel="noreferrer"
          className="revival-case__component-image"
          aria-label="Open tank component library reference"
        >
          <Image
            src={assetPath("/projects/revival/reference/tank-component-library.png")}
            alt="Tank component exploration showing styles, finishes and Triumph badge options"
            fill
            unoptimized
            sizes="(max-width: 900px) 100vw, 60vw"
          />
        </Link>
      </section>

      <section className="revival-case__language">
        <p className="revival-case__eyebrow">05 / Design Language</p>
        <h2>Desert Modernism</h2>
        <p>
          1960s California desert-racing programme + vintage Triumph workshop documentation +
          contemporary industrial-design application.
        </p>
        <div className="revival-case__language-grid">
          {[
            "dirty ivory / bone",
            "deep black / charcoal",
            "competition orange",
            "condensed typography",
            "technical mono annotations",
            "workshop/manual graphics",
            "archival racing imagery",
            "print/grain texture",
            "R/001 build identity",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p className="revival-case__note">
          Typography used in the prototype: Barlow Condensed, Inter and IBM Plex Mono.
        </p>
      </section>

      <section className="revival-case__masters">
        <div className="revival-case__masters-intro">
          <p className="revival-case__eyebrow">06 / High-Fidelity Product Concept</p>
          <h2>Approved Revival product concepts.</h2>
          <p>
            These are high-fidelity product concepts, not screenshots of a launched production
            application. Click any design to inspect it at full size.
          </p>
        </div>
        {masterScreens.map((screen, index) => (
          <figure
            key={screen.image}
            className={`revival-case__master revival-case__master--${index % 2 === 0 ? "wide" : "offset"}`}
          >
            <Link href={assetPath(screen.image)} target="_blank" rel="noreferrer">
              <Image
                src={assetPath(screen.image)}
                alt={`Revival ${screen.title} high-fidelity concept`}
                width={768}
                height={512}
                unoptimized
                sizes="(max-width: 900px) 100vw, 84vw"
              />
            </Link>
            <figcaption>
              <span>{screen.label}</span>
              <p>{screen.title}</p>
              <Link href={assetPath(screen.image)} target="_blank" rel="noreferrer">
                Open full-size design ↗
              </Link>
            </figcaption>
          </figure>
        ))}
      </section>

      <CaseSection label="07 / Interaction Concept" title="The motorcycle is the interface.">
        <p>
          The intended interaction model is select, see it on your bike, refine. Component choices
          accumulate rather than resetting between workshops. Original / Live Build allows the rider
          to compare the starting motorcycle with the current design, while Build Tape records the
          important decisions across the build.
        </p>
        <p>
          A rider could eventually mark components using concepts such as KEEP, CHANGE, REMOVE, LOCK
          and MODIFY. LOCK represents an instruction to preserve an important decision during later
          visual generation.
        </p>
      </CaseSection>

      <CaseSection label="08 / AI Role" title="Deterministic configuration first. Generative visualisation later.">
        <p>
          Revival is not intended to regenerate the motorcycle every time a user clicks an option.
          The proposed system separates deterministic component-level preview from generative
          visualisation for the final polished concept.
        </p>
        <p>
          This keeps component choices predictable while allowing AI to create a cohesive final
          representation of the intended build.
        </p>
      </CaseSection>

      <CaseSection label="09 / Rider → Workshop" title="A visual communication layer for workshop conversations.">
        <p>
          Instead of arriving with disconnected reference photographs and verbal descriptions, the
          rider could communicate a coherent intended build. The workshop would still determine
          feasibility, safety, fabrication requirements, compatible parts, engineering decisions and
          final cost.
        </p>
        <p>Revival communicates design intent; it does not replace workshop expertise.</p>
      </CaseSection>

      <section className="revival-case__next">
        <p className="revival-case__eyebrow">10 / What I Would Test Next</p>
        <h2>Future work, not claimed validation.</h2>
        <ul>
          {nextSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </section>

      <section className="revival-case__closing">
        <Image
          src={assetPath("/projects/revival/masters/01-tank-colour-decals.png")}
          alt="Revival Tank master design closing visual"
          fill
          unoptimized
          sizes="100vw"
        />
        <div>
          <p>BUILD IT</p>
          <p>BEFORE YOU</p>
          <p>BUILD IT.</p>
          <span>REVIVAL / R001</span>
        </div>
      </section>
    </article>
  );
}

function CaseSection({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="revival-case__section">
      <p className="revival-case__eyebrow">{label}</p>
      <h2>{title}</h2>
      <div className="revival-case__prose">{children}</div>
    </section>
  );
}
