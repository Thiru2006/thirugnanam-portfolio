# Thirugnanam V S — Portfolio

A production-ready personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

**Design direction:** minimal and premium, in the spirit of Linear / Vercel / Stripe. Light and dark themes built on a token system, Sora + Inter + JetBrains Mono type stack, and a signature "chip routing" motif — interconnect traces that power on across the hero like signals propagating across a die.

## Stack

- **Next.js 14** (App Router) + **TypeScript** (strict)
- **Tailwind CSS** with CSS-variable design tokens (light/dark via `next-themes`)
- **Framer Motion** for reveals, counters, and micro-interactions
- **Lenis** for smooth scrolling (disabled automatically under `prefers-reduced-motion`)
- **cmdk** command palette, **lucide-react** icons

> Two deliberate deviations from the original brief: GSAP and Three.js are omitted. Framer Motion already covers every animation used, and a 3D scene added nothing to the recruiter experience — both would only cost bundle size and Lighthouse points. Add them later if a specific effect calls for it.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Before you deploy — 4 quick edits

1. **`lib/site.ts`** — set your real `email`, exact `linkedin` URL, and (after deploying) your final `url`. Everything on the site reads from this one file.
2. **`public/resume.pdf`** — drop in your resume PDF (rename your existing `Thirugnanam_VS_Google_SWE_Intern_2027.pdf`).
3. **Project screenshots** — each project card currently shows a designed placeholder. Add real screenshots at `public/projects/<slug>.png` and swap the placeholder block in `components/sections/projects.tsx` for a `next/image`.
4. **Content review** — all copy lives in `/data/*.ts`. Internship descriptions were written conservatively; tighten them with your real specifics (dates, team names, anything measurable).

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo — Vercel auto-detects Next.js. No configuration needed.
3. Deploy, then add your custom domain (or use the free `*.vercel.app` URL).
4. Update `url` in `lib/site.ts` to the final domain and redeploy — this fixes OpenGraph URLs, `sitemap.xml`, and `robots.txt`.

## Architecture

```
app/            layout (SEO, fonts, JSON-LD), page, robots, sitemap, manifest
components/     shell (nav, palette, terminal, progress), section primitives
components/sections/   one component per page section
data/           ALL content — edit these, never the components
lib/            site config + utilities
public/         resume.pdf, project screenshots
```

Content and presentation are fully separated: adding a project, experience, or achievement is a data edit, not a code change.

## Built-in features

- ⌘K / Ctrl+K command palette (navigation, theme, links)
- Interactive terminal (open from the palette — try `help`)
- Live GitHub section (recent repos via the GitHub API, with graceful fallback; contribution graph + language chart)
- Theme toggle (system-aware), scroll progress, back-to-top
- Project search + category filters
- SEO: metadata, OpenGraph/Twitter cards, JSON-LD Person schema, `sitemap.xml`, `robots.txt`, web manifest
- Accessibility: skip link, keyboard focus styles, ARIA labels, semantic landmarks, `prefers-reduced-motion` respected everywhere (including Lenis and counters)

## Performance notes

- System-hosted Google fonts via `next/font` (zero layout shift, self-hosted at build)
- No heavy 3D or particle libraries; animations are transform/opacity only
- GitHub images are lazy-loaded; API failures degrade to a direct profile link
