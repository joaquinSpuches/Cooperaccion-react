import React, {useState} from "react";
import NavBar from "./navBar";
import BurgerMenu from './burgerMenu'
import nodos from '../nodos_1.png'

export default function Header() {
    const [clicked, setClicked] = useState(false)
      const handleClick= ()=>
  {
      setClicked(!clicked)
  }
  
      return(
      <header className='header'>
        <img src={nodos}  style={{position:"absolute", maxWidth:'300px', zIndex:'3',right:20, top: 20,height:'57px'}} /> 
        <BurgerMenu clicked={clicked} handleClick={handleClick} />
        <NavBar setClicked={setClicked} clicked={clicked} handleClick={handleClick} />
        </header>
      )
  }