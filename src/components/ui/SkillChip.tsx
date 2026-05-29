import type { Skill } from "@/types";

export function SkillChip({ skill }: { skill: Skill }) {
  return (
    <div className="group flex items-center gap-2.5 rounded-xl border border-line bg-surface px-3.5 py-2.5 transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:border-accent-soft hover:bg-surface-hover">
      <span
        className="h-2 w-2 shrink-0 rounded-full transition-transform duration-200 group-hover:scale-125"
        style={{ backgroundColor: skill.color, boxShadow: `0 0 10px ${skill.color}66` }}
        aria-hidden
      />
      <span className="text-[13px] font-medium text-ink">{skill.name}</span>
    </div>
  );
}
