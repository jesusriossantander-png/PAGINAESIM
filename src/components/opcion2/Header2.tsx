"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { site } from "@/data/site";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#bases", label: "Bases" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header2() {
  const [open, setOpen] = useState(false);
  const [fijo, setFijo] = useState(false);

  useEffect(() => {
    const on = () => setFijo(window.scrollY > 44);
    on();
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);

  return (
    <header className="relative z-50">
      {/* Barra superior */}
      <div className="hidden bg-neutral-900 text-xs text-white/75 md:block">
        <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-6">
          <div className="flex gap-6">
            <a href={site.phoneHref} className="flex items-center gap-2 hover:text-white">
              <span className="text-rojo-500">●</span> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
              <span className="text-rojo-500">●</span> {site.email}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span>Perdriel, Luján de Cuyo · Mendoza</span>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              WhatsApp
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Menú */}
      <div className={`w-full bg-white transition-shadow ${fijo ? "fixed top-0 shadow-lg" : "relative"}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/opcion2" aria-label="ESIM – Inicio">
            <Logo className="h-11 w-auto" />
          </Link>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-bold tracking-wide text-neutral-800 uppercase transition hover:text-rojo-500">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/acceso" className="hidden text-sm font-bold text-neutral-600 hover:text-rojo-500 md:block">
              Portal socios
            </Link>
            <a href="#contacto" className="hidden bg-rojo-500 px-6 py-3.5 text-sm font-extrabold tracking-wide text-white uppercase transition hover:bg-rojo-600 sm:block">
              Cotizar
            </a>
            <button onClick={() => setOpen((v) => !v)} aria-label="Menú" aria-expanded={open} className="grid h-11 w-11 place-items-center bg-neutral-100 lg:hidden">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-neutral-200 bg-white px-6 pb-6 lg:hidden">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-neutral-100 py-4 font-bold text-neutral-800 uppercase">
                {l.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="mt-5 block bg-rojo-500 py-4 text-center font-extrabold text-white uppercase">
              Cotizar
            </a>
          </nav>
        )}
      </div>
      {fijo && <div className="h-20" />}
    </header>
  );
}
