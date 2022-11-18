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
            console.log("Lan nota es invalida");
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
    Profesor.prototype.getListaAlumnos = function () {
        return this.listaAlumnos;
    };
    Profesor.prototype.mostrarAlumnos = function () {
        if (!this.listaAlumnos) {
            throw new ErrorAlMostrar("No se pudo mostrar un arreglo vacio");
        }
        else {
            console.log(this.listaAlumnos);
        }
    };
    return Profesor;
}());
var Escuela = /** @class */ (function () {
    function Escuela(nombre, direccion, listaAlumnos, listaProfes) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.listaAlumnos = listaAlumnos;
        this.listaProfes = listaProfes;
    }
    Escuela.prototype.getListaDeAlumnos = function () {
        return this.listaAlumnos;
    };
    Escuela.prototype.getListaDeProfes = function () {
        return this.listaProfes;
    };
    return Escuela;
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
//instalar npm install @types/node
// creamos un gestor que nos permite leer un archivo de texto
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8'); //esta variable guarda "Karen Simari,325486925;Juan Garcia,254879658;Lola Perez,124587625"
        this.arregloString = archivoTxt.split(';'); //vamos a tener nuestro "objetos" separados por ;
        //["Karen Simari,325486925","Juan Garcia,254879658", "Lola Perez,124587625"]
    }
    GestorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    GestorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return GestorDeArchivos;
}());
var mostrarError = function (arreglo) {
    if (arreglo) {
        throw new ErrorAlMostrar("No se pudo mostrar un arreglo vacio");
    }
    else {
        console.log(arreglo);
    }
    ;
};
function crearProfe(profesor, arrayProfesor, arrayAlumnos) {
    var propiedadProfe = profesor.split(','); //la variable profesor va a contener --->"Juan Perez,333333333" y profesor.split(',') = ["Juan Perez", "333333333"]
    var nombre = propiedadProfe[0];
    var DNI = Number(propiedadProfe[1]);
    var listaAlumnos = arrayAlumnos;
    var nuevoProfe = new Profesor(nombre, DNI, listaAlumnos);
    //inserto el elemento de tipo Profesor en el arreglo recibido
    arrayProfesor.push(nuevoProfe);
}
//------------------MI CODIGO--------------
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
//----------------------------------------------
//Iniciar programa
var datos = new GestorDeArchivos("profesores.txt");
datos.mostrarArreglo();
var listaProfes = [];
for (var i = 0; i < datos.getArregloString().length; i++) {
    crearProfe(datos.getArregloString()[i], listaProfes, listaDeAlumnos);
}
console.log(listaProfes);
console.log(listaDeAlumnos);
try {
    listaProfes[1].mostrarAlumnos();
}
catch (err) {
    console.log("Se produjo un error: " + err.message);
}
//Creo un arreglo vacío para mostrar un error
var arregloError = [];
try {
    mostrarError(arregloError);
}
catch (err) {
    console.log("Se produjo un error: " + err.message);
}
