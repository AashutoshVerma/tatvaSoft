import React, { Component } from "react";
import axios from "axios";
export class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      userId: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.title, this.state.body, this.state.userId);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="loginContainer">
        <form className="form" onSubmit={this.submitHandler}>
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            onChange={this.changeHandler}
          ></input>
          <input
            type="text"
            name="body"
            placeholder="Enter Body"
            onChange={this.changeHandler}
          ></input>
          <input
            type="text"
            name="userId"
            placeholder="Enter UserId"
            onChange={this.changeHandler}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Post;
