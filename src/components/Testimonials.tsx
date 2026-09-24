"use client";

import { useEffect, useState } from "react";
import { testimonios } from "@/data/site";

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setI((v) => (v + 1) % testimonios.length), 8000);
    return () => clearTimeout(t);
  }, [i]);
  const t = testimonios[i];

  return (
    <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
      <div className="flex gap-3 lg:flex-col">
        {testimonios.map((x, k) => (
          <button
            key={x.iniciales}
            onClick={() => setI(k)}
            aria-label={`Testimonio de ${x.cargo}`}
            className={`grid h-14 w-14 place-items-center rounded-full font-display text-sm font-bold transition ${
              k === i ? "bg-brand-500 text-white ring-4 ring-brand-100" : "bg-paper text-muted hover:bg-brand-50"
            }`}
          >
            {x.iniciales}
          </button>
        ))}
      </div>
      <figure key={i} className="animate-fade-up">
        <blockquote className="font-display text-2xl leading-snug font-medium text-ink md:text-4xl lg:text-[2.75rem]">
          “{t.texto}”
        </blockquote>
        <figcaption className="mt-8 flex items-center gap-4">
          <span className="h-px w-12 bg-brand-500" />
          <span>
            <span className="block font-bold">{t.cargo}</span>
            <span className="text-sm text-muted">{t.empresa}</span>
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
