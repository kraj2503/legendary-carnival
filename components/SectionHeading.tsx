import Reveal from "./Reveal";

export default function SectionHeading({
  roman,
  label,
  title,
  intro,
}: {
  roman: string;
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <div className="flex items-baseline gap-3 mb-5">
        <span className="font-display italic text-amber text-xl">{roman}</span>
        <span className="eyebrow text-muted">{label}</span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl max-w-2xl text-balance">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 max-w-xl text-muted leading-relaxed">{intro}</p>
      )}
    </Reveal>
  );
}
