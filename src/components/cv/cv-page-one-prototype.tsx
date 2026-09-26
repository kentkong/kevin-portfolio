import Link from "next/link";

const capabilities = [
  "CRM & Lifecycle",
  "Operations",
  "Product & UX",
  "AI & Automation",
  "Leadership",
  "Business Analysis",
];

const proofPoints = [
  {
    value: "17 YEARS",
    label: "International Corporate Experience",
  },
  {
    value: "GLOBAL",
    label: "Customer Engagement",
  },
  {
    value: "20",
    label: "Team Leadership",
  },
];

const genDigitalBullets = [
  "Lead global lifecycle marketing operations supporting Norton customer engagement programmes reaching millions of customers worldwide.",
  "Lead, hire and develop distributed teams of up to 20 specialists, with responsibility for onboarding, performance management, resource planning and capability development.",
  "Own day-to-day operational delivery and performance across a large-scale customer engagement environment, maintaining campaign delivery standards, quality and platform scalability.",
  "Drive cross-functional initiatives with marketing, product, engineering, analytics and business stakeholders to improve customer experience and operational efficiency.",
  "Lead operational reviews and stakeholder discussions, communicating priorities, performance, risks and improvement opportunities to support decision-making.",
  "Introduced AI-assisted workflows to improve content generation, campaign execution and team productivity.",
  "Contributed to proof-of-concept initiatives involving Braze, Iterable, Snowflake and Hightouch, supporting evaluation of future platform and data capabilities.",
];

const merkleBullets = [
  "Led requirements discovery and analysis, translating business and customer needs into functional requirements and scalable Salesforce-based customer engagement solutions.",
  "Acted as the bridge between business stakeholders and technical delivery teams, working across Product, Engineering, UX/UI and CRM to translate requirements into actionable solutions.",
  "Created and refined user stories, acceptance criteria, process requirements and functional specifications, ensuring requirements were clear, testable and understood by development teams.",
  "Contributed across the Agile/Scrum delivery lifecycle, including backlog refinement, sprint planning, prioritisation, stakeholder reviews and delivery coordination.",
  "Collaborated with UX/UI teams on customer journeys and digital experiences, balancing user needs, business requirements and technical feasibility.",
];

const inforBullets = [
  "Delivered advanced technical and application support for enterprise ERP environments, diagnosing complex software, data and system issues for international business customers.",
  "Performed root-cause analysis and technical troubleshooting using SQL, application logs, debugging tools and system data to investigate and resolve complex incidents.",
  "Managed customer issues across the full support lifecycle, from investigation and replication through escalation, resolution and stakeholder communication.",
  "Collaborated with Engineering, Product and Development teams to reproduce defects, analyse technical problems and support software fixes and product improvements.",
  "Completed specialist Infor ERP systems training in Stockholm, Sweden, strengthening technical and functional knowledge of enterprise applications and business processes.",
  "Translated complex technical findings into clear explanations and practical customer solutions, combining technical investigation with strong B2B customer support.",
];

const earlierBullets = [
  "Built seven years of enterprise technology, technical support and operations experience across major global organisations including IBM, Hewlett Packard, Motorola and Ariba.",
  "Developed practical expertise in networking fundamentals, connectivity and technical troubleshooting, diagnosing hardware, software, network and system-related issues.",
  "Worked with Motorola Canopy telecommunications technology, developing knowledge of wireless networking and telecommunications environments.",
  "Completed Motorola Six Sigma training, applying structured approaches to problem-solving, process improvement, quality and operational efficiency.",
  "Worked across technical support, customer operations and enterprise technology environments, supporting business-critical systems and services for international customers.",
  "Collaborated with international and cross-functional technical teams, escalating complex issues, communicating solutions and supporting effective service delivery.",
  "Built the technical and operational foundation for later progression into Business Analysis, Agile delivery, CRM technology, project delivery and operational leadership.",
];

const coreStrengths = [
  "CRM & Lifecycle Marketing",
  "Marketing Operations",
  "MarTech",
  "People Leadership",
  "Team Development",
  "Operational Management",
  "Business Analysis",
  "Requirements Gathering",
  "Solution Design",
  "Project Management",
  "Agile/Scrum",
  "Process Improvement",
  "Executive Communication",
  "Presentations",
  "Stakeholder Management",
  "Product",
  "Engineering",
  "UX/UI",
  "Visual & Application Design",
  "Data & Customer Analytics",
  "Performance Measurement",
  "Reporting",
  "AI & Workflow Automation",
  "Strategic Problem Solving",
  "Technical Expertise",
];

