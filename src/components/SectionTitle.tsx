// El título admite <em> para la palabra destacada en verde itálica, como en el diseño original.
export default function SectionTitle({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="text-xs font-bold tracking-[0.2em] text-brand-500 uppercase">{eyebrow}</p>}
      <h2
        className={`mt-3 text-3xl font-bold md:text-[2.625rem] md:leading-tight ${
          light ? "text-white [&_em]:text-accent-400" : "text-ink-800"
        }`}
      >
        {title}
      </h2>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/70" : "text-steel-500"}`}>{intro}</p>}
    </div>
  );
}
