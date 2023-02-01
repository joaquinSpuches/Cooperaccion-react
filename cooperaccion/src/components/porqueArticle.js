import React from "react";

export default function porqueArticle(props) {

    return(
        <div id="porqueArticle" className={`porqueArticle ${props.clicked ? 'porqueArticle-active':''} `}>
                 <ul>
                     <li>Porque en un mundo cada vez más desafiante y comple-jo es clave hablar con ellos sobre los valores que reflejan nuestros comportamientos y decisiones que tomamos; poder reflexionar acerca del mundo que queremos crear y cómo desde nuestro accionar somos constructores de ese mundo.</li>
                     <li>Porque el cooperativismo puede ser inspirador para en-contrar ellos mismos formas de solucionar conflictos que viven actualmente: problemas de convivencia en el aula, en la escuela, en su barrio. Visualizar el camino de la cooperación como una alternativa de resolución de conflictos y además como una forma de satisfacer las necesidades de cada uno que beneficia a todos porque no busca “ganar” a costa de los demás.</li>
                     <li>Porque el aprendizaje de los principios y valores del coo-perativismo es un contenido prioritario (está incluido en los NAP -Núcleos de Aprendizaje Prioritarios- definidos por el Consejo Federal de Educación).</li>
                     <li>Porque la incorporación de conceptos de cooperativismo en las escuelas esta referido en el artículo 90 de la Ley de Educación.</li>
                 </ul>
             </div>
    )
    
}

