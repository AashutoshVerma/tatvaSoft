import React, { Component } from "react";

export class RenderPropsComponent extends Component {
  render() {
    return <div>{this.props.render()}</div>;
  }
}

export default RenderPropsComponent;
