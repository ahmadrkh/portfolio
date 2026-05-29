# Ahmadreza Khanari — Portfolio

A production-grade personal portfolio built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. Dark, editorial-technical aesthetic with self-hosted variable fonts, scroll-driven motion, individual project case-study pages, full SEO infrastructure, and a working contact form.

> Rebuilt from the original single-file `index.html` into a properly architected, maintainable codebase.

---

## ✨ Highlights

- **Next.js 15 App Router** with React 19 — server components by default, client components only where needed
- **Type-safe end to end** — strict TypeScript, a typed content layer, shared Zod validation
- **Centralized content** — edit everything in `src/content/`; never touch components to update copy
- **Project case studies** — each project gets its own statically-generated `/projects/[slug]` page with dedicated metadata
- **Academic profile** — a separate `/academic` page for AI/ML research (the link your old site pointed to)
- **Motion** — staggered hero entrance, scroll-reveal sections, scroll-progress bar (all respect `prefers-reduced-motion`)
- **SEO built in** — per-page metadata, Open Graph/Twitter tags, JSON-LD (Person + projects), `sitemap.xml`, `robots.txt`
- **Working contact form** — client-side + server-side Zod validation; opens the visitor's mail app out of the box, upgrades to real email delivery when a Resend key is present
- **Self-hosted variable fonts** via Fontsource — Bricolage Grotesque / Hanken Grotesk / JetBrains Mono. No external font requests, no layout shift
- **Accessible** — skip link, focus-visible styles, semantic landmarks, ARIA labels

## 🧱 Tech stack

| Area        | Choice                                  |
| ----------- | --------------------------------------- |
| Framework   | Next.js 15 (App Router)                 |
| Language    | TypeScript 5 (strict)                   |
| UI          | React 19                                |
| Styling     | Tailwind CSS 3 + CSS variables          |
| Motion      | Framer Motion 12                        |
| Icons       | lucide-react                            |
| Validation  | Zod                                     |
| Email (opt) | Resend                                  |
| Fonts       | Fontsource (self-hosted variable fonts) |

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build
npm start
```

Other scripts: `npm run lint` (ESLint) · `npm run type-check` (tsc, no emit).

## 📂 Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: fonts, metadata, JSON-LD, chrome
│   ├── page.tsx                # Home (composes the sections)
│   ├── globals.css             # Design tokens, base styles, grain, grid
│   ├── not-found.tsx           # Styled 404
│   ├── sitemap.ts              # Generated sitemap.xml
│   ├── robots.ts               # Generated robots.txt
│   ├── icon.svg                # Favicon
│   ├── academic/page.tsx       # AI/ML research profile
│   ├── projects/[slug]/page.tsx# Per-project case study (SSG)
│   └── api/contact/route.ts    # Contact form endpoint
├── components/
│   ├── layout/                 # Navbar, Footer, AcademicPill
│   ├── sections/               # Hero, Projects, Skills, About, Contact
│   └── ui/                     # Button, Badge, ProjectCard, Reveal, …
├── content/                    # ← EDIT YOUR CONTENT HERE
│   ├── site.ts                 # Name, role, bio, email, socials, stats
│   ├── projects.ts             # Projects (drives cards + detail pages)
│   ├── skills.ts               # Tech stack with brand colors
│   ├── experience.ts           # Timeline + about paragraphs
│   ├── academic.ts             # Research interests + publications
│   └── navigation.ts           # Nav links
├── lib/                        # cn() helper, JSON-LD, contact schema
└── types/                      # Shared TypeScript types
```

## ✏️ Editing content

Everything lives in `src/content/` — no component edits required.

**Add a project** → append an object to `projects` in `src/content/projects.ts`:

```ts
{
  slug: "my-project",          // becomes /projects/my-project
  name: "My Project",
  tagline: "One-line hook.",
  summary: "Card description.",
  overview: ["Paragraph 1.", "Paragraph 2."],
  glyph: "◆",
  accent: "#3B82F6",
  year: "2025",
  role: "Full-stack build",
  status: "Live",             // "Live" | "Archived" | "In progress"
  stack: ["Next.js", "TypeScript"],
  highlights: ["Did X.", "Built Y."],
  links: [{ label: "Live", href: "https://…", kind: "live" }],
  featured: true,
}
```

It automatically appears on the home grid **and** gets its own case-study page and sitemap entry.

**Update your bio / links / stats** → `src/content/site.ts`
**Add publications** → `src/content/academic.ts`
**Adjust the tech stack** → `src/content/skills.ts`

## 📧 Contact form

The form works with **zero configuration**: on submit it validates, then opens the visitor's email client with the message prefilled (via `mailto:`).

To enable **server-side email delivery** (so submissions are emailed to you automatically):

1. Create a free account at [resend.com](https://resend.com) and verify a sending domain.
2. Copy `.env.example` → `.env.local` and set:
   ```
   RESEND_API_KEY=re_xxxxxxxx
   CONTACT_TO_EMAIL=ahmadrezakhanari02@gmail.com
   ```
3. Restart. `/api/contact` now emails you on every submission (and the form shows a "sent" state).

`resend` is already in `package.json`; it's only loaded at runtime when a key is present.

## 🎨 Customization

- **Colors** — edit the CSS variables in `:root` at the top of `src/app/globals.css` (`--bg`, `--accent`, `--accent-2`, …). Everything references these tokens.
- **Fonts** — swap the `@fontsource-variable/*` imports in `src/app/layout.tsx` and update the `--font-*` variables in `globals.css`.
- **Section order** — reorder the components in `src/app/page.tsx`.

## ☁️ Deployment

### Vercel (recommended — full functionality)

Next.js is made by Vercel; this is the zero-config path and keeps the contact API route working.

1. Push the repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. (Optional) add the Resend env vars from above.
4. Deploy. Set `NEXT_PUBLIC_SITE_URL` to your final domain for correct SEO/sitemap URLs.

### GitHub Pages (matches your current `ahmadrkh.github.io` setup)

GitHub Pages serves static files only, so use Next's static export:

1. In `next.config.mjs` add `output: "export"` (and `images: { unoptimized: true }` if you later use `next/image`).
2. **Delete `src/app/api/contact/`** — API routes aren't supported in a static export. The contact form still works via its `mailto:` fallback.
3. `npm run build` produces an `out/` folder; publish that (e.g. via GitHub Actions or by pushing to a `gh-pages` branch).

> For the full experience (server-side contact email), Vercel is the better fit. For a simple static host that mirrors your current setup, the export path works and the form degrades gracefully to email.

## 📄 License

MIT — yours to use and adapt.

---

Built with Next.js & Tailwind. Designed & engineered in Tehran.
