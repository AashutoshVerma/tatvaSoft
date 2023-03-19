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
import RenderPropsComponent from "./component/RenderPropsComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <RenderPropsComponent
            render={() => {
              return <h3>Hello I am coming from Rendered Props.</h3>;
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
