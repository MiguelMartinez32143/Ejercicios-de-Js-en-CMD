function saludar(nombre, saludo) {
  saludo = saludo === undefined ? 'Hola' : saludo;
  console.log(saludo + ', ' + nombre + '!');
}
saludar('Carlos');
saludar('Lucía', 'Buenos días');
