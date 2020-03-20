import React, { Component } from 'react';
import './App.css';
import Condicional from './sections/conditional';


function App() {
    return ( <div className = "App" >

      <h4>Practica de Eventos</h4>

      <button onClick = { () => { return alert('Haz click aqui') } } > Haz click aqui </button>
          
		</div>
    );
}

export default App;