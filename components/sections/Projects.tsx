"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-content px-6 py-24 md:py-28">
      <SectionLabel index="03" name="projects" />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative flex flex-col rounded-xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_60px_-30px_rgba(52,82,255,0.35)]"
          >
            <div className="mb-1 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-wide text-ink-muted">
                file / 00{i + 1}
              </span>
              <div className="flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.name} on GitHub`}
                  className="rounded-full border border-line p-1.5 text-ink-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Github size={14} />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.name} live demo`}
                  className="rounded-full border border-line p-1.5 text-ink-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <h3 className="mt-3 text-xl font-medium text-ink">{project.name}</h3>
            <p className="mt-1 font-mono text-[13px] text-accent">{project.tagline}</p>

            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              {project.description}
            </p>

            <ul className="mt-5 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-[14px] leading-relaxed text-ink-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-[13px] italic text-ink-muted">{project.note}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-ink-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3 border-t border-line pt-5">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                Live demo <ArrowUpRight size={14} />
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-accent"
              >
                <Github size={14} /> Repo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
