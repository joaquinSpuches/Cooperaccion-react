import React,{useState} from "react";
import '../style2.css';
import logos from '../logo.png'

import Space from './space'
import PorqueArticle from './porqueArticle'
import PorqueButton from './porqueButton'
function Fondo1 () {




        const [clicked, setClicked] = useState(false)
        const handleClick= ()=>
    {
        setClicked(!clicked)
    }
        return(
            <div className="fondo">
            
    
         <div style={{height:' 100vh'   , display: 'flex', alignItems: 'center', padding: '20px'}} >
            <img  className='Logo'src={logos} alt="logos"/>
             </div>
             
             <h3 className="title"  > POR QUÉ Y PARA QUÉ </h3>
         <div id={`${clicked ? 'porqueActive':'porque'}`}  >
                 
                 <h1> <i>COOPERACCIÓN </i><Space/> tiene  como propósito promover los valores del cooperativismo 
                     en la comunidad escolar, dar a conocer sus principales características, 
                 sus principios y su historia.</h1>
                 <br/><br/><br/>
                 <p>
                     ¿Por qué abordar el tema del cooperativismo con estudiantes en la escuela secundaria?
                divz
                 </p>
                
            <PorqueButton clicked={clicked} setClicked={setClicked} />
            <PorqueArticle clicked={clicked} />
         </div>
         </div>
         
        )
    }



export default Fondo1