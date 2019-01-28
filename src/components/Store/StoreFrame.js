import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

class StoreFrame extends Component {
  frameColorOptions = [
    {
      key: "hand-finished-natural-oak",
      value: "Hand-finished natural oak",
      text: "Hand-finished natural oak"
    },
    {
      key: "hand-finished-black",
      value: "Hand-finished black",
      text: "Hand-finished black"
    },
    {
      key: "hand-finished-grey",
      value: "Hand-finished grey",
      text: "Hand-finished grey"
    },
    {
      key: "satin-white",
      value: "Satin white",
      text: "Satin white"
    },
    {
      key: "satin-black",
      value: "Satin black",
      text: "Satin black"
    }
  ];

  frameSizeOptions = [
    {
      key: "5 x 7",
      value: "5 x 7",
      text: "5 x 7"
    },
    {
      key: "8 x 10",
      value: "8 x 10",
      text: "8 x 10"
    },
    {
      key: "8.5 x 11",
      value: "8.5 x 11",
      text: "8.5 x 11"
    },
    {
      key: "11 x 14",
      value: "11 x 14",
      text: "11 x 14"
    },
    {
      key: "16 x 20",
      value: "16 x 20",
      text: "16 x 20"
    }
  ];

  frameStyleOptions = [
    {
      key: "slim",
      value: "Slim",
      text: "Slim"
    },
    {
      key: "medium",
      value: "Medium",
      text: "Medium"
    },
    {
      key: "wide",
      value: "Wide",
      text: "Wide"
    }
  ];

  frameMountOptions = [
    {
      key: "yes",
      value: "Yes",
      text: "Yes"
    },
    {
      key: "no",
      value: "No",
      text: "No"
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
        <div style={{ paddingBottom: "10px" }} className="ui form">
          <div className="field">
            <Dropdown
              placeholder="Color"
              fluid
              name="test"
              multiple
              selection
              options={this.frameColorOptions}
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
              options={this.frameSizeOptions}
              onChange={this.onDropdownInputChange}
            />
          </div>
        </div>

        <div style={{ paddingBottom: "10px" }} className="ui form">
          <div className="field">
            <Dropdown
              placeholder="Style"
              fluid
              name="test"
              multiple
              selection
              options={this.frameStyleOptions}
              onChange={this.onDropdownInputChange}
            />
          </div>
        </div>

        <div style={{ paddingBottom: "10px" }} className="ui form">
          <div className="field">
            <Dropdown
              placeholder="Mount"
              fluid
              name="test"
              multiple
              selection
              options={this.frameMountOptions}
              onChange={this.onDropdownInputChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default StoreFrame;
