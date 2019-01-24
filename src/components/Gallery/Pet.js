import React, { Component } from 'react'
import '../../App.css'

class Pet extends Component {
  w3_close = () => {
    document.getElementById('mySidebar').style.display = 'none'
    document.getElementById('myOverlay').style.display = 'none'
  }
  w3_open() {
    document.getElementById('mySidebar').style.display = 'block'
    document.getElementById('myOverlay').style.display = 'block'
  }

  render() {
    return (
      <div>
        <div className="column" style={{ padding: '15px 5px 5px 5px' }}>
          <div
            style={{ fontSize: '50px' }}
            className="ui grey center aligned huge header"
          >
            <img
              src="https://image.shutterstock.com/display_pic_with_logo/179108744/718542784/stock-vector-initial-logo-letter-og-with-shield-and-crown-icon-golden-color-isolated-on-black-background-718542784.jpg"
              alt="company logo"
              style={{ width: '6%' }}
              className="w3-round"
            />
            Original Graphics
            <img
              src="https://image.shutterstock.com/display_pic_with_logo/179108744/718542784/stock-vector-initial-logo-letter-og-with-shield-and-crown-icon-golden-color-isolated-on-black-background-718542784.jpg"
              alt="company logo"
              style={{ width: '6%' }}
              className="w3-round"
            />
          </div>
        </div>

        <nav
          className="w3-sidebar w3-collapse w3-white w3-animate-left"
          style={{ zIndex: '3', width: '300px' }}
          id="mySidebar"
        >
          <br />
          <div className="w3-container">
            <button
              type="button"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline',
                display: 'inline',
                margin: '0',
                padding: '0'
              }}
              onClick={this.w3_close}
              className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey"
              title="close menu"
            >
              <i className="fa fa-remove" />
            </button>
            <img
              src="https://image.shutterstock.com/display_pic_with_logo/179108744/718542784/stock-vector-initial-logo-letter-og-with-shield-and-crown-icon-golden-color-isolated-on-black-background-718542784.jpg"
              alt="company logo"
              style={{ width: '45%' }}
              className="w3-round"
            />
            <br />
            <br />
            <h4>
              <b>PORTFOLIO</b>
            </h4>
          </div>
          <div className="w3-bar-block">
            <a
              href="#portfolio"
              onClick={this.w3_close}
              className="w3-bar-item w3-button w3-padding w3-text-teal"
            >
              <i className="fa fa-th-large fa-fw w3-margin-right" />
              PORTFOLIO
            </a>
            <a
              href="#about"
              onClick={this.w3_close}
              className="w3-bar-item w3-button w3-padding"
            >
              <i className="fa fa-user fa-fw w3-margin-right" />
              ABOUT
            </a>
            <a
              href="#contact"
              onClick={this.w3_close}
              className="w3-bar-item w3-button w3-padding"
            >
              <i className="fa fa-envelope fa-fw w3-margin-right" />
              CONTACT
            </a>
          </div>
          <div className="w3-panel w3-large">
            <i className="fa fa-facebook-official w3-hover-opacity" />
            <i className="fa fa-instagram w3-hover-opacity" />
            <i className="fa fa-snapchat w3-hover-opacity" />
            <i className="fa fa-pinterest-p w3-hover-opacity" />
            <i className="fa fa-twitter w3-hover-opacity" />
            <i className="fa fa-linkedin w3-hover-opacity" />
          </div>
        </nav>

        <div
          className="w3-overlay w3-hide-large w3-animate-opacity"
          onClick={this.w3_close}
          style={{ cursor: 'pointer' }}
          title="close side menu"
          id="myOverlay"
        />

