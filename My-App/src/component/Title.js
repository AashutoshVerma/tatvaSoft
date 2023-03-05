import React from "react";
import "./Style.css";
function Title(props) {
  return (
    <div className="titleContainer">
      <h2 className="title">
        {props.index + 1}. This is title {props.title}.
      </h2>
      <p className="description"> Here is the Description : {props.desc}</p>
    </div>
  );
}

export default Title;
