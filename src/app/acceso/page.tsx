import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Acceso socios y empleados", robots: { index: false } };

// Fase 2: aquí irá el login real (Auth.js / Supabase) con roles empleado, socio y admin.
const areas = [
  { title: "Empleados", text: "Procedimientos, normas HSE, formularios y novedades internas." },
  { title: "Socios y gerencia", text: "Indicadores de gestión, obras en curso y documentación societaria." },
];

export default function AccesoPage() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-950 px-4 pt-24 pb-16">
      <Image src="/img/izaje/izaje-03.webp" alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-2">
        <div className="text-white">
          <p className="text-sm font-bold tracking-[0.2em] text-accent-400 uppercase">Área privada</p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Portal ESIM</h1>
          <p className="mt-4 text-lg text-white/75">
            Un espacio exclusivo para el equipo y los socios de ESIM. Estamos terminando de construirlo.
          </p>
          <ul className="mt-8 space-y-4">
            {areas.map((a) => (
              <li key={a.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="font-bold">{a.title}</p>
                <p className="mt-1 text-sm text-white/70">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-2xl">
          <h2 className="text-2xl font-extrabold">Iniciar sesión</h2>
          <span className="mt-2 inline-block rounded-full bg-accent-400/20 px-3 py-1 text-xs font-bold text-ink-900">
            Próximamente
          </span>
          <form className="mt-6 grid gap-4">
            <label className="grid gap-2 text-sm font-semibold">
              Usuario o email
              <input disabled className="rounded-lg border border-steel-100 bg-steel-50 px-4 py-3" />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Contraseña
              <input type="password" disabled className="rounded-lg border border-steel-100 bg-steel-50 px-4 py-3" />
            </label>
            <button disabled className="mt-2 cursor-not-allowed rounded-lg bg-steel-100 py-3 font-semibold text-steel-500">
              Ingresar
            </button>
          </form>
          <p className="mt-6 text-sm text-steel-500">
            ¿Necesitás acceso? <Link href="/contacto" className="font-semibold text-brand-600">Contactá a administración</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
