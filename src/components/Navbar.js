import React, { Component } from 'react';

class Navbar extends Component {
  render() {

    let classes = this.props.imgName + " portfolio-img" ;

    return(
      <div>
        <h2>{ this.props.title }</h2>
        <h2>Welcome to Taylor's Portfolio!</h2>
        <p>Please scroll below!</p>
        <p>{ this.props.description }</p>
      </div>
    )
  }
}

export default Navbar;
