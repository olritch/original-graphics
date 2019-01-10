import React, { Component } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';

class ClassCalendar extends Component {
  state = {
    classes: [],
    title: '',
    description: '',
    proficiency: '',
    date: '',
    viewDate: new Date(),
    showClassInput: false
  }

  onCalendarChange = async date => {
    const dateString = formatDateString(date)
    console.log(dateString)

    let res = await axios.get(`/api/class?date=${dateString}`)
    this.setState({
      classes: res.data
    })
    console.log(this.state.classes)
  }

  createClass = async () => {
    const course = {
      date: formatDateString(this.state.date)
    }
    let res = await axios.post(`/api/class`, course)
    console.log(res.data)
  }

  showClassInput = bool => {
    this.setState({
      showClassInput: bool
    })
  }

  onClassInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="ui grid segment container">
        <div className="sixteen wide column">
          {this.state.showClassInput ? (
            <div>
              <div className="ui form">
                <div
                  onClick={this.createClass}
                  className="ui large teal button">
                  Submit
                </div>
                <div
                  onClick={this.showClassInput.bind(this, false)}
                  className="ui large red button">
                  Cancel
                </div>
                <div className="ui stacked segment">
                  <div className="field">
                    <input
                      onChange={this.onClassInputChange}
                      type="text"
                      placeholder="Title"
                      name="title" />
                  </div>
                  <div className="field">
                    <input
                      onChange={this.onClassInputChange}
                      type="text"
                      placeholder="Proficiency"
                      name="proficiency"
                    />
                  </div>
                  <div className="field">
                    <input
                      onChange={this.onClassInputChange}
                      type="text"
                      placeholder="Date"
                      name="date" />
                  </div>
                  <textarea
                    onChange={this.onClassInputChange}
                    name='description'
                    placeholder="Description"
                    rows="4" />
                </div>
              </div>
            </div>
          ) : (
            <div style={{ paddingBottom: '10px' }}>
              <div
                onClick={this.showClassInput.bind(this, true)}
                className="ui large teal button">
                Create Class
              </div>
            </div>
          )}

          <Calendar
            onChange={this.onCalendarChange}
            value={this.state.viewDate}
          />
        </div>
      </div>
    )
  }
}

const formatDateString =(date) => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}

export default ClassCalendar;
