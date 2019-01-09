import React, { Component } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';

class ClassCalendar extends Component {
  state = {
    date: new Date()
  }

  onChange = date => {
    this.setState({
      date
    })
    console.log(date);
  }

  render() {
    return (
      <div className="ui center aligned container segment">
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    )
  }
}

export default ClassCalendar;
