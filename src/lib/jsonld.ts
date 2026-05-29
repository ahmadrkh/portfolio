import { site, socials } from "@/content/site";
import { projects } from "@/content/projects";
import { skills } from "@/content/skills";

/**
 * Schema.org Person JSON-LD for rich search results.
 * Rendered as a <script type="application/ld+json"> in the root layout.
 */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: `mailto:${site.email}`,
    jobTitle: site.role,
    description: site.tagline,
    knowsAbout: skills.map((skill) => skill.name),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Sharif University of Technology",
    },
    sameAs: socials
      .filter((social) => social.label !== "Email")
      .map((social) => social.href),
  };
}

/** ItemList of projects for richer indexing. */
export function projectsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareSourceCode",
        name: project.name,
        description: project.summary,
        programmingLanguage: project.stack.join(", "),
        codeRepository: project.links.find((link) => link.kind === "source")?.href,
        url: `${site.url}/projects/${project.slug}`,
      },
    })),
  };
}
