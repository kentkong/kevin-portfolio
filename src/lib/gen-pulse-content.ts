export type GenPulseFeature = {
  title: string;
  description: string;
};

export type GenPulseImpact = {
  title: string;
  description: string;
};

export type GenPulseGalleryDevice = {
  label: string;
  image: string;
  alt: string;
};

export type GenPulseGallery = {
  desktopDark: GenPulseGalleryDevice;
  desktopLight: GenPulseGalleryDevice;
};

export const genPulseStory = {
  title: "Gen Pulse",
  valueProposition:
    "A daily command center that gives CSM leaders operational clarity before their first meeting.",
  heroImage: "/projects/gen-pulse-desktop-dark.png",
  heroImageAlt: "Gen Pulse operational command center in dark mode",

  challenge: {
    headline: "Leaders were flying blind across fragmented systems.",
    body: "Customer success teams ran on Jira tickets, Slack threads, Workday calendars, and status decks—each accurate in isolation, none telling the full story. By the time a blocker surfaced in stand-up, the sprint was already off track. Managers spent mornings reconstructing reality instead of acting on it.",
    painPoints: [
      "No shared view of team availability or coverage",
      "Delivery risks buried across tools and channels",
      "Status meetings replacing real-time visibility",
      "Leadership decisions delayed by manual synthesis",
    ],
  },

  solution: {
    headline: "One calm command center—built for how leaders actually work.",
    body: "Gen Pulse consolidates operational signals into a single leadership layer. Not another dashboard for engineers—a daily companion that answers: who is available, what is blocked, and where attention is needed right now.",
  },

  gallery: {
    desktopDark: {
      label: "Desktop · Dark mode",
      image: "/projects/gen-pulse-desktop-dark.png",
      alt: "Gen Pulse desktop command center in dark mode",
    },
    desktopLight: {
      label: "Desktop · Light mode",
      image: "/projects/gen-pulse-desktop-light.png",
      alt: "Gen Pulse desktop command center in light mode",
    },
  } satisfies GenPulseGallery,

  features: [
    {
      title: "Daily Performance",
      description:
        "Weekly throughput, sprint health, and delivery trends—orienting the day in seconds, not spreadsheets.",
    },
    {
      title: "Team Presence",
      description:
        "Live availability, PTO, and coverage signals so leaders know who can take the work before they assign it.",
    },
    {
      title: "SLA Protection",
      description:
        "Blockers, SLA risks, and escalations surfaced early—before they become quarter-end surprises.",
    },
    {
      title: "Leadership Visibility",
      description:
        "Today at a Glance metrics and priority queues that replace morning round-ups with a shared operational picture.",
    },
  ] satisfies GenPulseFeature[],

  impact: [
    {
      title: "Faster morning decisions",
      description:
        "Leaders orient in minutes—replacing status reconstruction with a single shared view.",
    },
    {
      title: "Earlier risk intervention",
      description:
        "Blockers and SLA pressure visible before stand-up, not after the sprint slips.",
    },
    {
      title: "Fewer alignment meetings",
      description:
        "Operational clarity reduces the need for ad hoc check-ins and status decks.",
    },
    {
      title: "Shared team accountability",
      description:
        "One operational picture across CSM teams—fairer staffing, clearer escalation paths.",
    },
  ] satisfies GenPulseImpact[],
};
