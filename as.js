const fs = require("fs");

fs.writeFileSync("archivo.txt", "Hola desde JavaScript!"), (err) => err ? console.error(err):console.log("Archivo Creado") 
console.log("Archivo creado correctamente");
