import type { Metadata } from "next";
import Asistente from "@/components/Asistente";
import ScrollLogo from "@/components/ScrollLogo";
import Footer2 from "@/components/opcion2/Footer2";
import Header2 from "@/components/opcion2/Header2";

export const metadata: Metadata = { title: "Opción 2", robots: { index: false } };

// Opción 2: corporativa clara, acento rojo del logo
export default function Opcion2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="op2 flex min-h-screen flex-col bg-white text-neutral-900">
      <Header2 />
      <main className="flex-1">{children}</main>
      <Footer2 />
      <Asistente />
      <ScrollLogo />
    </div>
  );
}
