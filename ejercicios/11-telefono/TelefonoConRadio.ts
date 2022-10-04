// Importo la clase Telefono
import Telefono from './Telefono'

//Creo la clase TelefonoConRadio
export default class TelefonoConRadio extends Telefono{
    private frecuenciaActual :number;

    public constructor (){
        super();
        this.frecuenciaActual=105;
    }

    public verFrecuenciaActual() :number{
        return this.frecuenciaActual;
    }
}