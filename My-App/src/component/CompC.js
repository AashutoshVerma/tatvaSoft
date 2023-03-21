import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

export class CompC extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <h2x> Hello from {username}</h2x>;
        }}
      </UserConsumer>
    );
  }
}

export default CompC;
