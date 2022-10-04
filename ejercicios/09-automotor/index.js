"use strict";
exports.__esModule = true;
//Importo las librerias que voy a utilizar
var fs = require("fs");
var ReadlineSync = require("readline-sync");
//Creo la clase "Auto"
var Auto = /** @class */ (function () {
    function Auto(marca, subMarca, modelo) {
        this.marca = marca;
        this.subMarca = subMarca;
        this.modelo = modelo;
    }
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getSubMarca = function () {
        return this.subMarca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    return Auto;
}());
//Creo la clase "RegistroAutomotor" que va a contener un arreglo de "Auto"
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(autosRegistrados) {
        this.autosRegistrados = autosRegistrados;
    }
    RegistroAutomotor.prototype.getAutosRegistrados = function () {
        return this.autosRegistrados;
    };
    return RegistroAutomotor;
}());
// creo la clase "GestorDeArchivos" que permite leer un archivo de texto
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
//Función para cargar los autos al arreglo
var crearAuto = function (auto, autosRegistrados) {
    var listaDeAutosAux = auto.split(',');
    var marca = listaDeAutosAux[0];
    var subMarca = listaDeAutosAux[1];
    var modelo = Number(listaDeAutosAux[2]);
    var nuevoAuto = new Auto(marca, subMarca, modelo);
    autosRegistrados.push(nuevoAuto);
};
//Función para agregar un auto
var agregarAuto = function (autosRegistrados) {
    var marca = ReadlineSync.question("Ingrese la marca del vehiculo: ");
    var subMarca = ReadlineSync.question("Ingrese la submarca del vehiculo: ");
    var modelo = ReadlineSync.questionInt("Ingrese el modelo del vehiculo: ");
    var nuevoAuto = new Auto(marca, subMarca, modelo);
    autosRegistrados.push(nuevoAuto);
};
//Función para "borrar" un auto
var borrarAuto = function (posicion) {
    delete autosRegistrados[posicion];
};
//Función para modificar un auto
var modificarAuto = function (posicion) {
    var marca = ReadlineSync.question("Ingrese la nueva marca del vehiculo: ");
    var subMarca = ReadlineSync.question("Ingrese la nueva submarca del vehiculo: ");
    var modelo = ReadlineSync.questionInt("Ingrese el nuevo modelo del vehiculo: ");
    var autoModificado = new Auto(marca, subMarca, modelo);
    delete autosRegistrados[posicion];
    autosRegistrados[posicion] = autoModificado;
};
//Función para hacer un separador en la consola
var separador = function () {
    var guion = "-";
    for (var guiones = 0; guiones < 15; guiones++) {
        guion += "-";
    }
    return guion;
};
//Función para mostrar los autos por consola
var mostrarAutos = function () {
    for (var i = 0; i < autosRegistrados.length; i++) {
        console.log(separador());
        console.log("Vehículo número " + (i + 1));
        console.log("Marca: " + autosRegistrados[i].getMarca());
        console.log("Submarca: " + autosRegistrados[i].getSubMarca());
        console.log("Modelo: " + autosRegistrados[i].getModelo());
        console.log(separador());
    }
};
//Función para utilizar las opciones de "borrar" y modificar un auto
var gestorDeAutos = function (accion) {
    mostrarAutos();
    var seleccionDeAuto = ReadlineSync.questionInt("Se " + accion + " el vehiculo numero: ");
    seleccionDeAuto -= 1;
    return seleccionDeAuto;
};
//Función para consultar al usuario si quiere realizar una nueva acción
var consultarNuevaSeleccion = function () {
    console.log("¿Quiere realizar otra operación?");
    var consulta = ReadlineSync.question("(si/no)");
    if (consulta == "si" || consulta == "Si" || consulta == "SI") {
        mostrarMenu();
    }
    ;
};
//Cargo los datos de los autos a partir del archivo "autos.txt"
var listaDeAutos = new GestorDeArchivos("autos.txt");
//Inicializo el arreglo de "autosRegistrados" para poder llenarlo
var autosRegistrados = [];
//Cargo los autos dentro del arreglo "autosRegistrados"
for (var i = 0; i < listaDeAutos.getArregloString().length; i++) {
    crearAuto(listaDeAutos.getArregloString()[i], autosRegistrados);
}
//Declaro mi objeto
var registroAutomotor = new RegistroAutomotor(autosRegistrados);
//Creo un menu para mostrar las opciones a elegir
console.log("Vienvenido al Registro Automotor, seleccione la opción deseada");
var mostrarMenu = function () {
    var menu = 0;
    console.log("1 - Ver la lista de vehículos registrados");
    console.log("2 - Registrar un nuevo vehículo");
    console.log("3 - Modificar datos de un vehículo");
    console.log("4 - Borrar un vehículo del registro");
    console.log("0 - Salir");
    //Pido al usuario que ingrese la opción deseada para continuar
    menu = ReadlineSync.questionInt("Opcion numero: ");
    switch (menu) {
        //Ver Registro Automotor
        case 1:
            mostrarAutos();
            consultarNuevaSeleccion();
            break;
        //Agregar un nuevo auto
        case 2:
            agregarAuto(autosRegistrados);
            consultarNuevaSeleccion();
            break;
        //Modificar un auto
        case 3:
            modificarAuto(gestorDeAutos("modificara"));
            consultarNuevaSeleccion();
            break;
        //Borrar un auto
        case 4:
            borrarAuto(gestorDeAutos("eliminara"));
            consultarNuevaSeleccion();
            break;
        //Salir del programa
        case 0:
            break;
        //Esta opción la agregué para poder ver el elemento "borrado" porque me da un error en el elemento vacío que queda en el arreglo y la puse para ver que ande bien el "borrado"
        case 5:
            console.log(registroAutomotor);
            break;
        //Opción invalida
        default:
            console.log("Opción invalida");
            mostrarMenu();
    }
};
mostrarMenu();
