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

const genDigitalFocus = [
  "Global lifecycle operations",
  "Email platform leadership",
  "Customer engagement",
  "Cross-functional delivery",
  "AI / MarTech",
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

const expertise = [
  "CRM & Lifecycle Marketing",
  "Marketing Operations",
  "Customer Experience",
  "Product & UX",
  "AI & Automation",
  "Business Analysis",
  "People Leadership",
  "Enterprise Technology",
];

const technologies = [
  {
    label: "CRM & Marketing",
    items: "Salesforce Marketing Cloud · Braze · Lifecycle Automation",
  },
  {
    label: "Data & Analytics",
    items: "SQL · Snowflake · Hightouch",
  },
  {
    label: "Delivery & Collaboration",
    items: "Jira · Agile / Scrum · Cross-functional delivery",
  },
  {
    label: "AI & Digital",
    items: "Cursor · OpenAI · Claude · Next.js · React",
  },
];

export function CvPageOnePrototype() {
  return (
    <section className="cv-prototype cv-prototype--editorial" aria-labelledby="cv-prototype-title">
      <div className="cv-web-hero">
        <div className="site-container cv-prototype__container">
          <p className="cv-web-hero__eyebrow">01 / Curriculum Vitae</p>
          <div className="cv-web-hero__grid">
            <div>
              <h1 id="cv-prototype-title">
                17 years across customers, technology &amp; digital experience.
              </h1>
              <div className="cv-web-hero__focus" aria-label="Professional focus areas">
                <span>CRM / Lifecycle</span>
                <span>Operations</span>
                <span>Product / UX</span>
                <span>AI / Automation</span>
              </div>
            </div>
            <div className="cv-web-hero__aside">
              <p>
                Product Editorial CV direction for a senior CRM, marketing operations and customer
                experience leader with product, UX and AI capability.
              </p>
              <div className="cv-web-hero__actions">
                <a href="#cv-document-spread">View CV ↓</a>
                <Link href="/contact">Contact →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="cv-document-spread" className="cv-spread-stage">
        <div className="site-container cv-prototype__container">
          <div className="cv-spread-stage__intro">
            <p>02 / Document preview</p>
            <span>
              Source DOCX not present yet. Page content uses only existing portfolio facts and
              brief-provided details.
            </span>
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
          2026 / CV
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
        <div className="cv-document__section-body">
          <p>
            Senior Marketing and Lifecycle leader with over 17 years of experience working for
            global organizations including Motorola, IBM, Hewlett Packard, Infor, Merkle, and Gen
            Digital, where Kevin manages the Norton Email Development team.
          </p>
          <p>
            Combines business strategy, data, modern design and AI-powered product thinking to
            improve visibility, simplify decision-making and help teams work more effectively.
          </p>
        </div>
      </section>

      <section className="cv-document__section cv-document__experience">
        <div className="cv-document__section-label">
          <span>02</span>
          <p>Experience</p>
        </div>
        <div className="cv-document__section-body">
          <article className="cv-role cv-role--primary">
            <div className="cv-role__header">
              <p className="cv-role__meta">2023—2026</p>
              <div>
                <p className="cv-role__company">Gen Digital / Norton</p>
                <h3>Manager — Email Platform</h3>
                <p className="cv-role__location">Prague</p>
              </div>
            </div>
            <p className="cv-role__summary">
              Leadership role across Norton email platform delivery, lifecycle operations and
              customer engagement within a global enterprise environment.
            </p>
            <div className="cv-role__focus" aria-label="Gen Digital role focus">
              {genDigitalFocus.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>

          <article className="cv-role">
            <div className="cv-role__header">
              <p className="cv-role__meta">2022—2023</p>
              <div>
                <p className="cv-role__company">Merkle</p>
                <h3>Business Analyst</h3>
              </div>
            </div>
            <p className="cv-role__summary">
              Full Merkle detail will be added from the authoritative CV source document.
            </p>
          </article>
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
          <article className="cv-role">
            <div className="cv-role__header">
              <p className="cv-role__meta">2016—2020</p>
              <div>
                <p className="cv-role__company">Infor</p>
                <h3>Support Consultant &amp; Analyst</h3>
              </div>
            </div>
          </article>
          <article className="cv-role">
            <div className="cv-role__header">
              <p className="cv-role__meta">2009—2016</p>
              <div>
                <p className="cv-role__company">Earlier Enterprise Technology &amp; Operations</p>
                <h3>IBM · Hewlett Packard · Motorola · Ariba</h3>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="cv-document__section">
        <div className="cv-document__section-label">
          <span>03</span>
          <p>Expertise</p>
        </div>
        <div className="cv-matrix">
          {expertise.map((item) => (
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
            <span>Staffordshire University</span>
          </p>
          <p>
            <strong>Web Design &amp; Development</strong>
            <span>Prague College</span>
          </p>
          <p>
            <strong>Motorola Six Sigma</strong>
          </p>
        </div>
      </section>

      <section className="cv-document__section">
        <div className="cv-document__section-label">
          <span>06</span>
          <p>Additional</p>
        </div>
        <div className="cv-additional">
          <span>English — Native</span>
          <span>Czech — A2</span>
          <span>British citizen / Czech permanent resident</span>
        </div>
      </section>
    </article>
  );
}
