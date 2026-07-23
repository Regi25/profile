export const profile = {
  name: "Regina Iuldasheva",
  role: "Frontend Developer",
  location: "České Budějovice, Czech Republic",
  // TODO: replace with a real inbox you check — don't ship a placeholder to production.
  email: "regina@example.com",
  github: "https://github.com/Regi25",
  linkedin: "https://www.linkedin.com/in/regina-i-227920336/",
  // TODO: drop your PDF resume at /public/resume.pdf — the button already points there.
  resumeHref: "/resume.pdf"
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

export const experience = [
  {
    id: "xtuning",
    company: "Xtuning s.r.o.",
    context: "AgroEcoPower — B2C e-commerce",
    role: "Frontend Developer",
    period: "09/2025 — Present",
    location: "České Budějovice",
    summary:
      "Build and maintain the admin platform that runs a live B2C e-commerce operation — the internal tool the business actually depends on, not a prototype.",
    highlights: [
      "Ship and maintain UI for an existing production codebase alongside backend and design",
      "Type-safe forms with React Hook Form + Zod, wired to REST APIs",
      "Role-based UI (RBAC) — different views and permissions per user role",
      "React, TypeScript, Tailwind CSS in day-to-day work"
    ]
  },
  {
    id: "wefriiends",
    company: "WeFriiends",
    context: "",
    role: "Frontend Developer",
    period: "",
    location: "",
    summary:
      "TODO — add the real role, dates and 2–3 concrete contributions here. Keep the same format as the Xtuning entry above so the timeline stays consistent.",
    highlights: []
  },
  {
    id: "before-it",
    company: "Logistics & Legal",
    context: "12+ years, prior career",
    role: "Transport logistics coordination → department lead / in-house lawyer",
    period: "Pre-2024",
    location: "",
    summary:
      "Ran transport logistics coordination before moving into leading a department and handling legal work. Both roles meant owning process end-to-end and being accountable when something broke — the same instinct now shows up in how I structure state and edge cases in code.",
    highlights: []
  }
];

export const projects = [
  {
    id: "praetor",
    name: "Praetor",
    tagline: "Subjects on File — Czech legal-tech prototype",
    description:
      "A frontend prototype modelling how a Czech law firm attaches parties (clients, opposing parties, courts, attorneys) to a case file, with the ARES business registry wired in for one-click entity lookup.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    highlights: [
      "Type-safe state via a discriminated-union modal system — impossible to have two modals open at once at the type level",
      "ARES registry integration: debounced search, stale-response guarding, import straight into the creation form",
      "Accessibility work: focus restoration on modal close, trapped tab cycling, keyboard navigation",
      "Deliberate architectural tradeoffs documented in the repo — no state library, no UI framework, by design"
    ],
    note: "Frontend prototype with mocked data — not a production system.",
    repo: "https://github.com/Regi25/praetor",
    demo: "https://praetor-tan.vercel.app"
  },
  {
    id: "snaprime",
    name: "Snaprime",
    tagline: "URL → ready-to-launch ad, in seconds",
    description:
      "Paste a website URL, get a structured brand profile and 1–3 ready-to-edit Facebook/Instagram ads back. Full-stack, AI-integrated, and built to survive a 30-second serverless timeout.",
    stack: ["TanStack Start", "PostgreSQL", "Drizzle ORM", "Groq (Llama 4 Scout)", "Cloudflare Pages"],
    highlights: [
      "Two-step server pipeline (extract+profile, then generate) to stay under Cloudflare's 30s function limit",
      "AI output constrained by Zod schemas end-to-end — malformed model responses are rejected before they reach the database",
      "Anti-hallucination guardrails: the model is only allowed to reference text actually scraped from the page",
      "Per-row edit and regenerate isolation — regenerating one ad can't touch its siblings"
    ],
    note: "Solo build, including the extraction pipeline, AI schema design and Cloudflare deployment.",
    repo: "https://github.com/Regi25/snaprime",
    demo: "https://snaprime.pages.dev"
  }
];

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "React Hook Form", "Zod"]
  },
  {
    category: "Integration",
    items: ["REST API", "RBAC", "Git"]
  },
  {
    category: "Backend & Data",
    items: ["PostgreSQL", "Drizzle ORM", "TanStack Start"]
  },
  {
    category: "AI",
    items: ["LLM API integration (Groq)", "Structured output with Zod", "Prompt-constrained generation"]
  }
];
