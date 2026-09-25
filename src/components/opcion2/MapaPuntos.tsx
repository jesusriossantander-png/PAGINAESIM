"use client";

import { useState } from "react";
import puntos from "@/data/mapa-puntos.json";
import { bases, mapaArgentina } from "@/data/bases";

// Mapa punteado de Argentina (Natural Earth) con las bases de ESIM
export default function MapaPuntos() {
  const [hover, setHover] = useState<string | null>(null);
  const r = puntos.step * 0.36;
  const activa = bases.find((b) => b.id === hover);

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <svg viewBox={`0 0 ${mapaArgentina.width} ${mapaArgentina.height}`} className="h-auto w-full" role="img" aria-label="Mapa de Argentina con las bases de ESIM">
        {puntos.puntos.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill="#262626" />
        ))}
        {bases.map((b) => (
          <g
            key={b.id}
            tabIndex={0}
            role="button"
            aria-label={`${b.ciudad}, ${b.provincia}`}
            onMouseEnter={() => setHover(b.id)}
            onMouseLeave={() => setHover(null)}
            onFocus={() => setHover(b.id)}
            onBlur={() => setHover(null)}
            onClick={() => setHover(hover === b.id ? null : b.id)}
            className="cursor-pointer outline-none"
          >
            <circle cx={b.x} cy={b.y} r={34} fill="#e30613" className="mapa-pulso" style={{ transformOrigin: `${b.x}px ${b.y}px` }} />
            <circle cx={b.x} cy={b.y} r={hover === b.id ? 14 : 11} fill="#e30613" stroke="#fff" strokeWidth={4} style={{ transition: "r .25s" }} />
          </g>
        ))}
      </svg>
      {activa && (
        <div
          className="pointer-events-none absolute z-10 w-56 -translate-x-1/2 -translate-y-full rounded-none bg-neutral-900 p-4 text-sm text-white shadow-xl"
          style={{ left: `${(activa.x / mapaArgentina.width) * 100}%`, top: `calc(${(activa.y / mapaArgentina.height) * 100}% - 18px)` }}
        >
          <p className="font-extrabold">{activa.ciudad}</p>
          <p className="text-xs text-white/60">{activa.provincia}</p>
          <ul className="mt-2 space-y-1 text-xs">
            {activa.sitios.map((s) => (
              <li key={s.nombre}>
                <span className="font-bold text-rojo-500">■</span> {s.nombre}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
