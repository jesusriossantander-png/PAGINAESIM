"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  { src: "/img/izaje/izaje-01.webp", tag: "Ductos · Izaje", title: "Tendido y montaje de ductos" },
  { src: "/img/ajuste/bomba-b8-ypf-poliducto-07.webp", tag: "Equipos rotativos", title: "Bomba B8 · Poliducto YPF" },
  { src: "/img/ductos/ductos-12.webp", tag: "Soldadura calificada", title: "Acondicionamiento de ductos" },
  { src: "/img/izaje/izaje-02.webp", tag: "Logística pesada", title: "Hidrogrúas y grúas propias" },
];

const DURATION = 7000;

export default function HeroSlideshow() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((v) => (v + 1) % slides.length), DURATION);
    return () => clearTimeout(t);
  }, [i, paused]);

  return (
    <section className="grain relative h-[100svh] min-h-[40rem] overflow-hidden bg-night-950 text-white">
      {slides.map((s, k) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ${k === i ? "opacity-100" : "opacity-0"}`}
          aria-hidden={k !== i}
        >
          <Image
            src={s.src}
            alt=""
            fill
            priority={k === 0}
            sizes="100vw"
            className={`object-cover ${k === i ? "animate-kenburns" : ""}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-night-950/90 via-night-950/55 to-night-950/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-transparent to-night-950/40" />

      <div className="container-x relative flex h-full flex-col justify-end pb-10 md:pb-14">
        <div className="max-w-6xl pt-28">
          <p className="eyebrow animate-fade-up text-brand-300">Servicios industriales · Oil &amp; Gas · Desde 1993</p>
          <h1
            className="animate-fade-up mt-6 text-[2.6rem] leading-[0.98] font-semibold sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
            style={{ animationDelay: "120ms" }}
          >
            Ingeniería que mantiene
            <br />
            <span className="text-brand-300">la energía en marcha.</span>
          </h1>
          <p className="animate-fade-up mt-7 max-w-xl text-lg text-white/75 md:text-xl" style={{ animationDelay: "240ms" }}>
            Ductos, equipos rotativos, izaje y oficina técnica. Más de 30 años resolviendo en campo y en taller, en Cuyo
            y Patagonia.
          </p>
          <div className="animate-fade-up mt-10 flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-3 rounded-full bg-brand-500 py-3.5 pr-3.5 pl-7 font-bold transition hover:bg-brand-400"
            >
              Solicitar cotización
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand-600 transition group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/obras"
              className="inline-flex items-center rounded-full border border-white/30 px-7 py-3.5 font-bold backdrop-blur transition hover:bg-white hover:text-night-900"
            >
              Ver proyectos
            </Link>
          </div>
        </div>

        {/* Indicadores del slideshow */}
        <div
          className="mt-12 hidden grid-cols-2 gap-x-6 gap-y-5 border-t sm:grid border-white/15 pt-6 lg:grid-cols-4"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {slides.map((s, k) => (
            <button key={s.src} onClick={() => setI(k)} className="group text-left" aria-label={`Ver: ${s.title}`}>
              <span className="relative block h-0.5 overflow-hidden bg-white/15">
                <span
                  key={`${i}-${k}`}
                  className="absolute inset-y-0 left-0 bg-brand-300"
                  style={{
                    width: k < i ? "100%" : "0%",
                    animation: k === i && !paused ? `grow ${DURATION}ms linear forwards` : undefined,
                  }}
                />
              </span>
              <span className={`mt-3 block text-[0.6875rem] font-bold tracking-[0.18em] uppercase ${k === i ? "text-brand-300" : "text-white/45"}`}>
                0{k + 1} · {s.tag}
              </span>
              <span className={`mt-1 block text-sm font-semibold transition ${k === i ? "text-white" : "text-white/55 group-hover:text-white/80"}`}>
                {s.title}
              </span>
            </button>
          ))}
        </div>
      </div>
      <style>{`@keyframes grow{from{width:0}to{width:100%}}`}</style>
    </section>
  );
}
