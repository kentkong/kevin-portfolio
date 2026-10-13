const portfolioStatement =
  "They help think about modern CRM marketing, solve team problems, and unify data so teams can work more efficiently.";

export function HeroSection() {
  return (
    <section className="site-hero">
      <div className="site-container">
        <div className="site-hero__editorial">
          <div className="site-hero__editorial-frame">
            <h1
              className="site-hero__editorial-headline"
              aria-label="As a CRM manager, the role led to apps for marketing teams."
            >
              <span className="site-hero__expertise-line">As a CRM manager</span>
              <span className="site-hero__expertise-line">the role led to apps</span>
              <span className="site-hero__expertise-line">for marketing teams</span>
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
