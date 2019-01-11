import React, { Component } from 'react'
import { TextArea, Dropdown, Form } from 'semantic-ui-react';

class Contact extends Component {

  commentTopics = [
    {
      text: 'Customer Service',
      value: 'Customer Service'
    },
    {
      text: 'Product Information',
      value: 'Product Information'
    },
    {
        text: 'Class Information',
        value: 'Class Information'
    },
    {
        text: 'Other',
        value: 'Other'
    }
  ];

  render() {
    return <div>

<div className="column" style={{ padding: '15px 5px 5px 5px' }}>
        <div style={{fontSize: '50px'}} className="ui grey center aligned huge header">
          Original Graphics
        </div>


        <div className="ui vertical left aligned segment">
          <div className="ui container">
            <h1 style={{ fontSize: '40px' }} className="ui header">
              Contact Us
              <div className="sub header" style={{ paddingTop: '20px' }}>
                Questions, need some help or have feedback? Fill out the form below and we'll get back to you as soon as we can.
              </div>
            </h1>
            <div className="ui message">
              <Form>
                <Form.Field>
                  <label>First Name</label>
                  <input type="text" placeholder="First Name" />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input type="text" placeholder="Last Name" />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input type="text" placeholder="Email Address" />
                </Form.Field>
                <Form.Field>
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Phone Number" />
                </Form.Field>
                <h1 className="ui header" style={{ paddingBottom: '10px', paddingTop: '25px' }}>
                  <div className="sub header">
                    What's on your mind? Choose a topic and add your
                    comments below.
                  </div>
                </h1>
                <Dropdown placeholder="Select Topic of Concern" fluid selection options={this.commentTopics} />
                <h1 className="ui header" style={{ paddingBottom: '10px', paddingTop: '25px' }}>
                  <div className="sub header">
                    Send us your feedback, questions or concerns.
                  </div>
                </h1>
                <TextArea rows={10} placeholder="Tell us more" />
                <div className="ui divider" />
                <button style={{ paddingTop: '20px' }} className="ui fluid primary huge button">
                  Submit
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      </div>
  }
}

export default Contact;
