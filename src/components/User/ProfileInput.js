import React, { Component } from 'react'
import { TextArea, Form, Message } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'
import axios from 'axios';

class ProfileInput extends Component {
  state = {
    firstName: '',
    lastName: '',
    telephone: '',
    email: '',
    bio: '',
    _id: this.props.state,
    errors : {},
    uid : this.props.location.state.user._id,
    user: this.props.location.state.user
  }

  componentDidMount = () => {
    const { firstName, lastName, email, telephone, bio } = this.state.user;

    this.setState({
      firstName: firstName,
      lastName: lastName,
      email: email,
      telephone: telephone,
      bio: bio
    })
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onProfileSubmit = async e => {
    e.preventDefault();

    const { firstName, lastName, telephone, email, bio } = this.state;

    let user = {
      firstName: firstName,
      lastName: lastName,
      telephone: telephone,
      email: email,
      bio: bio,
      _id: this.state.uid
    }

    if (firstName === '') {
      this.setState({
        errors: { firstName: 'First name is required' }
      })
      return;
    }

    if (lastName === '') {
      this.setState({
        errors: { lastName: 'Last name is required' }
      })
      return;
    }

    if (email === '') {
      this.setState({
        errors: { email: 'Email address is required' }
      })
      return;
    }

    if (telephone === '') {
      this.setState({
        errors: { telephone: 'Phone number is required' }
      })
      return;
    }

    if (bio === '') {
      this.setState({
        errors: { bio: 'Biography is required' }
      })
      return;
    }

    this.setState({
      errors: {}
    });

    await axios.put('/api/user', user)

    this.props.history.push({
      pathname: `profile`,
      state: { user : user }
    })
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="ui vertical left aligned segment">
          <div className="ui container">
            <h1 style={{ fontSize: '40px' }} className="ui header">
              Profile
              <div className="sub header" style={{ paddingTop: '10px' }}>
                Complete the following so that we can better tailor our
                suggestions for you!
              </div>
            </h1>
            <div className="ui message">
              <Form onSubmit={this.onProfileSubmit}>
                <Form.Field required>
                  <label>First Name</label>
                  {errors.firstName && (<Message size='small' negative content={errors.firstName}/>)}
                  <input
                    onChange={this.onChangeInput}
                    name='firstName'
                    type="text"
                    placeholder="First Name"
                    value={this.state.firstName}
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Last Name</label>
                  {errors.lastName && (<Message size='small' negative content={errors.lastName}/>)}
                  <input
                    onChange={this.onChangeInput}
                    name='lastName'
                    type="text"
                    placeholder="Last Name"
                    value={this.state.lastName}
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Email</label>
                  {errors.email && (<Message size='small' negative content={errors.email}/>)}
                  <input
                    onChange={this.onChangeInput}
                    name='email'
                    type="text"
                    placeholder="Email Address"
                    value={this.state.email}
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Phone Number</label>
                  {errors.telephone && (<Message size='small' negative content={errors.telephone}/>)}
                  <input
                    onChange={this.onChangeInput}
                    name='telephone'
                    type="tel"
                    placeholder="Phone Number"
                    value={this.state.telephone}
                  />
                </Form.Field>

                <label>
                  <strong>Biography</strong>
                </label>
                {errors.bio && (<Message size='small' negative content={errors.bio}/>)}
                <TextArea
                  onChange={this.onChangeInput}
                  name='bio'
                  rows={2}
                  placeholder="Tell us more"
                  value={this.state.bio}
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

export default withRouter(ProfileInput);
