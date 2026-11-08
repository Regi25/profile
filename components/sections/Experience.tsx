import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { experience, previousCareer, type Highlight } from "@/lib/data";

function Bullet({ item }: { item: Highlight }) {
  return (
    <li className="relative pl-5 text-[15px] leading-relaxed text-ink-muted">
      <span className="absolute left-0 top-[0.7em] h-1 w-2.5 rounded-full bg-accent/70" aria-hidden="true" />
      {item.label && <span className="font-medium text-ink">{item.label}. </span>}
      {item.text}
    </li>
  );
}

export function Experience() {
  return (
    <section id="experience" className="border-t border-line py-16">
      <Reveal>
        <SectionHeading index="02" label="Experience" title="Production work and team projects." />
      </Reveal>

      <div className="space-y-14">
        {experience.map((job) => (
          <Reveal key={job.id}>
            <article>
              <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="text-xl font-medium text-ink">
                  {job.role}
                  <span className="text-ink-muted"> · {job.company}</span>
                </h3>
                <p className="shrink-0 font-mono text-[12.5px] text-ink-muted">{job.period}</p>
              </header>
              <p className="mt-1 text-sm text-ink-muted">{job.location}</p>
              {job.summary && <p className="mt-4 leading-relaxed text-ink-muted">{job.summary}</p>}

              <div className="mt-6 space-y-8">
                {job.groups.map((group, gi) => (
                  <div
                    key={group.title || gi}
                    className={group.title ? "rounded-xl border border-line bg-surface p-5 sm:p-6" : ""}
                  >
                    {group.title && (
                      <div className="mb-4">
                        <h4 className="font-serif text-[1.3rem] leading-snug text-ink">{group.title}</h4>
                        {group.stack && (
                          <p className="mt-1 font-mono text-[11.5px] leading-relaxed text-accent">{group.stack}</p>
                        )}
                      </div>
                    )}
                    <ul className="space-y-2.5">
                      {group.items.map((item) => (
                        <Bullet key={item.text.slice(0, 32)} item={item} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal>
          <div>
            <h3 className="font-mono text-[12px] uppercase tracking-[0.16em] text-ink-muted">Before software</h3>
            <div className="mt-5 divide-y divide-line border-y border-line">
              {previousCareer.map((job) => (
                <div key={job.role} className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <p className="font-mono text-[12.5px] text-ink-muted">{job.period}</p>
                  <div>
                    <p className="font-medium text-ink">
                      {job.role}
                      <span className="font-normal text-ink-muted"> · {job.company}, {job.location}</span>
                    </p>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">{job.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
