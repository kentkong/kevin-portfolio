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
  demoMode?: string;
  comingSoon?: boolean;
  highlights: string[];
  learned: string[];
  walkthrough: CaseStudySection[];
};

export const projects: Project[] = [
  {
    slug: "lifecycle-architecture-studio",
    name: "Lifecycle Architecture Studio",
    tagline: "Visualizing modern customer engagement and AI ecosystems.",
    headline: "Visualizing modern customer engagement and AI ecosystems.",
    summary:
      "Lifecycle Architecture Studio helps users understand how platforms such as Salesforce, Snowflake, Hightouch, Braze, Segment, and OpenAI work together within modern enterprise ecosystems.",
    overview: "",
    liveUrl: "https://kentkong.github.io/lifecycle-architecture-studio/",
    previewImageDesktop: "/projects/lifecycle-architecture-studio/modern-composable.png",
    previewImagesDesktop: [
      "/projects/lifecycle-architecture-studio/modern-composable.png",
      "/projects/lifecycle-architecture-studio/legacy-enterprise.png",
      "/projects/lifecycle-architecture-studio/ai-powered-lifecycle.png",
      "/projects/lifecycle-architecture-studio/product-led-growth.png",
      "/projects/lifecycle-architecture-studio/customer-360.png",
    ],
    previewRotationIntervalMs: 3200,
    accent: "from-blue-500/20 via-slate-500/10 to-transparent",
    themeColor: "#60a5fa",
    challenge:
      "Modern enterprise teams rely on increasingly complex CRM, data, activation, analytics, and AI platforms, but understanding how these systems fit together is often difficult.",
    observation:
      "Create a visually engaging architecture explorer where the stack itself becomes the product.",
    hypothesis: "",
    solution:
      "Lifecycle Architecture Studio helps users understand how platforms such as Salesforce, Snowflake, Hightouch, Braze, Segment, and OpenAI work together within modern enterprise ecosystems. Through interactive visualizations, users can explore data flows, platform roles, integrations, and real-world architecture patterns.",
    demoMode:
      "Explore Legacy Enterprise, Modern Composable, AI-Powered Lifecycle, Product-Led Growth, and Customer 360 architectures, or build your own stack.",
    highlights: [
      "Interactive architecture visualizations with real-world enterprise examples",
      "Explore CRM, data, activation, engagement, analytics, and AI ecosystems",
      "Educational platform profiles and integration mapping",
      "Custom stack modelling and architecture exploration",
      "Premium visual design focused on clarity, learning, and discovery",
    ],
    learned: [],
    walkthrough: [],
  },
  {
    slug: "gen-pulse",
    name: "Gen Pulse",
    tagline: "Real-time operational visibility for modern teams.",
    headline: "Real-time operational visibility for modern teams",
    summary:
      "Gen Pulse brings together delivery health, team presence, operational KPIs, workload, blockers, and business reporting into a single desktop and mobile experience.",
    overview: "",
    liveUrl: "https://kentkong.github.io/gen-pulse-dashboard/",
    previewImageDesktop: "/projects/gen-pulse-desktop-dark.png",
    previewImageDesktopLight: "/projects/gen-pulse-desktop-light.png",
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
    themeColor: "#f59e0b",
    challenge:
      "Critical operational data lives across Jira, Slack, Workday, reporting platforms, calendars, and spreadsheets, making it difficult for teams and leaders to maintain a real-time view of delivery, capacity, and performance.",
    observation:
      "Create a single operational command centre that gives everyone—from team members to directors—a live view of what matters most.",
    hypothesis: "",
    solution:
      "Gen Pulse brings together delivery health, team presence, operational KPIs, workload, blockers, and business reporting into a single desktop and mobile experience. By combining data from systems such as Jira, Slack, Workday, and BI platforms, teams gain a shared real-time view of execution and performance without relying on status meetings or manual reporting.",
    highlights: [
      "Unified operational view across Jira, Slack, Workday, and reporting platforms",
      "Desktop and mobile experience for real-time visibility anywhere",
      "Team presence, PTO, availability, and coverage planning",
      "Live KPIs, delivery health, blockers, risks, and SLA monitoring",
      "Designed for team members, managers, directors, and operational leaders",
      "Reduces reporting overhead while improving decision-making and execution",
    ],
    learned: [],
    walkthrough: [],
  },
  {
    slug: "pulse-ops",
    name: "Pulse-Ops AI",
    tagline: "AI intelligence layer for customer lifecycle operations.",
    headline: "AI intelligence layer for customer lifecycle operations.",
    summary:
      "A stack-agnostic command center that unifies your data, activation, engagement, and AI tools into health scores, signals, and next-best actions.",
    overview: "",
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
      "Lifecycle data is spread across warehouses, reverse-ETL tools, engagement platforms, and AI services — but ops leaders rarely have one place to see account health, emerging risk, and what to do next.",
    observation:
      "Create an intelligence layer that sits above the tools you already use, turning fragmented lifecycle data into actionable operational signals.",
    hypothesis: "",
    solution:
      "Pulse-Ops AI is the intelligence layer on your lifecycle stack — monitoring account health, surfacing AI-driven risks and opportunities, and orchestrating next actions across every stage. The live demo uses Snowflake, Hightouch, and Braze as a representative modern stack; in production, buyers plug in whichever data, activation, engagement, and AI apps fit their environment.",
    demoMode:
      "Example stack in the demo: Snowflake → Hightouch → Braze → Pulse-Ops AI. The architecture is integration-flexible — swap in your warehouse, CDP, engagement platform, or AI provider without changing the command-center experience.",
    highlights: [
      "Stack-agnostic intelligence layer — connect the modern apps your org already runs",
      "Demo illustrates one lifecycle stack; production deployments adapt to your tooling",
      "Unified account health, stage progression, and at-risk detection",
      "AI signals with severity, confidence, and recommended next actions",
      "Workflow orchestration from signal to action across connected systems",
    ],
    learned: [],
    walkthrough: [],
  },
  {
    slug: "sprintiq",
    name: "SprintIQ",
    tagline: "AI-powered delivery planning and execution.",
    headline: "AI-powered delivery planning and execution",
    summary:
      "SprintIQ converts business goals into delivery-ready plans, helping teams move from idea to execution faster.",
    overview: "",
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
      "Turning business objectives into actionable delivery plans often requires significant planning, stakeholder alignment, and manual coordination.",
    observation:
      "Create an AI strategist that transforms objectives into structured delivery blueprints.",
    hypothesis: "",
    solution:
      "SprintIQ converts business goals into delivery-ready plans, helping teams move from idea to execution faster. By transforming objectives into structured plans, teams can quickly understand priorities, stakeholders, risks, timelines, and next steps without spending days building delivery frameworks manually.",
    demoMode:
      "Users can instantly explore SprintIQ using a range of pre-built business scenarios and example objectives. From Braze migrations and onboarding transformations to churn reduction and revenue growth initiatives, Demo Mode allows visitors to experience the complete workflow and see how SprintIQ generates delivery-ready blueprints in real time.",
    highlights: [
      "Transforms business objectives into initiatives, milestones, risks, and delivery plans",
      "Identifies stakeholders, dependencies, and execution risks automatically",
      "Generates executive-ready summaries and leadership updates",
      "Built-in demo scenarios and example objectives for instant exploration",
      "Produces structured delivery blueprints in seconds",
      "Reduces planning effort from days to minutes",
    ],
    learned: [],
    walkthrough: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
