import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-16 lg:pt-0">
      <Reveal>
        <SectionHeading index="01" label="About" title={about.lede} />
      </Reveal>

      <Reveal className="space-y-5 text-[16.5px] leading-[1.75] text-ink-muted">
        {about.paragraphs.map((p) => (
          <p key={p.slice(0, 24)} className="text-pretty">
            {p}
          </p>
        ))}
      </Reveal>

      <Reveal>
        <dl className="mt-10 grid grid-cols-3 divide-x divide-line border-y border-line">
          {about.facts.map((f) => (
            <div key={f.label} className="px-3 py-5 first:pl-0 sm:px-5">
              <dt className="sr-only">{f.label}</dt>
              <dd>
                <span className="block whitespace-nowrap font-serif text-[1.2rem] text-ink sm:text-[1.5rem] xl:text-[1.75rem]">{f.value}</span>
                <span className="mt-1 block text-[12.5px] leading-snug text-ink-muted">{f.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
