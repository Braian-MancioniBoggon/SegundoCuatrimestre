class Microondas {
    private estaPrendido:boolean;
    private temperaturaActual:number;
    private modoActual:string;
    public constructor(prendido:boolean, temperatura:number, modo:string){
        this.estaPrendido=prendido;
        this.temperaturaActual=temperatura;
        this.modoActual=modo;
    }

    public prenderApagar():void{
        if (this.estaPrendido){
            this.estaPrendido=false;
        } else {
            this.estaPrendido=true;
        }
    }

    public subirTemperatura():void{
        this.temperaturaActual= this.temperaturaActual + 1;
    }

    public bajarTemperatura():void{
        this.temperaturaActual= this.temperaturaActual - 1;
    }
    
    public cambiarModo():void{
        if (this.modoActual = "descongelar"){
            this.modoActual = "cocinar";
        } else {
            this.modoActual = "descongelar";
        }
    }

    //GETTERS

    public getEstaPrendido():boolean{
        return this.estaPrendido;
    }

    public getTemperaturaActual():number{
        return this.temperaturaActual;
    }
    
    public getModoActual():string{
        return this.modoActual;
    }
}

let miMicroondas = new Microondas(true, 30, "descongelar");
//console.log(miMicroondas);
console.log(miMicroondas.getEstaPrendido());
console.log(miMicroondas.getTemperaturaActual());
console.log(miMicroondas.getModoActual());