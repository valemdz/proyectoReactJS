import React, { Component } from 'react';
import './App.css';
//import Condicional from './sections/conditional';



class  App extends Component {

  render(){

     const numbers  = [1,1,3,4,5];

     return ( <div className = "App" >               
                        
            <h4>Trabajando con listas</h4>
            { numbers.map( ( nu, index ) =>  <p key={index} >Soy el numero { nu }</p>  ) }
      
		</div>
    );

  }
}

export default App;