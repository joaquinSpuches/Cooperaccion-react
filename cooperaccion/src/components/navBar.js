import React, {useState} from "react";
import '../style2.css';
import {Route,Link} from 'react-router-dom'

function NavBar(props) {

 
    const handleClick= ()=>
    {
        props.setClicked(!props.clicked)
    }

    
     
          
    return (
        <nav id="navBar"     className={`${props.clicked ? 'nav-active':''} `} >
        <ul  >
            <a onClick={handleClick} id='liNav' href="#porque"> POR QUÉ Y PARA QUÉ</a>
            <a onClick={handleClick} id='liNav'href="#elJuego"> EL JUEGO </a>
            <a onClick={handleClick} id='liNav'href="#yDespues">¿Y DESPUES?</a>
            <a onClick={handleClick} id='liNav'href="#Cerrar"> CERRAR ARA ABRIR</a>
        </ul>
    </nav>
    
    
    )
}

export default NavBar