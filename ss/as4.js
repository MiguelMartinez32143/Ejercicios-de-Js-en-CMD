const fs = require("fs");
const archivo = "factura.txt";

fs.existsSync(archivo)
  ? (fs.unlinkSync(archivo), console.log("Factura eliminada correctamente."))
  : console.log("No existe el archivo para borrar.");
