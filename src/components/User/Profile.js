import React, { Component } from 'react'

class Profile extends Component {
    state = {
        user: {},
        isLoggedIn: false
    }

    componentDidMount = async () => {
        let user = await this.props.isLoggedIn();
        if (user.data) {
            this.setState({
                user: user.data,
                isLoggedIn: true
            })
        } else {
            this.props.history.push('/')
        }
    }

    render() {
        const { firstName, lastName, bio, email, telephone } = this.state.user

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
