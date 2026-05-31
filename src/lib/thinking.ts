export type ThinkingPost = {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
};

export const thinkingPosts: ThinkingPost[] = [
  {
    slug: "why-most-ai-dashboards-fail",
    title: "Why Most AI Dashboards Fail",
    excerpt:
      "Dashboards confuse activity with intelligence. Leaders don't need more charts—they need clearer decisions.",
    readTime: "6 min read",
  },
  {
    slug: "what-marketing-leaders-need-from-ai",
    title: "What Marketing Leaders Actually Need From AI",
    excerpt:
      "The best AI tools for marketing ops don't demo well—they reduce coordination cost in the first ten minutes of the day.",
    readTime: "5 min read",
  },
  {
    slug: "building-products-with-cursor",
    title: "Building Products With Cursor",
    excerpt:
      "Cursor changed my build loop from concept sketches to credible product demos—without pretending I'm a traditional engineer.",
    readTime: "7 min read",
  },
  {
    slug: "lifecycle-marketing-ai-first",
    title: "Lifecycle Marketing In An AI-First World",
    excerpt:
      "Lifecycle teams already orchestrate complexity. AI should amplify judgment, not add another dashboard to ignore.",
    readTime: "6 min read",
  },
  {
    slug: "operational-intelligence-vs-reporting",
    title: "Operational Intelligence vs Reporting",
    excerpt:
      "Reporting tells you what happened. Operational intelligence tells you what to do next—and who needs to know.",
    readTime: "5 min read",
  },
];
