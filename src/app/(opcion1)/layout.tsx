import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Asistente from "@/components/Asistente";
import ScrollLogo from "@/components/ScrollLogo";

// Opción 1: estética "noche industrial" (URLs sin prefijo: /, /servicios, ...)
export default function Opcion1Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Asistente />
      <ScrollLogo />
    </div>
  );
}
