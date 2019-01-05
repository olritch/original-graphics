import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Header, Modal } from 'semantic-ui-react'
import Recaptcha from 'react-recaptcha'

class SignUp extends Component {

    state = { ifVerified: true };

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

    handleSubscribe = (e) => {
        e.preventDefault();

        if (this.state.isVerified) {
            alert('You have successfully subscribed!');
        } else {
            alert('Please verify that you are human!');
        }
    }

    render() {
        return <div className="column" style={{ padding: '30px 15px 30px 15px' }}>
            <Modal.Header className="ui black left aligned huge header">
              Join Original Graphics
              <h2 className="ui header grey left aligned">
                The best place for all of your photography needs.
              </h2>
            </Modal.Header>
            <Modal.Header className="ui black left aligned header medium">
              Create your Original Graphics Account
            </Modal.Header>
            <Modal.Content>
              <form className="ui large form" style={{ minWidt: '300px' }}>
                <div className="ui stacked segment">
                  <div className="field">
                    <div className="ui fluid left icon input">
                      <input required type="text" placeholder="Username" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui fluid left icon input">
                      <input required type="password" placeholder="Password" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui fluid left icon input">
                      <input required type="password" placeholder="Confirm Password" />
                    </div>
                  </div>
                  <button onClick={this.handleSubscribe} className="ui teal large fluid button">
                    Create Account
                  </button>
                  <Segment>
                  <Recaptcha sitekey="6LfiA4cUAAAAAIPWf25xQ1bAohV7SRFQ4rS-aSLc"
                  render="explicit"
                  size='normal'
                  theme='light'
                  onloadCallback={this.recaptchaLoaded}
                  verifyCallback={this.verifyCallback} />
                  </Segment>
                </div>
              </form>
            </Modal.Content>
            <div className="ui message">
              <Header className="small" textAlign="left">
                <span>
                  Already have an account? <Link to="/">
                    Click here!
                  </Link>
                </span>
              </Header>
            </div>
          </div>
    }
}

export default SignUp;
