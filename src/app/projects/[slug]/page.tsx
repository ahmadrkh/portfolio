import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { getProject, getProjectSlugs, projects } from "@/content/projects";
import { site } from "@/content/site";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { Reveal } from "@/components/ui/Reveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.name} — ${project.tagline}`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} · ${site.name}`,
      description: project.summary,
      url: `${site.url}/projects/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <article className="relative pt-28">
      <BackgroundFX />

      <div className="shell relative" style={{ ["--max" as string]: "62rem" }}>
        <Reveal>
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-1.5 font-mono text-[13px] text-ink-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to work
          </Link>
        </Reveal>

        <Reveal delay={0.05} className="mt-8">
          <div className="flex items-center gap-3">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-xl text-xl"
              style={{ backgroundColor: `${project.accent}1f`, color: project.accent }}
              aria-hidden
            >
              {project.glyph}
            </span>
            <Badge tone="accent">{project.status}</Badge>
          </div>

          <h1 className="mt-6 font-display text-display-lg font-semibold text-ink">
            {project.name}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-ink-muted">{project.tagline}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                external
                variant={link.kind === "live" ? "primary" : "ghost"}
                size="sm"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            ))}
          </div>
        </Reveal>

        <div className="hairline my-12" />

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <Reveal className="space-y-5">
            <h2 className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent">
              {"// overview"}
            </h2>
            {project.overview.map((para, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-ink-muted">
                {para}
              </p>
            ))}

            <div className="pt-4">
              <h2 className="mb-4 font-mono text-[12px] uppercase tracking-[0.12em] text-accent">
                {"// highlights"}
              </h2>
              <ul className="space-y-2.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-[15px] text-ink-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="sticky top-24 space-y-6 rounded-2xl border border-line bg-surface p-6">
              <Fact label="Role" value={project.role} />
              <Fact label="Year" value={project.year} />
              <Fact label="Status" value={project.status} />
              <div>
                <div className="mb-2.5 font-mono text-[12px] uppercase tracking-[0.1em] text-ink-faint">
                  Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <Badge key={tech} tone="accent">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </aside>
          </Reveal>
        </div>

        {others.length > 0 && (
          <div className="mt-20">
            <div className="hairline mb-8" />
            <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-ink-faint">
              {"// more work"}
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-line bg-surface p-5 transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-accent-soft"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-lg text-lg"
                      style={{ backgroundColor: `${p.accent}1f`, color: p.accent }}
                      aria-hidden
                    >
                      {p.glyph}
                    </span>
                    <div>
                      <div className="text-[15px] font-medium text-ink">{p.name}</div>
                      <div className="text-[13px] text-ink-muted">{p.tagline}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-ink-faint">
        {label}
      </span>
      <span className="text-right text-sm text-ink">{value}</span>
    </div>
  );
}
