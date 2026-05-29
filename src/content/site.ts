import { Github, Linkedin, Mail } from "lucide-react";
import type { SocialLink, Stat } from "@/types";

/** Single source of truth for identity, copy, and contact details. */
export const site = {
  name: "Ahmadreza Khanari",
  shortName: "Ahmadreza",
  handle: "ahmadrkh.dev",
  role: "Front-End Developer",
  /** Used in <title>, OG tags, and the hero. */
  tagline: "Front-end developer specializing in React, Next.js, and TypeScript.",
  description:
    "I build fast, type-safe web applications with clean architecture and ship them with proper CI/CD. Currently a Computer Engineering student at Sharif University of Technology.",
  location: "Tehran, Iran",
  availability: "Open to opportunities",
  email: "ahmadrezakhanari02@gmail.com",
  /** Canonical URL — override with NEXT_PUBLIC_SITE_URL in production. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ahmadrkh.github.io",
  hero: {
    lead: "Building interfaces",
    leadAccent: "that actually work.",
    sub: "I'm Ahmadreza — a front-end developer specializing in React and Next.js. I build fast, type-safe web applications with clean architecture and ship them with proper CI/CD.",
  },
} as const;

export const socials: SocialLink[] = [
  {
    label: "Email",
    href: `mailto:${site.email}`,
    handle: site.email,
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/ahmadrkh",
    handle: "@ahmadrkh",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ahmadrkh",
    handle: "in/ahmadrkh",
    icon: Linkedin,
  },
];

export const stats: Stat[] = [
  { value: "2+", label: "Shipped projects" },
  { value: "2+", label: "Years building" },
  { value: "12", label: "Technologies" },
  { value: "SUT", label: "Sharif University" },
];
