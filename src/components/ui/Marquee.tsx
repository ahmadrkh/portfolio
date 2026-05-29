import { skills } from "@/content/skills";

/** Infinite horizontal marquee of the tech stack — decorative. */
export function Marquee() {
  const row = [...skills, ...skills];
  return (
    <div
      aria-hidden
      className="group relative flex overflow-hidden border-y border-line bg-bg-elevated/40 py-4 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
    >
      <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 group-hover:[animation-play-state:paused]">
        {row.map((skill, i) => (
          <span
            key={`${skill.name}-${i}`}
            className="flex items-center gap-2 whitespace-nowrap font-mono text-sm text-ink-faint"
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: skill.color }}
            />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
