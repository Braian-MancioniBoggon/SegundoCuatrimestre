import * as fs from 'fs';

class Alumno {
    private nombre: string;
    private DNI: number;
    private nota: number;

    public constructor(nombre: string, DNI:number, nota:number) {
        this.nombre = nombre;
        this.DNI = DNI;
        this.nota = nota;
    }

    public getDNI() : number {
        return this.DNI;
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
            throw new ErrorNota("La nota es invalida");
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

    public getNombre() : void {
        console.log(this.nombre);
    }

    public getDNI() : number {
        return this.DNI;
    }

    public getListaAlumnos() : Alumno[] {
        return this.listaAlumnos;
    }

    //Lanzo un error
    public mostrarAlumnos(): void {
        //Valido que el arreglo no esté vacío
            console.log(this.listaAlumnos);
    }
}

class Escuela {
    private nombre:string;
    private direccion: string;
    private listaAlumnos : Array<Alumno>;
    private listaProfes : Array<Profesor>;
    private intentos :number;

    public constructor(nombre: string, direccion :string, listaAlumnos: Array<Alumno>, listaProfes: Array<Profesor>){
        this.nombre= nombre;
        this.direccion =direccion;
        this.listaAlumnos = listaAlumnos;
        this.listaProfes = listaProfes;
        this.intentos = 0;
    }

    public getNombre() : void {
        console.log(this.nombre);
    }

    public getDireccion() : void {
        console.log(this.direccion);
    }

    public getListaDeAlumnos(): Array<Alumno> {
        return this.listaAlumnos;
    }
    
    public getListaDeProfes(): Array<Profesor> {
        return this.listaProfes;
    }

}

class ErrorNota extends Error {
    constructor(mensaje: string) {
        super(mensaje);
        this.name = "ErrorNota";
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

let escuela :Escuela = new Escuela("Colegio San Jose","Av. Santagada y Colón",listaDeAlumnos,listaProfes);
console.log(listaProfes);
console.log(listaDeAlumnos);
listaProfes[1].mostrarAlumnos();


console.log("Valido si la nota es valida para saber si el alumno esta aprobado o no");
try{
    listaDeAlumnos[0].estaAprobado()
} catch(err) {
    console.log("Se produjo un error: " + err.message);
}


console.log("Valido si la nota es valida para saber si el alumno esta aprobado o no");
try{
    listaDeAlumnos[1].estaAprobado()
} catch(err) {
    console.log("Se produjo un error: " + err.message);
}
