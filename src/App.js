import React, { Component } from 'react';
import './App.css';
import Condicional from './sections/conditional';


class  App extends Component {

    handleClick( e ) {
      console.log( e );
      console.log( e.nativeEvent );      
      alert('Manejado con un handle');
    }

    render(){

      return ( <div className = "App" >

        <h4>Practica de Eventos</h4>

        <button onClick = { this.handleClick } > Haz click aqui </button>
            
      </div>
      );
    }  
}

export default App;