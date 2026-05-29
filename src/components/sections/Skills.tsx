import { skillsByCategory } from "@/content/skills";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillChip } from "@/components/ui/SkillChip";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  const groups = skillsByCategory();

  return (
    <Section id="skills" elevated>
      <SectionHeading
        index="02"
        label="what I work with"
        title="The stack I build on"
        description="A focused toolkit for shipping fast, type-safe products end to end — from the type system up to deployment."
      />

      <div className="flex flex-col gap-7">
        {groups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.05}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
              <span className="w-32 shrink-0 pt-2.5 font-mono text-[12px] uppercase tracking-[0.1em] text-ink-faint">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <SkillChip key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
