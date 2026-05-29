import type { ReactNode } from "react";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

export function SectionHeading({
  index,
  label,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-12 max-w-2xl sm:mb-16", className)}>
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-[12px] font-medium text-ink-faint">{index}</span>
        <span aria-hidden className="h-px w-8 bg-line" />
        <MonoLabel>{label}</MonoLabel>
      </div>
      <h2 className="font-display text-display-md font-semibold text-ink">{title}</h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-ink-muted sm:text-base">
          {description}
        </p>
      )}
    </Reveal>
  );
}
