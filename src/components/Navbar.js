import React, { Component } from 'react';
import { Menu, Button, Dropdown } from 'semantic-ui-react';

class Navbar extends Component {
    state = { activeItem: 'home' };
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;

        return <Menu secondary inverted pointing large>
            <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item name="aboutUs" active={activeItem === 'aboutUs'} onClick={this.handleItemClick} />
            <Menu.Item name="calendar" active={activeItem === 'calendar'} onClick={this.handleItemClick} />
            <Dropdown item text="Gallery" name="gallery" active={activeItem === 'gallery'} onClick={this.handleItemClick}>
              <Dropdown.Menu>
                <Dropdown.Item>Family</Dropdown.Item>
                <Dropdown.Item>Wedding</Dropdown.Item>
                <Dropdown.Item>Landscape</Dropdown.Item>
                <Dropdown.Item>Aerial</Dropdown.Item>
                <Dropdown.Item>Pets</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="Store" name="store" active={activeItem === 'store'} onClick={this.handleItemClick}>
                <Dropdown.Menu>
                    <Dropdown.Item>Framing</Dropdown.Item>
                    <Dropdown.Item>Calendar</Dropdown.Item>
                    <Dropdown.Item>Poster</Dropdown.Item>
                    <Dropdown.Item>Cards</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Item name="blog" active={activeItem === 'blog'} onClick={this.handleItemClick} />
            <Menu.Menu position="right">
              <Menu.Item>
                {' '}
                <Button inverted>Sign up</Button>{' '}
              </Menu.Item>
              <Menu.Item>
                {' '}
                <Button inverted>Log-in</Button>{' '}
              </Menu.Item>
            </Menu.Menu>
          </Menu>
    }
}

export default Navbar;
