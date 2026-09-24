import Image from "next/image";

// Logo oficial. "light" = versión con letras blancas para fondos oscuros.
export default function Logo({ light = false, className = "h-10 w-auto" }: { light?: boolean; className?: string }) {
  return (
    <Image
      src={light ? "/logo-light.png" : "/logo.png"}
      alt="ESIM S.R.L."
      width={600}
      height={228}
      priority
      className={className}
    />
  );
}
