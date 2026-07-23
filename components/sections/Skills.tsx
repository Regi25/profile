"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-paper-dim/40">
      <div className="mx-auto max-w-content px-6 py-24 md:py-28">
        <SectionLabel index="04" name="skills" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-xl border border-line bg-surface p-5"
            >
              <p className="mb-4 font-mono text-[12px] uppercase tracking-wide text-accent">
                {group.category}
              </p>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[14.5px] text-ink-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
