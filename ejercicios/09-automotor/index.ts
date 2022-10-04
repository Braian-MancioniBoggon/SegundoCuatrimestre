//Importo las librerias que voy a utilizar
import * as fs from 'fs';
import * as ReadlineSync from 'readline-sync';

//Creo la clase "Auto"
class Auto {
    private marca :string;
    private subMarca :string;
    private modelo :number;

    public constructor (marca :string, subMarca :string, modelo :number){
        this.marca = marca;
        this.subMarca = subMarca;
        this.modelo = modelo;
    }

    public getMarca() :string{
        return this.marca;
    }

    public getSubMarca() :string{
        return this.subMarca;
    }
    
    public getModelo() :number{
        return this.modelo;
    }
}

//Creo la clase "RegistroAutomotor" que va a contener un arreglo de "Auto"
class RegistroAutomotor {
    private autosRegistrados :Array<Auto>;

    public constructor (autosRegistrados :Array<Auto>){
        this.autosRegistrados = autosRegistrados;
    }

    public getAutosRegistrados() :Array<Auto>{
        return this.autosRegistrados;
    }
}

// creo la clase "GestorDeArchivos" que permite leer un archivo de texto
class GestorDeArchivos {
    private arregloString :string[];

    public constructor(txtFileLocation :string) {
        let archivoTxt :string = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');    
    }

    public mostrarArreglo() :void {
        console.log(this.arregloString);
    }

    public getArregloString() :string[] {
        return this.arregloString;
    }
}

//Función para cargar los autos al arreglo
let crearAuto = (auto :string, autosRegistrados: Array<Auto>) :void => {
    let listaDeAutosAux :string[] = auto.split(',');
    let marca: string = listaDeAutosAux[0];
    let subMarca: string = listaDeAutosAux[1];
    let modelo: number = Number(listaDeAutosAux[2]);
    let nuevoAuto : Auto = new Auto(marca, subMarca, modelo);

    autosRegistrados.push(nuevoAuto);
}

//Función para agregar un auto
let agregarAuto = (autosRegistrados: Array<Auto>) :void => {
    let marca :string = ReadlineSync.question("Ingrese la marca del vehiculo: ");
    let subMarca :string = ReadlineSync.question("Ingrese la submarca del vehiculo: ");
    let modelo :number = ReadlineSync.questionInt("Ingrese el modelo del vehiculo: ");
    let nuevoAuto : Auto = new Auto(marca, subMarca, modelo);

    autosRegistrados.push(nuevoAuto);
}

//Función para "borrar" un auto
let borrarAuto = (posicion: number) :void => {
    delete autosRegistrados[posicion]
}

//Función para modificar un auto
let modificarAuto = (posicion: number) :void => {
    let marca :string = ReadlineSync.question("Ingrese la nueva marca del vehiculo: ");
    let subMarca :string = ReadlineSync.question("Ingrese la nueva submarca del vehiculo: ");
    let modelo :number = ReadlineSync.questionInt("Ingrese el nuevo modelo del vehiculo: ");
    let autoModificado : Auto = new Auto(marca, subMarca, modelo);
    
    delete autosRegistrados[posicion];
    autosRegistrados[posicion] = autoModificado;
}

//Función para hacer un separador en la consola
let separador = () :string => {
    let guion :string = "-";
    for (let guiones :number = 0; guiones<15; guiones++){
        guion += "-";
    }

    return guion;
}

//Función para mostrar los autos por consola
let mostrarAutos = () :void => {
    for (let i :number = 0; i < autosRegistrados.length; i++){
        console.log(separador());
        console.log("Vehículo número " + (i+1));
        console.log("Marca: " + autosRegistrados[i].getMarca());
        console.log("Submarca: " + autosRegistrados[i].getSubMarca());
        console.log("Modelo: " + autosRegistrados[i].getModelo());
        console.log(separador());
    }
}

//Función para utilizar las opciones de "borrar" y modificar un auto
let gestorDeAutos = (accion) :number => {
    mostrarAutos();
    let seleccionDeAuto = ReadlineSync.questionInt("Se "+accion+" el vehiculo numero: ");
    seleccionDeAuto -= 1;

    return seleccionDeAuto
}

//Función para consultar al usuario si quiere realizar una nueva acción
let consultarNuevaSeleccion = () :void => {
    console.log("¿Quiere realizar otra operación?");
    let consulta :string = ReadlineSync.question("(si/no)");
    if (consulta == "si" || consulta == "Si" || consulta == "SI"){
        mostrarMenu();
    };
}

//Cargo los datos de los autos a partir del archivo "autos.txt"
let listaDeAutos: GestorDeArchivos = new GestorDeArchivos("autos.txt");
//Inicializo el arreglo de "autosRegistrados" para poder llenarlo
let autosRegistrados :Array<Auto> = [];
//Cargo los autos dentro del arreglo "autosRegistrados"
for (let i :number = 0; i < listaDeAutos.getArregloString().length; i++){
    crearAuto(listaDeAutos.getArregloString()[i], autosRegistrados);
}

//Declaro mi objeto
let registroAutomotor = new RegistroAutomotor(autosRegistrados);

//Creo un menu para mostrar las opciones a elegir
console.log("Vienvenido al Registro Automotor, seleccione la opción deseada");
let mostrarMenu = () :void => {
    let menu :number = 0;
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
}

mostrarMenu();