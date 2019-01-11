import React, { Component } from 'react'

class Profile extends Component {

    render() {
        const { firstName, lastName, bio, email, telephone } = this.props.location.state.user

        return ( 
            <div>

            </div>
        )
    }
}

export default Profile;
