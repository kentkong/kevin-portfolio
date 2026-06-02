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
  highlights: string[];
  learned: string[];
  walkthrough: CaseStudySection[];
};

export const projects: Project[] = [
  {
    slug: "lifecycle-architecture-studio",
    name: "Lifecycle Architecture Studio",
    tagline: "Interactive martech and AI architecture explorer.",
    headline: "Explore modern customer engagement ecosystems",
    summary:
      "A premium interactive studio for understanding, designing, and exploring modern lifecycle marketing, data, and AI-powered engagement architectures.",
    overview: "",
    liveUrl: "https://kentkong.github.io/lifecycle-architecture-studio/",
    previewImageDesktop: "/projects/lifecycle-architecture-studio/canvas.png",
    previewImagesDesktop: [
      "/projects/lifecycle-architecture-studio/canvas.png",
      "/projects/lifecycle-architecture-studio/detail.png",
    ],
    previewRotationIntervalMs: 3200,
    accent: "from-blue-500/20 via-slate-500/10 to-transparent",
    themeColor: "#60a5fa",
    challenge:
      "Modern lifecycle teams operate across CRM, warehouse, reverse ETL, engagement, analytics, and AI platforms — but the architecture itself is rarely explained in a clear, visual way.",
    observation:
      "Create an educational architecture explorer where the stack is the product — not another dashboard or chatbot.",
    hypothesis: "",
    solution:
      "Lifecycle Architecture Studio lets users explore how platforms like Salesforce, Snowflake, Hightouch, Braze, Segment, and OpenAI fit together. Click any node to learn what it does, why companies use it, where it sits in the stack, and how it integrates with the rest of the ecosystem.",
    demoMode:
      "Switch between recommended architecture templates — Enterprise Marketing Stack, Legacy Enterprise Stack, AI-Powered Lifecycle Stack, and CDP & Analytics Stack — then add or remove platforms to model your own ecosystem.",
    highlights: [
      "Full-screen interactive architecture canvas with animated connections",
      "Educational platform detail panels for martech, data, and AI tools",
      "Recommended stack templates for enterprise and modern lifecycle teams",
      "Add, remove, and explore custom architecture combinations",
      "Premium dark-mode product design inspired by Linear, Stripe, and ByteByteGo",
      "Designed to teach where each platform fits and what problems it solves",
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
    tagline: "AI-powered operational intelligence.",
    headline: "AI-powered operational intelligence.",
    summary:
      "Pulse-Ops AI helps leaders identify risks, opportunities, bottlenecks, and trends before they impact delivery or performance.",
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
      "Operational teams generate vast amounts of data but often struggle to identify the signals that require action.",
    observation:
      "Create an AI analyst that turns operational data into insights, recommendations, and next-best actions.",
    hypothesis: "",
    solution:
      "Pulse-Ops AI helps leaders identify risks, opportunities, bottlenecks, and trends before they impact delivery or performance.",
    highlights: [
      "Detects operational risks and emerging issues automatically",
      "Surfaces trends, opportunities, and recommended actions",
      "Provides real-time operational intelligence for leaders and managers",
      "Reduces time spent manually analysing dashboards and reports",
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
