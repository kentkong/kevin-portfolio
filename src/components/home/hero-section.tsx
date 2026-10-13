const portfolioStatement =
  "This is not a second CV. It is how I work: find the friction in a marketing team, design a view people can actually use, then get directors, engineers and managers aligned.";

export function HeroSection() {
  return (
    <section className="site-hero">
      <div className="site-container">
        <div className="site-hero__editorial">
          <div className="site-hero__editorial-frame">
            <h1
              className="site-hero__editorial-headline"
              aria-label="As a CRM manager, I solve team problems from the inside."
            >
              <span className="site-hero__expertise-line">As a CRM manager</span>
              <span className="site-hero__expertise-line">I solve team problems</span>
              <span className="site-hero__expertise-line">from the inside</span>
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
