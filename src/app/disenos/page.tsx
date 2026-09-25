import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import { disenos } from "@/data/disenos";

export const metadata: Metadata = { title: "Opciones de diseño", robots: { index: false } };

export default function DisenosPage() {
  return (
    <main className="min-h-screen bg-neutral-100 px-5 py-14 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Logo className="h-12 w-auto" />
        <h1 className="mt-10 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">Opciones de diseño</h1>
        <p className="mt-3 max-w-2xl text-lg text-neutral-600">
          Elegí una opción para verla completa. En cualquier página, el panel de arriba permite cambiar entre opciones.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {disenos.map((d) => (
            <Link key={d.id} href={d.ruta} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src={d.captura} alt="" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute top-4 left-4 rounded-full bg-neutral-900 px-4 py-1.5 text-sm font-bold text-white">Opción {d.id}</span>
              </div>
              <div className="p-7">
                <h2 className="text-2xl font-bold text-neutral-900">{d.nombre}</h2>
                <p className="mt-2 text-neutral-600">{d.descripcion}</p>
                <span className="mt-5 inline-block font-bold text-acento-500">Ver opción {d.id} →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
