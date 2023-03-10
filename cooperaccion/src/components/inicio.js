    
import '../style2.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
export default function Inicio () {
    const [clicked,setClicked] = useState(true)
    const handleClick = ()=>
        {
            setClicked(!clicked)
        }
    const inactive = {opacity: 0,scale:0}
    const active = {opacity: 1,scale:1}

    
    return(
        <div className="articles example">
            
            <h1 id='inicio'><i>INICIO</i></h1>
            <p>
            Para comenzar, se tomará la <b>Tarjeta de Inicio.</b>
            <br/>
            La misma contiene la historia central del juego.
            <br/>
            Puede leerse o reproducir el audio ( a través de escanear el
            código QR) con su <i animate={clicked ? active : inactive} style={{textDecoration:'underline', color: '#25418C'}}  onClick={handleClick}>narración.</i>
            <br/>
            <br/>
            </p>
            <motion.p style={{fontSize:'18px',padding:'5%'}} animate={clicked ? inactive : active} className={clicked ? 'inactive' : ''}> Es viernes por la tarde, los chicos y las chicas de 1°, 2°, 3° y 4° año son los únicos cursos que
            quedan en la escuela. Están a punto de finalizar su día de clase, guardando las carpetas en sus
            mochilas, cuando algo misterioso sucede: todas las ventanas y puertas de la escuela se cierran
            de golpe. Docentes y directivos desaparecen. Solo las y los estudiantes quedan adentro. Nadie
            puede salir. No hay forma de comunicarse con el exterior. De repente una voz se hace
            escuchar. Anuncia que la única forma de poder salir de la escuela y no quedarse allí todo el fin
            de semana es encontrando la contraseña de 4 dígitos que destrabará todas las salidas.
            <br/>
            </motion.p>
            <p> Una vez que se ha leído el texto, se explica la dinámica a los
            participantes.
            </p>
        </div>
    )
        
    
}