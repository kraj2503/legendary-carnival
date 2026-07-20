import { projects } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="work" className="border-t border-hairline/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          roman="III"
          label="Work"
          title="What I build when nobody's asking me to."
          intro="Side projects that push into territory the day job doesn't — governed multi-agent systems, event-driven platforms, and a few things built purely out of curiosity."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full border border-hairline rounded-2xl p-8 hover:border-amber/60 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-2xl group-hover:text-amber transition-colors">
                    {p.title}
                  </h3>
                  <span className="font-mono text-xs text-muted pt-1">↗</span>
                </div>
                <p className="eyebrow text-signal/90 mb-4">{p.era}</p>
                <p className="text-muted leading-relaxed mb-5">{p.desc}</p>
                <p className="font-mono text-[0.72rem] text-muted/80">{p.stack}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
