import React, { Component } from "react";
import Title from "./Title";

class List extends Component {
  render() {
    var list = [
      {
        id: 0,
        title: "TatvaSoft Industrial Project",
        description:
          "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique totam et dolor quasi officiis impedit!",
      },
      {
        id: 1,
        title: "Industrial Project for Sem-6 Students",
        description:
          "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique totam et dolor quasi officiis impedit!",
      },
      {
        id: 2,
        title: "Internship from TatvaSoft",
        description:
          "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique totam et dolor quasi officiis impedit!",
      },
      {
        id: 3,
        title: "Ecommerse Website Project for TatvaSoft",
        description:
          "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique totam et dolor quasi officiis impedit!",
      },
    ];

    var listItems = list.map((x) => (
      <Title key={x.title} title={x.title} desc={x.description} index={x.id} />
    ));
    return <div>{listItems}</div>;
  }
}

export default List;
