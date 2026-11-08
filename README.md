# Regina Iuldasheva — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Updating content

- **All copy** lives in `lib/data.ts`. Its wording mirrors the CV — keep the two in sync.
- **CVs**: `public/resume.pdf` (English) and `public/resume-cz.pdf` (Czech). Replace the files and keep the names.

## Structure

```
app/
  layout.tsx       fonts (Newsreader + Geist), metadata, theme provider
  page.tsx         two-column layout: sticky sidebar + sections
  globals.css      colour tokens (light/dark), CSS entrance animations
  icon.svg         favicon
components/
  nav/             Sidebar (name, section nav, résumé links) + ⌘K command palette
  sections/        About, Experience, Projects, Skills, Contact
  theme/           dark/light toggle (next-themes)
  ui/              SectionHeading, Reveal, MotionProvider
lib/
  data.ts          all content
```

## Design notes

- Editorial look matching the PDF résumé: warm paper, navy ink, one blue accent, Newsreader serif for headings.
- Entrance animations are pure CSS (scroll-driven where supported), so content is visible even without JavaScript; `prefers-reduced-motion` is respected.
- `⌘K` opens a command palette for jumping to sections, résumés and links.

## Deploy

Push to GitHub; Vercel builds the `main` branch automatically.
