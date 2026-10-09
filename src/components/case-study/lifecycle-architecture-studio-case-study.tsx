import Image from "next/image";
import Link from "next/link";
import { LaptopFrame } from "@/components/ui/device-frame";
import { assetPath } from "@/lib/asset-path";
import { getProject } from "@/lib/projects";

const ecosystem = [
  {
    name: "Data",
    role: "Warehouse & identity",
    accent: "data",
    items: ["Snowflake", "Unified profiles", "Event history", "Source of truth"],
  },
  {
    name: "CRM",
    role: "Customer record",
    accent: "crm",
    items: ["Salesforce", "Account context", "Lifecycle stages", "Service history"],
  },
  {
    name: "Activation",
    role: "Reverse ETL",
    accent: "activation",
    items: ["Hightouch", "Audience sync", "Modelled traits", "Destination routing"],
  },
  {
    name: "Engagement",
    role: "Orchestration",
    accent: "engagement",
    items: ["Braze", "Journeys", "Campaigns", "In-product messaging"],
  },
  {
    name: "Analytics",
    role: "Behaviour & measurement",
    accent: "analytics",
    items: ["Segment", "Event capture", "Funnel visibility", "Experimentation"],
  },
  {
    name: "AI",
    role: "Intelligence layer",
    accent: "ai",
    items: ["OpenAI", "Assistive workflows", "Signal enrichment", "Next-best action"],
  },
];

const progression = [
  ["Overview", "See the architecture centrepiece and loop"],
  ["Explore", "Learn capability categories first"],
  ["Journey", "Follow one customer example"],
  ["Align", "Share a clearer picture"],
];

const process = [
  {
    number: "01",
    title: "Overview",
    body:
      "Start with the architecture diagram and Customer Data → Personalisation Loop to see how signals become experiences.",
  },
  {
    number: "02",
    title: "Technology Explorer",
    body:
      "Browse eight capability categories — role first, then representative vendors — without treating one stack as the only answer.",
  },
  {
    number: "03",
    title: "Customer Journey",
    body:
      "Step through welcome onboarding to see ingestion, modelling, activation and engagement working for an individual customer.",
  },
];

const signalJourney = [
  {
    step: "01",
    label: "Question",
    system: "Architecture gap",
    body: "A team needs to explain how CRM, data and engagement platforms connect for a lifecycle initiative.",
  },
  {
    step: "02",
    label: "Reference",
    system: "Pattern library",
    body: "Lifecycle Architecture Studio opens on a reference model such as Modern Composable or Customer 360.",
  },
  {
    step: "03",
    label: "Traverse",
    system: "Interactive map",
    body: "Users explore platform roles, integrations and data flows without reading a static diagram deck.",
  },
  {
    step: "04",
    label: "Compare",
    system: "Alternate stacks",
    body: "Switching patterns reveals how maturity, tooling and orchestration change across architectures.",
  },
  {
    step: "05",
    label: "Adapt",
    system: "Custom stack",
    body: "Teams adjust the model to reflect their own vendors, flows and lifecycle priorities.",
  },
  {
    step: "06",
    label: "Align",
    system: "Shared language",
    body: "Stakeholders leave with a clearer picture of how the ecosystem fits together.",
  },
];

const teams = [
  {
    name: "Marketing / CRM",
    question: "Which systems power our journeys?",
    areas: ["Braze", "Salesforce"],
  },
  {
    name: "Data / Analytics",
    question: "Where does customer data live and flow?",
    areas: ["Snowflake", "Segment"],
  },
  {
    name: "RevOps / Lifecycle",
    question: "How do activation and engagement connect?",
    areas: ["Hightouch", "Traits"],
  },
  {
    name: "Product / AI",
    question: "Where does intelligence sit in the stack?",
    areas: ["OpenAI", "Signals"],
  },
];

