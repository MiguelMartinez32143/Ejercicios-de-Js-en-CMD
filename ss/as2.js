const fs = require("fs");
const archivo = "factura.txt";

fs.existsSync(archivo)
  ? (fs.appendFileSync(archivo, "\nNota: Gracias por su compra."),
     console.log("Factura modificada correctamente."))
  : console.log("No existe la factura para modificar.");
