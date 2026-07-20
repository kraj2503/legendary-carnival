"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/content";

const nodes = [
  { id: "root", x: 300, y: 90, r: 7, label: "root agent" },
  { id: "a", x: 140, y: 210, r: 5 },
  { id: "b", x: 300, y: 250, r: 5 },
  { id: "c", x: 460, y: 210, r: 5 },
  { id: "d", x: 90, y: 340, r: 4 },
  { id: "e", x: 210, y: 360, r: 4 },
  { id: "f", x: 390, y: 360, r: 4 },
  { id: "g", x: 510, y: 340, r: 4 },
];

const edges: [string, string][] = [
  ["root", "a"],
  ["root", "b"],
  ["root", "c"],
  ["a", "d"],
  ["a", "e"],
  ["b", "e"],
  ["b", "f"],
  ["c", "f"],
  ["c", "g"],
];

function findNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.55]">
        <svg
          viewBox="0 0 600 420"
          className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[620px] max-w-none md:w-[720px]"
          aria-hidden="true"
        >
          {edges.map(([from, to], i) => {
            const a = findNode(from);
            const b = findNode(to);
            return (
              <motion.line
                key={i}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="#232A33"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.3 + i * 0.08, ease: "easeInOut" }}
              />
            );
          })}
          {nodes.map((n, i) => (
            <motion.circle
              key={n.id}
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={n.id === "root" ? "#E8A33D" : "#4FBE8E"}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.07 }}
            />
          ))}
          {nodes.map((n, i) => (
            <motion.circle
              key={`pulse-${n.id}`}
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="none"
              stroke={n.id === "root" ? "#E8A33D" : "#4FBE8E"}
              strokeWidth="1"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: [0, 0.5, 0], scale: [1, 2.6, 3.2] }}
              transition={{
                duration: 2.6,
                delay: 2 + i * 0.35,
                repeat: Infinity,
                repeatDelay: 3 + (i % 3),
                ease: "easeOut",
              }}
            />
          ))}
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10 pt-28 pb-20 w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-amber mb-6"
        >
          Software Engineer · Agentic AI Systems
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-balance text-[2.5rem] leading-[1.08] sm:text-6xl md:text-7xl max-w-3xl"
        >
          Systems that reason,
          <br />
          not just <em className="italic text-amber">execute</em>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-8 max-w-xl text-lg text-muted leading-relaxed"
        >
          I'm Kshitiz Raj, a software engineer at Barclays. I build full-stack
          platforms and event-driven backends by day, and multi-agent,
          reasoning-first systems on the side — the kind that plan, delegate,
          and validate rather than run a fixed script.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <a
            href={contact.resume}
            download
            className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-medium text-ink hover:bg-amber/90 transition-colors"
          >
            Download resume
          </a>
          <a
            href="#work"
            className="eyebrow text-text hover:text-amber transition-colors"
          >
            See the work ↓
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted"
        >
          <a href={contact.linkedin} className="hover:text-amber transition-colors">LinkedIn</a>
          <a href={contact.github} className="hover:text-amber transition-colors">GitHub</a>
          <a href={`mailto:${contact.email}`} className="hover:text-amber transition-colors">Email</a>
          <a href={contact.twitter} className="hover:text-amber transition-colors">X</a>
        </motion.div>
      </div>
    </section>
  );
}
