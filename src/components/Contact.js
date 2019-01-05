import React, { Component } from 'react'
import { Form } from 'semantic-ui-react';

class Contact extends Component {
    render() {
        return (
            <div className='ui vertical left aligned segment'>
                <div className='ui container'>
                    <h1 style={{ fontSize: '40px' }} className='ui header'>
                        Contact Us
                        <div className='sub header'>Questions, need some help or have feedback? Fill out the form below and we'll get back to you as soon as we can.</div>
                    </h1>
                    <div className='ui message'>
                        <Form>
                            <Form.Field>
                                <label>First Name</label>
                                <input type='text' placeholder='First Name' />
                            </Form.Field>
                            <Form.Field>
                                <label>Last Name</label>
                                <input type='text' placeholder='Last Name' />
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input type='text' placeholder='Email Address' />
                            </Form.Field>
                            <Form.Field>
                                <label>Phone Number</label>
                                <input type='tel' placeholder='Phone Number' />
                            </Form.Field>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
