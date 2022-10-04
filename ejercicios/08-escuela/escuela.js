"use strict";
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
    }
    Escuela.prototype.getListaDeAlumnos = function () {
        return this.listaAlumnos;
    };
    Escuela.prototype.getListaDeProfes = function () {
        return this.listaProfes;
    };
    return Escuela;
}());
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
function crearProfe(profesor, arrayProfesor, arrayAlumnos) {
    var propiedadProfe = profesor.split(','); //la variable profesor va a contener --->"Juan Perez,333333333" y profesor.split(',') = ["Juan Perez", "333333333"]
    var nombre = propiedadProfe[0];
    var DNI = Number(propiedadProfe[1]);
    var listaAlumnos = arrayAlumnos;
    var nuevoProfe = new Profesor(nombre, DNI, listaAlumnos);
    //inserto el elemento de tipo Profesor en el arreglo recibido
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
//------------------MI CODIGO--------------
var datosAlumnos = new GestorDeArchivos("alumnos.txt");
datosAlumnos.mostrarArreglo();
var listaDeAlumnos = [];
for (var i = 0; i < datosAlumnos.getArregloString().length; i++) {
    crearAlumno(datosAlumnos.getArregloString()[i], listaDeAlumnos);
}
//--------------------CODIGO DE KAREN----------
//Iniciar programa
var datos = new GestorDeArchivos("profesores.txt");
datos.mostrarArreglo();
var listaProfes = [];
for (var i = 0; i < datos.getArregloString().length; i++) {
    crearProfe(datos.getArregloString()[i], listaProfes, listaDeAlumnos);
}
console.log(listaProfes);
console.log(listaDeAlumnos);
listaProfes[1].mostrarAlumnos();
