import React from "react";

function Title(props) {
  return (
    <div>
      <h1> This is title {props.title}.</h1>
      <h2> Here is the Description : {props.desc}</h2>
    </div>
  );
}

export default Title;
