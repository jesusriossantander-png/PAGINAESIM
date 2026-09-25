"use client";

import { useState } from "react";
import { Ficha } from "@/components/opcion2/MapaPuntos";
import { bases, mapaArgentina as mapa } from "@/data/bases";

const W = mapa.width;
const H = mapa.height;
const HQ = bases[0];
const ZOOM = 2.4;

// Mapa de bases de la Opción 3: pasar el mouse muestra la ciudad, el clic acerca el mapa a esa zona y abre la ficha.
export default function MapaBases3() {
  const [activa, setActiva] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const sel = activa === null ? null : bases[activa];
  const s = sel ? ZOOM : 1;
  const tx = sel ? W / 2 - sel.x * s : 0;
  const ty = sel ? H * 0.45 - sel.y * s : 0;
  const ficha = bases[activa ?? hover ?? 0];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
      <div className="relative mx-auto w-full max-w-[400px]">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto max-h-[62svh] w-full overflow-hidden rounded-2xl bg-petro-50" role="img" aria-label="Mapa de Argentina con las bases de ESIM">
          <g style={{ transform: `translate(${tx}px, ${ty}px) scale(${s})`, transition: "transform 1s cubic-bezier(0.65, 0, 0.35, 1)" }}>
            <path d={mapa.vecinos} fill="#ffffff" stroke="#1a4d6b" strokeOpacity={0.12} strokeWidth={1} vectorEffect="non-scaling-stroke" />
            <path d={mapa.argentina} fill="#dde8ef" stroke="#1a4d6b" strokeOpacity={0.55} strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
            <path d={mapa.malvinas} fill="#dde8ef" stroke="#1a4d6b" strokeOpacity={0.55} strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
            {bases.slice(1).map((b) => {
              const i = bases.indexOf(b);
              const on = activa === i || hover === i;
              const mx = (HQ.x + b.x) / 2 + (b.y - HQ.y) * 0.3;
              const my = (HQ.y + b.y) / 2 - (b.x - HQ.x) * 0.3;
              return (
                <path
                  key={b.id}
                  d={`M${HQ.x},${HQ.y} Q${mx},${my} ${b.x},${b.y}`}
                  fill="none"
                  stroke="#0a7a42"
                  strokeWidth={on ? 3 : 1.6}
                  strokeOpacity={on ? 1 : 0.45}
                  strokeDasharray="6 7"
                  vectorEffect="non-scaling-stroke"
                  className="mapa-flujo"
                />
              );
            })}
            {bases.map((b, i) => {
              const on = activa === i;
              const sobre = hover === i;
              const r = (on || sobre ? 13 : 9) / s;
              return (
                <g
                  key={b.id}
                  role="button"
                  tabIndex={0}
                  aria-label={`${b.ciudad}, ${b.provincia}`}
                  aria-pressed={on}
                  className="cursor-pointer outline-none"
                  onClick={() => setActiva(on ? null : i)}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActiva(on ? null : i)}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(i)}
                  onBlur={() => setHover(null)}
                >
                  <circle cx={b.x} cy={b.y} r={34 / s} fill="#0a7a42" className="mapa-pulso" style={{ transformOrigin: `${b.x}px ${b.y}px` }} />
                  <circle cx={b.x} cy={b.y} r={r} fill={on ? "#0a7a42" : "#ffffff"} stroke="#0a7a42" strokeWidth={4} vectorEffect="non-scaling-stroke" style={{ transition: "r .3s, fill .3s" }} />
                  {(on || sobre || s === 1) && (
                    <text
                      x={b.id === "mendoza" ? b.x : b.x + 18 / s}
                      y={b.id === "mendoza" ? b.y - 20 / s : b.y + 7 / s}
                      textAnchor={b.id === "mendoza" ? "middle" : "start"}
                      fontSize={(on || sobre ? 24 : 20) / s}
                      fontWeight={800}
                      fill="#071722"
                      style={{ fontFamily: "var(--font-sans)", pointerEvents: "none" }}
                    >
                      {b.ciudad}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        </svg>
        {sel ? (
          <button onClick={() => setActiva(null)} className="absolute top-3 right-3 rounded-md bg-petro-900 px-3 py-2 text-xs font-bold text-white hover:bg-petro-700">
            ← Ver todo el país
          </button>
        ) : (
          <p className="mt-3 text-center text-xs text-neutral-500">Tocá un punto verde para acercarte a esa base</p>
        )}
      </div>

      <div>
        <div role="tablist" aria-label="Bases" className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {bases.map((b, i) => (
            <button
              key={b.id}
              role="tab"
              aria-selected={activa === i}
              onClick={() => setActiva(activa === i ? null : i)}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className={`rounded-md px-3 py-3 text-left text-sm font-extrabold transition ${
                activa === i ? "bg-petro-800 text-white" : "bg-petro-50 text-petro-800 hover:bg-petro-100"
              }`}
            >
              {b.ciudad}
            </button>
          ))}
        </div>
        <Ficha key={ficha.id} base={ficha} compacta />
      </div>
    </div>
  );
}
