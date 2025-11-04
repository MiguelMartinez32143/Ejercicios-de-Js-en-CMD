class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log('Hola, soy ' + this.nombre + ' y tengo ' + this.edad + ' años.');
  }
}
var p = new Persona('Marta', 30);
p.saludar();
