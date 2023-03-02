import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Title from "./component/Title";
import React, { Component, useState } from "react";
import Counter from "./component/Counter";
import { click } from "@testing-library/user-event/dist/click";
import About from "./pages/About";
import List from "./component/List";

class App extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <List />
        </div>
      </div>
    );
  }
}

export default App;
