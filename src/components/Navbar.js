import React, { Component } from 'react';
import { Modal, Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Login from './User/Login';
import SignUp from './User/SignUp';

class Navbar extends Component {
    state = { activeItem: 'home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;

        return <div className="ui inverted vertical center aligned segment" style={{ padding: '1em 0em' }}>
            <div className="ui container">
              <Menu secondary inverted pointing>
                <Menu.Item as={ Link } to='/' name="home" active={activeItem === 'home'} onClick={this.handleItemClick}>
                </Menu.Item>
                <Menu.Item as={ Link } to ='/about-us' name="aboutUs" active={activeItem === 'aboutUs'} onClick={this.handleItemClick}>
                </Menu.Item>
                <Menu.Item as={ Link } to ='/calendar' name="calendar" active={activeItem === 'calendar'} onClick={this.handleItemClick}>
                </Menu.Item>
                <Dropdown item text="Gallery" name="gallery" onClick={this.handleItemClick}>
                  <Dropdown.Menu>
                    <Link to="/gallery/family" className="item">
                      Family
                    </Link>
                    <Link to="/gallery/wedding" className="item">
                      Wedding
                    </Link>
                    <Link to="/gallery/landscape" className="item">
                      Landscape
                    </Link>
                    <Link to="/gallery/aerial" className="item">
                      Aerial
                    </Link>
                    <Link to="/gallery/pet" className="item">
                      Pet
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown item text="Store" name="store" onClick={this.handleItemClick}>
                  <Dropdown.Menu>
                    <Link to="/store/frame" className="item">
                      Frame
                    </Link>
                    <Link to="/store/calendar" className="item">
                      Calendar
                    </Link>
                    <Link to="/store/poster" className="item">
                      Poster
                    </Link>
                    <Link to="/store/card" className="item">
                      Card
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item as={ Link } to='/blog' name="blog" active={activeItem === 'blog'} onClick={this.handleItemClick}>
                </Menu.Item>
                <div className="right item">
                  <Modal trigger={<Link to="/" role="button" className="ui inverted button">
                        Log in
                      </Link>} closeIcon>
                    {' '}
                    <Login />
                  </Modal>
                  <Modal trigger={<Link to="/" style={{ marginLeft: '0.5em' }} role="button" className="ui inverted button">
                        Sign Up
                  </Link>} closeIcon>
                    <SignUp />
                  </Modal>
                </div>
              </Menu>
            </div>
          </div>
    }
}

export default Navbar;
