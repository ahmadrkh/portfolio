import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { aboutParagraphs, timeline } from "@/content/experience";
import { stats } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <Section id="about" elevated>
      <SectionHeading index="03" label="who I am" title="About me" />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col gap-8">
          <div className="space-y-4">
            {aboutParagraphs.map((para, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-ink-muted">
                {para}
              </p>
            ))}
          </div>

          <div className="hairline" />

          <ul className="space-y-6">
            {timeline.map((item) => (
              <li key={`${item.title}-${item.org}`} className="relative pl-6">
                <span
                  className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent"
                  style={item.current ? { backgroundColor: "var(--accent)" } : undefined}
                />
                <div className="font-mono text-[12px] text-ink-faint">{item.period}</div>
                <div className="mt-1 text-[15px] font-medium text-ink">{item.title}</div>
                <div className="text-sm text-ink-muted">
                  {item.org}
                  {item.location ? ` · ${item.location}` : ""}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-line bg-surface p-6 text-center"
              >
                <div className="accent-gradient-text font-display text-3xl font-semibold leading-none">
                  {stat.value}
                </div>
                <div className="mt-2 text-[12px] text-ink-muted">{stat.label}</div>
              </div>
            ))}
          </div>

          <Link
            href="/academic"
            className="group flex items-center justify-between rounded-2xl border border-line bg-gradient-to-br from-accent-soft to-transparent p-6 transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-accent-soft"
          >
            <div>
              <div className="font-mono text-[12px] uppercase tracking-[0.1em] text-accent">
                AI / ML
              </div>
              <div className="mt-1.5 text-[15px] font-medium text-ink">
                I also do academic research
              </div>
              <div className="mt-1 text-sm text-ink-muted">
                See my academic profile and publications.
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
