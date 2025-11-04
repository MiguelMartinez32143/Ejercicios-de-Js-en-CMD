var base = { a: 1, b: 2 };
var extra = { b: 20, c: 3 };
var combinado = {};
for (var p in base) { if (base.hasOwnProperty(p)) combinado[p] = base[p]; }
for (var p in extra) { if (extra.hasOwnProperty(p)) combinado[p] = extra[p]; }
console.log('Combinado:', combinado);
