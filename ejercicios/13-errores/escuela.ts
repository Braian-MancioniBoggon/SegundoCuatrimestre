import * as fs from 'fs';

class Alumno {
    private nombre: string;
    private DNI: number;
    private nota: number;

    public constructor(nombre: string, DNI:number, nota:number) {
        this.nombre = nombre;
        this.DNI= DNI;
        this.nota = nota;
    }

    public getNota() : number {
        return this.nota;
    }

    public estaAprobado() {
        if (this.nota >= 7 && this.nota <= 10){
            console.log(`El alumnno ${this.nombre} esta aprobado`);
        } else if (this.nota < 7 && this.nota > 0){
            console.log(`El alumnno ${this.nombre} esta desaprobado`);
        }else {
            console.log("Lan nota es invalida");
        }
    }
}

class Profesor {
    private nombre: string;
    private DNI : number;
    private listaAlumnos: Alumno[];

    public constructor(nombre:string, DNI: number, listaAlumnos: Alumno[]){
        this.nombre = nombre;
        this.DNI= DNI;
        this.listaAlumnos = listaAlumnos;
    }

    public getListaAlumnos() : Alumno[] {
        return this.listaAlumnos;
    }

    //Lanzo un error
    public mostrarAlumnos(): void {
        if (!this.listaAlumnos){
            throw new ErrorAlMostrar("No se pudo mostrar un arreglo vacio");
        } else {
            console.log(this.listaAlumnos)
        }
    }
}

class Escuela {
    private nombre:string;
    private direccion: string;
    private listaAlumnos : Array<Alumno>;
    private listaProfes : Array<Profesor>;

    public constructor(nombre: string, direccion :string, listaAlumnos: Array<Alumno>, listaProfes: Array<Profesor>){
        this.nombre= nombre;
        this.direccion =direccion;
        this.listaAlumnos = listaAlumnos;
        this.listaProfes = listaProfes;
    }

    public getListaDeAlumnos(): Array<Alumno> {
        return this.listaAlumnos;
    }
    
    public getListaDeProfes(): Array<Profesor> {
        return this.listaProfes;
    }

}

class ErrorAlMostrar extends Error {
    constructor(mensaje: string) {
        super(mensaje);
        this.name = "ErrorAlMostrar";
    }
}

class GestorDeArchivos {
    private arregloString: string[];

    constructor(txtFileLocation: string) {
        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');
    }
    public mostrarArreglo(): void {
        console.log(this.arregloString);
    }

    public getArregloString(): string[] {
        return this.arregloString;
    }
}

let mostrarError = (arreglo) :void => {
    if (arreglo){
        throw new ErrorAlMostrar("No se pudo mostrar un arreglo vacio");
    } else {
        console.log(arreglo)
    };
}

function crearProfe(profesor: string, arrayProfesor: Array<Profesor>, arrayAlumnos: Array<Alumno>) : void{
    let propiedadProfe : string[] = profesor.split(',');
    let nombre: string = propiedadProfe[0];
    let DNI: number = Number(propiedadProfe[1]);
    let listaAlumnos: Array<Alumno> = arrayAlumnos;
    let nuevoProfe : Profesor = new Profesor(nombre,DNI,listaAlumnos);

    arrayProfesor.push(nuevoProfe);
}

function crearAlumno(alumno: string, arrayAlumnos: Array<Alumno>) : void{
    let propiedadAlumno : string[] = alumno.split(',');
    let nombre: string = propiedadAlumno[0];
    let DNI: number = Number(propiedadAlumno[1]);
    let nota: number = Number(propiedadAlumno[2]);
    let nuevoAlumno : Alumno = new Alumno(nombre,DNI,nota);

    arrayAlumnos.push(nuevoAlumno);
}

let datosAlumnos: GestorDeArchivos = new GestorDeArchivos("alumnos.txt");
datosAlumnos.mostrarArreglo();

let listaDeAlumnos : Array<Alumno> = [];

for (let i : number= 0; i < datosAlumnos.getArregloString().length; i++){
    crearAlumno(datosAlumnos.getArregloString()[i], listaDeAlumnos);
}

let datos: GestorDeArchivos = new GestorDeArchivos("profesores.txt");
datos.mostrarArreglo();
let listaProfes : Array<Profesor> = [];

for (let i : number= 0; i < datos.getArregloString().length; i++){
    crearProfe(datos.getArregloString()[i], listaProfes, listaDeAlumnos);
}

console.log(listaProfes);
console.log(listaDeAlumnos);

//Pruebo try/catch
try{
    listaProfes[1].mostrarAlumnos();
} catch(err) {
    console.log("Se produjo un error: " + err.message);
}

//Creo un arreglo vacío para mostrar un error
let arregloError :string[] = [];
try{
    mostrarError(arregloError);
} catch(err) {
    console.log("Se produjo un error: " + err.message);
}
