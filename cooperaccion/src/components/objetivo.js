import '../style2.css';
import {motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
export default function Objetivo () {
    const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });
    return(
        <div className="articles example">
            
 <h1><i>OBJETIVO</i></h1>
 
                    <p>Cooperacción es un juego de escape.
                        El objetivo es poder salir de una situación ( “escapar”) a través de cumplir 4 misiones. <br/>
                        <br/>
                    
                    Se parte de una situación que se comparte con los participantes y se los desafía a resolverla antes de que acabe el tiempo pautado.La dinámica del juego busca crear un espíritu de colaboración dentro de cada grupo y entre grupos; no de competencia.Por eso el objetivo es “salir” todos juntos, no que un grupo gane o se salve solo, de hecho esa opción no es posible</p>
                  
     
        </div>
    )
        
    
}