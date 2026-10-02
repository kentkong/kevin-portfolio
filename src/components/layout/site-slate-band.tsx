type SiteSlateBandProps = {
  className?: string;
};

export function SiteSlateBand({ className = "" }: SiteSlateBandProps) {
  return (
    <div
      className={`site-slate-band${className ? ` ${className}` : ""}`}
      aria-hidden="true"
    />
  );
}
