import React, { Component } from 'react';
import Render  from './sections/render';

class  App extends Component {

 
  render(){    

     return ( <div className = "App" >                                       
                  <h1> Fase Montaje Component Render  </h1>          
                  <Render/>  
              </div>
    );

  }
}

export default App;