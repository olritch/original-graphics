import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
      return (
        <div>
        <div className="ui vertical left aligned segment">
        <div className="ui container">
          <h1 style={{ fontSize: '40px' }} className="ui header">
            About Us
            <div className="sub header" style={{ paddingTop: '20px' }}>
              Questions, need some help or have feedback? Fill out the form below and we'll get back to you as soon as we can.
            </div>
          </h1>
              Original Graphics aims to give you an exemplary customer service experience. We have been providing high quality photography services since 2015.  
              We specialize in wedding photography, aerial, family and pet portraits, often traveling to your destination to capture the perfect moment in the perfect place.  We will be there with you every step of the way to guarantee your special moments are captured forever.
<br></br>
To us photography is about people being real and then letting us paint a picture of that moment to remember it forever. This is the story that matters most: real people, real stories, real moments.
<br></br>  
<strong>We are incredibly fortunate to have a team of photographers who work with us on any given weekend. Please take a few minutes to get to know us.</strong>
<br></br>
We would love to meet with you by phone or in person and talk about your wedding, event, portrait session or video project. Please reach out to us through the Contact Page.
            </div>
          </div>
          <div className="ui divider" />
        </div>
      )
    }
}

export default AboutUs;
