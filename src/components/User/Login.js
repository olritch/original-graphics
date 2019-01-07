import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Header, Modal } from 'semantic-ui-react';

class Login extends React.Component {

  goSignup = () => {
    this.props.changeLogin(false);
    this.props.changeSignup(true);
  }

  clearModal = () => {
    this.props.changeLogin(false);
  }

  render() {
      return <div className="column" style={{ padding: '15px 5px 5px 5px' }}>
          <Modal.Header className="ui grey center aligned header medium">
            Original Graphics
          </Modal.Header>
          <Modal.Header className="ui black center aligned header large">
            Log in to your account
          </Modal.Header>
          <Modal.Content>
            <form className="ui large form" style={{ minWidth: '300px' }}>
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui fluid left icon input">
                    <input type="text" placeholder="Username" />
                    <i aria-hidden="true" className="user icon" />
                  </div>
                </div>
                <div className="field">
                  <div className="ui fluid left icon input">
                    <input type="password" placeholder="Password" />
                    <i aria-hidden="true" className="lock icon" />
                  </div>
                </div>
                <Button onClick={this.clearModal} as={ Link } to='/profile' className="ui teal large fluid button">
                  Login
                </Button>
              </div>
            </form>
          </Modal.Content>
          <div className="ui message">
              <Header className="small" textAlign="left">
                  <span onClick={this.goSignup}>New to us? <Link to="/">Create account</Link></span>
                  <span style={{float: 'right'}}>Forgot <Link to='/'>Username</Link> or <Link to='/'>Password</Link>?</span>
              </Header>
          </div>
        </div>
  }
}

export default Login;
