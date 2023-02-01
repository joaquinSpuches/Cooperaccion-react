import React,{Component} from "react";
import '../style2.css';
import logos from '../logo.png'
import tablero from '../tablero.png'

class fondo2 extends Component {
    
    render(){
        return(
            <div className="fondo2" >
            <br/>
            <br/>
            <br/>
            <br/>
            <h3 className="title" style={{marginTop: '100px'}}> EL JUEGO </h3>
            <div id="elJuego" >
                <article id="objetivo" className="articleJuego">
                    <h1><i>OBJETIVO</i></h1>
                    <p>Cooperacción es un juego de escape.
                        El objetivo es poder salir de una situación ( “escapar”) a través de cumplir 4 misiones. <br/>
                        <br/>
                    
                    Se parte de una situación que se comparte con los participantes y se los desafía a resolverla antes de que acabe el tiempo pautado.La dinámica del juego busca crear un espíritu de colaboración dentro de cada grupo y entre grupos; no de competencia.Por eso el objetivo es “salir” todos juntos, no que un grupo gane o se salve solo, de hecho esa opción no es posible</p>
                
            </article>
            <div style={{ paddingBottom: '50px', display: 'flex',justifyContent: 'space-around'}}>
                <div id="objetivoP" className="puntito seleccionado" style={{width:'4px'}}></div>
                <div id="objetivoP" className="puntito " style={{width:'4px'}}></div>
                <div id="objetivoP" className="puntito " style={{width:'4px'}}></div>
                <div id="objetivoP" className="puntito " style={{width:'4px'}}></div>
                <div id="objetivoP" className="puntito " style={{width:'4px'}}></div>
                <div id="objetivoP" className="puntito " style={{width:'4px'}}></div>
                <div id="objetivoP" className="puntito " style={{width:'4px'}}></div>
               
            </div>  
        </div>
        
    </div>

    )
}
}


export default fondo2