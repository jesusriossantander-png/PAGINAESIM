"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export type Proyecto = { src: string; title: string; client: string; tag: string };

// Carrusel horizontal con scroll-snap (arrastre táctil nativo) y flechas en escritorio.
export default function ProjectsCarousel({ items }: { items: Proyecto[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (d: number) => ref.current?.scrollBy({ left: d * ref.current.clientWidth * 0.8, behavior: "smooth" });

  return (
    <div>
      <div className="container-x flex justify-end gap-2">
        {[-1, 1].map((d) => (
          <button
            key={d}
            onClick={() => move(d)}
            aria-label={d < 0 ? "Anterior" : "Siguiente"}
            className="grid h-12 w-12 place-items-center rounded-full border border-line text-ink transition hover:border-brand-500 hover:bg-brand-500 hover:text-white"
          >
            {d < 0 ? "←" : "→"}
          </button>
        ))}
      </div>
      <div
        ref={ref}
        className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-6 [scrollbar-width:none] sm:px-8 xl:px-[max(3rem,calc((100vw-88rem)/2+3rem))] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((p, i) => (
          <Link
            key={p.src}
            href="/obras"
            className="group relative aspect-[3/4] w-[78vw] shrink-0 snap-start overflow-hidden rounded-[1.5rem] bg-night-900 sm:w-[46vw] lg:w-[30vw] xl:w-[25rem]"
          >
            <Image src={p.src} alt={p.title} fill sizes="(min-width:1024px) 30vw, 78vw" className="object-cover transition duration-[1200ms] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-night-950/95 via-night-950/10 to-transparent" />
            <span className="absolute top-5 left-5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase backdrop-blur">
              {p.tag}
            </span>
            <span className="absolute top-5 right-5 font-display text-sm text-white/60">{String(i + 1).padStart(2, "0")}</span>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-sm font-semibold text-brand-300">{p.client}</p>
              <h3 className="mt-1 text-2xl font-semibold text-white">{p.title}</h3>
              <span className="mt-4 inline-flex translate-y-2 items-center gap-2 text-sm font-bold text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                Ver proyecto →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
