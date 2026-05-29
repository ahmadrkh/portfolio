import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Adds the elevated background tint used for alternating sections. */
  elevated?: boolean;
}

export function Section({ id, children, className, elevated }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-20 sm:py-28",
        elevated && "bg-bg-elevated",
        className,
      )}
    >
      {elevated && <div aria-hidden className="hairline absolute inset-x-0 top-0" />}
      <div className="shell">{children}</div>
      {elevated && <div aria-hidden className="hairline absolute inset-x-0 bottom-0" />}
    </section>
  );
}
