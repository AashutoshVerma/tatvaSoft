import React, { useState } from "react";

function CounterHooks() {
  var initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment Counter Value
      </button>
    </div>
  );
}

export default CounterHooks;
