import React, { Component }  from 'react';

const API_KEY='84781d47';

class SearchForm extends Component{

    state= { inputSearch:'' }

    handleSearch = ( e ) => {
        e.preventDefault();                
        this._callApiMovies();
    }   

    _callApiMovies(){
        const query = 'http://www.omdbapi.com/?s=' + this.state.inputSearch + '&page=1&apikey=' + API_KEY;
        console.log( query );

        fetch( query )
         .then( res => res.json() )
         .then( data => {            
            const { Search= [] , totalResults="0" } = data;
            console.log( Search, totalResults );          
            this.props.onResults( Search );  
            
          });
    }

    render(){
        return <form onSubmit={ this.handleSearch }>
                    <div className='field has-addons'>
                        <div className='control'>
                        <input
                            className='input'
                            id='searchMovie' 
                            name='search'
                            placeholder='Movie to search'
                            value={ this.state.inputSearch }
                            onChange={ (e) => { this.setState( { inputSearch : e.target.value } ) } }
                            />
                        </div>
                        <div className='control'>
                        <button className="button is-success">Search</button>   
                        </div>
                    </div>                    
               </form>    
    }


}

export default  SearchForm;