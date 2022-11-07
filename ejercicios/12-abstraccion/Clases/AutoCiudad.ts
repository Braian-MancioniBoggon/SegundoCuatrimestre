// Importo la clase Auto
import Auto from './Auto'

//Creo la clase AutoCiudad
export default class AutoCiudad extends Auto{
    public constructor(){
        super();
    }

    public acelerar(): void {
        this.velocidad += 50;
    }
}