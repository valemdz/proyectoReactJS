import React from 'react';

function BitCoinPrice( props){   

    
    function _renderCurrencies( props ){
            console.log( props.bpi );

            const bpi = props.bpi;

            const currencies = Object.keys(bpi);

            return currencies.map( currency => {
                return   <div key={ bpi[currency].code } >
                            <span > 1 BTI es {  bpi[currency].rate } {bpi[currency].code}</span>
                        </div>  
            })        

    }


    return (   <div>
        <h4> Ejemplo de Fetch Api</h4>
            { _renderCurrencies( props ) }
        </div> )  

    

}

export default BitCoinPrice;

// import React, { Component } from 'react';

// function BitCoinPrice( props){   

    
//     console.log( props.bpi );

//     const bpi = props.bpi;

//     const currencies = Object.keys(bpi);   
    
//     return (            
//         <section>
//              <h4> Ejemplo de Fetch Api</h4>
//              { currencies.map( (currency) => {
//                 return   <div key={ bpi[currency].code } >
//                         <span > 1 BTI es {  bpi[currency].rate } {bpi[currency].code}</span>
//              </div>  } ) }
//                  </section>  )      

// }

// export default BitCoinPrice;

// import React, { Component } from 'react';

// class BitCoinPrice extends Component{

//     _renderCurrencies(){
//         console.log( this.props.bpi );

//         const bpi = this.props.bpi;

//         const currencies = Object.keys(bpi);

//         return currencies.map( currency => {
//              return   <div key={ bpi[currency].code } >
//                          <span > 1 BTI es {  bpi[currency].rate } {bpi[currency].code}</span>
//                     </div>  
//         })        

//     }

//     render(){
     
//         return   <div>
//             <h4> Ejemplo de Fetch Api</h4>
//              { this._renderCurrencies() }
//          </div>   
//     }          

// }

// export default BitCoinPrice;