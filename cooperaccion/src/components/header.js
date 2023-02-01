import React, {useState} from "react";
import NavBar from "./navBar";
import BurgerMenu from './burgerMenu'

export default function Header() {
    const [clicked, setClicked] = useState(false)
      const handleClick= ()=>
  {
      setClicked(!clicked)
  }
  
      return(
      <header className='header'>
        <BurgerMenu clicked={clicked} handleClick={handleClick} />
        <NavBar setClicked={setClicked} clicked={clicked} handleClick={handleClick} />
        </header>
      )
  }