import React, { Component } from 'react'

class Profile extends Component {

    render() {
        const { firstName, lastName, bio, email, telephone } = this.props.location.state.user

        return ( 
            <div>
                {firstName}
            </div>
        )
    }
}

export default Profile;
