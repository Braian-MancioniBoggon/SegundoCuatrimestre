"use strict";
exports.__esModule = true;
var fs = require("fs");
var texto = fs.readFileSync("texto.txt", "utf-8");
var palabras = texto.split(" ");
console.log(palabras);
