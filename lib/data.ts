// All site copy lives here. Wording mirrors the agreed CV (EN v3) — keep the two in sync.

export const profile = {
  name: "Regina Iuldasheva",
  role: "Next.js / React Developer",
  tagline: "TypeScript · Full-stack project experience",
  intro:
    "I build business features for a production Next.js e-commerce platform, and take my own projects from database to deployment.",
  location: "České Budějovice, Czech Republic",
  email: "reginaiuldasheva@gmail.com",
  github: "https://github.com/Regi25",
  linkedin: "https://www.linkedin.com/in/regina-i-227920336/",
  resume: {
    en: "/resume.pdf",
    cz: "/resume-cz.pdf"
  }
};

export type NavItem = { id: string; label: string };

export const nav: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

export const about = {
  lede: "From law and logistics to production Next.js.",
  paragraphs: [
    "Frontend Developer with 3+ years of hands-on experience with React and TypeScript. I currently work on a multilingual Next.js e-commerce platform, developing business features and server-side functionality. I use Next.js Server Actions to call the backend API and Zod to validate data.",
    "My personal projects also include server-side development, PostgreSQL, external API and LLM integrations, and deployment. I also use AI-assisted development tools, while taking responsibility for reviewing, testing and debugging the resulting code.",
    "Before IT I spent 12+ years in logistics and law, working with transport management systems, complex business processes, regulations and documentation."
  ],
  facts: [
    { value: "3+ yrs", label: "React & TypeScript" },
    { value: "12+ yrs", label: "Logistics & law" },
    { value: "CZ · EN · RU", label: "Working languages" }
  ]
};

export type Highlight = { label?: string; text: string; points?: string[] };
export type WorkGroup = { title: string; stack?: string; items: Highlight[] };

export type Job = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary?: string;
  groups: WorkGroup[];
};

export const experience: Job[] = [
  {
    id: "xtuning",
    role: "Frontend Developer",
    company: "Xtuning s.r.o. (AgroEcoPower)",
    period: "09/2025 — Present",
    location: "Full-time · Jihlava (hybrid)",
    groups: [
      {
        title: "E-commerce & order management platform",
        stack: "Next.js 16 App Router · React · TypeScript · Tailwind CSS · HeroUI · next-intl",
        items: [
          {
            label: "Server-side development",
            text: "Implement and extend Next.js Server Actions with Zod validation that call the company's backend API and handle its errors."
          },
          {
            label: "Payments & business logic",
            text: "Implemented payment flows, including the payment status page, and EU reverse-charge VAT handling using VIES VAT-number verification."
          },
          {
            label: "Access control",
            text: "Extended RBAC with multiple roles per user, plus configurable roles for language-specific blog administration and for marketing."
          },
          {
            label: "Admin & content",
            text: "Order management, blog/news administration with ISR, banner management and multilingual features."
          },
          {
            label: "Security & troubleshooting",
            text: "HTML sanitisation against XSS and checking uploaded files by their content (magic bytes). Diagnosed failing large uploads and adjusted the request-size limits in both the proxy and Next.js Server Actions."
          }
        ]
      },
      {
        title: "Internal component library",
        stack: "Monorepo · Next.js 16 · React 19 · shadcn/ui · Radix UI",
        items: [
          {
            text: "Contributed to the migration of a legacy component library from HeroUI to shadcn/ui and Radix UI."
          },
          {
            text: "Migrated the org chart component and the rich-text editor to Tiptap v3. The editor migration involved separating Server and Client Components and replacing HeroUI controls with Radix UI."
          }
        ]
      },
      {
        title: "Internal invoicing service",
        stack: "React · Vite · TypeScript",
        items: [
          { text: "Developing a React (Vite) application to replace a legacy invoicing module." },
          { text: "Invoice overview with search, sorting, filtering and selection." },
          {
            text: "Import of accounting exports (ISDOC XML invoices and CSV data), file validation and import error reporting."
          },
          {
            text: "Analysed the legacy module and documented the scope and proposed design of the replacement."
          }
        ]
      }
    ]
  },
  {
    id: "wefriiends",
    role: "Frontend Web Developer",
    company: "WeFriiends",
    period: "10/2023 — 01/2026",
    location: "Remote · freelance",
    summary: "Team project: a social web application for a charitable organisation.",
    groups: [
      {
        title: "",
        items: [
          { text: "Developed application features in React and TypeScript in a distributed team." },
          { text: "Built a real-time chat feature with Firebase, and integrated REST APIs." },
          {
            text: "Collaborated with designers in Figma. Worked with Git and pull requests, and wrote basic SQL queries."
          }
        ]
      }
    ]
  }
];

