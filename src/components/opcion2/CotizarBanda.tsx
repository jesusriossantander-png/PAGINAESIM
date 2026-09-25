"use client";

import { site } from "@/data/site";

// Banda roja de cotización (en lugar del newsletter de la referencia): abre el correo con el email cargado
export default function CotizarBanda() {
  return (
    <form
      className="flex w-full max-w-xl flex-col gap-3 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();
        const body = `Hola, quiero solicitar una cotización.\n\nMi email de contacto: ${email}`;
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Solicitud de cotización – Web")}&body=${encodeURIComponent(body)}`;
      }}
    >
      <input
        name="email"
        type="email"
        required
        placeholder="Tu email de contacto"
        aria-label="Tu email de contacto"
        className="min-w-0 flex-1 border-0 bg-white px-5 py-4 text-neutral-900 outline-none placeholder:text-neutral-400 focus:ring-4 focus:ring-white/40"
      />
      <button type="submit" className="bg-neutral-900 px-8 py-4 font-extrabold tracking-wide text-white uppercase transition hover:bg-black">
        Solicitar
      </button>
    </form>
  );
}
