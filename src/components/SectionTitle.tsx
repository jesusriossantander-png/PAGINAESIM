export default function SectionTitle({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="text-sm font-bold tracking-[0.2em] text-brand-500 uppercase">{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-extrabold md:text-4xl ${light ? "text-white" : "text-ink-900"}`}>{title}</h2>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/75" : "text-steel-500"}`}>{intro}</p>}
    </div>
  );
}
