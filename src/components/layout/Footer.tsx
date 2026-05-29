import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site, socials } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-bg-elevated">
      <div className="shell py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="font-mono text-base font-medium text-accent">
              {site.handle}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {site.role} focused on fast, type-safe interfaces with React, Next.js,
              and TypeScript. Currently {site.availability.toLowerCase()}.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-ink-faint">
              Elsewhere
            </span>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label === "Email" ? undefined : "_blank"}
                rel={social.label === "Email" ? undefined : "noopener noreferrer"}
                className="group inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
              >
                <social.icon className="h-4 w-4" />
                <span>{social.handle}</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-ink-faint">
              More
            </span>
            <Link href="/academic" className="text-sm text-ink-muted transition-colors hover:text-ink">
              Academic profile
            </Link>
            <a href="#projects" className="text-sm text-ink-muted transition-colors hover:text-ink">
              Selected work
            </a>
            <a href="#contact" className="text-sm text-ink-muted transition-colors hover:text-ink">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[12px] text-ink-faint">
            © {year} {site.name}. Built with Next.js & Tailwind.
          </p>
          <p className="font-mono text-[12px] text-ink-faint">
            Designed & engineered in Tehran.
          </p>
        </div>
      </div>
    </footer>
  );
}
