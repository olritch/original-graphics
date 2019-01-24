import React, { Component } from "react";
import { Link } from "react-router-dom";

class AboutUs extends Component {
  render() {
    return (
      <div className="column" style={{ padding: "15px 5px 5px 5px" }}>
        <div
          style={{ fontSize: "50px" }}
          className="ui grey center aligned huge header"
        >
        <img
              src="https://image.shutterstock.com/display_pic_with_logo/179108744/718542784/stock-vector-initial-logo-letter-og-with-shield-and-crown-icon-golden-color-isolated-on-black-background-718542784.jpg"
              alt='company logo'
              style={{ width: "6%" }}
              className="w3-round"
            />
          Original Graphics<img
              src="https://image.shutterstock.com/display_pic_with_logo/179108744/718542784/stock-vector-initial-logo-letter-og-with-shield-and-crown-icon-golden-color-isolated-on-black-background-718542784.jpg"
              alt='company logo'
              style={{ width: "6%" }}
              className="w3-round"
            />
        </div>

        <div className="ui vertical center aligned segment">
          <h1 style={{ fontSize: "40px" }} className="ui header">
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
                  {" "}
                  Contact Us
                </Link>
              </div>
            </div>
            <div style={{paddingTop: '50px', fontSize: '30px'}} className="ui horizontal divider">Or Come Visit Our Boston Location</div>
            <div className='ui container google-maps'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11798.747229973736!2d-71.0828303!3d42.3278784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d13b52f5a486d1e!2sUrban+League+of+Eastern+Massachusetts+(ULEM)!5e0!3m2!1sen!2sus!4v1547830801476"
              width="300"
              height="200"
              frameBorder="0"
              style={{border:'0'}}
              allowFullScreen
              title='company location'
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
