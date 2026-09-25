"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { consultar, useModal } from "./modal";

export type Proyecto3 = { src: string; titulo: string; tag: string; detalle: string };

const proyectos: Proyecto3[] = [
  { src: "/img/izaje/izaje-02.webp", titulo: "Tendido de ducto con grúas", tag: "Ductos e izaje", detalle: "Bajada y montaje de cañería con grúas y equipos propios." },
  { src: "/img/ajuste/bomba-b8-ypf-poliducto-06.webp", titulo: "Bomba B8 · Poliducto YPF", tag: "Equipos rotativos", detalle: "Desmontaje y traslado con hidrogrúa de la bomba del poliducto." },
  { src: "/img/ajuste/compresor-air-liquid-08.webp", titulo: "Compresor · Air Liquide", tag: "Equipos rotativos", detalle: "Intervención en compresor industrial en planta." },
  { src: "/img/ductos/ductos-11.webp", titulo: "Soldadura calificada de cañería", tag: "Ductos e izaje", detalle: "Soldadura de uniones en obra con personal calificado." },
  { src: "/img/ajuste/motor-cooper-superior-yac-malargue-12.webp", titulo: "Motor Cooper Superior · Malargüe", tag: "Equipos rotativos", detalle: "Ajuste de motor a gas para yacimiento del sur mendocino." },
  { src: "/img/repuestos/repuestos-04.webp", titulo: "Rótula mecanizada a medida", tag: "Repuestos y 3D", detalle: "Pieza fabricada en taller propio a partir de relevamiento." },
  { src: "/img/oficina-tecnica/oficina-tecnica-01.webp", titulo: "Diseño de dispositivo en 3D", tag: "Repuestos y 3D", detalle: "Modelado 3D en oficina técnica antes de fabricar." },
  { src: "/img/izaje/izaje-03.webp", titulo: "Montaje nocturno en obra", tag: "Ductos e izaje", detalle: "Trabajo en campo con hidrogrúas y grúas propias." },
];
const tabs = ["Todos", "Ductos e izaje", "Equipos rotativos", "Repuestos y 3D"];

export default function Proyectos3() {
  const [tab, setTab] = useState("Todos");
  const [abierto, setAbierto] = useState<number | null>(null);
  const filtrados = tab === "Todos" ? proyectos : proyectos.filter((p) => p.tag === tab);
  const lista = filtrados.slice(0, 4);

  const cerrar = useCallback(() => setAbierto(null), []);
  const mover = useCallback((d: number) => setAbierto((i) => (i === null ? i : (i + d + filtrados.length) % filtrados.length)), [filtrados.length]);
  const flechas = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    },
    [mover],
  );
  useModal(abierto !== null, cerrar, flechas);
  const actual = abierto === null ? null : filtrados[abierto];

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist">
        {tabs.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`rounded-md px-5 py-2.5 text-sm font-bold transition ${tab === t ? "bg-petro-800 text-white" : "bg-petro-50 text-petro-800 hover:bg-petro-100"}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {lista.map((p, i) => (
          <button
            key={p.src}
            onClick={() => setAbierto(i)}
            aria-label={`Ver proyecto: ${p.titulo}`}
            className="group animate-fade-up relative aspect-[3/4] overflow-hidden rounded-xl bg-petro-900 text-left lg:aspect-[3/4.3]"
          >
            <Image src={p.src} alt={p.titulo} fill sizes="(min-width:1024px) 22vw, 50vw" className="object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-petro-950 via-petro-950/30 to-transparent" />
            <span className="absolute top-4 left-4 rounded bg-white/15 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur">{p.tag}</span>
            <span className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-md bg-acento-500 text-white opacity-0 transition group-hover:opacity-100">⤢</span>
            <span className="absolute inset-x-4 bottom-4">
              <span className="block text-base leading-snug font-bold text-white md:text-lg">{p.titulo}</span>
              <span className="mt-1 block text-xs font-bold text-acento-300 opacity-0 transition group-hover:opacity-100">Ver proyecto →</span>
            </span>
          </button>
        ))}
      </div>

      {actual && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-petro-950/95 p-4 backdrop-blur" role="dialog" aria-modal="true" aria-label={actual.titulo} onClick={cerrar}>
          <div className="grid w-full max-w-6xl overflow-hidden rounded-2xl bg-white lg:grid-cols-[1.6fr_1fr]" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[4/3] bg-petro-900 lg:aspect-auto lg:min-h-[70svh]">
              <Image key={actual.src} src={actual.src} alt={actual.titulo} fill sizes="(min-width:1024px) 60vw, 100vw" className="animate-fade-up object-contain" />
            </div>
            <div className="flex flex-col p-8">
              <p className="text-xs font-extrabold tracking-wider text-acento-500 uppercase">{actual.tag}</p>
              <h3 className="mt-3 text-3xl font-extrabold text-petro-950">{actual.titulo}</h3>
              <p className="mt-4 text-neutral-600">{actual.detalle}</p>
              <p className="mt-6 text-sm font-bold text-neutral-400">
                {abierto! + 1} / {filtrados.length}
              </p>
              <div className="mt-auto grid gap-3 pt-8">
                <div className="flex gap-2">
                  <button onClick={() => mover(-1)} aria-label="Anterior" className="flex-1 rounded-md border border-petro-100 py-3 font-bold text-petro-800 hover:bg-petro-50">
                    ← Anterior
                  </button>
                  <button onClick={() => mover(1)} aria-label="Siguiente" className="flex-1 rounded-md border border-petro-100 py-3 font-bold text-petro-800 hover:bg-petro-50">
                    Siguiente →
                  </button>
                </div>
                <button
                  onClick={() => {
                    const t = actual.titulo;
                    cerrar();
                    setTimeout(() => consultar(`Hola, me interesa un trabajo similar a "${t}". `), 50);
                  }}
                  className="rounded-md bg-acento-500 py-3.5 font-extrabold text-white hover:bg-acento-400"
                >
                  Consultar por un trabajo similar
                </button>
              </div>
            </div>
          </div>
          <button onClick={cerrar} aria-label="Cerrar" className="absolute top-5 right-5 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20">
            ×
          </button>
        </div>
      )}
    </div>
  );
}
