import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ANIMAL_IMAGES = {
    cat:'gato.pgn', 
    dolphin:'dolphin.pgn', 
    panda: 'panda.png'}

const ANIMALS = Object.keys( ANIMAL_IMAGES );    


class AnimalImage extends Component {

    /*constructor( props ){
        super( props );
        this.state = { src:  ANIMAL_IMAGES[this.props.animal] };
    }*/
    
    state = { src:  ANIMAL_IMAGES[this.props.animal] };

    componentWillReceiveProps( nextProps ){
        console.log( '1 componentWillReceiveProps' );
        console.log( nextProps );
        this.setState( { src :nextProps.animal });
    }
    
    shouldComponentUpdate( nextProps ){
        console.log( '2 shouldComponentUpdate' );
        console.log( 'anterior', this.props.animal );
        console.log( 'nuevo', nextProps.animal );
        return this.props.animal !== nextProps.animal;
    }
    
    render(){
        console.log('render');
        return <div>
                <h4>Select { this.props.animal }</h4>;
                <img 
                    src = { this.state.src}
                    alt={ this.state.animal }
                    width='250'
                />
             </div>
    }
}

AnimalImage.propTypes ={
    animal: PropTypes.oneOf( ANIMALS )
}

class ComponentWillReceiveProps extends Component {

    /*constructor( props ){
        super( props );
        this.state = {
            animal: 'cat'
        }
    }*/

    state = { animal: 'cat' }

    _renderizarButton = ( animal ) => {
        return  <button key={animal} onClick={ () => this.setState( { animal:animal } ) }  > {animal} </button>
    }

    render(){
        return  <div>
                    <h1>Ejemplo de  ComponentWillReceiveProps </h1>
                    {  ANIMALS.map( this._renderizarButton)  }                   
                    <AnimalImage animal={ this.state.animal} />
                </div>    
    }

}

export default ComponentWillReceiveProps;