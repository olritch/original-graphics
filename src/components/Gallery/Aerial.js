import React, { Component } from 'react';

class Aerial extends Component {
    render() {
        return (

            <div className="column" style={{ padding: '15px 5px 5px 5px' }}>
        <div style={{fontSize: '50px'}} className="ui grey center aligned huge header">
          Original Graphics
        </div>
            <div className="ui vertical center aligned segment">
          <h1 style={{ fontSize: "40px" }} className="ui header">
            Aerial
          </h1>
        </div>

        <div>
          <div class="ui medium images">
         
            <img
              className="ui image"
              alt="family"
              src="https://cdn.onlyinyourstate.com/wp-content/uploads/2017/08/aer2.jpg"
            />
          </div>
        </div>

        <div className="ui medium images">
          <img
            className="ui image"
            alt="over the cape"
            src="https://fedora.digitalcommonwealth.org/fedora/objects/commonwealth:kh04mj288/datastreams/access800/content"
          />
        </div>

        <div className="ui medium images">
          <img
            className="ui image"
            alt="maine"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wObhyRvZHzpTJvUN1Cdp_LBQh_Y9IwXWu8TmZKnYZLYqBMt5bg"
          />
        </div>
      </div>
    
        );
    }
}

export default Aerial;
