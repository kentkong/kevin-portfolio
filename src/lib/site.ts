export const site = {
  name: "Kevin Alan Mold",
  title: "Kevin Alan Mold — Design, Marketing & Technology",
  description:
    "A multidisciplinary portfolio spanning CRM and marketing, visual design, digital products, applications, customer experience and technology solutions for corporate teams.",
  email: "jovianuk@gmail.com",
  linkedin: "https://www.linkedin.com/in/kevinmold",
  github: "https://github.com/kentkong",
  label: "Design · Marketing · Technology",
  headline: "Design. Marketing. & Technology.",
  heroTagline: [
    { label: "Design" },
    { label: "Marketing" },
    { label: "& Technology" },
  ],
  heroFocusLines: [
    "UX · PRODUCT · VISUAL",
    "CRM · LIFECYCLE · MARTECH",
    "AI · AUTOMATION · TECHNOLOGY",
    "APPS · OPERATIONS · CUSTOMER EXPERIENCE",
  ],
  heroIntro:
    "A multidisciplinary portfolio spanning CRM & marketing, visual design, digital products, applications, customer experience and technology solutions for corporate teams.",
  heroExperience:
    "17 years across CRM & marketing, technology, operational leadership and design-led delivery.",
  aboutBio: [
    "I'm a Senior Marketing and Lifecycle leader with over 17 years of experience working for global organizations including Motorola, IBM, Hewlett Packard, Infor, Merkle, and most recently Gen Digital, where I manage the Norton Email Development team.",
    "With a background in Graphic and Web Design, I have a passion for combining business strategy, data, and modern design to solve real-world operational challenges. More recently, I've been building AI-powered products that improve visibility, simplify decision-making, and help teams work more effectively.",
    "Originally from England, I've also lived and worked in the USA and Canada before settling in Prague. Outside of work, I'm a lifelong fitness enthusiast, and passionate home cook with a love for Italy and its culture.",
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#explore-work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/thinking" },
  { label: "CV / Contact", href: "/contact" },
] as const;

export const exploringGroups = [
  {
    label: "Design & Experience",
    tags: ["AI Product Design", "Modern UX Systems"],
  },
  {
    label: "AI & Engineering",
    tags: ["Agentic Workflows", "Data Modelling"],
  },
  {
    label: "Data & Lifecycle Stack",
    tags: ["Hightouch", "Lifecycle Automation"],
  },
  {
    label: "Skills & Technologies",
    tags: [
      "Cursor",
      "OpenAI",
      "Claude",
      "Next.js",
      "React",
      "SFMC",
      "Braze",
      "Snowflake",
      "Jira",
    ],
  },
] as const;

export const exploringTags = exploringGroups.flatMap((group) => group.tags);
