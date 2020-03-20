import React, { Component } from 'react';
import './App.css';
//import Condicional from './sections/conditional';


class  App extends Component {

    constructor(){
      super();
      this.state ={
        mouseX:0,
        mouseY:0
      }
      // Un forma
      //this.handleMouseMove = this.handleMouseMove.bind(this)
    }

    handleClick( e ) {
      console.log( e );
      console.log( e.nativeEvent );      
      alert('Manejado con un handle');
    }

    handleMouseMove = ( e ) => {
        const { clientX, clientY } =  e;
        //this.setState( { mouseX:clientX,  mouseY:clientY } );
        this.setState({
          mouseX:clientX,
          mouseY:clientY
        } );
    }

    render(){

      return ( <div className = "App"   >

        <h4>Practica de Eventos</h4>

        <button onClick = { this.handleClick } > Haz click aqui </button>

          <div style={{ border:'1px solid red', marginTop:10, padding:10 }} 
              onMouseMove = { this.handleMouseMove } >
            {this.state.mouseX},{this.state.mouseY}
          </div>
            
      </div>
      );
    }  
}

export default App;