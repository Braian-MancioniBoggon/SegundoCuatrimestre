"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var vueltas = 4;
var tiempo = 0;
for (var i = 0; i < 4; i++) {
    var pregunta = readlineSync.questionInt("Indique el tiempo de la vuelta " + (i + 1) + " de 4: ");
    tiempo += pregunta;
}
;
console.log("El tiempo total es: " + tiempo);
console.log("El promedio por vuelta es: " + (tiempo / vueltas));
