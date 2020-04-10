import React from 'react';
import PropTypes from 'prop-types';

import {  Link  } from "react-router-dom";

const Movie = ( {id,title,poster,year} ) => <Link to = {`/detail/${id }`} className="box" >
                                <article className="media">   
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>{ title }</strong>  
                                            </p> 
                                            <p>
                                                <small>{ year }</small>
                                            </p>                                               
                                            <p>    
                                                <img
                                                    src = { poster }
                                                    alt= { title }
                                                />
                                            </p>    
                                        
                                    </div>  
                                  </div>     
                                </article>
                             </Link>
    
    Movie.propTypes = { id: PropTypes.string.isRequired,
                        title:PropTypes.string.isRequired,
                        poster:PropTypes.string.isRequired,
                        year:PropTypes.string.isRequired
                        }   
    

function MoviesList( { movies } ){    

    return(  <div className='MoviesList'>
                { 
                    movies.map( movie  =>
                    <div className='MoviesLis-item' 
                        key={ movie.imdbID } >    
                        < Movie 
                            id= { movie.imdbID }
                            title= { movie.Title }
                            year = { movie.Year }
                            poster = { movie.Poster }
                             />   
                    </div> )   
                }
             </div>
     )

}

MoviesList.propTypes = { movies:PropTypes.array}

export default MoviesList;


