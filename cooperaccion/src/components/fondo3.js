import React,{Component} from "react";
import {motion} from 'framer-motion'
import '../style2.css';
import logos from '../logo.png'
import tablero from '../tablero.png'
import Fondo3Article from "./fondo3Article";
class fondo3 extends Component {
    
    render(){
        return(
            <div className="fondo3" style={{height: 'auto'}}>
            <br/>
            <br/>
            <br/>
            <br/>
            <h3 className="title" > ¿Y DESPUES?</h3>
        <div id="yDespues" >
         
            
            <h1 style={{paddingTop: '200px'}}><i>PROPUESTA EDUCATIVA PARA REALIZAR DESPUES DEL JUEGO</i></h1>
            <p>Luego de jugar, es importante destinar un tiempo para
                 reflexionar sobre cómo se ha jugado y
                  lo que se ha aprendido. <br/>
                    <br/>
                  Sugerimos entonces la siguiente secuencia de trabajo:</p>
                  <motion.div id="circulo" animate={{x:-50}}>
                      <ul id="ulDespues">
                          <a href="#como">¿Cómo jugamos?</a>
                          <a href="#aprendimos">¿Qué aprendimos del cooperativismo?</a>
                          <a href="#aporte">¿Qué nos aporta y en qué puedo/podemos aplicarlo?</a>
                      </ul>
                  </motion.div>
            <Fondo3Article/>
    </div> 
</div>
    )
}
}


export default fondo3