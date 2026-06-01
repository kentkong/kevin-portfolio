const STACK_LAYERS = [
  {
    id: "snowflake",
    name: "Snowflake",
    role: "Data warehouse",
    hue: "snowflake",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="stack-flow__icon">
        <ellipse cx="12" cy="6" rx="7" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M5 6v8c0 1.66 3.13 3 7 3s7-1.34 7-3V6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M5 10c0 1.66 3.13 3 7 3s7-1.34 7-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.45"
        />
      </svg>
    ),
  },
  {
    id: "hightouch",
    name: "Hightouch",
    role: "Reverse ETL",
    hue: "hightouch",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="stack-flow__icon">
        <path d="M4 8h16v3H4z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 13h12v3H6z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 18h8v3H8z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "braze",
    name: "Braze",
    role: "Engagement",
    hue: "braze",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="stack-flow__icon">
        <path
          d="M5 5h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "pulse-ops",
    name: "Pulse-Ops AI",
    role: "Intelligence",
    hue: "pulse",
    highlight: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="stack-flow__icon">
        <path
          d="M12 3l1.4 4.3H18l-3.6 2.6 1.4 4.3L12 11.6 8.2 14.2l1.4-4.3L6 7.3h4.6L12 3z"
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
    <svg
      className="stack-flow__arrow"
      width="20"
      height="10"
      viewBox="0 0 20 10"
      aria-hidden
    >
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

export function PulseOpsStackFlow() {
  return (
    <div className="stack-flow" aria-label="Data flow from Snowflake through Hightouch and Braze to Pulse-Ops AI">
      <p className="stack-flow__label">Warehouse-native orchestration</p>
      <div className="stack-flow__track">
        {STACK_LAYERS.map((layer, index) => (
          <div key={layer.id} className="stack-flow__segment">
            <div
              className={`stack-flow__node stack-flow__node--${layer.hue}${"highlight" in layer && layer.highlight ? " stack-flow__node--highlight" : ""}`}
            >
              {layer.icon}
              <p className="stack-flow__name">{layer.name}</p>
              <p className="stack-flow__role">{layer.role}</p>
            </div>
            {index < STACK_LAYERS.length - 1 ? <StackFlowArrow /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
