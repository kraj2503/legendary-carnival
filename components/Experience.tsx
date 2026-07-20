import { roles } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-hairline/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          roman="I"
          label="Experience"
          title="Two years, one bank, a shift from forecasting risk to running infrastructure."
          intro="Both roles at Barclays, in Pune — first building the ML that flags project risk, now building the systems that run in production."
        />

        <div className="space-y-14 md:space-y-20">
          {roles.map((role) => (
            <Reveal key={role.title}>
              <div className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-14 border-t border-hairline/60 pt-10">
                <div>
                  <p className="eyebrow text-amber mb-2">{role.era}</p>
                  <h3 className="font-display text-2xl">{role.title}</h3>
                  <p className="mt-1 text-muted text-sm">
                    {role.label} · {role.location}
                  </p>
                </div>
                <div>
                  <p className="text-text/90 leading-relaxed mb-8 max-w-xl">
                    {role.summary}
                  </p>
                  <ul className="space-y-5">
                    {role.points.map((p) => (
                      <li key={p.stat} className="flex gap-5">
                        <span className="font-mono text-amber text-sm shrink-0 w-24 pt-0.5">
                          {p.stat}
                        </span>
                        <span className="text-muted leading-relaxed">{p.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
