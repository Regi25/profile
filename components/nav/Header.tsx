"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/data";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { CommandPalette } from "@/components/nav/CommandPalette";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-paper/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#hero" className="font-mono text-sm tracking-tight text-ink">
          ri<span className="text-accent">.</span>dev
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <CommandPalette />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
