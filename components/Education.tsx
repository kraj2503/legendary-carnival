import { education, certifications } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="border-t border-hairline/60 py-24 md:py-32 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading roman="VI" label="Education" title="Foundations." />

        <div className="grid md:grid-cols-2 gap-14">
          <Reveal>
            <div className="space-y-10">
              {education.map((e) => (
                <div key={e.school} className="border-t border-hairline/60 pt-6">
                  <p className="eyebrow text-amber mb-2">{e.era}</p>
                  <h3 className="font-display text-xl">{e.school}</h3>
                  <p className="text-muted mt-1">{e.degree}</p>
                  <p className="text-sm text-muted/80 mt-1">
                    {e.location} · {e.detail}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="eyebrow text-amber mb-5">Certifications & Courses</p>
            <ul className="space-y-3 border-t border-hairline/60 pt-6">
              {certifications.map((c) => (
                <li key={c} className="text-muted leading-relaxed text-sm">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
