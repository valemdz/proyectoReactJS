import React, { Component } from 'react';
import ComponentWillReceiveProps  from './sections/componentWillReceiveProps';

class  App extends Component {

 
  render(){    

     return ( <div className = "App" >                                                         
                  <ComponentWillReceiveProps/>  
              </div>
    );

  }
}

export default App;