// Levanta la web en esta PC eligiendo un puerto libre.
// Uso: node scripts/iniciar-local.mjs [--port N] [--build] [--no-open]
//      (o doble clic en "Iniciar Web ESIM.bat" en Windows)
import { spawn, spawnSync } from "node:child_process";
import { existsSync, readdirSync, statSync } from "node:fs";
import http from "node:http";
import net from "node:net";
import os from "node:os";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const IS_WIN = process.platform === "win32";

// Puertos que ya usan otros sistemas de ESIM o herramientas comunes:
// 3000 = sistema de partes digitales, 50300 = web anterior (Panel ESIM).
const RESERVADOS = new Set([3000, 3001, 5173, 8080, 50300]);
const DESDE = 3100;
const HASTA = 3199;

const args = process.argv.slice(2);
const flag = (f) => args.includes(f);
const portArg = args.includes("--port") ? Number(args[args.indexOf("--port") + 1]) : Number(process.env.PORT) || null;

// ---------- Puertos ----------
function puedeEscuchar(port) {
  return new Promise((resolve) => {
    const srv = net.createServer();
    srv.once("error", () => resolve(false));
    srv.listen({ port, host: "0.0.0.0", exclusive: true }, () => srv.close(() => resolve(true)));
  });
}

function alguienResponde(port) {
  return new Promise((resolve) => {
    const s = net.connect({ port, host: "127.0.0.1" });
    s.setTimeout(400);
    s.once("connect", () => (s.destroy(), resolve(true)));
    s.once("timeout", () => (s.destroy(), resolve(false)));
    s.once("error", () => resolve(false));
  });
}

async function estaLibre(port) {
  if (RESERVADOS.has(port)) return false;
  // En Windows un puerto tomado solo en 127.0.0.1 puede permitir escuchar en 0.0.0.0: se verifican las dos cosas.
  return (await puedeEscuchar(port)) && !(await alguienResponde(port));
}

async function elegirPuerto() {
  if (portArg) {
    if (RESERVADOS.has(portArg)) console.log(`El puerto ${portArg} está reservado para otro sistema de ESIM; busco otro.`);
    else if (await estaLibre(portArg)) return portArg;
    else console.log(`El puerto ${portArg} está ocupado; busco otro.`);
  }
  for (let p = DESDE; p <= HASTA; p++) if (await estaLibre(p)) return p;
  throw new Error(`No encontré un puerto libre entre ${DESDE} y ${HASTA}.`);
}

// ---------- Dependencias y build ----------
function correr(cmd, cmdArgs) {
  const r = spawnSync(cmd, cmdArgs, { cwd: ROOT, stdio: "inherit", shell: IS_WIN });
  if (r.status !== 0) {
    console.error(`\nFalló: ${cmd} ${cmdArgs.join(" ")}`);
    process.exit(r.status ?? 1);
  }
}

function masNuevo(dir, ref) {
  if (!existsSync(dir)) return false;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory() ? masNuevo(full, ref) : statSync(full).mtimeMs > ref) return true;
  }
  return false;
}

function necesitaBuild() {
  const id = path.join(ROOT, ".next", "BUILD_ID");
  if (flag("--build") || !existsSync(id)) return true;
  const ref = statSync(id).mtimeMs;
  return (
    ["src", "public"].some((d) => masNuevo(path.join(ROOT, d), ref)) ||
    ["package.json", "next.config.ts"].some((f) => existsSync(path.join(ROOT, f)) && statSync(path.join(ROOT, f)).mtimeMs > ref)
  );
}

const NEXT = path.join(ROOT, "node_modules", "next", "dist", "bin", "next");

// ---------- Utilidades de salida ----------
function ipOficina() {
  for (const list of Object.values(os.networkInterfaces()))
    for (const i of list ?? []) if (i.family === "IPv4" && !i.internal) return i.address;
  return null;
}

function cuadro(lines) {
  const w = Math.max(...lines.map((l) => l.length)) + 4;
  const row = (l) => `║  ${l.padEnd(w - 2)}║`;
  return [`╔${"═".repeat(w)}╗`, ...lines.map(row), `╚${"═".repeat(w)}╝`].join("\n");
}

function esperarRespuesta(url, ms = 60000) {
  const fin = Date.now() + ms;
  return new Promise((resolve) => {
    const intento = () => {
      http
        .get(url, (res) => (res.resume(), resolve(true)))
        .on("error", () => (Date.now() > fin ? resolve(false) : setTimeout(intento, 500)));
    };
    intento();
  });
}

function abrirNavegador(url) {
  const [cmd, a] = IS_WIN ? ["cmd", ["/c", "start", "", url]] : process.platform === "darwin" ? ["open", [url]] : ["xdg-open", [url]];
  try {
    spawn(cmd, a, { stdio: "ignore", detached: true }).on("error", () => {}).unref();
  } catch {
    /* sin navegador disponible */
  }
}

// ---------- Principal ----------
if (!existsSync(NEXT)) {
  console.log("Instalando dependencias (solo la primera vez)...");
  correr("npm", ["install"]);
}
if (necesitaBuild()) {
  console.log("Preparando la web (build)...");
  correr(process.execPath, [NEXT, "build"]);
}

const port = await elegirPuerto();
const local = `http://localhost:${port}`;
const ip = ipOficina();

const server = spawn(process.execPath, [NEXT, "start", "-p", String(port), "-H", "0.0.0.0"], { cwd: ROOT, stdio: "inherit" });
const detener = () => server.kill();
process.on("SIGINT", detener);
process.on("SIGTERM", detener);
server.on("exit", (code) => process.exit(code ?? 0));

if (await esperarRespuesta(local)) {
  const lines = ["ESIM - Sitio web (vista local)", "", `PC:      ${local}`];
  if (ip) lines.push(`Oficina: http://${ip}:${port}`);
  lines.push("", "Para detenerla: cerrá esta ventana o Ctrl+C");
  console.log("\n" + cuadro(lines) + "\n");
  if (!flag("--no-open")) abrirNavegador(local);
} else {
  console.error("La web no respondió a tiempo; revisá los mensajes de arriba.");
}
