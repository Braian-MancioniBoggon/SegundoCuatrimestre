import * as fs from 'fs';
import * as ReadlineSync from 'readline-sync';

class Libro {
    private titulo :string;
    private genero :string;
    private numeroDeSerie :number;

    public constructor (titulo :string, genero :string, numeroDeSerie :number, ){
        this.titulo = titulo;
        this.genero = genero;
        this.numeroDeSerie = numeroDeSerie;
    }

    public getTitulo() :string{
        return this.titulo;
    }

    public getGenero() :string{
        return this.genero;
    }
    
    public getNumeroDeSerie() :number{
        return this.numeroDeSerie;
    }
}

class Biblioteca {
    private biblioteca :Array<Libro>;

    public constructor (biblioteca :Array<Libro>){
        this.biblioteca = biblioteca;
    }

    public getBiblioteca() :void{
            console.log(this.biblioteca)
    }

    public crearLibro() :void{
        let titulo :string = ReadlineSync.question("Ingrese el titulo del libro: ");
        let genero :string = ReadlineSync.question("Ingrese el genero del libro: ");
        let numeroDeSerie :number = ReadlineSync.questionInt("Ingrese el numero de serie del libro: ");
        let nuevoLibro : Libro = new Libro(titulo, genero, numeroDeSerie);

        this.biblioteca.push(nuevoLibro);
    }
    
    public borrarLibro = (posicion: number) :void => {
        if (posicion >= 0 && posicion < this.biblioteca.length){
            this.biblioteca.splice(posicion,1);
        } else {
            //Si el libro no se encuentra sale un error
            throw new ErrorAlMostrar("No se pudo encontrar el libro");
        }
    }

    public modificarLibro(posicion: number) :void {
        let titulo :string = ReadlineSync.question("Ingrese el titulo del libro: ");
        let genero :string = ReadlineSync.question("Ingrese el genero del libro: ");
        let numeroDeSerie :number = this.biblioteca[posicion].getNumeroDeSerie();
        let libroModificado : Libro = new Libro(titulo, genero, numeroDeSerie);
        
        delete this.biblioteca[posicion];
        this.biblioteca[posicion] = libroModificado;
    }

    public agregarLibro(biblioteca: Array<Libro>) :void {
        let titulo :string = ReadlineSync.question("Ingrese el titulo del libro: ");
        let genero :string = ReadlineSync.question("Ingrese el genero del libro: ");
        let numeroDeSerie :number = ReadlineSync.questionInt("Ingrese el numero de serie del libro: ");
        let nuevoLibro : Libro = new Libro(titulo, genero, numeroDeSerie);
    
        biblioteca.push(nuevoLibro);
    }
}

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

class ErrorAlMostrar extends Error {
    constructor(mensaje: string) {
        super(mensaje);
        this.name = "ErrorAlMostrar";
    }
}

let cargarLibro = (libro :string, biblioteca: Array<Libro>) :void => {
    let bibliotecaAux :string[] = libro.split(',');
    let titulo: string = bibliotecaAux[0];
    let genero: string = bibliotecaAux[1];
    let numeroDeSerie: number = Number(bibliotecaAux[2]);
    let nuevoLibro : Libro = new Libro(titulo, genero, numeroDeSerie);

    biblioteca.push(nuevoLibro);
}

let listaDeLibros :GestorDeArchivos = new GestorDeArchivos("libros.txt");
let arregloBiblioteca :Array <Libro> = [];
for (let i :number = 0; i < listaDeLibros.getArregloString().length; i++){
    cargarLibro(listaDeLibros.getArregloString()[i], arregloBiblioteca);
}
let biblioteca :Biblioteca = new Biblioteca(arregloBiblioteca);
biblioteca.getBiblioteca();

console.log("Borro el primer libro")

//Uso try/catch
try {
    biblioteca.borrarLibro(0);
} catch(err) {
    console.log("Se produjo un error: " + err.message);
}

biblioteca.getBiblioteca();

console.log("Fuerzo un error intentando borrar un libro que no está")

//Uso try/catch
try {
    biblioteca.borrarLibro(2);
} catch(err) {
    console.log("Se produjo un error: " + err.message);
}
