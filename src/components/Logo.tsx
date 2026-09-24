// Logotipo provisorio en texto: reemplazar por el logo oficial de ESIM cuando esté disponible.
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2 font-display text-2xl font-extrabold tracking-tight">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-500 text-lg text-white">E</span>
      <span className={light ? "text-white" : "text-ink-900"}>
        ESIM<span className="text-brand-500">.</span>
      </span>
    </span>
  );
}
