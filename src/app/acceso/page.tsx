import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Portal socios y empleados", robots: { index: false } };

// Fase 2: aquí irá el login real, integrado con los usuarios y roles del sistema interno.
const areas = [
  { t: "Empleados", d: "Procedimientos, normas HSE, formularios y novedades internas." },
  { t: "Socios y gerencia", d: "Indicadores de gestión, obras en curso y documentación societaria." },
  { t: "Administración", d: "Usuarios, permisos y carga de documentos." },
];

export default function AccesoPage() {
  return (
    <section className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-night-950 pt-28 pb-16 text-white">
      <Image src="/img/izaje/izaje-03.webp" alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-night-950 via-night-950/85 to-night-950/40" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div className="animate-fade-up">
          <p className="eyebrow text-brand-300">Área privada</p>
          <h1 className="mt-6 text-5xl leading-[0.95] font-semibold md:text-7xl">
            Portal <span className="text-brand-300">ESIM</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/70">
            Un espacio exclusivo para el equipo y los socios de ESIM. Estamos terminando de construirlo.
          </p>
          <ul className="mt-10 max-w-lg border-t border-white/10">
            {areas.map((a, i) => (
              <li key={a.t} className="flex gap-5 border-b border-white/10 py-5">
                <span className="font-display text-sm text-brand-300">0{i + 1}</span>
                <span>
                  <span className="block font-semibold">{a.t}</span>
                  <span className="mt-1 block text-sm text-white/55">{a.d}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-fade-up rounded-[28px] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl md:p-10" style={{ animationDelay: "150ms" }}>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Iniciar sesión</h2>
            <span className="rounded-full bg-brand-500/20 px-3 py-1 text-xs font-bold text-brand-300">Próximamente</span>
          </div>
          <form className="mt-8 grid gap-5">
            <label className="grid gap-2 text-sm font-semibold text-white/80">
              Usuario o email
              <input disabled className="rounded-xl border border-white/10 bg-white/5 px-4 py-3.5" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-white/80">
              Contraseña
              <input type="password" disabled className="rounded-xl border border-white/10 bg-white/5 px-4 py-3.5" />
            </label>
            <button disabled className="mt-2 cursor-not-allowed rounded-full bg-white/10 py-4 font-bold text-white/40">
              Ingresar
            </button>
          </form>
          <p className="mt-6 text-sm text-white/55">
            ¿Necesitás acceso?{" "}
            <Link href="/contacto" className="font-semibold text-brand-300 hover:text-white">
              Contactá a administración
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
