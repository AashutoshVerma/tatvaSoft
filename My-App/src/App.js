import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Title from "./component/Title";
import React, { Component, useState } from "react";
import Counter from "./component/Counter";
import { click } from "@testing-library/user-event/dist/click";
import About from "./pages/About";
import List from "./component/List";
import SampleForm from "./component/SampleForm";
import CompFocus from "./component/CompFocus";
import UserList from "./component/UserList";
import HOC from "./component/HOC";

const UserData = [
  {
    id: 1,
    name: "Aashutosh",
  },
  {
    id: 2,
    name: "Uttam",
  },
  {
    id: 3,
    name: "Divyesh",
  },
  {
    id: 4,
    name: "Chatur",
  },
];

const Users = HOC(UserList, { users: UserData });

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <CompFocus /> */}
          <h1> List of Users</h1>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
