"use client";

import { useEffect } from "react";

// Marca <html data-modal> mientras un visor/panel está abierto: frena los saltos de pantalla y el scroll de fondo.
export function useModal(abierto: boolean, onCerrar: () => void, extraTeclas?: (e: KeyboardEvent) => void) {
  useEffect(() => {
    if (!abierto) return;
    const html = document.documentElement;
    html.dataset.modal = "1";
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCerrar();
      else extraTeclas?.(e);
    };
    addEventListener("keydown", onKey);
    return () => {
      delete html.dataset.modal;
      document.body.style.overflow = prev;
      removeEventListener("keydown", onKey);
    };
  }, [abierto, onCerrar, extraTeclas]);
}

// Lleva a la pantalla de contacto con el mensaje del formulario ya escrito
export function consultar(mensaje: string) {
  dispatchEvent(new CustomEvent("esim:consulta", { detail: { mensaje } }));
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
}
