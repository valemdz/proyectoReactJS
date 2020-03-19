import React, { Component } from 'react';
import cars from '../data/cars.json';

class ListItem extends Component {

    // La prop key es inaccesible desde el padre x eso utilizamos 
    // otra props llamada id

    render(){   
        
        const { car, id } = this.props;

        return <li>
                    <p>{id} </p>
                    <p><strong>Name:</strong> { car.name}</p>
                    <p><strong>Company:</strong> { car.company} </p>
               </li>
    }
}

export default class List extends Component {       

    render(){
        return <ul> 
                { cars.map( ( c ) =>   <ListItem
                                            car={ c }
                                            key={ c.id } 
                                            id={ c.id }    />  ) }
                </ul> 
    }
}

