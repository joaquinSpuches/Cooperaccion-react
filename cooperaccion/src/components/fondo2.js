import React from "react";
import '../style2.css';
import Slider from "./slider";

function Fondo2 (props)  {
    
//          const [width,setWidth] = useState(0)
//          const carousel = useRef()

//  useEffect(()=>{
//             console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
//             setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
         
//          })


        return(
            <div className="fondo2" >
                <br/>
                <br/>
                <br/>
                <br/>
                <h3 className="title" style={{marginTop: '100px'}}> EL JUEGO </h3>
                <div id="elJuego" style={{paddingTop: '200px'}} >
                <Slider/>
                </div>
        
            </div>

    )

}


export default Fondo2