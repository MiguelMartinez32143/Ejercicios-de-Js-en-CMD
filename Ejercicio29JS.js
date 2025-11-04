function contadorFactory() {
  var cuenta = 0;
  return function() {
    cuenta++;
    return cuenta;
  };
}
var c = contadorFactory();
console.log(c(), c(), c());
