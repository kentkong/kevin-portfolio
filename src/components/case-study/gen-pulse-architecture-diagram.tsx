export function GenPulseArchitectureDiagram() {
  return (
    <div className="gp-arch" aria-label="Gen Pulse architecture diagram">
      <div className="gp-arch__sources">
        <p className="gp-arch__group-label">Fragmented signals</p>
        <ul className="gp-arch__nodes">
          <li>Jira</li>
          <li>Slack</li>
          <li>Workday</li>
          <li>Confluence</li>
        </ul>
      </div>

      <div className="gp-arch__flow" aria-hidden>
        <span className="gp-arch__line" />
        <span className="gp-arch__arrow">→</span>
      </div>

      <div className="gp-arch__core">
        <p className="gp-arch__group-label">Unified layer</p>
        <div className="gp-arch__hub">
          <p className="gp-arch__hub-title">Gen Pulse</p>
          <p className="gp-arch__hub-sub">Daily command center</p>
        </div>
      </div>

      <div className="gp-arch__flow" aria-hidden>
        <span className="gp-arch__line" />
        <span className="gp-arch__arrow">→</span>
      </div>

      <div className="gp-arch__outcomes">
        <p className="gp-arch__group-label">Leadership outcomes</p>
        <ul className="gp-arch__nodes">
          <li>Today at a Glance</li>
          <li>Team Presence</li>
          <li>SLA Protection</li>
          <li>Priority Signals</li>
        </ul>
      </div>
    </div>
  );
}
