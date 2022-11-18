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
var Alumno = /** @class */ (function () {
    function Alumno(nombre, DNI, nota) {
        this.nombre = nombre;
        this.DNI = DNI;
        this.nota = nota;
    }
    Alumno.prototype.getDNI = function () {
        return this.DNI;
    };
    Alumno.prototype.getNota = function () {
        return this.nota;
    };
    Alumno.prototype.estaAprobado = function () {
        if (this.nota >= 7 && this.nota <= 10) {
            console.log("El alumnno ".concat(this.nombre, " esta aprobado"));
        }
        else if (this.nota < 7 && this.nota > 0) {
            console.log("El alumnno ".concat(this.nombre, " esta desaprobado"));
        }
        else {
            throw new ErrorNota("La nota es invalida");
        }
    };
    return Alumno;
}());
var Profesor = /** @class */ (function () {
    function Profesor(nombre, DNI, listaAlumnos) {
        this.nombre = nombre;
        this.DNI = DNI;
        this.listaAlumnos = listaAlumnos;
    }
    Profesor.prototype.getNombre = function () {
        console.log(this.nombre);
    };
    Profesor.prototype.getDNI = function () {
        return this.DNI;
    };
    Profesor.prototype.getListaAlumnos = function () {
        return this.listaAlumnos;
    };
    //Lanzo un error
    Profesor.prototype.mostrarAlumnos = function () {
        //Valido que el arreglo no esté vacío
        console.log(this.listaAlumnos);
    };
    return Profesor;
}());
var Escuela = /** @class */ (function () {
    function Escuela(nombre, direccion, listaAlumnos, listaProfes) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.listaAlumnos = listaAlumnos;
        this.listaProfes = listaProfes;
        this.intentos = 0;
    }
    Escuela.prototype.getNombre = function () {
        console.log(this.nombre);
    };
    Escuela.prototype.getDireccion = function () {
        console.log(this.direccion);
    };
    Escuela.prototype.getListaDeAlumnos = function () {
        return this.listaAlumnos;
    };
    Escuela.prototype.getListaDeProfes = function () {
        return this.listaProfes;
    };
    return Escuela;
}());
var ErrorNota = /** @class */ (function (_super) {
    __extends(ErrorNota, _super);
    function ErrorNota(mensaje) {
        var _this = _super.call(this, mensaje) || this;
        _this.name = "ErrorNota";
        return _this;
    }
    return ErrorNota;
}(Error));
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
function crearProfe(profesor, arrayProfesor, arrayAlumnos) {
    var propiedadProfe = profesor.split(',');
    var nombre = propiedadProfe[0];
    var DNI = Number(propiedadProfe[1]);
    var listaAlumnos = arrayAlumnos;
    var nuevoProfe = new Profesor(nombre, DNI, listaAlumnos);
    arrayProfesor.push(nuevoProfe);
}
function crearAlumno(alumno, arrayAlumnos) {
    var propiedadAlumno = alumno.split(',');
    var nombre = propiedadAlumno[0];
    var DNI = Number(propiedadAlumno[1]);
    var nota = Number(propiedadAlumno[2]);
    var nuevoAlumno = new Alumno(nombre, DNI, nota);
    arrayAlumnos.push(nuevoAlumno);
}
var datosAlumnos = new GestorDeArchivos("alumnos.txt");
datosAlumnos.mostrarArreglo();
var listaDeAlumnos = [];
for (var i = 0; i < datosAlumnos.getArregloString().length; i++) {
    crearAlumno(datosAlumnos.getArregloString()[i], listaDeAlumnos);
}
var datos = new GestorDeArchivos("profesores.txt");
datos.mostrarArreglo();
var listaProfes = [];
for (var i = 0; i < datos.getArregloString().length; i++) {
    crearProfe(datos.getArregloString()[i], listaProfes, listaDeAlumnos);
}
var escuela = new Escuela("Colegio San Jose", "Av. Santagada y Colón", listaDeAlumnos, listaProfes);
console.log(listaProfes);
console.log(listaDeAlumnos);
listaProfes[1].mostrarAlumnos();
console.log("Valido si la nota es valida para saber si el alumno esta aprobado o no");
try {
    listaDeAlumnos[0].estaAprobado();
}
catch (err) {
    console.log("Se produjo un error: " + err.message);
}
console.log("Valido si la nota es valida para saber si el alumno esta aprobado o no");
try {
    listaDeAlumnos[1].estaAprobado();
}
catch (err) {
    console.log("Se produjo un error: " + err.message);
}
