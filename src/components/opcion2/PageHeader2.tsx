import Image from "next/image";
import Link from "next/link";

// Cabecera de páginas internas de la Opción 2
export default function PageHeader2({ titulo, texto, imagen, miga }: { titulo: string; texto?: string; imagen: string; miga: string }) {
  return (
    <section className="relative overflow-hidden bg-neutral-900 pt-44 pb-20 text-white md:pt-52 md:pb-24">
      <Image src={imagen} alt="" fill priority sizes="100vw" className="object-cover opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <nav aria-label="Ruta" className="flex items-center gap-2 text-sm font-bold text-white/60">
          <Link href="/opcion2" className="hover:text-white">
            Inicio
          </Link>
          <span className="text-acento-300">/</span>
          <span className="text-white">{miga}</span>
        </nav>
        <h1 className="mt-5 max-w-4xl text-4xl leading-tight font-extrabold md:text-6xl">{titulo}</h1>
        {texto && <p className="mt-5 max-w-2xl text-lg text-white/75">{texto}</p>}
      </div>
    </section>
  );
}
