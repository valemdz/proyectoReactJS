import React, {Component} from 'react';


class Form extends Component{

    handleFormClick = ( e )=>{
        e.preventDefault();
        const name = this.inputElement.value;
        const twitter = document.getElementById('twitter').value;
        console.log( name,twitter);
    } 

    render(){
        return <form >
                  <label htmlFor='name' >Nombre:</label>  
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
                    placeholder = 'Ingrese su cuenta de Twiter'                    
                  />
                  <button onClick={this.handleFormClick} >Enviar</button>
               </form> 
    }

}

export default Form;