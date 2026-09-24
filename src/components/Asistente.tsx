"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

// "Andrea", recepcionista virtual portada del diseño original (modo guiado, sin IA):
// responde preguntas frecuentes, toma los datos de a uno y envía la solicitud por WhatsApp al gerente.
type Msg = { from: "andrea" | "user"; text: string };
type Lead = { nombre: string; contacto: string; necesidad: string; ubicacion: string };

const GREETING =
  "¡Hola! Qué gusto saludarte. Soy Andrea, de ESIM SRL. Contame, ¿en qué te puedo ayudar hoy? Si querés, te cuento sobre nuestros servicios o tomo tus datos para una cotización. 😊";

const managerFirst = site.manager.split(" ")[0];

function faqAnswer(t: string): string {
  if (/(servici|hac[eé]|ofrec|trabaj[oa]s? de|rubro|a qu[eé] se dedic)/.test(t))
    return "Hacemos acondicionamiento de ductos, ajuste y reparación de bombas, compresores y motores, logística e izaje con hidrogrúa, y oficina técnica con modelado 3D y fabricación de repuestos.";
  if (/(ubicaci|d[oó]nde|zona|regi[oó]n|lugar|provincia)/.test(t))
    return "Trabajamos en Cuyo y Patagonia, tanto en campo como en taller.";
  if (/(experiencia|a[ñn]os|trayectoria|hace cu[aá]nto|antig)/.test(t))
    return "Tenemos más de 30 años en la industria, con +3000 equipos dinámicos y +2000 equipos en campo intervenidos.";
  if (/(precio|costo|cu[aá]nto|cotiz|presupuesto|valor|tarifa)/.test(t))
    return `El presupuesto lo arma nuestro equipo según tu caso puntual. Con gusto te tomo los datos y ${managerFirst} te contacta.`;
  if (/(hola|buenas|buen d[ií]a|qu[eé] tal)/.test(t) && t.length < 25) return "¡Hola! Un gusto. Contame en qué te puedo ayudar.";
  if (/(gracias|genial|perfecto|ok|dale)/.test(t) && t.length < 20) return "¡A vos! ¿Te puedo ayudar con algo más?";
  return "";
}

const firstName = (t: string) => {
  const w = t.trim().split(/\s+/)[0] ?? "";
  return w ? w.charAt(0).toUpperCase() + w.slice(1) : "";
};

