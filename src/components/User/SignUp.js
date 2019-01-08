import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Message, Button, Segment, Header, Modal } from 'semantic-ui-react';
import Recaptcha from 'react-recaptcha';
import axios from 'axios';

class SignUp extends Component {

    state = {
      isVerified: false,
      username: '',
      password: '',
      verifyPassword: '',
      errors: {}
    };

    recaptchaLoaded = () => {
        console.log('recaptcha successfully loaded');
    }

    verifyCallback = (response) => {
        if(response) {
            this.setState({
                isVerified: true
            })
        }
    }

    goLogin = () => {
      this.props.changeLogin(true);
      this.props.changeSignup(false);
    }

    handleSubscribe = (e) => {
        if (this.state.isVerified) {
            // this.props.changeSignup(false);
        } else {
            alert('Please verify that you are human!');
        }
    }

    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    onSubmit = async e => {
      e.preventDefault();

      const { username, password, verifyPassword } = this.state;

      if (username === '') {
        this.setState({
          errors: { username: 'Username is required' }
        });
        return;
      }

      if (password === '') {
        this.setState({
          errors: { password: 'Password is required' }
        });
        return;
      }

      if (verifyPassword === '') {
        this.setState({
          errors: { verifyPassword: 'Verify password is required' }
        });
        return;
      }

      if (verifyPassword !== password) {
        this.setState({
          errors: { match: 'Password and verify password are not a match' }
        });
        return;
      }

      this.setState({
        errors: {}
      });

      let res = await axios.get(`/api/user?username=${username}`);
      if (!res.data) {
        const user = { username, password };
        // register the user
        res = await axios.post('/api/register', user);
        // navigate to profile
        this.props.history.push({
          pathname: `profile`,
          state: { user: res.data }
        });
      } else {
        this.setState({
          errors: {
            match: 'Username is taken, please try another one'
          }
        });
      }

    }

    render() {
      const { errors } = this.state;

      return <div className="column" style={{ padding: '20px 5px 5px 5px' }}>
          <Modal.Header className="ui black left aligned huge header">
            Join Original Graphics
            <h2 className="ui header grey left aligned">
              The best place for all of your photography and videography
              needs.
            </h2>
          </Modal.Header>
          <Modal.Header className="ui black left aligned header medium">
            Create your Original Graphics Account
          </Modal.Header>
          <Modal.Content>
            {errors.match && (<Message size='small' attached negative
              content={errors.match}/>)}
            <form onSubmit={this.onSubmit} className="ui large form" style={{ minWidth: '300px' }}>
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui fluid left icon input">
                    <input onChange={this.onChange} name="username" type="text" placeholder="Username" />
                    <i aria-hidden="true" className="user icon" />
                  </div>
                  {errors.username && (<Message size='small' attached negative content={errors.username}/>)}
                </div>
                <div className="field">
                  <div className="ui fluid left icon input">
                    <input onChange={this.onChange} name="password" type="password" placeholder="Password" />
                    <i aria-hidden="true" className="lock icon" />
                  </div>
                  {errors.password && (<Message size='small' attached negative content={errors.password} />)}
                </div>
                <div className="field">
                  <div className="ui fluid left icon input">
                    <input onChange={this.onChange} name="verifyPassword" type="password" placeholder="Confirm Password" />
                  </div>
                  {errors.verifyPassword && (<Message size='small' attached negative content={errors.verifyPassword} />)}
                </div>
                <Button onClick={this.handleSubscribe} className="ui teal large fluid button">
                  Create Account
                </Button>
                <Segment>
                  <Recaptcha sitekey="6LfiA4cUAAAAAIPWf25xQ1bAohV7SRFQ4rS-aSLc" render="explicit" size="normal" theme="light" onloadCallback={this.recaptchaLoaded} verifyCallback={this.verifyCallback} />
                </Segment>
              </div>
            </form>
          </Modal.Content>
          <div className="ui message">
            <Header className="small" textAlign="left">
              <span onClick={this.goLogin}>
                Already have an account? <Link to="/">Click here!</Link>
              </span>
            </Header>
          </div>
        </div>
    }
}

export default SignUp;
