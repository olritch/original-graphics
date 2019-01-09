import React, { Component } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';

class ClassCalendar extends Component {

  state = {
    classes: [],
    date: new Date(),
    showClassInput: false
  }

  onChange = async date => {
    const dateString = formatDateString(date);
    console.log(dateString);

    let res = await axios.get(`/api/class?date=${dateString}`)
      this.setState({
        classes: res.data
      })
      console.log(this.state.classes);
  }

  createClass = async () => {
    const course = {
      date: formatDateString(this.state.date)
    }
    let res = await axios.post(`/api/class`, course);
    console.log(res.data);
  }

  showClassInput = (bool) => {
    this.setState({
      showClassInput: bool
    });
  }

  render() {
    return (
      <div className="ui container segment">
        {this.state.showClassInput ?
          <div>
            <div onClick={this.showClassInput.bind(this, false)} className='ui right floated large red button'>
              Cancel
            </div>
            <div onClick={this.createClass} className='ui right floated large teal button'>
                Submit
            </div>
          </div> :
          <div onClick={this.showClassInput.bind(this, true)} className='ui right floated large teal button'>
            Create Class
          </div>}
        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    )
  }
}

const formatDateString =(date) => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}

export default ClassCalendar;
