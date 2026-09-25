"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { servicios } from "@/data/servicios";

// Lista de servicios: al pasar el mouse (o tocar) cambia la imagen grande.
export default function ServicesExplorer() {
  const [active, setActive] = useState(0);
  const s = servicios[active];

  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
      <ul className="border-t border-white/10">
        {servicios.map((item, i) => (
          <li key={item.slug}>
            <button
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-expanded={i === active}
              className="group flex w-full items-center gap-6 border-b border-white/10 py-6 text-left md:py-7"
            >
              <span className={`font-display text-sm transition ${i === active ? "text-brand-300" : "text-white/35"}`}>
                0{i + 1}
              </span>
              <span
                className={`flex-1 font-display text-2xl font-medium transition-all duration-500 md:text-4xl ${
                  i === active ? "translate-x-2 text-white" : "text-white/45 group-hover:text-white/75"
                }`}
              >
                {item.title}
              </span>
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                  i === active ? "rotate-0 border-brand-400 bg-brand-500 text-white" : "-rotate-45 border-white/15 text-white/40"
                }`}
              >
                →
              </span>
            </button>
            {/* En celular, el detalle aparece debajo del ítem activo */}
            <div className={`grid transition-all duration-500 lg:hidden ${i === active ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image src={item.image} alt={item.title} fill sizes="100vw" className="object-cover" />
                </div>
                <p className="mt-4 text-white/70">{item.description}</p>
                <Link href={`/servicios#${item.slug}`} className="mt-3 inline-block font-bold text-brand-300">
                  Conocer más →
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="relative hidden lg:block">
        <div className="sticky top-28">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
            {servicios.map((item, i) => (
              <Image
                key={item.slug}
                src={item.image}
                alt={item.title}
                fill
                sizes="45vw"
                className={`object-cover transition-all duration-700 ${i === active ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-night-950/95 via-night-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p key={s.slug} className="animate-fade-up max-w-md text-lg leading-relaxed text-white/85">
                {s.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.bullets.map((b) => (
                  <li key={b} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href={`/servicios#${s.slug}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-night-900 transition hover:bg-brand-300"
              >
                Conocer el servicio →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
