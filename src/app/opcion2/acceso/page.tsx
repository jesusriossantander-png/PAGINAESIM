import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Portal socios · Opción 2", robots: { index: false } };

export default function Acceso2() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-neutral-900 pt-32 pb-16">
      <Image src="/img/izaje/izaje-03.webp" alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="text-white">
          <p className="flex items-center gap-3 text-sm font-extrabold tracking-wider uppercase">
            <span className="h-3 w-3 bg-acento-500" /> Área privada
          </p>
          <h1 className="mt-4 text-5xl font-extrabold">Portal ESIM</h1>
          <p className="mt-5 max-w-md text-lg text-white/75">Documentación interna para empleados e indicadores de gestión para socios y gerencia. Estamos terminando de construirlo.</p>
        </div>
        <div className="bg-white p-8 md:p-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold">Iniciar sesión</h2>
            <span className="bg-acento-50 px-3 py-1 text-xs font-extrabold text-acento-700">Próximamente</span>
          </div>
          <form className="mt-8 grid gap-5">
            <label className="grid gap-2 text-sm font-bold">
              Usuario o email
              <input disabled className="border border-neutral-200 bg-neutral-50 px-4 py-3.5" />
            </label>
            <label className="grid gap-2 text-sm font-bold">
              Contraseña
              <input type="password" disabled className="border border-neutral-200 bg-neutral-50 px-4 py-3.5" />
            </label>
            <button disabled className="mt-2 cursor-not-allowed bg-neutral-200 py-4 font-extrabold text-neutral-500 uppercase">
              Ingresar
            </button>
          </form>
          <p className="mt-6 text-sm text-neutral-600">
            ¿Necesitás acceso?{" "}
            <Link href="/opcion2/contacto" className="font-bold text-acento-600">
              Contactá a administración
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
