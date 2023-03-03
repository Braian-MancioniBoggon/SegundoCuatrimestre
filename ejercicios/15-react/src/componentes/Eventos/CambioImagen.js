import React, { useState } from 'react'
import './CambioImagen.css';

const CambioImagen = () => {

    const [img, setImg] = useState("");

    const handleClickButtonImg1 = () => {
        setImg("http://via.placeholder.com/111x111");
    }

    const handleClickButtonImg2 = () => {
        setImg("http://via.placeholder.com/222x222");
    }

    const handleClickButtonImg3 = () => {
        setImg("http://via.placeholder.com/333x333");
    }

    return (
        <div className='contenedorPrincipal'>
            <div className='contenderoSecundario'>
                <div className='btns'>
                    <button onClick={handleClickButtonImg1}>Imagen 1</button>
                    <button onClick={handleClickButtonImg2}>Imagen 2</button>
                    <button onClick={handleClickButtonImg3}>Imagen 3</button>
                </div>
                <div className='texto'>
                    <p>Imagen seleccionada: {img}</p>
                </div>
                <div className='imagen'>
                    <img src={img} />
                </div>
            </div>
        </div>
    )
}

export default CambioImagen