import React, { useState } from 'react'
import './CambioImagen.css';

const CambioImagen = () => {

    const [img, setImg] = useState("");
    const [alt, setAlt] = useState("");

    const cambioDeImagen = (img) => {
        setImg("http://via.placeholder.com/"+img);
        setAlt("Imagen "+img);
    }

    return (
        <div className='contenedorPrincipal'>
            <div className='contenderoSecundario'>
                <div className='btns'>
                    <button onClick={() => cambioDeImagen("111x111")}>Imagen 1</button>
                    <button onClick={() => cambioDeImagen("222x222")}>Imagen 2</button>
                    <button onClick={() => cambioDeImagen("333x333")}>Imagen 3</button>
                </div>
                <div className='texto'>
                    <p>Imagen seleccionada: {img}</p>
                </div>
                <div className='imagen'>
                    <img src={img} alt={alt}/>
                </div>
            </div>
        </div>
    )
}

export default CambioImagen