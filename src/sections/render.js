import React, {Component} from 'react';


const HelloRender = (props)=><h5>Hola Render!!! </h5>

class Render extends Component {
    constructor( props ){
        console.log('constructor');
        super( props);
        this.state = {
            mensajeInicial:'Mje desde el constructor'
        }
    }

    // render(){
    //     console.log('render');
    //     return [
    //         <h5 key='1' >Ejemplo de render con array </h5>,
    //        <HelloRender key='2'/>,
    //        <HelloRender key='3' />,
    //        <h5 key='4'>Fin</h5>
    //     ]
    // }

    render(){
        console.log('render');
        return null
    }

}


export default Render