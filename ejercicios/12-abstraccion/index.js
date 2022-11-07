"use strict";
exports.__esModule = true;
//Importo las clases
var AutoCiudad_1 = require("./Clases/AutoCiudad");
var AutoDeportivo_1 = require("./Clases/AutoDeportivo");
var Camioneta_1 = require("./Clases/Camioneta");
//Función para hacer un separador en la consola
var separador = function () {
    var guion = "-";
    for (var guiones = 0; guiones < 50; guiones++) {
        guion += "-";
    }
    return guion;
};
//Creo los autos
var autoCiudad = new AutoCiudad_1["default"]();
var autoDeportivo = new AutoDeportivo_1["default"]();
var camioneta = new Camioneta_1["default"]();
//Muestro los autos por consola
console.log(autoCiudad);
console.log(autoDeportivo);
console.log(camioneta);
console.log(separador());
//Acelero el auto de ciudad
console.log("Acelero el auto de ciudad");
autoCiudad.acelerar();
console.log(autoCiudad);
console.log(separador());
//Acelero el auto deportivo
console.log("Acelero el auto deportivo");
autoDeportivo.acelerar();
console.log(autoDeportivo);
console.log(separador());
//Acelero la camioneta y consulto si es 4x4
console.log("Acelero la camioneta y consulto si es 4x4 y tiene caja ");
camioneta.acelerar();
console.log(camioneta);
camioneta.get4x4();
