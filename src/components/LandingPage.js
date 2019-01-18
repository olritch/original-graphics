import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="ui inverted vertical masthead center aligned segment">
          <div
            style={{ padding: "160px 0px 160px 0px" }}
            className="ui container"
          >
            <h1 style={{ fontSize: "80px" }} className="ui inverted header">
              Original Graphics
            </h1>
            <h2>
              The Best Place For All Your Photography And Videography Needs.
            </h2>
            <div className="ui huge primary button">
              Get Started
              <i className="right arrow icon" />
            </div>
          </div>
        </div>
        <div className="ui vertical stripe segment">
          <div className="ui middle aligned stackable grid container">
            <div className="row">
              <div className='eight wide column'>
                das
              </div>
            </div>
            <div className="row">
              <div className='six wide right floated column'>
                dasdas
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
