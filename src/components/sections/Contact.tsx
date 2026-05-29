import { ArrowUpRight, Mail } from "lucide-react";
import { site, socials } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { ContactForm } from "@/components/ui/ContactForm";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <Section id="contact">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="font-mono text-[12px] text-ink-faint">04</span>
            <span aria-hidden className="h-px w-8 bg-line" />
            <MonoLabel>let&apos;s talk</MonoLabel>
          </div>
          <h2 className="font-display text-display-md font-semibold text-ink">
            Let&apos;s build something
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink-muted">
            Looking for front-end help — part-time, project-based, or full-time. If you
            have a role or project that fits, I&apos;d love to hear about it.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mx-auto mt-12 max-w-xl">
        <div className="rounded-4xl border border-line bg-surface p-6 shadow-card sm:p-8">
          <ContactForm />

          <div className="mt-7 border-t border-line pt-6">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 font-mono text-[13px] text-ink-muted transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4" />
                {site.email}
              </a>
              <div className="flex items-center gap-4">
                {socials
                  .filter((s) => s.label !== "Email")
                  .map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-[13px] text-ink-muted transition-colors hover:text-ink"
                    >
                      <social.icon className="h-4 w-4" />
                      {social.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
