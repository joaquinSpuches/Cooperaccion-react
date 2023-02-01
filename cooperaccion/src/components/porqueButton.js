import React, {useState} from "react";

export default function PorqueButton (props){

    
    const handleClick= ()=>
    {
        props.setClicked(!props.clicked)
      
    }
    return(
        <div id="porqueButton" onClick={handleClick} className="porqueButton">
        <div 
     style={{position: 'absolute',
             width: '25px',
             height: '3px',
             background: '#25418C',
             borderRadius: '2px',
             transform: 'rotate(-90deg)'}}
            >
            </div>
             <div   style={{position: 'absolute',
            width: '25px',
              height: '3px',
              background: '#25418C',
              borderRadius: '2px'}}
             >
             </div>
        </div> 
    )
}