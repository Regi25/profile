"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-paper-dim/40">
      <div className="mx-auto max-w-content px-6 py-24 md:py-28">
        <SectionLabel index="02" name="experience" />

        <div className="space-y-0">
          {experience.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="grid gap-3 border-b border-line py-8 first:pt-0 last:border-none md:grid-cols-[1fr_2.2fr] md:gap-10"
            >
              <div>
                <p className="font-mono text-[13px] text-ink-muted">{job.period}</p>
                <p className="mt-1 text-ink">{job.location}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-ink">
                  {job.role} <span className="text-ink-muted">· {job.company}</span>
                </h3>
                {job.context && (
                  <p className="mt-0.5 font-mono text-[13px] text-accent">{job.context}</p>
                )}
                <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">{job.summary}</p>
                {job.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
