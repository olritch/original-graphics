import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

class StoreCalendar extends Component {
  calendarTypeOptions = [
    {
      key: "wall-calendar",
      value: "Wall-calendar",
      text: "Wall Calendar"
    },
    {
      key: "poster-calendar",
      value: "Poster-calendar",
      text: "Poster Calendar"
    },
    {
      Key: "magenetic-calendar",
      value: "Magnetic-calndar",
      text: "Magnetic Calendar"
    },
    {
      key: "card-calendar",
      value: "Card-calendar",
      text: "Card Calendar"
    }
  ];

  calendarSizeOptions = [
    {
      key: "small",
      value: "Small",
      text: "Small"
    },
    {
      key: "medium",
      value: "Medium",
      text: "Medium"
    },
    {
      key: "large",
      value: "Large",
      text: "Large"
    }
  ];

  calendarThemeOptions = [
    {
      key: "new-year",
      value: "New-Year",
      text: "New Year"
    },
    {
      key: "easter",
      value: "Easter",
      text: "Easter"
    },
    {
      key: "halloween",
      value: "Halloween",
      text: "Halloween"
    },
    {
      key: "thanksgiving",
      value: "Thanksgiving",
      text: "Thanksgiving"
    },
    {
      key: "christmas",
      value: "Christmas",
      text: "Christmas"
    }
  ];

  render() {
    return (
      <div className="column" style={{ padding: "15px 5px 5px 5px" }}>
        <div
          style={{ fontSize: "50px" }}
          className="ui grey center aligned huge header"
        >
          Original Graphics
        </div>

        <div className="ui vertical center aligned segment">
          <h1 style={{ fontSize: "40px" }} className="ui header">
            Calendar Options
          </h1>
        </div>

        <div>
          <div className="ui large images">
            <img className="ui image" alt="poster options" src="" />
          </div>
        </div>

        <div style={{ paddingBottom: "10px" }} className="ui form">
          <div className="field">
            <Dropdown
              placeholder="Type"
              fluid
              name="test"
              multiple
              selection
              options={this.calendarTypeOptions}
              onChange={this.onDropdownInputChange}
            />
          </div>
        </div>

        <div style={{ paddingBottom: "10px" }} className="ui form">
          <div className="field">
            <Dropdown
              placeholder="Size"
              fluid
              name="test"
              multiple
              selection
              options={this.calendarSizeOptions}
              onChange={this.onDropdownInputChange}
            />
          </div>
        </div>

        <div style={{ paddingBottom: "10px" }} className="ui form">
          <div className="field">
            <Dropdown
              placeholder="Theme"
              fluid
              name="test"
              multiple
              selection
              options={this.calendarThemeOptions}
              onChange={this.onDropdownInputChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default StoreCalendar;
