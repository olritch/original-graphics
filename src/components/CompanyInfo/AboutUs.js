import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
      return (
        <div>
        <div className="ui vertical left aligned segment">
        <div className="ui text container">
          <h1 style={{ fontSize: '40px' }} className="ui header">
            About Us
          </h1>
              <p>
              Original Graphics aims to give you an exemplary customer service experience. We have been providing high quality photography services since 2015.
              We specialize in wedding photography, aerial, family and pet portraits, often traveling to your destination to capture the perfect moment in the perfect place.  We will be there with you every step of the way to guarantee your special moments are captured forever.
              </p>
              <p>
              To us photography is about people being real and then letting us paint a picture of that moment to remember it forever. This is the story that matters most: real people, real stories, real moments.
              </p>
              <p>
              <strong>We are incredibly fortunate to have a team of photographers who work with us on any given weekend. Please take a few minutes to get to know us.</strong>
              </p>
              <p>
              We would love to meet with you by phone or in person and talk about your wedding, event, portrait session or video project.
              </p>
              <div className="ui primary huge button">
              Contact Us
              </div>
            </div>
          </div>
          <div className="ui divider" />
        </div>
      )
    }
}

export default AboutUs;
