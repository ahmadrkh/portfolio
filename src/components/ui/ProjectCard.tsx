import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { prettyUrl } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  const { slug, name, summary, glyph, accent, stack, status, year, links } = project;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-card transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-accent-soft hover:bg-surface-hover hover:shadow-card-hover sm:p-7">
      {/* top accent line on hover */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px scale-x-0 bg-accent-gradient opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100"
      />

      {/* stretched link — covers the card for the detail page */}
      <Link
        href={`/projects/${slug}`}
        className="absolute inset-0 rounded-2xl"
        aria-label={`View the ${name} case study`}
      />

      <header className="mb-5 flex items-start justify-between">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-xl text-xl"
          style={{ backgroundColor: `${accent}1f`, color: accent }}
          aria-hidden
        >
          {glyph}
        </span>

        <div className="relative z-10 flex items-center gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-[12px] font-medium text-ink-muted transition-colors hover:text-accent"
            >
              {link.kind === "live" ? "Live" : "Code"}
              <ArrowUpRight className="h-3 w-3" />
            </a>
          ))}
        </div>
      </header>

      <div className="mb-1.5 flex items-center gap-2.5">
        <h3 className="font-display text-lg font-semibold text-ink">{name}</h3>
        <StatusDot status={status} />
      </div>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-ink-muted">{summary}</p>

      <div className="mb-5 flex flex-wrap gap-1.5">
        {stack.map((tech) => (
          <Badge key={tech} tone="accent">
            {tech}
          </Badge>
        ))}
      </div>

      <footer className="mt-auto flex items-center justify-between border-t border-line pt-4 font-mono text-[12px] text-ink-faint">
        <span>{year}</span>
        <span className="inline-flex items-center gap-1 text-ink-muted transition-colors group-hover:text-accent">
          Case study
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </footer>

      <span className="sr-only">{prettyUrl(links[0]?.href ?? "")}</span>
    </article>
  );
}

function StatusDot({ status }: { status: Project["status"] }) {
  const color =
    status === "Live" ? "#22c55e" : status === "In progress" ? "#eab308" : "#64748b";
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-ink-faint">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }}
      />
      {status}
    </span>
  );
}
