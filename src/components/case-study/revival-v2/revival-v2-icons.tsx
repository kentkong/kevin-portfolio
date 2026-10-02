type IconProps = { className?: string };

export function RevivalV2IconDecisions({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden fill="none">
      <circle cx="16" cy="16" r="10.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 10v12M10 16h12" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="16" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function RevivalV2IconEye({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden fill="none">
      <path
        d="M4 16s4.5-8 12-8 12 8 12 8-4.5 8-12 8-12-8-12-8Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="16" cy="16" r="3.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function RevivalV2IconMotorcycle({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden fill="none">
      <circle cx="9" cy="21" r="4" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="23" cy="21" r="4" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M9 21h6l2-6h4l2 6h2M13 15l2-4h3l2 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RevivalV2IconArrow({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden fill="none">
      <path d="M8 16h14M18 11l6 5-6 5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}
