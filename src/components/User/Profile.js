import React, { Component } from 'react'
import { TextArea, Form } from 'semantic-ui-react';

class Profile extends Component {
  state = {
    firstName: '',
    lastName: '',
    telephone: '',
    email: '',
    bio: '',
    errors : {}
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onProfileSubmit = async e => {
    e.preventDefault();

    // const { firstName, lastName, telephone, email, bio } = this.state;

    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div className="ui vertical left aligned segment">
          <div className="ui container">
            <h1 style={{ fontSize: '40px' }} className="ui header">
              Profile
              <div className="sub header" style={{ paddingTop: '10px' }}>
                Complete the following inputs so that we can better tailor our
                suggestions for you!
              </div>
            </h1>
            <div className="ui message">
              <Form onSubmit={this.onProfileSubmit}>
                <Form.Field>
                  <label>First Name</label>
                  <input
                    onChange={this.onChangeInput}
                    name='firstName'
                    type="text"
                    placeholder="First Name"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input
                    onChange={this.onChangeInput}
                    name='lastName'
                    type="text"
                    placeholder="Last Name"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input
                    onChange={this.onChangeInput}
                    name='email'
                    type="text"
                    placeholder="Email Address"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Phone Number</label>
                  <input
                    onChange={this.onChangeInput}
                    name='telephone'
                    type="tel"
                    placeholder="Phone Number"
                  />
                </Form.Field>

                <label>
                  <strong>Biography</strong>
                </label>
                <TextArea
                  onChange={this.onChangeInput}
                  name='bio'
                  rows={5}
                  placeholder="Tell us more"
                />
                <div className="ui divider" />
                <button
                  style={{ paddingTop: '20px' }}
                  className="ui fluid primary huge button"
                >
                  Submit
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
