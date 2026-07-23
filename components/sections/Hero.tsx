"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, FileText } from "lucide-react";
import { profile } from "@/lib/data";

const fact = "flex items-baseline justify-between gap-4 border-b border-line py-2.5 last:border-none";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <div
        className="pointer-events-none absolute inset-0 grain"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-content gap-14 px-6 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 font-mono text-[13px] text-ink-muted"
          >
            <span className="text-accent">{"/*"}</span> frontend developer · react ·
            typescript <span className="text-accent">{"*/"}</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance text-[2.6rem] font-medium leading-[1.08] tracking-tight text-ink sm:text-6xl"
          >
            Frontend Developer building production React apps and full-stack side projects.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-ink-muted"
          >
            I&apos;m {profile.name}, a Frontend Developer working in React, Next.js and
            TypeScript. Alongside my day job I design and ship full-stack and AI
            products end to end — schema, backend, interface.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              <FileText size={15} />
              Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Contact
              <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="rounded-xl border border-line bg-paper-dim/60 p-5"
        >
          <p className="mb-3 font-mono text-[11px] uppercase tracking-wide text-ink-muted">
            profile.json
          </p>
          <dl className="font-mono text-[13px]">
            <div className={fact}>
              <dt className="text-ink-muted">role</dt>
              <dd className="text-right text-ink">Frontend Dev @ Xtuning</dd>
            </div>
            <div className={fact}>
              <dt className="text-ink-muted">based</dt>
              <dd className="text-right text-ink">České Budějovice, CZ</dd>
            </div>
            <div className={fact}>
              <dt className="text-ink-muted">stack</dt>
              <dd className="text-right text-ink">React · Next.js · TypeScript</dd>
            </div>
            <div className={fact}>
              <dt className="text-ink-muted">building</dt>
              <dd className="text-right text-ink">full-stack + AI side projects</dd>
            </div>
            <div className={fact}>
              <dt className="text-ink-muted">status</dt>
              <dd className="flex items-center justify-end gap-1.5 text-right text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                open to new roles
              </dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
