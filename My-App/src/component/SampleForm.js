import React, { Component } from "react";
import "./Style.css";
class SampleForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      username: "",
      pass: "",
    };
  }

  emailHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  usernameHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  passHandler = (event) => {
    this.setState({
      pass: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    alert(
      `Email : ${this.state.email}\nUsername : ${this.state.username}\nPassword : ${this.state.pass}`
    );
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitHandler} className="sampleForm">
          <div className="emailDiv">
            {/* <label>Email : </label> */}
            <input
              className="email"
              value={this.state.email}
              onChange={this.emailHandler}
              placeholder="Email"
            ></input>
          </div>
          <div className="usernameDiv">
            {/* <label>Username : </label> */}
            <input
              className="user"
              value={this.state.username}
              onChange={this.usernameHandler}
              placeholder="Username"
            ></input>
          </div>
          <div className="passDiv">
            {/* <label>Password : </label> */}
            <input
              className="pass"
              value={this.state.pass}
              onChange={this.passHandler}
              placeholder="Password"
            ></input>
          </div>
          <button className="submitButton" type="submit">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default SampleForm;
