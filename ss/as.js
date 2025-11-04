const fs = require("fs");

const archivo = "factura.txt";
const productos = [
  { nombre: "Teclado", precio: 50000 },
  { nombre: "Mouse", precio: 30000 },
  { nombre: "Monitor", precio: 450000 },
  { nombre: "USB 32GB", precio: 25000 },
  { nombre: "Silla gamer", precio: 600000 },
  { nombre: "Audífonos", precio: 80000 },
  { nombre: "Cámara web", precio: 120000 },
  { nombre: "Router Wi-Fi", precio: 95000 },
  { nombre: "Disco SSD", precio: 230000 },
  { nombre: "Micrófono", precio: 110000 }
];

const subtotal = productos.reduce((acc, p) => acc + p.precio, 0);
const iva = subtotal * 0.19;
const total = subtotal + iva;

let contenido = "************ FACTURA ************\n";
productos.forEach((p, i) => {
  contenido += `${i + 1}. ${p.nombre.padEnd(20)} $${p.precio}\n`;
});
contenido += "---------------------------------\n";
contenido += `Subtotal: $${subtotal}\n`;
contenido += `IVA (19%): $${iva}\n`;
contenido += `TOTAL: $${total}\n`;
contenido += "*********************************\n";

fs.existsSync(archivo)
  ? (fs.writeFileSync(archivo, contenido), console.log("Factura sobrescrita"))
  : (fs.writeFileSync(archivo, contenido), console.log("Factura creada"));
