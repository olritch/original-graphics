import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {

    state = {
        likes: 0,
        updated: false
    }

    updateLikes = () => {
        if (!this.state.updated) {
            this.setState((prevState, props) => {
                return {
                    likes: prevState.likes + 1,
                    updated: true
                };
            });
        } else {
            this.setState((prevState, props) => {
                return {
                    likes: prevState.likes - 1,
                    updated: false
                };
            });
        }
    }

    render() {
        return (
            <div className='ui inverted vertical footer segment'>
                <div className='ui container'>
                    <div className='ui inverted divided equal height stackable grid'>
                        <div className='three wide column'>
                            <div className='ui inverted header small'>About Original Graphics</div>
                            <div className='ui inverted link list'>
                            <Link className='item' to='/about-us'>Company Info</Link>
                            <Link className='item' to='/gallery'>Gallery</Link>
                            <Link className='item' to='/blog'>Blog</Link>
                            <Link className='item' to='/calendar'>Calendar</Link>
                            </div>
                        </div>
                        <div className='three wide column'>
                                <div className='ui inverted header small'>Services</div>
                                <div className='ui inverted link list'>
                                    <Link className='item' to='/store'>Store</Link>
                                    <Link className='item' to='/class'>Class</Link>
                                    <Link className='item' to='/instructor-info'>Instructor Info</Link>
                                </div>
                        </div>
                        <div className='three wide column'>
                            <div className='ui inverted header small'>Help & Contact</div>
                            <div className='ui inverted link list'>
                                <Link className='item' to='/contact'>Contact Us</Link>
                                <Link className='item' to='/help'>Help</Link>
                                <Link className='item' to='/terms'>Terms</Link>
                                <Link className='item' to='/privacy'>Privacy</Link>
                                <Link className='item' to='/sitemap'>Sitemap</Link>
                            </div>
                        </div>
                        <div className='seven wide column'>
                            <div className='ui icon inverted menu'>
                                <Link to='/' className='item'>
                                    <i className='facebook icon'></i>
                                </Link>
                                <Link to='/' className='item'>
                                    <i className='twitter icon'></i>
                                </Link>
                                <Link to='/' className='item'>
                                    <i className='youtube icon'></i>
                                </Link>
                                <Link to='/' className='item'>
                                    <i className='instagram icon'></i>
                                </Link>
                                <Link to='/' className='item'>
                                    <i className='linkedin icon'></i>
                                </Link>
                            </div>
                            <div className='ui inverted bottom attached huge header'>Follow Us</div>
                            <div onClick={this.updateLikes} className="ui labeled button" tabIndex="0">
                                <div  className="ui red button">
                                    <i className="heart icon"></i> Like
                                </div>
                                <span  className="ui basic red left pointing label">
                                    {this.state.likes}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div style={{fontSize: '10px'}} className='ui inverted header tiny'>Copyright &copy; 2019 Original Graphics Inc. All Rights Reserved.</div>
                </div>
            </div>
        )
    }
}
export default Footer;
