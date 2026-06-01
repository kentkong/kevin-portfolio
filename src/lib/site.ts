export const site = {
  name: "Kevin Alan Mold",
  title: "Kevin Alan Mold — AI Product Builder",
  description:
    "Enterprise AI product portfolio showcasing practical solutions for development teams, business owners, project managers, and leaders.",
  email: "jovianuk@gmail.com",
  linkedin: "https://www.linkedin.com/in/kevinmold",
  github: "https://github.com/kentkong",
  label: "Marketing Leader · AI Product Builder · Delivery Strategist",
  headline: "Building practical Enterprise AI products for real-world teams.",
  heroLabels: ["Marketing & lifecycle operations"],
  heroIntro:
    "Products inspired by real operational challenges I've encountered leading marketing, lifecycle, customer success, and operational teams. Each solution focuses on improving visibility, decision-making, and execution through thoughtful AI-powered experiences.",
  aboutBio: [
    "I'm a Senior Marketing and Lifecycle leader with over 17 years of experience working for global organizations including Motorola, IBM, Hewlett Packard, Infor, Merkle, and most recently Gen Digital, where I manage the Norton Email Development team.",
    "With a background in Graphic and Web Design, I have a passion for combining business strategy, data, and modern design to solve real-world operational challenges. More recently, I've been building AI-powered products that improve visibility, simplify decision-making, and help teams work more effectively.",
    "Originally from England, I've also lived and worked in the USA and Canada before settling in Prague. Outside of work, I'm a lifelong fitness enthusiast, and passionate home cook with a love for Italy and its culture.",
  ],
} as const;

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
] as const;

export const exploringGroups = [
  {
    label: "Design & Experience",
    tags: ["AI Product Design", "Modern UX Systems"],
  },
  {
    label: "AI & Engineering",
    tags: ["Cursor", "Agentic Workflows", "Data Modelling"],
  },
  {
    label: "Data & Lifecycle Stack",
    tags: ["Snowflake", "Hightouch", "Braze", "Lifecycle Automation"],
  },
] as const;

export const exploringTags = exploringGroups.flatMap((group) => group.tags);
