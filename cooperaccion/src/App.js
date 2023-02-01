import logo from './logo.svg';
import './style2.css';
import NavBar from './components/navBar';
import Fondo1 from './components/fondo1'
import Fondo2 from './components/fondo2'
import Fondo3 from './components/fondo3'
import Header from './components/header'
import React,{useState} from 'react';

function App() {

  return (
    <div className="App">
        <Header />
       
        <Fondo1/>
        <Fondo2/>
        <Fondo3/>


      
    </div>
  );
}

export default App;
