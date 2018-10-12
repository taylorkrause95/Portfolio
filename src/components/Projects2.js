import React, { Component } from 'react';

class Projects2 extends Component {
  render() {

    let classes = this.props.imgName + " portfolio-img" ;

    return(
      <div>
        <p>{ this.props.description }</p>
      </div>
    )
  }
}

export default Projects2;
