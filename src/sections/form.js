import React, {Component} from 'react';


class Form extends Component{

    constructor(){
      super();
      this.state = {
        inputName:'',
        inputTwitter:'@',
        inputTerminos:true 
      }
    }

    handleOnSubmit = ( e )=>{
        e.preventDefault();
        
        console.log( this.state.inputName, this.state.inputTwitter, this.state.inputTerminos );
    } 

    handleOnChange = ( e ) => {
      this.setState( { inputTerminos : e.target.checked } )
    }

    render(){
        return <form  onSubmit={ this.handleOnSubmit }>
                  <label htmlFor='name' >Name:</label>  
                  <input 
                    id = 'name'
                    name = 'userName'
                    placeholder = 'Ingrese el Nombre'
                    value={ this.state.inputName }
                    onChange={ e => this.setState( { inputName : e.target.value } ) }
                  />
                  <label>Twiter:</label>
                  <input 
                    id='twitter'
                    name='userAccount'
                    placeholder = 'Ingrese su cuenta de Twiter!!!!'    
                    value={ this.state.inputTwitter }   
                    onChange={ e => this.setState( { inputTwitter : e.target.value } ) }             
                  />
                  <label>Acepto</label>
                  <input type='checkbox' 
                    onChange={ this.handleOnChange}                    
                    checked = { this.state.inputTerminos } 
                     />
                  <button>Enviar</button>
               </form> 
    }

}

export default Form;