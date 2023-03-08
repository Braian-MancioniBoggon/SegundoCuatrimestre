import './Formulario.css';
import React, { useState } from 'react'

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre:"",
        apellido:""
    });

    const handleCambioInput = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviar = (event) => {
        event.preventDefault()
        console.log(`Datos enviados. Nombre: ${datos.nombre} Apellido: ${datos.apellido}`)
    }

    return (
        <div className='contenedorFormularios'>
            <form onSubmit={enviar}>
                <div><input name='nombre' placeholder='Nombre' onChange={handleCambioInput}/></div>
                <div><input name='apellido' placeholder='Apellido' onChange={handleCambioInput}/></div>
                <div><button type='submit'>Enviar</button></div>
            </form>
        </div>
    )
}

export default Formulario