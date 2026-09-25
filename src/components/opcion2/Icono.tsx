// Íconos de línea para los servicios de la Opción 2
const paths: Record<string, React.ReactNode> = {
  ajuste: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" />
    </>
  ),
  repuestos: (
    <>
      <path d="M4 7h16v10H4z" />
      <path d="M8 7v10M16 7v10M4 12h16" />
    </>
  ),
  "oficina-tecnica": (
    <>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 8v8l9 5 9-5V8M12 13v8" />
    </>
  ),
  ductos: (
    <>
      <path d="M2 9h8a4 4 0 0 1 4 4v9M2 15h8M14 13h8M14 7h8" />
      <path d="M10 5v4M18 5v2" />
    </>
  ),
  izaje: (
    <>
      <path d="M4 21V5l10-2 6 4M4 5h16M14 3v4" />
      <path d="M20 7v6M18 13h4v3h-4zM2 21h8" />
    </>
  ),
  cotizar: (
    <>
      <path d="M4 4h16v16H4z" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </>
  ),
};

export default function Icono({ nombre, className = "h-10 w-10" }: { nombre: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[nombre] ?? paths.cotizar}
    </svg>
  );
}
