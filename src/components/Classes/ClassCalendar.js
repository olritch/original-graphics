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

    let res = await axios.get(`/api/class?date=${dateString}`)
    this.setState({
      classes: res.data
    })
    // console.log(this.state.classes)
  }

  createClass = async e => {
    e.preventDefault();

    const { title, description, proficiency, date } = this.state;

    const course = {
      title,
      description,
      proficiency,
      date
    }

    await axios.post(`/api/class`, course)
    
    this.showClassInput(false);
  }

  onClassInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  showClassInput = bool => {
    this.setState({
      showClassInput: bool
    })
  }

  render() {
    return (
      <div className="ui grid segment container">
        <div className="sixteen wide column">
          {this.state.showClassInput ? (
            <div>
              <div style={{paddingBottom: '10px'}} className="ui form">
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

                  <div className='inline fields'>

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

                  </div>

                  <textarea
                    onChange={this.onClassInputChange}
                    name='description'
                    placeholder="Description"
                    rows="2" />
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

          {
            this.state.classes.map(course => {
              return (
                <div className='ui segment container' key={course._id}>
                  <h1 className='ui header'>{course.title}</h1>
                  <h3>{course.proficiency}</h3>
                  <div className='ui message'><p>{course.description}</p></div>
                  <div className='ui large red button'>Register for Class</div>
                </div>
              )
            })
          }

        </div>
      </div>
    )
  }
}

const formatDateString = (date) => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}

export default ClassCalendar;
