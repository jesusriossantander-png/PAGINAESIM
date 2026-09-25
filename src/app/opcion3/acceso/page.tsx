import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Portal socios · Opción 3", robots: { index: false } };

// Fase 2: acá irá el login real, integrado con los usuarios y roles del sistema interno.
const areas = [
  ["Empleados", "Procedimientos, normas HSE, formularios y novedades internas."],
  ["Socios y gerencia", "Indicadores de gestión, obras en curso y documentación societaria."],
  ["Administración", "Usuarios, permisos y carga de documentos."],
];

export default function Acceso3() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-petro-950 pt-28 pb-16 text-white">
      <Image src="/img/izaje/izaje-03.webp" alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-petro-950 via-petro-950/85 to-petro-900/40" />
      <div className="relative mx-auto grid w-full max-w-[82rem] items-center gap-12 px-6 lg:grid-cols-[1.1fr_1fr] xl:px-12">
        <div className="animate-fade-up">
          <p className="flex items-center gap-3 text-sm font-extrabold text-acento-300">
            <span className="h-0.5 w-10 bg-current" />
            Área privada
          </p>
          <h1 className="mt-4 text-5xl leading-tight font-extrabold md:text-6xl">Portal ESIM</h1>
          <p className="mt-5 max-w-lg text-lg text-white/75">Un espacio exclusivo para el equipo y los socios de ESIM. Estamos terminando de construirlo.</p>
          <ul className="mt-9 max-w-xl border-t border-white/10">
            {areas.map(([t, d], i) => (
              <li key={t} className="flex gap-4 border-b border-white/10 py-5">
                <span className="font-display text-sm font-bold text-acento-300">0{i + 1}</span>
                <span>
                  <span className="block font-extrabold">{t}</span>
                  <span className="mt-1 block text-sm text-white/65">{d}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-fade-up rounded-[1.75rem] border border-white/15 bg-white/[0.07] p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-10" style={{ animationDelay: "150ms" }}>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-extrabold">Iniciar sesión</h2>
            <span className="rounded-full bg-acento-500/20 px-3 py-1 text-xs font-extrabold text-acento-300">Próximamente</span>
          </div>
          <form className="mt-8 grid gap-5">
            <label className="grid gap-2 text-sm font-bold text-white/80">
              Usuario o email
              <input disabled className="rounded-xl border border-white/10 bg-white/5 px-4 py-3.5" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-white/80">
              Contraseña
              <input type="password" disabled className="rounded-xl border border-white/10 bg-white/5 px-4 py-3.5" />
            </label>
            <button disabled className="mt-2 cursor-not-allowed rounded-full bg-white/10 py-4 font-extrabold text-white/40">
              Ingresar
            </button>
          </form>
          <p className="mt-6 text-sm text-white/60">
            ¿Necesitás acceso?{" "}
            <a href="/opcion3#contacto" className="font-bold text-acento-300 hover:text-white">
              Contactá a administración
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
