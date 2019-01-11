import React, { Component } from 'react'
import axios from 'axios';

class Profile extends Component {

    componentDidMount = async () => {
        // await axios.get()
    }

    render() {
        console.log(this.props.location.state.user)
        return <div>Profile</div>
    }
}

export default Profile;
