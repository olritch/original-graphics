// If have time, implement a friends list for user based on people they took the class with

import React, { Component } from "react";
import { Dropdown, Message } from "semantic-ui-react";
import axios from "axios";

function formatDate(date) {
  return date.substring(0, 4);
}

class Profile extends Component {
  state = {
    user: {
      dateCreated: "",
      classes: [],
      interests: []
    },
    showInfo: "",
    interests: [],
    errors: {},
    isLoggedIn: false,
    newInterests: []
  };

  options = [
    {
      key: "food-photography",
      value: "Food Photography",
      text: "Food Photography"
    },
    {
      key: "nature-photography",
      value: "Nature Photography",
      text: "Nature Photography"
    },
    {
      key: "landscape-photography",
      value: "Landscape Photography",
      text: "Landscape Photography"
    },
    {
      key: "wedding-photography",
      value: "Wedding Photography",
      text: "Wedding Photography"
    },
    {
      key: "aerial-photography",
      value: "Aerial Photography",
      text: "Aerial Photography"
    },
    {
      key: "family-photography",
      value: "Family Photography",
      text: "Family Photography"
    },
    {
      key: "pet-photography",
      value: "Pet Photography",
      text: "Pet Photography"
    },
    {
      key: "videography",
      value: "Videography",
      text: "Videography"
    },
    {
      key: "photoshop",
      value: "Photoshop",
      text: "Photoshop"
    }
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
      user: userClasses.data,
      interests: userClasses.data.interests
    });
  };

  onInfoClick = e => {
    this.setState({
      showInfo: e.target.id
    });
  };

  onDropdownInputChange = async (e, data) => {
    this.setState({
      errors: {},
      newInterests: data.value
    });

    await axios.put(
      `/api/interests/add?uid=${this.state.user._id}&interests=${
        data.value.slice(-1)[0]
      }`
    );

    if (!this.state.interests.includes(data.value.slice(-1)[0])) {
      this.setState({
        interests: [...this.state.interests, data.value.slice(-1)[0]]
      });
      return;
    }

    this.setState({
      errors: { interestExist: "You've already added this interest." },
      newInterests: []
    });
  };

  addInterest = () => {
    let user = { ...this.state.user };
    user.interests = this.state.interests;
    this.setState({
      user,
      newInterests: []
    });
  };

  deleteInterest = async currentInterest => {
    let user = { ...this.state.user };
    user.interests = this.state.user.interests.filter(
      interest => interest !== currentInterest
    );

    await axios.put(
      `/api/interests/remove?uid=${user._id}&interests=${
      currentInterest
      }`
    )

    this.setState({
      user,
      interests: user.interests
    });
  };

  addReminder = async () => {};

  deleteReminder = async () => {};

  render() {
    const { firstName, lastName, bio, email, telephone, classes, dateCreated } = this.state.user;

    const { errors } = this.state;

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
                style={{ width: "210px", marginBottom: "10px" }}
                className="ui large inverted blue button"
              >
                <i className="calendar alternate icon" />
                My Events
              </button>
              <button
                style={{ width: "210px", marginBottom: "10px" }}
                className="ui large inverted blue button"
              >
                <i className="camera icon" />
                My Photos
              </button>
            </div>
            <div className="ui divider" />
            <div className="ui segment">
              <div className="ui header">My Interests</div>
              {errors.interestExist && (
                <Message
                  size="small"
                  attached
                  negative
                  content={errors.interestExist}
                />
              )}
              <form style={{ paddingBottom: "10px" }} className="ui form">
                <div className="field">
                  <Dropdown
                    placeholder="Interests"
                    fluid
                    name="test"
                    multiple
                    selection
                    options={this.options}
                    onChange={this.onDropdownInputChange}
                    value={this.state.newInterests}
                  />
                </div>
                <div
                  onClick={this.addInterest}
                  style={{ width: "150px" }}
                  className="ui inverted blue button"
                >
                  Add
                </div>
              </form>

              {this.state.user.interests.map((interest, i) => (
                <div
                  style={{ marginBottom: "10px", marginRight: "5px" }}
                  className="ui large label"
                  key={i}
                >
                  {interest}
                  <i
                    onClick={this.deleteInterest.bind(this, interest)}
                    className="red delete icon"
                  />
                </div>
              ))}
            </div>

            <div className="ui divider" />
          </div>
          <div className="seven wide column">
            <div className="ui segment">
              <div className="ui header">My Reminders</div>
              <div
                style={{ paddingBottom: "15px" }}
                className="ui fluid input focus"
              >
                <input type="text" placeholder="I need to..." />
              </div>
              <button
                onClick={this.addReminder}
                className="ui labeled icon button"
              >
                <i className="pencil icon" /> Post
              </button>
            </div>
            <div className="ui segment">
              <div className="ui large header center aligned">
                Our Recommended Blogs and Articles Based on Your Interests
              </div>
              {this.state.user.interests.length ? (
                <div />
              ) : (
                <Message
                  size="small"
                  attached
                  negative
                  content="Please update your interests to see our recommended list"
                />
              )}
            </div>
          </div>
          <div className="five wide column">
            <div style={{ marginBottom: "10px" }} className="ui segment">
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
                      <span>
                        <strong>{course.title}</strong>
                      </span>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <strong>{course.proficiency}</strong>
                    </div>
                    <div style={{ paddingBottom: "25px", textAlign: "center" }}>
                      <strong>{course.date}</strong>
                    </div>
                    {this.state.showInfo === course._id ? (
                      <div className="ui container">{course.description}</div>
                    ) : (
                      <button
                        id={course._id}
                        onClick={this.onInfoClick.bind(this)}
                        className="ui large fluid blue basic button"
                      >
                        Info
                      </button>
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
