"use strict";
exports.__esModule = true;
//Creo la clase Telefono
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = true;
        this.bateriaActual = 100;
    }
    Telefono.prototype.getEstaPrendido = function () {
        return this.estaPrendido;
    };
    Telefono.prototype.getBateriaActual = function () {
        return this.bateriaActual;
    };
    Telefono.prototype.mandarMensaje = function () {
        console.log("Mensaje enviado");
    };
    Telefono.prototype.hacerLlamada = function () {
        console.log("El número solicitado no corresponde a un abonado en servicio");
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    return Telefono;
}());
exports["default"] = Telefono;
