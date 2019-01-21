// If have time, implement a friends list for user based on people they took the class with

import React, { Component } from 'react'
import axios from 'axios'
import Unsplash, { toJson } from 'unsplash-js'
import { Dropdown, Message } from 'semantic-ui-react'
import { interestOptions } from '../../utils/InterestOptions'
import { API_KEY } from '../../apis/unplash/Unsplash'

// Unsplash API
const unsplash = new Unsplash({
  applicationId: API_KEY.applicationId,
  secret: API_KEY.secret,
  callbackUrl: API_KEY.callbackUrl
})

function formatDate(date) {
  return date.substring(0, 4)
}

function formatDescription(description) {
  return description
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substr(1))
    .join(' ')
}

class Profile extends Component {
  state = {
    user: {
      dateCreated: '',
      classes: [],
      interests: []
    },
    showInfo: '',
    description: '',
    interests: [],
    errors: {},
    reminderErrors: {},
    isLoggedIn: false,
    newInterests: [],
    interestInfo: []
  }

  options = interestOptions

  componentDidMount = async () => {
    let user = await this.props.isLoggedIn()
    if (user.data) {
      this.setState({
        user: user.data,
        isLoggedIn: true
      })
    } else {
      this.props.history.push('/')
    }

    let userInfo = await axios.get(
      `/api/userClasses?uid=${this.state.user._id}`
    )

    this.setState({
      user: userInfo.data,
      interests: userInfo.data.interests
    })

    this.state.user.interests.map(interest => this.getInterestsInfo(interest))
  }

  getInterestsInfo = interest => {
    unsplash.search
      .photos(interest, 1, 2)
      .then(toJson)
      .then(json => {
        const photos = json.results
        photos.map(photo => {
          photo.type = interest
          this.setState({
            interestInfo: [photo, ...this.state.interestInfo]
          })
        })
      })
  }

  onInfoClick = e => {
    this.setState({
      showInfo: e.target.id
    })
  }

  onDropdownInputChange = async (e, data) => {
    this.setState({
      errors: {},
      newInterests: data.value
    })

    await axios.put(
      `/api/interests/add?uid=${this.state.user._id}&interests=${
        data.value.slice(-1)[0]
      }`
    )

    if (!this.state.interests.includes(data.value.slice(-1)[0])) {
      this.setState({
        interests: [...this.state.interests, data.value.slice(-1)[0]]
      })
      return
    }

    this.setState({
      errors: { interestExist: "You've already added this interest." },
      newInterests: []
    })
  }

  addInterest = async () => {
    let user = { ...this.state.user }
    user.interests = this.state.interests

    await this.state.newInterests.map(newInterest =>
      this.getInterestsInfo(newInterest)
    )

    this.setState({
      user,
      newInterests: []
    })
  }

  deleteInterest = async currentInterest => {
    let user = { ...this.state.user }
    user.interests = this.state.user.interests.filter(
      interest => interest !== currentInterest
    )

    await axios.put(
      `/api/interests/remove?uid=${user._id}&interests=${currentInterest}`
    )

    let interestInfo = this.state.interestInfo.filter(
      interest => interest.type !== currentInterest
    )

    this.setState({
      user,
      interests: user.interests,
      interestInfo
    })
  }

  clearAllInterests = async () => {
    let user = { ...this.state.user }
    user.interests = []
    let interestInfo = []
    let interests = []

    await axios.put(`/api/interests/clearAll?uid=${user._id}`)

    this.setState({
      user,
      interestInfo,
      interests
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addReminder = async e => {
    e.preventDefault();

    // Set up errors if there is no description
    this.setState({
      reminderErrors: {}
    });

    const { description } = this.state;

    const reminder = {
      description
    };

    let res = await axios.post(`/api/user/reminder`, reminder);
    console.log(res);
  }

  deleteReminder = async () => {}

  clearAllReminders = async () => {}

  render() {
    const {
      firstName,
      lastName,
      bio,
      email,
      telephone,
      classes,
      dateCreated
    } = this.state.user

    const { errors } = this.state

    return (
      <div>
        <div className="column" style={{ padding: '15px 5px 75px 5px' }}>
          <div
            style={{ fontSize: '50px' }}
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
                      style={{ marginRight: '20px' }}
                      className="envelope icon"
                    />
                    {email}
                  </div>
                </div>
                <div className="description">
                  <div>
                    <i style={{ marginRight: '20px' }} className="phone icon" />
                    {telephone}
                  </div>
                </div>
                <div className="description">
                  <div>
                    <i
                      style={{ marginRight: '20px' }}
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
                style={{ width: '210px', marginBottom: '10px' }}
                className="ui large inverted blue button"
              >
                <i className="calendar alternate icon" />
                My Events
              </button>
              <button
                style={{ width: '210px', marginBottom: '10px' }}
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
              <form style={{ paddingBottom: '10px' }} className="ui form">
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
                  style={{ width: '150px' }}
                  className="ui inverted blue button"
                >
                  Add
                </div>
              </form>

              {this.state.user.interests.map((interest, i) => (
                <div
                  style={{ marginBottom: '10px', marginRight: '5px' }}
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
                style={{ paddingBottom: '5px' }}
                className="ui fluid input focus"
              >
                <input onChange={this.onChange} name='description' type="text" placeholder="I need to..." />
              </div>
              <button
                onClick={this.addReminder}
                className="ui large labeled icon button"
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
                        By {interest.user.first_name}{' '}
                      </div>{' '}
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
            <div style={{ marginBottom: '10px' }} className="ui segment">
              <div
                style={{ paddingBottom: '10px' }}
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
                    <div style={{ textAlign: 'center' }}>
                      <strong>{course.proficiency}</strong>
                    </div>
                    <div style={{ paddingBottom: '25px', textAlign: 'center' }}>
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
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
