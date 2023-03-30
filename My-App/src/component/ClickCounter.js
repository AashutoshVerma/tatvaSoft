import React, { useEffect, useState } from "react";
import Display from "./Display";

function ClickCounter() {
  const [click, setClick] = useState(0);
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const [display, setDisplay] = useState(true);
  const mouseMovement = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  const displayToggle = (display) => {
    setDisplay(display);
  };
  useEffect(() => {
    console.log("Use Effect Called");
    window.addEventListener("mousemove", mouseMovement);

    return () => {};
  }, []);
  return (
    <div>
      <button onClick={displayToggle(!display)}> Toggle Display</button>
      {display && <Display />}
    </div>
  );
}

export default ClickCounter;
