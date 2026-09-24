import gallery from "./gallery.json";

export type Categoria = "ductos" | "izaje" | "ajuste" | "repuestos" | "oficina-tecnica";

export type Obra = {
  src: string;
  category: Categoria;
  project: string | null;
  width: number;
  height: number;
};

export const categorias: { id: Categoria; label: string }[] = [
  { id: "ajuste", label: "Ajuste y reparación" },
  { id: "repuestos", label: "Repuestos" },
  { id: "oficina-tecnica", label: "Oficina técnica" },
  { id: "ductos", label: "Ductos" },
  { id: "izaje", label: "Logística e izaje" },
];

// Nombres legibles para las carpetas de proyecto originales
const projectLabels: Record<string, string> = {
  "AVA": "Bomba AVA",
  "BOMBA B8 YPF POLIDUCTO": "Bomba B8 – Poliducto YPF",
  "COMPRESOR AIR LIQUID": "Compresor – Air Liquide",
  "MOTOR COOPER SUPERIOR (YAC. MALARGUE)": "Motor Cooper Superior – Yac. Malargüe",
  "SERVICIOS": "Servicios en taller",
};

export const obras: Obra[] = gallery as Obra[];

export function caption(o: Obra): string {
  if (o.project) return projectLabels[o.project] ?? o.project;
  return categorias.find((c) => c.id === o.category)?.label ?? "";
}

// Selección para la Home
export const destacadas = [
  "/img/ajuste/bomba-b8-ypf-poliducto-07.webp",
  "/img/ductos/ductos-11.webp",
  "/img/repuestos/repuestos-04.webp",
  "/img/ajuste/compresor-air-liquid-08.webp",
  "/img/izaje/izaje-02.webp",
  "/img/oficina-tecnica/oficina-tecnica-01.webp",
]
  .map((src) => obras.find((o) => o.src === src))
  .filter((o): o is Obra => Boolean(o));
