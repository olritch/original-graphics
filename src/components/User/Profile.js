// If have time, implement a friends list for user based on people they took the class with

import React, { Component } from "react";
import axios from "axios";
import Unsplash, { toJson } from "unsplash-js";
import { Dropdown, Message } from "semantic-ui-react";

// NewsAPI
// const API_KEY = "5170a50ca07541dc9d39bfa2df0564f1";
// const baseURL =
//   "https://newsapi.org/v2/everything?" +
//   "pageSize=2&" +
//   "sortBy=relevancy&" +
//   "apiKey=" +
//   API_KEY +
//   "&" +
//   "q=+";

// Unsplash API
const unsplash = new Unsplash({
  applicationId:
    "448df5c63ad4abd2633e2f7b430dda63f0108e1befdb9da26f764875fe848c07",
  secret: "598dc741c4d713658f81a9184b11cae4cade89223787a5125e59960944666146",
  callbackUrl: "http://web-maker-ht.herokuapp.com/"
});

function formatDate(date) {
  return date.substring(0, 4);
}

function formatDescription(description) {
  return description
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.substr(1))
    .join(" ");
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
    newInterests: [],
    interestInfo: []
  };

  options = [
    {
      key: "nature-photography",
      value: "Nature",
      text: "Nature"
    },
    {
      key: "landscape-photography",
      value: "Landscape",
      text: "Landscape"
    },
    {
      key: "wedding-photography",
      value: "Wedding",
      text: "Wedding"
    },
    {
      key: "aerial-photography",
      value: "Aerial",
      text: "Aerial"
    },
    {
      key: "family-photography",
      value: "Family",
      text: "Family"
    },
    {
      key: "pet-photography",
      value: "Pet",
      text: "Pet"
    },
    {
      key: "night-photography",
      value: "Night",
      text: "Night"
    },
    {
      key: "sport-photography",
      value: "Sport",
      text: "Sport"
    },
    {
      key: "fashion-photography",
      value: "Fashion",
      text: "Fashion"
    },
    {
      key: "street-photography",
      value: "Street",
      text: "Street"
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

    let userInfo = await axios.get(
      `/api/userClasses?uid=${this.state.user._id}`
    );

    this.setState({
      user: userInfo.data,
      interests: userInfo.data.interests
    });

    this.state.user.interests.map(interest => this.getInterestsInfo(interest));
  };

  getInterestsInfo = interest => {
    unsplash.search
      .photos(interest, 1, 2)
      .then(toJson)
      .then(json => {
        const photos = json.results;
        photos.map(photo => {
          photo.type = interest;
          this.setState({
            interestInfo: [photo, ...this.state.interestInfo]
          });
        });
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

  addInterest = async () => {
    let user = { ...this.state.user };
    user.interests = this.state.interests;

    await this.state.newInterests.map(newInterest =>
      this.getInterestsInfo(newInterest)
    );

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
      `/api/interests/remove?uid=${user._id}&interests=${currentInterest}`
    );

    let interestInfo = this.state.interestInfo.filter(
      interest => interest.type !== currentInterest
    );

    this.setState({
      user,
      interests: user.interests,
      interestInfo
    });
  };

  clearAllInterests = async () => {
    let user = {...this.state.user};
    user.interests = [];
    let interestInfo = [];
    let interests = [];

    await axios.put(
      `/api/interests/clearAll?uid=${user._id}`
    );
    
    this.setState({
      user,
      interestInfo,
      interests
    })
  };

  addReminder = async () => {};

  deleteReminder = async () => {};

  clearAllReminders = async () => {};

  render() {
    console.log(this.state.interestInfo);
    const {
      firstName,
      lastName,
      bio,
      email,
      telephone,
      classes,
      dateCreated
    } = this.state.user;

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
              {this.state.user.interests.length > 1 ? (
                <div
                  onClick={this.clearAllInterests}
                  className="ui mini inverted red button"
                >
                  Clear All
                </div>
              ) : (
                <span />
              )}
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
                Inspirational Photos Based on Your Selected Interests
              </div>
              {this.state.user.interests.length ? (
                this.state.interestInfo.map((interest, i) => (
                  <a
                    key={i}
                    href={interest.links.html}
                    alt={interest.description}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="ui segment">
                      <img
                        className="ui fluid rounded image"
                        alt={interest.description}
                        src={interest.urls.small}
                      />
                      <div className="ui medium header">
                        {interest.description === null ? (
                          <span />
                        ) : (
                          <span>{formatDescription(interest.description)}</span>
                        )}
                      </div>
                      <div className="ui red tiny header">
                        By {interest.user.first_name}{" "}
                      </div>{" "}
                      <span>Published {formatDate(interest.created_at)}</span>
                    </div>
                  </a>
                ))
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
