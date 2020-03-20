import React, { Component } from 'react';
import Box from './box';
import PropTypes from 'prop-types';

class Article extends Component{

    static propTypes= {
        author:PropTypes.string.isRequired
    }

    render(){

        const { titulo, autor, date, children }  = this.props;  

        return <div>
            <h1>{titulo}</h1>
           { autor &&  <h2>Escrito por {autor}</h2> }
            <Box>
                {date}
            </Box>
            <article>
                {children}
            </article>    
        </div>
    }

}

export default Article;