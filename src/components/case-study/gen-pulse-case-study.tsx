import Link from "next/link";
import { ProjectDeviceShowcase } from "@/components/home/project-device-showcase";
import { getProject } from "@/lib/projects";

const systems = [
  {
    name: "Jira",
    role: "Delivery activity",
    accent: "blue",
    items: ["Sprint progress", "Ticket status", "Blocked work", "Delivery velocity"],
  },
  {
    name: "Slack",
    role: "Live team signal",
    accent: "purple",
    items: ["Escalations", "Blocker mentions", "Stand-up updates", "Operational noise"],
  },
  {
    name: "Workday",
    role: "People & capacity",
    accent: "green",
    items: ["PTO", "Availability", "Coverage gaps", "Team structure"],
  },
  {
    name: "BI / Reporting",
    role: "Performance context",
    accent: "amber",
    items: ["KPIs", "SLA trends", "Forecasts", "Leadership reporting"],
  },
  {
    name: "Gen Pulse",
    role: "Command centre",
    accent: "gen",
    items: ["Prioritised risk", "Coverage decisions", "Daily action plan", "Shared visibility"],
  },
];

const progression = [
  ["People", "Who is available?"],
  ["Work", "What is moving?"],
  ["Delivery", "Where are we exposed?"],
  ["KPIs", "What changed?"],
  ["Action", "What needs attention now?"],
];

const operatingModel = [
  {
    number: "01",
    title: "Gather",
    body: "Pull people, work, delivery and performance signals from the systems teams already use.",
  },
  {
    number: "02",
    title: "Connect",
    body: "Map availability, workload, blockers and KPIs into one operational picture.",
  },
  {
    number: "03",
    title: "Prioritise",
    body: "Separate background noise from the coverage gaps, SLA pressure and risks that need action.",
  },
  {
    number: "04",
    title: "Act",
    body: "Give leaders a morning command view for staffing, escalation and delivery decisions.",
  },
];

const views = [
  {
    name: "Command",
    accent: "blue",
    summary: "The morning operating view.",
    description:
      "A single place to read team health, open risks, daily priorities, workload pressure and live delivery movement.",
    helps: ["CSM Leads", "Operations", "Leadership"],
  },
  {
    name: "People & Coverage",
    accent: "green",
    summary: "Availability before assignment.",
    description:
      "Shows who is available, who is out, where coverage is thin and whether work can be rebalanced safely.",
    helps: ["Managers", "Resource Leads", "Team Members"],
  },
  {
    name: "Delivery Workload",
    accent: "purple",
    summary: "Execution pressure in context.",
    description:
      "Connects sprint progress, ticket load, blockers and priority queues so delivery pressure is visible early.",
    helps: ["Delivery Leads", "Project Owners", "CSM Teams"],
  },
  {
    name: "SLA & Risk",
    accent: "red",
    summary: "Escalation before failure.",
    description:
      "Surfaces ageing work, missed handoffs, blocker clusters and SLA exposure before they become leadership surprises.",
    helps: ["Operations", "Support", "Directors"],
  },
  {
    name: "KPI Reporting",
    accent: "amber",
    summary: "Performance without deck building.",
    description:
      "Frames throughput, trends and delivery health so leaders can understand what changed and why it matters.",
    helps: ["Directors", "Executives", "Ops Leads"],
  },
  {
    name: "Mobile Check-in",
    accent: "slate",
    summary: "Operational awareness anywhere.",
    description:
      "A compact companion view for leaders who need to check coverage, risk and priority movement away from their desk.",
    helps: ["Managers", "Leadership", "On-call Leads"],
  },
];

const decisionFlow = [
  {
    step: "01",
    label: "Availability",
    system: "Workday / calendar",
    body: "Two senior team members are out and one region has no clear coverage owner.",
  },
  {
    step: "02",
    label: "Workload",
    system: "Jira",
    body: "High-priority tickets are concentrated with the same people who have reduced availability.",
  },
  {
    step: "03",
    label: "Signals",
    system: "Slack",
    body: "Blocker language appears across delivery and account threads before stand-up begins.",
  },
  {
    step: "04",
    label: "Performance",
    system: "SLA / KPI reporting",
    body: "Response-time pressure rises on the same accounts already affected by staffing gaps.",
  },
  {
    step: "05",
    label: "Decision",
    system: "Gen Pulse",
    body: "Rebalance the queue, assign temporary coverage and escalate the accounts most exposed to SLA risk.",
  },
  {
    step: "06",
    label: "Follow-up",
    system: "Operational cadence",
    body: "Track whether the risk reduces through the day and keep leadership aligned without a status meeting.",
  },
];

