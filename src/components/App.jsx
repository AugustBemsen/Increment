import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  let state = "";
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="container">
      <p>{state}</p>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default App;
