import { Database, Layers, MessageSquare, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const STACK_LAYERS: {
  id: string;
  name: string;
  role: string;
  hue: string;
  icon: LucideIcon;
  highlight?: boolean;
}[] = [
  {
    id: "snowflake",
    name: "Snowflake",
    role: "Data warehouse",
    hue: "snowflake",
    icon: Database,
  },
  {
    id: "hightouch",
    name: "Hightouch",
    role: "Reverse ETL",
    hue: "hightouch",
    icon: Layers,
  },
  {
    id: "braze",
    name: "Braze",
    role: "Engagement",
    hue: "braze",
    icon: MessageSquare,
  },
  {
    id: "pulse-ops",
    name: "Pulse-Ops AI",
    role: "Intelligence",
    hue: "pulse",
    icon: Sparkles,
    highlight: true,
  },
];

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
        {STACK_LAYERS.map((layer, index) => {
          const Icon = layer.icon;

          return (
            <div key={layer.id} className="stack-flow__segment">
              <div
                className={`stack-flow__node stack-flow__node--${layer.hue}${layer.highlight ? " stack-flow__node--highlight" : ""}`}
              >
                <Icon className="stack-flow__icon" strokeWidth={2} aria-hidden />
                <p className="stack-flow__name">{layer.name}</p>
                <p className="stack-flow__role">{layer.role}</p>
              </div>
              {index < STACK_LAYERS.length - 1 ? <StackFlowArrow /> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
