const disciplines = [
  {
    number: "01",
    title: "CUSTOMER EXPERIENCE",
    body: "Lifecycle strategy, CRM platforms, marketing operations and customer engagement.",
  },
  {
    number: "02",
    title: "PRODUCT EXPERIENCE",
    body: "Product thinking, UX/UI, visual communication and digital experience design.",
  },
  {
    number: "03",
    title: "APPLICATION INTELLIGENCE",
    body: "AI-enabled applications, workflow automation and operational intelligence.",
  },
];

export function HeroSection() {
  return (
    <section className="site-hero">
      <div className="site-container">
        <div className="site-hero__editorial">
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
            <p className="site-hero__portfolio-lead">
              A selection of application concepts and case studies from CRM and lifecycle
              marketing, UX and product design, and AI-assisted operational tools — including
              interactive demos.
            </p>
            <div className="site-hero__discipline-grid" aria-label="Core disciplines">
              {disciplines.map((discipline) => (
                <article className="site-hero__discipline" key={discipline.number}>
                  <span>{discipline.number}</span>
                  <h2>{discipline.title}</h2>
                  <p>{discipline.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
