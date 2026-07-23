# Regina Iuldasheva — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before you deploy — 3 things to fill in

1. **Resume** — put your real PDF at `public/resume.pdf` (delete `public/RESUME_GOES_HERE.txt` after).
2. **Email** — `lib/data.ts` has a placeholder `email: "regina@example.com"`. Replace with an inbox you actually check.
3. **WeFriiends entry** — `lib/data.ts` → `experience` array has a `TODO` block for this role. Add the real dates, title and 2–3 concrete contributions in the same format as the Xtuning entry, or delete the block entirely if you'd rather keep the timeline to Xtuning + pre-IT career.

## Structure

```
app/
  layout.tsx       fonts, metadata, theme provider
  page.tsx         assembles all sections
  globals.css      design tokens (light/dark), base styles
components/
  nav/             header + ⌘K command palette
  theme/           dark/light toggle (next-themes)
  sections/        Hero, About, Experience, Projects, Skills, Contact
  ui/              SectionLabel (comment-style section markers)
lib/
  data.ts          all real content — edit this file to update copy
```

## Design notes

- Palette: near-black ink / warm paper, one accent (`#3452FF` electric indigo) — no gradients, no rainbow.
- Type: Geist Sans + Geist Mono, used deliberately — mono for labels, tags, stack chips, tying the "systems/legal file" background into the developer aesthetic.
- Signature element: the `⌘K` command palette — real navigation, not decoration. A recruiter can jump straight to Resume or Contact.
- Motion is restrained: scroll-triggered fades, no parallax gimmicks, `prefers-reduced-motion` respected.

## Deploy

Push to GitHub, import into Vercel, done — zero config needed for a standard Next.js app.
