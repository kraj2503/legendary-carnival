import { process } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section id="process" className="border-t border-hairline/60 py-24 md:py-32 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          roman="IV"
          label="Process"
          title="I build systems the way I'd want to inherit them."
          intro="Whether it's an agent pipeline or a reporting service, the sequence is the same — because the failure modes are the same."
        />

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {process.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <div className="border-t border-hairline/60 pt-6">
                <span className="font-display italic text-amber text-3xl">{step.n}</span>
                <h3 className="font-display text-xl mt-4 mb-3">{step.title}</h3>
                <p className="text-muted leading-relaxed">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
