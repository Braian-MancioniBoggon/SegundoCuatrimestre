import * as readlineSync from "readline-sync";
let vueltas:number = 4;
let tiempo:number=0;
for (let i:number=0; i<4; i++){
    let pregunta = readlineSync.questionInt("Indique el tiempo de la vuelta "+(i+1)+" de 4: ");
    tiempo += pregunta;
};
console.log("El tiempo total es: "+tiempo);
console.log("El promedio por vuelta es: "+(tiempo/vueltas));