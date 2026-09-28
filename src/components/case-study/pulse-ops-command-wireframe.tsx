"use client";

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { useEffect } from "react";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  AlertTriangle,
  Brain,
  Clock,
  Database,
  GitBranch,
  Info,
  LayoutDashboard,
  Layers,
  Mail,
  MessageSquare,
  Pause,
  Play,
  Radio,
  RefreshCw,
  Search,
  Sparkles,
  Ticket,
  TrendingUp,
  UserCircle,
  Users,
  Zap,
} from "lucide-react";

type TrendPoint = { label: string; value: number; secondary?: number };

const stackIntegrations = [
  {
    id: "snowflake",
    name: "Snowflake",
    role: "Data Warehouse",
    latency: "12ms",
    meta: "2.4M events/day",
    icon: Database,
  },
  {
    id: "hightouch",
    name: "Hightouch",
    role: "Reverse ETL",
    latency: "340ms",
    meta: "34 active syncs",
    icon: Layers,
  },
  {
    id: "braze",
    name: "Braze",
    role: "Engagement",
    latency: "89ms",
    meta: "12K sends/day",
    icon: MessageSquare,
  },
  {
    id: "pulseops",
    name: "Pulse-Ops AI",
    role: "Intelligence",
    latency: "Real-time",
    meta: "5 active signals",
    icon: Sparkles,
  },
];

