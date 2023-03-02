import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }
  Inc = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    return (
      <div>
        <h1> Counter : {this.state.number}</h1>
        <button onClick={this.Inc}> Click Me </button>
      </div>
    );
  }
}

export default Counter;
