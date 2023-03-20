import React, { Component } from "react";
import CompB from "./CompB";

class CompA extends Component {
  render() {
    return (
      <div>
        <CompB />
      </div>
    );
  }
}

export default CompA;
