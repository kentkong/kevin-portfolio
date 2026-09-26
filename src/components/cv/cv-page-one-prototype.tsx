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

export function CvPageOnePrototype() {
  return (
    <section className="cv-prototype" aria-labelledby="cv-prototype-title">
      <div className="site-container cv-prototype__container">
        <div className="cv-prototype__intro">
          <p className="cv-prototype__eyebrow">Phase 1 / CV visual direction</p>
          <h1 id="cv-prototype-title">Page One prototype</h1>
          <p>
            Built from existing portfolio facts and the role details supplied in the brief. The
            source DOCX is not present in the repository yet, so achievement bullets are not being
            invented.
          </p>
        </div>

        <article className="cv-document-page" aria-label="Kevin Alan Mold CV page one prototype">
          <header className="cv-document__hero">
            <div>
              <p className="cv-document__kicker">Kevin Alan Mold</p>
              <h2>Marketing, Operations &amp; Customer Experience Leader</h2>
            </div>
            <p className="cv-document__contact">
              Prague, Czech Republic
              <br />
              linkedin.com/in/kevinmold
              <br />
              jovianuk@gmail.com
            </p>
          </header>

          <div className="cv-document__capabilities" aria-label="Capability system">
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
                global organizations including Motorola, IBM, Hewlett Packard, Infor, Merkle, and
                Gen Digital, where Kevin manages the Norton Email Development team.
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
                  <div>
                    <p className="cv-role__company">Gen Digital / Norton</p>
                    <h3>Manager — Email Platform</h3>
                  </div>
                  <p className="cv-role__meta">
                    Prague
                    <br />
                    2023–2026
                  </p>
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
                  <div>
                    <p className="cv-role__company">Merkle</p>
                    <h3>Business Analyst</h3>
                  </div>
                  <p className="cv-role__meta">2022–2023</p>
                </div>
                <p className="cv-role__summary">
                  Page One begins the Merkle entry; full detail will continue on Page Two once the
                  authoritative CV source document is available.
                </p>
              </article>
            </div>
          </section>
        </article>
      </div>
    </section>
  );
}
