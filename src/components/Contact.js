import React, { Component } from 'react';

export default class Contact extends Component {
  render(){
    return(
      <div className="card mx-xl-5">
  <div className="card-body">
    <form>
      <h1>Contact Me!</h1>
      <p className="h4 text-center py-4"></p>
      <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light">Your name</label>
      <input type="text" id="defaultFormCardNameEx" className="form-control" />
      <br />
      <label htmlFor="defaultFormCardEmailEx" className="grey-text font-weight-light">Your email</label>
      <input type="email" id="defaultFormCardEmailEx" className="form-control" />
      <div className="text-center py-4 mt-3">
        <button className="btn btn-outline-purple" type="submit">Send<i className="fa fa-paper-plane-o ml-2"></i></button>
      </div>
    </form>
  </div>
</div>
    )
  }
}
