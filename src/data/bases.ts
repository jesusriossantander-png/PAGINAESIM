import mapa from "./mapa-argentina.json";

// ─────────────────────────────────────────────────────────────────────────────
// BASES DE ESIM · acá se cargan los datos de cada base.
// Los campos opcionales (direccion, telefono, email, responsable, personal,
// servicios, equipos, foto) se muestran en el mapa interactivo solo si tienen valor.
// Dejalos vacíos ("" o []) hasta tener el dato confirmado.
// `foto` es una ruta de /public, por ejemplo "/img/izaje/izaje-01.webp".
// Las coordenadas del pin salen de mapa-argentina.json (Natural Earth, dominio público).
// ─────────────────────────────────────────────────────────────────────────────
export type Sitio = { nombre: string; detalle: string };

export type Base = {
  id: string;
  ciudad: string;
  provincia: string;
  cuenca: string;
  sitios: Sitio[];
  direccion?: string;
  telefono?: string;
  email?: string;
  responsable?: string;
  personal?: string; // ej. "45 personas"
  servicios?: string[];
  equipos?: string[]; // ej. ["2 hidrogrúas", "Taller móvil"]
  foto?: string;
  x: number;
  y: number;
  lat: number;
  lon: number;
};

const pos = Object.fromEntries(mapa.bases.map((b) => [b.id, b]));
const ubicar = (id: string) => ({ x: pos[id].x, y: pos[id].y, lat: pos[id].lat, lon: pos[id].lon });

export const bases: Base[] = [
  {
    id: "mendoza",
    ciudad: "Luján de Cuyo",
    provincia: "Mendoza",
    cuenca: "Cuenca Cuyana",
    sitios: [
      { nombre: "Planta", detalle: "Taller central y administración · Perdriel" },
      { nombre: "Base CILC", detalle: "Complejo Industrial Luján de Cuyo" },
    ],
    direccion: "Coronel Brandsen s/n, Perdriel, Luján de Cuyo",
    telefono: "+54 9 261 243-4393",
    email: "contacto@esimsrl.com",
    responsable: "",
    personal: "",
    servicios: ["Taller de mecanizado", "Ajuste y reparación", "Oficina técnica · 3D", "Fabricación de repuestos"],
    equipos: [],
    foto: "/img/ajuste/motor-cooper-superior-yac-malargue-14.webp",
    ...ubicar("mendoza"),
  },
  {
    id: "malargue",
    ciudad: "Malargüe",
    provincia: "Mendoza",
    cuenca: "Cuenca Neuquina (norte)",
    sitios: [{ nombre: "Base Malargüe", detalle: "Operación en yacimientos del sur mendocino" }],
    direccion: "",
    telefono: "",
    responsable: "",
    personal: "",
    servicios: [],
    equipos: [],
    foto: "/img/ajuste/motor-cooper-superior-yac-malargue-09.webp",
    ...ubicar("malargue"),
  },
  {
    id: "neuquen",
    ciudad: "Neuquén",
    provincia: "Neuquén",
    cuenca: "Cuenca Neuquina",
    sitios: [{ nombre: "Base Neuquén", detalle: "Operación en la Cuenca Neuquina y Vaca Muerta" }],
    direccion: "",
    telefono: "",
    responsable: "",
    personal: "",
    servicios: [],
    equipos: [],
    foto: "",
    ...ubicar("neuquen"),
  },
  {
    id: "villa-mercedes",
    ciudad: "Villa Mercedes",
    provincia: "San Luis",
    cuenca: "Región Centro",
    sitios: [{ nombre: "Base Villa Mercedes", detalle: "Servicios a la industria de San Luis" }],
    direccion: "",
    telefono: "",
    responsable: "",
    personal: "",
    servicios: [],
    equipos: [],
    foto: "",
    ...ubicar("villa-mercedes"),
  },
];

export const mapaArgentina = mapa;
