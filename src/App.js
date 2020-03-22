import React, { Component } from 'react';
import ComponentWillMount from './sections/componentWillMount';

class  App extends Component {

 
  render(){    

     return ( <div className = "App" >                                       
                  <h4> Fase Montaje Component Will Mount </h4>          
                  <ComponentWillMount/>  
              </div>
    );

  }
}

export default App;