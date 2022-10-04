//Creo la clase Telefono
export default class Telefono {
    private estaPrendido :boolean;
    private bateriaActual :number;

    public constructor(){
        this.estaPrendido=true;
        this.bateriaActual=100;
    }

    public getEstaPrendido() :boolean{
        return this.estaPrendido;
    }

    public getBateriaActual() :number{
        return this.bateriaActual;
    }

    public mandarMensaje() :void{
        console.log("Mensaje enviado");
    }

    public hacerLlamada() :void{
        console.log("El número solicitado no corresponde a un abonado en servicio")
    }

    public prenderApagar() :void{
        if (this.estaPrendido){
            this.estaPrendido=false;
        } else {
            this.estaPrendido=true;
        }
    }
}