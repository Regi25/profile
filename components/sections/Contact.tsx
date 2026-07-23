"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { profile } from "@/lib/data";

const links = [
  { id: "email", label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { id: "linkedin", label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { id: "github", label: "GitHub", href: profile.github, icon: Github }
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-6 py-24 md:py-32">
      <SectionLabel index="05" name="contact" />

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-xl text-balance text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl"
      >
        Open to Frontend and Full-Stack roles — let&apos;s talk.
      </motion.h2>

      <p className="mt-4 flex items-center gap-2 text-ink-muted">
        <MapPin size={15} />
        {profile.location}
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        {links.map(({ id, label, href, icon: Icon }) => (
          <a
            key={id}
            href={href}
            target={id === "email" ? undefined : "_blank"}
            rel={id === "email" ? undefined : "noreferrer"}
            className="group inline-flex items-center gap-2.5 rounded-full border border-line px-5 py-3 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <Icon size={16} />
            {label}
            <ArrowUpRight
              size={14}
              className="text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          </a>
        ))}
      </div>

      <p className="mt-16 border-t border-line pt-6 font-mono text-[12px] text-ink-muted">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js, TypeScript &amp; Tailwind.
      </p>
    </section>
  );
}
