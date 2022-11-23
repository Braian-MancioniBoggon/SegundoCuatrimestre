const ciudades = `[
    {
      "latitude": 40.416875,
      "longitude": -3.703308,
      "city": "Madrid",
      "description": "Puerta del Sol",
      "imagen": "img/puertaDelSol.jpg"
    },
    {
      "latitude": 40.417438,
      "longitude": -3.693363,
      "city": "Madrid",
      "description": "Paseo del Prado",
      "imagen": "img/paseoDelPrado.jpg"
    },
    {
      "latitude": 40.407015,
      "longitude": -3.691163,
      "city": "Madrid",
      "description": "Estación de Atocha",
      "imagen": "img/estacionDeAtocha.jpg"
    }
]`

let contenedor = document.getElementById("contenedor");

function crearTarjetas(string){
    let datos = JSON.parse(string);

    for (let i of datos){
        contenedor.innerHTML += `<div class="tarjeta">
        <div class="foto"><img src=${i.imagen} alt=""></div>
        <p class="titulo"><strong>${i.city}</strong></p>
        <p class="descripcion">${i.description}</p>
        <p class="ubicacion">Latitud: <i>${i.latitude}</i> <strong>/</strong> Longitud: <i>${i.longitude}</i></p> </div>`
    }
}

crearTarjetas(ciudades);