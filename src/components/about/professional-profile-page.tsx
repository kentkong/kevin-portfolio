import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/asset-path";
import { site } from "@/lib/site";
import { basePath } from "@/lib/site-config";

const cvPdfHref = `${basePath}/kevin-alan-mold-cv.pdf`;

export function ProfessionalProfilePage() {
  return (
    <main className="about-profile" aria-labelledby="about-profile-title">
      <div className="about-profile__sheet">
        <section className="about-profile__section about-profile__hero">
          <SectionLabel number="01" label="About" />
          <div className="about-profile__hero-grid">
            <div className="about-profile__intro">
              <h1 id="about-profile-title">Kevin Alan Mold</h1>
              <p className="about-profile__positioning">
                CRM, Marketing &amp; Operations Manager
                <br />
                with a background in UX/UI &amp; Visual Design
              </p>
              <div className="about-profile__copy">
                <p>
                  I&apos;m a marketing, operations and customer experience manager with over 17 years of
                  international corporate experience across CRM and lifecycle marketing, customer
                  platforms, business analysis, project management, Agile delivery, technology and people
                  leadership.
                </p>
                <p>
                  My background in graphic and web design gives me a strong visual and user-centred
                  perspective to the way I approach products, systems and customer experiences —
                  connecting customer needs, data, technology and design to create better business
                  outcomes.
                </p>
              </div>
            </div>
            <figure className="about-profile__portrait">
              <Image
                src={assetPath("/kevin-profile.jpg")}
                alt="Portrait of Kevin Alan Mold"
                width={420}
                height={420}
                priority
              />
            </figure>
          </div>
        </section>

        <section className="about-profile__section">
          <SectionLabel number="02" label="Core Expertise" />
          <div className="about-profile__expertise">
            {expertiseColumns.map((column) => (
              <ul key={column.join("-")}>
                {column.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        <section className="about-profile__section">
          <SectionLabel number="03" label="Selected Experience" />
          <div className="about-profile__timeline">
            {experience.map((role) => (
              <article className="about-profile__experience-item" key={role.company}>
                <div className="about-profile__marker" aria-hidden />
                <div className="about-profile__logo-cell">
                  {role.logos.map((logo) => (
                    <LogoMark key={logo.alt} logo={logo} />
                  ))}
                </div>
                <div>
                  <h2>{role.title}</h2>
                  <p>{role.description}</p>
                </div>
                <time>{role.date}</time>
              </article>
            ))}
          </div>
        </section>

        <section className="about-profile__section">
          <SectionLabel number="04" label="Tools & Platforms" />
          <div className="about-profile__tools">
            {toolRows.map((row) => (
              <div className="about-profile__tool-row" key={row.category}>
                <h2>{row.category}</h2>
                <div className="about-profile__tool-logos">
                  {row.tools.map((tool) => (
                    <LogoMark key={tool.alt} logo={tool} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about-profile__section about-profile__cta">
          <SectionLabel number="05" label="Let's Talk" />
          <div className="about-profile__cta-grid">
            <div>
              <h2>Interested in working together?</h2>
              <p>
                I&apos;m always open to conversations around CRM, marketing operations, customer
                experience, digital products, UX/UI, AI and operational transformation.
              </p>
            </div>
            <div className="about-profile__actions">
              <Link className="about-profile__button" href={`mailto:${site.email}`}>
                Get in touch <span aria-hidden>→</span>
              </Link>
              <a className="about-profile__button about-profile__button--secondary" href={cvPdfHref} download>
                Download CV <span aria-hidden>↓</span>
              </a>
              <Link
                className="about-profile__icon-link"
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </Link>
              <Link className="about-profile__icon-link" href={`mailto:${site.email}`} aria-label="Email">
                <MailIcon />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

const expertiseColumns = [
  [
    "CRM & Lifecycle Marketing",
    "Marketing Operations",
    "Customer Experience",
    "Business Analysis",
    "Project Management",
  ],
  [
    "Agile / Scrum",
    "Operational Leadership",
    "Product & Digital Experience",
    "Stakeholder Management",
    "Process Improvement",
  ],
  [
    "UX/UI & Visual Design",
    "AI & Automation",
    "Technical Troubleshooting",
    "Team Development",
    "Cross-Functional Collaboration",
  ],
];

const experience = [
  {
    company: "Gen Digital",
    logos: [{ alt: "Gen Digital", label: "Gen", variant: "gen" }],
    title: "Manager — Email Platform",
    description:
      "Lead global lifecycle marketing operations supporting Norton customer engagement programmes reaching millions of customers worldwide.",
    date: "Mar 2023 — Jun 2026",
  },
  {
    company: "Merkle",
    logos: [{ alt: "Merkle", label: "Merkle", variant: "merkle" }],
    title: "Business Analyst",
    description:
      "Led requirements discovery and analysis, translating business and customer needs into functional requirements and scalable Salesforce-based solutions.",
    date: "Apr 2022 — Mar 2023",
  },
  {
    company: "Infor",
    logos: [{ alt: "Infor", label: "Infor", variant: "infor" }],
    title: "Support Consultant & Analyst",
    description:
      "Delivered advanced technical and application support for enterprise ERP environments, diagnosing complex software, data and system issues for international business customers.",
    date: "Sep 2016 — Dec 2020",
  },
  {
    company: "Earlier Enterprise Technology & Operations",
    logos: [
      { alt: "IBM", label: "IBM", variant: "ibm" },
      { src: "/logos/about/hp.svg", alt: "Hewlett Packard" },
      { src: "/logos/about/motorola.svg", alt: "Motorola" },
      { alt: "Ariba", label: "Ariba", variant: "ariba" },
    ],
    title: "Enterprise Technology & Operations",
    description:
      "Seven years of enterprise technology, technical support and operations experience across major global organisations.",
    date: "2009 — 2016",
  },
];

const toolRows = [
  {
    category: "CRM & Marketing Technology",
    tools: [
      { alt: "Salesforce Marketing Cloud", label: "salesforce marketing cloud", variant: "salesforce" },
      { alt: "Braze", label: "braze", variant: "braze" },
      { alt: "Iterable", label: "Iterable", variant: "iterable" },
    ],
  },
  {
    category: "Product & Delivery",
    tools: [
      { src: "/logos/about/jira.svg", alt: "Jira" },
      { src: "/logos/about/figma.svg", alt: "Figma" },
      { src: "/logos/about/cursor.svg", alt: "Cursor" },
    ],
  },
  {
    category: "Design & Creative",
    tools: [
      { alt: "Adobe Photoshop", label: "Photoshop", variant: "adobe-ps" },
      { alt: "Adobe Illustrator", label: "Illustrator", variant: "adobe-ai" },
      { alt: "Adobe InDesign", label: "InDesign", variant: "adobe-id" },
    ],
  },
];

type Logo = {
  src?: string;
  alt: string;
  label?: string;
  variant?: string;
};

function LogoMark({ logo }: { logo: Logo }) {
  if (logo.src) {
    return (
      <Image
        src={assetPath(logo.src)}
        alt={logo.alt}
        width={190}
        height={80}
        unoptimized
      />
    );
  }

  return (
    <span
      className={`about-profile__logo-mark about-profile__logo-mark--${logo.variant ?? "text"}`}
      aria-label={logo.alt}
    >
      {logo.label}
    </span>
  );
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="about-profile__section-label">
      <span>{number}</span>
      <span>{label}</span>
      <i aria-hidden />
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.36 8h4.28v15H.36V8Zm7.12 0h4.1v2.05h.06c.57-1.08 1.96-2.23 4.04-2.23 4.32 0 5.12 2.84 5.12 6.53V23h-4.27v-7.67c0-1.83-.03-4.18-2.55-4.18-2.55 0-2.94 1.99-2.94 4.05V23H7.48V8Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M4 6h16v12H4z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="m4 7 8 6 8-6"
      />
    </svg>
  );
}
