"use strict";
exports.__esModule = true;
//Importo las clases
var TelefonoConCamara_1 = require("./TelefonoConCamara");
var TelefonoConRadio_1 = require("./TelefonoConRadio");
//Creo los dos telefonos
var telefonoConCamara = new TelefonoConCamara_1["default"]();
var telefonoConRadio = new TelefonoConRadio_1["default"]();
console.log(telefonoConCamara);
console.log(telefonoConRadio);
