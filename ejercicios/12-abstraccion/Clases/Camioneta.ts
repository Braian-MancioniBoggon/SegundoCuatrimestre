// Importo la clase Auto
import Auto from './Auto'

//Creo la clase Camioneta
export default class Camioneta extends Auto{
    public constructor(){
        super();
    }

    public acelerar(): void {
        this.velocidad += 75;
    }

    public get4x4(): void{
        console.log("La camioneta es 4x4")
    }
}