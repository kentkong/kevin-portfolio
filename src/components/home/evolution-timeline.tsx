import { evolutionSteps } from "@/lib/site";

export function EvolutionTimeline() {
  return (
    <section className="site-section site-evolution" aria-labelledby="evolution-title">
      <div className="site-container site-evolution__inner">
        <div className="site-section__intro">
          <p className="site-label">Product Evolution</p>
          <h2 id="evolution-title" className="site-section__title">
            Each product evolved from a real business problem
          </h2>
          <p className="site-section__lead">
            Gen Pulse, PulseOps AI, and SprintIQ are not random demos—they are a deliberate
            progression from operational visibility to intelligence to delivery planning.
          </p>
        </div>

        <ol className="site-evolution__track">
          {evolutionSteps.map((step, index) => (
            <li key={step.id} className="site-evolution__step">
              <span className="site-evolution__node" aria-hidden />
              <div>
                <p className="site-evolution__label">{step.label}</p>
                {index < evolutionSteps.length - 1 && (
                  <span className="site-evolution__connector" aria-hidden />
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
