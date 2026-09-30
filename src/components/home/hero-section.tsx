const disciplines = [
  {
    number: "01",
    title: "CRM MARKETING OPERATIONS & LIFECYCLE",
    body: "Customer experience, lifecycle strategy, CRM platforms and marketing operations.",
  },
  {
    number: "02",
    title: "UX / UI PRODUCT & VISUAL DESIGN",
    body: "Product thinking, user experience, interface design and visual communication.",
  },
  {
    number: "03",
    title: "ENTERPRISE APPLICATION SOLUTIONS",
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
            <p className="site-hero__eyebrow">
              CRM MARKETING OPERATIONS&nbsp; / &nbsp;UX &amp; PRODUCT DESIGN&nbsp; / &nbsp;ENTERPRISE APPLICATIONS
            </p>
            <h1
              className="site-hero__editorial-headline"
              aria-label="Building practical digital products for real-world teams."
            >
              BUILDING PRACTICAL <span>DIGITAL PRODUCTS</span>
              <br />
              FOR REAL-WORLD TEAMS.
            </h1>
            <p className="site-hero__supporting-copy">
              Drawing on experience across CRM, lifecycle marketing, customer experience and operations,
              I design applications that improve visibility, decision-making and execution — combining
              product thinking, UX/UI, data and AI.
            </p>
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
