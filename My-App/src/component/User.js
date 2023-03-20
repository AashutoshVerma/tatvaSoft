import React, { Component } from "react";
import axios from "axios";
import UserDetail from "./UserDetail";
import { UserConsumer } from "./UserContext";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((responses) => {
        this.setState({ users: responses.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { users } = this.state;
    return users.length ? <UserDetail data={users} /> : null;
  }
}

export default User;
