import React, { Component } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';

class ClassCalendar extends Component {

  state = {
    classes: [],
    date: new Date()
  }

  onChange = async date => {
    const dateString = formatDateString(date);
    console.log(dateString);

    let res = await axios.get(`/api/class?date=${dateString}`)
      console.log(res.data);
      this.setState({
        classes: res.data
      })
  }

  createClass = async () => {
    const course = {
      date: formatDateString(this.state.date)
    }
    let res = await axios.post(`/api/class`, course);
    console.log(res.data);
  }

  render() {
    return (
      <div className="ui center aligned container segment">
        <div onClick={this.createClass} className='ui button'>Create Class</div>
        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    )
  }
}

const formatDateString =(date) => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}

export default ClassCalendar;