function waLink(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

function leadLink(l: Lead) {
  return waLink(
    "*Nueva solicitud de cotización — Web ESIM SRL*\n\n" +
      `Nombre: ${l.nombre}\nContacto: ${l.contacto}\nNecesidad: ${l.necesidad}\nUbicación: ${l.ubicacion}`,
  );
}

export default function Asistente() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ from: "andrea", text: GREETING }]);
  const [lastLead, setLastLead] = useState<Lead | null>(null);
  const flow = useRef<{ step: number; data: Partial<Lead> }>({ step: 0, data: {} });
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // A los 6 segundos muestra un aviso breve junto al botón (sin tapar la página)
  const [teaser, setTeaser] = useState(false);
  useEffect(() => {
    if (dismissed || open) return;
    const t = setTimeout(() => setTeaser(true), 6000);
    return () => clearTimeout(t);
  }, [dismissed, open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const add = (from: Msg["from"], text: string) => setMessages((m) => [...m, { from, text }]);

  async function reply(text: string) {
    const t = text.toLowerCase();
    const out: string[] = [];
    let lead: Lead | null = null;
    const f = flow.current;

    if (f.step <= 0) {
      const faq = faqAnswer(t);
      if (faq) out.push(faq);
      out.push(`Para ayudarte mejor y que ${managerFirst} te prepare una propuesta, ¿me pasás tu nombre y empresa?`);
      f.step = 1;
    } else if (f.step === 1) {
      f.data.nombre = text;
      out.push(`¡Gracias, ${firstName(text)}! ¿A qué teléfono o email te contactamos?`);
      f.step = 2;
    } else if (f.step === 2) {
      f.data.contacto = text;
      out.push("Perfecto. Contame brevemente qué necesitás resolver (equipo o servicio).");
      f.step = 3;
    } else if (f.step === 3) {
      f.data.necesidad = text;
      out.push("Entendido. ¿En qué localidad o yacimiento sería el trabajo?");
      f.step = 4;
    } else if (f.step === 4) {
      lead = {
        nombre: f.data.nombre || "-",
        contacto: f.data.contacto || "-",
        necesidad: f.data.necesidad || "-",
        ubicacion: text || "-",
      };
      flow.current = { step: 9, data: {} };
    } else {
      const faq = faqAnswer(t);
      out.push(faq || "¡Con gusto! Si querés iniciar otra consulta, contame qué necesitás y te tomo los datos.");
      if (!faq) flow.current = { step: 0, data: {} };
    }

    await new Promise((r) => setTimeout(r, 650));
    setTyping(false);
    out.forEach((m) => add("andrea", m));
    if (lead) {
      setLastLead(lead);
      window.open(leadLink(lead), "_blank", "noopener");
      add(
        "andrea",
        `¡Gracias, ${firstName(lead.nombre)}! Ya le estoy enviando tu solicitud a ${site.manager} por WhatsApp; en breve se pone en contacto con vos. 🙌`,
      );
    }
  }

  function send(text: string) {
    if (!text.trim() || typing) return;
    add("user", text.trim());
    setTyping(true);
    void reply(text.trim());
  }

  function close() {
    setOpen(false);
    setDismissed(true);
  }

  const chip =
    "rounded-full border border-brand-500/25 bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-500 transition hover:bg-brand-500 hover:text-white";

  return (
    <>
      {open && (
        <div
          className="fixed right-4 bottom-24 z-[55] flex max-h-[70vh] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-steel-100 bg-white shadow-2xl"
          role="dialog"
          aria-label="Asistente virtual Andrea"
        >
          <div className="flex items-center gap-3 bg-brand-500 px-4 py-3 text-white">
            <span className="relative grid h-10 w-10 place-items-center rounded-full bg-white font-display font-bold text-brand-500">
              A
              <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-brand-400" />
            </span>
            <div className="flex-1">
              <p className="font-display text-sm font-bold">Andrea</p>
              <p className="text-xs text-white/80">Asistente virtual · En línea</p>
            </div>
            <button onClick={close} aria-label="Cerrar asistente" className="rounded p-1 hover:bg-white/15">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-2 overflow-y-auto bg-white p-4" aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <p
                  className={`max-w-[85%] px-3.5 py-2.5 text-[13px] leading-relaxed ${
                    m.from === "user"
                      ? "rounded-2xl rounded-br-sm bg-brand-500 text-white"
                      : "rounded-2xl rounded-bl-sm bg-paper text-ink"
                  }`}
                >
                  {m.text}
                </p>
              </div>
            ))}
            {typing && <p className="w-fit rounded-2xl bg-steel-50 px-3.5 py-2.5 text-xs text-steel-500">Andrea está escribiendo…</p>}
            {lastLead && (
              <a href={leadLink(lastLead)} target="_blank" rel="noopener noreferrer" className="block text-center text-xs font-semibold text-steel-500 underline">
                ¿No se abrió WhatsApp? Tocá acá
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-2 border-t border-steel-100 px-4 pt-3">
            <button className={chip} onClick={() => send("Hola, quiero solicitar una cotización.")}>
              Solicitar cotización
            </button>
            <a className={chip} href="/obras">
              Ver trabajos
            </a>
            <a className={chip} href={waLink("Hola, quiero hacer una consulta a ESIM SRL.")} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
          <form
            className="flex gap-2 p-4"
            onSubmit={(e) => {
              e.preventDefault();
              const v = inputRef.current?.value ?? "";
              if (inputRef.current) inputRef.current.value = "";
              send(v);
            }}
          >
            <input
              ref={inputRef}
              placeholder="Escribí tu consulta..."
              aria-label="Tu mensaje"
              className="min-w-0 flex-1 rounded-lg border border-steel-100 px-3 py-2.5 text-sm outline-none focus:border-brand-500"
            />
            <button type="submit" aria-label="Enviar" className="rounded-lg bg-brand-500 px-4 font-bold text-white hover:bg-brand-600">
              →
            </button>
          </form>
        </div>
      )}

      {teaser && !open && !dismissed && (
        <div className="animate-fade-up fixed right-24 bottom-6 z-[55] flex max-w-[16rem] items-start gap-2 rounded-2xl rounded-br-sm bg-white py-3 pr-3 pl-4 text-sm shadow-2xl ring-1 ring-black/5">
          <button className="text-left" onClick={() => setOpen(true)}>
            <span className="block font-bold text-ink">¡Hola! Soy Andrea 👋</span>
            <span className="text-muted">¿Te ayudo con una cotización?</span>
          </button>
          <button onClick={() => setDismissed(true)} aria-label="Cerrar aviso" className="text-muted hover:text-ink">
            ×
          </button>
        </div>
      )}
      <button
        onClick={() => (open ? close() : setOpen(true))}
        aria-label={open ? "Cerrar asistente" : "Abrir asistente virtual"}
        className="fixed right-4 bottom-4 z-[55] grid h-16 w-16 place-items-center rounded-full bg-brand-500 text-white shadow-xl shadow-brand-500/30 transition hover:scale-105 hover:bg-brand-600"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm4 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm4 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm4 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
        </svg>
      </button>
    </>
  );
}
