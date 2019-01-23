// Implement the delete class button
// Fix class.model to remove based on date and title
// In class.service will call classModel.deleteClass(title, date)

import React, { Component } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import { Message } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import { classTitleOptions } from '../../utils/ClassTitleOptions';
import { classProficiencyOptions } from '../../utils/ClassProficiencyOptions';
import { classDescriptionOptions } from '../../utils/ClassDescriptionOptions';

class ClassCalendar extends Component {
  state = {
    user: {},
    errors: {},
    classes: [],
    title: "",
    description: "",
    proficiency: "",
    date: "",
    viewDate: new Date(),
    showClassInput: false,
    isLoggedIn: false,
    hasRegistered: []
  };

  classTitleOptions = classTitleOptions;

  classProficiencyOptions = classProficiencyOptions;

  classDescriptionOptions = classDescriptionOptions;

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  componentDidMount = async () => {
    const date = formatDateString(new Date());
    let res = await axios.get(`/api/class/date?date=${date}`);
    this.setState({
      classes: res.data
    });

    let user = await this.props.isLoggedIn();
    if (user.data) {
      this.setState({
        isLoggedIn: true,
        user: user.data,
        hasRegistered: user.data.classes
      });
    }
  };

  onCalendarChange = async date => {
    const dateString = formatDateString(date);

    let res = await axios.get(`/api/class/date?date=${dateString}`);
    this.setState({
      classes: res.data,
      errors: {}
    });
  };

  createClass = async e => {
    e.preventDefault();

    this.setState({
      errors: {}
    });

    const { title, description, proficiency, date } = this.state;

    // error checking if course already exists on this date
    let res = await axios.get(`/api/class?title=${title}&date=${date}`);
    if (!res.data) {
      if (title && description && proficiency && date) {
        const course = {
          title,
          description,
          proficiency,
          date
        };

        let res = await axios.post(`/api/class`, course);
        this.setState({
          classes: [...this.state.classes, res.data]
        });
        this.showClassInput(false);
      } else {
        // empty input fields
        this.showClassInput(false);
        this.setState({
          errors: {
            emptyField: "Please populate the inputs with class information"
          }
        });
        return;
      }
    } else {
      this.showClassInput(false);
      this.setState({
        errors: {
          classPresent: "That course has already been created for that day"
        }
      });
      return;
    }
  };

  deleteClass = async course => {
    const { _id } = course;
    await axios.delete("/api/class", { data: { _id } });
    this.setState({
      classes: this.state.classes.filter(course => course._id !== _id)
    });
  };

  onClassInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  showClassInput = bool => {
    this.setState({
      showClassInput: bool
    });
  };

  onRegisterClick = async (course) => {
    const { user } = this.state
    await this.setState({
      user: { ...user, classes: [...user.classes, course._id] },
      hasRegistered: [...this.state.hasRegistered, course._id]
    });
    axios.put('/api/user', this.state.user);
  }

