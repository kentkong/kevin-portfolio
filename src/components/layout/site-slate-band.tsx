import type { ReactNode } from "react";

type SiteSlateBandProps = {
  className?: string;
  children?: ReactNode;
};

export function SiteSlateBand({ className = "", children }: SiteSlateBandProps) {
  return (
    <div
      className={`site-slate-band${className ? ` ${className}` : ""}`}
      aria-hidden={children ? undefined : true}
    >
      {children}
    </div>
  );
}
