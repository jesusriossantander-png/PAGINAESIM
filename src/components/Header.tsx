"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // En la Home el header arranca transparente sobre el hero
  const overHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        overHero ? "bg-transparent" : "bg-ink-900/95 shadow-lg backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="ESIM – Inicio">
          <Logo light />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
                  active ? "text-safety-400" : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/acceso"
            className="ml-3 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand-400 hover:bg-brand-500"
          >
            <LockIcon />
            Acceso socios
          </Link>
        </nav>

        <button
          type="button"
          className="rounded p-2 text-white lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-ink-900 px-4 pb-6 lg:hidden" aria-label="Móvil">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block border-b border-white/10 py-4 text-base font-medium text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/acceso"
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-brand-500 py-3 font-semibold text-white"
          >
            <LockIcon />
            Acceso socios / empleados
          </Link>
        </nav>
      )}
    </header>
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
