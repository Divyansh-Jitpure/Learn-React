// updater function = A function passed as an argument to setState() usually allow for safe updates based on the previous state used with multiple state updates and asynchronous functions good practice to use updater functions
// Ex. setYear( y => y + 1)

import { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  function increment() {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // uses the current state to calculate the NEXT state.
    // set functions do not trigger an update.
    //React batches togather state updates for performance reasons.
    // NEXT state becomes the CURRENT state after an update.

    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    // Takes the pending state to calculate NEXT state.
    // React puts your updater in a queue (waiting in line)
    // During the next render, it will call them in the same order

    // Note:: use the 1st letter of the usesate variable in update function it is the common convention
  }
  function decrement() {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default MyComponent;
