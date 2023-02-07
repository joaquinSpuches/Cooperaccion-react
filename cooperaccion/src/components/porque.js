import React from "react";
import Space from './space'
import PorqueArticle from './porqueArticle'
import PorqueButton from './porqueButton'

export default function Porque (props){

        return (
            <div id={`${props.clicked ? 'porqueActive':'porque'}`} style={{paddingTop: '200px'}} >
                 
            <h1> <i>COOPERACCIÓN </i><Space/> tiene  como propósito promover los valores del cooperativismo 
                en la comunidad escolar, dar a conocer sus principales características, 
            sus principios y su historia.</h1>
            <br/><br/><br/>
            <p>
                ¿Por qué abordar el tema del cooperativismo con estudiantes en la escuela secundaria?
           divz
            </p> 
            <PorqueButton clicked={props.clicked} setClicked={props.setClicked} />
            <PorqueArticle clicked={props.clicked} />
            </div>
        )
}

