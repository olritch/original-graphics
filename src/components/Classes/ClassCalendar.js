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
      // <div className="ui container segment">
      //   {this.state.showClassInput ?
      //     <div>
      //       <div onClick={this.createClass} className="ui right floated large teal button">
      //         Submit
      //       </div>
      //       <div onClick={this.showClassInput.bind(this, false)} className="ui right floated large red button">
      //         Cancel
      //       </div>
      //     </div> : <div onClick={this.showClassInput.bind(this, true)} className="ui right floated large teal button">
      //       Create Class
      //     </div>}
      //   <Calendar onChange={this.onChange} value={this.state.date} />
      // </div>
      <div className='ui grid segment container'>
        <div className='six wide column'>
          <Calendar onChange={this.onChange} value={this.state.date} />
        </div>

        <div className='ten wide column'>

          {this.state.showClassInput ?

          <div>

          <div className='ui form'>
            <div onClick={this.createClass} className="ui large teal button">
                Submit
            </div>
            <div onClick={this.showClassInput.bind(this, false)} className="ui large red button">
              Cancel
            </div>
            <div className='ui stacked segment'>
              <div className='field'>
                <input type='text' placeholder='Title' name='title'/>
              </div>
              <div className='field'>
                <input type='text' placeholder='Proficiency' name='proficiency' />
              </div>
              <div className='field'>
                <input type='text' placeholder='Date' name='date' />
              </div>
              <textarea placeholder='Description' rows='4'></textarea>
            </div>
          </div>

          </div> :

          <div onClick={this.showClassInput.bind(this, true)} className="ui fluid large teal button">
              Create Class
          </div>
          }

        </div>

      </div>
    )
  }
}

const formatDateString =(date) => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}

export default ClassCalendar;
