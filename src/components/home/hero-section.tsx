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
              aria-label="CRM marketing. Product concepts. AI and operational tools."
            >
              <span className="site-hero__expertise-line">CRM MARKETING</span>
              <span className="site-hero__expertise-line">PRODUCT CONCEPTS</span>
              <span className="site-hero__expertise-line">AI &amp; OPERATIONAL TOOLS</span>
            </h1>
          </div>

          <div className="site-hero__statement-sheet">
            <p className="site-hero__portfolio-statement">{portfolioStatement}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
