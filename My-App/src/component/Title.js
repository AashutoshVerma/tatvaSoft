import React from "react";

function Title(props) {
  return (
    <div>
      <h2> This is title {props.title}.</h2>
      <p> Here is the Description : {props.desc}</p>
    </div>
  );
}

export default Title;
