import Link from "next/link";

export function PortfolioWorkIntro() {
  return (
    <section className="portfolio-work-intro" aria-labelledby="portfolio-work-intro-title">
      <div className="site-container portfolio-work-intro__container">
        <p className="portfolio-work-intro__label">What this portfolio is</p>
        <h2 id="portfolio-work-intro-title" className="portfolio-work-intro__title">
          Product work you can open, read, and explore.
        </h2>
        <p className="portfolio-work-intro__lead">
          A selection of application concepts and case studies from CRM and lifecycle marketing, UX
          and product design, and AI-assisted operational tools — including interactive demos and
          project overview pages where the work goes deeper than a single screenshot.
        </p>
        <p className="portfolio-work-intro__note">
          The <strong>Applications &amp; Case Studies</strong> section below is the primary project
          index. <strong>Explore my work</strong> situates the same work across four disciplines so
          you can see how UX, CRM, AI, and visual design connect.
        </p>
        <div className="portfolio-work-intro__jump-row" aria-label="Jump to portfolio sections">
          <Link href="#projects" className="portfolio-work-intro__jump">
            Applications &amp; Case Studies ↓
          </Link>
          <Link href="#explore-work" className="portfolio-work-intro__jump">
            Explore my work ↓
          </Link>
        </div>
      </div>
    </section>
  );
}
