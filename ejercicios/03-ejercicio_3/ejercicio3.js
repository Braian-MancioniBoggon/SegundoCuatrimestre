let readlineSync = require('readline-sync');
let base = readlineSync.question("Indique la base: ");
let altura = readlineSync.question("Indique la altura: ");
let resultado = base*altura;
console.log("El resultado es: ",resultado);