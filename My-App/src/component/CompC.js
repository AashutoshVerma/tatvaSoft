import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

export class CompC extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <h2> Hello from {username}</h2>;
        }}
      </UserConsumer>
    );
  }
}

export default CompC;
