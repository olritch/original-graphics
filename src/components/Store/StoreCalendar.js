import React, { Component } from 'react';
import { Dropdown } from "semantic-ui-react";

class StoreCalendar extends Component {
    calendarTypeOptions = [
        {
            key: "wall-calendar",
            value: "Wall-calendar",
            text: "Wall-calendar" 

        }
    ]
    render() {
        return (

            <div className="column" style={{ padding: '15px 5px 5px 5px' }}>
                <div style={{fontSize: '50px'}} className="ui grey center aligned huge header">
                    Original Graphics
                </div>
                <div>StoreCalender</div>
            </div>
        );
      }
      }

export default StoreCalendar;
