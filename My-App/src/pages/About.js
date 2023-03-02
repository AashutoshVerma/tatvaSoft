import React, { Component } from "react";
import Title from "../component/Title";

export class About extends Component {
  constructor() {
    super();

    this.state = {
      title: "Industrial Project for Sem-6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dicta, eveniet distinctio doloremque cum deserunt pariatur debitis, blanditiis ipsum odit voluptas praesentium? Labore odio tempora at fuga? Veniam, alias consequatur.",
    };
  }
  render() {
    return <Title title={this.state.title} desc={this.state.description} />;
  }
}

export default About;
