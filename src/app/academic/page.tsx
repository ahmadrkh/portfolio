import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, FileText, FlaskConical, GraduationCap } from "lucide-react";
import { academic, type AcademicProject } from "@/content/academic";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const SHELL = { ["--max" as string]: "64rem" };

export const metadata: Metadata = {
  title: "Research & Academic Work",
  description: `${site.name}'s academic profile: B.Sc. thesis on Persian text-to-speech, computer-vision research, interests, and publications.`,
  alternates: { canonical: "/academic" },
};

export default function AcademicPage() {
  const { headline, intro, thesis, projects, interests, publications } = academic;

  return (
    <div className="relative pt-28">
      <BackgroundFX />

      {/* Hero */}
      <div className="shell relative pb-10" style={SHELL}>
        <Reveal>
          <Link
            href="/"
            className="group inline-flex items-center gap-1.5 font-mono text-[13px] text-ink-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to portfolio
          </Link>
        </Reveal>

        <Reveal delay={0.05} className="mt-8 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-soft bg-accent-soft px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-accent">
            <FlaskConical className="h-3.5 w-3.5" />
            Research
          </span>
          <h1 className="mt-6 font-display text-display-lg font-semibold text-ink">{headline}</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">{intro}</p>
        </Reveal>
      </div>

      {/* Featured thesis */}
      <section className="relative border-y border-line bg-bg-elevated py-16">
        <div className="shell" style={SHELL}>
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <span className="font-mono text-[12px] text-ink-faint">01</span>
              <span aria-hidden className="h-px w-8 bg-line" />
              <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent">
                {"// bachelor's thesis"}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="overflow-hidden rounded-4xl border border-line bg-surface shadow-card">
              {/* gradient header strip */}
              <div className="relative border-b border-line bg-gradient-to-br from-accent-soft to-transparent p-7 sm:p-9">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <GraduationCap className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="font-display text-display-md font-semibold text-ink">
                      {thesis.title}
                    </h2>
                    <p className="mt-2 font-mono text-[13px] text-ink-muted">
                      {thesis.degree} · {thesis.institution} · {thesis.year}
                      {thesis.advisor ? ` · Advisor: ${thesis.advisor}` : ""}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-10 p-7 sm:p-9 lg:grid-cols-[1.5fr_1fr]">
                <div className="space-y-4">
                  {thesis.summary.map((para, i) => (
                    <p key={i} className="text-[15px] leading-relaxed text-ink-muted">
                      {para}
                    </p>
                  ))}
                  {thesis.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 pt-2">
                      {thesis.links.map((link) => (
                        <Button key={link.href} href={link.href} external variant="ghost" size="sm">
                          {link.label}
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="mb-4 font-mono text-[12px] uppercase tracking-[0.12em] text-accent">
                    {"// key contributions"}
                  </h3>
                  <ul className="space-y-2.5">
                    {thesis.contributions.map((c) => (
                      <li key={c} className="flex items-start gap-2.5 text-[14px] leading-snug text-ink-muted">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {thesis.stack.map((tech) => (
                      <Badge key={tech} tone="accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Research projects */}
      <section className="relative py-16">
        <div className="shell" style={SHELL}>
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <span className="font-mono text-[12px] text-ink-faint">02</span>
              <span aria-hidden className="h-px w-8 bg-line" />
              <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent">
                {"// research projects"}
              </span>
            </div>
          </Reveal>

          <RevealGroup className="grid gap-5 lg:grid-cols-2" stagger={0.1}>
            {projects.map((project) => (
              <RevealItem key={project.title} as="article">
                <AcademicProjectCard project={project} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Interests */}
      <section className="relative border-y border-line bg-bg-elevated py-16">
        <div className="shell" style={SHELL}>
          <h2 className="mb-8 font-mono text-[12px] uppercase tracking-[0.12em] text-accent">
            {"// research interests"}
          </h2>
          <RevealGroup className="grid gap-4 sm:grid-cols-3" stagger={0.08}>
            {interests.map((interest) => (
              <RevealItem key={interest.title} as="article">
                <div className="h-full rounded-2xl border border-line bg-surface p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">{interest.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{interest.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Publications */}
      <section className="relative py-16">
        <div className="shell" style={SHELL}>
          <h2 className="mb-8 font-mono text-[12px] uppercase tracking-[0.12em] text-accent">
            {"// publications"}
          </h2>

          {publications.length > 0 ? (
            <ul className="space-y-4">
              {publications.map((pub) => (
                <li
                  key={pub.title}
                  className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent-soft"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[15px] font-medium text-ink">{pub.title}</h3>
                      <p className="mt-1 text-sm text-ink-muted">{pub.authors}</p>
                      <p className="mt-1 font-mono text-[12px] text-ink-faint">
                        {pub.venue} · {pub.year}
                      </p>
                    </div>
                    {pub.href && (
                      <a
                        href={pub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-ink-muted transition-colors hover:text-accent"
                        aria-label={`Read ${pub.title}`}
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-line bg-surface/40 px-6 py-14 text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent">
                <FileText className="h-5 w-5" />
              </span>
              <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
                Publications and preprints will appear here. Add them in{" "}
                <code className="rounded bg-white/[0.05] px-1.5 py-0.5 font-mono text-[12px] text-ink">
                  src/content/academic.ts
                </code>
                .
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 flex flex-col items-center gap-4 rounded-4xl border border-line bg-surface p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">
                Interested in collaborating?
              </h3>
              <p className="mt-1 text-sm text-ink-muted">
                I&apos;m happy to talk about research, reading groups, or projects.
              </p>
            </div>
            <Button href={`mailto:${site.email}`}>Email me</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function AcademicProjectCard({ project }: { project: AcademicProject }) {
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-card transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-accent-soft hover:shadow-card-hover sm:p-7">
      <header className="mb-4 flex items-start justify-between gap-3">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-xl text-xl"
          style={{ backgroundColor: `${project.accent}1f`, color: project.accent }}
          aria-hidden
        >
          {project.glyph}
        </span>
        <span className="font-mono text-[12px] text-ink-faint">{project.year}</span>
      </header>

      <h3 className="font-display text-lg font-semibold leading-snug text-ink">{project.title}</h3>
      <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
        {project.context}
      </p>
      {project.collaborators && (
        <p className="mt-1 text-[12px] text-ink-faint">{project.collaborators}</p>
      )}

      <p className="mt-4 text-sm leading-relaxed text-ink-muted">{project.summary}</p>

      <ul className="mt-4 space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-[13px] leading-snug text-ink-muted">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mb-5 mt-5 flex flex-wrap gap-1.5">
        {project.topics.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <footer className="mt-auto flex items-center gap-4 border-t border-line pt-4">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[13px] text-ink-muted transition-colors hover:text-accent"
          >
            {link.label}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ))}
      </footer>
    </div>
  );
}
