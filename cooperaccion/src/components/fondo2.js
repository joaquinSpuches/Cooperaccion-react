import React from "react";
import '../style2.css';
import logos from '../logo.png'
import tablero from '../tablero.png'
import {motion, useScroll} from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import articles from './articlesFondo2'
import Objetivo  from "./objetivo";
function Fondo2 (props)  {
    
        // const [width,setWidth] = useState(0)
        // const carousel = useRef()
        // useEffect(()=>{
        //     console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
        //     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
        // })
        // const  [puntito,setPuntito] = useState(0)
        // const { scrollXProgress } = useScroll({ container: ref });
        // const { scrollYProgress } = useScroll();     

        return(
            <div className="fondo2" >
            <br/>
            <br/>
            <br/>
            <br/>
            <h3 className="title" style={{marginTop: '100px'}}> EL JUEGO </h3>
            <div id="elJuego" >
                <motion.div  className="carrousel">

                <motion.article className="articleJuego">
                {/* <motion.article drag='x' dragConstraints={{right: 0,left: -width}} className="articleJuego"> */}

                    {articles.map(e =>{
                     return(
                       <motion.div className="itemFondo2" key={Math.random()}> {e.title} </motion.div>
                     )
                    })}
                   
                    </motion.article>
                </motion.div>
            <div style={{ paddingBottom: '50px', display: 'flex',justifyContent: 'space-around'}}>
                {/* <div id="objetivoP" className="puntito seleccionado" style={{width:'4px'}}></div>
                <div id="objetivoP" className="puntito " style={{width:'4px'}}></div>
                <div id="objetivoP" className="puntito " style={{width:'4px'}}></div>
                <div id="objetivoP" className="puntito " style={{width:'4px'}}></div>
                <div id="objetivoP" className="puntito " style={{width:'4px'}}></div>
                <div id="objetivoP" className="puntito " style={{width:'4px'}}></div>
                <div id="objetivoP" className="puntito " style={{width:'4px'}}></div> */}
               
               {
      
               }
            </div>  
        </div>
        
    </div>

    )

}


export default Fondo2