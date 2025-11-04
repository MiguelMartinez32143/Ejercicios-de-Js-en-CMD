var obj = { a: 1 };
obj.b = 2;
console.log('Antes delete:', obj);
delete obj.a;
console.log('Después delete:', obj);
