import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/asset-path";
import { getProject } from "@/lib/projects";

const systems = [
  {
    name: "Jira",
    logo: "jira",
    role: "Delivery activity",
    accent: "blue",
    items: ["Latest delivery", "Ticket status", "Blocked work", "Weekly throughput"],
  },
  {
    name: "Slack",
    logo: "slack",
    role: "Live team signal",
    accent: "purple",
    items: ["Team updates", "Blocker mentions", "Day-to-day signals", "Operational noise"],
  },
  {
    name: "Workday",
    logo: "workday",
    role: "People & capacity",
    accent: "green",
    items: ["Upcoming leave", "Availability", "Coverage gaps", "Team structure"],
  },
  {
    name: "BI / Reporting",
    logo: "bi",
    role: "Performance context",
    accent: "amber",
    items: ["SLA reports", "Weekly trends", "Delivery metrics", "Leadership reporting"],
  },
  {
    name: "Gen Pulse",
    logo: "gen-pulse",
    role: "Command centre",
    accent: "gen",
    items: ["Shared picture", "Capacity context", "Delivery risk", "Role-based visibility"],
  },
];

const exampleApps = [
  { name: "Jira", logo: "jira", label: "Delivery and tickets" },
  { name: "Slack", logo: "slack", label: "Team signals" },
  { name: "Workday", logo: "workday", label: "People and availability" },
  { name: "BI / Reporting", logo: "bi", label: "SLA and throughput" },
];

