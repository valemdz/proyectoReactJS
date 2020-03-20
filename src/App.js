import React, { Component } from 'react';
import './App.css';
//import Condicional from './sections/conditional';
import Form from './sections/form';


class  App extends Component {

   
    render(){

      return ( <div className = "App"   >

        <h4>Practica con Formularios </h4>
        <Form />
       
            
      </div>
      );
    }  
}
export default App;