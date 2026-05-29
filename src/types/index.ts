import type { LucideIcon } from "lucide-react";

/** A single technology / skill entry. */
export interface Skill {
  name: string;
  /** Brand hex color used for the accent dot. */
  color: string;
  category: SkillCategory;
}

export type SkillCategory =
  | "Languages"
  | "Frameworks"
  | "Styling"
  | "Data"
  | "Tooling";

/** A link attached to a project (live demo, source, etc.). */
export interface ProjectLink {
  label: string;
  href: string;
  /** "live" renders the accent style; "source" renders the muted style. */
  kind: "live" | "source";
}

/** A portfolio project. `slug` powers the /projects/[slug] detail route. */
export interface Project {
  slug: string;
  name: string;
  tagline: string;
  /** One-paragraph summary shown on cards. */
  summary: string;
  /** Longer, multi-paragraph write-up for the detail page. */
  overview: string[];
  /** Emoji or short glyph shown in the project card icon. */
  glyph: string;
  /** Accent color (hex) for the card icon tint. */
  accent: string;
  year: string;
  role: string;
  status: "Live" | "Archived" | "In progress";
  stack: string[];
  highlights: string[];
  links: ProjectLink[];
  featured: boolean;
}

/** A headline statistic shown in the About section. */
export interface Stat {
  value: string;
  label: string;
}

/** A timeline entry (education / experience). */
export interface TimelineItem {
  period: string;
  title: string;
  org: string;
  location?: string;
  description: string;
  current?: boolean;
}

/** A social / contact channel. */
export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  icon: LucideIcon;
}

/** A single in-page navigation target. */
export interface NavItem {
  label: string;
  href: string;
}
