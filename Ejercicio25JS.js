var contador = {
  valor: 0,
  incrementar: function() { this.valor++; },
  mostrar: function() { console.log('Valor:', this.valor); }
};
contador.incrementar();
contador.incrementar();
contador.mostrar();
