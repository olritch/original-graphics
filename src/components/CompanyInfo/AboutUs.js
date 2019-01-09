import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

const TextAreaAutoHeight = () => (
  <Form>
      <div className='ui text container'>
    <TextArea autoHeight placeholder='Original Graphics aims to give you an exemplary customer service experience. We have been providing high quality photography services since 2015. You tell us what you want and we make it our highest priority to fulfill your request.' />
        </div>
  </Form>
)

export default TextAreaAutoHeight
