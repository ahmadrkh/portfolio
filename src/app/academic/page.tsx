import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FileText, FlaskConical } from "lucide-react";
import { academic } from "@/content/academic";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Academic Profile — AI / ML Research",
  description: `${site.name}'s academic profile: research interests and publications in artificial intelligence and machine learning.`,
  alternates: { canonical: "/academic" },
};

export default function AcademicPage() {
  const { headline, intro, interests, publications } = academic;

  return (
    <div className="relative pt-28">
      <BackgroundFX />

      <div className="shell relative pb-8" style={{ ["--max" as string]: "62rem" }}>
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
          <h1 className="mt-6 font-display text-display-lg font-semibold text-ink">
            {headline}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">{intro}</p>
        </Reveal>
      </div>

      {/* Research interests */}
      <section className="relative border-y border-line bg-bg-elevated py-16">
        <div className="shell" style={{ ["--max" as string]: "62rem" }}>
          <h2 className="mb-8 font-mono text-[12px] uppercase tracking-[0.12em] text-accent">
            {"// research interests"}
          </h2>
          <RevealGroup className="grid gap-4 sm:grid-cols-3" stagger={0.08}>
            {interests.map((interest) => (
              <RevealItem key={interest.title} as="article">
                <div className="h-full rounded-2xl border border-line bg-surface p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {interest.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {interest.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Publications */}
      <section className="relative py-16">
        <div className="shell" style={{ ["--max" as string]: "62rem" }}>
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
