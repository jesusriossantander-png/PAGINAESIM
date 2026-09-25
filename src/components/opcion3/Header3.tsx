"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { site } from "@/data/site";

const links = [
  ["#inicio", "Inicio"],
  ["#servicios", "Servicios"],
  ["#nosotros", "Nosotros"],
  ["#proyectos", "Proyectos"],
  ["#bases", "Bases"],
  ["#contacto", "Contacto"],
];

export default function Header3() {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScroll(scrollY > 30);
    on();
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${scroll || open ? "bg-petro-950/90 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="mx-auto flex h-20 max-w-[82rem] items-center justify-between gap-6 px-6 xl:px-12">
        <a href="#inicio" aria-label="ESIM – Inicio">
          <Logo className="h-11 w-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]" />
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {links.map(([h, l]) => (
            <a key={h} href={h} className="rounded-full px-4 py-2 text-sm font-bold text-white/75 transition hover:bg-white/10 hover:text-white">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={site.phoneHref} className="hidden text-sm font-bold text-white/80 hover:text-white xl:block">
            {site.phone}
          </a>
          <a href="#contacto" className="hidden rounded-md bg-acento-500 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-acento-400 sm:block">
            Solicitar cotización
          </a>
          <button onClick={() => setOpen((v) => !v)} aria-label="Menú" aria-expanded={open} className="grid h-11 w-11 place-items-center rounded-md bg-white/10 text-white lg:hidden">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="px-6 pb-6 lg:hidden" aria-label="Móvil">
          {links.map(([h, l]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 font-bold text-white">
              {l}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
