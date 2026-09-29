import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/asset-path";

type View = {
  name: string;
  accent: string;
  route: string;
  image: string;
  summary: string;
  description: string;
  helps: string[];
};

const ecosystem = [
  {
    name: "Snowflake",
    logo: "/logos/pulse-ops/snowflake.svg",
    role: "Data foundation",
    accent: "snowflake",
    items: ["Customer profiles", "Product usage & events", "Subscriptions & billing", "Support history"],
  },
  {
    name: "Hightouch",
    logo: "/logos/pulse-ops/hightouch.png",
    role: "Data activation",
    accent: "hightouch",
    items: ["Reverse ETL", "Audience sync", "Lifecycle segmentation", "Risk-score activation"],
  },
  {
    name: "Braze",
    logo: "/logos/pulse-ops/braze.svg",
    role: "Customer engagement",
    accent: "braze",
    items: ["Lifecycle journeys", "Cross-channel messaging", "Onboarding & adoption", "Retention & renewal"],
  },
  {
    name: "Pulse-Ops AI",
    role: "Intelligence & operations",
    accent: "pulse",
    items: [
      "Account health monitoring",
      "AI-powered signals",
      "Workflow performance",
      "Recommended next actions",
    ],
  },
];

const progression = [
  ["Data", "Centralise & prepare"],
  ["Activate", "Sync & enrich"],
  ["Engage", "Orchestrate journeys"],
  ["Understand", "Detect, prioritise, recommend"],
  ["Act", "Intervene & improve"],
];

const process = [
  {
    number: "01",
    title: "Monitor",
    body: "Track customer health, lifecycle movement, workflow activity and system events across the ecosystem.",
  },
  {
    number: "02",
    title: "Detect",
    body: "Identify anomalies, risks and opportunities using real-time data and AI analysis.",
  },
  {
    number: "03",
    title: "Prioritise",
    body: "Rank signals by impact, severity and confidence so teams understand what matters.",
  },
  {
    number: "04",
    title: "Recommend & Act",
    body: "Surface clear next actions and enable teams to intervene through existing workflows and tools.",
  },
];

const views: View[] = [
  {
    name: "Command",
    accent: "blue",
    route: "/projects/pulse-ops/command",
    image: "/projects/pulse-ops/screen-command-full.png",
    summary: "Operational control centre.",
    description:
      "Brings together customer health, workflows, AI signals, priority actions, recent events and integration status.",
    helps: ["Leadership", "Lifecycle Operations", "Marketing Operations"],
  },
  {
    name: "Lifecycle",
    accent: "green",
    route: "/projects/pulse-ops/lifecycle",
    image: "/projects/pulse-ops/screen-lifecycle-full.png",
    summary: "Customer portfolio intelligence.",
    description:
      "Tracks accounts through onboarding, activation, adoption, renewal and intervention while exposing account health and lifecycle progression.",
    helps: ["Customer Success", "Account Management", "Lifecycle Marketing"],
  },
  {
    name: "Workflows",
    accent: "purple",
    route: "/projects/pulse-ops/workflows",
    image: "/projects/pulse-ops/screen-workflows-full.png",
    summary: "Lifecycle automation and orchestration.",
    description:
      "Shows active and paused workflows, triggers, completion performance, orchestration paths and AI recommendations.",
    helps: ["CRM", "Marketing Automation", "Lifecycle Marketing", "Marketing Operations"],
  },
  {
    name: "Signals",
    accent: "red",
    route: "/projects/pulse-ops/signals",
    image: "/projects/pulse-ops/screen-signals-full.png",
    summary: "AI-powered operational intelligence.",
    description:
      "Surfaces risks, anomalies and opportunities together with severity, AI confidence and recommended next actions.",
    helps: ["Lifecycle Operations", "Customer Success", "Revenue Operations", "Leadership"],
  },
  {
    name: "Events",
    accent: "amber",
    route: "/projects/pulse-ops/events",
    image: "/projects/pulse-ops/screen-events-full.png",
    summary: "Real-time operational activity.",
    description:
      "Shows customer, product, support and lifecycle events feeding Pulse-Ops and identifies their source, severity and timing.",
    helps: ["Operations", "Product", "Support", "Technical teams"],
  },
  {
    name: "Stack",
    accent: "slate",
    route: "/projects/pulse-ops/stack",
    image: "/projects/pulse-ops/screen-stack-full.png",
    summary: "Technology architecture and system health.",
    description:
      "Explains how data moves through the ecosystem, what each layer is responsible for and whether connected systems are operational.",
    helps: ["Marketing Operations", "Data / Engineering", "CRM Platform Owners", "Technical Operations"],
  },
];

