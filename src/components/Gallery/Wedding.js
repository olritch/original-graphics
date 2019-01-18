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
            alt="wedding fun"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcoVOep2vynDDX18Bi60hI_uu74X0RVXMpWLoEexacGGXxCl1VXw"
          />
        </div>

        <div
          className="ui medium images
        "
        >
          <img
            className="ui image"
            alt="the couple landscape"
            src="http://www.webdesignjoy.com/wp-content/uploads/2017/09/wedding-Photography-17.jpg"
          />
        </div>

        <div
          className="ui medium images
"
        >
          <img
            className="ui image"
            alt="blushing bride"
            src="https://media-api.xogrp.com/images/609cc936-26c5-4a64-a4d9-3983adfe8a22~rs_400.300.fit"
          />
        </div>

        <div
          className="ui medium images
        "
        >
          <img
            className="ui image"
            alt="the bride and maids"
            src="https://0.dkphoto.ie/wp-content/uploads/2018/08/stress-free-weddingss.jpg"
          />
        </div>

        <div
          className="ui medium images
        "
        >
          <img
            className="ui image"
            alt="bride with baby breath"
            src="http://tcartermusic.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/u/n/untitledmp_1.jpg"
          />
        </div>
      </div>
    );
  }
}

export default Wedding;
