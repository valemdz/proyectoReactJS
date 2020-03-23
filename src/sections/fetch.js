import React, { Component } from 'react';
 
class FetchExample extends Component{

    state = {   bpi:{}   }

    /*constructor( props ){
        super(props);
        this.state = {
            bpi:{}
        }
    }*/


    componentDidMount(){

        fetch(' https://api.coindesk.com/v1/bpi/currentprice.json')
        .then( res => res.json() )
        .then( data =>{
            const { bpi } = data;
            this.setState ( {  bpi:bpi  }); 
        } );  

    }

    _renderCurrencies(){
        console.log( this.state.bpi );

        const bpi = this.state.bpi;

        const currencies = Object.keys(bpi);

        return currencies.map( currency => {
            return <div key={currency} >
                <span > 1 BTI es {  bpi[ currency ].rate } {currency}</span>
            </div>
        }) 

        

    }


    render(){
        return   <div>
               <h4> Ejemplo de Fetch Api</h4>
                    { this._renderCurrencies() }
            </div>
    }

}

export default FetchExample;

