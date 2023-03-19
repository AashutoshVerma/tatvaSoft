import React, { Component } from "react";

const HOC = (HocComponent, data) => {
  console.log(data);
  return (props) => <HocComponent {...props} {...data} />;
};

export default HOC;
