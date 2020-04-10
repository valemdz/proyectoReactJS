import React, { Component } from 'react';
import PropTypes from 'prop-types';
import{ Link } from 'react-router-dom';

const API_KEY='84781d47';

class Detail extends Component{

    static propTypes ={
       // id:PropTypes.string.isRequired
       match:PropTypes.shape({
           params:PropTypes.object,
           isExact:PropTypes.bool,
           path:PropTypes.string,
           url:PropTypes.string
       })
    }

    state = { movie:{}}

    fetchMovie( id ){
        const query = `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`; 
        fetch( query )
        .then( res => res.json())
        .then( data =>{
            this.setState( { movie:data } );
            console.log( this.state.movie);
        })       
    }

    componentDidMount() {
        
        //const { id } = this.props;

        console.log( this.props);

        const id = this.props.match.params.id;
        this.fetchMovie( id );
    }

    _goBack(){
        window.history.back();
    }

    render(){

        const { Poster, Title, Director, Actors, Metascore} = this.state.movie;
            return <div className='MoviesLis-item' >
                        <div className='box'>
                                    <article className='media'>
                                    <div className='media-left'>
                                        <img 
                                                className='imagen-w80'   
                                                src={Poster}
                                                alt={Title}
                                                />
                                        
                                    </div>
                                    <div className='media-content'>
                                        <div className='content'>
                                            <p>
                                                <strong>{ Title }</strong>  
                                            </p> 
                                            <p>
                                                Director: <small> { Director }</small>
                                            </p> 
                                            <p> 
                                                Actors: {Actors}           
                                            </p>    
                                            <p>
                                                Metascore: { Metascore}
                                            </p>    
                                            <Link to="/" >
                                                Volver
                                            </Link>
                                        </div>
                                        
                                    </div>
                                    </article>
                            </div>
                    </div>        
    }   
}

export default Detail;