const signalJourney = [
  {
    step: "01",
    label: "Data",
    system: "Snowflake",
    body: "Declining engagement patterns are detected across a group of mid-market accounts.",
  },
  {
    step: "02",
    label: "Activate",
    system: "Hightouch",
    body: "Relevant customer attributes, lifecycle segments and risk indicators are synchronised into operational systems.",
  },
  {
    step: "03",
    label: "Engage",
    system: "Braze",
    body: "Affected customers can enter the appropriate lifecycle / retention journey.",
  },
  {
    step: "04",
    label: "Identify",
    system: "Pulse-Ops AI",
    body: "Mid-market churn cluster. 8 accounts affected. 92% confidence. $25.6K MRR at risk.",
  },
  {
    step: "05",
    label: "Recommend",
    system: "Recommended Action",
    body: "Review affected accounts, activate retention workflow, monitor engagement and track for 14 days.",
  },
  {
    step: "06",
    label: "Act",
    system: "Operational response",
    body: "Review accounts and activate the workflow directly through existing customer operations tools.",
  },
];

const teams = [
  {
    name: "Executive & Leadership",
    question: "Where are our biggest risks and opportunities?",
    areas: ["Command", "Signals"],
  },
  {
    name: "Customer Success",
    question: "Which accounts need intervention?",
    areas: ["Lifecycle", "Signals"],
  },
  {
    name: "Lifecycle Marketing",
    question: "Which journeys are running and how are they performing?",
    areas: ["Workflows", "Lifecycle"],
  },
  {
    name: "Marketing Operations",
    question: "Are our workflows, data and integrations operating correctly?",
    areas: ["Workflows", "Stack"],
  },
  {
    name: "Data & Engineering",
    question: "Where is data coming from and is it moving correctly?",
    areas: ["Events", "Stack"],
  },
  {
    name: "Product & Support",
    question: "What customer behaviour or operational events are emerging?",
    areas: ["Events", "Signals"],
  },
];