const workflows = [
  {
    name: "New Customer Onboarding",
    status: "Active",
    triggered: 1247,
    completed: 78,
    duration: "14 days",
    dependencies: ["Snowflake: signup event", "Hightouch: audience sync"],
    recommendation: "Add day-3 integration nudge — accounts receiving it activate 22% faster",
    trend: [62, 66, 70, 72, 76, 78],
    action: "View",
  },
  {
    name: "Activation Acceleration",
    status: "Active",
    triggered: 892,
    completed: 62,
    duration: "9 days",
    dependencies: ["Snowflake: usage threshold", "Braze: in-app prompt"],
    recommendation: "Shift milestone prompt earlier for accounts with two admin users.",
    trend: [52, 56, 58, 59, 61, 62],
    action: "View",
  },
  {
    name: "Churn Risk Intervention",
    status: "Active",
    triggered: 156,
    completed: 45,
    duration: "3 days",
    dependencies: ["Hightouch: risk cohort", "Braze: retention canvas"],
    recommendation: "Route critical accounts to CSM review before campaign activation.",
    trend: [38, 41, 40, 43, 44, 45],
    action: "Review",
  },
  {
    name: "Renewal Preparation",
    status: "Active",
    triggered: 234,
    completed: 88,
    duration: "25 days",
    dependencies: ["Snowflake: renewal date", "Pulse-Ops AI: forecast"],
    recommendation: "Add executive sponsor task for accounts with declining NPS.",
    trend: [82, 83, 84, 86, 87, 88],
    action: "View",
  },
  {
    name: "Expansion Upsell",
    status: "Paused",
    triggered: 67,
    completed: 34,
    duration: "18 days",
    dependencies: ["Snowflake: product usage", "Hightouch: expansion segment"],
    recommendation: "Resume after enterprise tier messaging is updated.",
    trend: [28, 29, 31, 33, 34, 34],
    action: "Resume",
  },
  {
    name: "Support Escalation Path",
    status: "Active",
    triggered: 445,
    completed: 91,
    duration: "2 hrs",
    dependencies: ["Support: ticket event", "Braze: service update"],
    recommendation: "Keep active; this workflow is protecting high-severity tickets.",
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

const lifecycleBoard = [
  {
    title: "Onboarding",
    accounts: [
      ["NovaTech Solutions", 62, "Integration stalled", "Alex Rivera"],
      ["MediaStream Pro", 55, "Day 18 — no team invite", "Sam Patel"],
      ["BrightPath CRM", 71, "Healthy progression", "Jordan Lee"],
    ],
  },
  {
    title: "Activation",
    accounts: [
      ["CloudScale Inc", 78, "Milestone due", "Jordan Lee"],
      ["LogiChain", 83, "Activation healthy", "Jordan Lee"],
    ],
  },
  {
    title: "Adoption",
    accounts: [
      ["DataPulse Analytics", 91, "Power user", "Alex Rivera"],
      ["SyncWave", 86, "Feature adoption", "Sam Patel"],
    ],
  },
  {
    title: "Renewal",
    accounts: [["HealthBridge", 72, "Renewal in 25d", "Jordan Lee"]],
  },
  {
    title: "Intervention",
    accounts: [["RetailEdge", 38, "14d inactive", "Alex Rivera"]],
  },
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

const navItems = [
  { label: "Command", icon: LayoutDashboard, hue: "snowflake" },
  { label: "Lifecycle", icon: Users, hue: "lifecycle" },
  { label: "Workflows", icon: GitBranch, hue: "hightouch" },
  { label: "Signals", icon: Brain, hue: "braze" },
  { label: "Events", icon: Radio, hue: "events" },
  { label: "Stack", icon: Layers, hue: "architecture" },
];

const totalTriggers = workflows.reduce((sum, workflow) => sum + workflow.triggered, 0);
const activeWorkflows = workflows.filter((workflow) => workflow.status === "Active").length;
const pausedWorkflows = workflows.length - activeWorkflows;
const averageCompletion = Math.round(
  workflows.reduce((sum, workflow) => sum + workflow.completed, 0) / workflows.length
);

function StackIntegrationMark({ name }: { name: string }) {
  const Icon = name === "Snowflake" ? Database : name === "Hightouch" ? Layers : name === "Braze" ? MessageSquare : Sparkles;
  return (
    <span className={`po-stack-mark stack-integration-mark stack-integration-mark--${name === "Pulse-Ops AI" ? "pulse" : name.toLowerCase()}`} aria-hidden>
      <Icon size={14} strokeWidth={2.1} />
    </span>
  );
}

function Badge({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "secondary" | "success" | "warning" | "destructive" | "outline" | "info" }) {
  return <span className={`po-badge po-badge--${tone}`}>{children}</span>;
}

function Progress({ value, tone = "primary" }: { value: number; tone?: "primary" | "health" | "danger" }) {
  return (
    <span className="po-progress" aria-hidden>
      <i className={`po-progress__bar po-progress__bar--${tone}`} style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </span>
  );
}

function Sparkline({ values, color = "#f1c40f", height = 40 }: { values: number[]; color?: string; height?: number }) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const gradientId = `spark-${color.replace("#", "")}-${values.length}-${values[0]}`;
  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * 100;
      const y = height - ((value - min) / Math.max(max - min, 1)) * (height - 6) - 3;
      return `${x},${y}`;
    })
    .join(" ");
  const areaPoints = `0,${height} ${points} 100,${height}`;

  return (
    <svg className="po-sparkline" viewBox={`0 0 100 ${height}`} aria-hidden>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#${gradientId})`} />
      <polyline points={points} fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrendChart({ data }: { data: TrendPoint[] }) {
  const primary = data.map((point) => point.value);
  const secondary = data.map((point) => point.secondary ?? point.value);
  return (
    <div className="po-trend-chart">
      <Sparkline values={primary} color="#9d4db8" height={110} />
      <div className="po-trend-chart__secondary">
        <Sparkline values={secondary} color="#4a78b0" height={110} />
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

function healthState(score: number) {
  if (score < 45) return "critical";
  if (score < 60) return "at-risk";
  if (score < 75) return "watch";
  return "healthy";
}

function StackFlowHorizontal() {
  return (
    <div className="stack-flow-strip">
      {stackIntegrations.map((layer, index) => {
        const Icon = layer.icon;
        return (
          <div key={layer.id} className="stack-flow-strip__segment">
            <div className={`stack-flow-strip__node stack-flow-strip__node--${layer.id}`}>
              <span className="stack-flow-strip__status" title={`${layer.name} operational`} aria-label={`${layer.name} operational`}>
                <span className="stack-flow-strip__status-dot animate-live-dot" aria-hidden />
              </span>
              <Icon className="stack-flow-strip__icon" aria-hidden />
              <div>
                <p>{layer.name}</p>
                <span className="stack-flow-strip__latency">{layer.latency}</span>
                <small>{layer.meta}</small>
              </div>
            </div>
            {index < stackIntegrations.length - 1 ? (
              <div className="stack-flow-strip__connector" style={{ "--connector-delay": `${index * 0.55}s` } as CSSProperties} aria-hidden>
                <span className="stack-flow-strip__connector-rail">
                  <span className="stack-flow-strip__connector-beam" />
                </span>
                <svg width="10" height="12" className="stack-flow-strip__connector-arrow">
                  <polygon points="0,3 8,6 0,9" fill="currentColor" />
                </svg>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function LifecycleStackStrip() {
  return (
    <section className="orchestration-strip workspace-context-strip" aria-label="Lifecycle stack">
      <div className="section-band-dark__bg" aria-hidden />
      <div className="orchestration-strip__inner">
        <div className="orchestration-strip__headline">
          <div className="orchestration-strip__title-row">
            <h2 className="orchestration-strip__title">Lifecycle Stack</h2>
          </div>
          <p className="orchestration-strip__thesis">
            Monitors your full lifecycle stack and turns live data into health scores, AI signals, and prioritized actions.
          </p>
          <p className="orchestration-strip__context">2 at-risk accounts · 5 AI signals active today</p>
          <div className="orchestration-strip__ops-status" aria-label="Operational status">
            <span><CheckCircle2 size={13} /> All systems operational</span>
            <span>{activeWorkflows} active workflows</span>
            <span>{pausedWorkflows} paused</span>
            <span>{averageCompletion}% avg completion</span>
          </div>
        </div>
        <StackFlowHorizontal />
      </div>
    </section>
  );
}

function OriginalWorkflowCard({ workflow }: { workflow: (typeof workflows)[number] }) {
  const isPaused = workflow.status === "Paused";
  const StatusIcon = isPaused ? Pause : Play;
  return (
    <article className={`po-workflow-card glass-card ${isPaused ? "po-workflow-card--paused" : ""}`}>
      <div className="po-workflow-card__title-row">
        <h3>{workflow.name}</h3>
        <Badge tone={isPaused ? "warning" : "success"}>
          <StatusIcon size={10} aria-hidden />
          {workflow.status}
        </Badge>
      </div>
      <p>{workflow.recommendation}</p>
      <div className="po-workflow-card__stats">
        <span><strong>{workflow.triggered.toLocaleString()}</strong><small>Triggers</small></span>
        <span><strong>{workflow.completed}%</strong><small>Completion</small></span>
        <span><strong>{workflow.duration}</strong><small>Avg duration</small></span>
      </div>
      <Progress value={workflow.completed} />
      <div className="po-workflow-card__deps">
        {workflow.dependencies.map((dependency) => (
          <Badge key={dependency} tone="outline">{dependency}</Badge>
        ))}
      </div>
      <div className="po-workflow-card__ai">
        <Sparkles size={13} aria-hidden />
        <span>AI Recommendation</span>
      </div>
    </article>
  );
}

function InsightCard({ insight }: { insight: (typeof aiInsights)[number] }) {
  const severityTone = insight.priority === "Critical" ? "destructive" : insight.priority === "High" ? "warning" : "secondary";
  const CategoryIcon = insight.category === "Churn Risk" ? AlertTriangle : insight.category === "Onboarding" ? Users : insight.category === "Support" ? Clock : insight.category === "Renewal" ? RefreshCw : TrendingUp;
  return (
    <article className={`po-insight-card glass-card ${insight.priority === "Critical" ? "po-insight-card--critical" : ""}`}>
      <span className="po-insight-card__icon"><CategoryIcon size={16} aria-hidden /></span>
      <div>
        <div className="po-insight-card__meta">
          <h3>{insight.title}</h3>
          <Badge tone={severityTone}>{insight.priority}</Badge>
          <Badge tone="outline">{insight.category}</Badge>
          <Badge tone="secondary">Pulse-Ops AI</Badge>
        </div>
        <p>{insight.summary}</p>
        <div className="po-insight-card__confidence">
          <span>AI Confidence</span>
          <Progress value={insight.confidence} tone={insight.priority === "Critical" ? "danger" : "primary"} />
          <strong>{insight.confidence}%</strong>
        </div>
        <div className="po-insight-card__action">
          <strong>Recommended Action</strong>
          <span>{insight.action} · {insight.impact}</span>
        </div>
      </div>
    </article>
  );
}

function EventIcon({ type, severity }: { type: string; severity: string }) {
  const Icon = type.includes("Support") ? Ticket : type.includes("Feature") ? Zap : type.includes("Upgrade") ? TrendingUp : type.includes("Churn") ? AlertTriangle : type.includes("Campaign") ? Mail : severity === "High" ? AlertTriangle : Info;
  return <Icon size={14} aria-hidden />;
}

export function PulseOpsCommandWireframe() {
  const criticalSignal = aiInsights[0];

  useEffect(() => {
    document.body.classList.add("pulse-ops-product-body");
    return () => document.body.classList.remove("pulse-ops-product-body");
  }, []);

  return (
    <article className="po-wireframe" aria-labelledby="pulse-ops-wireframe-title">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body.site-body {
              --portfolio-border-size: 0px;
              background: #eaf3f4 !important;
              background-image: none !important;
            }
            body.site-body::before,
            body.site-body::after {
              display: none !important;
            }
          `,
        }}
      />
      <nav className="po-app-nav" aria-label="Pulse-Ops wireframe navigation">
        <Link href="#command" className="po-app-nav__brand">
          <span>Pulse-Ops</span>
        </Link>
        <div className="po-app-nav__links">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.label} className={`po-nav-tab nav-tab nav-tab--${item.hue}`} href={`#${item.label.toLowerCase()}`}>
                <span className="po-nav-tab__bg" aria-hidden />
                <span className="nav-tab__stripe" aria-hidden />
                <Icon size={13} aria-hidden />
                {item.label}
              </a>
            );
          })}
        </div>
        <div className="po-app-nav__tools">
          <span>Last 7 days</span>
          <Search size={15} aria-hidden />
          <Bell size={15} aria-hidden />
          <UserCircle size={18} aria-hidden />
        </div>
      </nav>

      <section id="command" className="po-command-banner command-banner">
        <div className="command-banner__bg" aria-hidden />
        <div className="po-command-banner__inner">
          <div className="po-command-banner__brand">
            <div>
              <p className="po-eyebrow">AI lifecycle operations</p>
              <h1 id="pulse-ops-wireframe-title">Pulse-Ops AI</h1>
            </div>
          </div>
        </div>
      </section>

      <LifecycleStackStrip />

      <section className="po-section po-section--glance">
        <ModuleHeader title="Command snapshot" text="Key signals across your customer lifecycle." />
        <div className="po-kpi-grid">
          {[
            ["Active workflows", activeWorkflows, "+2 vs last week", [3, 4, 4, 5, 5, activeWorkflows], "#1a1a1a"],
            ["Total triggers", totalTriggers.toLocaleString(), "+12% vs last week", [2110, 2280, 2450, 2600, 2810, totalTriggers], "#4a78b0"],
            ["Avg. completion rate", `${averageCompletion}%`, "+8% vs last week", [58, 59, 61, 63, 65, averageCompletion], "#27ae60"],
            ["AI signals detected", aiInsights.length, "1 critical now", [2, 3, 4, 5, 5, aiInsights.length], "#e74c3c"],
          ].map(([label, value, detail, trend, color]) => (
            <div className="po-kpi glance-stat-card" key={label as string}>
              <span>{label}</span>
              <strong>{value}</strong>
              <small>{detail}</small>
              <Sparkline values={trend as number[]} color={color as string} height={28} />
            </div>
          ))}
        </div>
      </section>

      <section id="lifecycle" className="po-section">
        <ModuleHeader title="Lifecycle operations" text="Command-centre modules for lifecycle health, engagement, AI signals and workflow activity." />
        <div className="po-analytics-grid">
          <div className="po-card po-card--large glass-card po-module--lifecycle">
            <h3>Lifecycle health score</h3>
            <div className="po-health-score"><strong>78%</strong><span>-2.1% vs prior week</span></div>
            <Sparkline values={[82, 81, 80, 79, 79, 78, 78]} color="#c9a000" />
          </div>
          <div className="po-card po-card--large glass-card po-module--workflow">
            <h3>Engagement trend</h3>
            <TrendChart data={engagementTrend} />
          </div>
          <div className="po-card glass-card po-module--snowflake">
            <h3>Audience growth</h3>
            <strong>847 accounts</strong>
            <Sparkline values={[760, 781, 795, 812, 829, 847]} color="#4a78b0" />
            <div className="po-mini-segments">
              {lifecycleDistribution.slice(0, 4).map(([label, value]) => (
                <span key={label}>{label}<strong>{value}</strong></span>
              ))}
            </div>
          </div>
          <div className="po-card glass-card po-module--lifecycle">
            <h3>Campaign / lifecycle performance</h3>
            <strong>38% activated</strong>
            <div className="po-bar-list">
              {["Signed up", "Profile complete", "First integration", "Activated"].map((label, index) => (
                <span key={label}><i style={{ width: `${[100, 86, 72, 38][index]}%` }} />{label}</span>
              ))}
            </div>
          </div>
          <div className="po-card glass-card po-module--events">
            <h3>Operational efficiency</h3>
            <strong>14 days avg.</strong>
            <p>New customer onboarding duration with day-3 integration nudge recommended.</p>
          </div>
          <div className="po-card glass-card po-module--signals">
            <h3>AI signal breakdown</h3>
            <div className="po-signal-breakdown">
              {["Churn Risk", "Expansion", "Onboarding", "Support", "Renewal"].map((label, index) => (
                <span key={label}><b>{[1, 1, 1, 1, 1][index]}</b>{label}</span>
              ))}
            </div>
          </div>
          <div className="po-card glass-card po-module--workflow">
            <h3>Workflow activity</h3>
            <strong>{averageCompletion}% completion</strong>
            <p>{activeWorkflows} active / {pausedWorkflows} paused lifecycle automations.</p>
            <Sparkline values={[58, 59, 61, 63, 65, averageCompletion]} color="#9d4db8" />
          </div>
        </div>
      </section>

      <section id="priority-actions" className="po-section">
        <div className="critical-signal-banner po-critical-signal">
          <div className="po-critical-signal__main">
            <AlertTriangle className="po-critical-signal__icon" aria-hidden />
            <div>
              <p className="po-alert-label">Critical signal</p>
              <h2>{criticalSignal.title}</h2>
              <p>{criticalSignal.summary}</p>
              <small>{criticalSignal.accounts} need action today · {criticalSignal.confidence}% confidence · {criticalSignal.impact} potential impact</small>
              <div className="po-critical-signal__metrics">
                <span><strong>{criticalSignal.confidence}%</strong><small>AI confidence</small></span>
                <span><strong>{criticalSignal.accounts}</strong><small>Accounts affected</small></span>
                <span><strong>{criticalSignal.impact}</strong><small>MRR impact</small></span>
              </div>
            </div>
          </div>
          <a href="#priority-actions">View at-risk accounts <ArrowRight size={14} /></a>
        </div>
        <div className="po-demo-path">
          {["Review AI signal", "Inspect at-risk accounts", "Activate workflow"].map((step, index) => (
            <span key={step}><strong>{String(index + 1).padStart(2, "0")}</strong>{step}</span>
          ))}
        </div>
        <div className="ai-intelligence-band po-ai-intelligence-band">
          <div className="po-ai-intelligence-band__panel">
            <p>Anomaly · {criticalSignal.confidence}% confidence</p>
            <h3>{criticalSignal.title}</h3>
            <span>{criticalSignal.summary}</span>
            <small>{criticalSignal.accounts} affected</small>
          </div>
          <div className="po-ai-intelligence-band__panel po-ai-intelligence-band__panel--wide">
            <p>Next best action</p>
            <div>
              <h3>RetailEdge</h3>
              <Badge tone="destructive">Critical</Badge>
            </div>
            <span>→ Trigger lifecycle nurture</span>
            <small>$3,200 MRR · Alex Rivera · Health 38</small>
          </div>
          <div className="po-ai-intelligence-band__panel">
            <p>Priority queue</p>
            {lifecycleBoard.flatMap((column) => column.accounts).slice(0, 3).map(([account, score, signal]) => (
              <div className="po-priority-mini" key={`priority-${account}`}>
                <strong>{account}</strong>
                <span>{score}</span>
                <Progress value={Number(score)} tone={Number(score) < 45 ? "danger" : "primary"} />
                <small>{signal}</small>
              </div>
            ))}
          </div>
        </div>
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
                  <td><span className={`po-signal-type po-signal-type--${item.category.toLowerCase().replace(/\s+/g, "-")}`}>{item.category}</span></td>
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

      <section id="workflows" className="po-section po-section--workflows">
        <ModuleHeader title="Workflow performance" text="Live status across lifecycle automations." />
        <div className="po-workflow-grid">
          {workflows.map((workflow) => (
            <OriginalWorkflowCard key={workflow.name} workflow={workflow} />
          ))}
        </div>
      </section>

      <section className="po-section po-section--board">
        <ModuleHeader title="Lifecycle operations board" text="Operational CRM-style account movement across lifecycle stages." />
        <div className="po-board">
          {lifecycleBoard.map((column) => (
            <div className={`po-board__column surface-lane ${column.title === "Intervention" ? "surface-lane--alert" : column.title === "Onboarding" ? "surface-lane--active" : ""}`} key={column.title}>
              <header>
                <span>{column.accounts.some(([, score]) => Number(score) < 60) ? <i className="lane-alert-dot animate-live-dot" aria-hidden /> : null}{column.title}</span>
                <strong>{column.accounts.length}</strong>
              </header>
              <div>
                {column.accounts.map(([account, score, signal, owner]) => (
                  <button type="button" className={`kanban-card surface-card po-board__account--${healthState(Number(score))}`} key={account}>
                    <h3>{account}</h3>
                    <p>{signal}</p>
                    <div className="po-board__health" aria-hidden>
                      <i style={{ width: `${score}%` }} />
                    </div>
                    <footer>
                      <span className="po-board__score">Health {score}</span>
                      <span>{column.title}</span>
                      <span>{owner}</span>
                    </footer>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="po-section po-section--signals-feed">
        <ModuleHeader title="Recent signals" text="Latest AI insights across your customer base." />
        <div className="po-insight-grid">
          {aiInsights.map((item) => (
            <InsightCard key={`recent-${item.title}`} insight={item} />
          ))}
        </div>
      </section>

      <section id="events" className="po-section po-bottom-grid po-section--operations-footer">
        <div>
          <ModuleHeader title="Recent activity / events" text="Most useful recent items from the event stream." />
          <div className="po-card po-event-list po-event-feed">
            {recentEvents.map(([time, title, company, type, severity]) => (
              <div className="po-event-feed__row" key={`${time}-${title}`}>
                <span className={`po-event-feed__icon po-event-severity--${severity.toLowerCase()}`}>
                  <EventIcon type={type} severity={severity} />
                </span>
                <div>
                  <strong>{title}</strong>
                  <small>{company} · {type}</small>
                </div>
                <Badge tone={severity === "High" ? "destructive" : severity === "Medium" ? "warning" : "secondary"}>{severity}</Badge>
                <time>{time}</time>
              </div>
            ))}
            <a href="#events">View all events <ArrowRight size={14} /></a>
          </div>
        </div>
        <div>
          <ModuleHeader title="Integrations / system status" text="Compact connected-systems summary." />
          <div className="po-card po-integration-list">
            {stackIntegrations.map((item) => (
              <div className={`stack-flow-strip__node stack-flow-strip__node--${item.id}`} key={`status-${item.name}`}>
                <StackIntegrationMark name={item.name} />
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
