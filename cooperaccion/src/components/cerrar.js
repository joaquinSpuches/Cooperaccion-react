import React from "react";
import '../style2.css'
import candado from '../candado.png'

export default function Cerrar (props){

return(
    <div id="cerrar" >
    <h3 className="title"   > Cerrar para abrir </h3>
    <div>
    <img src={candado} />
    </div>
    <p>
    Poder dar un cierre a la actividad no debe implicar el cierre del
tema. <br/>Es interesante poder detectar si ha despertado nuevas preguntas,
si han relacionado esto con temas o contenidos que están
viendo en otras materias, si tienen curiosidad por saber más, etc. <br/>
Proponemos entonces finalizar la actividad resumiendo las ideas
centrales que quedaron y las preguntas que podrían seguir trabajándose.
    </p>

  

    </div>
)}
