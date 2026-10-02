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
      <div className="site-hero__ambient" aria-hidden="true">
        <span className="site-hero__ambient-field site-hero__ambient-field--lavender" />
        <span className="site-hero__ambient-field site-hero__ambient-field--cyan" />
        <span className="site-hero__ambient-field site-hero__ambient-field--blush" />
        <span className="site-hero__ambient-field site-hero__ambient-field--warm" />
      </div>
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
    </section>
  );
}
