import React, {Component} from 'react';

class ComponentWillMount extends Component{

    constructor( props ){
        super(props);
        this.state={
            texto:'Texto desde el constructor'
        }
        console.log('Constructor');
    }

    componentWillMount(){
        console.log('paso por el will mount');
    }

    handleButton = () => {
        this.setState( {texto:'El button cambio el texto'} )
    }

    render(){
        console.log('Render');
        return <div>
               <h1>{ this.state.texto }</h1>
               <button onClick= { this.handleButton } > Probar ComponentWillMount</button>
            </div>
    }
}

export default ComponentWillMount;