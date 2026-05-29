import type { Project } from "@/types";

/**
 * Portfolio projects. Add a new object here and it automatically appears
 * on the home grid and gets its own /projects/[slug] detail page.
 */
export const projects: Project[] = [
  {
    slug: "jobtrack",
    name: "JobTrack",
    tagline: "A full-stack Kanban board for managing a job search.",
    summary:
      "Full-stack Kanban board for tracking job applications across six pipeline stages, with drag-and-drop, optimistic updates, a typed REST API, and CI/CD via GitHub Actions.",
    overview: [
      "JobTrack turns a messy job search into a clean, visual pipeline. Applications move across six stages — from Saved to Offer — with smooth drag-and-drop that updates instantly thanks to optimistic UI, so the board never feels like it's waiting on the network.",
      "Under the hood it's a typed end-to-end stack: a Next.js App Router front end talking to a REST API backed by Prisma and PostgreSQL, with Zod validating every payload at the boundary. State changes are persisted server-side and reconciled if a request fails, keeping the board honest.",
      "The whole thing ships through a GitHub Actions pipeline that type-checks, lints, and builds on every push before deploying — the same workflow discipline I bring to production work.",
    ],
    glyph: "◧",
    accent: "#3B82F6",
    year: "2025",
    role: "Design & full-stack build",
    status: "Live",
    stack: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "@dnd-kit", "Zod"],
    highlights: [
      "Six-stage pipeline with drag-and-drop powered by @dnd-kit",
      "Optimistic updates with server reconciliation on failure",
      "Typed REST API with Zod validation at every boundary",
      "Prisma schema + PostgreSQL for durable persistence",
      "CI/CD pipeline: type-check, lint, build, deploy on every push",
    ],
    links: [
      { label: "Live demo", href: "https://jobtrack-ahmadrkh.vercel.app", kind: "live" },
      { label: "Source", href: "https://github.com/ahmadrkh/jobtrack", kind: "source" },
    ],
    featured: true,
  },
  {
    slug: "angular-product-page",
    name: "Angular Product Page",
    tagline: "A reactive e-commerce listing built the Angular way.",
    summary:
      "E-commerce product listing with reactive cart state management using BehaviorSubject and OnPush change detection for optimal render performance.",
    overview: [
      "A focused study in idiomatic Angular: a product listing with a live shopping cart, built around RxJS rather than bolted-on state libraries. Cart state lives in a BehaviorSubject and streams to every component that needs it, so the UI stays in sync without manual wiring.",
      "Performance was the point. Every component runs on OnPush change detection, meaning Angular only re-renders when inputs actually change — the cart can update without forcing the whole tree to recompute.",
      "It's intentionally small but architecturally honest: the kind of reactive, performance-minded structure that scales when the catalog grows from a handful of items to thousands.",
    ],
    glyph: "◑",
    accent: "#DD0031",
    year: "2024",
    role: "Front-end build",
    status: "Live",
    stack: ["Angular 17", "TypeScript", "RxJS", "SCSS"],
    highlights: [
      "Reactive cart state with a single BehaviorSubject source",
      "OnPush change detection across all components",
      "RxJS streams for derived totals and item counts",
      "Component-scoped SCSS with a clean design system",
    ],
    links: [
      { label: "Source", href: "https://github.com/ahmadrkh/angular-simple-product-page", kind: "source" },
    ],
    featured: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
