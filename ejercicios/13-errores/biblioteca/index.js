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
var fs = require("fs");
var ReadlineSync = require("readline-sync");
var Libro = /** @class */ (function () {
    function Libro(titulo, genero, numeroDeSerie) {
        this.titulo = titulo;
        this.genero = genero;
        this.numeroDeSerie = numeroDeSerie;
    }
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.getGenero = function () {
        return this.genero;
    };
    Libro.prototype.getNumeroDeSerie = function () {
        return this.numeroDeSerie;
    };
    return Libro;
}());
var Biblioteca = /** @class */ (function () {
    function Biblioteca(biblioteca) {
        var _this = this;
        this.borrarLibro = function (posicion) {
            if (posicion >= 0 && posicion < _this.biblioteca.length) {
                _this.biblioteca.splice(posicion, 1);
            }
            else {
                //Si el libro no se encuentra sale un error
                throw new ErrorAlMostrar("No se pudo encontrar el libro");
            }
        };
        this.biblioteca = biblioteca;
    }
    Biblioteca.prototype.getBiblioteca = function () {
        console.log(this.biblioteca);
    };
    Biblioteca.prototype.crearLibro = function () {
        var titulo = ReadlineSync.question("Ingrese el titulo del libro: ");
        var genero = ReadlineSync.question("Ingrese el genero del libro: ");
        var numeroDeSerie = ReadlineSync.questionInt("Ingrese el numero de serie del libro: ");
        var nuevoLibro = new Libro(titulo, genero, numeroDeSerie);
        this.biblioteca.push(nuevoLibro);
    };
    Biblioteca.prototype.modificarLibro = function (posicion) {
        var titulo = ReadlineSync.question("Ingrese el titulo del libro: ");
        var genero = ReadlineSync.question("Ingrese el genero del libro: ");
        var numeroDeSerie = this.biblioteca[posicion].getNumeroDeSerie();
        var libroModificado = new Libro(titulo, genero, numeroDeSerie);
        delete this.biblioteca[posicion];
        this.biblioteca[posicion] = libroModificado;
    };
    Biblioteca.prototype.agregarLibro = function (biblioteca) {
        var titulo = ReadlineSync.question("Ingrese el titulo del libro: ");
        var genero = ReadlineSync.question("Ingrese el genero del libro: ");
        var numeroDeSerie = ReadlineSync.questionInt("Ingrese el numero de serie del libro: ");
        var nuevoLibro = new Libro(titulo, genero, numeroDeSerie);
        biblioteca.push(nuevoLibro);
    };
    return Biblioteca;
}());
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');
    }
    GestorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    GestorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return GestorDeArchivos;
}());
var ErrorAlMostrar = /** @class */ (function (_super) {
    __extends(ErrorAlMostrar, _super);
    function ErrorAlMostrar(mensaje) {
        var _this = _super.call(this, mensaje) || this;
        _this.name = "ErrorAlMostrar";
        return _this;
    }
    return ErrorAlMostrar;
}(Error));
var cargarLibro = function (libro, biblioteca) {
    var bibliotecaAux = libro.split(',');
    var titulo = bibliotecaAux[0];
    var genero = bibliotecaAux[1];
    var numeroDeSerie = Number(bibliotecaAux[2]);
    var nuevoLibro = new Libro(titulo, genero, numeroDeSerie);
    biblioteca.push(nuevoLibro);
};
var listaDeLibros = new GestorDeArchivos("libros.txt");
var arregloBiblioteca = [];
for (var i = 0; i < listaDeLibros.getArregloString().length; i++) {
    cargarLibro(listaDeLibros.getArregloString()[i], arregloBiblioteca);
}
var biblioteca = new Biblioteca(arregloBiblioteca);
biblioteca.getBiblioteca();
console.log("Borro el primer libro");
//Uso try/catch
try {
    biblioteca.borrarLibro(0);
}
catch (err) {
    console.log("Se produjo un error: " + err.message);
}
biblioteca.getBiblioteca();
console.log("Fuerzo un error intentando borrar un libro que no está");
//Uso try/catch
try {
    biblioteca.borrarLibro(2);
}
catch (err) {
    console.log("Se produjo un error: " + err.message);
}
