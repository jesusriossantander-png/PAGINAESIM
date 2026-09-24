"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { caption, categorias, obras, type Categoria } from "@/data/obras";

export default function Gallery() {
  const [filter, setFilter] = useState<Categoria | "todas">("todas");
  const [index, setIndex] = useState<number | null>(null);

  const items = useMemo(() => (filter === "todas" ? obras : obras.filter((o) => o.category === filter)), [filter]);

  const close = useCallback(() => setIndex(null), []);
  const move = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, move]);

  const current = index === null ? null : items[index];

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar obras">
        {[{ id: "todas" as const, label: "Todas" }, ...categorias].map((c) => {
          const count = c.id === "todas" ? obras.length : obras.filter((o) => o.category === c.id).length;
          const active = filter === c.id;
          return (
            <button
              key={c.id}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(c.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active ? "bg-ink-900 text-white" : "bg-steel-100 text-ink-800 hover:bg-steel-50 hover:ring-1 hover:ring-ink-700"
              }`}
            >
              {c.label} <span className={active ? "text-accent-400" : "text-steel-500"}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((o, i) => (
          <button
            key={o.src}
            onClick={() => setIndex(i)}
            className="group relative mb-4 block w-full overflow-hidden rounded-xl break-inside-avoid bg-steel-100"
            aria-label={`Ampliar: ${caption(o)}`}
          >
            <Image
              src={o.src}
              alt={caption(o)}
              width={o.width}
              height={o.height}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink-950/90 to-transparent p-4 pt-10 text-left text-sm font-semibold text-white transition group-hover:translate-y-0">
              {caption(o)}
            </span>
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={caption(current)}
          onClick={close}
        >
          <div className="relative h-[80vh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image src={current.src} alt={caption(current)} fill sizes="100vw" className="object-contain" />
          </div>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-white/80">
            {caption(current)} · {index! + 1} / {items.length}
          </p>
          <LightboxButton label="Cerrar" className="top-4 right-4" onClick={close} d="M6 6l12 12M18 6L6 18" />
          <LightboxButton label="Anterior" className="top-1/2 left-4 -translate-y-1/2" onClick={() => move(-1)} d="M15 5l-7 7 7 7" />
          <LightboxButton label="Siguiente" className="top-1/2 right-4 -translate-y-1/2" onClick={() => move(1)} d="M9 5l7 7-7 7" />
        </div>
      )}
    </div>
  );
}

function LightboxButton({ label, className, onClick, d }: { label: string; className: string; onClick: () => void; d: string }) {
  return (
    <button
      aria-label={label}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`absolute grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d={d} />
      </svg>
    </button>
  );
}
