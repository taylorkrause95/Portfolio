import React, { Component } from 'react';

class Footer extends Component {
  render() {

    let classes = this.props.imgName + " portfolio-img" ;

    return(
      <div>
        <h2>{ this.props.title }</h2>
        <h4>Taylor@Brainstormtech.io</h4>
        <h4>Www.GitHub.com/taylorkrause95</h4>
        <p>{ this.props.description }</p>
      </div>
    )
  }
}

export default Footer;
