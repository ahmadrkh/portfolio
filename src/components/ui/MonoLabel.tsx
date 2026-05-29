import { cn } from "@/lib/utils";

interface MonoLabelProps {
  children: string;
  className?: string;
}

/** The "// section label" monospace eyebrow used across sections. */
export function MonoLabel({ children, className }: MonoLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-accent",
        className,
      )}
    >
      <span aria-hidden className="text-ink-faint">{"//"}</span>
      {children}
    </span>
  );
}
