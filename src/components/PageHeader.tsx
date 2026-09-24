import Image from "next/image";

// Cabecera con foto para las páginas internas
export default function PageHeader({ title, subtitle, image }: { title: string; subtitle?: string; image: string }) {
  return (
    <section className="relative flex min-h-[380px] items-end overflow-hidden bg-ink-900 pt-20">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-900/40 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6">
        <div className="mb-4 h-1 w-16 bg-accent-400" />
        <h1 className="text-4xl font-extrabold text-white md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-white/80">{subtitle}</p>}
      </div>
    </section>
  );
}
