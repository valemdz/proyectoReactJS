import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello( props ){
// return <h2>{props.titulo}</h2>
// }

// const Hello = (props) => <h2>{props.titulo}</h2>;

class Hello extends Component{
    render(){
        return  <h2>{ this.props.titulo }</h2>; 
    }
}

class TituloEspecial extends Component{
    render(){
    return <h5>{ this.props.texto }</h5>
    }
}

TituloEspecial.defaultProps = {
    texto:' Default texto en h5'
}

class Texto extends Component{
    render(){

        const {
            arrayOfNmbers,
            isActivated,
            number,
            multiply,
            objectWithInfo,
            texto,
            titulo
        } = this.props;

        const textoSegunBoolean = isActivated? 'Verdadero!!!':'Falso';
        const mappedNumbers = arrayOfNmbers.map( multiply );

        return <div> 
                {titulo}
               <p>{ texto }</p>
               <p>{ number }</p>
               <p>{ textoSegunBoolean }</p> 
               <p>{ mappedNumbers.join(', ') }</p>
               <p>{ JSON.stringify( objectWithInfo ) } </p>
               </div>
    }
}

function App() {
    return ( <div className = "App" >
            <header className = "App-header" >

                
                <TituloEspecial texto='ya tiene valor el h5' />

                <Texto 
                    arrayOfNmbers={[2,4,8]}
                    isActivated
                    number={2}
                    multiply={ ( n ) => n*-1}
                    objectWithInfo= {{nombre: 'Valeria', apellido: 'Torres', 'edad':41 }}
                    texto='Deberias aprender ReactJS' 
                    titulo={ <h1>Este es el titulo en h1 </h1>}		 />

            </header> 
		</div>
    );
}

export default App;