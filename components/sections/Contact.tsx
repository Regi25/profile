import { ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/lib/data";

const pill =
  "inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line pb-10 pt-16">
      <Reveal>
        <SectionHeading index="05" label="Contact" title="Let's talk." />
        <p className="max-w-xl text-pretty leading-relaxed text-ink-muted">
          Email is the quickest way to reach me. I&apos;m based in České Budějovice, Czech Republic.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="group mt-8 inline-flex items-center gap-2 break-all font-serif text-[1.6rem] text-ink underline decoration-line decoration-1 underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent sm:text-[2rem]"
        >
          {profile.email}
          <ArrowUpRight
            size={22}
            className="shrink-0 text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </a>

        <div className="mt-8 flex flex-wrap gap-2.5">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={pill}>
            <Linkedin size={15} /> LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className={pill}>
            <Github size={15} /> GitHub
          </a>
          <a href={profile.resume.en} target="_blank" rel="noreferrer" className={pill}>
            <Download size={15} /> CV · EN
          </a>
          <a href={profile.resume.cz} target="_blank" rel="noreferrer" className={pill}>
            <Download size={15} /> CV · CZ
          </a>
        </div>
      </Reveal>

      <p className="mt-20 border-t border-line pt-6 font-mono text-[11.5px] text-ink-muted">
        © {new Date().getFullYear()} {profile.name} · Built with Next.js, TypeScript &amp; Tailwind CSS
      </p>
    </section>
  );
}
