import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

class Footer extends Component {

    render() {
        return (
            <div className='ui inverted vertical footer segment'>
                <div className='ui container'>
                    <div className='ui stackable inverted divided equal height stackable grid'>
                        <div className='two wide column'>
                            <div className='ui inverted link list'>
                            <Link className='item' to='/'>Sitemap</Link>
                            <Link className='item' to='/'>Contact Us</Link>
                            <Link className='item' to='/'>Blog</Link>
                            <Link className='item' to='/'>About Us</Link>
                            <Link className='item' to='/'>Shop</Link>
                            </div>
                        </div>
                        <div className='two wide column'>

                        </div>
                        <div className='two wide column'>
                            <div className='ui inverted link list'>
                                <Link className='item' to='/'>Terms</Link>
                                <Link className='item' to='/'>Privacy</Link>
                                <Link className='item' to='/'>Help</Link>
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
