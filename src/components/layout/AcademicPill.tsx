"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap } from "lucide-react";

/** Floating pill linking to the academic profile — hidden on /academic. */
export function AcademicPill() {
  const pathname = usePathname();
  if (pathname?.startsWith("/academic")) return null;

  return (
    <Link
      href="/academic"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full border border-line bg-bg-elevated/90 py-2 pl-2.5 pr-4 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-accent-soft sm:bottom-7 sm:right-7"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-accent">
        <GraduationCap className="h-4 w-4" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-mono text-[10px] text-ink-faint">Also see my</span>
        <span className="text-[13px] font-medium text-ink transition-colors group-hover:text-accent">
          Academic profile →
        </span>
      </span>
    </Link>
  );
}
