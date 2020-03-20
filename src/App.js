import React, { Component } from 'react';
import Box from './sections/box';


class  App extends Component {

   
    render(){

      return ( <div className = "App"   >

        <h4>Practica con Props Children  </h4>
        <Box>
          Aqui va el primer mensaje!!!
        </Box>  
        <Box>
          Aqui va el SEGUNDO mensaje!!!
        </Box>  
       
            
      </div>
      );
    }  
}
export default App;