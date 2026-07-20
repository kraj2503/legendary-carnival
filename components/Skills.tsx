import { skills } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const entries = Object.entries(skills);
  return (
    <section id="skills" className="border-t border-hairline/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading roman="V" label="Skills" title="The toolkit, laid flat." />

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {entries.map(([category, items], i) => (
            <Reveal key={category} delay={i * 0.04}>
              <h3 className="eyebrow text-amber mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-text/85 border border-hairline rounded-full px-3.5 py-1.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
