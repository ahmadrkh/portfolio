import type { Skill, SkillCategory } from "@/types";

/** Tech stack with brand colors, grouped by category. */
export const skills: Skill[] = [
  { name: "TypeScript", color: "#3178C6", category: "Languages" },
  { name: "JavaScript", color: "#F7DF1E", category: "Languages" },
  { name: "HTML5", color: "#E34F26", category: "Languages" },
  { name: "CSS3", color: "#1572B6", category: "Languages" },

  { name: "React", color: "#61DAFB", category: "Frameworks" },
  { name: "Next.js", color: "#E2E8F0", category: "Frameworks" },
  { name: "Angular", color: "#DD0031", category: "Frameworks" },

  { name: "Tailwind CSS", color: "#06B6D4", category: "Styling" },

  { name: "Prisma", color: "#5A67D8", category: "Data" },
  { name: "PostgreSQL", color: "#4169E1", category: "Data" },

  { name: "Git", color: "#F05032", category: "Tooling" },
  { name: "GitHub Actions", color: "#2088FF", category: "Tooling" },
];

export const skillCategoryOrder: SkillCategory[] = [
  "Languages",
  "Frameworks",
  "Styling",
  "Data",
  "Tooling",
];

/** Skills grouped by category, preserving the defined order. */
export function skillsByCategory(): { category: SkillCategory; items: Skill[] }[] {
  return skillCategoryOrder
    .map((category) => ({
      category,
      items: skills.filter((skill) => skill.category === category),
    }))
    .filter((group) => group.items.length > 0);
}
