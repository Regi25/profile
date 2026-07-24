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
          Frontend Developer.<br />React in production. Full-stack by curiosity.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="space-y-5 text-[17px] leading-relaxed text-ink-muted"
        >
          <p>
            I&apos;m a Frontend Developer at Xtuning, working on a production B2C
            e-commerce admin platform in React, TypeScript and Tailwind. My day-to-day
            work focuses on delivering new product features, modernizing existing
            modules, and building maintainable interfaces that integrate seamlessly
            with backend services.
          </p>
          <p>
            Outside of work, I build full-stack products with AI integrations, covering
            everything from database design and backend APIs to the frontend experience.
            Both Praetor and Snaprime below are solo builds from schema to deployment.
          </p>
          <p>
            Before moving into software I spent over twelve years in law and transport
            logistics. That experience shaped the way I approach software today —
            thinking systematically, anticipating edge cases, and taking ownership of
            features from idea to delivery.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
