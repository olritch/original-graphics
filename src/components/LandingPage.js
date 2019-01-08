import React, { Component } from 'react';

class LandingPage extends Component {
    render() {
        return (
          <div className='ui inverted vertical masthead center aligned segment'>
            <div style={{padding: '160px 0px 160px 0px'}} className='ui container'>
              <h1 style={{fontSize: '80px'}} className='ui inverted header'>
                Original Graphics
              </h1>
              <h2>The Best Place For All Your Photography And Videography Needs.</h2>
              <div className='ui huge primary button'>Get Started
                <i className='right arrow icon'></i>
              </div>
            </div>
          </div>
        )
    }
}

export default LandingPage;
