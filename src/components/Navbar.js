import React, { Component } from 'react';
import { Button, Header, Image, Modal, Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Login from './Login';

class Navbar extends Component {
    state = { activeItem: 'home' };
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;

        return (
            <div className= 'ui inverted vertical center aligned segment' style={{padding: '1em 0em'}}>
                <div className='ui container'>
                    <Menu secondary inverted pointing>
                        <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
                        <Menu.Item name="aboutUs" active={activeItem === 'aboutUs'} onClick={this.handleItemClick} />
                        <Menu.Item name="calendar" active={activeItem === 'calendar'} onClick={this.handleItemClick} />
                        <Dropdown item text='Gallery' name="gallery" onClick={this.handleItemClick}>
                        <Dropdown.Menu>
                            <Dropdown.Item>Family</Dropdown.Item>
                            <Dropdown.Item>Wedding</Dropdown.Item>
                            <Dropdown.Item>Landscape</Dropdown.Item>
                            <Dropdown.Item>Aerial</Dropdown.Item>
                            <Dropdown.Item>Pets</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown item text="Store" name="store" onClick={this.handleItemClick}>
                            <Dropdown.Menu>
                                <Dropdown.Item>Framing</Dropdown.Item>
                                <Dropdown.Item>Calendar</Dropdown.Item>
                                <Dropdown.Item>Poster</Dropdown.Item>
                                <Dropdown.Item>Cards</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Menu.Item name="blog" active={activeItem === 'blog'} onClick={this.handleItemClick} />
                        <div className='right item'>
                            <Link to='/' role='button' className='ui inverted button'>Sign up</Link>
                            <Modal trigger={<Link to='/' style={{marginLeft: '0.5em'}} role='button' className='ui inverted button'>Log-in</Link>}>
                            <Login />
                            </Modal>
                        </div>
                    </Menu>
                </div>
            </div>
        )
    }
}

export default Navbar;
