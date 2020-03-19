import React, { Component } from 'react';


class LoginButton extends Component{
    render(){
        return <button>Iniciar Sesion</button>
    }
}

class LogoutButton extends Component{
    render(){
        return <div>
                 <p>Bienvenido!!!</p>
                 <button>Salir del Sistema </button> 
                </div> 
    }
}

class ConditionalSection extends Component{

    constructor(){
        super();
        this.state = { isUserLogged: false }
    }

    render(){
        return <div>
                  <h4>Renderizando el Conditional </h4>
                  { this.state.isUserLogged 
                    ?  <LogoutButton />
                    : <LoginButton />  }
               </div> ;
    }
}

export default ConditionalSection;