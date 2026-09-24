import Image from "next/image";
import Link from "next/link";

// Cabecera editorial para páginas internas
export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="grain relative flex min-h-[72svh] items-end overflow-hidden bg-night-950 text-white">
      <Image src={image} alt="" fill priority sizes="100vw" className="animate-kenburns object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/50 to-night-950/30" />
      <div className="container-x relative pt-36 pb-14 md:pb-20">
        <nav aria-label="Ruta" className="animate-fade-up mb-8 flex items-center gap-2 text-sm text-white/55">
          <Link href="/" className="hover:text-white">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-white/85">{eyebrow}</span>
        </nav>
        <h1 className="animate-fade-up max-w-5xl text-5xl leading-[0.95] font-semibold md:text-7xl lg:text-8xl" style={{ animationDelay: "100ms" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="animate-fade-up mt-8 max-w-2xl text-lg text-white/70 md:text-xl" style={{ animationDelay: "200ms" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
