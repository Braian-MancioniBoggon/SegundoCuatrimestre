//Creo la clase Auto
export default abstract class Auto {
    protected velocidad: number;
    protected cantidadDeRuedas: number;

    public constructor() {
        this.velocidad = 0;
        this.cantidadDeRuedas = 4;
    }

    abstract acelerar(): void

    public getVelocidad(): number {
        return this.velocidad;
    }

    public getCantidadDeRuedas(): number {
        return this.cantidadDeRuedas;
    }
}