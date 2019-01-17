import React, { Component } from "react";

class Wedding extends Component {
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
            Wedding
          </h1>
        </div>
        <div>
          <div className="ui medium images">
            <img
              className="ui image"
              alt="the big day"
              src="https://cdn.essensedesigns.com/wp-content/uploads/2018/05/D2457-1-530x845.jpg"
            />
          </div>
        </div>

        <div className="ui medium images">
          <img
            className="ui image"
            alt="true love"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL4BzgIgpOg93-cRpvxJT823-JQuj5GpUpJKAHbUkIxM8j_6fd"
          />
        </div>

        <div
          className="ui medium images
        "
        >
          <img
            className="ui image"
            alt="the only one"
            src="http://www.webdesignjoy.com/wp-content/uploads/2017/09/wedding-Photography-17.jpg"
          />
        </div>
      </div>
    );
  }
}

export default Wedding;
