// useEffect() - React Hook that tells React to DO THIS CODE WHEN(pick one):
//               This component re-renders
//               This component mounts
//               The state of a value changes

// Mounting a component means creating and appending it to the DOM

// useEffect(function, [dependencies])

// 1. useEffect(() => {})           Runs after every re-render
// 2. useEffect(() => {}, [])       Runs only on mount
// 3. useEffect(() => {}, [value])  Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import { useEffect, useState } from "react";
import MyComponent from "./MyComponent.jsx";

function App() {
  // const [count, setCount] = useState(0);
  // const [color, setColor] = useState("green");

  // useEffect(() => {
  //   document.title = `Count: ${count} ${color}`;

  //   return () => {
  //     // SOME CLEANUP CODE
  //   };
  // }, [count, color]);

  // function addCount() {
  //   setCount((c) => c + 1);
  // }
  // function subtractCount() {
  //   setCount((c) => c - 1);
  // }
  // function changeColor() {
  //   setColor((c) => (c === "green" ? "red" : "green"));
  // }

  return (
    <>
      {/* <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <br />
      <button onClick={changeColor}>Change color</button> */}
      <MyComponent />
    </>
  );
}

export default App;
