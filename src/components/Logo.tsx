import Image from "next/image";

// Logo oficial: siempre con sus colores originales (letras rojas, ícono verde y gris).
export default function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return <Image src="/logo.png" alt="ESIM S.R.L." width={600} height={228} priority className={className} />;
}