  onDeregisterClick = async (course) => {
    const { user } = this.state;
    await this.setState({
      user: {
        ...user, classes: user.classes.filter(
          (currentCourse) => {
            return currentCourse !== course._id
          }
        )
      },
      hasRegistered: this.state.hasRegistered.filter(currentCourse => currentCourse !== course._id)
    });
    axios.put('/api/user', this.state.user);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="column" style={{ padding: "15px 5px 5px 5px" }}>
        <div
          style={{ fontSize: "50px" }}
          className="ui grey center aligned huge header"
        >
        <img
              src="https://image.shutterstock.com/display_pic_with_logo/179108744/718542784/stock-vector-initial-logo-letter-og-with-shield-and-crown-icon-golden-color-isolated-on-black-background-718542784.jpg"
              style={{ width: "6%" }}
              className="w3-round"
            />
          Original Graphics
          <img
              src="https://image.shutterstock.com/display_pic_with_logo/179108744/718542784/stock-vector-initial-logo-letter-og-with-shield-and-crown-icon-golden-color-isolated-on-black-background-718542784.jpg"
              style={{ width: "6%" }}
              className="w3-round"
            />
        </div>

        <div>
          <div className="ui padded vertical center aligned segment">
            <h1 style={{ fontSize: "40px" }} className="ui header">
              Class Calendar
              <div className="ui sub header">
                Click on any date to view the classes on that day!
              </div>
            </h1>
          </div>

          <div className="ui container grid">
            <aside className="five wide column">
              <img
                className="ui image"
                alt="boka of camera"
                src="http://blog.dcccd.edu/wp-content/uploads/2017/11/photography-classes-in-dallas-780x390.jpg"
              />
            </aside>
            <aside className="five wide column">
              <img
                className="ui image"
                alt="camera options"
                src="https://www.adobe.com/content/dam/acom/en/products/creativecloud/training/the-photography-starter-kit-for-beginners_800.jpg"
              />
            </aside>
            <aside className="five wide column">
              <img
                className="ui image"
                alt="videography against sunset"
                src="https://talk.dallasmakerspace.org/uploads/default/original/4/c/4cd6d7f05c8afc0c5b530b80560688353ac736e8.jpg"
              />
            </aside>
          </div>

          <div className="ui grid segment container">
            <div className="sixteen wide column">
              {this.state.showClassInput ? (
                <div>
                  <div style={{ paddingBottom: "10px" }} className="ui form">
                    <div
                      onClick={this.createClass}
                      className="ui large teal button"
                    >
                      Submit
                    </div>
                    <div
                      onClick={this.showClassInput.bind(this, false)}
                      className="ui large red button"
                    >
                      Cancel
                    </div>
                    <div className="ui stacked segment">
                      <div className="three fields">
                        <div className="ten wide field">
                          <select
                            name="title"
                            onChange={this.onClassInputChange}
                          >
                            <option hidden>Class Title</option>
                            {this.classTitleOptions.map((option, i) => (
                              <option key={i}>{option}</option>
                            ))}
                          </select>
                        </div>

                        <div className="three wide field">
                          <select
                            name="proficiency"
                            onChange={this.onClassInputChange}
                          >
                            <option hidden>Class Proficiency</option>
                            {this.classProficiencyOptions.map((option, i) => (
                              <option key={i}>{option}</option>
                            ))}
                          </select>
                        </div>

                        <div className="three wide field">
                          <DateInput
                            name="date"
                            placeholder="Date"
                            value={this.state.date}
                            iconPosition="left"
                            onChange={this.handleChange}
                            autoComplete="off"
                          />
                        </div>
                      </div>

                      <select
                        name="description"
                        onChange={this.onClassInputChange}
                      >
                        <option hidden>Class Description</option>
                        {this.classDescriptionOptions.map((option, i) => (
                          <option key={i}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              ) : (
                  <div style={{ paddingBottom: "10px" }}>
                    <div
                      onClick={this.showClassInput.bind(this, true)}
                      className="ui large teal button"
                    >
                      Create Class
                  </div>
                  </div>
                )}

              <Calendar
                onChange={this.onCalendarChange}
                value={this.state.viewDate}
              />

              {errors.emptyField && (
                <Message
                  size="large"
                  attached
                  negative
                  content={errors.emptyField}
                />
              )}

              {errors.classPresent && (
                <Message
                  size="large"
                  attached
                  negative
                  content={errors.classPresent}
                />
              )}

              {this.state.classes.map(course => {
                return (
                  <div className="ui segment container" key={course._id}>
                    <h1 className="ui header">{course.title}</h1>
                    <h3>{course.proficiency}</h3>
                    <div className="ui message">
                      <p>{course.description}</p>
                    </div>
                    {this.state.isLoggedIn ? (
                      <div className="ui stackable two buttons">
                        {this.state.hasRegistered.includes(course._id) ?
                          (
                            <div onClick={this.onDeregisterClick.bind(null, course)} className='ui large red button'>Deregister for Class</div>
                          ) :
                          (<div onClick={this.onRegisterClick.bind(null, course)} className="ui large primary button">
                            Register for Class
                          </div>
                          )
                        }
                        {this.state.isLoggedIn && this.state.user.admin ? (
                          <div
                            onClick={this.deleteClass.bind(null, course)}
                            className="ui large red button"
                          >
                            Delete Class
                          </div>
                        ) : (
                            <div />
                          )}
                      </div>
                    ) : (
                        <div />
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

const formatDateString = date => {
  if (date.getMonth() < 10) {
    return `${date.getDate()}-0${date.getMonth() + 1}-${date.getFullYear()}`;
  } else {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  }
};

export default ClassCalendar;
