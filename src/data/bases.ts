import mapa from "./mapa-argentina.json";

// Bases de ESIM en Argentina. CONFIRMAR: los textos de detalle de cada sitio son borradores.
// Las coordenadas del pin salen de mapa-argentina.json (generado con Natural Earth, dominio público).
export type Base = {
  id: string;
  ciudad: string;
  provincia: string;
  sitios: { nombre: string; detalle: string }[];
  cuenca: string;
  x: number;
  y: number;
};

const pos = Object.fromEntries(mapa.bases.map((b) => [b.id, b]));

export const bases: Base[] = [
  {
    id: "mendoza",
    ciudad: "Luján de Cuyo",
    provincia: "Mendoza",
    sitios: [
      { nombre: "Planta", detalle: "Taller central y administración · Perdriel" },
      { nombre: "Base CILC", detalle: "Complejo Industrial Luján de Cuyo" },
    ],
    cuenca: "Cuenca Cuyana",
    ...pick("mendoza"),
  },
  {
    id: "malargue",
    ciudad: "Malargüe",
    provincia: "Mendoza",
    sitios: [{ nombre: "Base Malargüe", detalle: "Operación en yacimientos del sur mendocino" }],
    cuenca: "Cuenca Neuquina (norte)",
    ...pick("malargue"),
  },
  {
    id: "neuquen",
    ciudad: "Neuquén",
    provincia: "Neuquén",
    sitios: [{ nombre: "Base Neuquén", detalle: "Operación en la Cuenca Neuquina y Vaca Muerta" }],
    cuenca: "Cuenca Neuquina",
    ...pick("neuquen"),
  },
  {
    id: "villa-mercedes",
    ciudad: "Villa Mercedes",
    provincia: "San Luis",
    sitios: [{ nombre: "Base Villa Mercedes", detalle: "Servicios a la industria de San Luis" }],
    cuenca: "Región Centro",
    ...pick("villa-mercedes"),
  },
];

function pick(id: string) {
  return { x: pos[id].x, y: pos[id].y };
}

export const mapaArgentina = mapa;
