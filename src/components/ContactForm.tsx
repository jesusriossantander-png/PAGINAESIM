"use client";

import { useState } from "react";

// Fase 1 sin backend: arma un email con los datos del formulario.
// En la Fase 2 se reemplaza por un endpoint (Route Handler) que envíe el correo.
export default function ContactForm({ to, subjectPrefix }: { to: string; subjectPrefix: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const subject = `${subjectPrefix} – ${get("empresa") || get("nombre")}`;
    const body = [
      `Nombre: ${get("nombre")}`,
      `Empresa: ${get("empresa")}`,
      `Email: ${get("email")}`,
      `Teléfono: ${get("telefono")}`,
      "",
      get("mensaje"),
    ].join("\n");
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const input =
    "w-full rounded-lg border border-steel-100 bg-steel-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/20";

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="grid gap-2 text-sm font-semibold">
        Nombre y apellido *
        <input name="nombre" required className={input} autoComplete="name" />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Empresa
        <input name="empresa" className={input} autoComplete="organization" />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Email *
        <input name="email" type="email" required className={input} autoComplete="email" />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Teléfono
        <input name="telefono" type="tel" className={input} autoComplete="tel" />
      </label>
      <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
        Mensaje *
        <textarea name="mensaje" required rows={5} className={input} />
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          className="rounded-lg bg-brand-500 px-8 py-3.5 font-semibold text-white transition hover:bg-brand-600"
        >
          Enviar consulta
        </button>
        {sent && <p className="text-sm text-steel-500">Se abrió tu programa de correo con el mensaje listo para enviar.</p>}
      </div>
    </form>
  );
}
