"use client";

import { nav, contact } from "@/lib/content";

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-hairline/60 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-lg tracking-tight text-text">
          Kshitiz Raj
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="eyebrow text-muted hover:text-amber transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={contact.resume}
          download
          className="eyebrow border border-hairline px-4 py-2 rounded-full text-text hover:border-amber hover:text-amber transition-colors"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
