import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-ink-900 px-4 pt-20 text-center text-white">
      <p className="font-display text-7xl font-extrabold text-accent-400">404</p>
      <h1 className="mt-4 text-2xl font-bold">Página no encontrada</h1>
      <Link href="/" className="mt-8 rounded-lg bg-brand-500 px-6 py-3 font-semibold">
        Volver al inicio
      </Link>
    </section>
  );
}
