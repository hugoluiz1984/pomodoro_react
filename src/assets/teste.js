var a = parseInt(gets());
var N = parseInt(gets());
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

var qutMultiplos = 0;
var somaN = 0;

qutMultiplos = Math.floor(N/a);

for (var i = 0; i <= qutMultiplos; i++){
  somaN = (a*i) + somaN
}
console.log(somaN);