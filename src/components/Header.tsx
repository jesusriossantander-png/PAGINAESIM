"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav, site } from "@/data/site";

// Transparente sobre la foto de cabecera; se vuelve blanco al hacer scroll.
export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid ? "bg-night-950/85 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className={`container-x flex items-center justify-between transition-all duration-500 ${solid ? "h-[68px]" : "h-[88px]"}`}>
          <Link href="/" aria-label="ESIM – Inicio" className="relative z-10">
            <Logo className="h-10 w-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:h-12" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
            {nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative px-4 py-2 text-[15px] font-semibold transition-colors ${
                    active ? "text-white" : "text-white/75 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left bg-brand-400 transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/acceso"
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                "text-white hover:bg-white/10"
              }`}
            >
              <LockIcon />
              Portal socios
            </Link>
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-500 py-2.5 pr-2.5 pl-5 text-sm font-bold text-white transition hover:bg-brand-600"
            >
              Cotizar
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition group-hover:translate-x-0.5">
                <Arrow />
              </span>
            </Link>
          </div>

          <button
            type="button"
            className={`relative z-10 grid h-11 w-11 place-items-center rounded-full lg:hidden ${
              "bg-white/10 text-white backdrop-blur"
            }`}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </header>

      {/* Menú móvil a pantalla completa */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-night-900 px-6 pt-28 pb-10 transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col" aria-label="Móvil">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={open ? 0 : -1}
              className="flex items-baseline gap-4 border-b border-white/10 py-4 font-display text-3xl font-semibold text-white"
              style={{ transition: "transform .5s, opacity .5s", transitionDelay: `${open ? 80 + i * 50 : 0}ms`, transform: open ? "none" : "translateY(16px)", opacity: open ? 1 : 0 }}
            >
              <span className="font-sans text-xs text-brand-300">0{i + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto grid gap-3">
          <Link href="/contacto" tabIndex={open ? 0 : -1} className="rounded-full bg-brand-500 py-4 text-center font-bold text-white">
            Solicitar cotización
          </Link>
          <Link
            href="/acceso"
            tabIndex={open ? 0 : -1}
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 py-4 font-semibold text-white"
          >
            <LockIcon /> Portal socios / empleados
          </Link>
          <a href={site.phoneHref} tabIndex={open ? 0 : -1} className="mt-2 text-center text-sm text-white/60">
            {site.phone}
          </a>
        </div>
      </div>
    </>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}
