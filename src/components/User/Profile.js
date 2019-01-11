import React, { Component } from 'react'

class Profile extends Component {

    render() {
        const { firstName, lastName, bio, email, telephone } = this.props.location.state.user

        return ( 
          <div className="column" style={{ padding: '15px 5px 5px 5px' }}>
            <div style={{fontSize: '50px'}} className="ui grey center aligned huge header">
                Original Graphics
            </div>
            <div>
                {firstName}
            </div>
            </div>
        )
    }
}

export default Profile;
