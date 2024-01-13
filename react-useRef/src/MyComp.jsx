import React, { useEffect, useRef, useState } from "react";

// useState() = Re-renders the component when the state value changes

// useRef()   = Does not cause re-renders when its value changes. When you want a component to "remember" some info, but you don't want that info to trigger new renders
//              1. Accessing/Interacting with DOM elements
//              2. Handling Focus, Animations, and Transitions
//              3. Managing Timers and Intervals

function MyComp() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
  });

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "yellow";
  }
  return (
    <>
      <button onClick={handleClick1}>Click me 1!</button>
      <input ref={inputRef1} />

      <button onClick={handleClick2}>Click me 2!</button>
      <input ref={inputRef2} />

      <button onClick={handleClick3}>Click me 3!</button>
      <input ref={inputRef3} />
    </>
  );
}
// function MyComp() {
//   //   let [num, setNum] = useState(0);
//   const inputRef = useRef(null);

//   useEffect(() => {
//     console.log("COMP RENDER");
//   });

//   function handleClick() {
//     // setNum((n) => n + 1);
//     // ref.current++;
//     // console.log(ref.current);
//     inputRef.current.focus();
//     inputRef.current.style.backgroundColor = "red";
//   }

//   return (
//     <>
//       <button onClick={handleClick}>Click me!</button>
//       <input type="text" ref={inputRef} />
//     </>
//   );
// }

export default MyComp;
