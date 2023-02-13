import React from "react";
import '../style2.css';


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
            <a onClick={handleClick} id='liNav'href="#cerrar"> CERRAR PARA ABRIR</a>
        </ul>
    </nav>
    
    
    )
}

export default NavBar