export function PulseOpsOverviewPage() {
  return (
    <main className="pulse-overview" aria-labelledby="pulse-overview-title">
      <section className="site-container pulse-overview__hero pulse-overview__section">
        <div className="pulse-overview__hero-copy">
          <SectionLabel label="Technology / Operations / AI" />
          <h1 id="pulse-overview-title">
            Pulse-Ops <span>AI</span>
          </h1>
          <p className="pulse-overview__headline">
            A command centre for the customer lifecycle ecosystem.
          </p>
          <p className="pulse-overview__standfirst">
            A stack-agnostic intelligence layer for account health, lifecycle signals and recommended
            operational next actions.
          </p>
          <p className="pulse-overview__body-copy">
            Pulse-Ops AI brings together data, activation, engagement and operational signals into one
            environment — giving the organisation a real-time view of customer health, lifecycle activity
            and what to do next.
          </p>
          <div className="pulse-overview__actions">
            <Link href="/projects/pulse-ops/command" className="site-btn site-btn--ink">
              Explore the application →
            </Link>
            <a href="#how-it-works" className="site-btn site-btn--paper">
              See how it works ↓
            </a>
          </div>
        </div>
        <div className="pulse-overview__device-stage" aria-label="Pulse-Ops AI application mockups">
          <Image
            className="pulse-overview__device pulse-overview__device--laptop"
            src={assetPath("/projects/pulse-ops/mockup-macbook-office.png")}
            alt="Pulse-Ops AI Command view shown on a MacBook in an office setting"
            width={1280}
            height={720}
            priority
          />
          <Image
            className="pulse-overview__device pulse-overview__device--tablet"
            src={assetPath("/projects/pulse-ops/mockup-ipad.png")}
            alt="Pulse-Ops AI shown on an iPad"
            width={1280}
            height={720}
          />
          <Image
            className="pulse-overview__device pulse-overview__device--phone"
            src={assetPath("/projects/pulse-ops/mockup-iphone.png")}
            alt="Pulse-Ops AI shown on an iPhone"
            width={1280}
            height={720}
          />
        </div>
      </section>

      <section className="site-container pulse-overview__section pulse-overview__ecosystem">
        <SectionHeader
          label="The customer lifecycle ecosystem"
          title="From data to action across your lifecycle stack."
          copy="Pulse-Ops AI sits above the existing technology ecosystem, connecting customer data, activation and engagement with operational intelligence and recommended next actions."
        />
        <div className="pulse-overview__stack-flow" aria-label="Snowflake to Hightouch to Braze to Pulse-Ops AI">
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
        <p className="pulse-overview__note">
          Snowflake → Hightouch → Braze → Pulse-Ops AI represents the selected stack for this project.
          Pulse-Ops remains stack-agnostic: an intelligence layer that can sit across an organisation&apos;s
          existing lifecycle ecosystem.
        </p>
      </section>

      <section id="how-it-works" className="site-container pulse-overview__section">
        <SectionHeader
          label="How Pulse-Ops operates"
          title="Turn lifecycle data into operational intelligence."
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
          label="Six connected operational views"
          title="One ecosystem. Six operational views."
          copy="Each area focuses on a different part of the customer lifecycle, from high-level operational visibility to detailed workflow, signal and system intelligence."
        />
        <div className="pulse-overview__view-grid">
          {views.map((view) => (
            <Link className={`pulse-overview__view-card pulse-overview__view-card--${view.accent}`} href={view.route} key={view.name}>
              <figure>
                <Image src={assetPath(view.image)} alt={`${view.name} screen from Pulse-Ops AI`} width={900} height={1000} />
              </figure>
              <div>
                <h3>{view.name}</h3>
                <strong>{view.summary}</strong>
                <p>{view.description}</p>
                <ul>
                  {view.helps.map((team) => (
                    <li key={team}>{team}</li>
                  ))}
                </ul>
                <span>Explore {view.name} →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="site-container pulse-overview__section pulse-overview__signal">
        <SectionHeader
          label="From signal to action"
          title="An example: mid-market churn cluster."
          copy="How Pulse-Ops AI turns data into a clear, actionable next step."
        />
        <div className="pulse-overview__signal-flow">
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
          label="Designed for the whole organisation"
          title="Different teams. A shared operational view."
          copy="Pulse-Ops AI provides relevant operational intelligence to different teams across the customer lifecycle while maintaining a shared view of the same ecosystem."
        />
        <div className="pulse-overview__team-grid">
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
        <SectionLabel label="Explore Pulse-Ops AI" />
        <div className="pulse-overview__final-grid">
          <div>
            <h2>See the complete application.</h2>
            <p>Six connected views. One customer lifecycle ecosystem.</p>
          </div>
          <div className="pulse-overview__final-actions">
            <Link href="/projects/pulse-ops/command" className="site-btn site-btn--ink">
              Launch Pulse-Ops AI →
            </Link>
            <nav aria-label="Pulse-Ops application views">
              {views.map((view) => (
                <Link href={view.route} key={view.name}>
                  {view.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </main>
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
  if (item.logo) {
    return (
      <div className="pulse-overview__logo-block">
        <Image src={assetPath(item.logo)} alt={`${item.name} logo`} width={190} height={72} unoptimized />
        <span>{item.name}</span>
      </div>
    );
  }

  return (
    <div className="pulse-overview__logo-block pulse-overview__logo-block--pulse">
      <span>
        Pulse-Ops <em>AI</em>
      </span>
    </div>
  );
}
