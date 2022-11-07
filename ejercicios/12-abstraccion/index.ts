//Importo las clases
import AutoCiudad from './Clases/AutoCiudad'
import AutoDeportivo from './Clases/AutoDeportivo'
import Camioneta from './Clases/Camioneta'

//Función para hacer un separador en la consola
let separador = () :string => {
    let guion :string = "-";
    for (let guiones :number = 0; guiones<50; guiones++){
        guion += "-";
    }

    return guion;
}

//Creo los autos
let autoCiudad :AutoCiudad = new AutoCiudad();
let autoDeportivo :AutoDeportivo = new AutoDeportivo();
let camioneta :Camioneta = new Camioneta();

//Muestro los autos por consola
console.log(autoCiudad);
console.log(autoDeportivo);
console.log(camioneta);
console.log(separador());

//Acelero el auto de ciudad
console.log("Acelero el auto de ciudad");
autoCiudad.acelerar();
console.log(autoCiudad);
console.log(separador());

//Acelero el auto deportivo
console.log("Acelero el auto deportivo");
autoDeportivo.acelerar();
console.log(autoDeportivo);
console.log(separador());

//Acelero la camioneta y consulto si es 4x4
console.log("Acelero la camioneta y consulto si es 4x4 y tiene caja ");
camioneta.acelerar();
console.log(camioneta);
camioneta.get4x4();