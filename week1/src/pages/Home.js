import React, { Component } from "react";
import App from "../App";
import Title from "../component/Title";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      title: "TatvaSoft Industrial Project",
      description:
        "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique totam et dolor quasi officiis impedit, facilis dolorum in eaque tenetur!",
    };
  }
  render() {
    return (
      <div>
        {this.state.clicked ? (
          <App />
        ) : (
          <div>
            <Title
              index="1"
              title={this.state.title}
              desc={this.state.description}
            />

            <button
              onClick={() => {
                this.setState({
                  clicked: true,
                });
              }}
            >
              Home
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