const configurableApps = [
  { name: "Microsoft Teams", logo: "teams", label: "Collaboration" },
  { name: "Salesforce", logo: "salesforce", label: "Customer context" },
  { name: "Figma", logo: "figma", label: "Design and workflow" },
  { name: "Other systems", logo: "systems", label: "Team-specific tools" },
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
    body: "Give teams and leaders a shared command view for staffing, escalation and delivery decisions.",
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
            Gen Pulse came from the operational reality of managing the Norton Email team, where
            SLA performance, delivery progress, throughput trends, availability and blockers all had
            to be understood together.
          </p>
          <p className="gp-overview__body-copy">
            The project explores how fragmented signals from delivery, communication, people and reporting
            systems can become one calm operational view - helping contributors, managers, directors and
            leadership move from status reconstruction to faster, better decisions.
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
          <GenPulseSystemBoard />
        </div>
      </section>

      <section className="site-container gp-overview__section">
        <SectionHeader label="Original problem" title="The idea came from a problem I was experiencing every day." />
        <div className="gp-overview__origin-copy">
          <p>
            While managing the Norton Email team, my director and senior leadership regularly needed SLA reports,
            weekly throughput trends, delivery metrics and up-to-date information about the team&apos;s work.
          </p>
          <p>
            The challenge wasn&apos;t that the data didn&apos;t exist. It was that it existed everywhere.
          </p>
          <p>
            Jira contained the latest delivery and ticket information. Reporting platforms contained performance
            metrics and trends. Workday held people and availability data. Slack provided day-to-day team signals.
            Other parts of the organisation relied on tools such as Salesforce, Teams, Figma and additional
            specialist platforms.
          </p>
          <p>When leadership asked a seemingly simple question -</p>
          <blockquote>&quot;Where are we right now?&quot;</blockquote>
          <p>- answering it could mean reconstructing the picture from several different systems.</p>
          <p>That led to the idea behind Gen Pulse:</p>
          <blockquote>
            &quot;What if the most important operational information from all of these systems could be funnelled
            into one shared command centre?&quot;
          </blockquote>
          <p>
            I initially designed Gen Pulse around the information I needed to manage the Norton Email operation:
            SLA performance, weekly throughput, Jira activity, workload, blockers and delivery risk.
          </p>
          <p>
            I then developed the concept further by incorporating individual team information - including
            availability, team presence and upcoming leave - so workload and delivery could be understood alongside
            actual team capacity.
          </p>
          <p>
            The result became a broader, configurable operational concept: one command centre that can bring
            together the data that matters to a particular team and make it accessible at the appropriate level to
            contributors, managers, directors and leadership.
          </p>
        </div>
        <div className="gp-overview__problem-grid">
          {[
            {
              title: "Information was fragmented",
              body: "Performance, delivery and people data lived across multiple enterprise systems.",
            },
            {
              title: "The current picture took time to reconstruct",
              body: "Up-to-date Jira activity, team availability and operational performance were not available in one place.",
            },
            {
              title: "Delivery risk lacked context",
              body: "SLA pressure, workload, blockers and team capacity could be viewed separately, but their relationships were harder to see.",
            },
            {
              title: "Reporting was reactive",
              body: "Time that could be spent making decisions was instead spent gathering information and rebuilding the operational picture.",
            },
          ].map((item, index) => (
            <article className="gp-overview__problem-card" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-container gp-overview__section">
        <SectionHeader
          label="The operational system"
          title="From fragmented team signals to a shared command layer."
          copy="Gen Pulse connects team activity, availability, delivery progress and performance metrics into a shared operational workspace designed around daily decisions rather than passive reporting."
        />
        <div className="gp-overview__system-flow" aria-label="Jira to Slack to Workday to reporting to Gen Pulse">
          {systems.map((item, index) => (
            <div className="gp-overview__system-wrap" key={item.name}>
              <article className={`gp-overview__system-card gp-overview__system-card--${item.accent}`}>
                <div className="gp-overview__system-logo">
                  <AppLogo kind={item.logo} name={item.name} />
                </div>
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
        <p className="gp-overview__note">
          Jira, Workday, Slack and BI / Reporting represent the Gen Pulse implementation example shown in this
          case study. The wider product concept is configurable: an organisation could potentially connect the
          enterprise systems relevant to its own operation, such as Jira, Workday, Slack, Microsoft Teams,
          Salesforce, reporting / BI platforms and other operational systems.
        </p>
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
          copy="The experience is designed around the operational questions teams and leaders need answered throughout the day: who is available, what is moving, what is blocked, where risk is developing and what needs attention next?"
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
          copy="Gen Pulse evolved into a shared operational command centre capable of serving team contributors, managers, operations leads, directors and leadership. Different users can consume different levels of detail from the same underlying operational information."
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

function GenPulseSystemBoard() {
  return (
    <div className="gp-overview__system-board" aria-label="Gen Pulse configurable source systems">
      <div>
        <p className="gp-overview__board-label">Example implementation</p>
        <div className="gp-overview__logo-grid gp-overview__logo-grid--primary">
          {exampleApps.map((app) => (
            <article className="gp-overview__logo-card" key={app.name}>
              <AppLogo kind={app.logo} name={app.name} />
              <span>{app.label}</span>
            </article>
          ))}
        </div>
      </div>
      <div className="gp-overview__board-flow" aria-hidden>
        <span />
        <strong>↓</strong>
      </div>
      <div className="gp-overview__board-hub">
        <AppLogo kind="gen-pulse" name="Gen Pulse" />
        <p>Shared operational command centre</p>
      </div>
      <div>
        <p className="gp-overview__board-label">Configurable product concept</p>
        <div className="gp-overview__logo-grid">
          {configurableApps.map((app) => (
            <article className="gp-overview__logo-card" key={app.name}>
              <AppLogo kind={app.logo} name={app.name} />
              <span>{app.label}</span>
            </article>
          ))}
        </div>
      </div>
      <p className="gp-overview__board-note">
        Configurable architecture concept. These systems illustrate possible operational sources, not a claim that
        every platform is implemented in the demo.
      </p>
    </div>
  );
}

function AppLogo({ kind, name }: { kind: string; name: string }) {
  if (kind === "jira") {
    return (
      <Image
        src={assetPath("/logos/about/jira.svg")}
        alt={`${name} logo`}
        width={116}
        height={34}
        className="gp-overview__logo-image gp-overview__logo-image--jira"
        unoptimized
      />
    );
  }

  if (kind === "salesforce") {
    return (
      <Image
        src={assetPath("/logos/about/salesforce.svg")}
        alt={`${name} logo`}
        width={120}
        height={54}
        className="gp-overview__logo-image gp-overview__logo-image--salesforce"
        unoptimized
      />
    );
  }

  if (kind === "figma") {
    return (
      <Image
        src={assetPath("/logos/about/figma.svg")}
        alt={`${name} logo`}
        width={86}
        height={34}
        className="gp-overview__logo-image gp-overview__logo-image--figma"
        unoptimized
      />
    );
  }

  if (kind === "slack") {
    return (
      <span className="gp-overview__logo-mark gp-overview__logo-mark--slack" aria-label={`${name} logo`}>
        <i />
        <i />
        <i />
        <i />
        <b>Slack</b>
      </span>
    );
  }

  if (kind === "workday") {
    return (
      <span className="gp-overview__logo-mark gp-overview__logo-mark--workday" aria-label={`${name} logo`}>
        <b>workday</b>
      </span>
    );
  }

  if (kind === "teams") {
    return (
      <span className="gp-overview__logo-mark gp-overview__logo-mark--teams" aria-label={`${name} logo`}>
        <i>T</i>
        <b>Teams</b>
      </span>
    );
  }

  if (kind === "bi") {
    return (
      <span className="gp-overview__logo-mark gp-overview__logo-mark--bi" aria-label={`${name} logo`}>
        <i />
        <i />
        <i />
        <b>BI / Reporting</b>
      </span>
    );
  }

  if (kind === "gen-pulse") {
    return (
      <span className="gp-overview__logo-mark gp-overview__logo-mark--gen-pulse" aria-label={`${name} logo`}>
        <b>Gen</b>
        <em>Pulse</em>
      </span>
    );
  }

  return (
    <span className="gp-overview__logo-mark gp-overview__logo-mark--systems" aria-label={`${name} logo`}>
      <i />
      <b>{name}</b>
    </span>
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
