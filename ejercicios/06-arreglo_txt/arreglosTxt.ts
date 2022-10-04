import * as fs from 'fs';

let valoresArreglo :string = fs.readFileSync("arreglo.txt", "utf-8");

let arregloTxt :string[] = valoresArreglo.split(" ");

console.log("Los valores en el arreglo son: " + arregloTxt);

let sumar = (arreglo: string[],): number => {
    let resultado :number = 0;
    for (let i :number =0; i<arreglo.length; i++){
        resultado += Number(arreglo[i]);
    };
    return resultado;
};

console.log("La suma de todos los valores en el arreglo es: " + sumar(arregloTxt));