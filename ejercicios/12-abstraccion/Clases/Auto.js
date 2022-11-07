"use strict";
exports.__esModule = true;
//Creo la clase Auto
var Auto = /** @class */ (function () {
    function Auto() {
        this.velocidad = 0;
        this.cantidadDeRuedas = 4;
    }
    Auto.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Auto.prototype.getCantidadDeRuedas = function () {
        return this.cantidadDeRuedas;
    };
    return Auto;
}());
exports["default"] = Auto;
