"use client";

import { useEffect, useState } from "react";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { nav, profile } from "@/lib/data";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { CommandPalette } from "@/components/nav/CommandPalette";

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      // A section counts as active while it crosses the upper-middle band of the viewport.
      { rootMargin: "-35% 0px -60% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const iconLink =
  "flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-accent hover:text-accent";

export function Sidebar() {
  const active = useActiveSection(nav.map((n) => n.id));

  return (
    <aside className="flex flex-col justify-between pb-6 pt-16 lg:sticky lg:top-0 lg:h-screen lg:max-h-[60rem] lg:py-20">
      <div className="rise">
        <h1 className="font-serif text-[3.2rem] leading-[0.98] tracking-tight text-ink sm:text-[4rem]">
          Regina
          <br />
          Iuldasheva
        </h1>
        <p className="mt-6 text-lg font-medium text-ink">{profile.role}</p>
        <p className="mt-1 font-mono text-[13px] text-ink-muted">{profile.tagline}</p>
        <p className="mt-6 max-w-sm text-pretty leading-relaxed text-ink-muted">{profile.intro}</p>

        <nav aria-label="Sections" className="mt-12 hidden lg:block">
          <ol className="space-y-1">
            {nav.map((item, i) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className="group flex items-center gap-4 py-1.5"
                  >
                    <span
                      className={`font-mono text-[11px] transition-colors ${
                        isActive ? "text-accent" : "text-ink-muted"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`h-px transition-all duration-300 ${
                        isActive ? "w-14 bg-ink" : "w-7 bg-line group-hover:w-14 group-hover:bg-ink-muted"
                      }`}
                    />
                    <span
                      className={`text-[12px] font-medium uppercase tracking-[0.14em] transition-colors ${
                        isActive ? "text-ink" : "text-ink-muted group-hover:text-ink"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>

      <div className="rise rise-late mt-10 space-y-5">
        <div className="flex flex-wrap gap-2.5">
          <a
            href={profile.resume.en}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            <Download size={15} />
            CV · EN
          </a>
          <a
            href={profile.resume.cz}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink/80 px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <Download size={15} />
            CV · CZ
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconLink}>
            <Github size={16} strokeWidth={1.75} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconLink}>
            <Linkedin size={16} strokeWidth={1.75} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className={iconLink}>
            <Mail size={16} strokeWidth={1.75} />
          </a>
          <span className="mx-1 h-5 w-px bg-line" aria-hidden="true" />
          <ThemeToggle />
          <CommandPalette />
        </div>

        <p className="flex items-center gap-2 text-sm text-ink-muted">
          <MapPin size={14} />
          {profile.location}
        </p>
      </div>
    </aside>
  );
}
