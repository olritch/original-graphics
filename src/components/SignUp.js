import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Modal } from 'semantic-ui-react'

class SignUp extends Component {
    render() {
        return (
            <div className='column' style={{ padding: '30px 15px 30px 15px'}}>
                <Modal.Header className='ui black left aligned huge header'>
                    Join Original Graphics
                    <h2 className='ui header grey left aligned'>The best place for all of your photography needs.</h2>
                </Modal.Header>
                <Modal.Header className='ui black left aligned header medium'>
                    Create your Original Graphics Account
                </Modal.Header>
                <Modal.Content>
                <form className='ui large form' style={{minWidt: '300px'}}>
                    <div className='ui stacked segment'>
                        <div className='field'>
                            <div className='ui fluid left icon input'>
                                <input required type='text' placeholder='Username' />
                            </div>
                        </div>
                        <div className='field'>
                            <div className='ui fluid left icon input'>
                                <input required type='password' placeholder='Password' />
                            </div>
                        </div>
                        <div className='field'>
                            <div className='ui fluid left icon input'>
                                <input required type='password' placeholder='Confirm Password' />
                            </div>
                        </div>
                        <button className="ui teal large fluid button">
                            Create Account
                        </button>
                    </div>
                </form>
                </Modal.Content>
                <div className="ui message">
                    <Header className="small" textAlign="left">
                        <span>Already have an account? <Link to='/'>Click here!</Link></span>
                    </Header>
                </div>
            </div>
        )
    }
}

export default SignUp;
