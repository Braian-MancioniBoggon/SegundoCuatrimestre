"use strict";
exports.__esModule = true;
var fs = require("fs");
var valoresArreglo = fs.readFileSync("arreglo.txt", "utf-8");
var arregloTxt = valoresArreglo.split(" ");
console.log("Los valores en el arreglo son: " + arregloTxt);
var sumar = function (arreglo) {
    var resultado = 0;
    for (var i = 0; i < arreglo.length; i++) {
        resultado += Number(arreglo[i]);
    }
    ;
    return resultado;
};
console.log("La suma de todos los valores en el arreglo es: " + sumar(arregloTxt));
