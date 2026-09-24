// Cinta de texto en movimiento continuo
export default function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 pr-10 font-display text-2xl font-medium whitespace-nowrap md:text-4xl">
            {t}
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-400 md:h-7 md:w-7" fill="currentColor">
              <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
