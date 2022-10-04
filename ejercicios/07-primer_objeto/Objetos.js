var Microondas = /** @class */ (function () {
    function Microondas(prendido, temperatura, modo) {
        this.estaPrendido = prendido;
        this.temperaturaActual = temperatura;
        this.modoActual = modo;
    }
    Microondas.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Microondas.prototype.subirTemperatura = function () {
        this.temperaturaActual = this.temperaturaActual + 1;
    };
    Microondas.prototype.bajarTemperatura = function () {
        this.temperaturaActual = this.temperaturaActual - 1;
    };
    Microondas.prototype.cambiarModo = function () {
        if (this.modoActual = "descongelar") {
            this.modoActual = "cocinar";
        }
        else {
            this.modoActual = "descongelar";
        }
    };
    //GETTERS
    Microondas.prototype.getEstaPrendido = function () {
        return this.estaPrendido;
    };
    Microondas.prototype.getTemperaturaActual = function () {
        return this.temperaturaActual;
    };
    Microondas.prototype.getModoActual = function () {
        return this.modoActual;
    };
    return Microondas;
}());
var miMicroondas = new Microondas(true, 30, "descongelar");
//console.log(miMicroondas);
console.log(miMicroondas.getEstaPrendido());
console.log(miMicroondas.getTemperaturaActual());
console.log(miMicroondas.getModoActual());
