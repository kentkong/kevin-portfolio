import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Bell,
  CheckCircle2,
  Database,
  Layers,
  MessageSquare,
  Search,
  Sparkles,
  UserCircle,
  Workflow,
} from "lucide-react";

type TrendPoint = { label: string; value: number; secondary?: number };

const stackIntegrations = [
  { name: "Snowflake", role: "Data Warehouse", latency: "12ms", meta: "2.4M events/day" },
  { name: "Hightouch", role: "Reverse ETL", latency: "340ms", meta: "34 active syncs" },
  { name: "Braze", role: "Engagement", latency: "89ms", meta: "12K sends/day" },
  { name: "Pulse-Ops AI", role: "Intelligence", latency: "Real-time", meta: "5 active signals" },
];

const workflows = [
  {
    name: "New Customer Onboarding",
    status: "Active",
    triggered: 1247,
    completed: 78,
    trend: [62, 66, 70, 72, 76, 78],
    action: "View",
  },
  {
    name: "Activation Acceleration",
    status: "Active",
    triggered: 892,
    completed: 62,
    trend: [52, 56, 58, 59, 61, 62],
    action: "View",
  },
  {
    name: "Churn Risk Intervention",
    status: "Active",
    triggered: 156,
    completed: 45,
    trend: [38, 41, 40, 43, 44, 45],
    action: "Review",
  },
  {
    name: "Renewal Preparation",
    status: "Active",
    triggered: 234,
    completed: 88,
    trend: [82, 83, 84, 86, 87, 88],
    action: "View",
  },
  {
    name: "Expansion Upsell",
    status: "Paused",
    triggered: 67,
    completed: 34,
    trend: [28, 29, 31, 33, 34, 34],
    action: "Resume",
  },
  {
    name: "Support Escalation Path",
    status: "Active",
    triggered: 445,
    completed: 91,
    trend: [84, 86, 88, 89, 90, 91],
    action: "View",
  },
];

const aiInsights = [
  {
    priority: "Critical",
    title: "Mid-market churn cluster",
    category: "Churn Risk",
    accounts: "8 accounts",
    detected: "4h ago",
    confidence: 92,
    impact: "$25.6K MRR",
    action: "Review",
    summary:
      "8 accounts in the $3K-$5K MRR range show declining engagement patterns similar to historical churn cohorts.",
  },
  {
    priority: "High",
    title: "Enterprise expansion opportunity",
    category: "Expansion",
    accounts: "12 accounts",
    detected: "6h ago",
    confidence: 79,
    impact: "+$4.8K MRR",
    action: "View",
    summary: "Power users exceed 90% feature utilisation with consistent API growth.",
  },
  {
    priority: "High",
    title: "Onboarding bottleneck detected",
    category: "Onboarding",
    accounts: "42 accounts",
    detected: "2h ago",
    confidence: 87,
    impact: "3.2x churn risk",
    action: "Activate",
    summary: "34% of new accounts stall between profile completion and first integration.",
  },
  {
    priority: "Medium",
    title: "Support ticket volume spike",
    category: "Support",
    accounts: "156 accounts",
    detected: "8h ago",
    confidence: 94,
    impact: "+67% tickets",
    action: "Investigate",
    summary: "Ticket volume increased after v3.2 release; API migration confusion is the primary theme.",
  },
  {
    priority: "Medium",
    title: "Renewal concentration risk",
    category: "Renewal",
    accounts: "5 accounts",
    detected: "1d ago",
    confidence: 85,
    impact: "$340K pipeline",
    action: "Analyse",
    summary: "Q1 renewals are concentrated with 5 accounts showing declining NPS.",
  },
];

const recentEvents = [
  ["2m ago", "API calls exceeded 50K threshold", "DataPulse Analytics", "Product usage", "Low"],
  ["15m ago", "14-day inactivity detected", "RetailEdge", "Churn signal", "High"],
  ["28m ago", "Advanced analytics activated", "CloudScale Inc", "Feature", "Low"],
  ["35m ago", "Support ticket #4821 created", "MediaStream Pro", "Support", "Medium"],
  ["1h ago", "Upgraded to Enterprise tier", "FinFlow Systems", "Upgrade", "Low"],
  ["2h ago", "Onboarding milestone missed", "NovaTech Solutions", "Churn signal", "High"],
];

const lifecycleDistribution = [
  ["Onboarding", 124],
  ["Activation", 198],
  ["Adoption", 312],
  ["Expansion", 89],
  ["Renewal", 67],
  ["At Risk", 23],
];

