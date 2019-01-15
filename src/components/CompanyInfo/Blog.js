import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { format } from "util";

class Blog extends Component {
  state = {
    author: "",
    content: "",
    comments: []
  };

  componentDidMount = async () => {
    let res = await axios.get("/api/blog");
    this.setState({
      comments: res.data
    });
    // console.log(this.state.comments);
    let user = await this.props.isLoggedIn();
    if (user.data) {
      this.setState({
        author: `${user.data.firstName} ${user.data.lastName}`
      });
    } else if (user.data === 0) {
      this.setState({
        author: 'Anonymous'
      })
    }
  };

  createComment = async e => {
    e.preventDefault();

    const { author, content } = this.state;

    const comment = {
      author,
      content
    };

    let res = await axios.post(`/api/blog`, comment);
    // console.log(res.data);
    this.setState({
      comments: [res.data, ...this.state.comments],
    });
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  deleteComment = async course => {
    // console.log(course)
    const { _id } = course;
    await axios.delete("/api/blog", { data: { _id } });
    this.setState({
      comments: this.state.comments.filter(comment => comment._id !== _id)
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

        <div className="ui padded vertical center aligned segment">
          <h1 style={{ fontSize: "40px" }} className="ui header">
            Blog List
          </h1>
        </div>

        <div className="ui grid segment container">
          <div>
            <div style={{ paddingBottom: "10px" }}>
              <div className="ui text container form">
                <div className="field">
                  <textarea onChange={this.onInputChange} name="content" />
                </div>
                <div
                  onClick={this.createComment}
                  className="ui fluid large teal button"
                >
                  Comment
                </div>
              </div>

              {this.state.comments.map(comment => {
                return (
                  <div className="comment" key={comment._id}>
                    <div className="content">
                      <Link to="/" className="author">
                        {comment.author}
                      </Link>
                      <div className="metadata">
                        <span className="date">{formatDate(comment.dateCreated)}</span>
                      </div>
                      <div className="text">{comment.content}</div>
                      <div className="actions">
                        <button className="ui small basic button reply">
                          Reply
                        </button>
                        <div
                          onClick={this.deleteComment.bind(null, comment)}
                          className="ui mini red basic button"
                        >
                          Delete
                        </div>
                      </div>
                    </div>
                    <div className="ui divider" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function formatDate(timeNow) {
  timeNow = new Date();
  let hours   = timeNow.getHours();
  let minutes = timeNow.getMinutes();
  let timeString = "" + ((hours > 12) ? hours - 12 : hours);
  timeString  += ((minutes < 10) ? ":0" : ":") + minutes;
  timeString  += (hours >= 12) ? " P.M." : " A.M.";
  return `${new Date().toDateString()} ${timeString}`
}

export default Blog;
