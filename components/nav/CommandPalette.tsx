"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Search, FileText } from "lucide-react";
import { nav, profile } from "@/lib/data";

type Command = {
  id: string;
  label: string;
  hint: string;
  icon: React.ReactNode;
  action: () => void;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Command[] = useMemo(
    () => [
      ...nav.map((item) => ({
        id: item.id,
        label: `Go to ${item.label}`,
        hint: "section",
        icon: <ArrowUpRight size={15} />,
        action: () => scrollTo(item.id)
      })),
      {
        id: "github",
        label: "Open GitHub",
        hint: "external",
        icon: <Github size={15} />,
        action: () => window.open(profile.github, "_blank")
      },
      {
        id: "linkedin",
        label: "Open LinkedIn",
        hint: "external",
        icon: <Linkedin size={15} />,
        action: () => window.open(profile.linkedin, "_blank")
      },
      {
        id: "resume-en",
        label: "Open CV (English)",
        hint: "pdf",
        icon: <FileText size={15} />,
        action: () => window.open(profile.resume.en, "_blank")
      },
      {
        id: "resume-cz",
        label: "Open CV (Czech)",
        hint: "pdf",
        icon: <FileText size={15} />,
        action: () => window.open(profile.resume.cz, "_blank")
      },
      {
        id: "email",
        label: `Email ${profile.email}`,
        hint: "contact",
        icon: <Mail size={15} />,
        action: () => window.open(`mailto:${profile.email}`)
      }
    ],
    []
  );

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
        return;
      }
      if (!open) return;

      if (e.key === "Escape") close();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const cmd = filtered[activeIndex];
        if (cmd) {
          cmd.action();
          close();
        }
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, filtered, activeIndex, close]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      setActiveIndex(0);
    }
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command palette (⌘K)"
        title="Search · ⌘K"
        className="flex h-9 items-center gap-1.5 rounded-full border border-line px-3 font-mono text-[11px] text-ink-muted transition-colors hover:border-accent hover:text-accent"
      >
        <Search size={14} strokeWidth={1.75} />
        <kbd className="font-mono">⌘K</kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] flex items-start justify-center bg-ink/40 px-4 pt-[14vh] backdrop-blur-sm"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg overflow-hidden rounded-xl border border-line bg-surface shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Command palette"
            >
              <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
                <Search size={15} className="shrink-0 text-ink-muted" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Jump to a section, project, or link..."
                  className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-muted"
                  aria-label="Command palette search"
                />
                <kbd className="rounded border border-line px-1.5 py-0.5 text-[10px] text-ink-muted">
                  esc
                </kbd>
              </div>
              <ul className="max-h-72 overflow-y-auto py-1.5" role="listbox">
                {filtered.length === 0 && (
                  <li className="px-4 py-6 text-center text-sm text-ink-muted">No matches</li>
                )}
                {filtered.map((cmd, i) => (
                  <li key={cmd.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveIndex(i)}
                      onClick={() => {
                        cmd.action();
                        close();
                      }}
                      className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                        i === activeIndex ? "bg-accent-soft text-accent" : "text-ink"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className={i === activeIndex ? "text-accent" : "text-ink-muted"}>
                          {cmd.icon}
                        </span>
                        {cmd.label}
                      </span>
                      <span className="font-mono text-[11px] text-ink-muted">{cmd.hint}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