export const previousCareer = [
  {
    role: "Transport Coordinator",
    company: "Corax",
    period: "08/2020 — 08/2025",
    location: "České Budějovice",
    text: "Organised transport for major logistics clients in transport management systems (TMS), coordinated drivers, dispatchers and departments, and simplified internal administrative procedures."
  },
  {
    role: "Head of Department, Lawyer",
    company: "Administrative Office, Russia",
    period: "09/2007 — 01/2019",
    location: "Ufa, Russia",
    text: "Led a team and was responsible for the department's results. Provided legal support, document analysis and administration."
  }
];

export type PipelineStep = { title: string; detail: string };

export type Project = {
  id: string;
  name: string;
  year: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  note?: string;
  pipeline?: { calls: { label: string; steps: PipelineStep[] }[]; caption: string };
  repo: string;
  demo: string;
};

export const projects: Project[] = [
  {
    id: "snaprime",
    name: "Snaprime",
    year: "2026",
    tagline: "LLM-powered web application, built solo end to end",
    description:
      "Snaprime extracts a website's content, builds a structured brand profile from it and generates ad copy that the user can edit.",
    stack: [
      "TanStack Start",
      "TypeScript",
      "PostgreSQL (Neon)",
      "Drizzle ORM",
      "Groq LLM API",
      "Browserless",
      "Cloudflare Pages"
    ],
    pipeline: {
      calls: [
        {
          label: "Server call 1",
          steps: [
            { title: "Extract", detail: "HTTP fetch · Browserless fallback for JS-rendered pages" },
            { title: "Brand profile", detail: "LLM output validated with Zod" }
          ]
        },
        {
          label: "Server call 2",
          steps: [{ title: "Ad copy", detail: "LLM output validated with Zod · saved to PostgreSQL" }]
        }
      ],
      caption: "Processing is split into separate server steps to stay within Cloudflare's execution time limit."
    },
    highlights: [
      "Designed and implemented the application end to end, including server functions, the database schema, API integrations and deployment.",
      "Validated structured LLM output with Zod before saving it to PostgreSQL.",
      "Added grounding rules so that generated content is based only on text extracted from the source website.",
      "Each generated ad can be edited or regenerated on its own without affecting the others."
    ],
    repo: "https://github.com/Regi25/snaprime",
    demo: "https://snaprime.pages.dev"
  },
  {
    id: "praetor",
    name: "Praetor",
    year: "2026",
    tagline: "Legal-tech prototype: subject management module",
    description:
      "A frontend prototype exploring how one legal subject can appear on several case files in different roles.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    highlights: [
      "Designed a data model that keeps a subject's master record separate from its link to a case file.",
      "Implemented a mock ARES company search by company ID, with debounced input and protection against stale responses.",
      "Implemented type-safe form and modal state, plus accessibility support (focus management, keyboard navigation)."
    ],
    note: "Frontend prototype with mocked data.",
    repo: "https://github.com/Regi25/praetor",
    demo: "https://praetor-tan.vercel.app"
  }
];

export const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js (App Router, Server/Client Components, ISR)",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "HeroUI",
      "React Hook Form",
      "next-intl",
      "Vite"
    ]
  },
  {
    category: "Server-side & data",
    items: [
      "Next.js Server Actions",
      "Server functions (TanStack Start)",
      "Zod",
      "REST API integration",
      "PostgreSQL (Neon)",
      "Drizzle ORM",
      "SQL (basic)",
      "Firebase",
      "RBAC"
    ]
  },
  {
    category: "Integrations & AI",
    items: [
      "Payment gateways",
      "VIES",
      "Groq LLM API",
      "Browserless",
      "Structured LLM output validation",
      "AI-assisted development (Claude Code)"
    ]
  },
  {
    category: "Deployment & tools",
    items: ["Git", "Pull requests", "Code review", "Cloudflare Pages", "Vercel", "Figma"]
  }
];

export const education = [
  {
    school: "CanSheCode — Advanced Flutter Development Course",
    period: "2024 — 2025",
    text: "Mobile app development, UI and state management in Flutter and Dart."
  },
  {
    school: "Czechitas, Prague — Digital Academy: Web",
    period: "2022",
    text: "Intensive course in HTML, CSS, JavaScript, React and UI/UX."
  },
  {
    school: "Bashkir State University, Russia",
    period: "2002 — 2009",
    text: "University degree in International Relations and Law."
  }
];

export const languages = [
  { name: "Russian", level: "Native" },
  { name: "Czech", level: "B2" },
  { name: "English", level: "B1/B2 · working proficiency" }
];
