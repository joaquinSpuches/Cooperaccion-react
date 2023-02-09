import React,{useState} from "react";
import '../style2.css';
import logos from '../logo.png'
import Porque from './porque'
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
            <div className="fondo"   >
            
    
         <div style={{height:' 100vh'   , display: 'flex', alignItems: 'center',justifyContent:'center' ,padding: '20px'}} >
            <img  className='Logo'src={logos} alt="logos"/>
             </div>
             
             <h3 className="title"   > POR QUÉ Y PARA QUÉ </h3>
       
            <Porque clicked={clicked} setClicked={setClicked} />    
            
         </div>
        
        )
    }



export default Fondo1