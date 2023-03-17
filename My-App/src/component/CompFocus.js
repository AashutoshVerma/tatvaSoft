import React, { Component } from "react";
import InputRef from "./InputRef";

class CompFocus extends Component {
  constructor() {
    super();

    this.compRef = React.createRef();
  }

  clickHandler = () => {
    this.compRef.current.focusInput();
  };
  render() {
    return (
      <div>
        <InputRef ref={this.compRef} />
        <button onClick={this.clickHandler}>Focus</button>
      </div>
    );
  }
}

export default CompFocus;
