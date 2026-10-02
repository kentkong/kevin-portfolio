export type LifecycleStudioPatternSlug =
  | "modern-composable"
  | "legacy-enterprise"
  | "ai-powered-lifecycle"
  | "product-led-growth"
  | "customer-360";

export type LifecycleStudioPattern = {
  slug: LifecycleStudioPatternSlug;
  tabLabel: string;
  shortName: string;
  summary: string;
  description: string;
  image: string;
  platforms: string[];
  focusAreas: string[];
};

export const lifecycleStudioPatterns: LifecycleStudioPattern[] = [
  {
    slug: "modern-composable",
    tabLabel: "Modern Composable",
    shortName: "Modern Composable Customer Engagement Stack",
    summary: "Best-of-breed connected customer engagement.",
    description:
      "Warehouse, reverse-ETL, engagement and analytics platforms wired into a composable lifecycle architecture.",
    image: "/projects/lifecycle-architecture-studio/modern-composable.png",
    platforms: ["Snowflake", "Hightouch", "Braze", "Segment", "Salesforce"],
    focusAreas: ["Reverse ETL", "Audience sync", "Journey orchestration", "Unified events"],
  },
  {
    slug: "legacy-enterprise",
    tabLabel: "Legacy Enterprise",
    shortName: "Legacy Enterprise Marketing Stack",
    summary: "CRM-centric enterprise marketing foundation.",
    description:
      "How established CRM-led organisations structure data, campaigns and reporting before full composable maturity.",
    image: "/projects/lifecycle-architecture-studio/legacy-enterprise.png",
    platforms: ["Salesforce", "Marketing Cloud", "Analytics", "Integrations"],
    focusAreas: ["Campaign ops", "CRM journeys", "Reporting layers", "Integration hubs"],
  },
  {
    slug: "ai-powered-lifecycle",
    tabLabel: "AI-Powered Lifecycle",
    shortName: "AI-Powered Lifecycle Stack",
    summary: "Intelligence woven through the lifecycle.",
    description:
      "Where AI services sit alongside data, engagement and analytics for signals, automation and next-best action.",
    image: "/projects/lifecycle-architecture-studio/ai-powered-lifecycle.png",
    platforms: ["OpenAI", "Snowflake", "Braze", "Segment", "Hightouch"],
    focusAreas: ["Signal enrichment", "Assistive workflows", "Risk detection", "Recommendation layers"],
  },
  {
    slug: "product-led-growth",
    tabLabel: "Product-Led Growth",
    shortName: "Product-Led Growth Stack",
    summary: "Activation driven by in-product behaviour.",
    description:
      "Product usage, onboarding, lifecycle messaging and growth loops through data and engagement tools.",
    image: "/projects/lifecycle-architecture-studio/product-led-growth.png",
    platforms: ["Segment", "Braze", "Product analytics", "CRM"],
    focusAreas: ["Onboarding", "Activation loops", "Usage signals", "Lifecycle nudges"],
  },
  {
    slug: "customer-360",
    tabLabel: "Customer 360",
    shortName: "Customer 360 Stack",
    summary: "Unified profile and activation paths.",
    description:
      "Identity resolution, profile enrichment and activation routes that power a shared customer view.",
    image: "/projects/lifecycle-architecture-studio/customer-360.png",
    platforms: ["Snowflake", "Salesforce", "Hightouch", "Braze", "Segment"],
    focusAreas: ["Identity", "Profile traits", "360 context", "Journey triggers"],
  },
];

export const lifecycleStudioPatternSlugs = lifecycleStudioPatterns.map((item) => item.slug);

export function getLifecycleStudioPattern(slug: string) {
  return lifecycleStudioPatterns.find((item) => item.slug === slug);
}

export const lifecycleStudioDefaultSlug: LifecycleStudioPatternSlug = "modern-composable";

export function lifecycleStudioAppPath(slug: LifecycleStudioPatternSlug = lifecycleStudioDefaultSlug) {
  return `/projects/lifecycle-architecture-studio/app/${slug}`;
}
