import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/asset-path";
import { getProject } from "@/lib/projects";

type SprintIQView = {
  name: string;
  accent: string;
  image: string;
  summary: string;
  description: string;
  helps: string[];
};

const ecosystem = [
  {
    name: "Objective",
    role: "Business goal",
    accent: "objective",
    items: ["Strategic intent", "Example scenarios", "Success direction", "Planning prompt"],
  },
  {
    name: "SprintIQ",
    role: "Delivery strategist",
    accent: "sprintiq",
    items: ["Plan structure", "Stakeholder map", "Risk framing", "Execution logic"],
  },
  {
    name: "Blueprint",
    role: "Delivery plan",
    accent: "blueprint",
    items: ["Initiatives", "Milestones", "Dependencies", "Executive summary"],
  },
  {
    name: "Copilot",
    role: "Review and refinement",
    accent: "copilot",
    items: ["Challenge the plan", "Prioritise", "Ask follow-ups", "Sharpen messaging"],
  },
  {
    name: "Ready",
    role: "Leadership output",
    accent: "ready",
    items: ["Executive brief", "Timeline", "Risks", "Delivery package"],
  },
];

const progression = [
  ["Goal", "Define the business objective"],
  ["Plan", "Generate a structured blueprint"],
  ["Risk", "Expose dependencies and gaps"],
  ["Review", "Refine with Copilot"],
  ["Deliver", "Export the leadership-ready plan"],
];

const process = [
  {
    number: "01",
    title: "Capture",
    body: "Start with a business objective, example scenario or planning prompt that needs to become actionable.",
  },
  {
    number: "02",
    title: "Structure",
    body: "Translate the objective into initiatives, stakeholders, milestones, risks and delivery priorities.",
  },
  {
    number: "03",
    title: "Review",
    body: "Use Copilot to challenge the blueprint, test assumptions and sharpen the plan before it is shared.",
  },
  {
    number: "04",
    title: "Deliver",
    body: "Package the plan into executive-ready outputs that can support alignment and delivery conversations.",
  },
];

const views: SprintIQView[] = [
  {
    name: "Objective",
    accent: "blue",
    image: "/projects/sprintiq/objective.png",
    summary: "Start with the goal.",
    description:
      "SprintIQ begins with a business objective or pre-built scenario, giving teams a clear starting point for delivery planning.",
    helps: ["Objective", "Scenarios", "Planning prompt"],
  },
  {
    name: "Blueprint",
    accent: "green",
    image: "/projects/sprintiq/blueprint.png",
    summary: "A delivery plan appears.",
    description:
      "The generated blueprint turns the objective into initiatives, stakeholders and execution detail that can be reviewed by the team.",
    helps: ["Initiatives", "Stakeholders", "Executive summary"],
  },
  {
    name: "Review",
    accent: "purple",
    image: "/projects/sprintiq/review.png",
    summary: "Challenge and refine.",
    description:
      "Copilot gives the plan a review layer, helping teams question risk, prioritisation and executive messaging before the plan is final.",
    helps: ["Copilot", "Risks", "Priorities"],
  },
  {
    name: "Ready",
    accent: "amber",
    image: "/projects/sprintiq/ready.png",
    summary: "Prepared for delivery.",
    description:
      "The final state packages the plan into outputs such as executive summary, stakeholder map, risks, timeline and brief.",
    helps: ["Export", "Timeline", "Leadership brief"],
  },
];

const signalJourney = [
  {
    step: "01",
    label: "Objective",
    system: "Business goal",
    body: "A team needs to turn an outcome such as renewal uplift, onboarding improvement or churn reduction into a plan.",
  },
  {
    step: "02",
    label: "Prompt",
    system: "Sprint Studio",
    body: "The objective is entered directly or selected from an example planning scenario.",
  },
  {
    step: "03",
    label: "Blueprint",
    system: "Generated plan",
    body: "SprintIQ structures initiatives, stakeholders, risks and execution detail into a delivery-ready blueprint.",
  },
  {
    step: "04",
    label: "Review",
    system: "Copilot",
    body: "The plan can be challenged, reprioritised and refined before it is treated as final.",
  },
  {
    step: "05",
    label: "Package",
    system: "Ready state",
    body: "Executive summary, timeline, risks and delivery outputs are prepared for sharing.",
  },
  {
    step: "06",
    label: "Alignment",
    system: "Delivery conversation",
    body: "Teams have a structured artefact to support stakeholder alignment and execution planning.",
  },
];

