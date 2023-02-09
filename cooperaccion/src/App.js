import logo from './logo.svg';
import './style2.css';
import NavBar from './components/navBar';
import tablero from './tablero.png'
import Fondo1 from './components/fondo1'
import Fondo2 from './components/fondo2'
import Fondo3 from './components/fondo3'
import Header from './components/header'
import React,{useState} from 'react';

function App() {
  const hide = false
  return (
    <div className="App">
        <Header />
       
        <Fondo1/>
        <img src={tablero} alt="tablero" className={`${hide ? 'hide':''}`} style={{right: '20vw', marginTop: '-100px',maxWidth: '300px' ,position: 'absolute', width: '50vw', boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.25)', transform: 'rotate(-27.29deg)'}}/>
        <Fondo2/>
        <Fondo3/>


      
    </div>
  );
}

export default App;