const technologies = [
  {
    label: "CRM & Marketing",
    items: "Salesforce Marketing Cloud (SFMC) • Braze • Iterable • CRM & Marketing Automation Platforms",
  },
  {
    label: "Data & Analytics",
    items: "SQL • Snowflake • Hightouch • BigQuery / GCP • EasyBI",
  },
  {
    label: "Delivery & Collaboration",
    items: "Jira • Agile/Scrum • Backlog Management • Sprint Planning",
  },
  {
    label: "AI & Digital",
    items: "AI Workflow Automation • Cursor AI • UX/UI & Digital Design • HTML • CSS • JavaScript",
  },
];

const projectLinks = [
  {
    title: "Lifecycle Architecture Studio",
    meta: "CRM / Customer Experience",
    href: "/projects/lifecycle-architecture-studio",
  },
  {
    title: "Gen Pulse",
    meta: "Product / Operations",
    href: "/projects/gen-pulse",
  },
  {
    title: "Revival",
    meta: "Product / UX / AI",
    href: "/projects/revival",
  },
  {
    title: "SprintIQ",
    meta: "AI / Operations",
    href: "/projects/sprintiq",
  },
];

export function CvPageOnePrototype() {
  return (
    <section className="cv-prototype cv-prototype--editorial" aria-labelledby="cv-prototype-title">
      <div id="cv-document-spread" className="cv-spread-stage">
        <div className="site-container cv-prototype__container">
          <div className="cv-spread-stage__intro">
            <p id="cv-prototype-title">Curriculum Vitae</p>
            <span>Authoritative CV content integrated. PDF generation is paused for layout review.</span>
          </div>
          <div className="cv-spread">
            <figure>
              <figcaption>Page 01</figcaption>
              <a href="#cv-page-01" aria-label="View CV page 01">
                <CvDocumentPageOne />
                <span>View Page 01 →</span>
              </a>
            </figure>
            <figure>
              <figcaption>Page 02</figcaption>
              <a href="#cv-page-02" aria-label="View CV page 02">
                <CvDocumentPageTwo />
                <span>View Page 02 →</span>
              </a>
            </figure>
          </div>
        </div>
      </div>

      <div className="cv-beyond">
        <div className="site-container cv-prototype__container">
          <p className="cv-beyond__eyebrow">03 / Beyond the CV</p>
          <div className="cv-beyond__grid">
            <h2>Selected work translating experience into products, systems and customer experiences.</h2>
            <div className="cv-beyond__projects">
              {projectLinks.map((project) => (
                <Link href={project.href} key={project.href} className="cv-beyond__project">
                  <span>{project.meta}</span>
                  <strong>{project.title}</strong>
                </Link>
              ))}
              <Link href="/#explore-work" className="cv-beyond__all">
                Explore all projects →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="cv-contact">
        <div className="site-container cv-prototype__container">
          <h2>Let&apos;s work together.</h2>
          <p>Prague / Czech Republic</p>
          <div>
            <a href="mailto:jovianuk@gmail.com">Email →</a>
            <a href="https://www.linkedin.com/in/kevinmold" target="_blank" rel="noreferrer">
              LinkedIn →
            </a>
            <a href="#cv-document-spread">Download CV →</a>
          </div>
        </div>
      </footer>
    </section>
  );
}

