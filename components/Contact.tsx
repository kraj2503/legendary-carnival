import { contact } from "@/lib/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-hairline/60 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10 text-center">
        <Reveal>
          <p className="eyebrow text-amber mb-6">VII · Let's Talk</p>
          <h2 className="font-display text-balance text-4xl sm:text-5xl md:text-6xl max-w-3xl mx-auto leading-tight">
            Building something that needs to <em className="italic text-amber">reason</em>,
            not just run?
          </h2>
          <p className="mt-6 text-muted max-w-lg mx-auto leading-relaxed">
            Open to full-stack and agentic-AI engineering conversations. The
            fastest way to reach me is email.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-medium text-ink hover:bg-amber/90 transition-colors"
            >
              Email me
            </a>
            <a
              href={contact.resume}
              download
              className="eyebrow border border-hairline rounded-full px-6 py-3.5 text-text hover:border-amber hover:text-amber transition-colors"
            >
              Download resume
            </a>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted">
            <a href={contact.linkedin} className="hover:text-amber transition-colors">LinkedIn</a>
            <a href={contact.github} className="hover:text-amber transition-colors">GitHub</a>
            <a href={contact.twitter} className="hover:text-amber transition-colors">X</a>
            <span className="text-muted/60">{contact.site}</span>
          </div>
        </Reveal>
      </div>

      <div className="mt-24 border-t border-hairline/60 pt-8">
        <div className="mx-auto max-w-6xl px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted/70">
          <span>© 2026 Kshitiz Raj</span>
          <span className="font-mono">Software Engineer · Pune, IN</span>
        </div>
      </div>
    </section>
  );
}
