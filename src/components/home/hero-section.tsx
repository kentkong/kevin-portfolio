const portfolioStatement =
  "I take problems from inside marketing and lifecycle teams and turn them into something the team can actually run with — a clearer operating view, a stack people can see, a journey they can share. These pieces are how I think, not a second CV.";

export function HeroSection() {
  return (
    <section className="site-hero">
      <div className="site-container">
        <div className="site-hero__editorial">
          <div className="site-hero__editorial-frame">
            <h1
              className="site-hero__editorial-headline"
              aria-label="Team problems. Working systems. Modern stacks."
            >
              <span className="site-hero__expertise-line">TEAM PROBLEMS</span>
              <span className="site-hero__expertise-line">WORKING SYSTEMS</span>
              <span className="site-hero__expertise-line">MODERN STACKS</span>
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