export function LifecycleArchitectureStudioCaseStudy() {
  const project = getProject("lifecycle-architecture-studio");
  if (!project) return null;

  return (
    <article
      className="pulse-overview lifecycle-studio-overview"
      aria-labelledby="lifecycle-studio-title"
    >
      <section className="site-container pulse-overview__hero pulse-overview__section">
        <div className="pulse-overview__hero-copy">
          <SectionLabel label="CRM / Customer Experience / Journey Architecture" />
          <h1 id="lifecycle-studio-title" className="lifecycle-studio-overview__title">
            <span className="lifecycle-studio-overview__title-line">Lifecycle Architecture</span>
            <span className="lifecycle-studio-overview__title-accent">Studio</span>
          </h1>
          <p className="pulse-overview__headline">
            An interactive explorer for modern CRM, data, activation, engagement, analytics and AI ecosystems.
          </p>
          <p className="pulse-overview__standfirst">
            Lifecycle Architecture Studio helps teams understand how capability categories — CRM, collection, warehouse,
            transformation, activation, engagement, AI and analytics — connect within a representative composable
            stack.
          </p>
          <p className="pulse-overview__body-copy">
            The live app has three sections: an architecture overview with a personalisation loop, a technology
            explorer organised by capability, and a step-through customer journey that shows the stack working for one
            person.
          </p>
          <div className="pulse-overview__actions">
            <Link href={project.liveUrl} className="site-btn site-btn--ink">
              Open studio app →
            </Link>
            {project.externalDemoUrl ? (
              <Link href={project.externalDemoUrl} target="_blank" rel="noreferrer" className="site-btn site-btn--paper">
                GitHub demo ↗
              </Link>
            ) : (
              <a href="#how-lifecycle-studio-works" className="site-btn site-btn--paper">
                See how it works ↓
              </a>
            )}
          </div>
        </div>
        <figure className="pulse-overview__hero-visual lifecycle-studio-overview__hero-visual">
          <LaptopFrame
            slides={project.previewImagesDesktop ?? [project.previewImageDesktop]}
            rotationIntervalMs={project.previewRotationIntervalMs}
            alt="Lifecycle Architecture Studio on MacBook"
            label="Desktop"
            fallbackTitle={project.name}
            fallbackCopy={project.tagline}
            accentClass={project.accent}
            priority
            imageFit="cover"
            screenBg="#0b1020"
          />
        </figure>
      </section>

      <section className="site-container pulse-overview__section lifecycle-studio-overview__problem">
        <SectionHeader
          label="Original problem"
          title="Lifecycle stacks are powerful, but hard to see as one system."
          copy="CRM, warehouse, reverse-ETL, engagement, analytics and AI tools each solve part of the customer journey — yet teams still struggle to explain how they fit together. Lifecycle Architecture Studio turns that complexity into an explorable map."
        />
        <div className="pulse-overview__process lifecycle-studio-overview__problem-points">
          <article className="pulse-overview__process-card">
            <span>01</span>
            <h3>Platforms multiplied</h3>
            <p>Modern lifecycle teams rely on many best-of-breed tools instead of one monolithic stack.</p>
          </article>
          <article className="pulse-overview__process-card">
            <span>02</span>
            <h3>Diagrams aged quickly</h3>
            <p>Static architecture slides rarely keep pace with new integrations and operating models.</p>
          </article>
          <article className="pulse-overview__process-card">
            <span>03</span>
            <h3>Roles saw different slices</h3>
            <p>Marketing, data, RevOps and product teams often describe the same stack in different language.</p>
          </article>
          <article className="pulse-overview__process-card">
            <span>04</span>
            <h3>Alignment took time</h3>
            <p>Workshops and documentation were needed before teams could agree on flows and dependencies.</p>
          </article>
        </div>
      </section>

      <section className="site-container pulse-overview__section pulse-overview__ecosystem">
        <SectionHeader
          label="Lifecycle ecosystem"
          title="From data foundation to engagement and intelligence."
          copy="The studio organises the stack around the platforms and flows teams need to discuss most: data, CRM, activation, engagement, analytics and AI."
        />
        <div
          className="pulse-overview__stack-flow lifecycle-studio-overview__stack-flow"
          aria-label="Data to CRM to Activation to Engagement to Analytics to AI"
        >
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

      <section id="how-lifecycle-studio-works" className="site-container pulse-overview__section">
        <SectionHeader
          label="How the studio works"
          title="Three sections. One composable lifecycle story."
          copy="Overview, Technology Explorer and Customer Journey keep the workflow focused on comprehension — not a maze of tabs or static screenshots."
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
          title="Interactive V14 studio — not static diagrams."
          copy="Open the app for the full graphite/copper experience: architecture connectors, capability-first technology explorer and an eight-step welcome journey."
        />
        <div className="pulse-overview__view-grid lifecycle-studio-overview__view-grid">
          <article className="pulse-overview__view-card pulse-overview__view-card--blue">
            <figure>
              <Image
                src={assetPath("/projects/lifecycle-architecture-studio/modern-composable.png")}
                alt="Lifecycle Architecture Studio overview architecture"
                width={1024}
                height={640}
                loading="eager"
              />
            </figure>
            <div>
              <h3>Overview</h3>
              <strong>Architecture + personalisation loop.</strong>
              <p>
                Representative channels, systems and sources with deliberate connector paths, plus a simple loop from
                behaviour to personalised communication and back into customer data.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="site-container pulse-overview__section pulse-overview__signal">
        <SectionHeader
          label="Question to alignment"
          title="An example: explaining a modern lifecycle stack."
          copy="How teams use the studio to move from a vague integration question to a shared architectural picture."
        />
        <div className="pulse-overview__signal-flow lifecycle-studio-overview__signal-flow">
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
          title="Different lifecycle stakeholders. One explorable map."
          copy="The studio gives marketing, data, RevOps and product teams a shared artefact for discussing platforms, flows and dependencies."
        />
        <div className="pulse-overview__team-grid lifecycle-studio-overview__team-grid">
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
        <SectionLabel label="Explore Lifecycle Architecture Studio" />
        <div className="pulse-overview__final-grid">
          <div>
            <h2>Make complex lifecycle stacks easier to explain.</h2>
            <p>Interactive architecture exploration for CRM, data, activation, engagement, analytics and AI.</p>
          </div>
          <div className="pulse-overview__final-actions">
            <Link href={project.liveUrl} className="site-btn site-btn--ink">
              Open studio app →
            </Link>
            <nav aria-label="Related portfolio projects">
              <Link href="/projects/pulse-ops">Pulse-Ops AI</Link>
              <Link href="/projects/sprintiq">SprintIQ</Link>
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
    <div
      className={`pulse-overview__logo-block lifecycle-studio-overview__logo-block lifecycle-studio-overview__logo-block--${item.accent}`}
    >
      <span>{item.name}</span>
    </div>
  );
}
