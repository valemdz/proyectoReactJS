import React, { Component } from 'react';


class ComponenteA extends Component{
    render(){
        return <p>Usted esta en el comp A</p>
    }
}

class ComponenteB extends Component{
    render(){
        return <p>Usted esta en el comp B</p>
    }
}

class ConditionalSection extends Component{

    constructor(){
        super();
        this.state = { mostrarA: false }
    }

    render(){
        return <div>
                  <h4>Renderizando el Conditional </h4>
                  { this.state.mostrarA 
                    ? <ComponenteA /> 
                    : <ComponenteB /> }
               </div> ;
    }
}

export default ConditionalSection;