import React, { Component } from 'react';


class Main extends Component {
  render() {

    let classes = this.props.imgName + " portfolio-img" ;

    return(
      <div class="homepagetwo">
        <h2>My Projects</h2>
        <h3>These are some of my projects:</h3>
        <p>Dog Finder - A way to look through dogs that are available for adoption.</p>
        <p>Synergy - A way to find a workout partner that is in your area and has similiar interests to you.</p>
        <p>{ this.props.description }</p>
      </div>
    )
  }
}

export default Main;
