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

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <CompFocus />
        </div>
      </div>
    );
  }
}

export default App;
