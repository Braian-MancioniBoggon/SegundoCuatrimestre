let readlineSync = require('readline-sync');
let mensaje="";
console.log("5 palabras");
for (i=0; i<5; i++) {
    mensaje = readlineSync.question("Palabra N"+(i+1)+": ");;
    console.log(mensaje);
};