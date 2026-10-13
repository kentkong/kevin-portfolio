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
    body: "Give teams and leaders the information needed for staffing, prioritisation, escalation and delivery decisions.",
  },
];

const views: GenPulseView[] = [
  {
    name: "Today at a glance",
    accent: "blue",
    image: "/projects/gen-pulse-today-at-glance.png",
    summary: "The operating snapshot.",
    description:
      "A fast view of who is online, who is out, where blockers exist and how much sprint work still needs attention.",
    helps: ["Online coverage", "Out today", "Blockers", "Sprint to-do"],
  },
  {
    name: "Weekly throughput",
    accent: "amber",
    image: "/projects/gen-pulse-weekly-throughput.png",
    summary: "Results and trends in one place.",
    description:
      "Weekly resolved work, backlog health and average ticket lifecycle sit together so delivery performance can be read without rebuilding the picture across tools.",
    helps: ["Weekly resolved", "Backlog", "Lifecycle"],
  },
  {
    name: "Kanban and priority work",
    accent: "purple",
    image: "/projects/gen-pulse-kanban-snapshot.png",
    summary: "The important tickets stay close at hand.",
    description:
      "The Kanban snapshot keeps priority Jira work visible by status, owner and urgency, with direct access to the work most likely to affect delivery.",
    helps: ["Kanban", "Priority tickets", "Jira context"],
  },
  {
    name: "Team presence",
    accent: "green",
    image: "/projects/gen-pulse-team-presence.png",
    summary: "Attendance and availability become operational context.",
    description:
      "Slack status, attendance and Workday leave signals are collaborated into one useful display, helping teams understand coverage and where people are.",
    helps: ["Attendance", "Slack status", "Workday leave", "Coverage"],
  },
];

const signalJourney = [
  {
    step: "01",
    label: "Availability",
    system: "Workday / calendar",
    body: "Two senior team members are unavailable and one region has reduced coverage.",
  },
  {
    step: "02",
    label: "Workload",
    system: "Jira",
    body: "High-priority work is concentrated around team members with reduced availability.",
  },
  {
    step: "03",
    label: "Signals",
    system: "Slack",
    body: "Blocker/escalation activity indicates emerging delivery pressure.",
  },
  {
    step: "04",
    label: "Performance",
    system: "SLA / KPI reporting",
    body: "Performance information shows where that pressure may create delivery risk.",
  },
  {
    step: "05",
    label: "Decision",
    system: "Gen Pulse",
    body: "Rebalance work, assign temporary coverage and prioritise the areas most exposed to risk.",
  },
  {
    step: "06",
    label: "Follow-up",
    system: "Operational cadence",
    body: "Continue monitoring the same signals as the situation changes.",
  },
];

const teams = [
  {
    name: "Contributors / Specialists",
    question: "What needs my attention and what is blocked?",
    areas: ["Developers", "Data", "Design"],
  },
  {
    name: "Project / Operations",
    question: "Where are work and delivery exposed?",
    areas: ["Workflow", "Coverage"],
  },
  {
    name: "Managers",
    question: "Where should people or priorities be rebalanced?",
    areas: ["Capacity", "Priorities"],
  },
  {
    name: "Directors / Executives",
    question: "What performance or delivery risks require attention?",
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
          <SectionLabel label="Marketing operations / a problem from inside the team" />
          <h1 id="gen-pulse-title" className="gen-pulse-overview__title">Gen Pulse</h1>
          <p className="pulse-overview__headline">
            An issue on the Norton Email team, turned into a shared operating view — then pitched and approved.
          </p>
          <p className="pulse-overview__standfirst">
            SLA performance, throughput, Jira, availability, leave and blockers all lived in different tools.
            Nobody had one picture of the day. I designed Gen Pulse so the team could see people, work and
            risk together, then pitched it to my director, a senior developer and a senior manager. It was
            approved, with strong support, because it solved a problem the team already had.
          </p>
          <p className="pulse-overview__body-copy">
            That is the working method: find the friction inside the marketing operation, design a view people
            can actually run with, and get engineering and leadership aligned before you ask the wider
            organisation to change how they work.
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
          <Image
            className="gen-pulse-overview__hero-image"
            src={assetPath("/projects/gen-pulse/hero-device-composition.png")}
            alt="Gen Pulse displayed across laptop, tablet and mobile devices"
            width={1448}
            height={1086}
            priority
          />
        </figure>
      </section>

      <section className="site-container pulse-overview__section gen-pulse-overview__problem">
        <SectionHeader
          label="Original problem"
          title="The team could not answer “where are we right now?” without rebuilding the day from four systems."
          copy="While managing the Norton Email team, leadership needed current SLA performance, weekly throughput, delivery status and who was actually available. Jira, reporting, Workday and Slack each held part of the answer. The work was not a product idea looking for a home — it was an operating problem looking for one picture."
        />
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
          title="From fragmented team signals to a shared command layer."
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
                <Image src={assetPath(view.image)} alt={`${view.name} screen from Gen Pulse`} width={900} height={1000} loading="eager" />
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
          title="Monday morning coverage risk."
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
          copy="Gen Pulse is not exclusively a management dashboard. Different users can consume different levels of information from the same operational environment."
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
          title="From team operations to lifecycle intelligence."
          copy="Gen Pulse explored how information from multiple enterprise systems could be brought together into one operational command centre. That command-centre thinking later influenced the broader Pulse-Ops AI concept across the customer lifecycle ecosystem."
        />
        <div className="pulse-overview__team-grid gen-pulse-overview__evolution-grid">
          <article className="pulse-overview__team-card">
            <h3>Gen Pulse</h3>
            <p>Team operations intelligence for people, availability, work, delivery, KPIs, SLA and risk.</p>
            <div><span>Team operations</span><span>Coverage</span></div>
          </article>
          <article className="pulse-overview__team-card">
            <h3>Command-centre thinking</h3>
            <p>A shared operating layer that connects fragmented signals and makes them decision-ready.</p>
            <div><span>Shared model</span></div>
          </article>
          <article className="pulse-overview__team-card">
            <h3>Pulse-Ops AI</h3>
            <p>Customer lifecycle intelligence for health, lifecycle signals, workflows, AI recommendations and recommended actions.</p>
            <div><span>Lifecycle intelligence</span></div>
          </article>
        </div>
      </section>

      <section className="site-container pulse-overview__section pulse-overview__final-cta">
        <SectionLabel label="Explore Gen Pulse" />
        <div className="pulse-overview__final-grid">
          <div>
            <h2>See the operational command centre.</h2>
            <p>Desktop and mobile visibility for people, work, delivery and performance.</p>
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
      <Image src={assetPath("/logos/about/gen-digital.svg")} alt="" width={108} height={42} unoptimized />
      <span>Pulse</span>
    </div>
  );
}
