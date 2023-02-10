import React from "react";
import { motion } from "framer-motion";
import ComoJugamos from "./comoJugamos";
import QueAprendimos from './queAprendimos'
import QueAporta from "./queAporta";
export default function fondo3Article (props){

    return(
        <div>
            
           <ComoJugamos clicked={props.clicked1} />
           <QueAprendimos clicked={props.clicked2} />
           <QueAporta clicked={props.clicked3} />
        </div>
    )
}