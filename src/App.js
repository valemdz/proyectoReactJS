import React, { Component } from 'react';
import List from './sections/lists';



class  App extends Component {

  render(){    

     return ( <div className = "App" >               
                        
            <h4>Trabajando con listas  de objetos </h4>
            <List/>
      
		</div>
    );

  }
}

export default App;