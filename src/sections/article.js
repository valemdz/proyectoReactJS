import React, { Component } from 'react';
import Box from './box';

class Article extends Component{

    render(){
        return <div>
            <h1>{this.props.titulo}</h1>
            <h2>{this.props.autor}</h2>
            <Box>
                {this.props.date}
            </Box>
            <article>
                {this.props.children}
            </article>    
        </div>
    }

}

export default Article;