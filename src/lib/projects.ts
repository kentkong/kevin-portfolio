export type CaseStudySection = {
  title: string;
  description: string;
  impact: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  headline: string;
  summary: string;
  overview: string;
  liveUrl: string;
  previewImageDesktop: string;
  previewImageDesktopLight?: string;
  previewImagesDesktop?: string[];
  previewRotationIntervalMs?: number;
  previewImageMobile?: string;
  previewMobileAspectRatio?: string;
  mobilePreviewNative?: boolean;
  showMobilePreview?: boolean;
  accent: string;
  themeColor: string;
  challenge: string;
  observation: string;
  hypothesis: string;
  solution: string;
  learned: string[];
  walkthrough: CaseStudySection[];
};

export const projects: Project[] = [
  {
    slug: "gen-pulse",
    name: "Gen Pulse",
    tagline: "Operational visibility for marketing leaders.",
    headline: "Operational visibility for marketing leaders.",
    summary:
      "A real-time operational command centre that brings team visibility, delivery health and business signals into one place.",
    overview:
      "Gen Pulse answers the daily leadership question: what is happening across my team right now? It consolidates delivery health, team visibility, and priority signals into one calm command centre—built for marketing and CSM leaders who need clarity before depth.",
    liveUrl: "https://kentkong.github.io/gen-pulse-dashboard/",
    previewImageDesktop: "/projects/gen-pulse-desktop-dark.png",
    previewImageDesktopLight: "/projects/gen-pulse-desktop-light.png",
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
    themeColor: "#f59e0b",
    challenge:
      "Marketing and customer success leaders need to answer operational questions in minutes—not after a stand-up, spreadsheet export, or Slack thread hunt. Who is available today? What work is blocked? Where are delivery risks? Which teams are overloaded?",
    observation:
      "Leaders were making decisions from fragmented signals across Jira, Slack, calendars, and status decks. The cost wasn't missing data—it was missing a shared operational picture.",
    hypothesis:
      "If daily leadership visibility were consolidated into one calm command centre—with glanceable stats, team presence, and delivery health—managers could intervene earlier and align teams faster.",
    solution:
      "Gen Pulse became a daily command centre: Today at a Glance, team visibility, delivery health, kanban snapshots, and priority queues—designed for CSM and marketing ops leaders, not engineers.",
    learned: [
      "Leaders want clarity before depth—glance first, drill down second.",
      "Operational products win when they respect how teams already work.",
      "The best dashboard is the one that reduces meetings, not adds them.",
    ],
    walkthrough: [
      {
        title: "Today At A Glance",
        description: "Tap-to-jump stats that orient the day in seconds.",
        impact: "Replaced morning status round-ups with a single shared view.",
      },
      {
        title: "Team Visibility",
        description: "Coverage, capacity, and presence in one operational layer.",
        impact: "Made staffing and escalation decisions faster and fairer.",
      },
      {
        title: "Delivery Health",
        description: "Inflow vs. resolved signals and SLA posture at a glance.",
        impact: "Surfaced backlog pressure before it became a quarter-end surprise.",
      },
      {
        title: "Operational Risks",
        description: "Priority queues ranked by urgency and business impact.",
        impact: "Helped leaders focus attention where it actually mattered.",
      },
    ],
  },
  {
    slug: "pulse-ops",
    name: "PulseOps AI",
    tagline: "Turning operational data into actionable intelligence.",
    headline: "Turning operational data into actionable intelligence.",
    summary:
      "An AI-powered operations analyst that identifies risks, opportunities and recommendations from multiple business systems.",
    overview:
      "PulseOps AI models the intelligence layer lifecycle teams wish they had—connecting warehouse data, activation tools, and engagement platforms into one operational narrative with AI-generated insights and next-best actions.",
    liveUrl: "https://kentkong.github.io/pulse-ops-ai/",
    previewImageDesktop: "/projects/pulse-ops/operations.png",
    previewImagesDesktop: [
      "/projects/pulse-ops/operations.png",
      "/projects/pulse-ops/lifecycle.png",
      "/projects/pulse-ops/workflows.png",
      "/projects/pulse-ops/insights.png",
      "/projects/pulse-ops/events.png",
      "/projects/pulse-ops/architecture.png",
    ],
    previewRotationIntervalMs: 3200,
    accent: "from-yellow-500/15 via-zinc-500/10 to-transparent",
    themeColor: "#eab308",
    challenge:
      "Lifecycle operations teams sit on rich customer data across warehouses, reverse ETL tools, and engagement platforms—but intelligence still lives in decks, exports, and ad hoc analysis. Risks surface late. Opportunities stay buried.",
    observation:
      "The stack was modern. The visibility wasn't. Teams had Snowflake, Hightouch, and Braze—but no intelligence layer connecting signals to action.",
    hypothesis:
      "An AI-native operations layer could unify lifecycle signals, explain what's changing, and recommend next-best actions without asking leaders to become analysts.",
    solution:
      "PulseOps AI models an operational command centre across the lifecycle stack—executive KPIs, customer health, AI insights, workflow orchestration, and event streams—framed as portfolio-grade product thinking, not a BI screenshot.",
    learned: [
      "Operational AI must feel like a colleague, not a chart generator.",
      "Integration stories matter as much as interface polish.",
      "Generic language beats internal jargon when showcasing product thinking.",
    ],
    walkthrough: [
      {
        title: "Executive Operations Dashboard",
        description: "Portfolio KPIs, SLA posture, and engagement trends in one view.",
        impact: "Gives leaders a credible ops narrative without a data team in the room.",
      },
      {
        title: "Lifecycle Intelligence",
        description: "Stage tracking, health scoring, and funnel visibility.",
        impact: "Connects marketing motion to customer outcomes, not just campaign metrics.",
      },
      {
        title: "AI Insights Engine",
        description: "Generated summaries and recommendations from operational signals.",
        impact: "Demonstrates how AI can compress analysis into decision-ready language.",
      },
      {
        title: "Next-Best-Action",
        description: "Prioritized recommendations tied to lifecycle context.",
        impact: "Shows the leap from reporting to operational guidance.",
      },
    ],
  },
  {
    slug: "sprintiq",
    name: "SprintIQ",
    tagline: "From objectives to delivery-ready execution plans.",
    headline: "From objectives to delivery-ready execution plans.",
    summary:
      "An AI strategist that transforms business goals into initiatives, stakeholders, risks, timelines and executive-ready plans.",
    overview:
      "SprintIQ closes the gap between stating an objective and producing a plan teams can execute. A guided studio turns goals into initiatives, stakeholders, risks, timelines, and executive briefs—structured enough to trust, fast enough to maintain momentum.",
    liveUrl: "https://kentkong.github.io/sprintiq-ai/",
    previewImageDesktop: "/projects/sprintiq/objective.png",
    previewImagesDesktop: [
      "/projects/sprintiq/objective.png",
      "/projects/sprintiq/blueprint.png",
      "/projects/sprintiq/review.png",
      "/projects/sprintiq/ready.png",
    ],
    previewRotationIntervalMs: 3200,
    accent: "from-cyan-500/20 via-violet-500/15 to-transparent",
    themeColor: "#22d3ee",
    challenge:
      "Teams know what they want to achieve—but turning a business objective into a credible delivery plan still takes days of workshops, decks, and alignment meetings. Strategy stalls before execution starts.",
    observation:
      "The gap isn't ambition—it's translation. Leaders can articulate goals, but struggle to produce initiatives, stakeholders, risks, and timelines fast enough to maintain momentum.",
    hypothesis:
      "A guided AI studio could turn objectives into structured blueprints—with executive-ready outputs—while keeping humans in control of review and refinement.",
    solution:
      "SprintIQ guides users through Objective → Blueprint → Review → Ready, generating initiatives, stakeholders, risks, timelines, and executive briefs from curated templates that feel credible, not generic.",
    learned: [
      "Workflow beats wizardry—structure builds trust in AI output.",
      "Examples must produce distinct outcomes, not the same template every time.",
      "The product story is about delivery readiness, not chat novelty.",
    ],
    walkthrough: [
      {
        title: "Objective Studio",
        description: "Define or select a mission with example-driven quick starts.",
        impact: "Lowers the barrier from blank page to strategic intent.",
      },
      {
        title: "Blueprint Generation",
        description: "Initiatives, stakeholders, risks, and roadmap in one pass.",
        impact: "Turns objectives into plans leaders can actually socialise.",
      },
      {
        title: "Review & Copilot",
        description: "Refinement step before plans go executive-facing.",
        impact: "Keeps human judgment in the loop—AI assists, doesn't replace.",
      },
      {
        title: "Ready To Deliver",
        description: "Export-oriented checklist and executive brief.",
        impact: "Bridges strategy artifacts to operational follow-through.",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
