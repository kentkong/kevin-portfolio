const disciplines = [
  {
    number: "01",
    title: "CRM & MARKETING OPERATIONS",
    body: "Lifecycle marketing, campaign operations, CRM platforms and team performance.",
  },
  {
    number: "02",
    title: "PRODUCT & INTERFACE CONCEPTS",
    body: "UX/UI exploration, dashboards, workflows and digital product concepts.",
  },
  {
    number: "03",
    title: "AI & OPERATIONAL TOOLS",
    body: "AI-assisted workflows, team intelligence and operational applications.",
  },
];

const portfolioLead =
  "A growing portfolio of CRM, marketing operations, product and AI-assisted application concepts, combining my professional experience with hands-on experimentation in UX/UI, workflow design and operational tools.";

export function HeroSection() {
  return (
    <section className="site-hero">
      <div className="site-container">
        <div className="site-hero__editorial">
          <div className="site-hero__editorial-sheet">
            <div className="site-hero__editorial-frame">
              <h1
                className="site-hero__editorial-headline"
                aria-label="CRM Marketing. UX UI Visual Product Design. Enterprise App Solutions."
              >
                <span className="site-hero__expertise-line">CRM MARKETING</span>
                <span className="site-hero__expertise-line">UX / UI VISUAL PRODUCT DESIGN</span>
                <span className="site-hero__expertise-line">ENTERPRISE APP SOLUTIONS</span>
              </h1>
            </div>

            <div className="site-hero__discipline-band">
              <p className="site-hero__portfolio-lead">{portfolioLead}</p>
              <div className="site-hero__discipline-grid" aria-label="Portfolio focus areas">
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
        </div>
      </div>
    </section>
  );
}
