import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Projects() {
  return (
    <Section id="projects">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          index="01"
          label="things I've shipped"
          title="Selected work"
          description="A few projects that show how I think about state, performance, and shipping discipline."
          className="mb-0"
        />
        <a
          href="https://github.com/ahmadrkh"
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-2 inline-flex items-center gap-1.5 whitespace-nowrap font-mono text-[13px] text-ink-muted transition-colors hover:text-accent"
        >
          More on GitHub
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2" stagger={0.1}>
        {projects.map((project) => (
          <RevealItem key={project.slug} as="article">
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
