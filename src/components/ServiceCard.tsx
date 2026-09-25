import Image from "next/image";
import Link from "next/link";
import type { Servicio } from "@/data/servicios";

export default function ServiceCard({ s }: { s: Servicio }) {
  return (
    <Link
      href={`/servicios#${s.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-steel-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={s.image}
          alt={s.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-ink-800">{s.title}</h3>
        <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-steel-500">{s.short}</p>
        <span className="mt-4 text-sm font-bold text-brand-500">Ver más →</span>
      </div>
    </Link>
  );
}