        <div className="w3-main" style={{ marginLeft: '300px' }}>
          <header id="portfolio">
            <button
              type="button"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline',
                display: 'inline',
                margin: '0',
                padding: '0'
              }}
            >
              <img
                src="#"
                alt="avatar"
                style={{ width: '65px' }}
                className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"
              />
            </button>
            <span
              className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"
              onClick={this.w3_close}
            >
              <i className="fa fa-bars" />
            </span>
            <div className="w3-container">
              <h1>
                <b>My Portfolio</b>
              </h1>
              <div className="w3-section w3-padding-16">
                <span className="w3-margin-right">Filter:</span>
                <button className="w3-button w3-black">ALL</button>
                <button className="w3-button w3-orange">Videos</button>
                <button className="w3-button w3-gray">Photos</button>
                <button className="w3-button w3-blue">Art</button>
                <div className="margin-top">
                  <span style={{ paddingRight: '20px' }}>Upload:</span>
                  <button className="w3-button ui red button ">
                    Video / Photo
                  </button>
                  {/* <button className="w3-button w3-white">
                    <i className="fa fa-diamond w3-margin-right" />
                    Videos
                  </button>
                  <button className="w3-button w3-white w3-hide-small">
                    <i className="fa fa-photo w3-margin-right" />
                    Photos
                  </button> */}
                </div>
              </div>
              <hr />
            </div>
          </header>

          <div className="w3-row-padding">
            <div className="w3-third w3-container w3-margin-bottom">
              <a href="https://www.google.com">
                <img
                  src="http://www.neetashankar.com/photography/wp-content/uploads/2017/08/Neeta-Shankar-Photography-Best-Fashion-Portfolio-Shoot-Femina-Miss-India-Diva-Earth-Universe-World-28-1024x683.jpg"
                  alt="Norway"
                  style={{ width: '100%' }}
                  className="w3-hover-opacity"
                />
              </a>
              <div className="w3-container w3-white">
                <p>
                  <b>
                    <a href="https://www.google.com">Photo Shoots</a>
                  </b>
                </p>
                <p>
                  Portrait photography is all about capturing a person’s
                  personality. It is the art of capturing a subject (in this
                  case, a person or a group of people) in which the face, facial
                  features as well as facial expressions are made predominant.
                </p>
              </div>
            </div>
            <div className="w3-third w3-container w3-margin-bottom">
              <a href="https://www.facebook.com">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoV2blN5Z1WoyzxXjeHBL9FDLpV2pQCcs9b3_ymrryyHLAA5tp7w"
                  alt="Norway"
                  style={{ width: '100%' }}
                  className="w3-hover-opacity"
                />
              </a>
              <div className="w3-container w3-white">
                <p>
                  <b>
                    <a href="https://www.facebook.com">
                      Weddings / Anniversary
                    </a>
                  </b>
                </p>
                <p>
                  Wedding photography encompasses photographs of the couple
                  before marriage as well as coverage of the wedding and
                  reception.
                </p>
              </div>
            </div>
            <div className="w3-third w3-container">
              <a href="https://www.yahoo.com">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOxhKIJMfsWGjqcpHxm8Wlhf9KVzCP3OZnhKa1_z3vQH68tvd"
                  alt="Norway"
                  style={{ width: '100%' }}
                  className="w3-hover-opacity"
                />
              </a>
              <div className="w3-container w3-white">
                <p>
                  <b>
                    <a href="https://www.yahoo.com">Landscape / Nature</a>
                  </b>
                </p>
                <p>
                  Nature photography refers to a wide range of photography taken
                  outdoors and devoted to displaying natural elements such as
                  landscapes, wildlife, plants, and close-ups of natural scenes
                  and textures.
                </p>
              </div>
            </div>
          </div>

          <div className="w3-row-padding">
            <div className="w3-third w3-container w3-margin-bottom">
              <a href="https://www.twitter.com">
                <img
                  src="https://cmgpbppostonpolitics.files.wordpress.com/2018/09/091718-roger-stone-camera.jpg?w=640&h=427"
                  alt="Norway"
                  style={{ width: '100%' }}
                  className="w3-hover-opacity"
                />
              </a>
              <div className="w3-container w3-white">
                <p>
                  <b>
                    <a href="www.twitter.com">News / Events</a>
                  </b>
                </p>
                <p>
                  “I’m ready. I will never roll on Donald Trump. Michael Cohen I
                  am not,” Stone said. “One reporter asked me last week ‘Are you
                  worried?’ I don’t worry. I make other people worry.”
                </p>
              </div>
            </div>
            <div className="w3-third w3-container w3-margin-bottom">
              <a href="https://www.youtube.com">
                <img
                  src="https://cdn.lynda.com/course/429031/429031-635905339675845661-16x9.jpg"
                  alt="Norway"
                  style={{ width: '100%' }}
                  className="w3-hover-opacity"
                />
              </a>
              <div className="w3-container w3-white">
                <p>
                  <b>
                    <a href="https://www.youtube.com">Multy-Cam Video shoot</a>
                  </b>
                </p>
                <p>
                  A multicamera setup is the next big step in video production.
                  Multicam helps you record different angels simultaneously and
                  shoot faster than with a single camera.
                </p>
              </div>
            </div>
            <div className="w3-third w3-container">
              <a href="https://www.worldstarhiphop.com">
                <img
                  src="https://i.pinimg.com/originals/5d/f5/ee/5df5ee9385604c7515b4974aa37ad081.jpg"
                  alt="Norway"
                  style={{ width: '100%' }}
                  className="w3-hover-opacity"
                />
              </a>
              <div className="w3-container w3-white">
                <p>
                  <b>
                    <a href="https://www.worldstarhiphip.com">
                      B-Day / Anniversary
                    </a>
                  </b>
                </p>
                <p>
                  Capturing irreplaceable moments and translating them into
                  pictures and producing photographs that commemorates a
                  once-in-a-lifetime experience.
                </p>
              </div>
            </div>
          </div>

          <div className="w3-row-padding w3-padding-16" id="about">
            <div className="w3-col m6">
              <img
                src="#"
                alt="Me"
                style={{ width: '100%' }}
              />
            </div>
            <div className="w3-col m6">
              <img src="#" alt="Me" style={{ width: '100%' }} />
            </div>
          </div>

          <div
            className="w3-container w3-padding-large"
            style={{ marginBottom: '32px' }}
          >
            <h4>
              <b>About Me</b>
            </h4>
            <p>
              Just me, myself and I, exploring the universe of unknownment. I
              have a heart of love and an interest of lorem ipsum and mauris
              neque quam blog. I want to share my world with you. Praesent
              tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta
              lectus vitae, ultricies congue gravida diam non fringilla.
              Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
              condimentum, porta lectus vitae, ultricies congue gravida diam non
              fringilla.
            </p>
            <hr />

            <h4>Technical Skills</h4>
            <p>Photography</p>
            <div className="w3-grey">
              <div
                className="w3-container w3-dark-grey w3-padding w3-center"
                style={{ width: '95%' }}
              >
                95%
              </div>
            </div>
            <p>Web Design</p>
            <div className="w3-grey">
              <div
                className="w3-container w3-dark-grey w3-padding w3-center"
                style={{ width: '85%' }}
              >
                85%
              </div>
            </div>
            <p>Photoshop</p>
            <div className="w3-grey">
              <div
                className="w3-container w3-dark-grey w3-padding w3-center"
                style={{ width: '80%' }}
              >
                80%
              </div>
            </div>
            <p>
              <button className="w3-button w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom">
                <i className="fa fa-download w3-margin-right" />
                Download Resume
              </button>
            </p>
            <hr />

            <h4>How much I charge</h4>
            <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
              <div className="w3-third w3-margin-bottom">
                <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                  <li className="w3-black w3-xlarge w3-padding-32">Basic</li>
                  <li className="w3-padding-16">Web Design</li>
                  <li className="w3-padding-16">Photography</li>
                  <li className="w3-padding-16">1GB Storage</li>
                  <li className="w3-padding-16">Mail Support</li>
                  <li className="w3-padding-16">
                    <h2>$ 10</h2>
                    <span className="w3-opacity">per month</span>
                  </li>
                  <li className="w3-light-grey w3-padding-24">
                    <button className="w3-button w3-teal w3-padding-large w3-hover-black">
                      Sign Up
                    </button>
                  </li>
                </ul>
              </div>

              <div className="w3-third w3-margin-bottom">
                <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                  <li className="w3-teal w3-xlarge w3-padding-32">Pro</li>
                  <li className="w3-padding-16">Web Design</li>
                  <li className="w3-padding-16">Photography</li>
                  <li className="w3-padding-16">50GB Storage</li>
                  <li className="w3-padding-16">Endless Support</li>
                  <li className="w3-padding-16">
                    <h2>$ 25</h2>
                    <span className="w3-opacity">per month</span>
                  </li>
                  <li className="w3-light-grey w3-padding-24">
                    <button className="w3-button w3-teal w3-padding-large w3-hover-black">
                      Sign Up
                    </button>
                  </li>
                </ul>
              </div>

              <div className="w3-third">
                <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                  <li className="w3-black w3-xlarge w3-padding-32">Premium</li>
                  <li className="w3-padding-16">Web Design</li>
                  <li className="w3-padding-16">Photography</li>
                  <li className="w3-padding-16">Unlimited Storage</li>
                  <li className="w3-padding-16">Endless Support</li>
                  <li className="w3-padding-16">
                    <h2>$ 25</h2>
                    <span className="w3-opacity">per month</span>
                  </li>
                  <li className="w3-light-grey w3-padding-24">
                    <button className="w3-button w3-teal w3-padding-large w3-hover-black">
                      Sign Up
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w3-container w3-padding-large w3-grey">
            <h4 id="contact">
              <b>Contact Me</b>
            </h4>
            <div
              className="w3-row-padding w3-center w3-padding-24"
              style={{ margin: '0 -16px' }}
            >
              <div className="w3-third w3-dark-grey">
                <p>
                  <i className="fa fa-envelope w3-xxlarge w3-text-light-grey" />
                </p>
                <p>email@email.com</p>
              </div>
              <div className="w3-third w3-teal">
                <p>
                  <i className="fa fa-map-marker w3-xxlarge w3-text-light-grey" />
                </p>
                <p>Boston, US</p>
              </div>
              <div className="w3-third w3-dark-grey">
                <p>
                  <i className="fa fa-phone w3-xxlarge w3-text-light-grey" />
                </p>
                <p>(617) 820-1291</p>
              </div>
            </div>
            <hr className="w3-opacity" />
            <form action="/action_page.php" target="_blank">
              <div className="w3-section">
                <label>Name</label>
                <input
                  className="w3-input w3-border"
                  type="text"
                  name="Name"
                  required
                />
              </div>
              <div className="w3-section">
                <label>Email</label>
                <input
                  className="w3-input w3-border"
                  type="text"
                  name="Email"
                  required
                />
              </div>
              <div className="w3-section">
                <label>Message</label>
                <input
                  className="w3-input w3-border"
                  type="text"
                  name="Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="w3-button w3-black w3-margin-bottom"
              >
                <i className="fa fa-paper-plane w3-margin-right" />
                Send Message
              </button>
            </form>
          </div>

          <footer className="w3-container w3-padding-32 w3-dark-grey">
            <div className="w3-row-padding">
              <div className="w3-third">
                <h3>EVENTS</h3>
                <p>
                  Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                  condimentum, porta lectus vitae, ultricies congue gravida diam
                  non fringilla.
                </p>
                <p>
                  Powered by{' '}
                  <a
                    href="https://www.w3schools.com/w3css/default.asp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    w3.css
                  </a>
                </p>
              </div>

              <div className="w3-third">
                <h3>BLOG POSTS</h3>
                <ul className="w3-ul w3-hoverable">
                  <li className="w3-padding-16">
                    <img
                      src="https://cmgpbppostonpolitics.files.wordpress.com/2018/09/091718-roger-stone-camera.jpg?w=640"
                      alt="camera"
                      className="w3-left w3-margin-right"
                      style={{ width: '50px' }}
                    />
                    <span className="w3-large">Lorem</span>
                    <br />
                    <span>Sed mattis nunc</span>
                  </li>
                  <li className="w3-padding-16">
                    <img
                      src="#"
                      alt="gondol"
                      className="w3-left w3-margin-right"
                      style={{ width: '50px' }}
                    />
                    <span className="w3-large">Ipsum</span>
                    <br />
                    <span>Praes tinci sed</span>
                  </li>
                </ul>
              </div>

              <div className="w3-third">
                <h3>POPULAR TAGS</h3>
                <p>
                  <span className="w3-tag w3-black w3-margin-bottom">
                    Travel
                  </span>{' '}
                  <span className="w3-tag w3-grey w3-small w3-margin-bottom">
                    Fashion
                  </span>{' '}
                  <span className="w3-tag w3-grey w3-small w3-margin-bottom">
                    Portrait
                  </span>
                  <span className="w3-tag w3-grey w3-small w3-margin-bottom">
                    Food
                  </span>{' '}
                  <span className="w3-tag w3-grey w3-small w3-margin-bottom">
                    Landscape
                  </span>{' '}
                  <span className="w3-tag w3-grey w3-small w3-margin-bottom">
                    Liberal art
                  </span>
                  <span className="w3-tag w3-grey w3-small w3-margin-bottom">
                    Wedding
                  </span>{' '}
                  <span className="w3-tag w3-grey w3-small w3-margin-bottom">
                    Nature
                  </span>{' '}
                  <span className="w3-tag w3-grey w3-small w3-margin-bottom">
                    Family
                  </span>
                  <span className="w3-tag w3-grey w3-small w3-margin-bottom">
                    News
                  </span>{' '}
                  <span className="w3-tag w3-grey w3-small w3-margin-bottom">
                    Clothing
                  </span>{' '}
                  <span className="w3-tag w3-grey w3-small w3-margin-bottom">
                    Shopping
                  </span>
                  <span className="w3-tag w3-grey w3-small w3-margin-bottom">
                    Sports
                  </span>{' '}
                  <span className="w3-tag w3-grey w3-small w3-margin-bottom">
                    Games
                  </span>
                </p>
              </div>
            </div>
          </footer>

          <div className="w3-black w3-center w3-padding-24">
            Powered by{' '}
            <a
              href="https://www.w3schools.com/w3css/default.asp"
              title="W3.CSS"
              target="_blank"
              rel="noopener noreferrer"
              className="w3-hover-opacity"
            >
              w3.css
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Pet
