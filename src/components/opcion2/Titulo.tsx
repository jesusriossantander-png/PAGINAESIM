// Título de sección de la Opción 2: cuadradito verde + antetítulo + título
export default function Titulo({ eyebrow, children, claro = false }: { eyebrow: string; children: React.ReactNode; claro?: boolean }) {
  return (
    <>
      <p className={`flex items-center gap-3 text-sm font-extrabold tracking-wider uppercase ${claro ? "text-white" : "text-neutral-900"}`}>
        <span className="h-3 w-3 bg-acento-500" />
        {eyebrow}
      </p>
      <h2 className={`mt-4 text-3xl leading-tight font-extrabold md:text-[2.75rem] ${claro ? "text-white" : "text-neutral-900"}`}>{children}</h2>
    </>
  );
}
