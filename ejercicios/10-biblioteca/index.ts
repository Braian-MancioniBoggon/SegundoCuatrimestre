//Importo las librerias que voy a utilizar
import * as fs from 'fs';
import * as ReadlineSync from 'readline-sync';

//Creo la clase "Libro"
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

//Creo la clase "Biblioteca" que va a contener un arreglo de "libros"
class Biblioteca {
    private biblioteca :Array<Libro>;

    public constructor (biblioteca :Array<Libro>){
        this.biblioteca = biblioteca;
    }

    public getBiblioteca() :Array<Libro>{
        return this.biblioteca;
    }

    public crearLibro() :void{
        let titulo :string = ReadlineSync.question("Ingrese el titulo del libro: ");
        let genero :string = ReadlineSync.question("Ingrese el genero del libro: ");
        let numeroDeSerie :number = ReadlineSync.questionInt("Ingrese el numero de serie del libro: ");
        let nuevoLibro : Libro = new Libro(titulo, genero, numeroDeSerie);

        this.biblioteca.push(nuevoLibro);
    }

    public borrarLibro(posicion :number) :void {
        delete this.biblioteca[posicion]
    }

    public modificarLibro(posicion: number) :void {
        let titulo :string = ReadlineSync.question("Ingrese el titulo del libro: ");
        let genero :string = ReadlineSync.question("Ingrese el genero del libro: ");
        let numeroDeSerie :number = this.biblioteca[posicion].getNumeroDeSerie();
        let libroModificado : Libro = new Libro(titulo, genero, numeroDeSerie);
        
        delete this.biblioteca[posicion];
        this.biblioteca[posicion] = libroModificado;
    }
}

// Creo la clase "GestorLibros" que permite leer un archivo de texto
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

//Función para cargar los libros al arreglo
let cargarLibro = (libro :string, biblioteca: Array<Libro>) :void => {
    let bibliotecaAux :string[] = libro.split(',');
    let titulo: string = bibliotecaAux[0];
    let genero: string = bibliotecaAux[1];
    let numeroDeSerie: number = Number(bibliotecaAux[2]);
    let nuevoLibro : Libro = new Libro(titulo, genero, numeroDeSerie);

    biblioteca.push(nuevoLibro);
}

//Función para agregar un Libro
let agregarLibro = (biblioteca: Array<Libro>) :void => {
    let titulo :string = ReadlineSync.question("Ingrese el titulo del libro: ");
    let genero :string = ReadlineSync.question("Ingrese el genero del libro: ");
    let numeroDeSerie :number = ReadlineSync.questionInt("Ingrese el numero de serie del libro: ");
    let nuevoLibro : Libro = new Libro(titulo, genero, numeroDeSerie);

    biblioteca.push(nuevoLibro);
}

//Función para modificar un libro


//Cargo los datos de los libros a partir del archivo "libros.txt"
let listaDeLibros: GestorDeArchivos = new GestorDeArchivos("libros.txt");
//Cargo los libros dentro del arreglo "biblioteca"
for (let i :number = 0; i < listaDeLibros.getArregloString().length; i++){
    cargarLibro(listaDeLibros.getArregloString()[i], biblioteca);
}