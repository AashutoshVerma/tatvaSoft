import React, { Component } from "react";
import CompC from "./CompC";

class CompB extends Component {
  render() {
    return (
      <div>
        <CompC />
      </div>
    );
  }
}

export default CompB;
