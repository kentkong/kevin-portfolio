import { exploringTags } from "@/lib/site";

export function ExploringSection() {
  return (
    <section className="site-section site-exploring" aria-labelledby="exploring-title">
      <div className="site-container site-exploring__inner">
        <div className="site-section__intro">
          <p className="site-label">Continuous Learning</p>
          <h2 id="exploring-title" className="site-section__title">
            Currently Exploring
          </h2>
        </div>
        <ul className="site-tag-list">
          {exploringTags.map((tag) => (
            <li key={tag} className="site-tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
