const disciplines = [
  {
    number: "01",
    title: "CRM & MARKETING",
    body: "Lifecycle, campaign operations and CRM platforms.",
  },
  {
    number: "02",
    title: "PRODUCT CONCEPTS",
    body: "Dashboards, interfaces and UX/UI exploration.",
  },
  {
    number: "03",
    title: "AI & OPERATIONS",
    body: "Workflow tools, team intelligence and automation.",
  },
];

const portfolioStatement =
  "A growing portfolio combining my experience in CRM and marketing operations with hands-on work in product concepts, UX/UI and AI-assisted operational tools.";

export function HeroSection() {
  return (
    <section className="site-hero">
      <div className="site-container">
        <div className="site-hero__editorial">
          <div className="site-hero__editorial-frame">
            <h1
              className="site-hero__editorial-headline"
              aria-label="CRM Marketing. Product and interface concepts. AI and operational tools."
            >
              <span className="site-hero__expertise-line">CRM MARKETING</span>
              <span className="site-hero__expertise-line">PRODUCT &amp; INTERFACE CONCEPTS</span>
              <span className="site-hero__expertise-line">AI &amp; OPERATIONAL TOOLS</span>
            </h1>
          </div>

          <div className="site-hero__statement-sheet">
            <p className="site-hero__portfolio-statement">{portfolioStatement}</p>
          </div>

          <div className="site-hero__focus-categories" aria-label="Portfolio focus areas">
            {disciplines.map((discipline) => (
              <article className="site-hero__discipline" key={discipline.number}>
                <h2 className="site-hero__discipline-heading">
                  <span className="site-hero__discipline-index">{discipline.number}</span>
                  <span className="site-hero__discipline-dash" aria-hidden="true">
                    —
                  </span>
                  <span className="site-hero__discipline-title">{discipline.title}</span>
                </h2>
                <p className="site-hero__discipline-body">{discipline.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
