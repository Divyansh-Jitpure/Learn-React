import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <main>
      <h1>Counter</h1>
      <span className="countLable">{count}</span>
      <section>
        <button onClick={decrement}>Decrease</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increase</button>
      </section>
    </main>
  );
}

export default Counter;
