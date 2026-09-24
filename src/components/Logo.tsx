import Image from "next/image";

// Logo oficial (tomado de diseno-original/images/logo-esim.png)
export default function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return <Image src="/logo.png" alt="ESIM S.R.L." width={600} height={228} priority className={className} />;
}
