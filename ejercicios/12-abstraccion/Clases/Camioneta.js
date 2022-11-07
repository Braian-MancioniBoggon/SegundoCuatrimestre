"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// Importo la clase Auto
var Auto_1 = require("./Auto");
//Creo la clase Camioneta
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta() {
        return _super.call(this) || this;
    }
    Camioneta.prototype.acelerar = function () {
        this.velocidad += 75;
    };
    Camioneta.prototype.get4x4 = function () {
        console.log("La camioneta es 4x4");
    };
    return Camioneta;
}(Auto_1["default"]));
exports["default"] = Camioneta;
