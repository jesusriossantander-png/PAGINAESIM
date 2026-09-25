"use client";

import { useState } from "react";
import { bases, mapaArgentina as mapa } from "@/data/bases";

const W = mapa.width;
const H = mapa.height;
const HQ = bases[0];
const ZOOM = 2.6;

// Mapa interactivo de las bases: al elegir una, el mapa se acerca a esa zona.
export default function BasesMap() {
  const [activa, setActiva] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  const sel = bases.find((b) => b.id === activa) ?? null;
  const s = sel ? ZOOM : 1;
  // Centro de la vista: la base elegida, o el país completo
  const tx = sel ? W / 2 - sel.x * s : 0;
  const ty = sel ? H * 0.42 - sel.y * s : 0;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
      {/* MAPA */}
      <div className="relative mx-auto w-full max-w-[560px]">
        <div className="absolute inset-0 -z-10 rounded-full bg-brand-500/15 blur-3xl" />
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full overflow-hidden rounded-[28px]" role="img" aria-label="Mapa de Argentina con las bases de ESIM">
          <defs>
            <radialGradient id="mar" cx="30%" cy="35%" r="80%">
              <stop offset="0" stopColor="#12211b" />
              <stop offset="1" stopColor="#070d0b" />
            </radialGradient>
            <linearGradient id="tierra" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#1f3a2f" />
              <stop offset="1" stopColor="#15291f" />
            </linearGradient>
            <pattern id="puntos" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#ffffff" opacity="0.05" />
            </pattern>
          </defs>
          <rect width={W} height={H} fill="url(#mar)" />
          <rect width={W} height={H} fill="url(#puntos)" />

          <g
            style={{
              transform: `translate(${tx}px, ${ty}px) scale(${s})`,
              transition: "transform 1.1s cubic-bezier(0.65, 0, 0.35, 1)",
            }}
          >
            <path d={mapa.vecinos} fill="#ffffff" fillOpacity={0.035} stroke="#ffffff" strokeOpacity={0.08} strokeWidth={0.6} vectorEffect="non-scaling-stroke" />
            <path d={mapa.argentina} fill="url(#tierra)" stroke="#3fa37a" strokeOpacity={0.7} strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
            <path d={mapa.malvinas} fill="url(#tierra)" stroke="#3fa37a" strokeOpacity={0.7} strokeWidth={1.2} vectorEffect="non-scaling-stroke" />

            {/* Red: líneas desde la planta de Mendoza hacia cada base */}
            {bases.slice(1).map((b) => {
              const mx = (HQ.x + b.x) / 2 + (b.y - HQ.y) * 0.25;
              const my = (HQ.y + b.y) / 2 - (b.x - HQ.x) * 0.25;
              const on = activa === b.id || hover === b.id;
              return (
                <path
                  key={b.id}
                  d={`M${HQ.x},${HQ.y} Q${mx},${my} ${b.x},${b.y}`}
                  fill="none"
                  stroke={on ? "#7fd1a3" : "#3fa37a"}
                  strokeOpacity={on ? 1 : 0.55}
                  strokeWidth={on ? 2 : 1.3}
                  strokeDasharray="5 6"
                  vectorEffect="non-scaling-stroke"
                  className="mapa-flujo"
                />
              );
            })}

            {/* Etiquetas geográficas */}
            <g fill="#ffffff" fillOpacity={0.28} fontSize={14 / s} fontWeight={700} letterSpacing={3 / s} style={{ fontFamily: "var(--font-sans)" }}>
              <text x={40} y={600} transform="rotate(-90 40 600)">CHILE</text>
              <text x={430} y={640}>OCÉANO</text>
              <text x={430} y={658}>ATLÁNTICO</text>
              <text x={mapa.malvinasLabel.x} y={mapa.malvinasLabel.y + 30} textAnchor="middle" fontSize={11 / s}>
                ISLAS MALVINAS
              </text>
            </g>
            <circle cx={mapa.caba.x} cy={mapa.caba.y} r={3 / s} fill="#ffffff" fillOpacity={0.5} />
            <text x={mapa.caba.x + 8 / s} y={mapa.caba.y + 4 / s} fill="#ffffff" fillOpacity={0.45} fontSize={11 / s} style={{ fontFamily: "var(--font-sans)" }}>
              Buenos Aires
            </text>

            {/* Pines */}
            {bases.map((b) => {
              const on = activa === b.id || hover === b.id;
              const r = (b.id === HQ.id ? 9 : 7) / s;
              return (
                <g
                  key={b.id}
                  role="button"
                  tabIndex={0}
                  aria-label={`${b.ciudad}, ${b.provincia}`}
                  className="cursor-pointer outline-none"
                  onClick={() => setActiva(activa === b.id ? null : b.id)}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActiva(b.id)}
                  onMouseEnter={() => setHover(b.id)}
                  onMouseLeave={() => setHover(null)}
                >
                  <circle cx={b.x} cy={b.y} r={r * 3.2} fill="#3fa37a" className="mapa-pulso" style={{ transformOrigin: `${b.x}px ${b.y}px` }} />
                  <circle cx={b.x} cy={b.y} r={r * (on ? 1.5 : 1)} fill={on ? "#7fd1a3" : "#e5202e"} stroke="#ffffff" strokeWidth={2} vectorEffect="non-scaling-stroke" style={{ transition: "r .3s, fill .3s" }} />
                  <text
                    x={b.x + (b.id === "villa-mercedes" ? 14 : -14) / s}
                    y={b.y + 5 / s}
                    textAnchor={b.id === "villa-mercedes" ? "start" : "end"}
                    fill="#ffffff"
                    fillOpacity={on ? 1 : 0.85}
                    fontSize={(on ? 15 : 13) / s}
                    fontWeight={700}
                    style={{ fontFamily: "var(--font-display)", transition: "font-size .3s" }}
                  >
                    {b.ciudad}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
        {sel && (
          <button
            onClick={() => setActiva(null)}
            className="absolute top-4 right-4 rounded-full border border-white/20 bg-night-950/70 px-4 py-2 text-xs font-bold text-white backdrop-blur transition hover:bg-white hover:text-night-900"
          >
            ← Ver todo el país
          </button>
        )}
      </div>

      {/* PANEL */}
      <div>
        <div className="grid grid-cols-3 gap-4 border-y border-white/10 py-6">
          {[
            ["5", "sitios operativos"],
            ["4", "ciudades"],
            ["3", "provincias"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-4xl font-semibold text-white">{n}</p>
              <p className="mt-1 text-xs font-semibold tracking-wider text-white/50 uppercase">{l}</p>
            </div>
          ))}
        </div>
        <ul className="mt-6 space-y-3">
          {bases.map((b, i) => {
            const on = activa === b.id;
            return (
              <li key={b.id}>
                <button
                  onClick={() => setActiva(on ? null : b.id)}
                  onMouseEnter={() => setHover(b.id)}
                  onMouseLeave={() => setHover(null)}
                  aria-expanded={on}
                  className={`w-full rounded-2xl border p-5 text-left transition-all duration-500 ${
                    on ? "border-brand-400 bg-brand-500/15" : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-sm font-bold ${on ? "bg-brand-400 text-night-950" : "bg-white/10 text-white"}`}>
                      0{i + 1}
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-xl font-semibold text-white">{b.ciudad}</span>
                      <span className="text-sm text-white/55">
                        {b.provincia} · {b.cuenca}
                      </span>
                    </span>
                    <span className={`text-brand-300 transition-transform duration-500 ${on ? "rotate-90" : ""}`}>→</span>
                  </div>
                  <div className={`grid transition-all duration-500 ${on ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <ul className="overflow-hidden">
                      {b.sitios.map((st) => (
                        <li key={st.nombre} className="flex gap-3 border-t border-white/10 py-3 text-sm">
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-signal-500" />
                          <span>
                            <span className="block font-bold text-white">{st.nombre}</span>
                            <span className="text-white/60">{st.detalle}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
