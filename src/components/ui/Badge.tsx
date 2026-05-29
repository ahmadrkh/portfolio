import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: "accent" | "neutral";
}

export function Badge({ children, className, tone = "neutral" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] font-medium leading-none tracking-tight",
        tone === "accent"
          ? "border-accent-soft bg-accent-soft text-[#7eb0ff]"
          : "border-line bg-white/[0.03] text-ink-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
