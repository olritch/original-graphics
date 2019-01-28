import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

class StorePoster extends Component {
  posterFrameColorOptions = [
    {
      key: "hand-finished-natural-oak",
      value: "Hand-finshed natural oak",
      text: "Hand-finished natural oak"
    },
    {
      key: "hand-finished-black",
      value: "Hand-finshed black",
      text: "Hand-finished black"
    },
    {
      key: "satin-black",
      value: "Satin black",
      text: "Satin black"
    },
    {
      key: "satin-white",
      value: "Satin-white",
      text: "Satin white"
    },
    {
      key: "hand-finished-grey",
      value: "Hand-finshed grey",
      text: "Hand-finished grey"
    }
  ];

  posterSizeOptions = [
    {
      key: "8 x 10",
      value: "8 x 10",
      text: "8 x 10"
    },
    {
      key: "12 x 16",
      value: "12 x 16",
      text: "12 x 16"
    },
    {
      key: "16 x 20",
      value: "16 x 20",
      text: "16 x 20"
    },
    {
      key: "18 x 24",
      value: "18 x 24",
      text: "18 x 24"
    },
    {
      key: "24 x 36",
      value: "24 x 36",
      text: "24 x 36"
    }
  ];

  posterFrameStyleOptions = [
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

  posterMountOptions = [
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
            Poster Options
          </h1>
        </div>

        <div>
          <div className="ui large images">
            <img
              className="ui image"
              alt="poster options"
              src="https://patentearth-misc.s3.amazonaws.com/images/print-sizes-5x.jpg"
            />
          </div>
        </div>

        <div>
          <p>
            Please use the chart above to assist you in selecting the size/sizes
            of your poster.
          </p>
        </div>
        <div style={{ paddingBottom: "10px" }} className="ui form">
          <div className="field">
            <Dropdown
              placeholder="Color"
              fluid
              name="test"
              multiple
              selection
              options={this.posterFrameColorOptions}
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
              options={this.posterSizeOptions}
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
              options={this.posterFrameStyleOptions}
              onChange={this.onDropdownInputChange}
            />
          </div>
        </div>

        <div style={{ paddingBottom: "10px" }} className="ui form">
          <div className="field">
            <Dropdown
              placeholder="Mount (poster printed on rigid PVC board)"
              fluid
              name="test"
              multiple
              selection
              options={this.posterMountOptions}
              onChange={this.onDropdownInputChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default StorePoster;
