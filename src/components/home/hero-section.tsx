const portfolioStatement =
  "These pieces are how I work through friction on marketing and lifecycle teams — a clearer operating view, a stack people can see, a journey they can share.";

function HeroLine({ children }: { children: string }) {
  return (
    <span className="site-hero__expertise-line">
      <span className="site-hero__expertise-text">{children}</span>
      <span className="site-hero__expertise-light" aria-hidden="true">
        {children}
      </span>
    </span>
  );
}

export function HeroSection() {
  return (
    <section className="site-hero">
      <div className="site-container">
        <div className="site-hero__editorial">
          <div className="site-hero__editorial-frame">
            <h1
              className="site-hero__editorial-headline"
              aria-label="As a CRM manager, I use this work to solve team problems."
            >
              <HeroLine>As a CRM manager</HeroLine>
              <HeroLine>I use this work</HeroLine>
              <HeroLine>to solve team problems</HeroLine>
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
