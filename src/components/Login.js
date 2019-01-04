import React from 'react';
import { Link } from 'react-router-dom'
import { Header, Modal } from 'semantic-ui-react';

class Login extends React.Component {

    render() {
        return (
            <div className='column'>
                <Modal.Header className='ui grey center aligned header large'>
                    Log-in to your account
                </Modal.Header>
                <Modal.Content>
                <form className='ui large form'>
                    <div className='ui stacked segment'>
                        <div className='field'>
                            <div className='ui fluid left icon input'>
                                <input type='text' placeholder='E-mail address'/>
                                <i aria-hidden='true' className='user icon'/>
                            </div>
                        </div>
                        <div className='field'>
                            <div className='ui fluid left icon input'>
                                <input type='password' placeholder='Password' />
                                <i aria-hidden='true' className='lock icon' />
                            </div>
                        </div>
                        <button className='ui teal large fluid button'>Login</button>
                    </div>
                </form>
                </Modal.Content>
                <div className='ui message'>
                    <h4>New to us? <Link to='/'>Sign Up</Link></h4>
                </div>
            </div>
        )
    }
}
export default Login;
