const fs = require("fs");
const archivo = "factura.txt";

fs.existsSync(archivo)
  ? console.log(fs.readFileSync(archivo, "utf8"))
  : console.log("No se encontró la factura para leer.");
