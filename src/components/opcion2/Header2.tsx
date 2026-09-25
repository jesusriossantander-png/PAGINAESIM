"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { site } from "@/data/site";

export const links2 = [
  { href: "/opcion2", label: "Inicio" },
  { href: "/opcion2/empresa", label: "Nosotros" },
  { href: "/opcion2/servicios", label: "Servicios" },
  { href: "/opcion2#bases", label: "Bases" },
  { href: "/opcion2/obras", label: "Proyectos" },
  { href: "/opcion2/contacto", label: "Contacto" },
];

// Menú oscuro: transparente sobre la foto de cabecera y oscuro translúcido al hacer scroll
export default function Header2() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const on = () => setScroll(window.scrollY > 40);
    on();
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  const oscuro = scroll || open;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${oscuro ? "bg-neutral-950/92 shadow-lg backdrop-blur-md" : "bg-transparent"}`}>
      {/* Barra superior (solo arriba de todo) */}
      <div className={`hidden overflow-hidden border-b border-white/10 text-xs text-white/70 transition-all duration-300 md:block ${scroll ? "h-0 border-transparent" : "h-10"}`}>
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6">
          <div className="flex gap-6">
            <a href={site.phoneHref} className="flex items-center gap-2 hover:text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-acento-300" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-acento-300" /> {site.email}
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

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/opcion2" aria-label="ESIM – Inicio">
          <Logo className="h-11 w-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {links2.map((l) => {
            const activo = l.href === "/opcion2" ? pathname === "/opcion2" : pathname.startsWith(l.href) && !l.href.includes("#");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative py-2 text-[13px] font-extrabold tracking-wider uppercase transition ${activo ? "text-white" : "text-white/70 hover:text-white"}`}
              >
                {l.label}
                {activo && <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-acento-300" />}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/opcion2/acceso" className="hidden text-sm font-bold text-white/70 hover:text-white md:block">
            Portal socios
          </Link>
          <Link href="/opcion2/contacto" className="hidden bg-acento-500 px-6 py-3.5 text-sm font-extrabold tracking-wide text-white uppercase transition hover:bg-acento-400 sm:block">
            Cotizar
          </Link>
          <button onClick={() => setOpen((v) => !v)} aria-label="Menú" aria-expanded={open} className="grid h-11 w-11 place-items-center bg-white/10 text-white lg:hidden">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/10 px-6 pb-6 lg:hidden" aria-label="Móvil">
          {links2.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 font-extrabold text-white uppercase">
              {l.label}
            </Link>
          ))}
          <Link href="/opcion2/contacto" className="mt-5 block bg-acento-500 py-4 text-center font-extrabold text-white uppercase">
            Cotizar
          </Link>
          <Link href="/opcion2/acceso" className="mt-3 block border border-white/20 py-4 text-center font-bold text-white">
            Portal socios / empleados
          </Link>
        </nav>
      )}
    </header>
  );
}
