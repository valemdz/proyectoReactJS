import React, { Component } from 'react';

class  App extends Component {

  /*constructor( ...params) {
    super(...params);
  }*/

  constructor( props ){

    /// Aca no se puede usar this.setState -> para actualizar un estado xq todavis no se ha 
    // creado el componente
    super(props);
    this.state = {
      mensaje:'Este es un mensaje del constructor'
    }

    //Hacemos el bind del metodo 
    //this.handleButton = this.handleButton.bind( this );
    //Tbien podemos hacerlo con arrow function
  }

  /*handleButton(){
    this.setState( { mensaje:'Se hizo click en el button '})
  }*/

  handleButton = () => {
    this.setState( { mensaje:'Se hizo click en el button '})
  }


  render(){    

     return ( <div className = "App" >                                       
                  <h4> Fase Montaje Constructor </h4>          
                    <p>{ this.state.mensaje }</p>       
                    <button onClick={ this.handleButton } > Cambiar Mensaje  </button>
              </div>
    );

  }
}

export default App;