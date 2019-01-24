import React, { Component } from 'react';

class ClassList extends Component {
    render() {
        return (

        <div className="column" style={{ padding: '15px 5px 5px 5px' }}>
            <div style={{fontSize: '50px'}} className="ui grey center aligned huge header">
            <img
              src="https://image.shutterstock.com/display_pic_with_logo/179108744/718542784/stock-vector-initial-logo-letter-og-with-shield-and-crown-icon-golden-color-isolated-on-black-background-718542784.jpg"
              alt='company logo'
              style={{ width: "6%" }}
              className="w3-round"
            />
            Original Graphics
            <img
              src="https://image.shutterstock.com/display_pic_with_logo/179108744/718542784/stock-vector-initial-logo-letter-og-with-shield-and-crown-icon-golden-color-isolated-on-black-background-718542784.jpg"
              alt='company logo'
              style={{ width: "6%" }}
              className="w3-round"
            />
            </div>

                <div >

                <div className="ui vertical center aligned segment">
                    <h1 style={{ fontSize: '40px' }} className="ui header">
                        Class List
                    </h1>
                </div>
                </div>

            <div>
                <div className='ui text container'>
                    <div style={{marginBottom: '20px'}} className="ui segments">

                        <div className="ui segment">
                        <strong><h1>Beginner</h1></strong>
                        </div>

                        <div className="ui segment">
                            <strong><h3>Basic Photography: Taking Better Pictures</h3></strong>
                        </div>

                        <div className="ui segment">
                            <p>In this class you will learn camera basics as we explain how to use your camera correctly and take better pictures. It's easy, fun and the best way to start learning. Understanding photography's basics is essential to making great images. Start with basic photographic principles and camera controls and expand to composition, color theory and issues of visual perception.</p>
                        </div>

                    </div>
                </div>

                    <div className='ui text container'>
                    <div style={{marginBottom: '20px'}} className="ui segments">

                        <div className="ui segment">
                        <strong><h1>Intermediate</h1></strong>
                        </div>

                        <div className="ui segment">
                            <strong><h3>Intermediate Photography: Beyond Basics</h3></strong>
                        </div>

                        <div className="ui segment">
                            <p>You will dive deeper into photography building your skills, personal style and your own photography portfolio. Brush up on technical issues and camera use. Improve lighting, composition, approach to subject matter.</p>
                        </div>

                    </div>
                </div>

                    <div className='ui text container'>
                    <div style={{marginBottom: '20px'}} className="ui segments">

                        <div className="ui segment">
                        <strong><h1>Advanced</h1></strong>
                        </div>

                        <div className="ui segment">
                        <strong><h3>Advanced Photography: Don't "take" photos, "make" photos</h3></strong>
                        </div>

                        <div className="ui segment">
                            <p>Explore our advanced level class you will learn how to control every detail of your photographs while shooting and editing. Learn to use your camera to better tell your intended story through exploring more complex camera techniques and thinking processes.</p>
                        </div>

                    </div>
                </div>

            </div>
            </div>
        )
    }
}

export default ClassList;
