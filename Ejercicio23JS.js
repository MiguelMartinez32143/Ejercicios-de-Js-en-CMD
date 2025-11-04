var datos = { x: 10, y: 20, z: 30 };
for (var k in datos) {
  if (datos.hasOwnProperty(k)) {
    console.log(k + ' -> ' + datos[k]);
  }
}
