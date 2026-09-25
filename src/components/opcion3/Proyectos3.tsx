"use client";

import Image from "next/image";
import { useState } from "react";

const proyectos = [
  { src: "/img/izaje/izaje-02.webp", titulo: "Tendido de ducto con grúas", tag: "Ductos e izaje" },
  { src: "/img/ajuste/bomba-b8-ypf-poliducto-06.webp", titulo: "Bomba B8 · Poliducto YPF", tag: "Equipos rotativos" },
  { src: "/img/ajuste/compresor-air-liquid-08.webp", titulo: "Compresor · Air Liquide", tag: "Equipos rotativos" },
  { src: "/img/ductos/ductos-11.webp", titulo: "Soldadura calificada de cañería", tag: "Ductos e izaje" },
  { src: "/img/ajuste/motor-cooper-superior-yac-malargue-12.webp", titulo: "Motor Cooper Superior · Malargüe", tag: "Equipos rotativos" },
  { src: "/img/repuestos/repuestos-04.webp", titulo: "Rótula mecanizada a medida", tag: "Repuestos y 3D" },
  { src: "/img/oficina-tecnica/oficina-tecnica-01.webp", titulo: "Diseño de dispositivo en 3D", tag: "Repuestos y 3D" },
  { src: "/img/izaje/izaje-03.webp", titulo: "Montaje nocturno en obra", tag: "Ductos e izaje" },
];
const tabs = ["Todos", "Ductos e izaje", "Equipos rotativos", "Repuestos y 3D"];

export default function Proyectos3() {
  const [tab, setTab] = useState("Todos");
  const lista = (tab === "Todos" ? proyectos : proyectos.filter((p) => p.tag === tab)).slice(0, 4);
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist">
        {tabs.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`rounded-md px-5 py-2.5 text-sm font-bold transition ${tab === t ? "bg-indi-700 text-white" : "bg-indi-50 text-indi-800 hover:bg-indi-100"}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {lista.map((p) => (
          <article key={p.src} className="group animate-fade-up relative aspect-[3/4] overflow-hidden rounded-xl bg-indi-900 lg:aspect-[3/4.3]">
            <Image src={p.src} alt={p.titulo} fill sizes="(min-width:1024px) 22vw, 50vw" className="object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-indi-950 via-indi-950/30 to-transparent" />
            <span className="absolute top-4 left-4 rounded bg-white/15 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur">{p.tag}</span>
            <h3 className="absolute inset-x-4 bottom-4 text-base leading-snug font-bold text-white md:text-lg">{p.titulo}</h3>
          </article>
        ))}
      </div>
    </div>
  );
}
