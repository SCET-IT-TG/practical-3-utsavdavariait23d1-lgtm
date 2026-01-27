import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Counter</h3>
      <button style={{ backgroundColor: "red" }} onClick={() => setCount(count - 1)}>Decrement</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button style={{ backgroundColor: "green" }} onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;