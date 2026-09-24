import Image from "next/image";
import Link from "next/link";
import type { Servicio } from "@/data/servicios";

export default function ServiceCard({ s }: { s: Servicio }) {
  return (
    <Link
      href={`/servicios#${s.slug}`}
      className="group relative flex h-96 flex-col justify-end overflow-hidden rounded-2xl bg-ink-900"
    >
      <Image
        src={s.image}
        alt={s.title}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent" />
      <div className="relative p-6">
        <div className="mb-3 h-1 w-10 bg-brand-500 transition-all duration-300 group-hover:w-20" />
        <h3 className="text-xl font-bold text-white">{s.title}</h3>
        <p className="mt-2 text-sm text-white/75">{s.short}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-safety-400">
          Ver más <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
