import React, { Component } from 'react';

class ClassList extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="ui stacked segments">

                        <div className="ui segment">
                        <strong><h1>Beginner</h1></strong>     
                        </div>

                        <div className="ui segment">
                            <strong><h3>Basic Photography: Taking Better Pictures</h3></strong>
                        </div>
                        
                        <div className="ui segment">
                            <p>In this class you will learn camera basics as we explain how to use your camera correctly and take better pictures. It's easy, fun and the best way to start learning.</p>
                        </div>

                    </div>
                </div>
                
                <div>
                    <div className="ui stacked segments">

                        <div className="ui segment">
                        <strong><h1>Intermediate</h1></strong>     
                        </div>

                        <div className="ui segment">
                            <strong><h3>Intermediate Photography: Beyond Basics</h3></strong>
                        </div>
                        
                        <div className="ui segment">
                            <p>You will dive deeper into photography building your skills, personal style and your own photography portfolio.</p>
                        </div>
                        
                    </div>
                </div>

                <div>
                    <div className="ui stacked segments">

                        <div className="ui segment">
                        <strong><h1>Advanced</h1></strong>
                        </div>

                        <div className="ui segment">
                        <strong><h3>Advanced Photography: Don't "take" photos, "make" photos</h3></strong>
                        </div>
                        
                        <div className="ui segment">
                            <p>Explore our advanced level class you will learn how to control every detail of your photographs while shooting and editing.</p>
                        </div>
                        
                    </div>
                </div>

            </div>
        )
    }
}

export default ClassList;
