import React, { Component } from 'react'
import { Form } from 'semantic-ui-react';

class Contact extends Component {
    render() {
        return (
            <div className='ui vertical left aligned segment'>
                <div className='ui container'>
                    <h1 style={{ fontSize: '40px' }} className='ui header'>
                        Contact Us
                    </h1>
                    <Form>
                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder='First Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Last Name' />
                        </Form.Field>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Contact;
