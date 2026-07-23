export const profile = {
  name: "Regina Iuldasheva",
  role: "Frontend Developer",
  location: "České Budějovice, Czech Republic",
  email: "reginaiuldasheva@gmail.com",
  github: "https://github.com/Regi25",
  linkedin: "https://www.linkedin.com/in/regina-i-227920336/",
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
    context: "AgroEcoPower — B2C e-commerce platform",
    role: "Frontend Developer",
    period: "09/2025 — Present",
    location: "Jihlava (hybrid)",
    summary:
      "Building and maintaining a production B2C e-commerce administration platform used by internal teams.",
    highlights: [
      "Migrated critical UI components from a legacy stack to Next.js App Router, removing the dependency on outdated patterns and unblocking further development",
      "Designed and implemented new RBAC roles based on business requirements",
      "Built reusable components with forwardRef, Custom Hooks and Context API — reducing code duplication across the app",
      "Integrated REST APIs in close collaboration with the backend team"
    ]
  },
  {
    id: "wefriiends",
    company: "WeFriiends",
    context: "Charitable social web application",
    role: "Frontend Web Developer",
    period: "10/2023 — 01/2026",
    location: "Remote (freelance)",
    summary:
      "Contributed to a social platform built for a charitable organisation — working as part of a distributed team across the full frontend lifecycle.",
    highlights: [
      "Developed features in React and TypeScript, integrated REST APIs for real-time data sync",
      "Collaborated with designers in Figma and participated in sprint planning",
      "First hands-on experience with SQL and backend data flow — foundation for later full-stack work"
    ]
  },
  {
    id: "corax",
    company: "Corax",
    context: "",
    role: "Transport Coordinator",
    period: "08/2020 — 08/2025",
    location: "České Budějovice",
    summary:
      "Managed logistics operations and cross-team coordination for large clients, working daily with TMS systems and tight process dependencies.",
    highlights: [
      "Streamlined internal administrative workflows and ensured regulatory compliance",
      "Coordinated communication between drivers, dispatchers and departments to eliminate handoff delays"
    ]
  },
  {
    id: "before-it",
    company: "Administrative Authority, Russia",
    context: "",
    role: "Head of Department · Legal Counsel",
    period: "09/2007 — 01/2019",
    location: "Ufa, Russia",
    summary:
      "Over twelve years in law and public administration — leading a team, handling legal documentation, and owning complex processes end to end. The habit of thinking in structured systems and edge cases carried directly into software development.",
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
