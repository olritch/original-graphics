import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

class Footer extends Component {

    render() {
        return (
            <div className='ui inverted vertical footer segment'>
                <div className='ui container'>
                    <div className='ui stackable inverted divided equal height stackable grid'>
                        <div className='three wide column'>
                            <div className='ui inverted header small'>About Original Graphics</div>
                            <div className='ui inverted link list'>
                            <Link className='item' to='/'>Company Info</Link>
                            <Link className='item' to='/'>Gallery</Link>
                            <Link className='item' to='/'>Blog</Link>
                            <Link className='item' to='/'>Calendar</Link>
                            </div>
                        </div>
                        <div className='three wide column'>
                                <div className='ui inverted header small'>Services</div>
                                <div className='ui inverted link list'>
                                    <Link className='item' to='/'>Sitemap</Link>
                                    <Link className='item' to='/'>Shop</Link>
                                    <Link className='item' to='/'>Class</Link>
                                </div>
                        </div>
                        <div className='three wide column'>
                            <div className='ui inverted header small'>Help & Contact</div>
                            <div className='ui inverted link list'>
                                <Link className='item' to='/'>Contact Us</Link>
                                <Link className='item' to='/'>Help</Link>
                                <Link className='item' to='/'>Terms</Link>
                                <Link className='item' to='/'>Privacy</Link>
                            </div>
                        </div>
                        <div className='5 wide column'>
                            Icons here
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;
