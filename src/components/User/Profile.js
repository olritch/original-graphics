import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import axios from "axios";

function formatDate(date) {
  return date.substring(0, 4);
}

class Profile extends Component {
  state = {
    user: {
      dateCreated: "",
      classes: []
    },
    showInfo: '',
    isLoggedIn: false
  };

  options = [
    {
      key: "food-photography",
      value: "food-photography",
      text: "Food Photography"
    },
    {
      key: "nature-photography",
      value: "nature-photography",
      text: "Nature Photography"
    },
    {
      key: "landscape-photography",
      value: "landscape-photography",
      text: "Landscape Photography"
    },
    {
      key: "wedding-photography",
      value: "wedding-photography",
      text: "Wedding Photography"
    },
    {
      key: "aerial-photography",
      value: "aerial-photography",
      text: "Aerial Photography"
    },
    {
      key: "family-photography",
      value: "family-photography",
      text: "Family Photography"
    },
    {
      key: "pet-photography",
      value: "pet-photography",
      text: "Pet Photography"
    },
    { key: "videography", value: "videography", text: "Videography" },
    { key: "photoshop", value: "photoshop", text: "Photoshop" }
  ];

  componentDidMount = async () => {
    let user = await this.props.isLoggedIn();
    if (user.data) {
      this.setState({
        user: user.data,
        isLoggedIn: true
      });
    } else {
      this.props.history.push("/");
    }

    let userClasses = await axios.get(
      `/api/userClasses?uid=${this.state.user._id}`
    );
    this.setState({
      user: userClasses.data
    });
  };

  onInfoClick = (e) => {
    this.setState({
      showInfo: e.target.id
    })
  }

  render() {
    // console.log(this.state.user)
    const {
      firstName,
      lastName,
      bio,
      email,
      telephone,
      classes,
      dateCreated
    } = this.state.user;

    return (
      <div>
        <div className="column" style={{ padding: "15px 5px 75px 5px" }}>
          <div
            style={{ fontSize: "50px" }}
            className="ui grey center aligned huge header"
          >
            Original Graphics
          </div>
        </div>

        <div className="ui container stackable centered three column grid">
          <div className="four wide column">
            <div className="ui blue card">
              <div className="image">
                <img
                  src="https://cdt.org/files/2015/10/2015-10-06-FB-person.png"
                  alt="default male user with no provided icon"
                />
              </div>
              <div className="content">
                <div className="header">
                  {firstName} {lastName}
                </div>
                <div className="meta">
                  <span className="date">
                    Joined in {formatDate(dateCreated)}
                  </span>
                </div>
                <div className="description">
                  <div>
                    <i
                      style={{ marginRight: "20px" }}
                      className="envelope icon"
                    />
                    {email}
                  </div>
                </div>
                <div className="description">
                  <div>
                    <i style={{ marginRight: "20px" }} className="phone icon" />
                    {telephone}
                  </div>
                </div>
                <div className="description">
                  <div>
                    <i
                      style={{ marginRight: "20px" }}
                      className="info circle icon"
                    />
                    {bio}
                  </div>
                </div>
              </div>
            </div>
            <div className="ui divider" />
            <div className="ui vertical buttons">
              <button
                style={{ width: "290px", marginBottom: "10px" }}
                className="ui large inverted blue button"
              >
                <i className="calendar alternate icon" />
                My Events
              </button>
              <button
                style={{ width: "290px", marginBottom: "10px" }}
                className="ui large inverted blue button"
              >
                <i className="camera icon" />
                My Photos
              </button>
            </div>
            <div className="ui divider" />
            <div className="ui segment">
              <div className="ui header">My Interests</div>
              <Dropdown
                placeholder="Interests"
                fluid
                multiple
                selection
                options={this.options}
              />
            </div>
            <div className="ui divider" />
          </div>
          <div className="six wide column">
            <div className="ui segment">
              <div className="ui header">My Reminders</div>
              <div
                style={{ paddingBottom: "15px" }}
                className="ui fluid input focus"
              >
                <input type="text" placeholder="I need to..." />
              </div>
              <button className="ui labeled icon button">
                <i className="pencil icon" /> Post
              </button>
            </div>
          </div>
          <div className="six wide column">
            <div className="ui segment">
              <div
                style={{ paddingBottom: "10px" }}
                className="ui center aligned header"
              >
                Upcoming Classes:
              </div>
              {classes.map((course, i) => {
                return (
                  <div className="ui segment" key={i}>
                    <div className="ui small center aligned header">
                      <strong>{course.title}</strong>
                    </div>
                    <div style={{textAlign: 'center'}}><strong>{course.proficiency}</strong></div>
                    <div
                      style={{ paddingBottom: "25px", textAlign: 'center' }}
                    >
                      <strong>{course.date}</strong>
                    </div>
                    {this.state.showInfo === course._id ? 
                    (
                      <div className='ui container'>{course.description}</div>
                    ) 
                    : 
                    (
                      <button id={course._id} onClick={this.onInfoClick.bind(this)} className='ui large fluid grey button'>Info</button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
