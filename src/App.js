import React, { Component } from 'react';
import Article from './sections/article';


class  App extends Component {

   
    render(){

      return ( <div className = "App"   >

        <h4>Practica con Props Children  </h4>
        
        <Article               
              date = { new Date().toDateString() } 
              titulo='Atencion Corona Virus'>              
              Parece ser que el <strong>Corona Virus </strong>
              es mas jodido de lo que creiamos ..............
              hay que esperar en cuarentena<strong>total!!!!!!!!!!!!!!!!!!</strong> 
        </Article>                
        <Article 
              autor='Valeria'
              date = { new Date().toDateString() } 
              titulo='Articulo numero 2'>
              Parece ser que el <strong>Corona Virus </strong>
              es mas jodido de lo que creiamos ..............
              hay que esperar en cuarentena<strong>total!!!!!!!!!!!!!!!!!!</strong> 
        </Article>              
        <Article 
              autor='Valeria'
              date = { new Date().toDateString() } 
              titulo='Otro Articulo'>
              Parece ser que el <strong>Corona Virus </strong>
              es mas jodido de lo que creiamos ..............
              hay que esperar en cuarentena<strong>total!!!!!!!!!!!!!!!!!!</strong> 
        </Article>          
        
            
      </div>
      );
    }  
}
export default App;