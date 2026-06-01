const SPRINTIQ_STEPS = [
  {
    id: "objective",
    name: "Objective",
    role: "Define the goal",
    hue: "objective",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="stack-flow__icon">
        <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        <path d="M12 5V3M12 21v-2M5 12H3M21 12h-2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "blueprint",
    name: "Blueprint",
    role: "Build the plan",
    hue: "blueprint",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="stack-flow__icon">
        <path d="M4 7h16M4 12h10M4 17h14" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17 10l3 2-3 2v-4z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "review",
    name: "Review",
    role: "Copilot & refine",
    hue: "review",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="stack-flow__icon">
        <path
          d="M8 9h8M8 13h5M6 5h12a2 2 0 0 1 2 2v8l-3-2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M18 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "ready",
    name: "Ready",
    role: "Export & deliver",
    hue: "ready",
    highlight: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="stack-flow__icon">
        <path
          d="M12 3l2.2 6.8H21l-5.5 4 2.2 6.8L12 16.6 6.1 20.6 8.3 13.8 3 9.8h6.8L12 3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

function StackFlowArrow() {
  return (
    <svg className="stack-flow__arrow" width="20" height="10" viewBox="0 0 20 10" aria-hidden>
      <line
        x1="0"
        y1="5"
        x2="15"
        y2="5"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <polygon points="15,2 20,5 15,8" fill="currentColor" />
    </svg>
  );
}

export function SprintIQStackFlow() {
  return (
    <div
      className="stack-flow"
      aria-label="SprintIQ workflow from objective through blueprint and review to ready"
    >
      <p className="stack-flow__label">Objective to delivery pipeline</p>
      <div className="stack-flow__track">
        {SPRINTIQ_STEPS.map((step, index) => (
          <div key={step.id} className="stack-flow__segment">
            <div
              className={`stack-flow__node stack-flow__node--${step.hue}${"highlight" in step && step.highlight ? " stack-flow__node--highlight" : ""}`}
            >
              {step.icon}
              <p className="stack-flow__name">{step.name}</p>
              <p className="stack-flow__role">{step.role}</p>
            </div>
            {index < SPRINTIQ_STEPS.length - 1 ? <StackFlowArrow /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
