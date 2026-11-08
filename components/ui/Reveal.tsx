import type { ReactNode } from "react";

// Scroll-driven fade-in via the `.reveal` CSS class (see globals.css); no JavaScript involved.
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
