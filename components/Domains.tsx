import { domains } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Domains() {
  return (
    <section id="domains" className="border-t border-hairline/60 py-24 md:py-32 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          roman="II"
          label="Where I Build"
          title="Five layers of the same stack, from reasoning down to reliability."
          intro="I don't think of AI work and infrastructure work as separate disciplines — the same instinct for clear boundaries and predictable failure applies to both."
        />

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {domains.map((d, i) => (
            <Reveal key={d.n} delay={i * 0.05}>
              <div className="border-t border-hairline/60 pt-6">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-display text-xl">{d.title}</h3>
                  <span className="font-mono text-xs text-muted">{d.n}</span>
                </div>
                <p className="text-muted leading-relaxed mb-4">{d.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {d.tools.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[0.7rem] text-signal/90 border border-hairline rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