const engagementTrend: TrendPoint[] = [
  { label: "Mon", value: 72, secondary: 68 },
  { label: "Tue", value: 74, secondary: 70 },
  { label: "Wed", value: 71, secondary: 69 },
  { label: "Thu", value: 76, secondary: 72 },
  { label: "Fri", value: 78, secondary: 74 },
  { label: "Sat", value: 65, secondary: 62 },
  { label: "Sun", value: 63, secondary: 60 },
];

const totalTriggers = workflows.reduce((sum, workflow) => sum + workflow.triggered, 0);
const activeWorkflows = workflows.filter((workflow) => workflow.status === "Active").length;
const pausedWorkflows = workflows.length - activeWorkflows;
const averageCompletion = Math.round(
  workflows.reduce((sum, workflow) => sum + workflow.completed, 0) / workflows.length
);

function PulseOpsMark() {
  return (
    <span className="po-mark" aria-hidden>
      <svg viewBox="0 0 32 32" fill="none">
        <g stroke="currentColor" strokeOpacity="0.14" strokeWidth="0.5">
          <line x1="8" y1="5" x2="8" y2="27" />
          <line x1="16" y1="5" x2="16" y2="27" />
          <line x1="24" y1="5" x2="24" y2="27" />
          <line x1="5" y1="8" x2="27" y2="8" />
          <line x1="5" y1="16" x2="27" y2="16" />
          <line x1="5" y1="24" x2="27" y2="24" />
        </g>
        <path d="M8 8 H24 M8 8 V24 M8 16 H20 M20 16 V24 M20 24 H24 M24 8 V24" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" />
        {[8, 16, 24].map((x) => (
          <rect key={`top-${x}`} x={x - 1.5} y={6.5} width="3" height="3" rx="0.65" fill="currentColor" />
        ))}
        {[8, 16, 20, 24].map((x, index) => (
          <rect key={`node-${x}-${index}`} x={x - 1.5} y={(index < 2 ? 16 : 24) - 1.5} width="3" height="3" rx="0.65" fill="currentColor" />
        ))}
        <circle cx="24" cy="24" r="2" fill="currentColor" />
      </svg>
    </span>
  );
}

function Sparkline({ values }: { values: number[] }) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * 100;
      const y = 34 - ((value - min) / Math.max(max - min, 1)) * 28;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg className="po-sparkline" viewBox="0 0 100 40" aria-hidden>
      <polyline points={points} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrendChart({ data }: { data: TrendPoint[] }) {
  const primary = data.map((point) => point.value);
  const secondary = data.map((point) => point.secondary ?? point.value);
  return (
    <div className="po-trend-chart">
      <Sparkline values={primary} />
      <div className="po-trend-chart__secondary">
        <Sparkline values={secondary} />
      </div>
      <div className="po-chart-labels">
        {data.map((point) => (
          <span key={point.label}>{point.label}</span>
        ))}
      </div>
    </div>
  );
}