const audiences = [
  {
    name: "Team Members",
    question: "What needs my attention today?",
    areas: ["Priorities", "Blockers"],
  },
  {
    name: "Managers",
    question: "Where do I need to rebalance people or work?",
    areas: ["Coverage", "Workload"],
  },
  {
    name: "Directors",
    question: "Which delivery or SLA risks need intervention?",
    areas: ["Risk", "KPIs"],
  },
  {
    name: "Operations Leads",
    question: "Where is the process breaking down?",
    areas: ["Signals", "Cadence"],
  },
  {
    name: "Executives",
    question: "Are teams operating predictably?",
    areas: ["Performance", "Exposure"],
  },
  {
    name: "Future Pulse-Ops",
    question: "How can team operations evolve into customer lifecycle intelligence?",
    areas: ["Signals", "Actions"],
  },
];

export function GenPulseCaseStudy() {
  const project = getProject("gen-pulse");
  if (!project) return null;

  return (
    <article className="gp-overview" aria-labelledby="gen-pulse-title">
      <section className="site-container gp-overview__hero gp-overview__section">
        <div className="gp-overview__hero-copy">
          <SectionLabel label="Team Operations / Delivery / Command Centre" />
          <h1 id="gen-pulse-title">Gen Pulse</h1>
          <p className="gp-overview__headline">
            A team operations command centre for people, work, delivery and risk.
          </p>
          <p className="gp-overview__standfirst">
            Gen Pulse was conceived as a daily leadership layer for teams that need to understand
            availability, blockers, workload, KPIs and SLA exposure before the day gets away from them.
          </p>
          <p className="gp-overview__body-copy">
            The project explores how fragmented signals from delivery, communication, people and reporting
            systems can become one calm operational view - helping leaders move from status reconstruction to
            faster, better decisions.
          </p>
          <div className="gp-overview__actions">
            <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="site-btn site-btn--ink">
              Open live demo →
            </Link>
            <a href="#gen-pulse-operating-model" className="site-btn site-btn--paper">
              See operating model ↓
            </a>
          </div>
        </div>
        <div className="gp-overview__hero-visual">
          <ProjectDeviceShowcase project={project} />
        </div>
      </section>

      <section className="site-container gp-overview__section">
        <SectionHeader
          label="Original problem"
          title="Operational reality was split across too many places."
          copy="Customer-facing teams were relying on Jira, Slack, people systems, reporting dashboards and manual status rituals to understand what was happening. Each system was useful on its own, but no single view explained who was available, what was blocked and where delivery risk was building."
        />
        <div className="gp-overview__problem-grid">
          {[
            "Coverage and availability were hard to see before assigning work.",
            "Delivery blockers were buried in tickets, threads and stand-ups.",
            "SLA pressure surfaced late because risk was not connected to workload.",
            "Leaders spent mornings rebuilding the picture instead of acting on it.",
          ].map((item, index) => (
            <article className="gp-overview__problem-card" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-container gp-overview__section">
        <SectionHeader
          label="The operational system"
          title="From fragmented team signals to a shared command layer."
          copy="Gen Pulse connects team activity, availability, delivery progress and performance metrics into a leadership workspace designed around daily decisions rather than passive reporting."
        />
        <div className="gp-overview__system-flow" aria-label="Jira to Slack to Workday to reporting to Gen Pulse">
          {systems.map((item, index) => (
            <div className="gp-overview__system-wrap" key={item.name}>
              <article className={`gp-overview__system-card gp-overview__system-card--${item.accent}`}>
                <h3>{item.name}</h3>
                <p>{item.role}</p>
                <ul>
                  {item.items.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              </article>
              {index < systems.length - 1 ? <span className="gp-overview__connector" aria-hidden>→</span> : null}
            </div>
          ))}
        </div>
        <div className="gp-overview__progression">
          {progression.map(([title, body], index) => (
            <div className="gp-overview__progression-item" key={title}>
              <span>{title}</span>
              <p>{body}</p>
              {index < progression.length - 1 ? <i aria-hidden /> : null}
            </div>
          ))}
        </div>
      </section>

      <section id="gen-pulse-operating-model" className="site-container gp-overview__section">
        <SectionHeader
          label="How Gen Pulse operates"
          title="Turn team activity into daily operational decisions."
          copy="The experience is designed around the questions leaders ask at the start of the day: who is available, what is blocked, which risks matter and what should happen next?"
        />
        <div className="gp-overview__process">
          {operatingModel.map((item, index) => (
            <article className="gp-overview__process-card" key={item.title}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              {index < operatingModel.length - 1 ? <i aria-hidden>→</i> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="site-container gp-overview__section">
        <SectionHeader
          label="Connected product views"
          title="One command centre. Multiple operational perspectives."
          copy="The product is not just a KPI board. It combines people, work, delivery, risk and reporting views so different users can operate from the same shared picture."
        />
        <div className="gp-overview__view-grid">
          {views.map((view) => (
            <article className={`gp-overview__view-card gp-overview__view-card--${view.accent}`} key={view.name}>
              <div>
                <h3>{view.name}</h3>
                <strong>{view.summary}</strong>
                <p>{view.description}</p>
                <ul>
                  {view.helps.map((team) => (
                    <li key={team}>{team}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="site-container gp-overview__section">
        <SectionHeader
          label="From signal to decision"
          title="An example: Monday morning coverage risk."
          copy="How Gen Pulse turns disconnected team signals into a practical leadership decision before risk becomes a delivery issue."
        />
        <div className="gp-overview__decision-flow">
          {decisionFlow.map((item, index) => (
            <article className="gp-overview__decision-card" key={item.step}>
              <span>{item.step}</span>
              <p>{item.label}</p>
              <h3>{item.system}</h3>
              <small>{item.body}</small>
              {index < decisionFlow.length - 1 ? <i aria-hidden>→</i> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="site-container gp-overview__section">
        <SectionHeader
          label="Designed for operating teams"
          title="Different roles. One shared operational picture."
          copy="Gen Pulse was designed for teams where individuals, managers and leadership each need a different level of detail without losing alignment around the same underlying signals."
        />
        <div className="gp-overview__audience-grid">
          {audiences.map((audience) => (
            <article className="gp-overview__audience-card" key={audience.name}>
              <h3>{audience.name}</h3>
              <p>{audience.question}</p>
              <div>
                {audience.areas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="site-container gp-overview__section gp-overview__evolution">
        <SectionHeader
          label="Product evolution"
          title="The command-centre idea later expanded into Pulse-Ops AI."
          copy="Gen Pulse explored team-level operational clarity: people, availability, delivery, blockers and KPI risk. That thinking became the foundation for a broader question - what if the same command-centre model could operate across customer lifecycle data, health signals, workflows and recommended actions?"
        />
        <div className="gp-overview__evolution-grid">
          <article>
            <span>Gen Pulse</span>
            <h3>Team operations intelligence</h3>
            <p>Who is available, what is blocked, which work is at risk and how should leaders respond today?</p>
          </article>
          <article>
            <span>Pulse-Ops AI</span>
            <h3>Customer lifecycle intelligence</h3>
            <p>Which accounts are at risk, what lifecycle signals matter and what operational next action should teams take?</p>
          </article>
        </div>
      </section>

      <section className="site-container gp-overview__section gp-overview__final-cta">
        <SectionLabel label="Explore Gen Pulse" />
        <div className="gp-overview__final-grid">
          <div>
            <h2>See the operational command centre.</h2>
            <p>Desktop and mobile visibility for people, work, delivery and risk.</p>
          </div>
          <div className="gp-overview__final-actions">
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
    <p className="site-label gp-overview__label">
      <span>{label}</span>
    </p>
  );
}

function SectionHeader({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return (
    <header className="gp-overview__section-header">
      <SectionLabel label={label} />
      <div>
        <h2>{title}</h2>
        {copy ? <p>{copy}</p> : null}
      </div>
    </header>
  );
}