function CvDocumentPageOne() {
  return (
    <article id="cv-page-01" className="cv-document-page" aria-label="Kevin Alan Mold CV page one">
      <header className="cv-document__hero">
        <div className="cv-document__identity">
          <p className="cv-document__kicker">Kevin Alan Mold</p>
          <h2>Marketing, Operations &amp; Customer Experience Leader</h2>
          <p>CRM / Lifecycle — Product / UX — AI / Automation</p>
        </div>
        <p className="cv-document__contact">
          PRG / CZ
          <br />
          +420 774358879
          <br />
          jovianuk@gmail.com
          <br />
          linkedin.com/in/kevinmold →
        </p>
      </header>

      <div className="cv-document__capabilities" aria-label="Capability index">
        {capabilities.map((capability) => (
          <span key={capability}>{capability}</span>
        ))}
      </div>

      <div className="cv-document__proof" aria-label="Professional proof points">
        {proofPoints.map((point) => (
          <div key={point.value}>
            <strong>{point.value}</strong>
            <span>{point.label}</span>
          </div>
        ))}
      </div>

      <section className="cv-document__section cv-document__profile">
        <div className="cv-document__section-label">
          <span>01</span>
          <p>Profile</p>
        </div>
        <div className="cv-document__section-body cv-document__profile-copy">
          <p>
            Marketing, operations and customer experience leader with 17 years of international corporate
            experience spanning CRM and lifecycle marketing, customer platforms, business analysis,
            technology, technical support, project management digital delivery and people leadership. Most
            recently at Gen Digital/Norton, leading teams and operations supporting large-scale global
            customer engagement programmes.
          </p>
          <p>
            Experienced in building and leading distributed teams of up to 20 specialists, while driving
            operational delivery, process improvement and cross-functional programmes across Marketing,
            Product, Engineering, Analytics and UX/UI. Combines strategic leadership with hands-on
            experience in Agile/Scrum delivery, project management, business analysis and CRM technology.
          </p>
          <p>
            Brings a distinctive combination of commercial, technical, operational and creative experience,
            supported by a background in graphic/web design and UX/UI and practical experience applying AI
            and automation to modern workflows. Comfortable operating as both a people leader and senior
            individual contributor, translating business and customer needs into practical solutions that
            improve customer experience and business performance.
          </p>
        </div>
      </section>

      <section className="cv-document__section cv-document__experience">
        <div className="cv-document__section-label">
          <span>02</span>
          <p>Experience</p>
        </div>
        <div className="cv-document__section-body">
          <CvRole
            dates="Mar 2023—Jun 1st 2026"
            company="Gen Digital / Norton"
            title="Manager — Email Platform"
            location="Prague"
            bullets={genDigitalBullets}
            primary
          />
          <CvRole
            dates="Apr 2022—Mar 2023"
            company="Merkle"
            title="Business Analyst"
            location="Prague"
            bullets={merkleBullets}
          />
        </div>
      </section>
    </article>
  );
}

function CvDocumentPageTwo() {
  return (
    <article id="cv-page-02" className="cv-document-page" aria-label="Kevin Alan Mold CV page two">
      <section className="cv-document__section cv-document__experience cv-document__section--first">
        <div className="cv-document__section-label">
          <span>02</span>
          <p>Experience continued</p>
        </div>
        <div className="cv-document__section-body">
          <CvRole
            dates="Sep 2016—Dec 2020"
            company="Infor"
            title="Support Consultant & Analyst"
            location="Prague"
            bullets={inforBullets}
          />
          <CvRole
            dates="2009—2016"
            company="Earlier Enterprise Technology & Operations"
            title="IBM · Hewlett Packard · Motorola · Ariba"
            location="Prague"
            bullets={earlierBullets}
          />
        </div>
      </section>

      <section className="cv-document__section">
        <div className="cv-document__section-label">
          <span>03</span>
          <p>Core strengths / Expertise</p>
        </div>
        <div className="cv-matrix cv-matrix--dense">
          {coreStrengths.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="cv-document__section">
        <div className="cv-document__section-label">
          <span>04</span>
          <p>Technology</p>
        </div>
        <div className="cv-tech-list">
          {technologies.map((group) => (
            <div key={group.label}>
              <h3>{group.label}</h3>
              <p>{group.items}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cv-document__section">
        <div className="cv-document__section-label">
          <span>05</span>
          <p>Education</p>
        </div>
        <div className="cv-education">
          <p>
            <strong>BA (Hons) Graphic &amp; Web Design — 2:1</strong>
            <span>
              Staffordshire University — Graphic, web and digital design with a focus on visual
              communication, digital experiences, layout and user-centred design principles.
            </span>
          </p>
          <p>
            <strong>Web Design &amp; Development</strong>
            <span>
              Prague College — HTML • CSS • JavaScript • jQuery. Practical web design and front-end
              development, combining digital design, usability and web technologies.
            </span>
          </p>
          <p>
            <strong>Motorola Six Sigma</strong>
            <span>
              Training in process improvement, operational efficiency and structured problem-solving.
            </span>
          </p>
        </div>
      </section>

      <section className="cv-document__section">
        <div className="cv-document__section-label">
          <span>06</span>
          <p>Additional information</p>
        </div>
        <div className="cv-additional">
          <span>English — Native | Czech — A2 (actively developing)</span>
          <span>British citizen and Czech permanent resident, with over 16 years of international professional experience in Prague.</span>
        </div>
      </section>
    </article>
  );
}

type CvRoleProps = {
  dates: string;
  company: string;
  title: string;
  location: string;
  bullets: string[];
  primary?: boolean;
};

function CvRole({ dates, company, title, location, bullets, primary = false }: CvRoleProps) {
  return (
    <article className={`cv-role${primary ? " cv-role--primary" : ""}`}>
      <div className="cv-role__header">
        <p className="cv-role__meta">{dates}</p>
        <div>
          <p className="cv-role__company">{company}</p>
          <h3>{title}</h3>
          <p className="cv-role__location">{location}</p>
        </div>
      </div>
      <ul className="cv-role__bullets">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}
