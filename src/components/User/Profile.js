import React, { Component } from 'react'
import { TextArea, Form } from 'semantic-ui-react';

class Profile extends Component {

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
              Profile
              <div className="sub header" style={{ paddingTop: '10px' }}>
                Complete the following inputs so that we can better tailor our suggestions for you!
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

                <label><strong>Biography</strong></label>
                <TextArea rows={5} placeholder="Tell us more" />
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

export default Profile;
