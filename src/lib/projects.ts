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
  externalDemoUrl?: string;
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
    slug: "revival",
    name: "REVIVAL",
    tagline: "Visualise your dream Triumph Desert Sled motorcycle build before you buy it.",
    headline: "Visualising a classic Triumph Desert Sled build before committing to the physical build.",
    summary:
      "A flagship UX and product design case study exploring how a rider could configure a classic Triumph Desert Sled visually before committing to parts, fabrication and workshop work.",
    overview: "",
    liveUrl: "/projects/revival",
    previewImageDesktop: "/projects/revival/masters/01-tank-colour-decals.png",
    previewImagesDesktop: [
      "/projects/revival/masters/01-tank-colour-decals.png",
      "/projects/revival/masters/02-wheels-tyres.png",
      "/projects/revival/masters/03-exhaust.png",
      "/projects/revival/masters/04-accessories.png",
    ],
    previewRotationIntervalMs: 3600,
    accent: "from-orange-500/20 via-stone-500/10 to-transparent",
    themeColor: "#d94f1f",
    challenge:
      "Planning a custom classic motorcycle build is difficult because tank, tyres, stance, bars, seat, exhaust and paint choices are hard to judge in isolation.",
    observation:
      "Create a visual planning tool where the motorcycle remains central and component decisions accumulate into one coherent intended build.",
    hypothesis:
      "If riders can compare an original motorcycle with a cumulative live build, they can communicate design intent more clearly before physical workshop decisions begin.",
    solution:
      "Revival proposes a Triumph Desert Sled builder that separates deterministic component configuration from later generative visualisation, helping a rider build it before they build it.",
    demoMode:
      "Independent product concept and high-fidelity prototype. Not a launched production product.",
    highlights: [
      "Original → Live Build → Generated Revival journey",
      "Eight-part Desert Sled configuration architecture",
      "Build Tape specification language for communicating design decisions",
      "Desert Modernism visual system inspired by Triumph workshop documentation and California desert racing",
    ],
    learned: [],
    walkthrough: [],
  },
  {
    slug: "lifecycle-architecture-studio",
    name: "Lifecycle Architecture Studio",
    tagline: "Interactive lifecycle architecture and CRM technology explorer.",
    headline: "Interactive lifecycle architecture and CRM technology explorer.",
    summary:
      "An interactive reference for exploring how CRM, data, activation, engagement, analytics and AI capabilities connect across a modern customer lifecycle — with representative technologies, not a prescribed vendor stack.",
    overview: "",
    liveUrl: "/projects/lifecycle-architecture-studio/app",
    previewImageDesktop: "/projects/lifecycle-architecture-studio/v14-overview.png",
    previewImagesDesktop: [
      "/projects/lifecycle-architecture-studio/v14-overview.png",
      "/projects/lifecycle-architecture-studio/v14-technology-explorer.png",
      "/projects/lifecycle-architecture-studio/v14-customer-journey.png",
    ],
    previewRotationIntervalMs: 3600,
    accent: "from-blue-500/20 via-slate-500/10 to-transparent",
    themeColor: "#60a5fa",
    challenge:
      "Modern lifecycle teams work across many CRM, data, activation, engagement, analytics and AI tools, but it is hard to see the architecture as one system.",
    observation:
      "Create an explorable reference where capability categories come first, and vendor products are examples rather than the product itself.",
    hypothesis: "",
    solution:
      "Lifecycle Architecture Studio is an interactive architecture and CRM technology explorer. Overview maps a representative composable stack and personalisation loop; Technology Explorer explains each capability with example platforms; Customer Journey shows the architecture working for one person.",
    demoMode:
      "Three sections: Overview, Technology Explorer and Customer Journey. Named platforms are illustrative examples of each capability.",
    highlights: [
      "Architecture overview with a customer-data to personalisation loop",
      "Capability-first technology explorer across CRM, data, activation, engagement, AI and analytics",
      "Representative vendor examples, not a prescribed stack",
      "Step-through customer journey showing ingestion, decisioning, activation and messaging",
      "Reference tool for explaining how lifecycle systems connect",
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
    liveUrl: "/projects/pulse-ops/command",
    previewImageDesktop: "/projects/pulse-ops/operations.png",
    previewImagesDesktop: ["/projects/pulse-ops/operations.png"],
    previewImageMobile: "/projects/pulse-ops/screen-signals-full.png",
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
