import { Link } from 'react-router-dom';
import './Menu.css';
import React from 'react'

const Menu = () => {
  return (
    <div className='contenedorMenuPrincipal'>
        <p>LOGO</p>
        <div></div>
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/galeria">Galeria</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
        </nav>
    </div>
  )
}

export default Menu