const teams = [
  {
    name: "Leadership / Sponsors",
    question: "What is the plan and where are the risks?",
    areas: ["Summary", "Risks"],
  },
  {
    name: "Project / Operations",
    question: "What needs to happen and in what order?",
    areas: ["Milestones", "Timeline"],
  },
  {
    name: "Product / Data",
    question: "Which dependencies and decisions need attention?",
    areas: ["Dependencies", "Inputs"],
  },
  {
    name: "Customer / Revenue Teams",
    question: "How does this initiative support the business outcome?",
    areas: ["Objective", "Stakeholders"],
  },
];

export function SprintIQCaseStudy() {
  const project = getProject("sprintiq");
  if (!project) return null;

  return (
    <article className="pulse-overview sprintiq-overview" aria-labelledby="sprintiq-title">
      <section className="site-container pulse-overview__hero pulse-overview__section">
        <div className="pulse-overview__hero-copy">
          <SectionLabel label="AI / Delivery / Product Design" />
          <h1 id="sprintiq-title">
            Sprint<span>IQ</span>
          </h1>
          <p className="pulse-overview__headline">
            An AI delivery strategist that turns business objectives into structured execution plans.
          </p>
          <p className="pulse-overview__standfirst">
            SprintIQ helps teams move from an initial goal to a delivery-ready blueprint with initiatives,
            stakeholders, risks, timeline and executive-ready outputs.
          </p>
          <p className="pulse-overview__body-copy">
            The product is designed around the planning moments where teams need clarity quickly: defining the
            objective, building the blueprint, challenging assumptions and preparing a plan that can be shared.
          </p>
          <div className="pulse-overview__actions">
            <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="site-btn site-btn--ink">
              Open live demo →
            </Link>
            <a href="#how-sprintiq-works" className="site-btn site-btn--paper">
              See how it works ↓
            </a>
          </div>
        </div>
        <figure className="pulse-overview__hero-visual sprintiq-overview__hero-visual">
          <Image
            className="sprintiq-overview__hero-image"
            src={assetPath("/projects/sprintiq-desktop.png")}
            alt="SprintIQ objective screen"
            width={1024}
            height={640}
            priority
          />
        </figure>
      </section>

      <section className="site-container pulse-overview__section sprintiq-overview__problem">
        <SectionHeader
          label="Original problem"
          title="Business goals often need to become delivery plans before teams can act on them."
          copy="Turning an objective into initiatives, stakeholders, risks, timelines and leadership updates can take significant manual planning and coordination. SprintIQ explores how that early planning work could become faster, clearer and easier to review."
        />
        <div className="pulse-overview__process sprintiq-overview__problem-points">
          <article className="pulse-overview__process-card">
            <span>01</span>
            <h3>Objectives were broad</h3>
            <p>Teams often start with an outcome before the work, ownership and delivery shape are clear.</p>
          </article>
          <article className="pulse-overview__process-card">
            <span>02</span>
            <h3>Planning took effort</h3>
            <p>Stakeholders, dependencies and risks usually need to be reconstructed manually.</p>
          </article>
          <article className="pulse-overview__process-card">
            <span>03</span>
            <h3>Plans needed challenge</h3>
            <p>The first version of a plan still needs review, prioritisation and executive framing.</p>
          </article>
          <article className="pulse-overview__process-card">
            <span>04</span>
            <h3>Outputs needed polish</h3>
            <p>Teams need a format that supports alignment, decision-making and delivery conversations.</p>
          </article>
        </div>
      </section>

      <section className="site-container pulse-overview__section pulse-overview__ecosystem">
        <SectionHeader
          label="Delivery planning system"
          title="From business objective to delivery-ready blueprint."
          copy="SprintIQ is organised around the core planning journey: capture the objective, generate structure, refine the plan and prepare it for delivery."
        />
        <div className="pulse-overview__stack-flow sprintiq-overview__stack-flow" aria-label="Objective to SprintIQ to Blueprint to Copilot to Ready">
          {ecosystem.map((item, index) => (
            <div className="pulse-overview__stack-step-wrap" key={item.name}>
              <article className={`pulse-overview__stack-card pulse-overview__stack-card--${item.accent}`}>
                <LogoBlock item={item} />
                <p>{item.role}</p>
                <ul>
                  {item.items.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              </article>
              {index < ecosystem.length - 1 ? <span className="pulse-overview__connector" aria-hidden>→</span> : null}
            </div>
          ))}
        </div>
        <div className="pulse-overview__progression">
          {progression.map(([title, body], index) => (
            <div className="pulse-overview__progression-item" key={title}>
              <span>{title}</span>
              <p>{body}</p>
              {index < progression.length - 1 ? <i aria-hidden /> : null}
            </div>
          ))}
        </div>
      </section>

      <section id="how-sprintiq-works" className="site-container pulse-overview__section">
        <SectionHeader
          label="How SprintIQ operates"
          title="Move from prompt to plan to delivery package."
          copy="The product keeps the workflow simple: define the objective, let SprintIQ structure the blueprint, challenge the plan with Copilot and prepare the output for sharing."
        />
        <div className="pulse-overview__process">
          {process.map((item, index) => (
            <article className="pulse-overview__process-card" key={item.title}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              {index < process.length - 1 ? <i aria-hidden>→</i> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="site-container pulse-overview__section pulse-overview__views">
        <SectionHeader
          label="Real product experience"
          title="Four connected planning states."
          copy="The existing SprintIQ UI shows the main workflow: Objective, Blueprint, Review and Ready."
        />
        <div className="pulse-overview__view-grid sprintiq-overview__view-grid">
          {views.map((view) => (
            <article className={`pulse-overview__view-card pulse-overview__view-card--${view.accent}`} key={view.name}>
              <figure>
                <Image src={assetPath(view.image)} alt={`${view.name} screen from SprintIQ`} width={1024} height={640} loading="eager" />
              </figure>
              <div>
                <h3>{view.name}</h3>
                <strong>{view.summary}</strong>
                <p>{view.description}</p>
                <ul>
                  {view.helps.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="site-container pulse-overview__section pulse-overview__signal">
        <SectionHeader
          label="Objective to delivery"
          title="An example: renewal uplift planning."
          copy="How SprintIQ turns an initial business outcome into a structured artefact that can support alignment."
        />
        <div className="pulse-overview__signal-flow sprintiq-overview__signal-flow">
          {signalJourney.map((item, index) => (
            <article className="pulse-overview__signal-card" key={item.step}>
              <span>{item.step}</span>
              <p>{item.label}</p>
              <h3>{item.system}</h3>
              <small>{item.body}</small>
              {index < signalJourney.length - 1 ? <i aria-hidden>→</i> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="site-container pulse-overview__section">
        <SectionHeader
          label="Who it serves"
          title="Different planning users. One shared blueprint."
          copy="SprintIQ is not just a task generator. It gives different planning participants a shared artefact they can review, challenge and use for alignment."
        />
        <div className="pulse-overview__team-grid sprintiq-overview__team-grid">
          {teams.map((team) => (
            <article className="pulse-overview__team-card" key={team.name}>
              <h3>{team.name}</h3>
              <p>{team.question}</p>
              <div>
                {team.areas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="site-container pulse-overview__section pulse-overview__final-cta">
        <SectionLabel label="Explore SprintIQ" />
        <div className="pulse-overview__final-grid">
          <div>
            <h2>Turn an objective into a delivery blueprint.</h2>
            <p>AI-assisted planning for initiatives, risks, stakeholders, timelines and executive-ready outputs.</p>
          </div>
          <div className="pulse-overview__final-actions">
            <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="site-btn site-btn--ink">
              Launch SprintIQ →
            </Link>
            <nav aria-label="Related portfolio projects">
              <Link href="/projects/pulse-ops">Pulse-Ops AI</Link>
              <Link href="/projects/gen-pulse">Gen Pulse</Link>
              <Link href="/#projects">All projects</Link>
            </nav>
          </div>
        </div>
      </section>
    </article>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <p className="site-label pulse-overview__label">
      <span>{label}</span>
    </p>
  );
}

function SectionHeader({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return (
    <header className="pulse-overview__section-header">
      <SectionLabel label={label} />
      <div>
        <h2>{title}</h2>
        {copy ? <p>{copy}</p> : null}
      </div>
    </header>
  );
}

function LogoBlock({ item }: { item: (typeof ecosystem)[number] }) {
  return (
    <div className={`pulse-overview__logo-block sprintiq-overview__logo-block sprintiq-overview__logo-block--${item.accent}`}>
      <span>{item.name}</span>
    </div>
  );
}
