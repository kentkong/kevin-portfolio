import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/asset-path";
import { getProject } from "@/lib/projects";

type GenPulseView = {
  name: string;
  accent: string;
  image: string;
  summary: string;
  description: string;
  helps: string[];
};

const ecosystem = [
  {
    name: "Jira",
    logo: "/logos/about/jira.svg",
    role: "Work & ticket activity",
    accent: "jira",
    items: ["Current work", "Ticket movement", "Sprint backlog", "Blocked delivery"],
  },
  {
    name: "Slack",
    logo: "/logos/gen-pulse/slack.svg",
    role: "Day-to-day team signals",
    accent: "slack",
    items: ["Team updates", "Blocker signals", "Escalation context", "Operational noise"],
  },
  {
    name: "Workday",
    logo: "/logos/gen-pulse/workday.svg",
    role: "People & availability",
    accent: "workday",
    items: ["Availability", "Upcoming leave", "Coverage gaps", "Team capacity"],
  },
  {
    name: "BI / Reporting",
    logo: "/logos/gen-pulse/bi-reporting.svg",
    role: "Performance context",
    accent: "reporting",
    items: ["SLA performance", "Weekly throughput", "Delivery metrics", "Trend reporting"],
  },
  {
    name: "Gen Pulse",
    role: "Shared command centre",
    accent: "gen",
    items: ["People", "Work", "Delivery", "KPIs", "Risk", "Action"],
  },
];

const progression = [
  ["People", "Availability & presence"],
  ["Work", "Jira activity & backlog"],
  ["Delivery", "Throughput & lifecycle"],
  ["Risk", "SLA, blockers & coverage"],
  ["Action", "Shared operational decisions"],
];

const process = [
  {
    number: "01",
    title: "Gather",
    body: "Bring current work, people, performance and day-to-day team signals into one operational layer.",
  },
  {
    number: "02",
    title: "Connect",
    body: "Read delivery activity alongside availability, workload, throughput and SLA pressure.",
  },
  {
    number: "03",
    title: "Prioritise",
    body: "Surface the blockers, coverage gaps and ageing risks that need attention first.",
  },
  {
    number: "04",
    title: "Act",
    body: "Support contributors, managers, directors and leadership with the right level of operational detail.",
  },
];

const views: GenPulseView[] = [
  {
    name: "Today at a glance",
    accent: "blue",
    image: "/projects/gen-pulse-desktop-dark.png",
    summary: "The operating snapshot.",
    description:
      "Online coverage, people out today, blockers and sprint to-do visible before the team has to reconstruct status manually.",
    helps: ["Team presence", "Blockers", "Sprint to-do"],
  },
  {
    name: "Weekly throughput",
    accent: "amber",
    image: "/projects/gen-pulse-desktop-light.png",
    summary: "Performance in context.",
    description:
      "SLA reporting, weekly throughput and ticket lifecycle metrics presented with the operational detail needed for leadership updates.",
    helps: ["SLA", "Throughput", "Lifecycle"],
  },
  {
    name: "Responsive command view",
    accent: "purple",
    image: "/projects/gen-pulse-tablet-light.png",
    summary: "The same product adapts to the workspace.",
    description:
      "The command-centre experience remains usable beyond the desktop, preserving the core hierarchy for tablet-sized review.",
    helps: ["Tablet", "Review", "Responsive"],
  },
  {
    name: "Mobile check-in",
    accent: "green",
    image: "/projects/gen-pulse-mobile-dark.png",
    summary: "Operational awareness on the move.",
    description:
      "A compact mobile view gives leaders and managers quick access to availability, blocker and priority information.",
    helps: ["Mobile", "Presence", "Risk"],
  },
];

const signalJourney = [
  {
    step: "01",
    label: "Work",
    system: "Jira",
    body: "Current ticket movement, backlog pressure and blockers show where delivery is slowing.",
  },
  {
    step: "02",
    label: "People",
    system: "Workday",
    body: "Availability, presence and upcoming leave explain whether the team has enough capacity.",
  },
  {
    step: "03",
    label: "Performance",
    system: "BI / Reporting",
    body: "SLA and throughput trends show whether operational pressure is increasing or reducing.",
  },
  {
    step: "04",
    label: "Signals",
    system: "Slack",
    body: "Day-to-day updates and blocker language add the live team context behind the metrics.",
  },
  {
    step: "05",
    label: "Decision",
    system: "Gen Pulse",
    body: "The command centre connects the signals so teams can rebalance work, manage risk and act sooner.",
  },
];

