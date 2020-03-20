import React, {Component} from 'react';


class Form extends Component{

    handleOnSubmit = ( e )=>{
        e.preventDefault();
        const name = this.inputElement.value;
        const twitter = document.getElementById('twitter').value;
        console.log( name,twitter);
    } 

    handleOnChange( e ){
        console.log(e.target.checked);
    }

    render(){
        return <form  onSubmit={ this.handleOnSubmit }>
                  <label htmlFor='name' >Name:</label>  
                  <input 
                    id = 'name'
                    name = 'userName'
                    placeholder = 'Ingrese el Nombre'
                    ref = { inputElement => this.inputElement = inputElement}
                  />
                  <label>Twiter:</label>
                  <input 
                    id='twitter'
                    name='userAccount'
                    placeholder = 'Ingrese su cuenta de Twiter!!!!'                    
                  />
                  <label>Acepto</label>
                  <input type='checkbox' onChange={ this.handleOnChange} />
                  <button>Enviar</button>
               </form> 
    }

}

export default Form;