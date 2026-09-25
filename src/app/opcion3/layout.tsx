import type { Metadata } from "next";
import Asistente from "@/components/Asistente";
import ScrollLogo from "@/components/ScrollLogo";
import Header3 from "@/components/opcion3/Header3";

export const metadata: Metadata = { title: "Opción 3", robots: { index: false } };

// Opción 3: pantallas completas, índigo + verde ESIM
export default function Opcion3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="op2 bg-white text-neutral-900">
      <Header3 />
      <main>{children}</main>
      <Asistente />
      <ScrollLogo />
    </div>
  );
}
