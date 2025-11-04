function aplicar(arr, fn) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}
console.log(aplicar([1,2,3], function(x){ return x * x; }));
