import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';

class Navbar extends Component {
    state = { activeItem: 'home' };
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;

        return (
            <Menu secondary inverted pointing large>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item name='aboutUs' active={activeItem === 'aboutUs'} onClick={this.handleItemClick} />
                <Menu.Item name='gallery' active={activeItem === 'gallery'} onClick={this.handleItemClick} />
                <Menu.Menu position='right'>
                    <Menu.Item> <Button inverted >Sign up</Button> </Menu.Item>
                    <Menu.Item> <Button inverted >Log-in</Button> </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default Navbar;
