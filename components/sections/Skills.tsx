import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { education, languages, skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="border-t border-line py-16">
      <Reveal>
        <SectionHeading index="04" label="Skills" title="Toolkit, education and languages." />
      </Reveal>

      <Reveal>
        <dl className="divide-y divide-line border-y border-line">
          {skills.map((group) => (
            <div key={group.category} className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <dt className="pt-1 text-[13px] font-medium uppercase tracking-[0.12em] text-ink">
                {group.category}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-surface px-3 py-1 text-[13px] text-ink-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <div className="mt-12 grid gap-10 sm:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <h3 className="font-mono text-[12px] uppercase tracking-[0.16em] text-ink-muted">Education</h3>
          <ul className="mt-4 space-y-4">
            {education.map((e) => (
              <li key={e.school}>
                <p className="font-medium text-ink">{e.school}</p>
                <p className="mt-0.5 text-[14px] leading-relaxed text-ink-muted">
                  <span className="font-mono text-[12px]">{e.period}</span> · {e.text}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <h3 className="font-mono text-[12px] uppercase tracking-[0.16em] text-ink-muted">Languages</h3>
          <ul className="mt-4 space-y-3">
            {languages.map((l) => (
              <li key={l.name} className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
                <span className="font-medium text-ink">{l.name}</span>
                <span className="text-right text-[13.5px] text-ink-muted">{l.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
