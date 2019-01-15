import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Blog extends Component {
  state = {
    author: "",
    content: "",
    comments: [],
  };

  componentDidMount = async () => {
    let res = await axios.get("/api/blog");
    this.setState({
      comments: res.data
    });
    console.log(this.state.comments);
  };

  createComment = async e => {
    e.preventDefault();

    const { author, content } = this.state;

    const comment = {
      author,
      content
    };

    let res = await axios.post(`/api/blog`, comment);
    console.log(res.data);
    this.setState({
      comments: [...this.state.comments, res.data],
      showBlogInput: false
    });
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="column" style={{ padding: "15px 5px 5px 5px" }}>
        <div
          style={{ fontSize: "50px" }}
          className="ui grey center aligned huge header"
        >
          Original Graphics
        </div>

        <div className="ui grid segment container">
          <div>
            <div style={{ paddingBottom: "10px" }}>
              <div className="ui text container form">
                <div className="field">
                  <textarea 
                    name='content'
                  />
                </div>
                <div className="ui fluid large teal button">Click Me!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
