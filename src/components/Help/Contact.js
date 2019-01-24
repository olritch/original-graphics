import React, { Component } from 'react';
import { TextArea, Dropdown, Form, Message } from 'semantic-ui-react';
import { contactFeedbackTopics } from '../../utils/ContactFeedbackTopics';
import { API_KEY, DOMAIN } from '../../apis/mailgun/Mailgun';
class Contact extends Component {
  state = {
    errors: {},
    showContactForm: false,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    commentTopic: '',
    feedback: ''
  }

  commentTopics = contactFeedbackTopics

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onDropdownInputChange = (e, data) => {
    this.setState({
      commentTopic: data.value
    })
  }

  formSubmit = async e => {
    e.preventDefault()

    this.setState({
      errors: {}
    })

    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      commentTopic,
      feedback
    } = this.state

    if (firstName === '') {
      this.setState({
        errors: {
          firstName: 'First name is required'
        }
      })
      return
    }

    if (lastName === '') {
      this.setState({
        errors: {
          lastName: 'Last name is required'
        }
      })
      return
    }

    if (email === '') {
      this.setState({
        errors: {
          email: 'Email is required'
        }
      })
      return
    }

    if (phoneNumber === '') {
      this.setState({
        errors: {
          phoneNumber: 'Phone number is required'
        }
      })
      return
    }

    if (commentTopic === '') {
      this.setState({
        errors: {
          commentTopic: 'Comment topic is required'
        }
      })
      return
    }

    if (feedback === '') {
      this.setState({
        errors: {
          feedback: 'Feedback is required'
        }
      })
      return
    }

    var mailgun = require('mailgun-js')({ apiKey: API_KEY, domain: DOMAIN })

    const data = {
      from: 'Excited User <me@samples.mailgun.org>',
      to: 'hmtran.ae@gmail.com',
      subject: 'Hello',
      text: 'Testing some Mailgun awesomeness!'
    }

    await mailgun.messages().send(data, (error, body) => {
      console.log(body)
    })

    this.setState({
      showContactForm: true
    })
  }

  render() {
    const { errors } = this.state
    return (
      <div>
        <div className="column" style={{ padding: '15px 5px 5px 5px' }}>
          <div
            style={{ fontSize: '50px' }}
            className="ui grey center aligned huge header"
          >
            <img
              src="https://image.shutterstock.com/display_pic_with_logo/179108744/718542784/stock-vector-initial-logo-letter-og-with-shield-and-crown-icon-golden-color-isolated-on-black-background-718542784.jpg"
              alt="company logo"
              style={{ width: '6%' }}
              className="w3-round"
            />
            Original Graphics
            <img
              src="https://image.shutterstock.com/display_pic_with_logo/179108744/718542784/stock-vector-initial-logo-letter-og-with-shield-and-crown-icon-golden-color-isolated-on-black-background-718542784.jpg"
              alt="company logo"
              style={{ width: '6%' }}
              className="w3-round"
            />
          </div>

          <div className="ui verticle center aligned">
            <h1
              style={{ fontSize: '40px', textAlign: 'center' }}
              className="ui header"
            >
              Contact Us
            </h1>
          </div>

          <div className="ui vertical left aligned segment">
            <div className="ui container">
              <h1 className="ui header">
                <div className="sub header" style={{ paddingTop: '20px' }}>
                  Questions, need some help or have feedback? Fill out the form
                  below and we'll get back to you as soon as we can.
                </div>
              </h1>

              {Object.keys(errors).map((keyName, i) => {
                return (
                  <Message
                    key={i}
                    compact
                    size="large"
                    attached
                    negative
                    content={errors[keyName]}
                  />
                )
              })}

              {this.state.showContactForm ? (
                <Message size="large">
                  Thank you for contacting us! We will get back to you soon.
                </Message>
              ) : (
                <div className="ui message">
                  <Form>
                    <Form.Field>
                      <label>First Name</label>
                      <input
                        onChange={this.onInputChange}
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Last Name</label>
                      <input
                        onChange={this.onInputChange}
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Email</label>
                      <input
                        onChange={this.onInputChange}
                        name="email"
                        type="text"
                        placeholder="Email Address"
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Phone Number</label>
                      <input
                        onChange={this.onInputChange}
                        name="phoneNumber"
                        type="tel"
                        placeholder="Phone Number"
                      />
                    </Form.Field>
                    <h1
                      className="ui header"
                      style={{ paddingBottom: '10px', paddingTop: '25px' }}
                    >
                      <div className="sub header">
                        What's on your mind? Choose a topic and add your
                        comments below.
                      </div>
                    </h1>
                    <Dropdown
                      placeholder="Select Topic of Concern"
                      onChange={this.onDropdownInputChange}
                      fluid
                      selection
                      options={this.commentTopics}
                    />
                    <h1
                      className="ui header"
                      style={{ paddingBottom: '10px', paddingTop: '25px' }}
                    >
                      <div className="sub header">
                        Send us your feedback, questions or concerns.
                      </div>
                    </h1>
                    <TextArea
                      onChange={this.onInputChange}
                      name="feedback"
                      rows={5}
                      placeholder="Tell us more"
                    />
                    <div className="ui divider" />
                    <button
                      onClick={this.formSubmit}
                      style={{ paddingTop: '20px' }}
                      className="ui fluid primary huge button"
                    >
                      Submit
                    </button>
                  </Form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
