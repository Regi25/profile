"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-24 md:py-28">
      <SectionLabel index="01" name="about" />

      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-balance text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl"
        >
          A second career, chosen on purpose.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="space-y-5 text-[17px] leading-relaxed text-ink-muted"
        >
          <p>
            Before writing a line of production code, I spent more than twelve years
            coordinating transport logistics and later leading a department and
            practicing law. Both jobs came down to the same thing: own a process
            end to end, and be the person accountable when it breaks.
          </p>
          <p>
            I moved into frontend development because I wanted to build the systems
            directly instead of working around them. Today I&apos;m a Frontend
            Developer at Xtuning, shipping UI for a live B2C e-commerce admin
            platform in React, TypeScript and Tailwind. Outside of that, I build
            full-stack and AI products on my own — Postgres, Drizzle, LLM
            integration, all the way to the interface.
          </p>
          <p>
            The legal and logistics background isn&apos;t something I&apos;m moving
            past. It&apos;s why I default to structured state, typed forms, and
            asking what happens at the edge case — before it becomes a production
            bug.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
