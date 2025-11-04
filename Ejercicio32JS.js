function sumarTodo() {
  var s = 0;
  for (var i = 0; i < arguments.length; i++) s += arguments[i];
  return s;
}
console.log('Suma:', sumarTodo(1,2,3,4));
