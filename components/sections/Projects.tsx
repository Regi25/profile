import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { projects, type Project } from "@/lib/data";

function Pipeline({ pipeline }: { pipeline: NonNullable<Project["pipeline"]> }) {
  return (
    <figure className="mt-6 rounded-lg border border-line bg-paper-dim/70 p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
        {pipeline.calls.map((call, ci) => (
          <div key={call.label} className="flex flex-col gap-3 md:flex-row md:items-stretch">
            {ci > 0 && (
              <ArrowRight
                size={16}
                className="mx-auto shrink-0 rotate-90 self-center text-ink-muted md:mx-0 md:rotate-0"
                aria-hidden="true"
              />
            )}
            <div className="rounded-md border border-dashed border-accent/40 p-2.5">
              <p className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-accent">{call.label}</p>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                {call.steps.map((step, si) => (
                  <div key={step.title} className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    {si > 0 && (
                      <ArrowRight
                        size={14}
                        className="mx-auto shrink-0 rotate-90 text-ink-muted sm:mx-0 sm:rotate-0"
                        aria-hidden="true"
                      />
                    )}
                    <div className="rounded-md border border-line bg-surface px-3 py-2 md:max-w-[11.5rem]">
                      <p className="text-[13.5px] font-medium text-ink">{step.title}</p>
                      <p className="mt-0.5 text-[12px] leading-snug text-ink-muted">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <figcaption className="mt-3 text-[12.5px] leading-snug text-ink-muted">{pipeline.caption}</figcaption>
    </figure>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-t border-line py-16">
      <Reveal>
        <SectionHeading index="03" label="Projects" title="Things I designed and built myself." />
      </Reveal>

      <div className="space-y-8">
        {projects.map((project) => (
          <Reveal key={project.id}>
            <article className="rounded-xl border border-line bg-surface p-6 sm:p-7">
              <header className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-[1.9rem] leading-none text-ink">{project.name}</h3>
                <span className="font-mono text-[12px] text-ink-muted">{project.year}</span>
              </header>
              <p className="mt-2 text-[15px] font-medium text-accent">{project.tagline}</p>
              <p className="mt-4 text-pretty leading-relaxed text-ink-muted">{project.description}</p>

              {project.pipeline && <Pipeline pipeline={project.pipeline} />}

              <ul className="mt-6 space-y-2.5">
                {project.highlights.map((h) => (
                  <li key={h.slice(0, 32)} className="relative pl-5 text-[15px] leading-relaxed text-ink-muted">
                    <span
                      className="absolute left-0 top-[0.7em] h-1 w-2.5 rounded-full bg-accent/70"
                      aria-hidden="true"
                    />
                    {h}
                  </li>
                ))}
              </ul>
              {project.note && <p className="mt-4 text-[13.5px] italic text-ink-muted">{project.note}</p>}

              <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Tech stack">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-ink-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-5 border-t border-line pt-5">
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
                  <Github size={14} /> Source
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
