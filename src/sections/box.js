import React, { Component } from 'react';


class Box extends Component{

    render(){
        return  <div style={{ border:'1px solid red', margin:5, padding:5 }}>   
                     { this.props.children }
                </div>
    }
}

export default Box;