import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Title from "./component/Title";
import React, { Component, useState } from "react";
import Counter from "./component/Counter";
import { click } from "@testing-library/user-event/dist/click";
import About from "./pages/About";

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
          {this.state.clicked ? (
            <Home />
          ) : (
            <div>
              <h1>
                Welcome User, This site is build during the TatvaSoft Industrial
                Project Training.
              </h1>
              <button
                onClick={() => {
                  this.setState({
                    clicked: true,
                  });
                }}
              >
                {" "}
                About
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
