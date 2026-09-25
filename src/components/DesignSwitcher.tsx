"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { disenoDeRuta, disenos } from "@/data/disenos";

// Panel interno para comparar opciones de diseño. Se oculta con NEXT_PUBLIC_MOSTRAR_DISENOS=0.
const VISIBLE = process.env.NEXT_PUBLIC_MOSTRAR_DISENOS !== "0";
const KEY = "esim-panel-disenos";

export default function DesignSwitcher() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(true);

  useEffect(() => {
    try {
      if (localStorage.getItem(KEY) === "cerrado") setAbierto(false);
    } catch {
      /* sin almacenamiento disponible */
    }
  }, []);

  const cambiar = (v: boolean) => {
    setAbierto(v);
    try {
      localStorage.setItem(KEY, v ? "abierto" : "cerrado");
    } catch {
      /* sin almacenamiento disponible */
    }
  };

  if (!VISIBLE || pathname === "/disenos") return null;
  const actual = disenoDeRuta(pathname);

  return (
    <div className="fixed top-1/2 left-0 z-[70] -translate-y-1/2">
      {abierto ? (
        <div className="flex flex-col items-center gap-1 rounded-r-2xl border border-l-0 border-black/10 bg-white/95 p-1.5 text-xs font-bold text-neutral-800 shadow-xl backdrop-blur">
          <Link href="/disenos" className="px-1 pt-1 text-[9px] tracking-wider text-neutral-500 uppercase hover:text-neutral-900">
            Diseño
          </Link>
          {disenos.map((d) => (
            <Link
              key={d.id}
              href={d.ruta}
              title={`Opción ${d.id}: ${d.nombre}`}
              className={`grid h-8 min-w-8 place-items-center rounded-full px-2 transition ${
                d.id === actual ? "bg-[#e30613] text-white" : "hover:bg-neutral-100"
              }`}
            >
              {d.id}
            </Link>
          ))}
          <button onClick={() => cambiar(false)} aria-label="Ocultar panel de diseños" className="grid h-8 w-8 place-items-center rounded-full text-neutral-400 hover:bg-neutral-100 hover:text-neutral-800">
            ×
          </button>
        </div>
      ) : (
        <button
          onClick={() => cambiar(true)}
          className="rounded-r-xl border border-l-0 border-black/10 bg-white/95 px-2 py-3 text-xs font-bold text-neutral-700 shadow-lg backdrop-blur [writing-mode:vertical-rl] hover:text-neutral-900"
        >
          Diseño {actual}
        </button>
      )}
    </div>
  );
}
