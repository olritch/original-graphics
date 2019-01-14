import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Map from '../../apis/googleMaps/Map';

class AboutUs extends Component {

  render() {
    return (
      <div className="column" style={{ padding: '15px 5px 5px 5px' }}>
        <div
          style={{ fontSize: '50px' }}
          className="ui grey center aligned huge header"
        >
          Original Graphics
        </div>

        <div className="ui vertical center aligned segment">
          <h1 style={{ fontSize: '40px' }} className="ui header">
            About Us
          </h1>
        </div>

        <div>
          <div className="ui vertical left aligned segment">
            <div className="ui text container">
              <div className="ui container grid">
                <aside className="five wide column">
                  <img
                    className="ui image"
                    alt="playing pup"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG68WSLMDeHSueoCLHHP5KGuprByUs7XcNJ0GeUcJh6DdtOo4p"
                  />
                </aside>

                <aside className="five wide column">
                  <img
                    className="ui image"
                    alt="newlywed love"
                    src="https://photos.smugmug.com/Weddings/Geneva-National/Edith-Yee/i-3b6SgfM/1/99c937c2/L/MMP_1003-L.jpg"
                  />
                </aside>

                <aside className="five wide column">
                  <img
                    className="ui image"
                    alt="sunset beach"
                    src="https://static1.squarespace.com/static/5538162ce4b08dd6e8cd8b8e/55513bd4e4b094c827fb399e/55513c16e4b08eb084d14c79/1431387163493/IMG_1479-1928907293-O.jpg?format=300w"
                  />
                </aside>
              </div>

              <div>
                <p>
                  Original Graphics aims to give you an exemplary customer
                  service experience. We have been providing high quality
                  photography services since 2015. We specialize in wedding
                  photography, aerial, family and pet portraits, often traveling
                  to your destination to capture the perfect moment in the
                  perfect place. We will be there with you every step of the way
                  to guarantee your special moments are captured forever.
                </p>
                <p>
                  To us photography is about people being real and then letting
                  us paint a picture of that moment to remember it forever. This
                  is the story that matters most: real people, real stories,
                  real moments.
                </p>
                <p>
                  <strong>
                    We are incredibly fortunate to have a team of photographers
                    who work with us on any given day. Please take a few minutes
                    to get to know us.
                  </strong>
                </p>
                <p>
                  We would love to meet with you by phone or in person and talk
                  about your wedding, event, portrait session or video project.
                </p>
                <Link to="/contact" className="ui fluid huge primary button">
                  {' '}
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="ui horizontal divider">Or</div>
            <Map />
          </div>
        </div>
      </div>
    )
  }
}

export default AboutUs
