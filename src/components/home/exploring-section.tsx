import { exploringGroups } from "@/lib/site";

export function ExploringSection() {
  return (
    <section className="site-section site-exploring" aria-labelledby="exploring-title">
      <div className="site-container site-exploring__inner">
        <div className="site-section__intro site-panel site-exploring__intro">
          <p className="site-label">Continuous Learning</p>
          <h2 id="exploring-title" className="site-section__title">
            Currently Exploring
          </h2>
        </div>

        <div className="site-panel site-exploring__groups">
          {exploringGroups.map((group) => (
            <div key={group.label} className="site-exploring__group">
              <p className="site-exploring__group-label">{group.label}</p>
              <ul className="site-tag-list">
                {group.tags.map((tag) => (
                  <li key={tag} className="site-tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
