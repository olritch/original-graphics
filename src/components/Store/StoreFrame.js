import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

  class StoreFrame extends Component {

  frameOptions = [
    {
      key: "choice-1",
      value: "Choice 1",
      text: "Choice 1"
    },
    {
      key: "choice-2",
      value: "Choice 2",
      text: "Choice 2"
    },
    {
      key: "choice-3",
      value: "Choice 3",
      text: "Choice 3"
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
            Picture Frame Options
          </h1>
        </div>
        <div>
          <div className="ui large images">
            <img
              className="ui image"
              alt="frame options"
              src="https://3.bp.blogspot.com/-Gcs5-tXif0k/VeTt30iVsCI/AAAAAAAAE8Y/ZBULPrU6cPQ/s320/Common-Picture-Frame-Graphic.jpg"
            />
          </div>
        </div>
        <div style={{ paddingBottom: '10px' }} className="ui form">
                <div className="field">
                  <Dropdown
                    placeholder="test"
                    fluid
                    name="test"
                    multiple
                    selection
                    options={this.frameOptions}
                    onChange={this.onDropdownInputChange}                
        />
      </div>
      </div>
      </div>
    );
  }
  }

export default StoreFrame;
