import type { TimelineItem } from "@/types";

/**
 * Education & experience timeline. Kept honest and editable —
 * update periods and descriptions here as your path evolves.
 */
export const timeline: TimelineItem[] = [
  {
    period: "2022 — Present",
    title: "B.Sc. Computer Engineering",
    org: "Sharif University of Technology",
    location: "Tehran, Iran",
    description:
      "Studying computer engineering with a focus on software systems, while building production front-ends and exploring AI/ML research on the side.",
    current: true,
  },
  {
    period: "2023 — Present",
    title: "Front-End Developer",
    org: "Independent & project-based",
    location: "Remote",
    description:
      "Designing and shipping fast, type-safe interfaces with React, Next.js, and TypeScript — from full-stack apps like JobTrack to focused, reactive Angular builds.",
    current: true,
  },
];

export const aboutParagraphs: string[] = [
  "I'm a Computer Engineering student at Sharif University of Technology in Tehran, working as a front-end developer alongside my studies.",
  "I build production interfaces with React and Next.js, with a focus on type safety, clean architecture, and UIs that feel fast and intentional.",
  "I'm currently open to part-time, project-based, or full-time front-end roles. I'm also active in AI/ML research.",
];
