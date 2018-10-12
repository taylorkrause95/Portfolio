import React, { Component } from 'react';

class Resume extends Component {
  render() {

    let classes = this.props.imgName + " portfolio-img" ;

    return(
      <div>
        <h2>{ this.props.title }</h2>
        <h2>Resume</h2>
        <h3>Technical Skills</h3>
        <p>Languages: HTML, CSS & JavaScript</p>
        <p>Languages: HTML, CSS & JavaScript</p>
        <p>Languages: HTML, CSS & JavaScript</p>
        <h2>Experience</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non laboro, inquit, de nomine. Respondent extrema primis, media utrisque, omnia omnibus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non laboro, inquit, de nomine. Respondent extrema primis, media utrisque, omnia omnibus.</p>
        <p>{ this.props.description }</p>
      </div>
    )
  }
}

export default Resume;
