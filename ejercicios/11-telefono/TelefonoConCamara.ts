// Importo la clase Telefono
import Telefono from './Telefono'

//Creo la clase TelefonoConCamara
export default class TelefonoConCamara extends Telefono{
    public constructor(){
        super();
    }

    public sacarFoto() :void{
        console.log("Directo al insta")
    }
}