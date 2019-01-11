import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Message, Button, Header, Modal } from 'semantic-ui-react';
import axios from 'axios';

class Login extends React.Component {

  state = {
    username: '',
    password: '',
    errors: {}
  }

  onSubmit = async e => {
    e.preventDefault();

    const { username, password } = this.state;

    if (username === '') {
      this.setState({
        errors: { username : 'Username is required' }
      });
      return;
    }

    if (password === '') {
      this.setState({
        errors: { password: 'Password is required' }
      });
      return;
    }

    let res = await axios.get(`/api/user?username=${username}&password=${password}`);
    if (res.data) {
      this.props.history.push({
        pathname: `profile-input`,
        state: { user: res.data }
      });
      this.clearModal();
    } else {
      this.setState({
        errors: {
          match: 'Username and password are not a match'
        }
      });
    }
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  goSignup = () => {
    this.props.changeLogin(false);
    this.props.changeSignup(true);
  }

  clearModal = () => {
    this.props.changeLogin(false);
  }

  render() {
    const { errors } = this.state;

    return <div className="column" style={{ padding: '15px 5px 5px 5px' }}>
        <Modal.Header className="ui grey center aligned header medium">
          Original Graphics
        </Modal.Header>
        <Modal.Header className="ui black center aligned header large">
          Log in to your account
        </Modal.Header>
        <Modal.Content>
          {errors.match && (<Message size='small' attached negative content={errors.match}/>)}
          <form onSubmit={this.onSubmit} className="ui large form" style={{ minWidth: '300px' }}>
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui fluid left icon input">
                  <input onChange={this.onChange} name='username' type="text" placeholder="Username" />
                  <i aria-hidden="true" className="user icon" />
                </div>
              {errors.username && (<Message size='small' attached negative content={errors.username} />)}
              </div>
              <div className="field">
                <div className="ui fluid left icon input">
                  <input onChange={this.onChange} name='password' type="password" placeholder="Password" />
                  <i aria-hidden="true" className="lock icon" />
                </div>
              {errors.password && (<Message size='small' attached negative content={errors.password} />)}
              </div>
              <Button className="ui teal large fluid button">
                Login
              </Button>
            </div>
          </form>
        </Modal.Content>
        <div className="ui message">
            <Header className="small" textAlign="left">
                <span onClick={this.goSignup}>New to us? <Link to="/">Create account</Link></span>
                <span style={{float: 'right'}}>Forgot <Link onClick={this.clearModal} to='/forgot-username'>Username</Link> or <Link onClick={this.clearModal} to='/forgot-password'>Password</Link>?</span>
            </Header>
        </div>
      </div>
  }
}

export default withRouter(Login);