const teams = [
  {
    name: "Team Contributors",
    question: "What needs my attention and what is blocked?",
    areas: ["Work", "Blockers"],
  },
  {
    name: "Managers",
    question: "Where do I need to adjust workload or coverage?",
    areas: ["People", "Capacity"],
  },
  {
    name: "Directors",
    question: "Where are delivery, SLA or throughput risks emerging?",
    areas: ["Delivery", "SLA"],
  },
  {
    name: "Leadership",
    question: "Where are we right now, and what needs attention next?",
    areas: ["KPIs", "Risk"],
  },
];

export function GenPulseCaseStudy() {
  const project = getProject("gen-pulse");
  if (!project) return null;

  return (
    <article className="pulse-overview gen-pulse-overview" aria-labelledby="gen-pulse-title">
      <section className="site-container pulse-overview__hero pulse-overview__section">
        <div className="pulse-overview__hero-copy">
          <SectionLabel label="Team Operations / Delivery / Command Centre" />
          <h1 id="gen-pulse-title">Gen Pulse</h1>
          <p className="pulse-overview__headline">
            A team operations command centre for people, work, delivery and risk.
          </p>
          <p className="pulse-overview__standfirst">
            Built from the operational reality of managing the Norton Email team: SLA performance,
            throughput, Jira activity, availability and blockers all needed to be understood together.
          </p>
          <p className="pulse-overview__body-copy">
            Gen Pulse brings the most important team, delivery, people and performance information into one
            shared operational environment.
          </p>
          <div className="pulse-overview__actions">
            <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="site-btn site-btn--ink">
              Open live demo →
            </Link>
            <a href="#how-gen-pulse-works" className="site-btn site-btn--paper">
              See how it works ↓
            </a>
          </div>
        </div>
        <figure className="pulse-overview__hero-visual gen-pulse-overview__hero-visual">
          <GenPulseDeviceComposition />
        </figure>
      </section>

      <section className="site-container pulse-overview__section gen-pulse-overview__problem">
        <SectionHeader
          label="Original problem"
          title="The information existed. The operational picture did not."
          copy="While managing the Norton Email team, leadership regularly needed current SLA performance, weekly throughput, delivery metrics and team work status. Jira, reporting systems, Workday and Slack each held part of the answer. Gen Pulse began with one question."
        />
        <div className="gen-pulse-overview__question">
          WHAT IF THE MOST IMPORTANT OPERATIONAL INFORMATION COULD LIVE IN ONE SHARED COMMAND CENTRE?
        </div>
        <div className="pulse-overview__process gen-pulse-overview__problem-points">
          <article className="pulse-overview__process-card">
            <span>01</span>
            <h3>Fragmented systems</h3>
            <p>Work, people and performance information lived across multiple enterprise tools.</p>
          </article>
          <article className="pulse-overview__process-card">
            <span>02</span>
            <h3>Slow reconstruction</h3>
            <p>Answering “where are we right now?” meant gathering status from several places.</p>
          </article>
          <article className="pulse-overview__process-card">
            <span>03</span>
            <h3>Risk without context</h3>
            <p>SLA pressure, workload, blockers and team capacity were visible separately.</p>
          </article>
          <article className="pulse-overview__process-card">
            <span>04</span>
            <h3>Shared command view</h3>
            <p>The concept expanded to include availability, presence and leave alongside delivery risk.</p>
          </article>
        </div>
      </section>

      <section className="site-container pulse-overview__section pulse-overview__ecosystem">
        <SectionHeader
          label="Operational ecosystem"
          title="From enterprise systems to one team command centre."
          copy="Jira, Slack, Workday and BI / Reporting represent the Gen Pulse implementation example shown here. The wider concept is configurable around the operational systems relevant to a team."
        />
        <div className="pulse-overview__stack-flow" aria-label="Jira to Slack to Workday to BI Reporting to Gen Pulse">
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
          These systems are the case-study example. Gen Pulse is an extensible product concept, not a claim that every
          possible enterprise platform has been implemented.
        </p>
      </section>

      <section id="how-gen-pulse-works" className="site-container pulse-overview__section">
        <SectionHeader
          label="How Gen Pulse operates"
          title="Turn team activity into daily operational decisions."
          copy="The product is organised around the questions teams and leaders need answered throughout the day: who is available, what is moving, what is blocked, where risk is developing and what needs attention next?"
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
          title="One interface for visibility, capacity and delivery risk."
          copy="The actual Gen Pulse UI shows the operational evidence: Today at a glance, weekly throughput, average ticket lifecycle, sprint backlog, blockers, SLA pressure and mobile access."
        />
        <div className="pulse-overview__view-grid gen-pulse-overview__view-grid">
          {views.map((view) => (
            <article className={`pulse-overview__view-card pulse-overview__view-card--${view.accent}`} key={view.name}>
              <figure>
                <Image src={assetPath(view.image)} alt={`${view.name} screen from Gen Pulse`} width={900} height={1000} />
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
          label="Signal to decision"
          title="An example: coverage and SLA pressure."
          copy="How Gen Pulse connects work, people, performance and live team signals into a decision-ready operating view."
        />
        <div className="pulse-overview__signal-flow gen-pulse-overview__signal-flow">
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
          title="Different roles. One shared operational environment."
          copy="Team contributors, managers, directors and leadership can consume different levels of information from the same underlying operational data."
        />
        <div className="pulse-overview__team-grid gen-pulse-overview__team-grid">
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

      <section className="site-container pulse-overview__section gen-pulse-overview__evolution">
        <SectionHeader
          label="Product evolution"
          title="The command-centre thinking later influenced Pulse-Ops AI."
          copy="Gen Pulse remains a team operations project: people, availability, work, delivery, KPIs, SLA and risk. Its command-centre logic later informed the broader Pulse-Ops AI concept for customer lifecycle intelligence."
        />
        <div className="pulse-overview__team-grid gen-pulse-overview__evolution-grid">
          <article className="pulse-overview__team-card">
            <h3>Gen Pulse</h3>
            <p>Team operations intelligence for people, work, delivery, KPIs, SLA, risk and coverage.</p>
            <div><span>Team operations</span></div>
          </article>
          <article className="pulse-overview__team-card">
            <h3>Pulse-Ops AI</h3>
            <p>Customer lifecycle intelligence for health signals, workflows, AI recommendations and next actions.</p>
            <div><span>Lifecycle operations</span></div>
          </article>
        </div>
      </section>

      <section className="site-container pulse-overview__section pulse-overview__final-cta">
        <SectionLabel label="Explore Gen Pulse" />
        <div className="pulse-overview__final-grid">
          <div>
            <h2>See the operational command centre.</h2>
            <p>Real product screens for people, work, delivery, KPIs, SLA and risk.</p>
          </div>
          <div className="pulse-overview__final-actions">
            <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="site-btn site-btn--ink">
              Launch Gen Pulse →
            </Link>
            <nav aria-label="Related portfolio projects">
              <Link href="/projects/pulse-ops">Pulse-Ops AI</Link>
              <Link href="/#projects">All projects</Link>
            </nav>
          </div>
        </div>
      </section>
    </article>
  );
}

function GenPulseDeviceComposition() {
  return (
    <div className="gen-pulse-devices" aria-label="Gen Pulse shown on laptop, tablet and mobile">
      <div className="gen-pulse-devices__laptop">
        <Image
          src={assetPath("/projects/gen-pulse-desktop-dark.png")}
          alt="Gen Pulse desktop command centre in dark mode"
          width={1600}
          height={1000}
          priority
        />
      </div>
      <div className="gen-pulse-devices__tablet">
        <Image
          src={assetPath("/projects/gen-pulse-tablet-light.png")}
          alt="Gen Pulse tablet responsive command view"
          width={834}
          height={1112}
        />
      </div>
      <div className="gen-pulse-devices__phone">
        <Image
          src={assetPath("/projects/gen-pulse-mobile-dark.png")}
          alt="Gen Pulse mobile command view"
          width={393}
          height={852}
        />
      </div>
    </div>
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
      <div className={`pulse-overview__logo-block gen-pulse-overview__logo-block gen-pulse-overview__logo-block--${item.accent}`} aria-label={`${item.name} logo`}>
        <Image src={assetPath(item.logo)} alt={`${item.name} logo`} width={190} height={72} unoptimized />
      </div>
    );
  }

  return (
    <div className="pulse-overview__logo-block gen-pulse-overview__logo-block gen-pulse-overview__logo-block--gen" aria-label="Gen Pulse logo">
      <span>Gen <em>Pulse</em></span>
    </div>
  );
}
