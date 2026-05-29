/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT ME — Academic profile content
 *  Your portfolio links here ("Academic profile"). Fill in your
 *  real research interests and publications below. Everything on
 *  the /academic page is driven by this file.
 * ─────────────────────────────────────────────────────────────
 */

export interface ResearchInterest {
  title: string;
  description: string;
}

export interface Publication {
  title: string;
  venue: string;
  year: string;
  authors: string;
  href?: string;
}

const interests: ResearchInterest[] = [
  {
    title: "Machine Learning",
    description:
      "Supervised and representation learning — model design, training dynamics, and honest evaluation.",
  },
  {
    title: "Deep Learning",
    description:
      "Neural architectures for vision and language, and the engineering that makes them reproducible.",
  },
  {
    title: "Applied AI",
    description:
      "Turning research ideas into working systems, with the same rigor I bring to production software.",
  },
];

// Add your papers, preprints, and posters here.
const publications: Publication[] = [];

export const academic = {
  headline: "AI / ML Research",
  intro:
    "Alongside front-end engineering, I'm active in artificial intelligence and machine learning research — exploring how learning systems are built, evaluated, and made reliable in practice.",
  interests,
  publications,
};
