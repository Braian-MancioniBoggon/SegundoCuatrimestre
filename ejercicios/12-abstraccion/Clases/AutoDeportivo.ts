// Importo la clase Auto
import Auto from './Auto'

//Creo la clase AutoDeportivo
export default class AutoDeportivo extends Auto{
    public constructor(){
        super();
    }

    public acelerar(): void {
        this.velocidad += 100;
    }
}