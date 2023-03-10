import React from "react";
import { useState,useEffect } from "react";
import {motion} from 'framer-motion'
export default function PorqueArticle(props) {
    const x = {opacity:1, scale : 1
      }
    const y = {opacity:0,scale:0
      
    }


    return(
        <motion.div animate={props.clicked ? x : y}    id="art" className={`porqueArticle ${props.clicked ? 'porqueArticle-active':''} `}>
                 <ul >
                     <li>Porque en un mundo cada vez más desafiante y complejo es clave hablar con ellos sobre los valores que reflejan nuestros comportamientos y decisiones; poder reflexionar acerca del mundo que queremos crear y cómo desde nuestro accionar somos constructores de ese mundo.</li>
                     <li>Porque el cooperativismo puede ser inspirador para encontrar ellos mismos formas de solucionar conflictos: problemas de convivencia en el aula, en la escuela, en su barrio. Visualizar el camino de la cooperación como una alternativa de resolución de conflictos y además como una forma de satisfacer las necesidades de cada uno que beneficia a todos porque no busca “ganar” a costa de los demás.</li>
                     <li>Porque el aprendizaje de los principios y valores del cooperativismo es un contenido prioritario (está incluido en los NAP -Núcleos de Aprendizaje Prioritarios- definidos por el Consejo Federal de Educación).</li>
                     <li>Porque la incorporación de conceptos de cooperativismo en las escuelas esta referido en el artículo 90 de la Ley de Educación.</li>
                 </ul>
             </motion.div>
    )
    
}

