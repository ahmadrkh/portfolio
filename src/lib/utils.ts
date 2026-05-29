import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely — combines clsx (conditional classes)
 * with tailwind-merge (dedupes conflicting utilities, last one wins).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Strip a `mailto:` / `https://` prefix for display. */
export function prettyUrl(href: string): string {
  return href.replace(/^mailto:/, "").replace(/^https?:\/\//, "").replace(/\/$/, "");
}