function ModuleHeader({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <header className="po-module-header">
      {eyebrow ? <p>{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <span>{text}</span> : null}
    </header>
  );
}

export function PulseOpsCommandWireframe() {
  const criticalSignal = aiInsights[0];

  return (
    <article className="po-wireframe" aria-labelledby="pulse-ops-wireframe-title">
      <nav className="po-app-nav" aria-label="Pulse-Ops wireframe navigation">
        <Link href="#command" className="po-app-nav__brand">
          <PulseOpsMark />
          <span>Pulse-Ops <strong>AI</strong></span>
        </Link>
        <div className="po-app-nav__links">
          {["Command", "Lifecycle", "Workflows", "Signals", "Events", "Stack"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </div>
        <div className="po-app-nav__tools">
          <span>Last 7 days</span>
          <Search size={15} aria-hidden />
          <Bell size={15} aria-hidden />
          <UserCircle size={18} aria-hidden />
        </div>
      </nav>

      <section id="command" className="po-intro">
        <div>
          <p className="po-eyebrow">Wireframe / Command overview</p>
          <h1 id="pulse-ops-wireframe-title">Lifecycle Operations for Smarter Customer Growth</h1>
          <p>
            Monitors the full customer lifecycle stack, turns live data into actionable insights,
            prioritises what matters with AI, and helps operations, marketing and CX teams move faster.
          </p>
          <div className="po-status-row">
            <span><CheckCircle2 size={14} /> All systems operational</span>
            <span>{activeWorkflows} active workflows</span>
            <span>{pausedWorkflows} paused</span>
            <span>{averageCompletion}% average completion</span>
          </div>
        </div>
        <div className="po-intro__system" aria-label="Pulse-Ops system sketch">
          {stackIntegrations.map((item) => (
            <div key={item.name}>
              <span>{item.name}</span>
              <strong>{item.latency}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="po-section">
        <ModuleHeader title="Today at a glance" text="Key signals across your customer lifecycle." />
        <div className="po-kpi-grid">
          {[
            ["Active workflows", activeWorkflows, "+2 vs last week", [3, 4, 4, 5, 5, activeWorkflows]],
            ["Total triggers", totalTriggers.toLocaleString(), "+12% vs last week", [2110, 2280, 2450, 2600, 2810, totalTriggers]],
            ["Avg. completion rate", `${averageCompletion}%`, "+8% vs last week", [58, 59, 61, 63, 65, averageCompletion]],
            ["AI signals detected", aiInsights.length, "1 critical now", [2, 3, 4, 5, 5, aiInsights.length]],
          ].map(([label, value, detail, trend]) => (
            <div className="po-card po-kpi" key={label as string}>
              <span>{label}</span>
              <strong>{value}</strong>
              <small>{detail}</small>
              <Sparkline values={trend as number[]} />
            </div>
          ))}
        </div>
      </section>

      <section id="stack" className="po-section">
        <div className="po-card po-stack-card">
          <ModuleHeader title="Lifecycle stack" text="All systems operational" />
          <div className="po-stack-flow">
            {stackIntegrations.map((item, index) => (
              <div className="po-stack-flow__item" key={item.name}>
                <div>
                  {index === 0 ? <Database size={18} /> : index === 1 ? <Layers size={18} /> : index === 2 ? <MessageSquare size={18} /> : <Sparkles size={18} />}
                  <span>{item.name}</span>
                  <small>{item.latency}</small>
                </div>
                {index < stackIntegrations.length - 1 ? <ArrowRight size={18} aria-hidden /> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="signals" className="po-section">
        <div className="po-critical po-card">
          <div>
            <p className="po-alert-label">Critical signal</p>
            <h2>{criticalSignal.title}</h2>
            <p>{criticalSignal.summary}</p>
          </div>
          <dl>
            <div><dt>Confidence</dt><dd>{criticalSignal.confidence}%</dd></div>
            <div><dt>Potential impact</dt><dd>{criticalSignal.impact}</dd></div>
          </dl>
          <a href="#priority-actions">View at-risk accounts <ArrowRight size={14} /></a>
        </div>
        <div className="po-demo-path">
          {["Review AI signal", "Inspect at-risk accounts", "Activate workflow"].map((step, index) => (
            <span key={step}><strong>{String(index + 1).padStart(2, "0")}</strong>{step}</span>
          ))}
        </div>
      </section>

      <section id="lifecycle" className="po-section">
        <ModuleHeader title="Lifecycle intelligence" text="Customer health, engagement trend and lifecycle movement." />
        <div className="po-analytics-grid">
          <div className="po-card po-card--large">
            <h3>Lifecycle health score</h3>
            <div className="po-health-score"><strong>78%</strong><span>-2.1% vs prior week</span></div>
            <Sparkline values={[82, 81, 80, 79, 79, 78, 78]} />
          </div>
          <div className="po-card po-card--large">
            <h3>Engagement trend</h3>
            <TrendChart data={engagementTrend} />
          </div>
          <div className="po-card">
            <h3>Audience growth</h3>
            <strong>847 accounts</strong>
            <Sparkline values={[760, 781, 795, 812, 829, 847]} />
          </div>
          <div className="po-card">
            <h3>Campaign / lifecycle performance</h3>
            <strong>38% activated</strong>
            <div className="po-bar-list">
              {["Signed up", "Profile complete", "First integration", "Activated"].map((label, index) => (
                <span key={label}><i style={{ width: `${[100, 86, 72, 38][index]}%` }} />{label}</span>
              ))}
            </div>
          </div>
          <div className="po-card">
            <h3>Operational efficiency</h3>
            <strong>14 days avg.</strong>
            <p>New customer onboarding duration with day-3 integration nudge recommended.</p>
          </div>
        </div>
      </section>

      <section className="po-section">
        <ModuleHeader title="Customer + AI intelligence" text="Segments, signal categories and workflow activity." />
        <div className="po-three-grid">
          <div className="po-card">
            <h3>Customer segments</h3>
            <div className="po-segment-list">
              {lifecycleDistribution.map(([label, value]) => (
                <span key={label}><i style={{ width: `${Number(value) / 3.12}%` }} />{label}<strong>{value}</strong></span>
              ))}
            </div>
          </div>
          <div className="po-card">
            <h3>AI signal breakdown</h3>
            <div className="po-signal-breakdown">
              {["Churn Risk", "Expansion", "Onboarding", "Support", "Renewal"].map((label, index) => (
                <span key={label}><b>{[1, 1, 1, 1, 1][index]}</b>{label}</span>
              ))}
            </div>
          </div>
          <div className="po-card">
            <h3>Workflow activity</h3>
            <strong>{averageCompletion}% completion</strong>
            <p>{activeWorkflows} active / {pausedWorkflows} paused lifecycle automations.</p>
            <Sparkline values={[58, 59, 61, 63, 65, averageCompletion]} />
          </div>
        </div>
      </section>

      <section id="priority-actions" className="po-section">
        <ModuleHeader title="Priority actions" text="AI-recommended next steps." />
        <div className="po-table-wrap">
          <table className="po-table">
            <thead>
              <tr>
                {["Priority", "Signal / opportunity", "Category", "Accounts", "Detected", "Confidence", "Action"].map((head) => <th key={head}>{head}</th>)}
              </tr>
            </thead>
            <tbody>
              {aiInsights.map((item) => (
                <tr key={item.title}>
                  <td><span className={`po-priority po-priority--${item.priority.toLowerCase()}`}>{item.priority}</span></td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.accounts}</td>
                  <td>{item.detected}</td>
                  <td>{item.confidence}%</td>
                  <td><a href="#signals">{item.action}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="workflows" className="po-section">
        <ModuleHeader title="Workflow performance" text="Live status across lifecycle automations." />
        <div className="po-table-wrap">
          <table className="po-table">
            <thead>
              <tr>
                {["Workflow", "Status", "Triggered", "Completed", "Conversion / completion", "Trend", "Action"].map((head) => <th key={head}>{head}</th>)}
              </tr>
            </thead>
            <tbody>
              {workflows.map((workflow) => (
                <tr key={workflow.name}>
                  <td>{workflow.name}</td>
                  <td>{workflow.status}</td>
                  <td>{workflow.triggered.toLocaleString()}</td>
                  <td>{Math.round(workflow.triggered * workflow.completed / 100).toLocaleString()}</td>
                  <td>{workflow.completed}%</td>
                  <td><Sparkline values={workflow.trend} /></td>
                  <td><a href="#workflows">{workflow.action}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="po-section">
        <ModuleHeader title="Recent signals" text="Latest AI insights across your customer base." />
        <div className="po-table-wrap">
          <table className="po-table">
            <thead>
              <tr>
                {["Time", "Signal", "Accounts", "Impact", "Confidence", "Status", "Action"].map((head) => <th key={head}>{head}</th>)}
              </tr>
            </thead>
            <tbody>
              {aiInsights.map((item) => (
                <tr key={`recent-${item.title}`}>
                  <td>{item.detected}</td>
                  <td>{item.title}</td>
                  <td>{item.accounts}</td>
                  <td>{item.impact}</td>
                  <td>{item.confidence}%</td>
                  <td>{item.priority}</td>
                  <td><a href="#signals">{item.action}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="events" className="po-section po-bottom-grid">
        <div>
          <ModuleHeader title="Recent activity / events" text="Most useful recent items from the event stream." />
          <div className="po-card po-event-list">
            {recentEvents.map(([time, title, company, type, severity]) => (
              <div key={`${time}-${title}`}>
                <span>{time}</span>
                <strong>{title}</strong>
                <small>{company} · {type} · {severity}</small>
              </div>
            ))}
            <a href="#events">View all events <ArrowRight size={14} /></a>
          </div>
        </div>
        <div>
          <ModuleHeader title="Integrations / system status" text="Compact connected-systems summary." />
          <div className="po-card po-integration-list">
            {stackIntegrations.map((item) => (
              <div key={`status-${item.name}`}>
                <span>{item.name}</span>
                <small>{item.role}</small>
                <strong>{item.name === "Pulse-Ops AI" ? "Operational" : "Connected"}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
