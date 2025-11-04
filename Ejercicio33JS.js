function safeParseInt(s) {
  try {
    var n = parseInt(s);
    if (isNaN(n)) throw new Error('No es número');
    return n;
  } catch (e) {
    return 'Error: ' + e.message;
  }
}
console.log(safeParseInt('123'));
console.log(safeParseInt('abc'));
