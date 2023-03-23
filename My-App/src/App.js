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
import { UserProvider } from "./component/UserContext";
import CompA from "./component/CompA";
import User from "./component/User";
import Post from "./component/Post";
import CounterHooks from "./component/CounterHooks";
import LoginForm from "./component/LoginForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <LoginForm /> */}
          <User />
        </div>
      </div>
    );
  }
}

export default App;
